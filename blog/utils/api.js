import $ from "jquery";
import moment from "moment";
var nowPageUrl = "";
const accessToken =
  "121.3fb940925e5e959ad72e2de68020a7e2.YBX-k4mWmHUI0tjj1oQA2thIvEPRyD-SZG99_uY.8tv7Ug";
const siteId = "19491887";
const startDate = 20230806;
const endDate = moment().format("YYYYMMDD");
import Vue from "vue";
Vue.prototype.pv = {};
//入口方法
export function getCount(path) {
  nowPageUrl = path === "/" ? "home" : path.replace(/.$/, "");
  return new Promise((resolve, reject) => {
    getBaidu().then((res) => {
      resolve(res);
    });
  });
}

//请求百度统计公开接口获取统计数据
async function getBaidu() {
  var num = 0;
  await $.ajax({
    type: "get",
    dataType: "jsonp",
    url: "https://openapi.baidu.com/rest/2.0/tongji/report/getData",
    data: {
      access_token: accessToken,
      site_id: siteId,
      method: "visit/toppage/a",
      start_date: startDate,
      end_date: endDate,
      metrics: "pv_count",
      max_results: 200,
    },
    success: function (res) {
      num = visiteNum(res.result);
    },
    error: function (err) {
      console.log("error======", err);
    },
  });
  return num;
}

//计算对应页面的浏览量
function visiteNum(data) {
  //计算总浏览量

  if (data && data.items) {
    // visite = data.sourceSite.items[0][1];-直观统计包括了本地测试域名和正式域名浏览量之和
    //受访页面列表
    const items = data.items[0] || [];
    //查询对应域名下精确统计总数
    const arrs = items.filter(
      (v) =>
        v[0].name.indexOf(window.location.origin + "/my-blog") > -1 ||
        v[0].name.indexOf("http://localhost:8080/my-blog") > -1
    );
    let homeVisite = arrs.reduce((pre, cur, index) => {
      pre += Number(data.items[1][index][0]);
      return pre;
    }, 0);
    Vue.prototype.pv["home"] = homeVisite;
    if (nowPageUrl != "home") {
      //计算单页浏览量
      // encodeURI-转码
      // decodeURI-解码
      //受访页面列表
      let currentVisite = 0;
      const items = data.items[0] || [];
      //当前页面完整地址
      const pathurl = window.location.origin + "/my-blog" + nowPageUrl;
      const pathurl2 = window.location.origin + nowPageUrl;
      const pathurl3 = "http://localhost:8080" + "/my-blog" + nowPageUrl;
      const pathurl4 = "http://localhost:8080" + nowPageUrl;
      for (let i = 0; i < items.length; i++) {
        if (
          items[i][0].name.indexOf(pathurl) > -1 ||
          items[i][0].name.indexOf(pathurl2) > -1 ||
          items[i][0].name.indexOf(pathurl3) > -1 ||
          items[i][0].name.indexOf(pathurl4) > -1
        ) {
          currentVisite += data.items[1][i][0] / 1;
        }
      }
      Vue.prototype.pv[nowPageUrl] = currentVisite;
    }
  }
}
