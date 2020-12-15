//懒加载时必须在根目录创建此文件
//懒加载优点：不会偷跑流量；缺点：加载速度比异步加载稍慢
//以下代码为懒加载时固定用法无需更改和理解
module.exports={
	chainWebpack:config=>{
		config.plugins.delete("prefetch")
		//删除index.html文件中带有prefetch属性的link，不需要异步下载暂时不需要的页面组件文件
	},
	devServer: {
	  proxy: {
	    '/api': {
	      target: `http://xzserver.applinzi.com`,
	      changeOrigin: true, //允许跨域
	      pathRewrite: {
	        '^/api' : ""
		//将程序中所以以"/暗号"开头的地址，替换为空字符串，再和target中的基础路径拼接起来作为发送到服务器的最终请求地址。
	      }
	    }
	  }
	}
}