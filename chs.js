/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //
    "Mana": "法力",
    "Knowledge": "知识",
    "Control": "控制",
    "Coin": "金币",
    "Energy": "体力",
    "Spark": "火花",
    "Bone": "骨头",
    "Craftsmanship": "匠心",
    "Fighting Actions": "战意",
    "Wood": "木材",
    "Stone": "石头",
    "Brick": "砖块",
    "Refined Wood": "精炼木材",
    "Charged Wood": "注能木材",
    "Paper": "纸",
    "Charged Paper": "注能纸",
    "Sand": "沙子",
    "Glass": "玻璃",
    "Iron Ore": "铁矿石",
    "Iron Plate": "铁板",
    "Elemental Brick": "元素砖块",
    "Elemental Plate": "元素铁板",

    //
    "INTELLECT": "智力",
    "WILLPOWER": "精神",
    "SANITY": "理智",
    "STRENGTH": "力量",
    "VITALITY": "活力",
    "RUNE MASTERY": "符文精通",
    "AGILITY": "敏捷",
    "MAGIC KNOWLEDGE": "魔法知识",
    "REST EFFICIENCY": "休息效率",
    "CONJURATION_LORE": "造物学识",

    "Max Hp": "最大生命值",
    "Hp Regen": "生命恢复",
    "HP Regen": "生命恢复",
    "HP regen": "生命恢复",
    "Hp regen": "生命恢复",
    "Armor": "护甲",
    "Physical Damage": "物理伤害",
    "Max Physical Damage": "最大物理伤害",
    "Magical Damage": "魔法伤害",
    "Max Magical Damage": "最大魔法伤害",
    "Fire Damage": "火焰伤害",
    "Max Fire Damage": "最大火焰伤害",
    "Crit Chance": "暴击率",
    "Crit Multiplier": "暴击伤害",
    "Dodge Chance": "闪避率",
    "Precision": "命中率",
    "Magic Resistance": "魔法抗性",
    "Fire Resistance": "火焰抗性",
    "Leather": "皮革",
    "Iron": "铁",
    "Magic": "魔法",

    "Willpower": "精神",
    "Attribute": "属性",
    "Natural": "基础",
    "Wizard": "巫师",

    //
    "Never": "永不",

    /*
    "K"
    "M"
    "B"
    "T"
    "Qa"
    "Qi"
    "Sx"
    "Sp"
    "Oc"
    "No"
    "Dc"
    "UDc"
    "DDc"
    "TDc"
    "E"
    */

    //
    "Mana Cap": "法力上限",
    "Mana Cap Rune": "法力上限符文",
    "Expand your magic abilities by learning this rune. Mana capacity will be slightly increased.": "学习此符文可以提高你的魔法能力。轻微增加法力上限",
    "Willpower Rune": "精神符文",
    "Rise your willpower attribute, improving mana generation rate": "提升你的精神属性，从而增加法力产量",
    "Intellect Rune": "智力符文",
    "Rise your intellect attribute, improving skill learning speed": "提升你的智力属性，从而增加符文学习速度",
    "Knowledge Rune": "知识符文",
    "Increase knowledge generation": "增加知识产量",
    "Mana Rate": "法力效率",
    "Mana Rate Rune": "法力效率符文",
    "Improve your mana gain": "提升你的法力产量",
    "Rune Master": "大师符文",
    "Reduce other runes learning xp cost": "降低符文学习的经验需求",
    "Memory Rune": "记忆符文",
    "Increase mana and knowledge caps": "提升法力和知识上限",
    "Endurance Rune": "耐久符文",
    "Increase vitality attribute": "提升活力属性",
    "Muscle Rune": "肌力符文",
    "Increase strength attribute": "提升力量属性",
    "Agility Rune": "敏捷符文",
    "Increase agility attribute, which increase maximum speed of actions performance": "提升敏捷属性，它会影响动作执行速度的上限",
    "Spark Holding Rune": "火花符文",
    "Increase spark capacity": "提升火花上限",
    "Elven Rune": "精灵符文",
    "Increase spellbinding attribute": "提升咒力属性",

    //
    "Intellect": "智力",
    "Determines how quickly you are learning runes": "决定符文学习速度",
    "Will Power": "精神",
    "Increase mana re-generation speed": "增加法力产量",
    "Rune Mastery": "符文精通",
    "Decrease rune learning cost": "降低符文学习的经验需求",
    "Strength": "力量",
    "Increase physical activities efficiency": "增加物理类动作的速度",
    "Vitality": "活力",
    "Increase endurance activities efficiency": "增加活力类动作的速度",
    "Agility": "敏捷",
    "Increase maximum speed of your actions": "增加动作执行速度上限",
    "Spellbinding": "咒力",
    "Increase general spell efficiency": "增加法术类动作的速度",
    "Rest Efficiency": "休息效率",
    "Increase rest efficiency": "提升休息的效率",
    "Conjuration Lore": "造物学识",
    "Increase conjuration spells speed efficiency": "提升造物法术的速度",
    "Stamina": "耐力",
    "Increase your fighting efficiency": "提高战斗的效率",
    //
    "Scholar": "学术",
    "Physical": "物理",
    "Mental": "精神",
    "Magical": "魔法",

    //
    "Better Mana Orb": "强化法力宝珠",
    "Better Mana Orb, providing 25% more mana storage": "强化法力宝珠，使法力上限提升 25%",
    "Runic Table": "符文工作台",
    "Increase amount of runes that can be learned at once by 1": "可同时学习的符文数量增加 1",
    "Magic Prism": "魔法棱镜",
    "Increase mana generation by 25%": "法力产量提升 25%",
    "Knowledge": "知识",
    "Unlock new rune, providing access to new resource - knowledge": "解锁新的符文，它将带来一种全新的资源——知识",
    "Runic Memory": "符文记忆",
    "Use your magic knowledge to make rune learning 50% faster": "使用你的魔法知识，令符文学习速度提升 50%",
    "Expand Mana Rune": "扩展法力符文",
    "Use your magic knowledge to learn new rune improving your mana income": "使用你的魔法知识解锁新的符文，它将进一步提升法力产量",
    "Expand Magic Library": "扩展魔法图书馆",
    "Further increase max active runes by 1 per level": "每级可同时学习的符文数量增加 1",
    "Expanded Bookcases": "扩展书架",
    "Increase knowledge capacity by 30%": "知识上限提升 30%",
    "Memory Rune": "记忆符文",
    "Unlock memory rune, boosting your magical and mental capacity": "解锁记忆符文，它将同时提升法力和知识上限",
    "Reading Tools": "阅读工具",
    "Learn how to use energetically charged magnifying glass to increase knowledge rune efficiency by 30%": "学习使用带有魔力的放大镜，使知识产量提升 30%",
    "Expanded Sacrifice": "献祭强化",
    "Increase sacrificed runes gain 2 times (acts as you had twice as much runes to sacrifice)": "每级使符文献祭的次数翻倍（相当于你献祭了 2 倍数量的符文）",
    "Crystals": "水晶",
    "Unlock crystals, that persist through rune sacrifices and can significantly contribute to your magic and learning capabilities": "解锁水晶，水晶可以极大地提升你的魔法和学习能力，并且符文献祭和转生不会重置水晶",
    "Rune Master Rune": "大师符文",
    "Unlock rune, that helps to read other runes, reducing their XP requirements": "解锁大师符文，它可以降低符文升级所需要的经验值",
    "Ticket To Mages City": "巫师之城的门票",
    "Gain your access to mages city. Unlocks new game layer.": "解锁巫师之城，从而解锁一系列全新的游戏内容",
    "Better Stash": "优化储藏处",
    "Just a stash for coins storage.Increase coin capacity by 25%": "就是个放金币的地方。使金币上限提升 25%",
    "Knowledge Generation": "知识产量",
    "Improve your knowledge about knowledge. Boost knowledge generation by 25%": "提升关于知识的知识。使知识产量提升 25%",
    "Better Orb": "强化巫师宝珠",
    "Wizard orb learning bonus is larger by 20% per active level": "每一级巫师宝珠的学习加成提升 20%",
    "Runic Memory II": "符文记忆 II",
    "Use your magic knowledge to make rune learning even 50% more efficient": "使用你的魔法知识，令符文学习速度进一步提升 50%",
    "Runic Table Enhancement": "强化符文工作台",
    "Improve your runes table to make rune learning 200% faster": "强化符文工作台，使符文学习的速度提升 200%",
    "Enchanted Orb": "附魔巫师宝珠",
    "Make your Wizard Orb 20% better": "使你的巫师宝珠效果提升 50%",
    "Runic Splash": "符文溅射",
    "Use spark to reveal more runic energy on sacrifice. Increase sacrifice level twice": "在献祭时使用魔法火花，从而获取更多的符文能量。每级使符文献祭的次数翻倍",
    "Conjuration Training": "造物训练",
    "Train your conjuration lore": "训练你的造物学识",

    "Upgrade mode": "升级模式",
    "Max HP": "最大生命值",
    "Your ability to take punishment": "承受伤害的能力",
    "Physical Damage": "物理伤害",
    "Your physical damage": "造成物理伤害的能力",
    "Max Physical Damage": "最大物理伤害",
    "Your max physical damage": "造成物理伤害的上限",
    "Magical Damage": "魔法伤害",
    "Your physical damage": "造成魔法伤害的能力",
    "Max Magical Damage": "最大魔法伤害",
    "Your max physical damage": "造成魔法伤害的上限",
    "Fire Damage": "火焰伤害",
    "Your fire damage": "造成火焰伤害的能力",
    "Max Fire Damage": "最大火焰伤害",
    "Your max fire damage": "造成火焰伤害的上限",
    "HP Regeneration": "生命恢复",
    "Your HP regeneration": "每秒恢复生命值的速度",
    "Armor": "护甲",
    "Your armor": "减免物理伤害的能力",
    "Magic Resistance": "魔法抵抗",
    "Your magic resistance": "减免魔法伤害的能力",
    "Fire Resistance": "火焰抵抗",
    "Your fire resistance": "减免火焰伤害的能力",
    "Critical Chance": "暴击率",
    "Your chance to land lucky strike": "攻击产生暴击的概率",
    "Critical Multiplier": "暴击伤害",
    "Multiplier of critical strike": "暴击攻击的伤害倍率",
    "Dodge Chance": "闪避率",
    "Chance to avoid physical damage": "规避物理伤害的概率",
    "Precision": "命中率",
    "Chance to ignore enemies dodge": "攻击时可无视的闪避率",

    //
    "Source of Mana": "法力之源",
    "Provides some static bonus to your mana cap and generation": "少量增加法力上限和产量",
    "Wise Crystal": "智慧水晶",
    "Consists of knowledge...": "纯粹的知识……",
    "Lazy Crystal": "懒惰水晶",
    "Unlocks upgrades automation": "解锁自动升级",
    "Gold Crystal": "黄金水晶",
    "Boosts gold cap": "提升金币上限",
    "Mana Crystal": "法力水晶",
    "Boosts mana cap": "提升法力上限",
    "Wealth Crystal": "财富水晶",
    "Generates some coins passively": "自动生成金币",
    "Protection Crystal": "防护水晶",
    "Amplifying your armor by creating invisible shield around you": "在你周围制造无形的护盾，提升你的护甲",
    "Elemental Protection Crystal": "元素防护水晶",
    "Amplifying your elemental resistances by creating invisible energetic field": "通过创造隐形的能量力场，提升你的元素抗性",

    //
    "(You need to create list, add actions into it and run list to start receiving benefits from it)": "（你需要建立列表，并将动作添加到列表，才能执行动作并获得收益）",
    "Clean Streets": "清扫街道",
    "Dig Channels": "挖掘隧道",
    "Carry Bags": "拎包",
    "Labour": "劳作",
    "Farmer": "农民",
    "Quarryman": "采石工",
    "Miner": "矿工",
    "Head Miner": "矿长",
    "Builder": "建筑工人",
    "Rest": "休息",
    "Even mages need to take some rest. Devote some time to yourself to recover energy": "就算是巫师，也是需要休息的。花点时间恢复你的精力",
    "Push Up": "俯卧撑",
    "Train your physical abilities": "训练你的力量",
    "Breath Techniques": "呼吸技巧",
    "Train your vitality": "训练你的活力",
    "Investigate World": "探索世界",
    "Learn more about surroundings and place where you are living": "调查你周围的环境",
    "Train Endurance": "训练活力",
    "Take endurance training at local gladiators school": "在当地的角斗士学校参加活力训练课程",
    "Train Strength": "训练力量",
    "Take strength training at local gladiators school": "在当地的角斗士学校参加力量训练课程",
    "Read Books": "阅读魔法书",
    "Spend time reading old magic books, full of knowledge. Increase knowledge cap, but requires mana to translate magic language": "花时间读古老魔法书来获取知识。提升知识上限，但这种书需要消耗法力来解读",
    "Read Manuscripts": "阅读符文手稿",
    "Spend time reading rune manuscripts, increasing rune mastery": "花时间读符文手稿，提升符文精通",
    "Mental Aptitude": "头脑锻炼",
    "Train your mental abilities by solving problems from academy books. Increase Intellect": "解决古书中的谜题，来锻炼你的脑力。提升智力",
    "Brainstorm": "头脑风暴",
    "Train your mental abilities. Increase Knowledge generation": "扩展你的知识面。提升知识产量",
    "Meditate": "冥想",
    "Use special techniques to improve your mana cap": "使用特殊的魔法技术来提升法力上限",
    "Willpower Training": "精神训练",
    "Use special techniques to improve your willpower": "使用特殊的魔法技术来提升精神",
    "Rune Lessons": "符文课程",
    "Take some rune mastery lessons": "学习符文精通课程",
    "Condense Stashes": "压缩储藏处",
    "Cast the spell over your coins to make it taking less place": "对金币施展咒语，缩小它所占据的空间",
    "Heart Spark Infusion": "心脏火花注入",
    "Use spark to enchant your heart, boosting your vitality": "使用魔法火花强化你的心脏，从而提升活力",
    "Muscle Spark Infusion": "肌肉火花注入",
    "Use spark to enchant your muscles, boosting your strength": "使用魔法火花强化你的肌肉，从而提升力量",
    "Brain Spark Infusion": "大脑火花注入",
    "Use magic to increase your intellect potential. Efficient, but dangerous.": "使用魔法火花强化你的大脑，从而提升智力。这很有效，也很危险",
    "Magic Lessons": "魔法课程",
    "Train your capabilities of spell casting": "训练你施展法术的能力",
    //"Read Elven Books": "阅读精灵书籍",
    //"Spent some time in elven library to increase your knowledge output": "在精灵族的图书馆里阅读，从而提升知识产量",
    "Improve Spark Storage": "提升火花储量",
    "Feel the electricity in your hands": "感受指尖跃动的电光吧",
    "Conjuration Training": "造物训练",
    "Train your conjuration lore": "提升你的造物学识",
    "Enchant Fingers": "附魔手指",
    "Now that you know magic well enough and you understand your body and mentality, you can use new methods of self-improvement! Cast some spells on your fingers to make yourself more agile!": "你已经相当精通魔法，也更熟悉你的肉体和精神，现在你可以使用全新的自我强化手段了！在你的手指上施放法术，可以让你变得更加敏捷",
    "Spell-singing courses": "咒语咏唱课程",
    "Train your spell mastery even more": "进一步训练你的咒力",
    "Fortitude": "刚毅",
    "Make your spirits invincible, and your will undeniable": "使你的精神无可匹敌，让你的意志无可违逆",
    "Conjure Spark": "创造火花",
    "Spend your time making ritual, increasing your mana output": "进行魔法仪式，创造魔法火花",
    "Conjuration Singing": "造物咏唱",
    "Train your conjuration lore": "训练你的造物学识",
    "Conjure Wood": "创造木材",
    "Conjure some pile of raw wood": "用魔法凭空创造木材",
    "Conjure Stone": "创造石头",
    "Conjure some stone": "用魔法凭空创造石头",
    "Craft": "工艺制作",
    "Devote some time to crafting": "花费时间进行工艺制作",
    "Conjure Iron": "创造铁矿石",
    "Conjure iron ore": "用魔法凭空创造铁矿石",
    "Fight": "战斗",
    "Spent some time fighting. Produces fighting actions": "花费时间进行战斗。产生战意",
    "Weapon Mastery Training": "武器精通训练",
    "Spent some time to train your weapons mastery with greatest magic arena warriors. However, you should pay for this lessons with most precious resource in mages city - your knowledge. ": "让强大的魔法角斗士训练你的物理战斗能力。你需要付出这座城市里最珍贵的资源作为代价——知识",
    "Battle Endurance Training": "战斗耐力训练",
    "Use your magic knowledge to enchant your body and heart": "使用魔法知识，强化你的身体和心灵",
    "Evocation Training": "毁灭法术训练",
    "Train your destructive magic with best mages in the city": "让城市里最强大的的魔法师训练你的毁灭法术",
    "Paused": "暂停",

    //
    "Read Books": "阅读魔法书",
    "Learn old language to open an opportunity of learning old books": "学习失落的魔法语言，让你能够阅读古老的魔法书",
    "Rune Language": "符文语言",
    "Learn rune language to enable reading runic manuscripts": "学习符文语言，让你能够阅读符文手稿",
    "Lazy Crystal": "懒惰水晶",
    "Unlock crystal that allows upgrades automation": "解锁一种水晶，它将使你能够自动进行升级",
    "Gold Crystal": "黄金水晶",
    "Unlock gold crystal that increases gold caps": "解锁黄金水晶，它将提升金币上限",
    "Endurance Rune": "耐久符文",
    "Unlock new rune that can significantly boost your body": "解锁一种新的符文，它会显著地强化你的身体",
    "Muscle Rune": "肌肉符文",
    "Learn new rune, that can boost your body power": "解锁一种新的符文，它会强化你的力量",
    "Training Chambers Access": "训练室权限",
    "Visit local arena to obtain access to advanced training lessons": "访问当地的角斗士学校，你可以在那里接受高级的训练",
    "Coins Protection": "金币保护",
    "Protected Gold Stash prevent coins from being reset on runic sacrifice": "改良你的金币储藏处，使得符文献祭不再重置金币",
    //"Mercenaries Market": "佣兵市场",
    //"Finally you became nobble enough to encourage other people to work for you. They wont do it for free, however": "你终于富到可以雇人帮你干活了。当然，这不会是免费的",
    "Rune Protection": "符文保护",
    "Create magic barriers on your runes, preventing some amounts of runes reset on sacrifice (excepting the one that you sacrificing)": "在你的符文上创造魔法屏障，使符文献祭时，除所献祭的符文以外的符文可以保存一定数量",
    "Knowledge Knowledge": "知识的知识",
    "Unlock new ways of improvement of your magic workplace to further advance your learning capabilities": "解锁新的强化魔法工作台的方式，这会进一步提升你的学习能力",
    "Rune Expertise": "符文专家",
    "Deeper understanding of runes led you to new innovative ways of managing them. Unlocks runes auto-learn": "对符文的深厚理解，让你终于能掌握一种全新的方式来学习它们。解锁自动符文学习",
    "Aptitude": "头脑锻炼",
    "Learn new techniques to increases your mental powers": "学习新的技术，从而提升你的智力",
    "Brainstorm": "头脑风暴",
    "Devote your time to magic investigations": "花费时间来进行魔法探索",
    "Reincarnation": "转生",
    "Unlocks reincarnation": "解锁转生",
    "Meditation": "冥想",
    "Learn new techniques boosting your magical powers": "学习新的技术，它将提升你的法力上限",
    "Agility Rune": "敏捷符文",
    "Learn new rune improving your reflexes": "解锁新的符文，它会提升你的反应速度",
    "Willpower Training": "精神训练",
    "Unlock access to activities training your willpower": "解锁能够锻炼精神的方法",
    "Mana Crystal": "法力水晶",
    "Use your knowledge to understand the source of magic flowing through your hands. Unlocks new crystal": "那些从你的双手流过的魔法，它们的本质究竟是什么？解锁新的水晶",
    "Runes Science": "符文科学",
    "Take some lessons to master your runes": "学习能够使你进一步掌握符文的课程",
    "Basic Wizardry": "基本巫术学",
    "Get access to wizard beginners school entry. Unlocks new upgrades and possibility to learn spells": "获准进入初级巫师学校。解锁新的升级，并使你可以开始学习法术",
    "Illusion Spells": "幻象法术",
    "Unlock your first magic spells! The very basic school is Illusion, focused on making things looking not what they are. Manipulate with spatial and optical features of things": "解锁第一种法术！最基础的法术类型是幻象，它主要的效果是让物体的外形变得不同，实现的原理是改变物体的空间和光学属性",
    "Spark Generation": "火花创造",
    "Unlock new resource - magically powered electricity, that can be created using new magic school spells - Conjuration": "解锁新的资源——火花，它是用魔法注能的电力，可以用造物法术来生成",
    "Spark Container": "火花容器",
    "Could you hold more magic electricity you produce?": "你能创造魔法火花，但你能留住多少呢？",
    "Spark Infusion": "火花注入",
    "Use sparks to boost your body": "使用火花来强化你的身体",
    "Spark Mind Infusion": "精神火花注入",
    "Scientists saying brain is also part of humans body. Not that mages should believe in science, but maybe you could enchant your mind as well?": "科学家说大脑也是人体的一部分。巫师确实没必要相信科学，不过你也可以试试用火花强化自己的大脑？",
    "Courses of Apprentice": "魔法学徒课程",
    "Finally you can start learning true magic... Can't you?": "终于，你可以开始学习真正的魔法了……对吧？",
    "Elven Rune": "精灵符文",
    "Open new opportunities by learning elven language, unlocking new rune": "学习精灵语可以为你打开全新的可能，解锁新的符文",
    //"Elven Library": "精灵图书馆",
    //"Investigate better elven science to learn more about magic and understand the world of wizardry": "进一步研究精灵族的科学，学习新的魔法，理解巫术的世界",
    "Conjuration Study": "造物研究",
    "Unlock new training, focused on conjuration training": "解锁全新的训练，可以让你提高造物法术的速度",
    "Basic Elementalism": "基本元素学",
    "Learn how to handle sparks more efficiently. Unlock new ways of spark storage improvement": "学习如何更有效地掌控火花。解锁新的提升火花储量的方式",
    "Wealth Crystal": "富饶水晶",
    "What if you try to make crystal creating illusion of wellness? You could use magic to make you rich!": "试试看，用象征财富的幻象法术制造水晶会怎么样呢？说不定这种魔法可以让你一夜暴富！",
    "Woodworking": "木工",
    "Learn how to combine your magic with your handwork to create wood and something useful from it!": "学习如何把你的魔法和手工艺结合起来。你将凭空创造木头，并用它制造一些有用的东西！",
    "Paperworking": "造纸术",
    "If you can work with wood, you can do so with paper": "如果你的魔法可以对木头生效，那对纸也肯定可以",
    "Stoneworking": "石工",
    "Lets master some harder materials": "让我们来尝试一些更坚硬的材料",
    "Charged Crafting": "注能工艺制造",
    "Learn how to use magic sparks to create new crafting materials and structures.": "学习如何使用魔法火花，创造全新的材料和产品",
    "Metalworking": "金属加工",
    "Now that you can manage high temperatures, you could also smelt iron ore": "你可以掌控更高的温度，从而熔化铁矿石",
    "Glassmaking": "玻璃制造",
    "Ok, if you can make stone - you can crash it into sand, and than smelt into glass. Can't you?": "嗯，既然你可以制造石头，那把它打碎成沙子，再熔化加工成玻璃，是很自然的事情吧？",
    "Battle Mastery": "战斗精通",
    "Unlocks fights": "解锁战斗系统",
    "Bone Extraction": "拆骨",
    "Unlocks obtaining bones from battles": "解锁通过战斗获取骨头的能力",
    "Battle Training": "战斗训练",
    "Claim access to battle mages beginners school, that gives you possibility to train basic fighting skills": "获取进入战斗法师学校的权限，这会让你能够进行基本战斗技能的训练",
    "Reflexes Training": "反射训练",
    "Fighting not only gives you loot, but knowledge. You understand your body better now. You understand how your reaction works. And a little more magic can make it even better...": "战斗不仅给你带来了战利品，也带来了全新的知识。你对你的身体有了进一步的了解，你学会了反射的规律。只要一点点魔法，就可以将其大为强化……",
    "Spell-singing Training": "咒语咏唱训练",
    "Bring your spell mastery to new level using innovative methods of casting": "通过创造性的施咒方法，将你的咒力提升到全新的高度",
    "Fortitude Training": "刚毅训练",
    "Reveal new ways of improving your willpower": "找到全新的精神力训练方法",
    "Basic Protection Spells": "基本防护法术",
    "Learn basic protection spells that will significantly boost your survivability in fights": "学会基本的防护法术，这会显著提升你在战斗时的生存能力",
    "Bones Mechanisms": "骸骨工程",
    "Combine engineering with magic to unlock some new structures": "运用你所掌握的工程学和魔法，解锁一些全新的制造物",
    "Protection Crystal": "防护水晶",
    "Now you know that you can connect your crystals to some kind of defensive aura": "你可以将一些防护性的法术注入水晶",
    "Evocation Spells": "毁灭法术",
    "Learn how to destroy with your magic powers": "学习如何将你的魔法力量用于毁灭",
    "Bone Drying": "骸骨干燥",
    "Advanced bone processing let now store them in cellar. Cellar now also boost bone storage": "优化处理方式，让你可以将骨头存储在地下室。地下室获得骨头储量加成",
    "T Energy": "T 能量",
    "Unlock fighting mutants, affected by one of the most powerful energy form in the world - T-energy. Fighting them unlock new precious rewards, including T-shards for your runes": "解锁突变体战斗，它们是受这个世界上最强大的能量形态之一——T 能量影响的产物。和它们的战斗会带来珍贵的奖励，包括能强化符文的 T 碎片",
    "Advanced Evocation": "高级毁灭法术",
    "Unlock new evocation spells": "解锁全新的毁灭法术",
    "Advanced Fight Moves": "高级战斗动作",
    "Unlock new hit types": "解锁全新的物理攻击招式",

    "Elemental Brick Crafting": "元素砖块制造",
    "Unlock new advanced magic material, that further expand your building capabilities": "解锁新的高级魔法材料，它将使你得以建造更多的东西",
    "Elemental Protection Crystal": "元素防护水晶",
    "Deeper understanding of elements unlocks new way of protection against them": "对元素的进一步理解，使你可以解锁新的方式来抵御它们",
    "Elemental Plate Crafting": "元素铁板制造",
    "Improve your elemental and building mastery by inventing new material": "发明新的材料，从而提升你对元素和建筑的了解",
    "Elemental Resonator": "元素共鸣器",
    "Invent new way of boosting your magic activities using elemental resonance": "利用元素共鸣，发明全新的提升魔法能力的方法",
    "Conjuration Singing": "造物咏唱",
    "Now your will in combination with your voice can create incredible things! Unlocks new ways of boosting conjuration.": "你的声音即是你的意志！解锁新的提升造物学识的方法",
    

    //
    "Kick": "踢击",
    "Kick your enemies": "狠狠地踢你敌人的屁股",
    "Restore": "恢复",
    "Restore some of your HP": "恢复少量生命值",
    "Stone Skin Spell": "石肤术",
    "Improve your armor significantly": "显著提升你的护甲",
    "Minor Heal": "次级治疗术",
    "Restore some of your HP": "恢复一定量的生命值",
    "Fireball": "火球术",
    "Create fireball and launch it against your opponents": "制造火球并将它投向你的敌人",
    "Fire Blast": "炎爆术",
    "Unleash massive fire blast at your opponents": "向你的敌人施放巨大的火焰爆炸",
    "Magic Arrow": "魔法箭",
    "Launch arrow made of magic at your opponents": "向你的敌人发射纯粹的魔力构成的箭矢",
    "Sweeping Blow": "横扫",
    "Massive Hit": "大开大合的攻击",

    //
    "BattleActions": "战斗动作",
    "Battle Actions": "战斗动作",
    "Sewers": "下水道",
    "Lake": "湖",
    "Field": "田野",
    "Cave": "洞穴",
    "Forest": "森林",
    "Library": "图书馆",
    "You lost": "你失败了",
    "You won": "你赢了",
    "Rat": "老鼠",
    "Beaver": "海狸",
    "Tortoise": "乌龟",
    "Mosquito": "蚊子",
    "Muskrat": "麝鼠",
    "Armadillo": "犰狳",
    "Raven": "乌鸦",
    "Wasp": "黄蜂",
    "Small Demon": "小恶魔",
    "Fire Demon": "火焰恶魔",
    "Spider": "蜘蛛",
    "Magic Spider": "魔法蜘蛛",
    "Wolf": "狼",
    "Bear": "熊",
    "Magic Fly": "魔法飞虫",
    "Living Book": "活书",
    "Guardian": "守护者",
    "Flamed Scroll": "火焰卷轴",
    "You": "你",
    "You got ": "你获得了",
    "You found ": "你发现了",
    "Cap": "帽子",
    "Helmet": "头盔",
    "Hat": "帽子",
    "Leather Armor": "皮甲",
    "Plated Armor": "板甲",
    "Cloak": "披风",
    "Leather Boots": "皮靴",
    "Iron Boots": "铁靴",
    "Slippers": "拖鞋",
    "Sword": "剑",
    "Staff": "法杖",
    "Club": "棍棒",
    "Knife": "小刀",
    "Wooden Shield": "木盾",
    "Iron Shield": "铁盾",
    "Bone Shield": "骨盾",

    /*
    "Aelwyn ": "艾尔温·",
    "Alaric ": "阿拉里克·",
    "Arius ": "阿里乌斯·",
    "Artemis ": "阿尔忒弥斯·",
    "Azriel ": "阿兹瑞尔·",
    "Balthazar ": "巴尔塔萨·",
    "Bran ": "布兰·",
    "Caelum ": "凯勒姆·",
    "Cassius ": "卡修斯·",
    "Cedric ": "塞德里克·",
    "Darius ": "达里乌斯·",
    "Draco ": "德拉科·",
    "Eldric ": "艾尔德里克·",
    "Elric ": "埃尔里克·",
    "Emrys ": "艾姆瑞斯·",
    "Ezra ": "以斯拉·",
    "Faelan ": "费兰·",
    "Fenris ": "芬里斯·",
    "Gaius ": "盖乌斯·",
    "Galen ": "盖伦·",
    "Gavriel ": "加布里埃尔·",
    "Hadrian ": "哈德良·",
    "Halcyon ": "哈尔西昂·",
    "Icarus ": "伊卡洛斯·",
    "Ignatius ": "伊格纳修斯·",
    "Jareth ": "贾雷斯·",
    "Kael ": "凯尔·",
    "Lazarus ": "拉撒路·",
    "Leander ": "利安德尔·",
    "Lucian ": "卢修斯·",
    "Magnus ": "马格努斯·",
    "Marius ": "马里乌斯·",
    "Nero ": "尼禄·",
    "Orion ": "猎户·",
    "Osric ": "奥斯瑞克·",
    "Peregrine ": "佩雷格林·",
    "Quintus ": "昆托斯·",
    "Ragnar ": "拉格纳·",
    "Raven ": "蕾文·",
    "Rex ": "雷克斯·",
    "Saros ": "萨罗斯·",
    "Silas ": "赛拉斯·",
    "Sirius ": "天狼星·",
    "Taliesin ": "塔莱辛·",
    "Tarquin ": "塔奎恩·",
    "Theron ": "瑟龙·",
    "Tiberius ": "提贝里乌斯·",
    "Ulysses ": "尤利西斯·",
    "Valerian ": "瓦莱里安·",
    "Viktor ": "维克托·",
    "Xander ": "桑德尔·",
    "Xerxes ": "泽尔克西斯·",
    "Zephyr ": "泽菲尔·",
    "Zorion ": "佐里翁·",
    "Zephyrus ": "泽菲鲁斯·",
    "Altair ": "阿尔泰尔·",
    "Aurelius ": "奥雷利乌斯·",
    "Branwen ": "布兰温·",
    "Corvus ": "科尔瓦斯·",
    "Cyrus ": "赛勒斯·",
    "Dante ": "丹特·",
    "Evander ": "伊万德尔·",
    "Faust ": "浮士德·",
    "Gideon ": "吉迪恩·",
    "Hector ": "赫克托尔·",
    "Ivor ": "艾沃·",
    "Jasper ": "贾斯珀·",
    "Kyros ": "基罗斯·",
    "Lysander ": "莱桑德尔·",
    "Mael ": "马尔·",
    "Nikolas ": "尼科拉斯·",
    "Oberon ": "奥伯伦·",
    "Phelan ": "费兰·",
    "Raphael ": "拉斐尔·",
    "Remus ": "雷姆斯·",
    "Severin ": "塞韦林·",
    "Soren ": "索伦·",
    "Taranis ": "塔拉尼斯·",
    "Thaddeus ": "塞迪乌斯·",
    "Vladimir ": "弗拉基米尔·",
    "Wolfram ": "沃尔夫拉姆·",
    "Xanthus ": "赞瑟斯·",
    "Yorick ": "约里克·",
    "Zane ": "赞恩·",
    "Aldric ": "奥尔德里克·",
    "Ansel ": "安瑟尔·",
    "Baird ": "贝尔德·",
    "Caius ": "凯乌斯·",
    "Dariel ": "达瑞尔·",
    "Emeric ": "埃梅里克·",
    "Frey ": "弗雷·",
    "Garrick ": "加里克·",
    "Helios ": "赫利俄斯·",
    "Isaiah ": "以赛亚·",
    "Julius ": "尤利乌斯·",

    //
    "Spiritual": "精神的",
    "Capable": "熟练的",
    "Intelligent": "聪明的",
    "Wise": "智慧的",
    "Erudite": "博学的",
    */

    //
    "Scholar": "学术",
    "Improve your learning abilities, decrease runes effort increase with leveling (making you able to afford significantly more rune levels)": "强化你的学习能力，降低每一级符文学习所需的经验值。这将显著提升你可以学习的符文等级",
    "Physical": "物理",
    "Improve your physical power, making all physical actions executed faster": "强化你的身体力量，提升物理动作的速度上限和速度",
    "Mental": "精神",
    "Improve your mental power, making all mental actions executed faster": "强化你的精神力量，提升精神动作的速度上限和速度",
    "Magical": "魔法",
    "Improve your magic power, making all spells executed faster": "强化你的魔法力量，提升法术动作的速度上限和速度",

    "till reincarnation available": "单位总权重 后转生可用",

    //
    "Refine Wood": "制造精炼木材",
    "Craft Paper": "制造纸",
    "Craft Brick": "制造砖块",
    "Charge Wood": "制造注能木材",
    "Charge Paper": "制造注能纸",
    "Make Sand": "制造沙子",
    "Craft Glass": "制造玻璃",
    "Craft Iron Plate": "制造铁板",


    //
    "Crafting Table": "工艺制作台",
    "You need more tools to make crafting more convenient. But you can craft them, dont you?": "你需要更多的工具来提高工艺制作的效率。不过你可以制作这些工具，不是吗？",
    "Training Bench": "健身训练台",
    "Very basic, but very helpful equipment for trainings. Provide 5% bonuses to Strength and Vitality": "基础但有用的健身器材。使力量和活力提升 5%",
    "Rune Holder": "符文容器",
    "Lets work on something making runes learning more efficient. At least, these wooden holders should help you a bit": "来制作一些提高符文学习效率的东西吧。这些木制的容器应该会有用",
    "Bookshelf": "书架",
    "It looks like there is complete disorder in your library. An extra shelf will help organize your notebooks with notes.": "看起来你的图书馆里一团乱。额外的书架应该会对整理笔记有帮助",
    "Manuscript": "手稿",
    "Build some magic manuscript to improve your willpower": "制作一些魔法手稿，来提高你的精神",
    "Spell Scroll": "魔法卷轴",
    "Spell scroll, boosting your Spellbinding": "制作魔法卷轴，提高你的咒力",
    "Stone Wall": "石墙",
    "My home is my fortress. Build some walls to prevent yourself from disruption when resting, to increase rest efficiency": "家就是你的堡垒。建造一些墙壁，让你在休息时免受打扰，从而提高休息的效率",
    "Cellar": "地窖",
    "You must have some place to store your goods": "你得准备一些储藏货物的地方",
    "Lumbermill": "锯木机",
    "Increase your wood craft efficiency": "提高制作精炼木材和注能木材的效率",
    "Magic Clock": "魔法时钟",
    "Create clock that able to slow down time around you, increasing your actions speed": "制作能够减缓周围时间流速的时钟，提高你的动作速度",
    "Magic Scroll": "魔法卷轴",
    "Create more sophisticated but pretty useful scroll, amplifying your magic and mental abilities": "运用更好的材料，制作更加复杂但也更强大的卷轴，它能同时增幅你的智力和咒力",
    "Knowledge Orb": "知识宝珠",
    "Put magic parchment into glass sphere to crate magic resonance, boosting your knowledge gain": "利用魔法羊皮纸和玻璃球之间的魔法共鸣，提升知识获取",
    "Conjuration Orb": "造物宝珠",
    "Increase your conjuration spell speed": "提高你使用造物法术的速度",
    "Forge": "车间",
    "Increase your max crafting slots by 1": "使你的工艺制作槽位上限增加 1",
    "Stone Crusher": "碎石机",
    "Increase your brick and sand output": "提高你的砖块和沙子产量",
    "Elemental Monument": "元素纪念碑",
    "Increase your spark income": "提升你的火花获取",
    "Stone Compendium": "石板概要",
    "Consists of knowledge of the ancient": "包含来自远古的知识",
    "Elemental Tower": "元素塔",
    "Must have building for all mages. Boosts your elemental damage": "每一位巫师必备的建筑。提升元素伤害",
    "Magic Printer": "魔法打印机",
    "Advanced printing mechanism, boosting your paper goods production": "这是一种高级的打印机制，能提升你的纸张类制造物的产量",
    "Elemental Resonator": "元素共鸣器",
    "Creates magic resonance between your mind and material things surrounding you, boosting your conjuration lore even more": "在你的精神和周围的食物之间创造魔法共鸣，进一步提升你的造物学识",
    "Mind Resonator": "精神共鸣器",
    "Creates resonance between your brain impulses, severely boosting your mental activities efficiency": "在你的精神活动之间创造共鸣，极大幅度地提升你的精神类动作效率",
    
    
    "Bone Storage": "藏骨处",
    "Increase your bone storage capacity": "提升骨头存储上限",
    "Bone Charm": "骸骨护符",
    "Increase your max HP": "提升最大生命值",
    "Bone Statue": "骸骨雕像",
    "Increase your mana income significantly": "显著提升法力产量",
    "Bone Rack": "骸骨书架",
    "Increase your knowledge capacity even more": "进一步提升知识上限",
    "Bone Banner": "骸骨旗帜",
    "Raise your spirits, increasing battle stamina": "鼓舞你的战斗意志，提升战斗耐力",
    "Bone Mill": "骨磨",
    "A machine made of bones, magic and love to craftsmanship. Increase your crafting slots by 2": "一台用骨头，魔法和满满的爱制成的恐怖机器。使你的工艺制作槽位上限增加 2",
    
    //
    /*
    "PENDING": "挂起",
    "COMLETE": "完成",
    "FAILED": "失败",
    */
    "Mana Cap Sacrifice": "法力上限符文献祭",
    "Now you know how to store mana.": "你掌握了储存更多法力的方法",
    "Perform one sacrifice on mana cap rune": "献祭一次法力上限符文",
    "Willpower Sacrifice": "精神符文献祭",
    "Show the power of your will to everyone!": "把你意志的力量展现给每个人！",
    "Perform one sacrifice on willpower rune": "献祭一次精神符文",
    "Intellect Sacrifice": "智力符文献祭",
    "So smart...": "真聪明……",
    "Perform one sacrifice on intellect rune": "献祭一次智力符文",
    "Knowledge Sacrifice": "知识符文献祭",
    "You are the wise one": "你即智者",
    "Perform one sacrifice on knowledge rune": "献祭一次知识符文",
    "Memory Rune Sacrifice": "记忆符文献祭",
    "Even if you could live several lives, you would remember all of them": "即便生命重来无数次，你也不会丢失你的记忆",
    "Perform one sacrifice on memory rune": "献祭一次记忆符文",
    "Mastery Rune Sacrifice": "大师符文献祭",
    "The master of runes. Yes, you. You are the champ!": "符文大师，对，就是你，你就是符文大师！",
    "Perform one sacrifice on rune master rune": "献祭一次大师符文",
    "Sacrifice runes now provide better effect (0.2 to exponenta in effect formula)": "符文献祭的效果得到强化（公式中的指数增加 0.2，获得时立刻对所有符文生效）",
    "Breath Techniques": "呼吸技巧",
    "If you lived in the highest mountains, you would definitely survive": "即便在最高的山巅，你也能自在地呼吸",
    "Perform Breath Techniques for 500 times": "进行 呼吸技巧 动作 500 次",
    "Breath Techniques II": "呼吸技巧 II",
    "The survivor": "生存者",
    "Perform Breath Techniques for 10000 times": "进行 呼吸技巧 动作 10K 次",
    "The Stranger": "陌生人",
    "Yes, you understand this world": "是的，你理解了这个世界",
    "Perform Investigate World for 500 times": "进行 探索世界 动作 500 次",
    "The Stranger II": "陌生人 II",
    "Over the hills and far away...": "越过山岗，去向远方……",
    "Perform Investigate World for 10000 times": "进行 探索世界 动作 10K 次",
    /*
    "Unyielding Spirit I": "坚定意志 I",
    "Your willpower shines through, unwavering and steadfast.": "你的意志坚定，闪耀，无可动摇。",
    "Reach 1M Willpower": "精神达到 1M",
    "Unyielding Spirit II": "坚定意志 II",
    "Your willpower is an unbreakable force, surpassing mortal limits.": "你钢铁般的意志，超越了人类的极限。",
    "Reach 1T Willpower": "精神达到 1T",
    "Unyielding Spirit III": "坚定意志 III",
    "Your willpower transcends known boundaries, setting a new pinnacle of mental fortitude.": "你的意志超越已知的界限，成为了刚毅的象征",
    "Reach 1Sx Willpower": "精神达到 1Sx",
    "Mind's Horizon I": "头脑边界 I",
    "Your intellect breaks through the first barrier, unveiling new realms of thought.": "你的智力打破了第一层壁障，揭示了思想的全新领域。",
    "Reach 1M Intellect": "智力达到 1M",
    "Mind's Horizon II": "头脑边界 II",
    "Your intellect now dwells in territories only dreamed of, a testament to your cognitive mastery.": "你的智力已经达到以往只能想象的领域。",
    "Reach 1T Intellect": "智力达到 1T",
    "Mind's Horizon III": "头脑边界 III",
    "Your intellect has scaled heights unseen, becoming a beacon of wisdom and knowledge.": "你的智力达到了前所未有的高度，成为了智慧和知识的象征",
    "Reach 1Sx Intellect": "智力达到 1Sx",
    "Arcane Anchor I": "",
    "You have begun to tap into the essence of spellbinding, harnessing arcane energies.": "",
    "Reach 1M Spellbinding": "",
    "Arcane Anchor II": "",
    "Your mastery of spellbinding now weaves complex magical tapestries, bending reality.": "",
    "Reach 1T Spellbinding": "",
    "Arcane Anchor III": "",
    "You stand at the apex of spellbinding, a master of arcane forces unparalleled.": "",
    "Reach 1Sx Spellbinding": "",
    "Lifeblood I": "",
    "Your vitality surges, brimming with newfound strength and vigor.": "",
    "Reach 1M Vitality": "",
    "Lifeblood II": "",
    "You exhibit extraordinary vitality, resilient and enduring against all odds.": "",
    "Reach 1T Vitality": "",
    "Lifeblood III": "",
    "Your vitality has reached legendary proportions, a paragon of health and endurance.": "",
    "Reach 1Sx Vitality": "",
    "Might of Titans I": "",
    "Your strength grows formidable, echoing the might of ancient titans.": "",
    "Reach 1M Strength": "",
    "Might of Titans II": "",
    "Your sheer strength is awe-inspiring, capable of feats once deemed impossible.": "",
    "Reach 1T Strength": "",
    "Might of Titans III": "",
    "In the realm of strength, you are now a legend, wielding power that bends the very fabric of reality.": "",
    "Reach 1Sx Strength": "",
    "Runic Scholar I": "",
    "Your mastery of runes has reached an initial, remarkable milestone.": "",
    "Reach 1M Rune Mastery": "",
    "Runic Scholar II": "",
    "Your understanding of runes now delves into the deeper, more arcane aspects.": "",
    "Reach 1T Rune Mastery": "",
    "Runic Scholar III": "",
    "Your rune mastery reaches a zenith, bridging the gap between the physical and the mystical.": "",
    "Reach 1Sx Rune Mastery": "",
    "Fleetfoot I": "",
    "Your agility has hit a remarkable milestone, making you swift and elusive.": "",
    "Reach 1M Agility": "",
    "Fleetfoot II": "",
    "Your agility is unmatched, allowing you to move with unparalleled grace and speed.": "",
    "Reach 1T Agility": "",
    "Fleetfoot III": "",
    "You have achieved the pinnacle of agility, moving like a whisper on the wind.": "",
    "Reach 1Sx Agility": "",
    */
    /*
    "Sewer Survivor": "下水道生还者",
    "You have braved the dank and dangerous sewers, reaching combat level 50 amidst its murky depths.": "",
    "Reach combat level 50 in the Sewers": "",
    "Lord of the Underworld": "",
    "Master of the Sewers, you have reached combat level 100, dominating its shadowy corridors.": "",
    "Reach combat level 100 in the Sewers": "",
    "Lake Guardian": "",
    "At the serene yet deceptive lake, you have achieved combat level 50, proving your prowess.": "",
    "Reach combat level 50 at the Lake": "",
    "Lake Conqueror": "",
    "With unmatched skill, you have conquered the Lake, reaching combat level 100.": "",
    "Reach combat level 100 at the Lake": "",
    "Field Fighter": "",
    "In the open fields, you have proven your mettle by reaching combat level 50.": "",
    "Reach combat level 50 in the Field": "",
    "Master of the Meadows": "",
    "As a true Master of the Meadows, you have reached the pinnacle combat level 100 in the Field.": "",
    "Reach combat level 100 in the Field": "",
    "Cave Challenger": "",
    "Within the echoing caves, you have fought bravely to reach combat level 50.": "",
    "Reach combat level 50 in the Cave": "",
    "Cavern Conqueror": "",
    "In the depths of the Caves, you have achieved the legendary combat level 100.": "",
    "Reach combat level 100 in the Cave": "",
    "Forest Forerunner": "",
    "Amidst the whispering woods of the Forest, you've attained combat level 50, a true forerunner.": "",
    "Reach combat level 50 in the Forest": "",
    "Sylvan Sovereign": "",
    "As the Sylvan Sovereign, you reign supreme in the Forest, having reached combat level 100.": "",
    "Reach combat level 100 in the Forest": "",
    "Scholar Warrior": "",
    "Amongst ancient tomes and mystical lore, you've reached combat level 50 in the Library.": "",
    "Reach combat level 50 in the Library": "",
    "Guardian of Knowledge": "",
    "As the Guardian of Knowledge, you have achieved combat level 100, mastering the battles of the mind and sword in the Library.": "",
    "Reach combat level 100 in the Library": "",
    */

    //
    "I am new to game. How should I start?": "我是萌新，这游戏怎么玩？",
    "Every mage should start from learning runes. They provide bonuses to basic and very important mage attributes and resources.": "",
    'Navigate to "Runes" tab under "Learning" page. Here you see list of runes available for you. Initially you have only one rune available - "Mana Capacity". So, you should start learning it by clicking "OFF" button on it.After you press the button, the inscription will change to "ON", which means that this rune is active. Studying the rune requires time and resources. Once you have gathered enough resources, they will be deducted from you, and the study of the active rune will begin. As soon as the study is completed - you will receive a new level of the rune, with greater bonuses.': "打开 学习 页面下的 符文 选项卡。在这里，你会看到可用的符文列表。一开始只有一个符文可供选择——法力上限符文。因此，你应该通过单击其上的 关 按钮来开始学习它。按下按钮后，符文状态将变为 开，表示该符文已激活。学习符文需要时间和资源。一旦收集到足够的资源，它们将被扣除，并且用于学习激活的符文。学习完成后，符文的等级就会提高，提供的加成也会提高。",
    "It should be noted that the study of the active rune will not start until you accumulate enough resources. If the rune is active, its study will begin automatically as soon as you have accumulated enough resources.": "值得注意的是，如果所需资源不足，激活的符文并不会开始学习。但只要符文保持激活状态，一旦收集到足够的资源，其学习就会自动开始。",
    "How do I know what each rune does?": "我如何知道每个符文的功能？",
    "You can hover over rune to see it's effect, or click to see more detailed description": "可以将鼠标悬停在符文上以查看其效果，或者单击符文以查看更详细的描述。",
    "I feel like my learning runes speed slow down. Why?": "我感觉我的符文学习速度越来越慢。为什么？",
    "Its ok. The more you learn rune, the more time it takes to learn new level": "这是正常的。符文的级别越高，学习符文所需的时间就越长。",
    "Each next level require 4% more time than previous one. You can see specific amount of rune XP required for level up in details tab by clicking rune": "每个等级所需的时间比上一级多 4%。你可以通过单击符文，查看详情页显示的符文经验值，来了解具体的升级需求。",
    "Dont worry. Game provides a lot of ways to reduce time by increasing rune learning speed as well as decrease rune requirement": "不用担心。游戏提供了许多方式来通过增加符文学习速度以及减少符文要求来减少学习时间。",
    "I feel like learning anything start taking too much time. What to do?": "我感觉所有符文学起来都很慢了。怎么办？",
    "Learn upgrades tab (unlocked when you have 10 mana capacity). You have some upgrades that can speed up rune learning": "请尝试解锁升级选项卡（需要 10 点法力上限解锁）。这里有一些可以加速符文学习的升级。",
    "I have red indicator with S letter inside over rune. What does it mean?": "我在符文上看到一个带有字母 S 的红色标志。这是什么意思？",
    "It means that you finally ready for first prestige layer - rune sacrifice": "这表示你可以进行这个游戏的第一种重置：符文献祭。",
    "Rune sacrifice resets all your runes levels and resources, but makes rune learning speed and power much better": "符文献祭会重置所有符文的等级，以及你的资源，但会使被献祭符文的学习速度和威力大大提高。",
    "Should I sacrifice as soon as I see indicator?": "我一看到献祭标志就应该立即进行献祭吗？",
    "Nope! You should take a look at numbers. In rune details you can see potential multipliers": "并非如此。你需要确认一下相关数值。在符文的详情页，你可以看到献祭该符文后可以获得的加成。",
    "Its much more efficient to wait for having 1.5-2 times larger rune power multiplier before you sacrifice, since it takes time to build up your runes again": "因为符文献祭会重置所有符文的等级，所以建议至少等到献祭的效果加成达到当前加成的 1.5-2 倍时，再进行献祭。",
    "What are crystals?": "水晶是什么？",
    "Crystals are important part of game. They provide you bonuses that NEVER reset!": "水晶是游戏的重要组成部分。它们的加成不会被重置！",
    'Once you performed "Crystals" upgrade at runes tab, you can purchase new crystals. Crystals that already have 1 level can be upgraded even without upgrade purchase.': "一旦你在符文页解锁了 水晶 升级，你就可以购买新的水晶了。如果你已经拥有这种水晶，那么以后不需要这个升级也可以升级水晶。",
    "Ok, I unlocked Crystals and several new runes. Whats next?": "好的，我解锁了水晶和几种新的符文，然后呢？",
    "Try to get ticket to mages city upgrade. It unlocks whole new game layer!": "尝试解锁 巫师之城的门票 升级。这会解锁全新的游戏内容。",
    "What to do in city?": "在城市里要做什么？",
    "First of all - you can do actions, providing you different bonuses. Also, you can now access academy for purchasing upgrades unlocking new content": "首先，你可以执行动作，这会给你带来各种各样的加成。另外，你也可以通过 学院 页面，购买解锁后续游戏内容的升级。",
    "How to use actions?": "动作要怎么执行？",
    "You cant use them directly. Actions are used only when they added to list that is currently running": "你可以直接点击动作旁边的按钮，这会基于动作所需的体力，自动执行动作并休息",
    'You should first of all create new actions list (bottom left of "Actions" tab at "City" page). Add new actions to your list. You\'ll see time required for list to run, and bonuses/resources provided by list to the bottom right.': "你也可以创建列表（在城市-动作页面的左下角），然后将动作加入列表，并且为列表命名，然后保存，这样就可以自动执行更多种类的动作。过程中你可以在页面右下方看到整个列表每秒提供的加成和消耗。",
    "Keep on track your action list resources usage. If you dont have enough of them - list will be performed much slower (or even wont be able to run at all)": "需要特别留意列表的消耗。如果资源不足，列表的执行速度会相应降低，甚至可能完全停止。",
    'Also, please keep in mind that almost every action requires energy. If you see that it goes below 0 for edited list - just add "Rest" action. It will take more time to perform, but makes you able to keep running list without tiring (going above 0 on "Energy" resource, and interrupting list)': "还需要注意的是，几乎所有动作都需要消耗体力。不过添加完动作之后，可以直接点击动作列表下方的 设置 X 次休息 按钮，自动添加足够数量的休息。这会让列表的耗时变长，但也会让列表可以一直执行下去，不会因为体力耗尽而停止。",
    "I feel stuck. Actions are taking too much to be done": "我感觉卡住了。有些动作耗时太长了。",
    "First of all, every action can be sped up by boosting impacting attributes. You can see this in action details, by clicking specific action": "首先，每一个动作的耗时都可以通过关联属性来降低。每个动作的关联属性可以通过动作的详情页查看。",
    "Also, when you create or edit list, you can see in list details (bottom right, under bonuses and resources gain breakdown) attributes, impacting list speed the most": "另外，在你创建或编辑列表时，你可以在页面右下方看到整个列表的关联属性，以及影响比例。",
    'So, if you create list having a lot of "Investigate the world" actions - just run breath techniques before to speed it up, or add them into you list, to make it speed up itself': "例如，如果你创建了一个包含大量 探索世界 动作的列表，你可以先执行 呼吸技巧 动作来让他变快；也可以直接把两个动作加进同一个列表，这样它自己就会执行得越来越快。",
    "Also, keep your runes strong enough to provide significant attribute bonuses.": "当然，保持较高的符文等级来提供属性加成，也是很重要的。",
    "And finally - you can always determine weak attributes, create list focused on raising them up - and go doing your own business while list is running and making your personage stronger. Its rather active, but still an idle game) If you have to wait 10-15 minutes - its ok.": "最后，别忘了这是一款放置游戏。你完全可以创建一个能够自己执行、不会中断的列表，然后放置一会甚至一晚上，大大提高整体实力，然后再继续玩。",
    "What reincarnation does": "转生有什么用？",
    "Reincarnation resets all your resources, rune levels and actions bonuses, but provide various bonuses": "和符文献祭一样，转生会重置你所有的资源和符文等级，因此建议在转生前先进行一次符文献祭。转生还会重置所有动作的执行次数和所提供的加成，但会基于你所选择的类型，提供不同种类的加成。",
    "It keeps your crystal and rune sacrifices. So, its a good practise to sacrifice runes as much as you can before you do reincarnation": "符文献祭的效果和水晶都会保留。因此通常来说，在每次转生之间多进行几次符文献祭会比较好。",
    "Reincarnation is very important part of game progress, but you should do it only once you experiencing troubles getting next upgrade/milestone, or when potential bonus is significant": "转生是游戏进程非常重要的一环，不过通常来说建议在你感觉达到下一个目标很困难，或者可以获得的加成非常巨大时，再来进行。",
    "What reincarnation type should I chose?": "我应该选择哪种转生方式？",
    "General answer - its up to you. Not that helpful advise, right?": "答案是——看你自己。是不是说了好像等于没说？",
    'Ok. Reincarnations giving a huge boost to max actions speed. Having actions boosting attributes that they rely on (like "Mental Aptitude", or "Breath Techniques") - speed limitations are your main bottlenecks early on. So, first of all, look at resource you need the most, ways of incrementing it via actions and limiting attribute on this action.': "转生会提供巨额的动作速度上限加成。对于某些动作（例如 休息 和 呼吸技巧 等）而言，速度上限是非常致命的限制。因此，你需要找到目前最需要提高速度上限的动作种类，并且进行这种类型的转生。",
    "Need more mana cap? Meditation is a way you go. Need more intellect? Try mental reincarnation. Need more energy to be able grab even more intellect? Go for physical reset.": "休息经常是占用时长最多的动作，而且受到速度上限的影响也最严重。因此，第一次转生建议选择物理转生，后面就看具体情况了。",
    "Feel stuck on runes - do Runes reincarnation. Learning speed multiplier will give you more levels, more sacrifice power and make your run starts easier.": "如果感觉符文等级太低，也可以执行学术转生。学术转生可以提供大量的符文学习速度，从而提供整体的加成，也是很有用的。",
    "What are combat locations?": "什么是战斗地点？",
    "Battles with monsters occur in various locations. Initially, only one location is available to you - the Sewers. As you progress in the previous location, the next ones will unlock. Each location is divided into zones. 20 victories in a zone unlock the next one.": "和怪物的战斗可以在多个地点进行。在最开始，只有一个可用的地点——下水道。每个地点都有不同关卡的战斗。在当前关卡胜利 20 次即可解锁下一个关卡，在每个地点通过 20 个关卡就可以解锁下一个地点。",
    "How do I start a battle?": "我要如何开始战斗？",
    'Battles occur in automatic mode and start as soon as you press "Enter Location". However, to inflict damage on enemies, you need to perform attacks or use magic. Before the fight, you must create a list of battle actions and launch it. Each action requires time and "Battle Actions", a resource produced in the city "Fight".': "战斗是自动进行的，你只需要点击 进入 就会直接开始。不过，你不会自动对怪物造成伤害，需要手动选择使用的战斗动作。你需要先在城市动作里启用 战斗，然后就会产生 战意 资源，随后在战斗动作中建立列表，才能对怪物造成伤害。",
    "Step by step:": "具体步骤如下",
    '1. In the city, launch a list that includes "Battle Actions" production.': "在 城市 页面，建立一个能够产生 战意 资源的列表（或者一键列表）。这种资源没有办法储存，因此如果你想要战斗，必须始终保持该列表激活；",
    '2. In the "Actions" tab on the "Battles" page, create and launch a list of battle actions. If you produce insufficient "Battle Actions", your list will be less effective, but you can still fight and progress.': "在 战斗 页面，建立一个包含你想使用的战斗动作的列表。如果你所使用的战斗动作需要的战意超过目前的每秒产量，该战斗动作的效率就会降低，但你依然可以使用；",
    '3. In the Locations tab, select a location and press "Enter Location".': "在 地点 选项卡，选择一个地点并点击 进入。",
    "I lost in battle. What now?": "我打输了。怎么办？",
    "Don't be upset, your character is weak at the beginning. But defeat is not a big deal. Your character will rest and fully restore health in 100 seconds. You can continue the battle as soon as you restore enough health. This will not affect your actions in the city.": "不要沮丧，你的角色一开始确实很弱，输也没什么大不了的。默认状态下只要 100 秒你的角色就会回满血。只要回复到足够的生命值，你就可以继续战斗了，不一定要回满。并且战斗失败也不会影响 符文、动作 等其他的行动。",
    "How do I become stronger?": "我要怎么变强？",
    "To become stronger, increase your combat attributes. Initially, try to raise Vitality and Strength. Victories in battles bring resources and equipment, affecting your attributes. Over time, as you unlock new upgrades in the academy, you gain access to new battle actions, diversifying your strategy.": "想要变强，你就得提升战斗属性。在最开始，你可以先尝试提升 活力 和 力量，它们分别会提升你的最大生命值和物理伤害。你也可以通过战斗获取装备，从而提升你的属性。在学院解锁新的战斗动作也可以提升你的战斗力，不过新的动作可能需要更高的战意。战意的获取速度基于耐力属性，提升耐力的方法相对比较少。",
    "What about equipment?": "装备是怎么回事？",
    "Equipment works in a classic way. Battles bring you weapons or armor, giving bonuses when equipped. For information about bonuses, hover over the weapon. To equip, click on it.": "这游戏的装备系统很老套，就是战斗胜利，获取装备，穿上就有加成。具体的加成把鼠标移到装备上就可以看到，点击就可以穿上了。",
    "Can I somehow improve my equipment?": "我可以升级我的装备吗？",
    'Of course! When you dismantle unnecessary weapons, you receive shards of various materials. Each weapon gives a different number of shards, depending on its quality. After accumulating enough shards, remove the item you want to improve. Press "Upgrade mode" and click on the item. The necessary number of shards will be shown when hovering over the item.': "当然！当你分解不需要的装备（或者通过筛选自动分解）时，你会获得不同种类的材料。更高稀有度的装备会提供更多的材料。进入升级模式，把鼠标移到装备上，就可以看到升级所需的材料，点击就可以升级了。",
   
    /*
    "Dark room"
    "You awaken in a dark and cold room, confused about your whereabouts."
    "Suddenly, you see the light of a torch gradually approaching."
    "Oh, has Sleeping Beauty awoken?"
    "Where am I?"
    "That\'s not important for now. Domingo, take care of him!"
    "Yes, sir! Of course!"
    "The man in the cloak disappears. His servant begins to speak."
    "My master may seem stern, but he means no harm. You\'re lucky he found you first."
    "Found me? Where am I, and what\'s happening to me?"
    "Domingo: \"
    "What power? I don\'t feel tired..."
    "Magical strength. Well, since you remember nothing, let\'s start from the basics - runes."
    "Runes? Magical powers??? I understand less and less what\'s going on."
    "The servant approaches a table and removes a cover from it. You see strange glowing objects."
    "Your memory will return to you gradually, along with your magic. First, you need to know that the main power of a mage lies in the power of thought. However, using your magical potential requires a lot of magical energy - mana. These runes hold the basic knowledge for a mage. To start with, you need to work on mana control. Take this magnifying glass."
    "You take the magnifying glass and approach the table. Letters start to appear on the runes, but they change quickly. You barely manage to read a hieroglyph..."
    "You (surprised): \"
    "Reach 2 mana capacity"
    "Replenish powers"
    "After some time, Domingo returns to check on your progress."
    "How are you feeling? Any progress with the mana control?"
    "You: \"
    "Domingo: \"
    "Willpower? How does that help with mana?"
    "Willpower is the mental strength to channel and sustain magical energy. It\'s essential for a mage. The more you have, the more mana you can gather and retain."
    "I see. So, how do I increase my willpower?"
    "By mastering the willpower rune. This rune will help you focus and strengthen your mind, increasing your mana income over time."
    "I understand. I\'ll focus on this willpower rune then."
    "Domingo: \"
    "You take a deep breath, focusing on the new rune before you, determined to master this new aspect of your growing powers."
    "Have 30 willpower rune"
    "Sharpened Mind"
    "Domingo enters the room with a look of anticipation, noticing your deep focus on the magical texts before you."
    "Domingo: \"
    "The Intellect rune? Sounds intriguing."
    "Indeed, it is. This rune enhances your mental acuity, making the rune learning process more efficient. For a mage, having a sharp mind is not a luxury; it\'s a necessity."
    "So it will aid me in grasping complex magical concepts more swiftly?"
    "Exactly. The Intellect rune is fundamental in accelerating your understanding of deeper magical principles. It\'s an essential step on your path."
    "That sounds like a critical advantage. I\'m eager to learn and master this Intellect rune."
    "Good. Remember, in the world of magic, a keen mind is your most potent weapon."
    "You nod, feeling a sense of excitement at the prospect of expanding your mental capabilities, ready to delve into the mysteries of the Intellect rune."
    "Have 4 max mana"
    "Have 50 intellect rune"
    "Expanding Mana"
    "Domingo watches you practice with a satisfied nod."
    "Your control over mana is improving. Now, it\'s time to expand your limits. Aim to reach 10 maximum mana."
    "Ten maximum mana? That sounds like a lot."
    "Indeed, it is a significant milestone. But I believe in your potential. It will allow you to handle more complex and powerful runes."
    "I\'ll do my best. The more mana I can handle, the more powerful I can become."
    "Precisely. Remember, the journey of a mage is a marathon, not a sprint. Patience and persistence are key."
    "You focus back on your runes, determined to reach this new goal, feeling the flow of mana becoming ever more familiar."
    "Have 10 mana capacity"
    "Mystical Enhancements"
    "While practicing, you notice a shelf that begins to glow as you approach it."
    "You: \"
    "As you inspect the shelf, Domingo enters the room."
    "Domingo: \"
    "Can these really help me with the runes?"
    "Absolutely. For starters, use the inventory to upgrade your Mana Orb, which will increase your mana capacity. Also, take an additional rune table from there. It will allow you to learn multiple runes simultaneously."
    "That sounds incredibly useful. I\'ll make sure to utilize these enhancements."
    "Wise decision. These tools will aid you greatly on your path to becoming a powerful mage."
    "You approach the shelf with a sense of awe, ready to explore the myriad of mystical aids that will bolster your magical journey."
    "Better mana orb"
    "Upgrade Rune table"
    "Wizard Orb"
    "As you meticulously arrange your study materials, Domingo enters, his presence bringing a sense of urgency."
    "Domingo, catching your attention: \"
    "The Wizard Orb? What does it do?"
    "The Wizard Orb is a powerful artifact that accelerates the process of rune learning. However, it comes at a cost. Utilizing it makes the learning process more resource-intensive."
    "So, it will speed up my learning, but at the expense of using more resources?"
    "Precisely. The Orb channels the essence of your resources directly into the acceleration of your magical studies. It\'s a tool for those ready to invest heavily in their growth, sacrificing immediate resources for rapid advancement."
    "That sounds like a powerful advantage. I\'m willing to make the necessary sacrifices for my development."
    "Wise decision. The path of a mage is fraught with such choices. The Wizard Orb will test your dedication and resourcefulness."
    "I\'ll use the Wizard Orb wisely, balancing my resources to maximize my growth. Thank you, Domingo."
    "The journey of magic is one of constant learning and adaptation. The Wizard Orb is but one of many tools you\'ll encounter. Use it well."
    "Build at least 1 level wizard orb"
    "Activate at least 1 level wizard orb"
    "The Knowledge Quest"
    "Mana is crucial, but a mage\'s journey also demands another mental resource - knowledge."
    "Knowledge? How does that help?"
    "Domingo: \"
    "Alright, I\'ll focus on mastering this Knowledge rune."
    "Excellent. Remember, the depth of your knowledge defines the height of your power."
    "Purchase Knowledge upgrade"
    "Have 50 Knowledge runes"
    "The Transformation of Power"
    "Reaching a high level of mana capacity is vital. Aim for 175 levels of the mana cap rune."
    "Once mastered, you can sacrifice your understanding of this rune to enhance its power significantly."
    "Sacrifice my understanding?"
    "Yes, but it worth it."
    "You nod, understanding the importance of this task, ready to push your limits."
    "NOTE: Look for a red indicator with an 'S' on the rune. Sacrificing it unlocks its true potential. Check the details at the bottom of the rune's page for the bonus it provides."
    "Have at least 175 mana capacity runes"
    "Sacrifice mana capacity rune"
    "A Test of Will"
    "After sacrificing the rune, you feel extremely weak, as if your skin is burning."
    "This weakness is part of the process. Your willpower rune must also be sacrificed to reveal its full potential."
    "It\'s painful... but I understand the necessity."
    "Unfortunately, you have to do this for each rune separately. As you, probably, already understood - Willpower rune also requires sacrifices."
    "Remember to utilize the shelf\'s instruments. They can be of great aid in your journey."
    "You nod, steeling yourself for the next phase of your magical evolution."
    "Have at least 175 willpower runes"
    "Sacrifice willpower rune"
    "Echoes of the Past"
    "The room darkens as the man in the cloak reappears, his enigmatic aura filling the space."
    "You have traversed a significant path, yet it is only the beginning. I found you amidst the remnants of a forgotten battle."
    "A battle? What more can you tell me? Who am I in this vast world of magic?"
    "Patience. Your past is not yet ready to surface. Focus on the now."
    "The path of a mage is as much about the present as it is about the past. Our magical shelf glows with items and upgrades essential for your journey. It\'s a repository of arcane knowledge and tools."
    "So, these upgrades... How do they fit into my training?"
    "Each item, each upgrade, has its purpose. They enhance your abilities, aid in learning runes. But remember, the art of magic is a balance. Adjusting the Wizard orb level will increase resource demands for boosting rune learning speed, yet it will also escalate the cost in mana and knowledge."
    "A strategic decision, then. How I use my resources to learn runes or adjust the orb could shape my journey as a mage."
    "Precisely. The path of magic is yours to shape. Use the glowing shelf wisely, balance your resources, and your magical prowess will grow. The choices are yours, and they will forge your destiny."
    "You stand before the glowing shelf, feeling the weight and potential of your choices, ready to delve deeper into the arcane mysteries that await."
    "NOTE: Keep looking for rune sacrifices for reasonable bonuses. That might help you!"
    "Crystals"
    "Source of mana"
    "Unlocking the Mastery"
    "Knowledge is a journey, not a destination. To quicken your path, the Rune Mastery rune awaits your attention."
    "Rune Mastery? How will it aid me?"
    "It\'s a rune of potent knowledge, a beacon that illuminates the arcane path. Activating it will hasten your understanding of all runes, making your studies less arduous and more fruitful."
    "Then I shall embrace this challenge. To master the runes swiftly is to advance my journey towards uncovering my true self."
    "Indeed. The mastery of runes is the mastery of self. Proceed, and let the ancient wisdom guide you."
    "You turn to your studies with renewed vigor, feeling the ancient magic waiting to be unlocked by your newfound knowledge."
    "Rune Mastery rune"
    "Have at least 20 Rune mastery runes"
    "The Gateway to Destiny"
    "As dawn breaks, the man in the cloak leads you to the roof. The first light of morning reveals a hidden city, shrouded in mystic fog and arcane energy."
    "Behold, the Mages\' City, veiled from the world by spells of old. Here, magic breathes and thrives."
    "It\'s magnificent... So, what must I do to earn my place there?"
    "The Cloaked Man, pointing to a distant shimmering light: \"
    "Then I shall not falter. I am ready to take this step, to walk through the gateway to my destiny."
    "The man in the cloak watches silently as you descend back to the chamber, the city's image etched in your mind, a symbol of hope and mystery."
    "Ticket to city"
    "The Breath of Renewal"
    "You step through the door into the bustling Mages City. Domingo greets you with a warm smile."
    "Welcome to our hidden sanctuary. Here, mages seek refuge from those who hunt us. You fought valiantly against Hazzard, the dark elves\' leader, but at great cost."
    "Hazzard... my powers, are they gone?"
    "Domingo: \"
    "You nod, understanding the urgency and importance of regaining your strength."
    "Perform Breath techniques 20 times"
    "Balance of Being"
    "As you practice your breath techniques, Domingo approaches, his robe fluttering gently in the morning breeze of the city."
    "The path of a mage is a delicate balance between the vigor of the body and the wisdom of the mind. Explore our city, meet fellow mages, and continue your breath exercises. The city is alive with lessons and mysteries waiting to be uncovered."
    "I understand. The breath techniques have begun to fortify me, and I am eager to discover the city\'s secrets and its people. Their stories and wisdom are pieces of a larger puzzle."
    "Indeed. And remember, the journey of a mage is never just outward. Continue your study and sacrifice of runes. It is a cycle that perpetuates growth. And do not fear – sacrificing runes will not impede your actions within the city. It is a seamless harmony between internal growth and external exploration."
    "I will balance my journey, walking the line between the arcane and the worldly."
    "That is the spirit. Let the rhythm of the city and the cadence of the runes guide you."
    "Perform Breath techniques 250 times"
    "Perform Investigate world 250 times"
    "The Academy's Call"
    "As you wander through the city, a grand building catches your eye. Its tall spires and mystical symbols mark it as a place of learning."
    "Surprised to see you here so soon. This is our academy, where knowledge and power converge."
    "It\'s magnificent. But how can I contribute here?"
    "For now, focus on learning how to earn coins. It may seem mundane, but it\'s necessary for acquiring upgrades and furthering your studies."
    "You, frustrated yet understanding the need: \"
    "The Cloaked Man nods, a mysterious smile playing on his lips, as he vanishes into the shadows of the academy."
    "You, disappointed, decide to leave without even entering academy"
    "Push up"
    "Have 2 coins"
    "Breaking limits of the mind"
    "Near the academy, you spot Domingo, his arms laden with scrolls, hurrying along. He spots you and pauses, a look of purpose in his eyes."
    "Ah, I was just on my way to find you. Have you been to the academy yet? It\'s a cornerstone of our city, a beacon of knowledge and power."
    "You, curious about the imposing building: \"
    "You must visit it. The academy holds vital upgrades and tools for your journey. There\'s a wealth of knowledge to be found within its walls."
    "He shifts the scrolls in his arms, continuing: \"
    "You, intrigued by the prospect: \"
    "Precisely. Knowledge is the foundation upon which all magic is built. Use it well, and you will see your abilities grow exponentially."
    "With a final nod, Domingo hurries off, leaving you to ponder the secrets that await within the hallowed halls of the academy."
    "Sacrifice Memory rune at least once"
    "Read books"
    "Read books"
    "Mastery of Runes"
    "Domingo finds you deeply engrossed in your rune studies, the air around you tinged with magical energy."
    "Your dedication to the arcane arts is commendable. But now, we must deepen your understanding. The Rune Mastery rune is key to your growth."
    "Rune Mastery? How can I enhance my skills further?"
    "Sacrifice the Rune Mastery rune. It’s a powerful process that will amplify your command over runes. The sacrifice isn’t an end, but a new beginning, a way to access greater magical depths."
    "He then gestures towards the academy: \"
    "I see. Sacrifice for greater power, and continue my learning. The academy holds more secrets for me to uncover."
    "Exactly. With each rune you master and each manuscript you read, you step closer to becoming a true master of the magical arts. Let the academy be your guide."
    "Domingo turns to leave, but after a few steps, he pauses and swiftly turns back towards you."
    "Ah, one more thing! Don’t overlook the power of crystals. They are not mere trinkets but potent tools that enhance your magical abilities. Utilizing crystals wisely can significantly bolster your progress."
    "Crystals... I’ll make sure to explore their potential as well. Thank you, Domingo."
    "Domingo: Also, to reveal true power of magic you will need immense amount of mana. Don't neglect sacrificing runes that increase your mana potential"
    "You: Sure, mana is like a fuel for a wizard"
    "Domingo gives a final nod, a twinkle in his eye, before leaving you to your studies. The mention of crystals adds another layer to the depth of your magical education."
    "Sacrifice rune mastery rune at least once"
    "Rune Language"
    "Read manuscripts"
    "Runic Resilience"
    "Returning to the academy, you find Domingo in conversation with an elderly man."
    "Meet our rune shopkeeper. He holds keys to many powers."
    "This aspiring mage is ready for the Endurance rune."
    "Endurance is vital for any mage. It will test and strengthen your limits. Purchase and focus on this rune."
    "Endurance... it sounds like a vital step in my journey. I\'ll begin my work on it immediately."
    "Domingo and the shopkeeper exchange a knowing glance, as you step towards understanding the resilience of a true mage."
    "Purchase Endurance rune academy upgrade"
    "Sacrifice endurance rune at least once"
    "The Wisdom of Ages"
    "While engrossed in your rune studies, Domingo enters the room."
    "Your progress is remarkable. But the path of a mage requires vast knowledge. Amass 800K in knowledge - it is a key to unlocking deeper arcane secrets."
    "Almost one million in knowledge... a daunting task, but I understand its importance."
    "Visit the academy often. It holds many secrets and upgrades that can aid you. Your journey to mastery is only just beginning."
    "You nod, feeling the weight of your quest, yet excited for the wealth of knowledge that lies ahead."
    "Have 800K knowledge"
    "Cycles of Renewal"
    "The Cloaked Man finds you, his gaze piercing through the mysteries of life and death."
    "Life is but a fleeting moment in the grand scheme. To transcend its limits, one must embrace reincarnation. It is time for you to undergo this profound transformation."
    "Reincarnation? What does it entail?"
    "It is the rebirth of self, breaking the shackles of time. Perform a scholar reincarnation to start anew, yet stronger and wiser. It is the path to true mastery."
    "To start anew... Well, if it leads to greater power and understanding, I am ready."
    "The cycle of rebirth will reveal truths unseen. Embrace it, and rise anew."
    "Reincarnation"
    "Perform reincarnation of any type at least once"
    "Renewal of Strength"
    "Feeling drained and weakened after your reincarnation, you encounter the man in the cloak and Domingo, who seem to have been discussing your condition."
    "The man in the cloak glances at you, exchanging a silent look with Domingo, who had entered the room unnoticed."
    "So, back to square one?"
    "Domingo reassures you, explaining that your rune sacrifice levels and crystals remain intact. Moreover, you've grown stronger and will progress faster."
    "Then, the man in the cloak suggests that instead of despair, you should focus on regaining your strength and purchase the meditation course and training chambers access at the academy."
    "Meditation"
    "Training Chambers Access"
    "Intellectual Ascendancy"
    "Deeply immersed in rune studies, the ambient light in your room seems to dance with the intensity of your focus. Domingo enters, his footsteps nearly silent."
    "Your commitment to the arcane is truly impressive. Yet, remember the role of intellect. It\'s the cornerstone that supports the mastery of runes and the efficiency of mental endeavors."
    "I’ve been so focused on the runes themselves, I may have overlooked the broader picture."
    "Indeed. Intellect is like the light that illuminates the path of knowledge. With 1 billion Intellect, the complexities of the arcane will unravel before you, easing your journey significantly."
    "Then I shall endeavor to sharpen my intellect to its finest edge, turning challenges into opportunities for growth."
    "That’s the spirit of a true mage. Let your mind be as boundless as the stars."
    "Have 1B Intellect"
    "Chase for Agility"
    "As you stroll near the academy, you notice Domingo in a state of haste, his brows furrowed with worry. Suddenly, he signals you towards a fleet-footed thief, clutching a box of runes."
    "Stop that thief! They\'ve stolen some of our most valuable runes!"
    "Catching your breath, you return to Domingo, who looks at you thoughtfully."
    "Domingo: \"
    "You, determined not to be outpaced again: \"
    "Good. And remember, the pursuit of agility might require you to first master other skills and gain new knowledge. The academy will guide you."
    "Agility"
    "Agility"
    "The Path to Wizardry"
    "Returning to your room, you overhear a conversation between the man in the cloak and Domingo."
    "Do you think he\'s ready for the next step?"
    "Domingo notices you and quickly shifts the conversation: \"
    "Basic Wizardry? What will that entail?"
    "Domingo: \"
    "Feeling a mix of excitement and determination, you nod in agreement, ready to embark on this new chapter of your magical journey."
    "Basic Wizardry"
    "Spark of Illusion"
    "Standing with the cloaked man on a rooftop, you gaze out over the city, taking in the view."
    "Once, a mage saved this city from a horde of demons by conjuring a powerful spark, incinerating the invaders."
    "Who was this mage?"
    "Cloaked Man: \"
    "Feeling an awakening within, you realize the path ahead is filled with deeper mysteries and powerful magic waiting to be unveiled."
    "Illusion Spells"
    "Conjure Spark"
    "Crafting the Arcane"
    "True mages can materialize their thoughts into reality. And now, you need to learn this art as you\'re in need of more inventory."
    "Start by learning Woodworking at the academy. It’s crucial to take care of your surroundings, your abode. Yes, your abode. From today, you are a full member of the mage order, and this abode is rightfully yours."
    "Woodworking? I never thought it’d be part of a mage’s skills."
    "It’s about shaping the world around you, not just with magic but with skill and craft. Start with the basics and your workshop will soon reflect your magical prowess."
    "Woodworking"
    "Have at least 5 Training Benches"
    "Have at least 5 Bookshelves"
    "Spell Mastery"
    "While you are busy managing your estate, Domingo knocks and steps into the room. He observes your work with a nod of recognition."
    "I see you\'ve mastered the basics of crafting materials and transforming them into something useful. The academy holds much more knowledge in this area, knowledge that will be crucial for your journey."
    "You, pausing your work: \"
    "Domingo, leaning against the doorway: \"
    "Enhancing Spellbinding... it sounds like a journey in itself."
    "Indeed, it is. But I have confidence in you. You\'ve shown remarkable ability to self-improve. Remember to balance your time between runes, crystals, the academy, and equipping your estate with items made from complex materials."
    "It will be a long journey, but I\'m ready for it. The path of a mage is never a short one."
    "That\'s the spirit. Each step you take in enhancing your Spellbinding attribute brings you closer to the true mastery of magic. Go forth with patience and persistence."
    "Have Spellbinding attribute at least 1000"
    "Conjuration's Depth"
    "As you practice your magic, Domingo enters with a knock, observing your efforts."
    "Your training is progressing well. The academy has a course that will deepen your understanding in this area. Also, you’ll need to work with more complex and even enchanted materials, which will require further processing."
    "I’m ready to take on more complex aspects of magic. The challenge excites me."
    "Excellent. The path of a mage is never static. Always evolving, always growing. Your dedication will unlock new realms of power."
    "Have Conjuration attribute at least 10"
    "Duty of the Mage"
    "As a full member of the mage order, you have responsibilities to the order and the city, including ensuring its safety."
    "After completing several courses and trainings, you’ll gain access to battle magic. But first, you must learn the basics and ensure the safety of the sewers. There are always mutated rats attacking the cleaners there."
    "Protecting the city is a noble duty. I will prepare myself for this task and ensure the safety of those below."
    "This is the way of the mage – protector, scholar, and guardian. Your journey into battle magic begins now."
    "Purchase Battles upgrade"
    "Have at least one fight in Sewers"
    "Guardian of the City"
    "Even though our city is well-protected, enemies often infiltrate it in hidden ways. Each mage has pledged to protect the city in exchange for sanctuary."
    "He adds: \"
    "To be a guardian, to protect those around me – I embrace this duty. I’ll begin my training in these spells immediately."
    "Your commitment to the safety of our city is commendable. These spells are not just for defense; they are a mage’s promise to those they protect."
    "Protection"
    "Evocation"
    "Rescue in the Sewers"
    "In the midst of your training routine, the door bursts open, and the cloaked man rushes in, his face etched with concern."
    "Cloaked Man, breathlessly: \"
    "Domingo missing in the sewers? That doesn\'t sound good. What do you think happened?"
    "I fear he may have encountered something... dangerous. The sewers are not just simple tunnels; they hide many perils beneath the city."
    "I\'ll go find him. No one knows those tunnels better than Domingo, but he might need help."
    "Be cautious. Whatever lies in those depths is not to be underestimated. Reach at least level 50 - that\'s where he was heading. And be prepared for anything."
    "I\'ll bring him back. Whatever it takes."
    "As the cloaked man leaves, you take a deep breath, steeling yourself for the challenges of the sewer's labyrinthine paths and unknown dangers lurking in the shadows."
    "Reach level 75 in Sewers"
    "Confrontation in the Shadows"
    "The severed head of another rat falls at your feet. The deeper you venture, the more oppressive the stench becomes, stifling your breath. Suddenly, your torch flickers out, leaving you enveloped in darkness."
    "Fumbling in the dark, you stumble over something. Relighting your torch, the flame reveals a chilling sight beneath you."
    "Domingo..."
    "Lying before you is the lifeless body of Domingo, his face frozen in an eternal silence. A voice echoes from the shadows behind you, dripping with irony:"
    "Oh, what a reunion! Our little boy has grown so much..."
    "Turning swiftly, you come face to face with a gaunt, pallid man in a silver cloak, holding a scepter. Flashes of memory engulf you – a destroyed city, the same man wielding the scepter, and your own defeat..."
    "Hazzard? Delighted to see you again!"
    "Glad to see your memory and sharp tongue are intact. A pity they won’t be of much use to you anymore! Doneskin, deal with this!"
    "Hazzard utters an incantation and vanishes. In his place, a massive three-headed rat materializes."
    "Thank you, master, master feeds Doneskin! Doneskin will not starve anymore!"
    "You brace yourself, knowing this battle will not just be for survival, but a clash entwined with your past and the shadows that have haunted you."
    "Beat Doneskin"
    "The Path to True Power"
    "As the last head of Doneskin smolders, a deep sense of frustration washes over you. You couldn't catch Hazzard, couldn't end this once and for all. Your thoughts are interrupted by footsteps behind you."
    "The man in the cloak places a hand on your shoulder, sensing your despair."
    "You, in anguish: \"
    "In fact, you just won your most challenging battle - the battle with your past, with your fear. That is a remarkable victory."
    "But Hazzard is still alive. He\'s here, and the city is in danger."
    "Cloaked Man: \"
    "So what, I should go back to sweeping streets, reading magical books, and learning runes?"
    "Enough of these childish tantrums. When it comes to eternal conflicts, time is irrelevant. You must gather your spirit and dedicate as much time and effort as needed for our victory! Yes, it requires extensive training and learning. The major battles are still ahead of you. You haven’t even mastered half of the knowledge required to stand against our enemies."
    "The cloaked man vanishes, leaving you without a specific task, but his words resonate within you... It's clear what you must do."
    "Reach 1Oc (1.e+27) intellect"
    */

    //
    "Mana": "法力",
    "Keep expanding mana, investigating new upgrades to unlock more resources": "不断扩展法力上限，探索新的升级，来解锁新的资源",
    "RESOURCES": "资源",
    "ATTRIBUTES": "属性",
    //"Running Actions:": "进行中动作：",
    "No running actions. Navigate to city actions tab for details": "无进行中动作。打开 城市 标签页以查看更多内容",
    "Never": "永不",
    "Click to see more details": "点击以查看更多内容",
    "Click to activate": "点击以激活",
    "Click to deactivate": "点击以取消",
    "ON": "开",
    "OFF": "关",

    "Learn cost:": "学习成本：",
    "Learn multiplier: x": "学习速度倍率：x",
    "Effect multiplier: x": "效果倍率：x",
    "Sacrifice will reset all your runes levels, runic upgrades and resources, but you will obtain bonus to speed and effect of specific rune you sacrificed": "符文献祭会重置所有符文的等级、符文页的升级和资源，但会为所献祭的符文提供学习速度加成和效果加成，加成的数值取决于献祭时该符文的等级",
    "Sacrifice": "献祭",
    //"Running Preset:": "已启用预设：",

    "Change": "变更",
    "None": "无",
    //"Active Runes:": "学习中符文：",
    "Automation": "自动",
    "You can have only a limited amount of runes running simultaneously. The limit can be increased with various upgrades. Click OFF/ON buttons to activate/deactivate rune learning": "你同一时间能学习的符文数量有限制。该限制可以通过一些升级提升。点击 关/开 按钮以激活/取消符文学习",
    "Click rune to view details": "点击符文图标以查看更多内容",
    
    "Wizard orb will boost learning speed of selected runes, but significantly increase their cost. Speed bonus and cost penalty depends on active level, and applies to ALL active runes": "巫师宝珠会提升所有已激活符文的学习速度，但会显著地提升学习时的资源消耗。每提升一级都会使正面、负面效果同时提升",
    "Wizard Orb (": "巫师宝珠（",
    "(": "（",
    ")": "）",
    "Build": "建造",
    "Current tier": "当前等级",
    "increase runes cost by": "使符文学习成本倍率变为 ",
    ", but increasing learn speed by": "，并使符文学习速度倍率变为",
    "Cancel learning on change": "改变等级时取消当前符文学习进度",
    "Reach 8 max mana to unlock": "达到 8 法力上限以解锁",
    "Upgrade": "升级",
    "Set lower number above 0 to prioritize upgrade. Set to 0 to turn off autopurchase": "优先级大于 0 时，越小代表越优先；优先级为 0 时不自动升级",
    "Priority: ": "优先级：",
    "Reach 10 Max mana to unlock": "达到 10 法力上限以解锁",
    "Upgrades": "升级",
    "Autoupgrade turned on": "已启用自动升级",
    "Upgrade": "升级：",
    "Upgrade Max": "升级最大",
    "Auto upgrade": "自动升级",

    "Produce": "生产",
    "Multipliers": "倍率：",
    "Capacity": "上限",
    "Capacity Multiplier": "上限倍率：",
    "Upgrade cost:": "升级成本：",
    "Upgrade": "升级",
    "Crystals": "水晶",
    "Crystals provide various boosts that persist through all type of resets": "水晶会为你提供各种加成，且在所有类型的重置中都会保留",
    "Autobuild All": "自动建造全部",
    "Cancel Autobuild All": "取消自动建造全部",
    "Click crystal to view details": "点击水晶以查看详情",

    "Recipes (": "配方",
    "Click crafting recipe to view details": "点击工艺制作配方以查看详情",
    "Crafting Presets": "工艺预设",
    "Load": "加载",

    "Click structure title to see it details": "点击制造物名称以查看详情",

    //
    "Create New": "创建新预设",
    "Edit": "编辑",
    "Delete": "删除",
    "Stop": "停止",
    "Run": "开始",
    "Preset Name: ": "预设名称：",
    "Preset Orb Level: ": "巫师宝珠等级：",
    "Is Default (turned on automatically on prestige)": "设为默认（即重置后自动启用）",
    "Save": "保存",
    "Top": "置顶",
    "Up": "上移",
    "Down": "下移",
    "Bottom": "置底",
    "Not implemented yet": "未实装",

    //
    "Runes": "符文",
    "Presets": "预设",
    'Presets allow you to create prioritized rune learning list. Create new preset, move runes in the list to change priority (top ones will be turned on first). After you save preset, you can switch between them from "runes" page.': "通过预设，你可以设置符文激活的优先级，并自动运行。排在前面的符文会被优先激活。保存预设之后，在 符文 页面的右上角就可以快速切换。",
    "Crystals": "水晶",

    //
    "v0.0.2c Tiny Update": "v0.0.2c 微型更新",
    "Quick lists are now automatically adding all pre-requisites": "快速列表现在会自动添加所有所需的前置动作（例如 创造火花），而非只有 休息",
    "Actions automation now also more clever: adding resources it needs into single list, and have better logic overall": "动作自动化现在更智能：会自动添加所需的前置动作，并优化整体逻辑",
    "Crafting recipes now show details on hover": "工艺配方现在会在鼠标悬浮时显示详细内容",
    "Added hint explanation to wizard orb": "增加对于巫师宝珠的鼠标悬浮说明",

    //
    "v0.0.2b Hotfix patch": "v0.0.2b 热修复补丁",
    "Fixed some logic issues causing runes automation to stuck": "修复了一些导致符文自动化卡住的 bug",
    'Fixed and optimized "Optimize list" functionality': "修复并优化了“优化列表”功能",
    "Fixed white screen errors": "修复了白屏 bug",

    //
    "v0.0.2a Small QoL Update": "v0.0.2 小型用户体验更新",
    "Added academy upgrade, providing runes automation": "增加了一个学院升级，使符文可以自动化学习",
    "Added option to action optimize lists": "增加了自动优化动作列表的按钮",
    "Fixed some UI bugs": "修复了一些 UI bug",
    "Reduced knowledge costs of some early game runes": "降低了一些前期符文的知识消耗",
    "Increased minimum requirements for reincarnation": "提升了转生的最低要求",

    //
    "v0.0.2 Minor Update": "v0.0.2 小型更新",
    "Implemented game story": "增加了剧情",
    "Significantly re-balanced city actions": "显著地重新平衡了城市动作",
    "Rune sacrifices are now stronger": "大幅加强了符文献祭的效果",
    "Scholar reincarnation now reduce runes XP cost scaling": "学术转生现在会降低符文升级所需的经验值",
    "Added new late game resources, actions and structures": "增加了新的后期资源、动作和制造物",
    "Added automation for most of game aspects": "为游戏的大多数内容增加了自动化",
    "Numbers notation can now be changed in settings": "现在可以在设置中改变计数法",
    "Fixed some UI bugs": "修复了一些 UI bug",

    //
    "v0.0.1 Minor Update": "v0.0.1 小型更新",
    "Added few more academy upgrades and actions": "增加了新的学院升级",
    "Added crafting presets": "增加了工艺制作预设功能",
    "Added battles mechanics": "增加了战斗系统",
    "Added quick lists based on one action": "增加了快速动作列表功能",
    "Actions can now be filtered by relative increase per second": "现在可以基于每秒提升百分比筛选显示动作",
    "Few bugfixes and performance optimizations": "一些 bug 修复和性能优化",
    //
    "v0.0.0a Hotfix Update": "v0.0.0a 热修复更新",
    "Added few more academy upgrades, craftable resources and structures": "增加了一些学院升级，可制作的资源和制造物",
    "Fixed bug when some achievements were assigned by mistake": "修复了偶尔会错误地获得部分成就的 bug",
    "Fixed runes behaviour": "修复了一些符文相关的 bug",
    "Fixed some performance issues": "修复了一些运行问题",
    //
    "v0.0.0 Initial Demo Release": "v0.0.0 第一版 DEMO 发布",
    "Start as inprisoned mage, and keep learning and improving yourself": "你是一位被囚禁的巫师，不断学习、提升自己的能力吧",
    "Over 10 runes to learn": "超过 10 个可学习的符文",
    "Over 20 actions to improve your resources/attributes": "超过 20 个用于获取资源、提升属性的动作",
    "Over 20 upgrades": "超过 20 个升级",
    "Learning": "学习",
    "City": "城市",
    "Construction": "制造",

    "Game Progress": "游戏数据",
    "Settings": "设置",
    "About ": "关于 ",
    "Export to file": "导出到文件",
    "Export": "导出到文件",
    "Import from file": "从文件导入",
    //"UTF-8"
    "Content to import: ": "导入内容：",
    "Error importing file": "导入文件出现错误",
    "Select file": "选择文件",
    "Get export text": "导出存档到字符串",
    "Export text": "导出字符串",
    "Import from text": "从字符串导入存档",
    "Import": "导入字符串",
    "Save": "保存",

    "Hard reset": "硬重置",
    "This action will remove all your game data. Are you sure?": "该动作会删除你所有的游戏进度。你确定吗？",
    "Wipe game data": "彻底删除游戏存档",

    "UI Settings": "界面设置",
    "Numbers Notation": "计数法",
    "Standard": "标准",
    "Scientific": "科学",

    "Gameplay": "游戏性",
    "Reset notifications on prestige": "重置时重置新项目提醒",
    "On": "开",
    "Off": "关",
    "Turn on autoupgrade": "开启自动升级",
    "Show Story": "显示剧情",

    /*
    "Never"
    "K"
    "M"
    "B"
    "T"
    "Qa"
    "Qi"
    "Sx"
    "Sp"
    "Oc"
    "No"
    "Dc"
    "E"
    "X"
    */

    //
    "This action has diminish return, yielding": "该动作的收益已递减，目前收益约为 ",
    "efficiency": "",
    "Produce": "生产",
    "Production Multiplier": "产量倍率",
    "Capacity": "上限",
    "Capacity Multiplier": "上限倍率",
    "Attributes": "属性",
    "Attributes Multiplier": "属性倍率",
    "Cost:": "消耗：",
    "Amount of time required for action to perform, or amount of actions performed per second. Depends on impacting attributes": "该动作的耗时，或是当前每秒可执行该动作的次数。由关联属性决定",
    "Maximum amount of actions performed per second. This cap can't be upgraded by impacting attributes explicitly, but there are other ways to increase this limit": "每秒可执行该动作的最大次数。该数值无法被关联属性提升，但可以通过其他方法提升（例如敏捷属性和转生）",
    "Attributes that reduce time, required for action to be performed": "可降低该动作耗时的属性",
    "Attributes impacting:": "关联属性",

    //
    "Tags:": "标签",
    "actions": "动作",

    "physical": "物理",
    "mental": "精神",
    "magical": "魔法",
    "spell": "法术",
    "technical": "技巧",
    "crafting": "工艺",

    "training": "训练",
    "empower": "强化",
    "infusion": "注入",

    "illusion": "幻象",
    "conjuration": "造物",

    "coins": "金币",
    "energy": "体力",
    "strength": "力量",
    "vitality": "活力",
    "knowledge": "知识",
    "rune mastery": "符文精通",
    "intellect": "智力",
    "spellbinding": "咒力",
    "conjuration lore": "造物学识",
    "mana": "法力",
    "spark": "火花",
    "wood": "木头",
    "stone": "石头",
    "iron": "铁",

    "capacity": "上限",
    "runes": "符文",
    
    //
    "Create New List": "创建新列表",
    "Search lists": "搜索列表",
    "Edit": "编辑",
    "Run": "开始",
    "Delete List": "删除列表",
    "Do actions automatically": "自动执行动作",
    "Your mage will be left alone in the city doing actions on his own. Not very efficient way to progress, but might be useful when you going to leave for a while": "巫师会停留在城市里，自行决定要做什么动作。肯定不如你的精心安排来得高效，但至少比什么都不做好一些",
    "Click create new list button above to crilter by % incr. per sec.eate some list of actions that can be run over time, providing you various bonuses": "点击 创建新列表 按钮来建立一个列表，将动作加入其中，并循环执行，来为你提供各种加成",
    "Enter list name": "输入列表名称",
    "Save": "保存",
    "Cancel": "取消",
    "Amount of time required for action to perform in list. The highest number - the more attention you should pay to basic attributes, affecting this action": "该动作在列表中耗时的占比。这个数字越高，代表你如果想降低该列表耗时，应该越关注影响该动作的属性（例如活力，智力，敏捷等）",

    "Set": "设置",
    "Add requirements": "添加前置动作",
    "Time to complete:": "耗时：　　",
    "Produce": "生产",
    "Production Multiplier": "产量倍率",
    "Capacity": "上限",
    "Capacity Multiplier": "上限倍率",
    "Attributes": "属性",
    "Attributes Multiplier": "属性倍率",
    "Attributes that reduce time, required for list to be performed. Depends on actions added to list": "可降低该列表耗时的属性。内容和占比取决于列表内的动作",
    "Impacting Attributes": "关联属性",
    "Actions ": "动作 ",
    "Search actions": "搜索动作",
    "Click action to see details": "点击动作以查看更多内容",
    //"Running: ": "运行中：",

    "BattleActions ": "战斗动作 ",
    "Search actions": "搜索动作",
    "Click action to see details": "点击动作以查看详情",
    "Running:": "进行中：",
    "HP:": "生命值：",
    "Locations": "地点",
    "Select some location to start fighting. Winning fights will give you various resources. If you win 20 battles you can enter next level of location": "选择地点并开始战斗。战斗胜利时会获得资源。胜利 20 次则可以进入该地点的下一个关卡",
    "Autoprogress to next level": "自动进入下一个关卡",
    "Stop": "停止",
    "Level:  ": "关卡：",
    " (Level: ": "（关卡：",
    "Win": "距下一关还需",
    "fights till next level": "次胜利",
    "Wins:": "胜利：",
    "; Losses:": "，失败：",
    "Enter": "进入",
    "Current Location:": "当前地点：",
    "Fights till next level:": "距离下一关卡：",
    "Leave Fight": "离开战斗",
    "Battle Attributes": "战斗属性",
    "Battle Attributes Multiplier": "战斗属性倍率",
    "Attributes": "属性",
    "Attributes Multiplier": "属性倍率",
    "Scrap Gain": "战利品获取",
    "Upgrade Cost": "升级成本",
    "Click to un-equip": "点击以解除装备",
    "Click to delete item": "点击以删除物品",
    "Click to upgrade item": "点击以升级物品",
    "Click to equip": "点击以装备",

    "Equipment Inventory (": "物品栏（",
    "used)": "）",
    "Click to exit drop mode": "点击以退出分解模式",
    "Click to enter drop mode, and than select inventory item to scrap": "点击以进入分解模式，随后点击物品以分解",
    "Exit drop mode": "退出分解模式",
    "Drop item(s)": "分解物品",
    "Click to exit upgrade mode": "点击以退出升级模式",
    "Click to enter upgrade mode, and than select inventory item to upgrade": "点击以进入升级模式，随后点击物品以升级",
    "Exit upgrade mode": "退出升级模式",
    "Upgrade item(s)": "升级物品",
    "Pick items:": "仅保留稀有度：",
    "Any rarity": "所有稀有度",
    "At least enchanted": "至少为 附魔",
    "At least rare": "至少为 罕见",
    "At least epic": "至少为 史诗",
    "Select Slots (": "仅保留栏位（",
    "head": "头部",
    "body": "躯干",
    "legs": "腿部",
    "hands": "主手",
    "shield": "盾牌",
    "Select Types (": "仅保留类型（",
    "wool": "羊毛",
    "iron": "铁",
    "leather": "皮",
    "Are you sure? This will delete item from inventory, and you wont be able to get it back!": "你确定吗？这会将物品彻底删除，永远无法找回！",
    
    "Battle": "战斗",
    "Stats": "数据",
    "Fight": "战斗",
    "Equipment": "装备",

    //
    "Upgrade": "升级",
    "Set mercenary rate": "设置佣兵启用幅度",
    "Fire": "开除",
    "Hire": "雇佣",
    "Shop": "商店",
    "Regenerate Shop": "刷新商店",
    "Hired (": "已雇佣（",
    "of": "/",
    "Each hired mercenary provides his boost. Boost type depends on mercenary type, while effect amount depends on mercenaries level and rate.": "雇佣的每一位佣兵都会提供加成。加成类型基于佣兵的类型，加成数值取决于佣兵的等级和启用幅度（均为指数）",
    "Produce": "生产",
    "Capacity Multiplier": "上限倍率",
    "Attributes Multiplier": "属性倍率",
    "Consumption": "消耗",
    "Level Up": "升级",
    "Level Up Max (x": "升级至最大（x",
    "You will lose all your resources and actions performed, but will gain multipliers to various game aspects depending on reset type. Bonus amount depends on actions performed": "你会失去所有的资源、已执行的动作次数和它们所带来的加成，但会基于你选择的转生类型，获得不同类型的加成。加成的数值取决于进行的动作数量，基础耗时越长的动作有越高的权重",
    //"Current bonus:": "当前加成",
    //"Bonus on reset:": "转生后加成",
    "Reincarnate": "转生",

    "Actions": "动作",
    "Academy": "学院",
    "Mercenaries": "佣兵",
    "Reincarnate": "转生",

    "Filter by % incr. per sec.": "以 提升百分比/秒 筛选：",
    "Show only events, that will increase by more than specified percentage per sec.": "仅显示每秒提升大于此百分比的动作",

    "Timeline": "时间线",
    "PieChart": "饼状图",
    "Action activities": "动作耗时",

    "Action": "动作",
    "Time Devoted": "已消耗时间",
    "General statistics": "总体统计",
    "Time In Game": "游戏总时长",
    "Rune Sacrifices": "符文献祭次数",
    "Time This Rune Sacrifice": "距上一次符文献祭",
    "Fastest Rune Sacrifice": "最短符文献祭耗时",
    "Reincarnations": "转生次数",
    "Time This Reincarnation": "距上一次转生",
    "Fastest Reincarnation": "最短转生耗时",
    "Actions Efforts": "动作耗时统计",
    "Requirements": "需求",
    "Produce": "生成",
    "Income Bonuses": "产量倍率",
    "Storage": "上限",
    "Storage Multiplier": "上限倍率",
    "Attributes": "属性",
    "Attributes Multiplier": "属性倍率",
    "Bonuses": "加成",
    "Statistics": "统计",
    "Achievements": "成就",
    "Nothing": "无",

    "Statistics": "统计",
    "Achievements": "成就",
    "Inventory": "背包",
    "Recipes (": "配方（",
    "Consume": "消耗",
    "Produce": "生产",
    "Structures": "制造物",
    "Build": "建造",
    "Produce": "生产",
    "Production Multiplier": "产量倍率",
    "Capacity Gain": "上限获取",
    "Capacity Multiplier": "上限倍率",
    "Attributes": "属性",
    "Attributes Multiplier": "属性倍率",
    "Cost": "花费",
    "Build": "建造",
    
    "Breakdown:": "明细",
    "Basic": "基础：",
    "Base": "基础",

    "Crafting": "工艺制作",
    "Structures": "制造物",
    "Empty": "空",
    "About": "关于",
    "FAQ": "FAQ",
    "Empty and cold here": "空旷且寒冷",
    "Loading...": "载入中……",

    "Game was developed by Strange Matter Gaming": "作者：Strange Matter Gaming",
    "Join our Discord": "加入 Discord",
    
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
}


//需处理的前缀，此处可以截取语句开头部分的内容进行汉化
//例如：Coin: 13、Coin: 14、Coin: 15... 这种有相同开头的语句
//可以在这里汉化开头："Coin: ":"金币: "
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",

    /*
    "Aelwyn ": "艾尔温·",
    "Alaric ": "阿拉里克·",
    "Arius ": "阿里乌斯·",
    "Artemis ": "阿尔忒弥斯·",
    "Azriel ": "阿兹瑞尔·",
    "Balthazar ": "巴尔塔萨·",
    "Bran ": "布兰·",
    "Caelum ": "凯勒姆·",
    "Cassius ": "卡修斯·",
    "Cedric ": "塞德里克·",
    "Darius ": "达里乌斯·",
    "Draco ": "德拉科·",
    "Eldric ": "艾尔德里克·",
    "Elric ": "埃尔里克·",
    "Emrys ": "艾姆瑞斯·",
    "Ezra ": "以斯拉·",
    "Faelan ": "费兰·",
    "Fenris ": "芬里斯·",
    "Gaius ": "盖乌斯·",
    "Galen ": "盖伦·",
    "Gavriel ": "加布里埃尔·",
    "Hadrian ": "哈德良·",
    "Halcyon ": "哈尔西昂·",
    "Icarus ": "伊卡洛斯·",
    "Ignatius ": "伊格纳修斯·",
    "Jareth ": "贾雷斯·",
    "Kael ": "凯尔·",
    "Lazarus ": "拉撒路·",
    "Leander ": "利安德尔·",
    "Lucian ": "卢修斯·",
    "Magnus ": "马格努斯·",
    "Marius ": "马里乌斯·",
    "Nero ": "尼禄·",
    "Orion ": "猎户·",
    "Osric ": "奥斯瑞克·",
    "Peregrine ": "佩雷格林·",
    "Quintus ": "昆托斯·",
    "Ragnar ": "拉格纳·",
    "Raven ": "蕾文·",
    "Rex ": "雷克斯·",
    "Saros ": "萨罗斯·",
    "Silas ": "赛拉斯·",
    "Sirius ": "天狼星·",
    "Taliesin ": "塔莱辛·",
    "Tarquin ": "塔奎恩·",
    "Theron ": "瑟龙·",
    "Tiberius ": "提贝里乌斯·",
    "Ulysses ": "尤利西斯·",
    "Valerian ": "瓦莱里安·",
    "Viktor ": "维克托·",
    "Xander ": "桑德尔·",
    "Xerxes ": "泽尔克西斯·",
    "Zephyr ": "泽菲尔·",
    "Zorion ": "佐里翁·",
    "Zephyrus ": "泽菲鲁斯·",
    "Altair ": "阿尔泰尔·",
    "Aurelius ": "奥雷利乌斯·",
    "Branwen ": "布兰温·",
    "Corvus ": "科尔瓦斯·",
    "Cyrus ": "赛勒斯·",
    "Dante ": "丹特·",
    "Evander ": "伊万德尔·",
    "Faust ": "浮士德·",
    "Gideon ": "吉迪恩·",
    "Hector ": "赫克托尔·",
    "Ivor ": "艾沃·",
    "Jasper ": "贾斯珀·",
    "Kyros ": "基罗斯·",
    "Lysander ": "莱桑德尔·",
    "Mael ": "马尔·",
    "Nikolas ": "尼科拉斯·",
    "Oberon ": "奥伯伦·",
    "Phelan ": "费兰·",
    "Raphael ": "拉斐尔·",
    "Remus ": "雷姆斯·",
    "Severin ": "塞韦林·",
    "Soren ": "索伦·",
    "Taranis ": "塔拉尼斯·",
    "Thaddeus ": "塞迪乌斯·",
    "Vladimir ": "弗拉基米尔·",
    "Wolfram ": "沃尔夫拉姆·",
    "Xanthus ": "赞瑟斯·",
    "Yorick ": "约里克·",
    "Zane ": "赞恩·",
    "Aldric ": "奥尔德里克·",
    "Ansel ": "安瑟尔·",
    "Baird ": "贝尔德·",
    "Caius ": "凯乌斯·",
    "Dariel ": "达瑞尔·",
    "Emeric ": "埃梅里克·",
    "Frey ": "弗雷·",
    "Garrick ": "加里克·",
    "Helios ": "赫利俄斯·",
    "Isaiah ": "以赛亚·",
    "Julius ": "尤利乌斯·",
    */

    "Current bonus:": "当前加成：",
    "Bonus on reset:": "转生后加成：",

    "Active Runes: ": "已激活符文：",
    "Running Actions: ": "进行中动作：",
    "Running Preset: ": "已启用预设：",
    "Running: ": "进行中：",
    "Min: ": "速度上限：",

    "Rune: ": "符文：",
    //"Runes": "符文",
    "Upgrade: ": "升级：",
    //"Upgrades": "升级",
    "Crystal: ": "水晶：",
    //"Crystals": "水晶",
    //"Basic": "基础：",
    //"Base": "基础",
    //"Actions": "动作",
    "Actions: ": "动作：",
    "COST: ": "消耗：",
    "Mercenary: ": "佣兵：",
    //"Mercenaries": "佣兵",
    "Crafting: ": "工艺制作：",
    //"Crafting": "工艺制作",
    "Structures: ": "制造物：",
    "Structure: ": "制造物：",
    //"Structures": "制造物",
    //"Achievements": "成就",
    "Achievement: ": "成就：",
    "Summary: ": "总计：",
    "Item: ": "物品：",
    "Items": "物品",

}

//需处理的后缀，此处可以截取语句结尾部分的内容进行汉化
//例如：13 Coin、14 Coin、15 Coin... 这种有相同结尾的语句
//可以在这里汉化结尾：" Coin":" 金币"
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",

    /*
    "Nightshade": "夜影",
    "Dragonheart": "龙心",
    "Stormbringer": "风暴使者",
    "Shadowmancer": "影巫",
    "Moonwhisper": "月语",
    "Flamebinder": "缚焰者",
    "Starweaver": "织星者",
    "Frostweaver": "织霜者",
    "Voidwalker": "虚空行者",
    "Sunweaver": "织日者",
    "Duskwhisper": "暮语",
    "Windrider": "驭风者",
    "Ironspell": "铁咒",
    "Wildsage": "荒野贤者",
    "Runeblade": "符刃",
    "Thundershaper": "塑雷者",
    "Mistweaver": "织雾者",
    "Skytalon": "天爪",
    "Soulbinder": "缚魂者",
    "Dreamweaver": "织梦者",
    "Frostguard": "霜卫",
    "Firemantle": "炎氅",
    "Stormwatcher": "风暴守望者",
    "Shadowbinder": "缚影者",
    "Lightbringer": "光明使者",
    "Winterborn": "冬诞",
    "Aetherwing": "以太之翼",
    "Darkweaver": "织暗者",
    "Flamekeeper": "护焰者",
    "Starcaller": "唤星者",
    "Voidshaper": "虚空塑形者",
    "Sunstrider": "烈日行者",
    "Dawnwhisper": "晓语",
    "Ravenwing": "鸦翼",
    "Thunderbinder": "缚雷者",
    "Soulcatcher": "猎魂者",
    "Mysticblade": "秘刃",
    "Skywhisper": "天语",
    "Serpenteye": "蛇眼",
    "Lightrunner": "光明行者",
    "Firestorm": "烈焰风暴",
    "Ironward": "铁望",
    "Stoneheart": "石心",
    "Dragonbane": "屠龙者",
    "Winterstrike": "冬击",
    "Starshadow": "星影",
    "Frostfall": "霜落",
    "Silverglow": "银光",
    "Stormsinger": "风暴歌者",
    "Darkmoon": "暗月",
    "Sunshard": "碎日",
    "Flameseeker": "寻焰者",
    "Mistheart": "雾心",
    "Ravenspell": "鸦咒",
    "Thunderforge": "雷铸",
    "Duskblade": "暮刃",
    "Windsmith": "风铸",
    "Skykeeper": "护天者",
    "Soulforge": "魂铸",
    "Firebrand": "烙焰",
    "Ironfang": "铁牙",
    "Galewind": "狂风",
    "Lightshaper": "塑光者",
    "Stargazer": "观星者",
    "Stormblade": "风暴之刃",
    "Voidheart": "虚空之心",
    "Dawnrider": "驭晓者",
    "Frostcaller": "唤霜者",
    "Mysticsong": "秘歌",
    "Shadowflame": "影焰",
    "Sunblade": "阳刃",
    "Firesong": "火歌",
    "Nightwind": "夜风",
    "Runeborn": "符裔",
    "Thunderhand": "雷霆之手",
    "Wintershadow": "冬影",
    "Etherwind": "以太之风",
    "Starforge": "星铸",
    "Frostbinder": "缚霜者",
    "Lightweaver": "织光者",
    "Stormglow": "风暴之辉",
    "Voidfrost": "虚空之霜",
    "Dawnseeker": "寻晓者",
    "Mistbinder": "缚雾者",
    "Ravensong": "鸦歌",
    "Skyrider": "驭天者",
    "Soulshadow": "魂影",
    "Firewatcher": "观火者",
    "Ironshaper": "塑铁者",
    "Moondancer": "月舞",
    */

    "/sec": "/秒",
    "/ sec": "/ 秒",
    "(Click OFF/ON buttons to activate/deactivate rune learning)": "（点击关/开按钮以激活/取消符文学习）",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+)T$/,
    /^([\d\.]+)Qi$/,
    /^([\d\.]+)Qa$/,
    /^([\d\.]+)Sp$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^\+([\d\.]+)T$/,
    /^\+([\d\.]+)B$/,
    /^x([\d\.]+)B$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) \/ ([\d\.]+)e([\d\.,]+)$/,
    /^\$([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^(\d+) January, (\d+)$/, '$2/01/$1'],
    [/^(\d+) February, (\d+)$/, '$2/02/$1'],
    [/^(\d+) March, (\d+)$/, '$2/03/$1'],
    [/^(\d+) April, (\d+)$/, '$2/04/$1'],
    [/^(\d+) May, (\d+)$/, '$2/05/$1'],
    [/^(\d+) June, (\d+)$/, '$2/06/$1'],
    [/^(\d+) July, (\d+)$/, '$2/07/$1'],
    [/^(\d+) August, (\d+)$/, '$2/08/$1'],
    [/^(\d+) September, (\d+)$/, '$2/09/$1'],
    [/^(\d+) October, (\d+)$/, '$2/10/$1'],
    [/^(\d+) November, (\d+)$/, '$2/11/$1'],
    [/^(\d+) December, (\d+)$/, '$2/12/$1'],

    [/^(.+) rune learning effort increase reduction$/, '符文升级经验需求量的增长率变为 $1 分之一'],
    [/^(.+) physical actions max speed, (.+) to physical actions speed$/, '物理动作速度上限变为 $1 倍，速度变为 $2 倍'],
    [/^(.+) mental actions max speed, (.+) to mental actions speed$/, '精神动作速度上限变为 $1 倍，速度变为 $2 倍'],
    [/^(.+) spell max speed, (.+) to spell speed$/, '法术动作速度上限变为 $1 倍，速度变为 $2 倍'],

    [/^(.+) have attacked (.+) for (.+) damage$/, '$1 攻击了 $2，造成 $3 伤害'],

    //[/^Win (.+) fights till next level$/, '距下一关还需 $1 次胜利'],

]);