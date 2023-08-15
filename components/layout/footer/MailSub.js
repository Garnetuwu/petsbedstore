import Button from "@/components/UI/Button";
import Card from "@/components/UI/Card";
import GridCard from "@/components/UI/GridCard";
import Input from "@/components/UI/Input";
import Container from "@/components/UI/Container";
import { useRef } from "react";
import Image from "next/image";

const MailSub = () => {
  const mailRef = useRef();
  return (
    <Card className="bg-blue">
      <Container>
        <GridCard className=" text-white p-7 gap-5 max-tablet:grid-cols-1 ">
          <Image
            width={1500}
            height={220}
            alt="mail"
            src="/assets/mail_subscription.png"
            className="max-h-[200px] object-contain place-self-center"
          />

          <form
            action="/"
            className="flex flex-col items-end gap-3 max-tablet:items-center"
          >
            <h2>Join our mailing list</h2>
            <Input
              type="text"
              ref={mailRef}
              className="bg-light-white text-black h-8 w-[90%] tablet:w-[60%]"
            />
            <p className="font-light text-right max-tablet:text-center">
              Get free pictures of cute cats and dogs as well as the latest
              deals and offers
            </p>
            <Button type="submit">subscribe</Button>
          </form>
        </GridCard>
      </Container>
    </Card>
  );
};

export default MailSub;
