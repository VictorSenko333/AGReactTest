import { Tabs, TabsProps } from "./../../app/ui-kit/tabs";
import { FC, useEffect, useState } from "react";
import { Outlet, useSearchParams, useNavigate } from "react-router-dom";
import { Button } from '@mui/material'
import { TodosRoutes } from "./todos.router";

const tabsConfig: TabsProps['config'] = [
  {
    label: 'All',
    value: 'all'
  },
  {
    label: 'Complete',
    value: 'complete'
  },
  {
    label: 'Incomplete',
    value: 'incomplete'
  }
]

const TodosLayout: FC = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const type = searchParams.get('type')
    if (type) {
      const index = tabsConfig.findIndex(({ value }) => value === type);
      setCurrentTab(index);
    }
  }, [searchParams])
  
  const onTabClick = (val: number) => {
    const { index, type } = tabsConfig.reduce((acc, { value: type }, index) => {
      if (index === val) {
        return { index, type }
      }
      return acc;
    }, { index: 0, type: '' })
    setSearchParams({ type });
    setCurrentTab(index);
  }
  const onCreateClick = () => {
    navigate(TodosRoutes.CreateTodo)
  }
  return (
    <article>
      <Tabs value={currentTab} setValue={onTabClick} config={tabsConfig} />
      <Button onClick = {onCreateClick}>Create</Button>
      <Outlet />
    </article>
  )
}

export default TodosLayout;
