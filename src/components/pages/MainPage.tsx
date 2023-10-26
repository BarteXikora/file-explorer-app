import SideMenu from '../layout/sideMenu/SideMenu'
import MainBody from '../layout/mainBody/MainBody'
import TopBar from '../layout/topBar/TopBar'
import Header from '../layout/header/Header'
import ContentSection from '../layout/contentSection/ContentSection'
import ProcessPill from '../elements/processPill/ProcessPill'

const MainPage = () => {
    return <>
        <SideMenu />

        <MainBody>
            <TopBar />

            <Header />

            <ContentSection />

            <ProcessPill />
        </MainBody>
    </>
}

export default MainPage