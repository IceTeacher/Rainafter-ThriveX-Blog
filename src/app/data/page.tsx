"use client"

import Swiper from "@/components/Swiper";
import Starry from "@/components/Starry";
import Statis from './components/Statis'
import Archiving from './components/Archiving'
import { useEffect, useState } from "react";
import { Article } from "@/types/app/article";
import { getArticleListAPI } from "@/api/article";

export default () => {
    const [articleList, setArticleList] = useState<Article[]>([])
    const getArticleList = async () => {
        const { data } = await getArticleListAPI() || { data: [] as Article[] }
        setArticleList(data)
    }
    useEffect(() => {
        getArticleList()
    }, [])

    return (
        <>
            <title>数据统计</title>
            <meta name="description" content="数据统计" />

            <Swiper isRipple={false} src="https://bu.dusays.com/2023/11/10/654e2da1d80f8.jpg">
                {/* 星空背景组件 */}
                <Starry />

                <div className="absolute top-[45%] left-[50%] transform -translate-x-1/2 flex flex-col items-center">
                    <div className="text-white text-[20px] xs:text-[25px] sm:text-[30px] whitespace-nowrap custom_text_shadow">数据统计</div>
                </div>
            </Swiper>

            <div className="w-[90%] xl:w-[1200px] my-10 md:mb-[95px] mx-auto bg-white dark:bg-black-b p-6 sm:p-10 rounded-xl border dark:border-black-b transition-colors">
                <Statis aTotal={articleList.length} />
                <Archiving list={articleList} />
            </div>
        </>
    )
}