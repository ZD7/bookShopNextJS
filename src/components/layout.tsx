import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { AppRootStoreType } from "../store/store";
import { LoginModal } from "../components/login_modal";
import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { IBookInCart } from "../types/types";

export default function Layout({ children, title = "Next App" }) {
  const auth = useAuth();

  const router = useRouter();

  const isLogin = useSelector<AppRootStoreType, boolean>(
    (state) => state.auth.isLogin
  );

  const booksInCart = useSelector<AppRootStoreType, IBookInCart[]>(
    (state) => state.cart.booksInCart
  );

  const [isOpenAuth, setIsOpenAuth] = useState(false);

  useEffect(() => {
    isLogin && isOpenAuth && router.push("/profile");
  }, [isLogin, isOpenAuth]);

  return (
    <>
      <Head>
        <title>{title} | BookShop</title>
        <meta name="keywords" content="nextjs, react, javasript, book shop" />
        <meta
          name="description"
          content="this is a web application for searching and purchasing books written using Next and React technologies"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Header>
          <Logo>Bookshop</Logo>
          <Ul>
            <Li>
              <Link href="/">books</Link>
            </Li>
            <Li>
              <Link href="/audiobooks">audiobooks</Link>
            </Li>
            <Li>
              <Link href="/portfolio">Stationery & gifts</Link>
            </Li>
            <Li>
              <Link href="/blog">blog</Link>
            </Li>
          </Ul>

          <RightBlock>
            {isLogin ? (
              <>
                <Link href={"/profile"}>
                  <svg
                    width="12"
                    height="15"
                    viewBox="0 0 12 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ cursor: "pointer" }}
                  >
                    <mask id="path-1-inside-1_1_428" fill="white">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 4C9 5.65685 7.65685 7 6 7C4.34315 7 3 5.65685 3 4C3 2.34315 4.34315 1 6 1C7.65685 1 9 2.34315 9 4ZM10 4C10 6.20914 8.20914 8 6 8C3.79086 8 2 6.20914 2 4C2 1.79086 3.79086 0 6 0C8.20914 0 10 1.79086 10 4ZM1 13C1 11.3431 2.34315 10 4 10H8C9.65685 10 11 11.3431 11 13V14H1V13ZM0 13C0 10.7909 1.79086 9 4 9H8C10.2091 9 12 10.7909 12 13V15H0V13Z"
                      />
                    </mask>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9 4C9 5.65685 7.65685 7 6 7C4.34315 7 3 5.65685 3 4C3 2.34315 4.34315 1 6 1C7.65685 1 9 2.34315 9 4ZM10 4C10 6.20914 8.20914 8 6 8C3.79086 8 2 6.20914 2 4C2 1.79086 3.79086 0 6 0C8.20914 0 10 1.79086 10 4ZM1 13C1 11.3431 2.34315 10 4 10H8C9.65685 10 11 11.3431 11 13V14H1V13ZM0 13C0 10.7909 1.79086 9 4 9H8C10.2091 9 12 10.7909 12 13V15H0V13Z"
                      fill="#1C2A39"
                    />
                    <path
                      d="M11 14V15H12V14H11ZM1 14H0V15H1V14ZM12 15V16H13V15H12ZM0 15H-1V16H0V15ZM6 8C8.20914 8 10 6.20914 10 4H8C8 5.10457 7.10457 6 6 6V8ZM2 4C2 6.20914 3.79086 8 6 8V6C4.89543 6 4 5.10457 4 4H2ZM6 0C3.79086 0 2 1.79086 2 4H4C4 2.89543 4.89543 2 6 2V0ZM10 4C10 1.79086 8.20914 0 6 0V2C7.10457 2 8 2.89543 8 4H10ZM6 9C8.76142 9 11 6.76142 11 4H9C9 5.65685 7.65685 7 6 7V9ZM1 4C1 6.76142 3.23858 9 6 9V7C4.34315 7 3 5.65685 3 4H1ZM6 -1C3.23858 -1 1 1.23858 1 4H3C3 2.34315 4.34315 1 6 1V-1ZM11 4C11 1.23858 8.76142 -1 6 -1V1C7.65685 1 9 2.34315 9 4H11ZM4 9C1.79086 9 0 10.7909 0 13H2C2 11.8954 2.89543 11 4 11V9ZM8 9H4V11H8V9ZM12 13C12 10.7909 10.2091 9 8 9V11C9.10457 11 10 11.8954 10 13H12ZM12 14V13H10V14H12ZM1 15H11V13H1V15ZM0 13V14H2V13H0ZM4 8C1.23858 8 -1 10.2386 -1 13H1C1 11.3431 2.34315 10 4 10V8ZM8 8H4V10H8V8ZM13 13C13 10.2386 10.7614 8 8 8V10C9.65685 10 11 11.3431 11 13H13ZM13 15V13H11V15H13ZM0 16H12V14H0V16ZM-1 13V15H1V13H-1Z"
                      fill="#1C2A39"
                      mask="url(#path-1-inside-1_1_428)"
                    />
                  </svg>
                </Link>
                <Link href="/cart">
                  <svg
                    width="14"
                    height="17"
                    viewBox="0 0 14 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ cursor: "pointer" }}
                  >
                    <mask id="path-1-inside-1_1_422" fill="white">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.00003 1H8.00003C9.1046 1 10 1.89543 10 3V5H4.00003V3C4.00003 1.89543 4.89546 1 6.00003 1ZM3.00003 5V3C3.00003 1.34315 4.34318 0 6.00003 0H8.00003C9.65689 0 11 1.34315 11 3V5H11.2162C12.2606 5 13.1292 5.80364 13.2102 6.84491L13.8324 14.8449C13.9228 16.0071 13.0041 17 11.8384 17H2.16162C0.995926 17 0.0772501 16.0071 0.167642 14.8449L0.789865 6.84491C0.870853 5.80364 1.73942 5 2.78384 5H3.00003ZM11 6H3.00003H2.78384C2.26163 6 1.82735 6.40182 1.78685 6.92245L1.16463 14.9225C1.11944 15.5035 1.57877 16 2.16162 16H11.8384C12.4213 16 12.8806 15.5035 12.8354 14.9225L12.2132 6.92246C12.1727 6.40182 11.7384 6 11.2162 6H11Z"
                      />
                    </mask>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.00003 1H8.00003C9.1046 1 10 1.89543 10 3V5H4.00003V3C4.00003 1.89543 4.89546 1 6.00003 1ZM3.00003 5V3C3.00003 1.34315 4.34318 0 6.00003 0H8.00003C9.65689 0 11 1.34315 11 3V5H11.2162C12.2606 5 13.1292 5.80364 13.2102 6.84491L13.8324 14.8449C13.9228 16.0071 13.0041 17 11.8384 17H2.16162C0.995926 17 0.0772501 16.0071 0.167642 14.8449L0.789865 6.84491C0.870853 5.80364 1.73942 5 2.78384 5H3.00003ZM11 6H3.00003H2.78384C2.26163 6 1.82735 6.40182 1.78685 6.92245L1.16463 14.9225C1.11944 15.5035 1.57877 16 2.16162 16H11.8384C12.4213 16 12.8806 15.5035 12.8354 14.9225L12.2132 6.92246C12.1727 6.40182 11.7384 6 11.2162 6H11Z"
                      fill="#1C2A39"
                    />
                    <path
                      d="M10 5V6H11V5H10ZM4.00003 5H3.00003V6H4.00003V5ZM3.00003 5V6H4.00003V5H3.00003ZM11 5H10V6H11V5ZM13.2102 6.84491L14.2072 6.76737L13.2102 6.84491ZM13.8324 14.8449L12.8354 14.9225L13.8324 14.8449ZM0.167642 14.8449L-0.829347 14.7674H-0.829347L0.167642 14.8449ZM0.789865 6.84491L-0.207124 6.76737L0.789865 6.84491ZM1.78685 6.92245L0.789865 6.84491L1.78685 6.92245ZM1.16463 14.9225L0.167642 14.8449H0.167642L1.16463 14.9225ZM12.8354 14.9225L11.8384 15V15L12.8354 14.9225ZM12.2132 6.92246L11.2162 7L12.2132 6.92246ZM8.00003 0H6.00003V2H8.00003V0ZM11 3C11 1.34315 9.65689 0 8.00003 0V2C8.55232 2 9.00003 2.44772 9.00003 3H11ZM11 5V3H9.00003V5H11ZM10 4H4.00003V6H10V4ZM3.00003 3V5H5.00003V3H3.00003ZM6.00003 0C4.34318 0 3.00003 1.34315 3.00003 3H5.00003C5.00003 2.44772 5.44775 2 6.00003 2V0ZM2.00003 3V5H4.00003V3H2.00003ZM6.00003 -1C3.79089 -1 2.00003 0.790861 2.00003 3H4.00003C4.00003 1.89543 4.89546 1 6.00003 1V-1ZM8.00003 -1H6.00003V1H8.00003V-1ZM12 3C12 0.790861 10.2092 -1 8.00003 -1V1C9.1046 1 10 1.89543 10 3H12ZM12 5V3H10V5H12ZM11.2162 4H11V6H11.2162V4ZM14.2072 6.76737C14.0857 5.20546 12.7828 4 11.2162 4V6C11.7384 6 12.1727 6.40182 12.2132 6.92246L14.2072 6.76737ZM14.8294 14.7674L14.2072 6.76737L12.2132 6.92246L12.8354 14.9225L14.8294 14.7674ZM11.8384 18C13.587 18 14.965 16.5106 14.8294 14.7674L12.8354 14.9225C12.8806 15.5035 12.4213 16 11.8384 16V18ZM2.16162 18H11.8384V16H2.16162V18ZM-0.829347 14.7674C-0.964935 16.5106 0.41308 18 2.16162 18V16C1.57877 16 1.11944 15.5035 1.16463 14.9225L-0.829347 14.7674ZM-0.207124 6.76737L-0.829347 14.7674L1.16463 14.9225L1.78685 6.92245L-0.207124 6.76737ZM2.78384 4C1.21721 4 -0.0856421 5.20545 -0.207124 6.76737L1.78685 6.92245C1.82735 6.40182 2.26163 6 2.78384 6V4ZM3.00003 4H2.78384V6H3.00003V4ZM11 5H3.00003V7H11V5ZM3.00003 5H2.78384V7H3.00003V5ZM2.78384 5C1.73942 5 0.870853 5.80364 0.789865 6.84491L2.78384 7L2.78384 7V5ZM0.789865 6.84491L0.167642 14.8449L2.16162 15L2.78384 7L0.789865 6.84491ZM0.167642 14.8449C0.0772504 16.0071 0.995926 17 2.16162 17V15H2.16162L0.167642 14.8449ZM2.16162 17H11.8384V15H2.16162V17ZM11.8384 17C13.0041 17 13.9228 16.0071 13.8324 14.8449L11.8384 15L11.8384 15V17ZM13.8324 14.8449L13.2102 6.84491L11.2162 7L11.8384 15L13.8324 14.8449ZM13.2102 6.84491C13.1292 5.80364 12.2606 5 11.2162 5V7H11.2162L13.2102 6.84491ZM11.2162 5H11V7H11.2162V5Z"
                      fill="#1C2A39"
                      mask="url(#path-1-inside-1_1_422)"
                    />
                  </svg>
                </Link>

                {!!booksInCart.length && (
                  <Link href="/cart">
                    <div className="numberOfBooks">{booksInCart.length}</div>
                  </Link>
                )}
              </>
            ) : (
              <>
                <button onClick={() => setIsOpenAuth(!isOpenAuth)}>
                  <svg
                    width="12"
                    height="15"
                    viewBox="0 0 12 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask id="path-1-inside-1_1_428" fill="white">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 4C9 5.65685 7.65685 7 6 7C4.34315 7 3 5.65685 3 4C3 2.34315 4.34315 1 6 1C7.65685 1 9 2.34315 9 4ZM10 4C10 6.20914 8.20914 8 6 8C3.79086 8 2 6.20914 2 4C2 1.79086 3.79086 0 6 0C8.20914 0 10 1.79086 10 4ZM1 13C1 11.3431 2.34315 10 4 10H8C9.65685 10 11 11.3431 11 13V14H1V13ZM0 13C0 10.7909 1.79086 9 4 9H8C10.2091 9 12 10.7909 12 13V15H0V13Z"
                      />
                    </mask>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9 4C9 5.65685 7.65685 7 6 7C4.34315 7 3 5.65685 3 4C3 2.34315 4.34315 1 6 1C7.65685 1 9 2.34315 9 4ZM10 4C10 6.20914 8.20914 8 6 8C3.79086 8 2 6.20914 2 4C2 1.79086 3.79086 0 6 0C8.20914 0 10 1.79086 10 4ZM1 13C1 11.3431 2.34315 10 4 10H8C9.65685 10 11 11.3431 11 13V14H1V13ZM0 13C0 10.7909 1.79086 9 4 9H8C10.2091 9 12 10.7909 12 13V15H0V13Z"
                      fill="#1C2A39"
                    />
                    <path
                      d="M11 14V15H12V14H11ZM1 14H0V15H1V14ZM12 15V16H13V15H12ZM0 15H-1V16H0V15ZM6 8C8.20914 8 10 6.20914 10 4H8C8 5.10457 7.10457 6 6 6V8ZM2 4C2 6.20914 3.79086 8 6 8V6C4.89543 6 4 5.10457 4 4H2ZM6 0C3.79086 0 2 1.79086 2 4H4C4 2.89543 4.89543 2 6 2V0ZM10 4C10 1.79086 8.20914 0 6 0V2C7.10457 2 8 2.89543 8 4H10ZM6 9C8.76142 9 11 6.76142 11 4H9C9 5.65685 7.65685 7 6 7V9ZM1 4C1 6.76142 3.23858 9 6 9V7C4.34315 7 3 5.65685 3 4H1ZM6 -1C3.23858 -1 1 1.23858 1 4H3C3 2.34315 4.34315 1 6 1V-1ZM11 4C11 1.23858 8.76142 -1 6 -1V1C7.65685 1 9 2.34315 9 4H11ZM4 9C1.79086 9 0 10.7909 0 13H2C2 11.8954 2.89543 11 4 11V9ZM8 9H4V11H8V9ZM12 13C12 10.7909 10.2091 9 8 9V11C9.10457 11 10 11.8954 10 13H12ZM12 14V13H10V14H12ZM1 15H11V13H1V15ZM0 13V14H2V13H0ZM4 8C1.23858 8 -1 10.2386 -1 13H1C1 11.3431 2.34315 10 4 10V8ZM8 8H4V10H8V8ZM13 13C13 10.2386 10.7614 8 8 8V10C9.65685 10 11 11.3431 11 13H13ZM13 15V13H11V15H13ZM0 16H12V14H0V16ZM-1 13V15H1V13H-1Z"
                      fill="#1C2A39"
                      mask="url(#path-1-inside-1_1_428)"
                    />
                  </svg>
                </button>

                <button onClick={() => setIsOpenAuth(!isOpenAuth)}>
                  <svg
                    width="14"
                    height="17"
                    viewBox="0 0 14 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ cursor: "pointer" }}
                  >
                    <mask id="path-1-inside-1_1_422" fill="white">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.00003 1H8.00003C9.1046 1 10 1.89543 10 3V5H4.00003V3C4.00003 1.89543 4.89546 1 6.00003 1ZM3.00003 5V3C3.00003 1.34315 4.34318 0 6.00003 0H8.00003C9.65689 0 11 1.34315 11 3V5H11.2162C12.2606 5 13.1292 5.80364 13.2102 6.84491L13.8324 14.8449C13.9228 16.0071 13.0041 17 11.8384 17H2.16162C0.995926 17 0.0772501 16.0071 0.167642 14.8449L0.789865 6.84491C0.870853 5.80364 1.73942 5 2.78384 5H3.00003ZM11 6H3.00003H2.78384C2.26163 6 1.82735 6.40182 1.78685 6.92245L1.16463 14.9225C1.11944 15.5035 1.57877 16 2.16162 16H11.8384C12.4213 16 12.8806 15.5035 12.8354 14.9225L12.2132 6.92246C12.1727 6.40182 11.7384 6 11.2162 6H11Z"
                      />
                    </mask>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.00003 1H8.00003C9.1046 1 10 1.89543 10 3V5H4.00003V3C4.00003 1.89543 4.89546 1 6.00003 1ZM3.00003 5V3C3.00003 1.34315 4.34318 0 6.00003 0H8.00003C9.65689 0 11 1.34315 11 3V5H11.2162C12.2606 5 13.1292 5.80364 13.2102 6.84491L13.8324 14.8449C13.9228 16.0071 13.0041 17 11.8384 17H2.16162C0.995926 17 0.0772501 16.0071 0.167642 14.8449L0.789865 6.84491C0.870853 5.80364 1.73942 5 2.78384 5H3.00003ZM11 6H3.00003H2.78384C2.26163 6 1.82735 6.40182 1.78685 6.92245L1.16463 14.9225C1.11944 15.5035 1.57877 16 2.16162 16H11.8384C12.4213 16 12.8806 15.5035 12.8354 14.9225L12.2132 6.92246C12.1727 6.40182 11.7384 6 11.2162 6H11Z"
                      fill="#1C2A39"
                    />
                    <path
                      d="M10 5V6H11V5H10ZM4.00003 5H3.00003V6H4.00003V5ZM3.00003 5V6H4.00003V5H3.00003ZM11 5H10V6H11V5ZM13.2102 6.84491L14.2072 6.76737L13.2102 6.84491ZM13.8324 14.8449L12.8354 14.9225L13.8324 14.8449ZM0.167642 14.8449L-0.829347 14.7674H-0.829347L0.167642 14.8449ZM0.789865 6.84491L-0.207124 6.76737L0.789865 6.84491ZM1.78685 6.92245L0.789865 6.84491L1.78685 6.92245ZM1.16463 14.9225L0.167642 14.8449H0.167642L1.16463 14.9225ZM12.8354 14.9225L11.8384 15V15L12.8354 14.9225ZM12.2132 6.92246L11.2162 7L12.2132 6.92246ZM8.00003 0H6.00003V2H8.00003V0ZM11 3C11 1.34315 9.65689 0 8.00003 0V2C8.55232 2 9.00003 2.44772 9.00003 3H11ZM11 5V3H9.00003V5H11ZM10 4H4.00003V6H10V4ZM3.00003 3V5H5.00003V3H3.00003ZM6.00003 0C4.34318 0 3.00003 1.34315 3.00003 3H5.00003C5.00003 2.44772 5.44775 2 6.00003 2V0ZM2.00003 3V5H4.00003V3H2.00003ZM6.00003 -1C3.79089 -1 2.00003 0.790861 2.00003 3H4.00003C4.00003 1.89543 4.89546 1 6.00003 1V-1ZM8.00003 -1H6.00003V1H8.00003V-1ZM12 3C12 0.790861 10.2092 -1 8.00003 -1V1C9.1046 1 10 1.89543 10 3H12ZM12 5V3H10V5H12ZM11.2162 4H11V6H11.2162V4ZM14.2072 6.76737C14.0857 5.20546 12.7828 4 11.2162 4V6C11.7384 6 12.1727 6.40182 12.2132 6.92246L14.2072 6.76737ZM14.8294 14.7674L14.2072 6.76737L12.2132 6.92246L12.8354 14.9225L14.8294 14.7674ZM11.8384 18C13.587 18 14.965 16.5106 14.8294 14.7674L12.8354 14.9225C12.8806 15.5035 12.4213 16 11.8384 16V18ZM2.16162 18H11.8384V16H2.16162V18ZM-0.829347 14.7674C-0.964935 16.5106 0.41308 18 2.16162 18V16C1.57877 16 1.11944 15.5035 1.16463 14.9225L-0.829347 14.7674ZM-0.207124 6.76737L-0.829347 14.7674L1.16463 14.9225L1.78685 6.92245L-0.207124 6.76737ZM2.78384 4C1.21721 4 -0.0856421 5.20545 -0.207124 6.76737L1.78685 6.92245C1.82735 6.40182 2.26163 6 2.78384 6V4ZM3.00003 4H2.78384V6H3.00003V4ZM11 5H3.00003V7H11V5ZM3.00003 5H2.78384V7H3.00003V5ZM2.78384 5C1.73942 5 0.870853 5.80364 0.789865 6.84491L2.78384 7L2.78384 7V5ZM0.789865 6.84491L0.167642 14.8449L2.16162 15L2.78384 7L0.789865 6.84491ZM0.167642 14.8449C0.0772504 16.0071 0.995926 17 2.16162 17V15H2.16162L0.167642 14.8449ZM2.16162 17H11.8384V15H2.16162V17ZM11.8384 17C13.0041 17 13.9228 16.0071 13.8324 14.8449L11.8384 15L11.8384 15V17ZM13.8324 14.8449L13.2102 6.84491L11.2162 7L11.8384 15L13.8324 14.8449ZM13.2102 6.84491C13.1292 5.80364 12.2606 5 11.2162 5V7H11.2162L13.2102 6.84491ZM11.2162 5H11V7H11.2162V5Z"
                      fill="#1C2A39"
                      mask="url(#path-1-inside-1_1_422)"
                    />
                  </svg>
                </button>
              </>
            )}
            {isOpenAuth && <LoginModal />}
          </RightBlock>
        </Header>

        <Main>{children}</Main>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
  background-color: #ffffff;
`;

const Header = styled.header`
  width: 1440px;
  color: #1c2a39;
  display: flex;
  padding-left: 160px;
  padding-right: 160px;

  font-size: 11px;
  height: 116px;
  align-items: center;
  justify-content: space-between;
  z-index: 3;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Logo = styled.div`
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-left: 0;
  padding-left: 0;
  width: 372px;
  white-space: nowrap;
`;

const Li = styled.li`
  display: inline-block;

  a {
    display: inline-block;
    text-decoration: none;
    color: #5c6a79;
    font-size: 10px;

    &:focus {
      color: #1c2a39;
      transform: scale(1.28);
    }
  }
`;

const RightBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 121px;
  height: 17px;
  position: relative;

  .numberOfBooks {
    background: #ff353a;
    height: 13px;
    width: 13px;
    border-radius: 50%;
    color: #ffffff;
    font-size: 10px;
    line-height: 12px;
    text-align: center;
    left: 111px;
    top: 8px;
    position: absolute;
    cursor: pointer;
  }
`;
