"use client";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import BasicLayout from "@/layouts/BasicLayout";
import React, { useCallback, useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import stores, { AppDispatch } from "@/stores";
import { getLoginUserUsingGet } from "@/api/userController";
import { setLoginUser } from "@/stores/loginUser";
import AccessLayout from "@/access/AccessLayout";
import AccessEnum from "@/access/accessEnum";

/**
 * 全局初始化逻辑
 * @param children
 * @constructor
 */
const InitLayout: React.FC<
  Readonly<{
    children: React.ReactNode;
  }>
> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>();
  /**
   * 全局初始化函数，有全局调用单次的代码，都可以写到这里
   */
  const doInitLoginUser = useCallback(async () => {
    const res = await getLoginUserUsingGet();
  }, []);

  useEffect(() => {
    doInitLoginUser();
  }, []);
  return children;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body>
        <AntdRegistry>
          <Provider store={stores}>
            <InitLayout>
              <BasicLayout>
                <AccessLayout>{children}</AccessLayout>
              </BasicLayout>
            </InitLayout>
          </Provider>
        </AntdRegistry>
      </body>
    </html>
  );
}
