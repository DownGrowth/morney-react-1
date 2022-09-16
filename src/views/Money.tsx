import React, { useState } from 'react';
import Layout from 'components/Layout';
import styled from 'styled-components';
import { TagsSection } from "./Money/TagsSection";
import { NoteSection } from "./Money/NoteSection";
import { CategorySection } from "./Money/CategorySection";
import { NumberPadSection } from "./Money/NumberPadSection";
import { useRecords } from 'hooks/useRecords';

const CategoryWrapper=styled.div`
    background: #c4c4c4;
`
const MyLayout = styled(Layout)`

    display: flex;
    flex-direction: column;
`
type Category = '-' | '+'
const defaultFormData={
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount:0
}
function Money() {
    const [selected, setSelected] = useState(defaultFormData)
    const {  addRecord } = useRecords()
    
    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({ ...selected, ...obj })
    }
    const submit = () => {
        if (addRecord(selected)) {
            alert('提交成功')
            setSelected(defaultFormData)
       }
    }
    return (
        <MyLayout scrollTop={9999}>
          <TagsSection value={selected.tagIds}
            onChange={tagIds => onChange({tagIds})}/>
          <NoteSection value={selected.note}
            onChange={note => onChange({note})}/>
          <CategoryWrapper>
            <CategorySection value={selected.category}
              onChange={category => onChange({category})}/>
          </CategoryWrapper>
          <NumberPadSection value={selected.amount}
            onChange={amount => onChange({amount})}
            onOk={submit}
          />
        </MyLayout>
      );
    }
  
export default Money