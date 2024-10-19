import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { New } from '@core/models';

@Component({
    selector: 'app-news-landing',
    standalone: true,
    imports: [],
    templateUrl: './news-landing.component.html',
    styleUrl: './news-landing.component.scss',
})
export class NewsLandingComponent implements OnInit {
    //TODO: get news from mongoDB
    currentNews: New[] = [
        {
            title: 'Golems Go on Strike',
            description:
                "Ankh-Morpork's golems demand better working conditions.",
            date: new Date('2024-10-19'),
            content:
                "For the first time in centuries, Ankh-Morpork's golems have gone on strike. They are demanding proper rest periods, fair treatment, and the freedom to express themselves outside of their designated tasks. This has caused significant disruption across the city, as many factories and industries rely on golem labor.",
            author: 'William de Worde',
            archivedDate: new Date('2025-01-01'),
        },
        {
            title: 'Rincewind Sighted Near Hubward',
            description:
                'The infamous wizard was reportedly seen running from an unknown threat.',
            date: new Date('2024-10-16'),
            content:
                'Eyewitnesses report seeing the wizard Rincewind, renowned for his lack of magical prowess but extraordinary talent for survival, sprinting through Hubward territories. Sources suggest he was fleeing something terrifying, though no one can confirm what it was. Citizens are advised to avoid following him.',
            author: 'Sacharissa Cripslock',
        },
        {
            title: 'Nobby Nobbs Denies Allegations of Being Human',
            description:
                "Controversy arises once again over Corporal Nobbs' species.",
            date: new Date('2024-10-10'),
            content:
                "Corporal Nobby Nobbs has vehemently denied fresh allegations that he may, in fact, be human. The rumors were sparked by a recent incident involving the city’s DNA testing service, where Nobby's test returned 'inconclusive.' Nobbs has requested that his official certificate of 'not being human' be revalidated.",
            author: 'William de Worde',
            archivedDate: new Date('2025-03-15'),
        },
        {
            title: 'Clacks Outage Leaves City in Chaos',
            description:
                "Ankh-Morpork's Clacks communication system has suffered a citywide failure.",
            date: new Date('2024-10-01'),
            content:
                'The Grand Trunk Clacks system experienced an unprecedented failure today, leaving citizens without long-distance communication for several hours. This outage has caused widespread confusion, with many businesses unable to transmit critical messages. The cause of the failure is suspected to be sabotage from a disgruntled former Clacks worker.',
            author: 'Sacharissa Cripslock',
        },
        {
            title: 'Patrician Declares New Tax on Turnips',
            description:
                'Lord Vetinari announces an agricultural tax aimed at local turnip farmers.',
            date: new Date('2024-09-28'),
            content:
                "In a surprise move, Lord Vetinari has imposed a new tax on turnip production, citing a need to regulate the booming turnip market. Farmers are outraged, calling the tax 'unfair and unnecessary.' Some speculate this is part of a larger plan to reduce food exports to neighboring cities.",
            author: 'William de Worde',
        },
        {
            title: 'Bursar Finally Cured of Dried Frog Pills Addiction',
            description:
                "The Unseen University's Bursar has been declared sane by faculty members.",
            date: new Date('2024-09-15'),
            content:
                'In a stunning turn of events, the Bursar of Unseen University has reportedly been cured of his long-standing reliance on dried frog pills. Professors are cautiously optimistic about his newfound clarity, though some believe it is only a matter of time before his mental instability returns.',
            author: 'Ponder Stibbons',
            archivedDate: new Date('2025-01-01'),
        },
        {
            title: 'Cohen the Barbarian Declares Retirement',
            description:
                'Discworld’s most famous barbarian announces his intent to step down.',
            date: new Date('2024-08-30'),
            content:
                "Cohen the Barbarian, legendary hero and leader of the Silver Horde, has officially declared his retirement from adventuring. After decades of battling monsters, thieves, and various gods, Cohen has stated he is 'getting too old for this.' The announcement has left the adventuring community in shock.",
            author: 'Sacharissa Cripslock',
        },
        {
            title: 'Librarian Issues Warning About Overdue Books',
            description:
                'The Librarian of Unseen University has issued a stern warning to those with overdue books.',
            date: new Date('2024-08-20'),
            content:
                "In a rare public statement, the Librarian has reminded citizens of Ankh-Morpork about the consequences of not returning library books on time. Several students have gone missing after failing to return certain magical tomes, prompting the Librarian to reemphasize his policy: 'Ook,' which translates roughly to 'Return your books, or else.'",
            author: 'William de Worde',
            archivedDate: new Date('2025-06-01'),
        },
        {
            title: 'Fresh Reports of Yetis on the Ramtops',
            description:
                'Mountaineers report increased Yeti activity near the Hub.',
            date: new Date('2024-07-25'),
            content:
                'Several mountaineers have reported strange sightings of Yetis on the slopes of the Ramtops. While encounters with Yetis have been sporadic in the past, this recent surge in activity has local villagers concerned. Experts speculate that the creatures are migrating due to climate changes in the mountains.',
            author: 'Sacharissa Cripslock',
        },
        {
            title: 'Sam Vimes Receives Honorary Degree',
            description:
                'Commander of the City Watch awarded honorary degree by Unseen University.',
            date: new Date('2024-07-10'),
            content:
                "In an unprecedented event, Commander Sir Samuel Vimes of the Ankh-Morpork City Watch has been awarded an honorary degree in 'Defensive Optimism' by the Unseen University. Vimes, known for his cynical outlook and dedication to justice, accepted the degree reluctantly, stating, 'It's probably a joke, but I'll take it.'",
            author: 'Ponder Stibbons',
        },
        {
            title: 'Witches Host Annual Lancre Gathering',
            description:
                'Witches from across the Disc gather in Lancre for their yearly meeting.',
            date: new Date('2024-06-30'),
            content:
                "The annual witches' gathering in Lancre has commenced, bringing together the most powerful witches from across the Disc. Granny Weatherwax, Nanny Ogg, and Magrat Garlick are expected to attend. Topics of discussion include weather manipulation, potion innovations, and the proper use of headology.",
            author: 'William de Worde',
        },
        {
            title: 'Troll Trade Agreement Signed',
            description:
                'Ankh-Morpork finalizes a historic trade deal with the Troll Kingdom.',
            date: new Date('2024-06-15'),
            content:
                'A new trade agreement between Ankh-Morpork and the Troll Kingdom has been signed, marking a significant step in improving relations between humans and trolls. The agreement includes the exchange of raw materials like stone and diamonds, as well as mutual protection clauses. Dwarf merchants have expressed concerns over the potential impact on their businesses.',
            author: 'Sacharissa Cripslock',
            archivedDate: new Date('2025-01-01'),
        },
        {
            title: 'Igor Union Protests for Better Work Conditions',
            description:
                'Igors across the Disc demand safer work environments.',
            date: new Date('2024-05-30'),
            content:
                'The Igor Union has announced widespread protests, calling for better working conditions and more ethical treatment in laboratories. Citing increased demands for stitching together limbs in unsafe environments, the Igors are requesting regular breaks and compensation for overtime.',
            author: 'William de Worde',
        },
        {
            title: 'Death Takes a Day Off',
            description:
                'Citizens confused as Death temporarily steps away from duties.',
            date: new Date('2024-05-10'),
            content:
                'In a rare occurrence, Death was seen taking a day off from his usual duties, leaving the Disc in a state of confusion. Without his presence, the deceased found themselves unsure whether they were alive or dead, leading to chaos in Ankh-Morpork’s streets. Death returned after 24 hours, offering no explanation.',
            author: 'Sacharissa Cripslock',
            archivedDate: new Date('2025-05-01'),
        },
        {
            title: 'Wizards Accidentally Summon Shopping Mall',
            description:
                'Unseen University’s magical mishap creates interdimensional shopping center.',
            date: new Date('2024-04-25'),
            content:
                'A magical experiment gone wrong at Unseen University resulted in the accidental summoning of a fully functional interdimensional shopping mall. The mall, which appears to cater to beings from multiple realities, is currently floating above the Ankh River. Wizards are working around the clock to reverse the summoning.',
            author: 'Ponder Stibbons',
        },
        {
            title: 'C.M.O.T. Dibbler Opens New Sausage-Inna-Bun Stall',
            description:
                'Infamous street vendor introduces latest culinary creation.',
            date: new Date('2024-04-15'),
            content:
                "Cut-Me-Own-Throat Dibbler has unveiled his latest invention: the Sausage-Inna-Bun Supreme. Despite concerns over the contents of the sausage, crowds have gathered to try the new delicacy. Dibbler assures the public that his sausages are 'probably' meat.",
            author: 'William de Worde',
            archivedDate: new Date('2024-12-31'),
        },
        {
            title: 'Nac Mac Feegle Start Bar Fight in Ankh-Morpork Tavern',
            description:
                'Tiny but fierce warriors cause chaos in local drinking establishment.',
            date: new Date('2024-04-05'),
            content:
                'A group of Nac Mac Feegle, notorious for their love of fighting and drinking, have caused mayhem in The Broken Drum tavern. Witnesses report tables being smashed and drinks stolen, though the Feegle left before the City Watch arrived. Patrons are advised to avoid eye contact if spotted.',
            author: 'Sacharissa Cripslock',
        },
        {
            title: 'Quirmians Protest Use of Exploding Chocolate',
            description:
                'Quirmian citizens demand ban on dangerous confectionery.',
            date: new Date('2024-03-20'),
            content:
                'A protest has erupted in Quirm over the increasing popularity of exploding chocolates sold by Ankh-Morpork vendors. The confectionery, which detonates in the mouth, has caused minor injuries to several citizens. Quirmian officials are considering a ban on the product, citing safety concerns.',
            author: 'William de Worde',
        },
        {
            title: 'The Lady Smiles Upon Gambler in Ankh-Morpork',
            description:
                'Mysterious figure wins unprecedented streak at The Bucket Casino.',
            date: new Date('2024-03-05'),
            content:
                'A gambler in Ankh-Morpork has experienced an extraordinary winning streak at The Bucket Casino, leading many to believe that The Lady herself, goddess of luck, is smiling upon him. The individual, whose identity remains unknown, left with his winnings before the City Watch could question him.',
            author: 'Sacharissa Cripslock',
        },
        {
            title: 'Assassins Guild Announces Price Increase',
            description:
                'The Assassins Guild raises their fees due to rising operational costs.',
            date: new Date('2024-02-20'),
            content:
                'The Assassins Guild has announced a 10% increase in their contract fees, citing the rising cost of specialized training, poisons, and crossbow maintenance. While some clients are displeased, the Guild assures the public that their services remain unparalleled in quality and professionalism.',
            author: 'William de Worde',
            archivedDate: new Date('2025-02-20'),
        },
    ];

    currentUrl: string = this.router.url;

    constructor(private router: Router) {}

    ngOnInit(): void {
        //TOOD: Instead of filtering, make a different call to the news service to load news or archived news
        if (this.currentUrl === '/archived') {
            this.currentNews = this.currentNews
                .filter((newToFilter) => newToFilter?.archivedDate)
                .sort(
                    (a, b) =>
                        (b?.archivedDate?.getTime() ?? b.date.getTime()) -
                        (a?.archivedDate?.getTime() ?? b.date.getTime())
                );
        }

        if (this.currentUrl === '/') {
            this.currentNews = this.currentNews
                .filter((newToFilter) => !newToFilter?.archivedDate)
                .sort((a, b) => b.date.getTime() - a.date.getTime());
        }
    }

    formatDate(newDate: Date | undefined): string | undefined {
        if (!newDate) return;

        return (
            newDate.getDate() +
            '/' +
            newDate.getMonth() +
            '/' +
            newDate.getFullYear()
        );
    }

    /* TODO: 
      1. instead of altering array, call the news service to modify the selected new status to archived in the mongoDB
      2. find element with ID instead of title    
    */
    archiveNew(newToArchive: New) {
        newToArchive = {
            ...newToArchive,
            archivedDate: new Date(),
        };
        const newToArchiveIndex = this.currentNews.findIndex(
            (n) => n.title === newToArchive.title
        );

        this.currentNews.splice(newToArchiveIndex, 1);
    }

    /* TODO: 
      1. instead of altering array, call the news service to delete the selected new in the mongoDB
      2. find element with ID instead of title    
    */
    removeNew(newToRemove: New) {
        const newToRemoveIndex = this.currentNews.findIndex(
            (n) => n.title === newToRemove.title
        );

        this.currentNews.splice(newToRemoveIndex, 1);
    }
}
