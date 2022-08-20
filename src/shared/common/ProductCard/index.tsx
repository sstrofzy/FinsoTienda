import numeral from 'numeral'
import React, { useState } from 'react'
import { Card, ContentCard, IconButtons, Section, SectionButtons, TitleCard, WrapperButtons } from './styled'

export const ProductCard = ({
    data,
    onChange
}: any) => {

const [count, setCount] = useState(0)

const handleChange = (type:string) => {
   if(type === 'suma'){
    setCount(count + 1)
    onChange(count + 1)
} 
else {
    setCount(count - 1)
    onChange(count - 1)
   }
}

return (
    <ContentCard>
        <Card>
            <Section bgColor='#fff' height='75%'> 
                <img src={data?.path} alt='x'/>
            </Section>
            <Section bgColor='#fff'>
                <TitleCard>{data?.name}</TitleCard>
                <TitleCard>
                    {numeral(data?.price).format('0,0')}
                </TitleCard>
            </Section>
        </Card>
        <WrapperButtons>
            <SectionButtons onClick={()=> handleChange('rest')}>
                <IconButtons icon='minus'/>
            </SectionButtons>
            <SectionButtons cursor='default' bgColor='#fff'>
                {count}
            </SectionButtons>
            <SectionButtons onClick={()=> handleChange('suma')}>
                <IconButtons icon='plus' />
            </SectionButtons>
        </WrapperButtons>
    </ContentCard>
)}
