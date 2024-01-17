import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import MainLayout from "@/components/layouts/MainLayout";
import FeaturedMedia from "@/components/UI/FeaturedMedia/FeaturedMedia";
import MediaRow from "@/components/UI/MediaRow/MediaRow";
import CastInfo from "@/components/UI/CastInfo/CastInfo";
import AuthCheck from "@/components/AuthCheck";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function SingleMediaPage(props) {
  const router = useRouter();
  const [mediaData, setMediaData] = useState(false);

  console.log(props);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.query.id}?api_key=6d1dcfd285874d37cf4305319bf0609e&language=en`
      )
      .then(function (response) {
        setMediaData(response.data);
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return AuthCheck(
    <>
      <MainLayout>
        <FeaturedMedia
          title={mediaData.original_title}
          mediaUrl={`https://image.tmdb.org/t/p/w1280${mediaData.backdrop_path}`}
          type="single"
          location="In theaters and on HBO MAX. Streaming through May 23."
          linkUrl="/movies/id"
        />
        <MediaRow title="More like this" type="small-v" />
        <CastInfo />
      </MainLayout>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { query: context.query },
  };
}
