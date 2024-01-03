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

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "Mute": "静音",
    "Unmute": "播放",
    "(Click OFF/ON buttons to activate/deactivate rune learning)": "（点击 “激活/停用” 按钮可激活/停止符文学习）",
    "/ sec": "/ 秒",
    "Active Runes:": "活跃符文：",
    "ATTRIBUTES": "属性",
    "Click rune to view details": "点击符文查看详情",
    "Game Progress": "游戏进度",
    "Learning": "学习",
    "Reach 10 Max mana to unlock": "达到 10 法力上限即可解锁",
    "Reach 8 max mana to unlock": "达到 8 法力上限即可解锁",
    "RESOURCES": "资源",
    "Runes": "符文",
    "You need to enable JavaScript to run this app.": "您需要启用 JavaScript 才能运行此应用程序。",
    "Breakdown:": "统计：",
    "Click to activate": "点击以激活",
    "Click to deactivate": "单击以停用",
    "Click to see more details": "点击查看更多详情",
    "Decrease rune learning cost": "降低符文学习成本",
    "Determines how quickly you learning runes": "决定你学习符文的速度",
    "Expand your magic abilities by learning this rune. Mana capacity will be slightly increased.": "通过学习这个符文来扩展你的魔法能力。 法力容量将略有增加。",
    "Export text": "导出文本",
    "Export to file": "导出到文件",
    "Gameplay": "游戏玩法",
    "General statistics": "一般统计",
    "Get export text": "获取导出文本",
    "Hard reset": "硬重置",
    "Import from file": "从文件导入",
    "Import from text": "从文本导入",
    "Increase mana re-generation speed": "提高法力恢复速度",
    "Intellect": "智力",
    "Learn cost:": "学习成本:",
    "Mana": "法力",
    "Mana Cap": "法力上限",
    "Off": "停用",
    "Reset notifications on prestige": "重置声望通知",
    "Rise your intellect attribute, improving skill learning speed": "提升智力属性，提高技能学习速度",
    "Rise your willpower attribute, improving mana generation rate": "提升意志属性，提高法力生成率",
    "Rune Mastery": "符文精通",
    "Select file": "选择文件",
    "Time In Game": "游戏时间",
    "Will Power": "意志力",
    "Willpower": "意志力",
    "Wipe game data": "清除游戏数据",
    "XP": "经验值",
    "XP/sec": "经验值/秒",
    "Build": "建造",
    "Wizard Orb (": "法师宝珠 (",
    "Cancel learning on change": "更改时取消学习",
    "increase runes cost by": "增加符文成本",
    "Never": "永不",
    "Current tier": "当前层级",
    ", but increasing learn speed by": "，但可以提高学习速度",
    "Better Mana Orb": "更好的法力宝珠",
    "Better Mana Orb, providing 25% more mana storage": "更好的法力宝珠，提供额外 25% 的法力存储",
    "Expand Magic Library": "扩展魔法库",
    "Further increase max active runes by 1 per level": "每级进一步增加最大活跃符文 1",
    "Increase amount of runes that can be learned at once by 1": "一次性可学习的符文数量增加 1",
    "Runic Table": "符文表",
    "Upgrade": "升级",
    "Upgrades": "升级",
    "Increase mana generation by 25%": "提高法力产生量 25%",
    "Magic Prism": "魔法棱镜",
    "Knowledge": "知识",
    "Unlock new rune, providing access to new resource - knowledge": "解锁新的符文，提供新资源--知识",
    "Expand Mana Rune": "扩展法力符文",
    "Increase knowledge generation": "增加知识生成",
    "Knowledge Rune": "知识符文",
    "Runic Memory": "符文记忆",
    "Use your magic knowledge to learn new rune improving your mana income": "利用你的魔法知识来学习新的符文，提高你的法力收入",
    "Use your magic knowledge to make rune learning 50% faster": "利用你的魔法知识使符文学习速度加快 50%",
    "Effect multiplier: x": "效果乘数: x",
    "Learn multiplier: x": "学习乘数: x",
    "Sacrifice": "牺牲",
    "Sacrifice will reset all your runes levels, runic upgrades and resources, but you will obtain bonus to speed and effect of specific rune you sacrificed": "牺牲将重置你所有的符文等级、符文升级和资源，但你将获得你牺牲的特定符文的速度和效果加成",
    "Bottom": "底部",
    "Change": "更改",
    "Create New": "新建",
    "Down": "向下",
    "Is Default (turned on automatically on prestige)": "默认（声望自动开启）",
    "Preset Name:": "预设名称：",
    "Preset Orb Level:": "预设宝珠等级：",
    "Presets": "预设",
    "Presets allow you to create prioritized rune learning list. Create new preset, move runes in the list to change priority (top ones will be turned on first). After you save preset, you can switch between them from \"runes\" page.": "预设允许您创建优先的符文学习列表。 创建新的预设，移动列表中的符文以更改优先级（顶部的符文将首先打开）。 保存预设后，您可以从“符文”页面在它们之间进行切换。",
    "Top": "顶部",
    "Up": "向上",
    "Time This Rune Sacrifice": "本次符文牺牲用的时间",
    "Fastest Rune Sacrifice": "最快的符文牺牲时间",
    "Rune Sacrifices": "符文牺牲",
    "Academy": "学院",
    "Actions": "行动",
    "Agility": "敏捷",
    "Agility Rune": "敏捷符文",
    "Autoupgrade turned on": "自动升级已开启",
    "Baird Stormglow": "贝尔德·暴光",
    "Balthazar Firewatcher": "巴尔萨泽看火者",
    "Basic": "基本的",
    "Better Stash": "更好的藏品",
    "Bonus on reset:": "重置奖励：",
    "Boosts gold cap": "提升黄金上限",
    "Boosts mana cap": "提升法力上限",
    "Brain Empower": "大脑赋能",
    "Brainstorm": "头脑风暴",
    "Breath Techniques": "呼吸技巧",
    "Capable": "能干",
    "Capacity": "容量",
    "Capacity Multiplier": "容量倍增器",
    "City": "城市",
    "Clean Streets": "干净的街道",
    "Click action to see details": "点击操作查看详情",
    "Coin": "硬币",
    "Condense Stashes": "压缩藏品",
    "Conjure Spark": "召唤火花",
    "Consists of knowledge...": "由知识组成...",
    "Create New List": "创建新列表",
    "Crystal: Gold Crystal": "水晶：金水晶",
    "Crystal: Wise Crystal": "水晶：智慧水晶",
    "Crystals": "水晶",
    "Crystals provide various boosts that persist through almost all type of restes": "水晶提供各种增强效果，可在几乎所有类型的休息中持续存在",
    "Current bonus:": "目前奖金：",
    "Dante Galewind": "但丁·盖尔温德",
    "Delete List": "删除列表",
    "Edit": "编辑",
    "Emeric Stargazer": "埃默里克·观星者",
    "Endurance Rune": "耐力符文",
    "Energy": "能量",
    "Erudite": "博学多才",
    "Fire": "火",
    "Get Coins": "获得硬币",
    "Get Gold Cap": "获得金帽",
    "Get Knowledge Cap": "获取知识上限",
    "Get Mana Cap": "获得法力上限",
    "Get Mana Production": "获取法力产量",
    "Get Spark": "获取火花",
    "Gold Crystal": "金水晶",
    "Hire": "雇用",
    "Hired (": "雇用 （",
    "Improve your learning abilities, increasing runes learning speed": "提高你的学习能力，提高符文学习速度",
    "Improve your magic power, making all spells executed faster": "提高你的魔法力量，使所有法术执行得更快",
    "Improve your mana gain": "提高你的法力增益",
    "Improve your mental power, making all mental actions executed faster": "提升你的精神力，让所有精神动作执行得更快",
    "Improve your physical power, making all physical actions executed faster": "提高你的体力，使所有身体动作执行得更快",
    "Increase actions limits": "增加动作限制",
    "Increase endurance activities efficiency": "提高耐力活动效率",
    "Increase general spell efficiency": "提高总体法术效率",
    "Increase mana and knowledge caps": "增加法力和知识上限",
    "Increase physical activities efficiency": "提高身体活动效率",
    "Increase spark capacity": "增加火花容量",
    "Increase strength attribute": "增加力量属性",
    "Increase vitality attribute": "增加活力属性",
    "Jareth Lightshaper": "贾雷斯·塑光者",
    "Just a stash for coins storage.Increase coin capacity by 25%": "只是存放金币的储藏室。将金币容量增加 25%",
    "Lazy Crystal": "惰性水晶",
    "Learn how to combine your magic with your handwork to create wood and something useful from it!": "学习如何将你的魔法与手工结合起来，创造出木材和一些有用的东西！",
    "Magical": "魔法",
    "Main": "主要",
    "Main w/ Brain Empower": "主 w/大脑赋能",
    "Main w/ Meditate": "主 w/ 冥想",
    "Main w/o Brainstorm": "主 w/o 头脑风暴",
    "Mana Crystal": "法力水晶",
    "Mana Rate": "法力速率",
    "Mana Ritual": "法力仪式",
    "Meal": "用餐",
    "Meditate": "冥想",
    "Memory Rune": "记忆符文",
    "Mental": "精神",
    "Mental Aptitude": "心理素质",
    "Mercenaries": "雇佣兵",
    "Multipliers": "乘数",
    "Muscle Rune": "肌肉符文",
    "Natural": "自然",
    "Nikolas Stormwatcher": "尼古拉斯·风暴守望者",
    "of": "of",
    "Physical": "身体",
    "Priority:": "优先级：",
    "Produce": "生产",
    "Provides some static bonus to your mana cap and generation": "为你的法力上限和生成提供一些静态奖励",
    "Push Up": "俯卧撑",
    "Read Books": "看书",
    "Read Manuscripts": "阅读手稿",
    "Reduce other runes learning xp cost": "减少学习其他符文的经验值成本",
    "Regenerate Shop": "重生商店",
    "Reincarnate": "转世",
    "Rest": "休息",
    "Run": "运行",
    "Rune Master": "符文大师",
    "Intellect": "智力",
    "Knowledge Rune": "知识符文",
    "Memory Rune": "记忆符文",
    "Runic Splash": "符文溅射",
    "Scholar": "学者",
    "Shop": "商店",
    "Source of Mana": "法力之源",
    "Spark": "火花",
    "Spark Holding Rune": "火花持有符文",
    "Spellbinding": "引人入胜",
    "Strength": "力量",
    "till reincarnation available": "直到可以转世为止",
    "Train Strength": "训练力量",
    "Train Vitality": "训练活力",
    "Unlocks upgrades automation": "解锁升级自动化",
    "Upgrade cost:": "升级费用：",
    "Upgrade: Better Stash": "升级：更好的储藏室",
    "Upgrade: Expanded Bookcases": "升级：扩展书柜",
    "Use spark to reveal more runic energy on sacrifice. Increase sacrifice level twice": "使用火花在牺牲时释放更多符文能量。 牺牲等级提升两倍",
    "Vitality": "活力",
    "Wellness Crystal": "健康水晶",
    "What if you try to make crystal creating illusion of wellness? You could use magic to make you rich!": "如果你尝试让水晶制造出健康的幻觉怎么办？ 你可以使用魔法让你变得富有！",
    "Wise": "明智",
    "Wise Crystal": "智慧水晶",
    "Woodworking": "木材加工",
    "Xanthus Ironspell": "克桑托斯·铁咒",
    "You will lose all your resources and actions performed, but will gain multipliers to various game aspects depending on reset type. Bonus amount depends on actions performed": "您将失去所有资源和执行的操作，但将根据重置类型获得各个游戏方面的乘数。 奖金金额取决于执行的操作",
    "actions": "动作",
    "Amount of time required for action to perform in list. The highest number - the more attention you should pay to basic attributes, affecting this action": "列表中执行操作所需的时间量。 数字最高——你应该更加关注基本属性，影响这个动作",
    "Amount of time required for action to perform, or amount of actions performed per second. Depends on impacting attributes": "执行操作所需的时间量或每秒执行的操作量。 取决于影响属性",
    "Attributes": "属性",
    "Attributes impacting:": "影响属性：",
    "Attributes Multiplier": "属性乘数",
    "Attributes that reduce time, required for action to be performed": "减少执行操作所需时间的属性",
    "Capacity Gain": "容量增益",
    "Cast the spell over your coins to make it taking less place": "对你的硬币施咒语，减少它所占的地方",
    "coins": "硬币",
    "conjuration": "咒语",
    "Cost:": "成本：",
    "Dig Channels": "挖掘渠道",
    "empower": "赋权",
    "energy": "活力",
    "food": "食物",
    "illusion": "错觉",
    "Impacting Attributes": "影响属性",
    "intellect": "智力",
    "knowledge": "知识",
    "magical": "魔法",
    "mana": "法力",
    "Maximum amount of actions performed per second. This cap can't be upgraded by impacting attributes explicitly, but there are other ways to increase this limit": "每秒执行的最大操作数。 此上限无法通过显式影响属性来升级，但还有其他方法可以增加此限制",
    "mental": "精神的",
    "Min:": "最小值：",
    "physical": "身体的",
    "Production Multiplier": "生产乘数",
    "rune mastery": "符文精通",
    "Running:": "跑步：",
    "spark": "火花",
    "spell": "拼写",
    "Spend time reading old books, full of knowledge. Increase knowledge cap": "花时间阅读古书，充满知识。 增加知识上限",
    "Spend time reading rune manuscripts, increasing rune mastery": "花时间阅读符文手稿，提高符文掌握程度",
    "Spend your time making ritual, increasing your mana output": "花时间进行仪式，增加法力输出",
    "strength": "力量",
    "Tags:": "标签：",
    "Time to complete:": "完成时间：",
    "Train your mental abilities. Increase Intellect": "训练你的心理能力。 增加智力",
    "Train your mental abilities. Increase Knowledge generation": "训练你的心理能力。 增加知识生成",
    "Train your physical abilities": "训练你的身体能力",
    "Train your vitality": "训练你的活力",
    "training": "训练",
    "Use mana to improve your mental attributes": "使用法力来提升你的精神属性",
    "Use special techniques to improve your mana cap": "使用特殊技术来提高你的法力上限",
    "vitality": "活力",
    "Aurelius Sunweaver": "奥勒留·织日者",
    "Carry Bags": "手提袋",
    "Consumption": "消耗",
    "Dariel Ironspell": "达瑞尔·艾恩斯佩尔",
    "Ezra Serpenteye": "以斯拉·蛇眼",
    "Fastest Reincarnation": "最快转世",
    "Intelligent": "聪明",
    "Jasper Shadowmancer": "贾斯帕·暗影法师",
    "Level Up": "升级",
    "Level Up Max (x": "升级最大 (x",
    "Reincarnations": "转世",
    "Spiritual": "精神",
    "Tiberius Sunshard": "提比略·阳光碎片",
    "Time This Reincarnation": "转世时间",
    "Turn on autoupgrade": "开启自动升级",
    "% of": "% /",
    "Better Orb": "更好的宝珠",
    "Expanded Bookcases": "扩展书柜",
    "Expanded Sacrifice": "更大的牺牲",
    "Improve your knowledge about knowledge. Boost knowledge generation by 25%": "提高你对知识的了解。 将知识生成提高 25%",
    "Increase knowledge capacity by 30%": "知识容量增加30%",
    "Increase sacrificed runes gain 2 times (acts as you had twice as much runes to sacrifice)": "牺牲符文增益增加 2 倍（相当于你要牺牲的符文数量是原来的两倍）",
    "Knowledge Generation": "知识生成",
    "Rune Master Rune": "符文大师符文",
    "Runic Memory II": "符文记忆 II",
    "Unlock crystals, that persist through rune sacrifices and can significantly contribute to your magic and learning capabilities": "解锁水晶，通过符文牺牲持续存在，可以显着提高你的魔法和学习能力",
    "Unlock rune, that helps to read other runes, reducing their XP requirements": "解锁符文，有助于读取其他符文，降低他们的 XP 要求",
    "Use your magic knowledge to make rune learning even 50% more efficient": "利用你的魔法知识让符文学习效率提高 50%",
    "Wizard orb learning bonus is 100% larger": "法师球学习奖励增加 100%",
    "Labour": "劳动",
    "Push Up": "俯卧撑",
    "Read Books": "看书",
    "Devote your time to magic investigations": "把你的时间花在魔法调查上",
    "Finally you became nobble enough to encourage other people to work for you. They wont do it for free, however": "最后你变得足够高尚，可以鼓励其他人为你工作。 然而，他们不会免费这样做",
    "Gold Protection": "黄金保护",
    "Learn how to use energetically charged magnifying glass to increase knowledge rune efficiency by 30%": "学习如何使用充能放大镜将知识符文效率提高30%",
    "Mercenaries Market": "雇佣兵市场",
    "On": "开",
    "Protected Gold Stash prevent gold from being reset on runic sacrifice": "受保护的黄金储藏室可防止金币因符文牺牲而被重置",
    "Reading Tools": "阅读工具",
    "Create magic barriers on your runes, preventing some amounts of runes reset on sacrifice (excepting the one that you sacrificing)": "在你的符文上创建魔法屏障，防止牺牲时重置一定数量的符文（你牺牲的符文除外）",
    "Make your magic abilities work for your mental ones": "让你的魔法能力为你的精神能力服务",
    "Rune Protection": "符文保护",
    "Unlock memory rune, boosting your magical and mental capacity": "解锁记忆符文，提升你的魔法和精神能力",
    "Ticket To Mages City": "前往法师之城的门票",
    "Stop": "停止",
    "Running Preset:": "运行中的预设:",
    "Gain your access to mages city. Unlocks new game layer.": "进入法师之城。解锁新的游戏层。",
    "Ansel Flamekeeper": "安塞尔·火焰守护者",
    "Azriel Frostbinder": "阿兹瑞尔·霜缚者",
    "Balthazar Dawnrider": "巴尔萨扎黎明骑士",
    "Bookshell": "书壳",
    "Build some magic manuscript to improve your willpower": "制作一些魔法手稿来提高你的意志力",
    "Cellar": "地窖",
    "Charged Paper": "带电纸",
    "Charged Wood": "带电木头",
    "Conjuration Orb": "召唤宝珠",
    "Conjure Stone": "召唤石",
    "Conjure Wood": "召唤木头",
    "Construction": "建造",
    "Craft": "工艺",
    "Craft Brick": "工艺砖",
    "Craft Paper": "牛皮纸",
    "Crafting": "制作",
    "Crafting Table": "工艺台",
    "Create additional mana orb to store your mana": "创建额外的法力球来存储你的法力",
    "Create clock that able to slow down time around you, increasing your actions speed": "创建能够减慢你周围时间的时钟，提高你的行动速度",
    "Create more sophisticated but pretty useful scroll, amplifying your magic abilities": "创建更复杂但非常有用的卷轴，增强你的魔法能力",
    "Dariel Stoneheart": "达里尔·斯通哈特",
    "Farmer": "农民",
    "Fenris Starshadow": "芬里斯·星影",
    "Glass": "玻璃",
    "Head Miner": "首席矿工",
    "Increase your conjuration spell speed": "提高你的咒语施法速度",
    "Increase your wood craft efficiency": "提高木工效率",
    "Inventory": "存货",
    "Isaiah Windrider": "以赛亚·驭风者",
    "It looks like there is complete disorder in your library. An extra shelf will help organize your notebooks with notes.": "看来你的图书馆完全混乱了。 额外的架子将有助于整理您的笔记本和笔记。",
    "Ivor Soulshadow": "艾弗·灵魂之影",
    "Jasper Mysticsong": "贾斯珀神秘之歌",
    "Lets work on something making runes learning more efficient. At least, these wooden holders should help you a bit": "让我们致力于一些让符文学习更高效的事情。 至少，这些木架应该对你有一点帮助",
    "Lucian Moonwhisper": "卢锡安·月语",
    "Lumbermill": "伐木场",
    "Magic Clock": "魔法时钟",
    "Magic Scroll": "魔法卷轴",
    "Mana Orb": "法力宝珠",
    "Manuscript": "手稿",
    "Miner": "矿工",
    "My home is my fortress. Build some walls to prevent yourself from disruption when resting, to increase rest efficiency": "我的家就是我的堡垒。 建造一些墙，防止自己休息时受到干扰，提高休息效率",
    "Oberon Moonwhisper": "奥布朗·月语者",
    "Quarryman": "采石工人",
    "Recipes (": "配方（",
    "Refine Wood": "精炼木材",
    "Rune Holder": "符文持有者",
    "Sand": "沙子",
    "Stone Wall": "石墙",
    "Structures": "结构",
    "You must have some place to store your goods": "您必须有地方存放您的货物",
    "You need more tools to make crafting more convenient. But you can craft them, dont you?": "你需要更多的工具来让制作变得更加方便。 但你可以制作它们，不是吗？",
    "Paper": "纸",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Scientific": "科学计数法",
    "Standard": "标准",
    "Blind": "盲文",
    "Letters": "字母",
    "Mixed Engineering": "混合工程",
    "Mixed Scientific": "混合科学",
    "Chemistry": "化学",
    "Engineering": "工程符号",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '已激活',
    'OFF': '已停用',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'i': 'i',
    'I': 'I',
    'II': 'I',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '<': '<',
    '<<': '<<',
    '>': '>',
    '>>': '>>',
    '': '',
    '': '',
    '': '',

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
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Notation: ": "符号: ",
    "Toggle Music: ": "切换声音: ",
    "Rune: ": "符文: ",
    "Actions: ": "动作: ",
    "Upgrade: ": "升级: ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    "/sec)": "/秒)",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)\/s$/, '$1\/秒'],
	[/^([\d\.]+)K\/s$/, '$1K\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^x(.+) spell speed$/, 'x$1 法术速度'],
    [/^x(.+) rune learning speed$/, 'x$1 符文学习速度'],
    [/^x(.+) physical actions speed$/, 'x$1 身体动作速度'],
    [/^x(.+) mental actions speed$/, 'x$1 精神动作速度'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);