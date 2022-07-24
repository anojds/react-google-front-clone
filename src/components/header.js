import Text from "./hrefText"
import "../header.css"

const Header = () => {
    return (
        <>
        <div class='header'>
            <div class='left'>
                <Text text='Google 정보' color='#bdc1c6' fontsize='14px'></Text>
                <Text text='스토어' color='#bdc1c6' fontsize='14px'></Text>
            </div>
            <div class='right'>
                <Text text='Gmail' color='#fff' fontsize='14px'></Text>
                <Text text='이미지' color='#fff' fontsize='14px'></Text>
            </div>
        </div>
        </>
    )
}
export default Header