import Search from "./searchBar"
import HrefButton from "./hrefButton"
import Text from "./hrefText"
import '../main.css'

const Center = () => {
    return (
        <>
        <div class='mainWrap'>
            <img alt="Google" height="92" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png" width="272"></img>
            <Search></Search>
            <div class='main_button'>
                <HrefButton text='Google 검색'></HrefButton>
                <HrefButton text="I'm Feeling Lucky"></HrefButton>
            </div>
            <Text text='Google 제공 서비스: English' color='#fff' fontsize='13px'></Text>
        </div>
        </>
    )
}
export default Center