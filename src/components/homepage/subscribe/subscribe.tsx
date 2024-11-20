"use client";
import Container from "@/components/global/Container";
import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Text } from "@/components/ui/Text";
import Image from "next/image";
import { useState } from "react";
import Diamond from "../../../../public/assets/icons/diamond";
import SubscribeBackground from "../../../../public/assets/subscribe";

const Subscribe = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (value: string) => setInputValue(value);

  return (
    <Container
      maxWidth="max-w-screen"
      className="lg:absolute lg:justify-center lg:top-1"
      padding="p-0"
    >
      <div className="lg:flex flex-row items-center space-x-2 justify-center hidden">
        <Diamond color="#FFF4EB" size="32" />
        <SubscribeBackground>
          <div className="px-[117px] py-[70px] flex flex-col items-center lg:flex-row space-x-[63.83px]">
            <Image
              src="/assets/subscribeicon.svg"
              width={277.17}
              height={224}
              alt="subscribe icon"
            />
            <div className="flex flex-col">
              <Text font="angel" color="secondary" size="2xl">
                Subscribe to our Newsletter
              </Text>
              <Input
                value={inputValue}
                onChange={handleChange}
                buttonText="SUBSCRIBE"
                onButtonClick={() => {}}
                color="cream"
                placeholder="Enter your email"
              />
            </div>
          </div>
        </SubscribeBackground>
        <Diamond color="#FFF4EB" size="32" />
      </div>
      <div className="px-6 py-10 flex lg:hidden bg-foreground flex-col items-center space-y-3">
        <Image
          src="/assets/subscribeicon.svg"
          width={261.6}
          height={211.42}
          alt="subscribe icon"
        />
        <div className="flex flex-col space-y-2">
          <Text font="angel" color="secondary" size="2xl">
            Subscribe to our Newsletter
          </Text>
          <Input
            value={inputValue}
            onChange={handleChange}
            color="cream"
            placeholder="Enter your email"
          />
          <Button>SUBSCRIBE</Button>
        </div>
      </div>
    </Container>
  );
};
export default Subscribe;
