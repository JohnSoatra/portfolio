type Json = {
    [key: string]: string | undefined;
};

type TimeSpan = {
    after: number;
    delay: number;
    duration: number;
};

type TextType = {
    text: "I am John Soatra" | "a software engineer";
    timeSpan: TimeSpan[];
};

type LastVisitor = {
    name: string;
    link: string | null;
};
