import { ReactNode } from 'react'
import Ripple from '@/components/Ripple'
import { randomImage } from '@/utils'
import { getThemeDataAPI } from '@/api/project'

interface Props {
    src?: string, // 图片列表
    isRipple?: boolean, // 是否显示波浪
    children?: ReactNode
}

export default async ({ src, isRipple = true, children }: Props) => {
    const { data } = await getThemeDataAPI()

    const sty = {
        backgroundImage: `url(${src ? src : randomImage()})`,
    }

    return (
        <>
            <div className="overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] relative bg-cover bg-center after:content-[''] after:w-full after:h-[20%] after:absolute after:bottom-0 after:left-0 after:bg-[linear-gradient(to_top,#fff,transparent)] dark:after:bg-[linear-gradient(to_top,#2c333e,transparent)]" style={sty}>
                <div className='absolute top-0 left-0 bg-[rgba(0,0,0,0.2)] w-full h-full'></div>
                <div>{children}</div>
            </div>

            {isRipple && <Ripple />}
        </>
    )
}