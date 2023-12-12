'use client'
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import styles from "./ContactCard.module.css";
import { contact } from "@/image-path";
import { Divider } from "@nextui-org/divider";

export const ContactCard = (params: { lang: string }) => {

    return (
        <>
            <Card shadow="none"
                className={`border-none w-[340px] h-[512px]`}
                classNames={{
                    base: "border-none"
                }}
            >
                <CardHeader className={styles.header}>
                    <div className={styles.header__upper}></div>
                    <div className={styles.header__bottom}></div>
                    <div className={styles.header__avatar}>
                        <div className={styles.avatar__border}>
                            <Avatar
                                radius="full"
                                src={contact.src}
                                classNames={{
                                    base: `w-20 h-20 bg-transparent`,
                                }}
                            />
                        </div>
                    </div>
                </CardHeader>
                <CardBody className={`px-4 py-0 text-small text-default-600`}>
                    <section>
                        <h1 className="text-lg font-bold">Jorge González</h1>
                        <p>JTGlez</p>
                    </section>
                    <Divider className={styles.divider} />
                    <section>
                        <div className="text-xs uppercase text-gray-400 mb-1">Sobre mí</div>
                        <p>Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet</p>
                    </section>

                </CardBody>
                <CardFooter className="gap-3">
                </CardFooter>
            </Card>

        </>

    )
};
