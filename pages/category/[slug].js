import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";
import withAuth from "@/firebase/withAuth";
import Loader from "@/components/Loader";

const maxResult = 4;

const Category = ({ category, products, slug }) => {
  const [pageIndex, setPageIndex] = useState(1);
  const { query } = useRouter();

  useEffect(() => {
    setPageIndex(1);
  }, [query]);

  const { data, error, isLoading } = useSWR(
    `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=${pageIndex}&pagination[pageSize]=${maxResult}`,
    fetchDataFromApi,
    { fallbackData: products }
  );

  return (
    <div className="w-full md:py-20 relative">
      <Wrapper>
        <div className="flex items-center gap-2 md:text-base text-sm md:mt-0 mt-3 mb-10 cursor-default">
          <Link className="hover:underline" href="/">
            Home
          </Link>
          /<span>{category?.data?.[0]?.attributes?.name}</span>
        </div>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-2xl md:text-3xl mb-3 font-semibold leading-tight">
            {category?.data?.[0]?.attributes?.name}
          </div>
        </div>

        {/* ---------------------------------------------- product grid start ---------------------------------------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:my-14 my-8">
          {data?.data?.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
        {/* ----------------------- product grid end ----------------------- */}

        {/* PAGINATION BUTTONS START */}
        {data?.meta?.pagination?.total > maxResult && (
          <div className="flex gap-3 items-center justify-center my-16 md:my-0">
            <button
              className={`rounded-full py-2 px-5 bg-[#00a34f] text-white disabled:bg-gray-200 disabled:text-gray-500`}
              disabled={pageIndex === 1}
              onClick={() => setPageIndex(pageIndex - 1)}
            >
              Previous
            </button>

            <span className="font-bold">{`${pageIndex} of ${
              data && data.meta.pagination.pageCount
            }`}</span>

            <button
              className={`rounded-full py-2 px-5 bg-[#00a34f] text-white disabled:bg-gray-200 disabled:text-gray-500`}
              disabled={pageIndex === (data && data.meta.pagination.pageCount)}
              onClick={() => setPageIndex(pageIndex + 1)}
            >
              Next
            </button>
          </div>
        )}
        {/* PAGINATION BUTTONS END */}
        {isLoading && <Loader />}
      </Wrapper>
    </div>
  );
};

export default withAuth(Category);

export async function getStaticPaths() {
  const category = await fetchDataFromApi("/api/categories?populate=*");

  const paths = category?.data?.map((c) => ({
    params: {
      slug: c.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const category = await fetchDataFromApi(
    `/api/categories?filters[slug][$eq]=${slug}`
  );
  const products = await fetchDataFromApi(
    `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=1&pagination[pageSize]=${maxResult}`
  );

  return {
    props: {
      category,
      products,
      slug,
    },
  };
}
