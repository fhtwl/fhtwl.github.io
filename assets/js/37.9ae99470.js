(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{599:function(t,o,n){"use strict";n.r(o);var e=n(13),s=Object(e.a)({},(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("今天突然发现mongodb无法启动, 在重装卸载后依然如此。"),n("br"),t._v("\n启动时报错:")]),t._v(" "),n("blockquote",[n("p",[t._v("Redirecting to /bin/systemctl start mongod.service Failed to start mongod.service: Unit not found.")])]),t._v(" "),n("p",[t._v("最后发现是mongodb有锁的机制，需要删除锁的文件。在mongodb里也能找到报错信息：")]),t._v(" "),n("blockquote",[n("p",[t._v("Failed to unlink socket file /tmp/mongodb-27017.sock")])]),t._v(" "),n("p",[t._v("解决办法就是删掉此文件")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf /tmp/mongodb-27017.sock\n\n")])])]),n("p",[t._v("然后再次启动即可")])])}),[],!1,null,null,null);o.default=s.exports}}]);