import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { Inter } from "next/font/google";
import { useStateContext } from "@/components/HBOprovider";
import Login from "@/components/UI/Login/Login";
import { useRouter } from "next/router";
import MainLayout from "@/components/layouts/MainLayout";
import FeaturedMedia from "@/components/UI/FeaturedMedia/FeaturedMedia";
import AuthCheck from "@/components/AuthCheck";
import MediaRow from "@/components/UI/MediaRow/MediaRow";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  const globalState = useStateContext();
  const router = useRouter();
  useEffect(() => {}, []);

  return AuthCheck(
    <>
      <MainLayout>
        <FeaturedMedia />
        <MediaRow
          title="Movies"
          type="large-v"
          endpoint="discover/movie?sort_by=popularity.desc&primary_release_year=2023"
        />
        <MediaRow
          title="Series"
          type="small-h"
          endpoint="discover/tv?sort_by=popularity.desc"
        />
        <MediaRow
          title="Action"
          type="small-v"
          endpoint="discover/movie?with_genres=28&primary_release_year=2023"
        />
        <MediaRow
          title="Horror"
          type="large-h"
          endpoint="discover/movie?with_genres=27&primary_release_year=2023"
        />
        <MediaRow
          title="SciFi"
          type="small-v"
          endpoint="discover/movie?with_genres=878&primary_release_year=2023"
        />
        <MediaRow
          title="Animations"
          type="small-v"
          endpoint="discover/movie?with_genres=16&primary_release_year=2023"
        />
      </MainLayout>
      
    </>
  );
}
