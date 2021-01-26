import {useState, useEffect, useContext} from 'react'

import Link from "next/link";
import Head from "next/head";
import Visualizer from "../components/Visualizer";
import Login from "../components/Login";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import cookie from 'cookie'


const Index = () => {
  const router = useRouter()
  const [accessCookie, setAccessCookie] = useCookies(["a"])
  const [refreshCookie, setRefreshCookie] = useCookies(['b'])
  useEffect(async () => {
    console.log(router.query);

    // await fetch('/api/setAccessToken', {
    //   method: 'POST',
    //   'Content-Type': 'application/json',
    //   body: JSON.stringify({cookie: router.query.access_token})
    // })
    
    // await fetch('/api/setRefreshToken', {
    //   method: 'POST',
    //   'Content-Type': 'application/json',
    //   body: JSON.stringify({cookie: router.query.refresh_token})
    // })

  }, [router])
	return (
		<div className="app">
			<Head>
				<title>Chromesthetics</title>
				<link rel="icon" href="/favicon.ico" type="image/x-icon" />
			</Head>
			<main className="main">
				<Login />
				<Visualizer />
			</main>
		</div>
	);
};

export default Index;
