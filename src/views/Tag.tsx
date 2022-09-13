import { Button } from "components/Button";
import Layout from "components/Layout";
import React from "react"
import { useParams } from "react-router-dom"
import { useTags } from 'useTags';
import Icon from '../components/icon';
import styled from 'styled-components';
import { Input } from "components/Input";
import { Center } from 'components/Center';
import { Space } from "components/Space";

type Params = {
    id:string
}
const Topbar=styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 20px;
    padding: 14px;
    background:white;
`
const InputWrapper=styled.div`
    background: white;
    padding: 0 16px;
    margin-top: 16px;
`
const Tag: React.FC = () => {
    const {findTag}=useTags()
    let { id } = useParams<Params>();
    const tag=findTag(parseInt(id))
    return (
        <Layout>
            <Topbar>
                <Icon name="left" />
                <span>编辑标签</span>
                <Icon />
            </Topbar>
            <InputWrapper>
                <Input label="标签名" type="text" placeholder="标签名"/>
            </InputWrapper>
            <Center>
                <Space />
                <Space/>
                <Button>删除标签</Button>
            </Center>
        </Layout>
        
    )
}

export {Tag}