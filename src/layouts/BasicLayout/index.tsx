"use client";
import {
  GithubFilled,
  LogoutOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { ProLayout } from "@ant-design/pro-components";
import { Dropdown, Input } from "antd";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./index.css";
import GlobalFooter from "@/components/GlobalFooter";
import { menus } from "../../../config/menu";
import {listQuestionBankVoByPageUsingPost} from "@/api/questionBankController";

const SearchInput = () => {
  return (
    <div
      key="SearchOutlined"
      aria-hidden
      style={{
        display: "flex",
        alignItems: "center",
        marginInlineEnd: 24,
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <Input
        style={{
          borderRadius: 4,
          marginInlineEnd: 12,
        }}
        prefix={<SearchOutlined />}
        placeholder="搜索题目"
      />
    </div>
  );
};

interface Props {
  children: React.ReactNode;
}

export default function BasicLayout({ children }: Props) {
  const pathname = usePathname();

  return (
    <div
      id="basicLayout"
      style={{
        height: "100vh",
        overflow: "auto",
      }}
    >
      <ProLayout
        title="kunkun面试爱刷题"
        logo={
          <Image src="/assets/logo.png" alt="logo" width={32} height={32} />
        }
        layout="top"
        location={{
          pathname,
        }}
        avatarProps={{
          src: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
          size: "small",
          title: "ikun",
          render: (props, dom) => {
            return (
              <Dropdown
                menu={{
                  items: [
                    {
                      key: "logout",
                      icon: <LogoutOutlined />,
                      label: "退出登录",
                    },
                  ],
                }}
              >
                {dom}
              </Dropdown>
            );
          },
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            <SearchInput key="search" />,
            <a
              key="github"
              href="https://github.com/Raehp/kunkunmianshiya-next-fronted/tree/master"
              target="_blank"
            >
              <GithubFilled key="GithubFilled" />,
            </a>,
          ];
        }}
        headerTitleRender={(logo, title, _) => {
          return (
            <a>
              {logo}
              {title}
            </a>
          );
        }}
        // 底部栏
        footerRender={() => {
          return <GlobalFooter />;
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuDataRender={() => {
          return menus;
        }}
        // 菜单项如何渲染
        menuItemRender={(item, dom) => (
          <Link href={item.path || "/"} target={item.target}>
            {dom}
          </Link>
        )}
      >
        {children}
      </ProLayout>
    </div>
  );
}
