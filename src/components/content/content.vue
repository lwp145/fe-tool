
<template>
  <div class="content clearfix">
	<div class="menu" id="demo">
		<ul>
			<li><router-link to="/tool/string_format"><span class="icon-tools"></span>字符串格式化</router-link></li>
      		<li><router-link to="/tool/md_api"><span class="icon-tools"></span>接口转md</router-link></li>
			<li><router-link to="/tool/js_str"><span class="icon-tools"></span>html转为js字符串</router-link></li>
			<li><router-link to="/tool/css3"><span class="icon-layers"></span>css3 兼容</router-link></li>
			<li><router-link to="/tool/html_reset"><span class="icon-code"></span>html 格式化</router-link></li>
			<li><router-link to="/tool/css_matrixing"><span class="icon-documents"></span>css 换算</router-link></li>
			<li><router-link to="/tool/qr_code"><span class="icon-eye"></span>二维码生成</router-link></li>
			<li><router-link to="/tool/creat_img"><span class="icon-images"></span>生成图片缩略图</router-link></li>
			<li><router-link to="/tool/animate"><span class="icon-air"></span>animate.css</router-link></li>
			<li><router-link to="/tool/colpick"><span class="icon-brush"></span>颜色选取</router-link></li>
			<li><router-link to="/tool/tinypng"><span class="icon-folder-images"></span>图片压缩</router-link></li>
			<li><router-link to="/tool/css_format"><span class="icon-flow-tree"></span>css压缩格式化</router-link></li>
			<li><router-link to="/tool/json_format"><span class="icon-flow-branch"></span>JSON压缩格式化</router-link></li>
			<li><router-link to="/tool/js_format"><span class="icon-flow-parallel"></span>JS压缩格式化</router-link></li>
			<li><router-link to="/tool/css_triangle"><span class="icon-triangle-up"></span>CSS生成三角形</router-link></li>
		</ul>
	</div>
	<router-view class="contBox"></router-view>
  </div>
</template>
<script>
export default {
  name: 'content',
  data () {
    return {

    }
  },
  // 组件渲染完成执行
  mounted:function(){

  }
}
</script>

<!-- 这里特地去掉 scoped私有 -->
<style lang="less">
@li_bg: #6dc0ff;

 .content{
	width:100%;
	font-size: 0;
	height: 100%;
	white-space:nowrap;
	overflow: hidden;
	.menu{
		display: inline-block;
		width: 20%;
		min-width: 200px;
		height: 100%;
		background: #f2f2ea;
		border-right: 1px solid #d9d9d1;
    overflow-y: scroll;
		li{
			width:100%;
			min-height: 50px;
			line-height: 50px;
			text-align: left;
			border-bottom: 2px solid #ecece4;
			position: relative;
			a{
				display: inline-block;
				color: #666762;
				height: 100%;
				width:100%;
				border-left:1px solid #ecece4;
				font-size: 16px;
				vertical-align: top;
				white-space:nowrap;
				overflow: hidden;
			}
			a.router-link-active{
				background: @li_bg;
				color: #fff;
				border-left:1px solid  @li_bg;
				span{
					color: #fff;
				}
			}
			span{
				vertical-align: middle;
				display:inline-block;
				padding:0 20px;
				font-size: 24px;
				color: #666762;
			}
		}
		li:after{content:'';width:5px;height:50px;position: absolute;top:0;left: 0;}
		li:nth-child(1):after{background: #51a3dd;}
		li:nth-child(2):after{background: #5ac275;}
		li:nth-child(3):after{background: #914dde;}
		li:nth-child(4):after{background: #4a5bdf;}
		li:nth-child(5):after{background: #d2a063;}
		li:nth-child(6):after{background: #a15a5e;}
		li:nth-child(7):after{background: #5d9e96;}
		li:nth-child(8):after{background: #616161;}
		li:nth-child(9):after{background: #b1af77;}
		li:nth-child(10):after{background: #b78686;}
		li:nth-child(11):after{background: #5d790b;}
		li:nth-child(12):after{background: #408c99;}
		li:nth-child(13):after{background: #59a550;}
		li:nth-child(14):after{background: #1f77ad;}
		li:nth-child(15):after{background: #f99;}
		li:hover{
			a{
				background: @li_bg;
				color: #fff;
				border-left:1px solid @li_bg;
			}
			span{
				color: #fff;
			}
		}
	}
	.contBox{
		font-size: 20px;
		display: inline-block;
		width:80%;
		min-width: 850px;
		height: 100%;
		overflow-y: auto;
		vertical-align: top;
		padding:20px;
		h1{
			font-size: 20px;
			border-bottom:4px solid #646464;
			/*font-weight: bold;*/
			color: #646464;
			line-height: 30px;
			padding:5px 0;
			margin-bottom: 20px;
		}
		textarea {
			width:100%;
			height: 220px;
			font-size: 20px;
			padding: 5px;
		}
	}
 }
</style>
