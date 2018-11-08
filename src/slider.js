import React, { useState, useEffect, useContext } from "react"
import ReactDOM from "react-dom"

const data = [
  {
    title:
      "美国西海岸+洛杉矶市+拉斯维加斯9日7晚跟团游(3钻)·【A线5999上海直飞，1203、1220均已成团，1224、1228圣诞元旦班期不加价！南峡+圣地亚哥+墨西哥蒂华纳+奥莱+名校】【B线圣诞元旦购物折扣狂欢 行程升级境外0小费",
    image:
      "https://dimg04.c-ctrip.com/images/30050k000000b3i8xE069_C_360_202.jpg"
  },
  {
    title:
      "德国+法国+瑞士+意大利12日跟团游·3-4星【11.27班期6399成团热卖】【2019年错峰低价预售5799起 多数班期已成团】往返直飞+可配联运+可异地按指纹+卢浮宫入内+赠送卢森堡和比利时游览+升级塞纳河水上餐厅",
    image:
      "https://dimg04.c-ctrip.com/images/300c0a0000004qu4lEE2A_C_360_202.jpg"
  },
  {
    title:
      "土耳其博德鲁姆爱琴海+卡帕多奇亚+棉花堡10日7晚跟团游(4钻)·明星产品爱琴海白色小镇度假|含600元司导小费|内陆双飞+升级德系大巴|特色洞穴+温泉酒店+爱琴海卓越5星度假村|升烤全羊餐赠海峡游|专业持证导游配讲解器",
    image:
      "https://dimg04.c-ctrip.com/images/300j0u000000j46z38B28_C_360_202.jpg"
  },
  {
    title:
      "美国西海岸+洛杉矶市+拉斯维加斯9日跟团游(3钻)·上海直飞+A线联运减700【0小费+多项门票已含】大峡谷南峡+羚羊彩穴+马蹄湾 A线锡安公园 BC线圣地亚哥 双奥莱+自选环球影城 D线19年预售 E线4大国家公园+纪念碑谷",
    image:
      "https://dimg04.c-ctrip.com/images/300c0q000000g8m2a0A75_C_360_202.jpg"
  }
]

const Slider = ({ list, width, height }) => {
  let [activeIndex, setActiveIndex] = useState(0)
  return (
    <React.Fragment>
      <div
        style={{
          width,
          height,
          overflow: "hidden",
          position: "relative",
          margin: "0 auto"
        }}
      >
        {list.map((item, index) => {
          if (index !== activeIndex) return
          return (
            <div key={item.image}>
              <img src={item.image} title={item.title} />
            </div>
          )
        })}
      </div>
      {list.map((_, index) => (
        <button onClick={() => setActiveIndex(index)}>{index}</button>
      ))}
    </React.Fragment>
  )
}

const App = () => {
  return <Slider list={data} width={360} height={202} />
}

ReactDOM.render(<App />, document.getElementById("root"))
