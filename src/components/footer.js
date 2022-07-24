import Text from "./hrefText";
import "../footer.css";

const Footer = () => {
  return (
    <>
      <div class="footerWrap">
        <Text text="광고" color="#bdc1c6" fontsize="14px"></Text>
        <Text text="비즈니스" color="#bdc1c6" fontsize="14px"></Text>
        <Text text="검색의 원리" color="#bdc1c6" fontsize="14px"></Text>
        <Text text="개인정보 처리방침" color="#bdc1c6" fontsize="14px"></Text>
        <Text text="약관" color="#bdc1c6" fontsize="14px"></Text>
        <Text text="설정" color="#bdc1c6" fontsize="14px"></Text>
      </div>
    </>
  );
};
export default Footer;
