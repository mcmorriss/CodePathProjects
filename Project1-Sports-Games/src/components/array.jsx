import React from 'react'

const array = [
    {
        title: "DALLAS VS NEW ORLEANS",
        desc: "Mavericks defeat Pelicans, Score: 111-106",
        link: "https://www.youtube.com/watch?v=DUtkGiX7lsA&feature=onebox",
        img: "https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/328466774_845967713132964_8495985608837811259_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a26aad&_nc_ohc=lLJ_Gomk_DsAX8LASQn&_nc_ht=scontent-hou1-1.xx&oh=00_AfAeXGFEjuu_x-9LQY-9YbPC9rMK9bgUo8WHeQPUqsSVig&oe=6403267C"
    },
    {
        title: "DALLAS VS GOLDEN STATE",
        desc: "Warriors defeat Mavericks, Score: 119-113",
        link: "https://www.youtube.com/watch?v=1y_uZR1lt9o&feature=onebox",
        img: "https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/329309297_858237882330709_7130446854226388845_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_ohc=RHk2n1PwgrcAX8JegP1&_nc_ht=scontent-hou1-1.xx&oh=00_AfAqGJefu7X158TtZZDiejs5OdsgOkBaGywbuB-BY8WzMg&oe=6401CD30"
    },
    {
        title: "DALLAS VS UTAH",
        desc: "Mavericks defeat the Jazz, Score: 124-111",
        link: "https://www.youtube.com/watch?v=lhZMy2Ntss0&feature=onebox",
        img: "https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/329017997_711131590666659_7770930191788754878_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a26aad&_nc_ohc=uDiaaXXwbp4AX9809sn&tn=_EadLwgj91GSK0Jw&_nc_ht=scontent-hou1-1.xx&oh=00_AfABKXBIAe_q9VT-eTNgoMU9EqBhaOYtAwZGsaMJKM8IxA&oe=6402C07C"
    },
    {
        title: "DALLAS VS LOS ANGELES",
        desc: "Mavericks defeat the Clippers, Score: 110-104",
        link: "https://www.youtube.com/watch?v=MdKmFRD94sE&feature=onebox",
        img: "https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/328617757_642172194336434_6270133292264205195_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a26aad&_nc_ohc=gXXpXZH_9f8AX8nIdh7&tn=_EadLwgj91GSK0Jw&_nc_ht=scontent-hou1-1.xx&oh=00_AfBHg5UWsjVWyEWhiwGZLEgggofJ4uX816KX5C5BwY7ZzQ&oe=6401B349"
    },
    {
        title: "DALLAS VS SACREMENTO",
        desc: "Mavericks defeat the Kings, Score: 122-114",
        link: "https://www.youtube.com/watch?v=sdWXGyehkZc&feature=onebox",
        img: "https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/329961470_1153764321994334_6830036554936401720_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a26aad&_nc_ohc=JJY5F2a7qWsAX-HmeUl&_nc_ht=scontent-hou1-1.xx&oh=00_AfD2-TP_toc61QUxqwp1jdaA68aMoBQQXSJ61B_bHns3Ag&oe=640295F3"
    },
    {
        title: "DALLAS VS SACREMENTO",
        desc: "Kings defeat Mavericks, Score: 133-128",
        link: "https://www.youtube.com/watch?v=PCrn49o94bI&feature=onebox",
        img: "https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/329737127_567152848780245_3463280261374981889_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a26aad&_nc_ohc=r9OsbbiAqC4AX9z9krB&_nc_ht=scontent-hou1-1.xx&oh=00_AfCjT9ljCgxMW7QD5jOjTyfWIxe8U0yzgTMzqmLC5B2_Kw&oe=6401F341"
    },
    {
        title: "DALLAS VS MINNESOTA",
        desc: "Timberwolves defeat Mavericks, Score: 124-121",
        link: "https://www.youtube.com/watch?v=ELB2YOfeIRM&feature=onebox",
        img: "https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/330314958_942362810272617_8241761690239722135_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a26aad&_nc_ohc=BR-4HdaE-koAX-mHh9j&_nc_ht=scontent-hou1-1.xx&oh=00_AfAEOCX6lVQvuGBMlmWVRfb4T2S3pnq6OVFeXI4icGh1Ag&oe=64020B68"
    },
    {
        title: "DALLAS VS DENVER",
        desc: "Nuggets defeat Mavericks, Score: 118-109",
        link: "https://www.youtube.com/watch?v=-Hj5tewuGCo&feature=onebox",
        img: "https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/330389862_645476560716351_8943154894765914040_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a26aad&_nc_ohc=8zi3uac7dwkAX_DzCxk&_nc_ht=scontent-hou1-1.xx&oh=00_AfBH8dIDfuFBxFDKCin4dNeGTKHPhoOFZZlLF8Jt7uGNkQ&oe=64029043"
    },
    {
        title: "DALLAS VS SAN ANTONIO",
        desc: "Mavericks defeat the Spurs, Score: 142-116",
        link: "https://www.youtube.com/watch?v=L9jVyg3LCwk&feature=onebox",
        img: "https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/333512129_896114398029934_2297199837764926680_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a26aad&_nc_ohc=FjpH7nj63toAX93-EDE&_nc_ht=scontent-hou1-1.xx&oh=00_AfCu1gJKfvP2KlKMbd4_f61nzbVGuAczd5K-x2Ploe0IBg&oe=64036CC5"
    },
    {
        title: "DALLAS VS LOS ANGELES",
        desc: "Lakers defeat the Mavericks, Score: 111-108",
        link: "https://www.youtube.com/watch?v=bP9vLRvEmjY&feature=onebox",
        img: "https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/333782412_6626990067316193_5291394896373967366_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a26aad&_nc_ohc=j-HTwy7OgrQAX-pVz5o&tn=_EadLwgj91GSK0Jw&_nc_ht=scontent-hou1-1.xx&oh=00_AfB4kUogx17OUelsI23Wc1cQ3HSPqShaEKQxgPZMg1bvcQ&oe=64026DC6"
    },
]

export default array;