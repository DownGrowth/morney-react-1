import React from "react"
import Layout from 'components/Layout';
import styled from 'styled-components';
import TagsSection from "./Money/TagsSection";
import NotesSection from "./Money/NotesSection";
import CategorySection from "./Money/CategorySection";
import NumberPadSection from "./Money/NumberPadSection";

const MyLayout = styled(Layout)`
    border:1px solid red;
    display: flex;
    flex-direction: column;
`
function Money() {
    return (
      <MyLayout className="">
            <TagsSection >
                <ol>
                        <li>住</li>
                        <li>衣</li>
                        <li>行</li>
                        <li>食</li>
                </ol>
                <button>新增标签</button>
            </TagsSection>
            <NotesSection>
                <label>
                    <span>备注</span>
                    <input type="text" />
                </label>
            </NotesSection>    
            <CategorySection>
                <ul>
                    <li className="selected">支出</li>
                    <li>收入</li>
               </ul>
            </CategorySection>
            <NumberPadSection>
                <div className="output">
                    100
                </div>
                <div className="pad clearfix">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>清空</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button className="ok">ok</button>
                    <button className="zero">0</button>
                    <button className="dot" >.</button>
                 
                </div>
            </NumberPadSection>
    </MyLayout>
    )
}
  
export default Money