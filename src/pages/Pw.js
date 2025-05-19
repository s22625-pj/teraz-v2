import PwContainter from '../components/PwContainer'

const Pw = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full max-w-[1280px] ">
        <div className="bg-white px-6 flex overflow-hidden flex-col items-center justify-center pt-6 pb-16 box-border gap-[64px] leading-[normal] tracking-[normal] text-left text-13xl text-mediumblue font-satoshi mq768:gap-[96px] mq768:box-border mq450:gap-[48px]">
          <PwContainter />
        </div>
      </div>
    </div>
  )
}

export default Pw
