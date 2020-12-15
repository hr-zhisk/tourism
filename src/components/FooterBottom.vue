<template>
    <div class="footer-bottom">
      <ul>
          <li>
              <router-link to="/">首页</router-link>
          </li>
          <li>
              <router-link to="/developing">中国年·看西安</router-link>
          </li>
          <li>
              <router-link to="/developing">旅游资讯</router-link>
          </li>
          <li>
              <router-link to="/developing">探秘西安</router-link>
          </li>
          <li>
              <router-link to="/developing">玩转西安</router-link>
          </li>
          <li>
              <router-link to="/developing">云游大西安</router-link>
          </li>
          <li>
              <router-link to="/developing">旅游攻略</router-link>
          </li>
          <li>
              <router-link to="/developing">旅游帮助</router-link>
          </li>
    </ul> 
    <p>咨询投诉电话：12301 地址：西安市西大街45号 邮编：710007</p>
    <p>
    Copyright © 2002-2018 西安市旅游信息咨询中心 All Rights Reserved. 备案号:
    <a href="">陕ICP备20002730号</a>
    技术支持：
    <a href="">成都中科大旗软件股份有限公司</a>
    </p>
    </div>
</template>
<style>
.footer-bottom li{
list-style:none;
display: inline-block;
padding: 0 12px;
border-right: 1px solid #6a6d80;
line-height: 12px;
}
.footer-bottom a{
  text-decoration: none;  
}
.footer-bottom li:last-child {
    border: none;  
}
div.footer-bottom{
    color: #6a6d80;
    font-size:16px;
		text-align: center;
		margin: 40px 0;
		padding: 30px 0;
		background: #272727;
}
.footer-bottom p{
	margin-top: 30px;
}
</style>