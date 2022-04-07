import React from "react";
import { GetServerSideProps } from "next";
import prisma from "lib/prisma";
import { useState } from "react";
import Head from "next/head";
import styles from "@/pages/index.module.css";
import { string } from "yup";

export type LinkProp = {
  index: number;
  title: string;
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  try {
    await prisma.$connect();
    const drafts = await prisma.user.findMany();
    console.log("Drafts: " + drafts);
    console.log("Cnt: " + drafts.length);
    return {
      props: { drafts },
    };
  } catch (e) {
    console.log("Error: ", e);
    throw e;
  } finally {
    await prisma.$disconnect();
  }
};

type Props = {
  drafts: LinkProp[];
};

const Drafts: React.FC<Props> = (props) => {
  return (
    <div>
      <div className="page">
        <main>
          <h1>Count: {props.drafts.length}</h1>
        </main>
      </div>
    </div>
  );
};

export default Drafts;
