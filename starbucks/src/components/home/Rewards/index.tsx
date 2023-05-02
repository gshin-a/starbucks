import Image from "next/image";
import Link from "next/link";

function Rewards() {
  return (
    <div className="block pt-[1.875rem] pb-10 bg-[#1e3932]">
      <div className="flex max-w-[67.5rem] my-0 mx-auto">
        <div className="text-center mr-10 ml-10 w-[16.3%]">
          <Image
            src={"/assets/img/home/rewards-logo.png"}
            alt="rewards-logo"
            width={176}
            height={153}
          />
        </div>
        <div className="box-border w-[calc(83.7%-5rem)] pr-[1.875rem] text-white">
          <div className="relative mb-[1.375rem] border-b-[0.0625rem] border-solid border-[#4b615b]">
            <div className="mb-3">
              <h2 className="leading-[1.4] mb-3 text-[1.625rem] font-normal">
                스타벅스만의 특별한 혜택, <strong>스타벅스 리워드</strong>
              </h2>
              <p className="leading-[1.4] text-[1.0625rem]">
                <strong>스타벅스 회원이세요?</strong> 로그인을 통해 나만의
                리워드를 확인해보세요.
                <br />
                <strong>스타벅스 회원이 아니세요?</strong> 가입을 통해 리워드
                혜택을 즐기세요.
              </p>
            </div>
            <div className="absolute bottom-5 right-0">
              <Link
                href="#"
                className="bg-[#00704a] border-[0.125rem] border-solid border-[#00704a] box-border inline-block h-[2.375rem] leading-9 pl-[1.15625rem] pr-[1.15625rem] text-[0.875rem] text-white rounded-[0.3125rem] cursor-pointer"
              >
                회원가입
              </Link>
              <Link
                href="#"
                className="ml-[0.5625rem] bg-transparent border-[0.125rem] border-solid border-white box-border inline-block h-[2.375rem] leading-9 pl-[1.15625rem] pr-[1.15625rem] text-[0.875rem] text-white rounded-[0.3125rem] cursor-pointer"
              >
                로그인
              </Link>
            </div>
          </div>
          <div className="relative">
            <p className=" leading-[1.4] text-[0.875rem]">
              회원 가입 후, 스타벅스 e-Gift Card를{" "}
              <strong>
                "나에게 선물하기"로 구매하시고, 편리하게 등록하세요!
              </strong>
              <br />
              카드를 등록하여 스타벅스 리워드 회원이 되신 후, 첫 구매를 하시면
              무료 음료쿠폰을 드립니다!
            </p>
            <div className="box-border absolute top-0 right-0 w-[11.4375rem] h-[2.375rem] leading-9 text-center text-[0.875rem] border-[0.125rem] border-solid border-white rounded-[0.3125rem]">
              <Link href={"#"} className="block w-full h-full text-white">
                e-Gift Card 선물하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rewards;
