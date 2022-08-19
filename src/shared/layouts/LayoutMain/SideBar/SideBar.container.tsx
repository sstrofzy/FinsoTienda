import { FC, useState } from 'react'
import { TSideBarC } from './SideBar'
import { SideBarComponent } from './SideBar.components'

export const SideBar: FC<TSideBarC> = ({ showAside, handleClick } :TSideBarC) => {

    return (
        <SideBarComponent
            showAside={showAside}
            handleClick={handleClick}
        />
    )
}