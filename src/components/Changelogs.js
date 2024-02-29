"use client";
import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Link from "next/link";

const newVersion = "V2.0.11"

const releaseLogs = [
    {
        version: "V2.0.11",
        highlights: true,
        changes: [
            "Added Changelog section",
            "Fixed: Save progress not working properly",
            "Fixed: Episode section not showing data",
            "Fixed: Small bugs",
        ],
    },
];

export default function Changelogs() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [open, setopen] = useState(false);

    function closeModal() {
        localStorage.setItem("version", newVersion);
        setopen(false);
    }

    function getVersion() {
        let version = localStorage.getItem("version");
        if (version !== newVersion) {
            setopen(true);
        }
    }

    useEffect(() => {
        getVersion();
    }, []);

    return (
        <>
            <Modal isOpen={open} onOpenChange={closeModal} backdrop="opaque" hideCloseButton={true} placement="center">
                <ModalContent className="py-4">
                    {(onClose) => (
                        <>
                            <ModalBody>
                                <div className="flex flex-col">
                                    <div className="flex justify-between items-center gap-2">
                                        <p className="text-lg sm:text-xl">Changelogs</p>
                                        <div className="flex gap-3 items-center">
                                            {/* Github Icon */}
                                            <Link
                                                href="https://github.com/septa-git/"
                                                target="_blank"
                                                className="w-5 h-5 hover:opacity-75"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="#fff"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <g>
                                                        <g
                                                            fill="none"
                                                            fillRule="evenodd"
                                                            stroke="none"
                                                            strokeWidth="1"
                                                        >
                                                            <g
                                                                fill="#fff"
                                                                transform="translate(-140 -7559)"
                                                            >
                                                                <g transform="translate(56 160)">
                                                                    <path d="M94 7399c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051a9.396 9.396 0 00-2.505-.345 9.375 9.375 0 00-2.503.345c-1.911-1.326-2.751-1.051-2.751-1.051-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493-3.974-1.355-6.839-5.199-6.839-9.729 0-5.663 4.478-10.253 10-10.253"></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-sm text-gray-400">
                                            Hi there! 🎉 Welcome to the Changelogs section! 🌟 Here, explore the latest updates made to the site! 🚀
                                        </p>
                                    </div>
                                    <div className="my-3 flex items-center justify-evenly flex-col">
                                        <p className="whitespace-nowrap font-medium mx-2 font-inter">
                                            Version - {newVersion}
                                        </p>
                                        <div className="mt-1 w-full h-[1px] bg-white/10" />
                                    </div>
                                    {releaseLogs.map((log) => (
                                        <div key={log.version}>
                                            {log.changes.map((i, index) => (
                                                <p className="text-sm my-1" key={index}>- {i}</p>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button className="bg-[#4D148C] rounded-lg" onPress={onClose}>
                                Dismiss
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
