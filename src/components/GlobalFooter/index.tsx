"use client";
import './index.css'
import React from "react";

/**
 * 全局底部栏
 * @constructor
 */
export default function GlobalFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="global-footer">
      <div>© {currentYear} kunkun面试爱刷题</div>
      <div>
        <a href="https://github.com/Raehp" target="_blank">
          作者：L1n - 一只小爬菜
        </a>
      </div>
    </div>
  );
}
