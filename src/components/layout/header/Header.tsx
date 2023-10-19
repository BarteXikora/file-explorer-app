import { useEffect, useRef } from 'react'

import StyledHeader from './Header.styles'
import ContentTools from '../contentTools/ContentTools'
import Path from '../../elements/path/Path'
import Button from '../../ui/button/Button'

import iconUpload from '../../../assets/icons/icon-upload.png'
import iconNewFolder from '../../../assets/icons/icon-new-folder.png'

const Header = () => {
    const headerRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 50) headerRef.current && headerRef.current.classList.add('header-rolled')
            else headerRef.current && headerRef.current.classList.remove('header-rolled')
        }

        window.addEventListener('scroll', handleScroll)

        return () => { window.removeEventListener('scroll', handleScroll) }

    }, [])

    return <StyledHeader ref={headerRef}>
        <div className="header">
            <div className="path-box">
                <Path />
            </div>

            <div className="buttons-box">
                <Button size='small'>
                    <img src={iconUpload} alt="Wrzuć pliki na dysk" />

                    <span>Wrzuć pliki na dysk</span>
                </Button>

                <Button size='small'>
                    <img src={iconNewFolder} alt="Utwórz folder" />

                    <span>Utwórz folder</span>
                </Button>
            </div>
        </div>

        <div className="content-tools">
            <ContentTools />
        </div>
    </StyledHeader>
}

export default Header