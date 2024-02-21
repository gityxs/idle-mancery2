(() => {
  "use strict";
  var e,
    t,
    n = {
      785: (e, t, n) => {
        var i,
          r,
          o,
          a,
          u = (function () {
            function e() {
              (this.events = []), (this.events = []);
            }
            return (
              (e.getInstance = function () {
                return e.instance || (e.instance = new e()), e.instance;
              }),
              (e.prototype.on = function (e, t) {
                this.events.push({ action: e, callback: t });
              }),
              (e.prototype.handleInput = function (e, t) {
                var n = this.events.find(function (t) {
                  return t.action === e;
                });
                n ? n.callback(t) : console.error("Unknown event: ", e);
              }),
              (e.prototype.output = function (e, t) {
                postMessage({ type: e, payload: t });
              }),
              e
            );
          })().getInstance(),
          s = (function () {
            function e() {
              this.workDispatcher = u;
            }
            return (
              (e.prototype.onInit = function () {}),
              (e.prototype.importData = function (e) {}),
              (e.prototype.exportData = function () {
                return {};
              }),
              (e.prototype.dataToUI = function () {
                return {};
              }),
              (e.prototype.process = function (e) {}),
              e
            );
          })();
        !(function (e) {
          (e.MANA = "mana"),
            (e.CONTROL = "control"),
            (e.KNOWLEDGE = "knowledge"),
            (e.COINS = "coins"),
            (e.ENERGY = "energy"),
            (e.SPARK = "spark"),
            (e.CRAFTSMANSHIP = "craftsmanship"),
            (e.FIGHTING_ACTIONS = "fighting-actions"),
            (e.BONE = "bone"),
            (e.WOOD = "wood"),
            (e.STONE = "stone"),
            (e.BRICK = "brick"),
            (e.REFINED_WOOD = "refined_wood"),
            (e.CHARGED_WOOD = "charged_wood"),
            (e.PAPER = "paper"),
            (e.CHARGED_PAPER = "charged_paper"),
            (e.SAND = "sand"),
            (e.GLASS = "glass"),
            (e.IRON_ORE = "iron_ore"),
            (e.IRON_PLATE = "iron_plate"),
            (e.ELEMENTAL_BRICK = "elemental_brick"),
            (e.ELEMENTAL_PLATE = "elemental_plate");
        })(i || (i = {})),
          (function (e) {
            (e.DARK = "dark"), (e.BLACK = "black"), (e.LIGHT = "light");
          })(r || (r = {})),
          (function (e) {
            (e.ADD_RUNIC_TABLE = "add_runic_table"),
              (e.MAGIC_PRISM = "magic_prism"),
              (e.MANA_ORB = "mana_orb"),
              (e.KNOWLEDGE = "knowledge"),
              (e.RUNIC_MEMORY = "runic_memory"),
              (e.EXPAND_MANA = "expand-mana"),
              (e.EXPAND_MAGIC_LIB = "expand_magic_library"),
              (e.RUNE_MASTER = "rune_master"),
              (e.EXPAND_BOOKCASES = "expand_bookcases"),
              (e.READING_TOOLS = "reading_tools"),
              (e.MEMORY_RUNE = "memory_rune"),
              (e.EXPANDED_SACRIFICE = "expanded_sacrifice"),
              (e.CRYSTALS = "crystals"),
              (e.TICKET_OUT = "ticket_out"),
              (e.BETTER_STASH = "better_stash"),
              (e.KNOWLEDGE_GENERATION = "knowledge_generation"),
              (e.BETTER_ORB = "better_orb"),
              (e.RUNIC_MEMORY2 = "runic_memory2"),
              (e.ORB_MANIPULATIONS = "orb_manipulations"),
              (e.RUNIC_TABLE_ENHANCEMENT = "runic_table_enhancement"),
              (e.RUNIC_SPLASH = "runic_splash");
          })(o || (o = {})),
          (function (e) {
            (e.ENDURANCE_RUNE = "endurance_rune"),
              (e.READ_BOOKS = "read_books"),
              (e.RUNE_LANGUAGE = "rune_language"),
              (e.RUNE_EXPERTISE = "rune_expertise"),
              (e.APTITUDE = "meditation"),
              (e.KNOWLEDGE_UPGRADES = "knowledge_upgrades"),
              (e.LAZY_CRYSTAL = "lazy_crystal"),
              (e.GOLD_CRYSTAL = "gold_crystal"),
              (e.MERCENARIES = "mercenaries"),
              (e.WELLNESS_CRYSTAL = "wellness_crystal"),
              (e.MUSCLE_RUNE = "muscle_rune"),
              (e.TRAINING_CHAMBERS = "training_chambers"),
              (e.GOLD_PROTECTION = "gold_protection"),
              (e.RUNE_PROTECTION = "rune_protection"),
              (e.BRAINSTORM = "brainstorm"),
              (e.BRAIN_EMPOWER = "brain_empower"),
              (e.MEDITATE = "meditate"),
              (e.AGILITY_RUNE = "agility_rune"),
              (e.WILLPOWER_TRAINING = "willpower_training"),
              (e.MANA_CRYSTAL = "mana_crystal"),
              (e.RUNE_SCIENCE = "rune_science"),
              (e.BASIC_WIZARDRY = "basic_wizardry"),
              (e.ILLUSION_SPELLS = "illusion_spells"),
              (e.SPARK_GENERATION = "spark_generation"),
              (e.SPARK_CONTAINER = "spark_container"),
              (e.SPARK_INFUSION = "spark_infusion"),
              (e.SPARK_MIND_INFUSION = "spark_mind_infusion"),
              (e.SPELLBINDING_TRAINING = "spellbinding_training"),
              (e.ELVEN_RUNE = "elven_rune"),
              (e.ELVEN_LIBRARY = "elven_library"),
              (e.CONJURATION_STUDY = "conjuration_study"),
              (e.BASIC_ELEMENTALISM = "basic_elementalism"),
              (e.REINCARNATION = "reincarnate"),
              (e.WOODWORKING = "woodworking"),
              (e.PAPERWORKING = "paperworking"),
              (e.STONEWORKING = "stoneworking"),
              (e.CHARGED_CRAFTING = "charged_crafting"),
              (e.GLASSMAKING = "glassmaking"),
              (e.METALWORKING = "metalworking"),
              (e.BATTLE_MASTERY = "battle_mastery"),
              (e.BONE_EXTRACTION = "bone_extraction"),
              (e.BATTLE_TRAINING = "battle_training"),
              (e.REFLEXES_TRAINING = "reflexes_training"),
              (e.SPELLSINGING_TRAINING = "spellsinging_training"),
              (e.FORTITUDE_TRAINING = "fortitude_training"),
              (e.PROTECTION_SPELLS = "protection_spells"),
              (e.ADVANCED_BONES_MECHANISMS = "advanced_bones_mechanisms"),
              (e.EVOCATION_SPELLS = "evocation_spells"),
              (e.PROTECTION_CRYSTAL = "protection_crystal"),
              (e.BONE_DRYING = "bone_drying"),
              (e.T_ENERGY = "t_energy"),
              (e.ADVANCED_EVOCATION = "advanced_evocation"),
              (e.ADVANCED_FIGHT_MOVES = "advanced_fight_moves"),
              (e.ELEMENTAL_BRICK = "elemental_brick"),
              (e.ELEMENTAL_PLATE = "elemental_plate"),
              (e.ELEMENTAL_PROTECTION_CRYSTAL = "elemental_protection_crystal"),
              (e.ELEMENTAL_RESONATOR = "elemental_resonator"),
              (e.CONJURATION_SINGING = "conjuration_singing");
          })(a || (a = {}));
        var c,
          l,
          d,
          p,
          f,
          g,
          m,
          h,
          y = [
            {
              id: i.MANA,
              name: "Mana",
              unlockCondition: function (e) {
                return !0;
              },
              hasCapacityLimit: !0,
              valuability: 4,
            },
            {
              id: i.KNOWLEDGE,
              name: "Knowledge",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(o.KNOWLEDGE) > 0 ||
                  e.city.actions.isUnlocked
                );
              },
              hasCapacityLimit: !0,
              valuability: 8,
              isShownInPanel: !0,
            },
            {
              id: i.CONTROL,
              name: "Control",
              unlockCondition: function (e) {
                return !1;
              },
              hasCapacityLimit: !0,
              valuability: 32,
              isShownInPanel: !0,
            },
            {
              id: i.COINS,
              name: "Coin",
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
              hasCapacityLimit: !0,
              valuability: 128,
              isShownInPanel: !0,
            },
            {
              id: i.ENERGY,
              name: "Energy",
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
              hasCapacityLimit: !0,
              valuability: 128,
              isShownInPanel: !0,
            },
            {
              id: i.SPARK,
              name: "Spark",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.SPARK_GENERATION) > 0
                );
              },
              hasCapacityLimit: !0,
              valuability: 1024,
              isShownInPanel: !0,
            },
            {
              id: i.BONE,
              name: "Bone",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.BONE_EXTRACTION) > 0
                );
              },
              hasCapacityLimit: !0,
              valuability: 10240,
              isShownInPanel: !0,
            },
            {
              id: i.CRAFTSMANSHIP,
              name: "Craftsmanship",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.WOODWORKING) > 0
                );
              },
              hasCapacityLimit: !1,
              valuability: 1024,
              isShownInPanel: !0,
            },
            {
              id: i.FIGHTING_ACTIONS,
              name: "Fighting Actions",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.BATTLE_MASTERY) > 0
                );
              },
              hasCapacityLimit: !1,
              valuability: 1024,
              isShownInPanel: !0,
              isUnstable: !0,
            },
            {
              id: i.WOOD,
              name: "Wood",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.WOODWORKING) > 0
                );
              },
              hasCapacityLimit: !1,
              valuability: 1024,
              isShownInPanel: !1,
              isCraftable: !0,
            },
            {
              id: i.STONE,
              name: "Stone",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.STONEWORKING) > 0
                );
              },
              hasCapacityLimit: !1,
              valuability: 1024,
              isShownInPanel: !1,
              isCraftable: !0,
            },
            {
              id: i.BRICK,
              name: "Brick",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.STONEWORKING) > 0
                );
              },
              hasCapacityLimit: !1,
              valuability: 1024,
              isShownInPanel: !1,
              isCraftable: !0,
            },
            {
              id: i.REFINED_WOOD,
              name: "Refined Wood",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.WOODWORKING) > 0
                );
              },
              hasCapacityLimit: !1,
              valuability: 1024,
              isShownInPanel: !1,
              isCraftable: !0,
            },
            {
              id: i.CHARGED_WOOD,
              name: "Charged Wood",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.CHARGED_CRAFTING) > 0
                );
              },
              hasCapacityLimit: !1,
              valuability: 1024,
              isShownInPanel: !1,
              isCraftable: !0,
            },
            {
              id: i.PAPER,
              name: "Paper",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.WOODWORKING) > 0
                );
              },
              hasCapacityLimit: !1,
              valuability: 1024,
              isShownInPanel: !1,
              isCraftable: !0,
            },
            {
              id: i.CHARGED_PAPER,
              name: "Charged Paper",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.CHARGED_CRAFTING) > 0
                );
              },
              hasCapacityLimit: !1,
              valuability: 1024,
              isShownInPanel: !1,
              isCraftable: !0,
            },
            {
              id: i.SAND,
              name: "Sand",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.GLASSMAKING) > 0
                );
              },
              hasCapacityLimit: !1,
              valuability: 1024,
              isShownInPanel: !1,
              isCraftable: !0,
            },
            {
              id: i.GLASS,
              name: "Glass",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.GLASSMAKING) > 0
                );
              },
              hasCapacityLimit: !1,
              valuability: 1024,
              isShownInPanel: !1,
              isCraftable: !0,
            },
            {
              id: i.IRON_ORE,
              name: "Iron Ore",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.METALWORKING) > 0
                );
              },
              hasCapacityLimit: !1,
              valuability: 4096,
              isShownInPanel: !1,
              isCraftable: !0,
            },
            {
              id: i.IRON_PLATE,
              name: "Iron Plate",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.METALWORKING) > 0
                );
              },
              hasCapacityLimit: !1,
              valuability: 4096,
              isShownInPanel: !1,
              isCraftable: !0,
            },
            {
              id: i.ELEMENTAL_BRICK,
              name: "Elemental Brick",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.ELEMENTAL_BRICK) > 0
                );
              },
              hasCapacityLimit: !1,
              valuability: 16096,
              isShownInPanel: !1,
              isCraftable: !0,
            },
            {
              id: i.ELEMENTAL_PLATE,
              name: "Elemental Plate",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.ELEMENTAL_PLATE) > 0
                );
              },
              hasCapacityLimit: !1,
              valuability: 64e3,
              isShownInPanel: !1,
              isCraftable: !0,
            },
          ],
          E = n(482);
        !(function (e) {
          (e.RUNE_READING = "INTELLECT"),
            (e.WILLPOWER = "WILLPOWER"),
            (e.SANITY = "SANITY"),
            (e.STRENGTH = "STRENGTH"),
            (e.VITALITY = "VITALITY"),
            (e.RUNE_MASTERY = "RUNE MASTERY"),
            (e.AGILITY = "AGILITY"),
            (e.MAGIC_KNOWLEDGE = "MAGIC KNOWLEDGE"),
            (e.REST_EFFICIENCY = "REST EFFICIENCY"),
            (e.CONJURATION_LORE = "CONJURATION_LORE"),
            (e.STAMINA = "stamina");
        })(c || (c = {})),
          (function (e) {
            (e.MAX_HP = "Max Hp"),
              (e.HP_REGEN = "Hp Regen"),
              (e.ARMOR = "Armor"),
              (e.PHYSICAL_DAMAGE = "Physical Damage"),
              (e.MAX_PHYSICAL_DAMAGE = "Max Physical Damage"),
              (e.MAGICAL_DAMAGE = "Magical Damage"),
              (e.MAX_MAGICAL_DAMAGE = "Max Magical Damage"),
              (e.FIRE_DAMAGE = "Fire Damage"),
              (e.MAX_FIRE_DAMAGE = "Max Fire Damage"),
              (e.CRIT_CHANCE = "Crit Chance"),
              (e.CRIT_MULTIPLIER = "Crit Multiplier"),
              (e.DODGE_CHANCE = "Dodge Chance"),
              (e.PRECISION = "Precision"),
              (e.MAGIC_RESISTANCE = "Magic Resistance"),
              (e.FIRE_RESISTANCE = "Fire Resistance");
          })(l || (l = {})),
          (function (e) {
            (e.KICK = "kick"),
              (e.PRECISE_HIT = "precise_hit"),
              (e.SWEEPING_BLOW = "sweeping_blow"),
              (e.RESTORE = "restore"),
              (e.STONE_SKIN = "stone_skin"),
              (e.MINOR_HEAL = "minor_heal"),
              (e.FIREBALL = "fireball"),
              (e.FIRE_BLAST = "fireblast"),
              (e.MAGIC_ARROW = "magic_arrow");
          })(d || (d = {})),
          (function (e) {
            (e.SEVERS = "severs"),
              (e.LAKE = "lake"),
              (e.FIELD = "field"),
              (e.FOREST = "forest"),
              (e.CAVE = "cave"),
              (e.LIBRARY = "library"),
              (e.SEWERS_CHAMBER = "boss_0"),
              (e.SEALED_CAVE = "boss_1"),
              (e.WINDMILL = "boss_2");
          })(p || (p = {})),
          (function (e) {
            (e.RAT = "rat"),
              (e.BEAVER = "beaver"),
              (e.MUSKRAT = "muskrat"),
              (e.TORTOISE = "tortoise"),
              (e.MOSQUITO = "mosquito"),
              (e.ARMADILLO = "armadillo"),
              (e.RAVEN = "raven"),
              (e.WASP = "wasp"),
              (e.SMALL_DEMON = "small_demon"),
              (e.FIRE_DEMON = "fire_demon"),
              (e.SPIDER = "spider"),
              (e.MAGIC_SPIDER = "magic_spider"),
              (e.WOLF = "wolf"),
              (e.BEAR = "bear"),
              (e.FLY = "fly"),
              (e.MAGIC_FLY = "magic_fly"),
              (e.GUARDIAN = "guardian"),
              (e.LIVING_BOOK = "living_book"),
              (e.FLAMED_SCROLL = "flamed_scroll"),
              (e.MAGIC_BOOK = "magic_book"),
              (e.DONESKIN = "doneskin");
          })(f || (f = {})),
          (function (e) {
            (e.HEAD = "head"),
              (e.BODY = "body"),
              (e.LEGS = "legs"),
              (e.HANDS = "hands"),
              (e.SHIELD = "shield");
          })(g || (g = {})),
          (function (e) {
            (e.LEATHER = "Leather"), (e.IRON = "Iron"), (e.MAGIC = "Magic");
          })(m || (m = {})),
          (function (e) {
            (e.CAP = "cap"),
              (e.HAT = "hat"),
              (e.HELMET = "helmet"),
              (e.JACKET = "jacket"),
              (e.CLOACK = "cloak"),
              (e.ARMOR = "armorplate"),
              (e.LEATHER_BOOTS = "leather_boots"),
              (e.IRON_BOOTS = "iron_boots"),
              (e.SLIPPERS = "slippers"),
              (e.CLUB = "club"),
              (e.STUFF = "stuff"),
              (e.SWORD = "sword"),
              (e.KNIFE = "knife"),
              (e.WOODEN_SHIELD = "wooden_shield"),
              (e.IRON_SHIELD = "iron_shield"),
              (e.BONE_SHIELD = "bone_shield");
          })(h || (h = {}));
        var A = function (e) {
          var t,
            n =
              (((t = {})[i.MANA] = {
                income: {
                  linear: [
                    {
                      id: "base",
                      label: "Willpower",
                      value: e.personage.attributes
                        .getAttribute(c.WILLPOWER)
                        .mul(0.2)
                        .plus(0.1),
                      category: "Attribute",
                    },
                  ],
                  multiplier: [],
                  consumption: [],
                },
                max: {
                  linear: [
                    {
                      id: "base",
                      label: "Natural",
                      value: new E.Z(1),
                      category: "Wizard",
                    },
                  ],
                  multiplier: [],
                  consumption: [],
                },
              }),
              (t[i.CONTROL] = {
                max: {
                  linear: [
                    {
                      id: "base",
                      label: "Natural",
                      value: new E.Z(1e3),
                      category: "Wizard",
                    },
                  ],
                  multiplier: [],
                  consumption: [],
                },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[i.KNOWLEDGE] = {
                max: {
                  linear: [
                    {
                      id: "base",
                      label: "Natural",
                      value: new E.Z(50),
                      category: "Wizard",
                    },
                  ],
                  multiplier: [],
                  consumption: [],
                },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[i.ENERGY] = {
                max: {
                  linear: [
                    {
                      id: "base",
                      label: "Natural",
                      value: new E.Z(100),
                      category: "Wizard",
                    },
                  ],
                  multiplier: [],
                  consumption: [],
                },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[i.COINS] = {
                max: {
                  linear: [
                    {
                      id: "base",
                      label: "Natural",
                      value: new E.Z(50),
                      category: "Wizard",
                    },
                  ],
                  multiplier: [],
                  consumption: [],
                },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[i.BONE] = {
                max: {
                  linear: [
                    {
                      id: "base",
                      label: "Natural",
                      value: new E.Z(50),
                      category: "Wizard",
                    },
                  ],
                  multiplier: [],
                  consumption: [],
                },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[i.SPARK] = {
                max: {
                  linear: [
                    {
                      id: "base",
                      label: "Natural",
                      value: new E.Z(50),
                      category: "Wizard",
                    },
                  ],
                  multiplier: [],
                  consumption: [],
                },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[i.CRAFTSMANSHIP] = {
                max: { linear: [], multiplier: [], consumption: [] },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[i.FIGHTING_ACTIONS] = {
                max: { linear: [], multiplier: [], consumption: [] },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[i.WOOD] = {
                max: { linear: [], multiplier: [], consumption: [] },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[i.STONE] = {
                max: { linear: [], multiplier: [], consumption: [] },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[i.REFINED_WOOD] = {
                max: { linear: [], multiplier: [], consumption: [] },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[i.PAPER] = {
                max: { linear: [], multiplier: [], consumption: [] },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[i.CHARGED_WOOD] = {
                max: { linear: [], multiplier: [], consumption: [] },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[i.CHARGED_PAPER] = {
                max: { linear: [], multiplier: [], consumption: [] },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[i.BRICK] = {
                max: { linear: [], multiplier: [], consumption: [] },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[i.SAND] = {
                max: { linear: [], multiplier: [], consumption: [] },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[i.GLASS] = {
                max: { linear: [], multiplier: [], consumption: [] },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[i.IRON_ORE] = {
                max: { linear: [], multiplier: [], consumption: [] },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[i.IRON_PLATE] = {
                max: { linear: [], multiplier: [], consumption: [] },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[i.ELEMENTAL_BRICK] = {
                max: { linear: [], multiplier: [], consumption: [] },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[i.ELEMENTAL_PLATE] = {
                max: { linear: [], multiplier: [], consumption: [] },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              t),
            r = function (e) {
              var t,
                i,
                r,
                o,
                a,
                u,
                s,
                c,
                l,
                d,
                p,
                f,
                g,
                m,
                h,
                E,
                A,
                v,
                w,
                b,
                I,
                C,
                N,
                T,
                R,
                L,
                O,
                S,
                M = y.find(function (t) {
                  return t.id === e;
                });
              null == M || M.isCraftable,
                null == M || M.isPrestigeCurrency,
                (t = n[e].max.linear).push.apply(
                  t,
                  Zl.learning.runes.getResourceBeingStored(e)
                ),
                (i = n[e].max.multiplier).push.apply(
                  i,
                  Zl.learning.runes.getResourceBeingStoredMultiplier(e)
                ),
                (r = n[e].income.multiplier).push.apply(
                  r,
                  Zl.learning.runes.getMultiplier(e)
                ),
                (o = n[e].income.linear).push.apply(
                  o,
                  Zl.learning.runes.getResourceGain(e)
                ),
                (a = n[e].max.linear).push.apply(
                  a,
                  Zl.learning.crystals.getResourceBeingStored(e)
                ),
                (u = n[e].max.multiplier).push.apply(
                  u,
                  Zl.learning.crystals.getResourceBeingStoredMultiplier(e)
                ),
                (s = n[e].income.multiplier).push.apply(
                  s,
                  Zl.learning.crystals.getMultiplier(e)
                ),
                (c = n[e].income.linear).push.apply(
                  c,
                  Zl.learning.crystals.getResourceGain(e)
                ),
                (l = n[e].income.multiplier).push.apply(
                  l,
                  Zl.learning.runeUpgrades.getGainMultiplier(e)
                ),
                (d = n[e].income.linear).push.apply(
                  d,
                  Zl.learning.runeUpgrades.getGain(e)
                ),
                (p = n[e].income.linear).push.apply(
                  p,
                  Zl.city.actions.getResourceBeingProduced(e)
                ),
                (f = n[e].income.multiplier).push.apply(
                  f,
                  Zl.city.actions.getGainMultiplier(e)
                ),
                (g = n[e].income.consumption).push.apply(
                  g,
                  Zl.city.actions.getResourceBeingConsumed(e)
                ),
                (m = n[e].max.linear).push.apply(
                  m,
                  Zl.city.actions.getResourceBeingStored(e)
                ),
                (h = n[e].max.multiplier).push.apply(
                  h,
                  Zl.city.actions.getResourceBeingStoredMultiplier(e)
                ),
                (E = n[e].max.multiplier).push.apply(
                  E,
                  Zl.learning.runeUpgrades.getCapacityMult(e)
                ),
                (A = n[e].max.linear).push.apply(
                  A,
                  Zl.learning.runeUpgrades.getCapacity(e)
                ),
                (v = n[e].income.linear).push.apply(
                  v,
                  Zl.construction.crafting.getResourceGain(e)
                ),
                (w = n[e].income.consumption).push.apply(
                  w,
                  Zl.construction.crafting.getResourceConsumption(e)
                ),
                (b = n[e].income.linear).push.apply(
                  b,
                  Zl.construction.structures.getResourceBeingProduced(e)
                ),
                (I = n[e].income.multiplier).push.apply(
                  I,
                  Zl.construction.structures.getGainMultiplier(e)
                ),
                (C = n[e].max.linear).push.apply(
                  C,
                  Zl.construction.structures.getResourceBeingStored(e)
                ),
                (N = n[e].max.multiplier).push.apply(
                  N,
                  Zl.construction.structures.getResourceBeingStoredMultiplier(e)
                ),
                (T = n[e].income.linear).push.apply(
                  T,
                  Zl.achievements.getResourceBeingProduced(e)
                ),
                (R = n[e].income.multiplier).push.apply(
                  R,
                  Zl.achievements.getResourceMultiplier(e)
                ),
                (L = n[e].max.linear).push.apply(
                  L,
                  Zl.achievements.getResourceBeingStored(e)
                ),
                (O = n[e].max.multiplier).push.apply(
                  O,
                  Zl.achievements.getResourceStorageMultiplier(e)
                ),
                (S = n[e].income.consumption).push.apply(
                  S,
                  Zl.battle.battleActions.getResourceBeingConsumed(e)
                );
            };
          for (var o in n) r(o);
          return n;
        };
        function v(e, t) {
          if (e.lte(Number.MAX_VALUE))
            return new E.Z(Math.log(e.toNumber()) / Math.log(t.toNumber()));
          var n = e.toExponential().split("e"),
            i = n[0],
            r = n[1];
          return new E.Z(r)
            .mul(E.Z.log(t))
            .plus(E.Z.log(new E.Z(i)).div(E.Z.log(t)));
        }
        function w(e, t) {
          if (
            (t = new E.Z(t)).greaterThanOrEqualTo(Number.MAX_SAFE_INTEGER) ||
            t.lessThanOrEqualTo(Number.MIN_SAFE_INTEGER)
          )
            return E.Z.pow(e, t);
          var n = e.toExponential().split("e"),
            i = parseFloat(n[0]),
            r = parseInt(n[1], 10),
            o = Math.pow(i, t.toNumber()),
            a = E.Z.pow(10, t.mul(r));
          return new E.Z(o).mul(a);
        }
        function b(e) {
          return v(e, new E.Z(10));
        }
        var I = { notation: "standard" },
          C = function (e, t) {
            I[e] = t;
          };
        function N(e) {
          if (!e) return !1;
          var t = new E.Z(e);
          return !t.isNaN() && t.isFinite();
        }
        function T(e) {
          if (e > 1e8) return "Never";
          if (!e || e < 0) return "00:00:00";
          e = Number(e);
          var t = Math.floor(e / 86400),
            n = Math.floor((e % 86400) / 3600),
            i = Math.floor((e % 3600) / 60),
            r = Math.floor(e % 60);
          return (
            (t > 0 ? "".concat(t, "d ") : "") +
            (n < 10 ? "0".concat(n, ":") : "".concat(n, ":")) +
            (i < 10 ? "0".concat(i, ":") : "".concat(i, ":")) +
            (r < 10 ? "0".concat(r) : "".concat(r))
          );
        }
        function R(e) {
          var t = function (e) {
              return e < 10 ? "0" + e : e;
            },
            n = e.getFullYear(),
            i = t(e.getMonth() + 1),
            r = t(e.getDate()),
            o = t(e.getHours()),
            a = t(e.getMinutes()),
            u = t(e.getSeconds());
          return ""
            .concat(n, "-")
            .concat(i, "-")
            .concat(r, " ")
            .concat(o, ":")
            .concat(a, ":")
            .concat(u);
        }
        function L(e, t) {
          return (
            void 0 === t && (t = !0),
            e.greaterThanOrEqualTo("1.e+18")
              ? "Never"
              : e.greaterThanOrEqualTo("1")
              ? T(e.toNumber())
              : t || e.lessThanOrEqualTo("0")
              ? "00:00:00"
              : "".concat(ee(e.pow(-1)), "/s")
          );
        }
        var O,
          S,
          M,
          P,
          Z,
          _,
          G,
          D,
          k,
          B,
          U,
          x,
          H,
          W,
          Y,
          q,
          X,
          K,
          F,
          j,
          V,
          z,
          Q,
          J,
          $,
          ee = function (e, t, n) {
            if (
              (void 0 === t && (t = 2),
              void 0 === n && (n = !1),
              e || (e = new E.Z(0)),
              E.Z.isDecimal(e) || (e = new E.Z(e)),
              "scientific" === I.notation)
            )
              return e.abs().lessThan(1e3) ? e.toFixed(t) : e.toExponential(t);
            var i = e.isNegative();
            if ((e = e.abs()).greaterThanOrEqualTo(1e33))
              return (i ? "-" : "") + e.toExponential(t);
            if (e.lessThan(w(10, -t)) && e.greaterThanOrEqualTo("1.e-15"))
              return n ? "0" : (i ? "-" : "") + e.toExponential(t).toString();
            if (e.lessThan(1))
              return n ? "0" : (i ? "-" : "") + e.toDecimalPlaces(t).toString();
            try {
              var r = b(e.abs().plus(0.1)).floor().div(3).floor().toNumber(),
                o = e.div(new E.Z(10).pow(3 * r));
              o.greaterThanOrEqualTo(1e3) && ((r += 1), (o = o.div(1e3)));
              var a = Math.abs(r) > 0 ? te(r) : "";
              if (n)
                return (
                  (i ? "-" : "") +
                  o.toFixed(
                    a ? (o.toNumber() >= 100 ? Math.max(t - 1, 0) : t) : 0
                  ) +
                  a
                );
              var u = o.toFixed(o.toNumber() >= 100 ? Math.max(t - 1, 0) : t);
              return (i ? "-" : "") + ne(u) + a;
            } catch (i) {
              return (
                console.error(i),
                console.warn("Error spawned with args ", e, t, n),
                ""
              );
            }
          },
          te = function (e) {
            return (
              [
                "",
                "K",
                "M",
                "B",
                "T",
                "Qa",
                "Qi",
                "Sx",
                "Sp",
                "Oc",
                "No",
                "Dc",
                "UDc",
                "DDc",
                "TDc",
                "QaDc",
                "QiDc",
                "SxDc",
                "SpDc",
                "OcDc",
                "NoDc",
                "Vi",
                "UVi",
                "DVi",
                "TVi",
                "QaVi",
                "QiVi",
                "SxVi",
                "SpVi",
                "OcVi",
                "NoVi",
                "Tg",
                "UTg",
                "DTg",
                "TTg",
                "QaTg",
                "QiTg",
                "SxTg",
                "SpTg",
                "OcTg",
                "NoTg",
                "Qd",
                "UQd",
                "DQd",
                "TQd",
                "QaQd",
                "QiQd",
                "SxQd",
                "SpQd",
                "OcQd",
                "NoQd",
                "Qn",
                "UQn",
                "DQn",
                "TQn",
                "QaQn",
                "QiQn",
                "SxQn",
                "SpQn",
                "OcQn",
                "NoQn",
                "Se",
                "USe",
                "DSe",
                "TSe",
                "QaSe",
                "QiSe",
                "SxSe",
                "SpSe",
                "OcSe",
                "NoSe",
                "St",
                "USt",
                "DSt",
                "TSt",
                "QaSt",
                "QiSt",
                "SxSt",
                "SpSt",
                "OcSt",
                "NoSt",
                "Og",
                "UOg",
                "DOg",
                "TOg",
                "QaOg",
                "QiOg",
                "SxOg",
                "SpOg",
                "OcOg",
                "NoOg",
                "Nn",
                "UNn",
                "DNn",
                "TNn",
                "QaNn",
                "QiNn",
                "SxNn",
                "SpNn",
                "OcNn",
                "NoNn",
                "Ce",
              ][e] || "E".concat(3 * e)
            );
          },
          ne = function (e) {
            return e.includes(".") && (e = e.replace(/\.?0+$/, "")), e;
          },
          ie = function (e, t) {
            return ee(e, t, !0);
          },
          re = function () {
            return (
              (re =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, r) &&
                        (e[r] = t[r]);
                  return e;
                }),
              re.apply(this, arguments)
            );
          },
          oe = (function () {
            function e() {
              (this.cachedBreakdown = {}),
                (this.cachedShortenedBreakdown = {}),
                (this.cachedResources = {}),
                (this.resourcesStatus = y.map(function (e) {
                  var t;
                  return {
                    id: e.id,
                    amount: new E.Z(0),
                    balance: new E.Z(0),
                    max: new E.Z(0),
                    hasCapacityLimit: e.hasCapacityLimit,
                    potentialEfficiency: 1,
                    income: new E.Z(0),
                    multiplier: new E.Z(1),
                    consumption: new E.Z(0),
                    isUnstable:
                      null !== (t = e.isUnstable) && void 0 !== t && t,
                    capIncome: new E.Z(0),
                    capMultiplier: new E.Z(1),
                  };
                }));
            }
            return (
              (e.getInstance = function () {
                return e.instance || (e.instance = new e()), e.instance;
              }),
              (e.collapseEffects = function (e) {
                var t,
                  n = e.linear.reduce(function (e, t) {
                    return (
                      e[t.category]
                        ? (e[t.category].value = e[t.category].value.plus(
                            t.value
                          ))
                        : (e[t.category] = re({}, t)),
                      e
                    );
                  }, {}),
                  i = e.multiplier.reduce(function (e, t) {
                    return (
                      e[t.category]
                        ? (e[t.category].value = e[t.category].value.mul(
                            t.value
                          ))
                        : (e[t.category] = re({}, t)),
                      e
                    );
                  }, {}),
                  r =
                    null === (t = e.consumption) || void 0 === t
                      ? void 0
                      : t.reduce(function (e, t) {
                          return (
                            e[t.category]
                              ? (e[t.category].value = e[t.category].value.plus(
                                  t.value
                                ))
                              : (e[t.category] = re({}, t)),
                            e
                          );
                        }, {});
                return {
                  linear: Object.values(n).map(function (e) {
                    return re(re({}, e), { label: e.category });
                  }),
                  multiplier: Object.values(i).map(function (e) {
                    return re(re({}, e), { label: e.category });
                  }),
                  consumption: r
                    ? Object.values(r).map(function (e) {
                        return re(re({}, e), { label: e.category });
                      })
                    : [],
                };
              }),
              (e.prototype.rebuildCache = function () {
                var e = this;
                (this.cachedResources = {}),
                  this.resourcesStatus.forEach(function (t) {
                    e.cachedResources[t.id] = t;
                  });
              }),
              (e.prototype.getResourceEfficiency = function (t) {
                return t in e.lackEfficiencyResources
                  ? null == e.lackEfficiencyResources[t]
                    ? 1
                    : e.lackEfficiencyResources[t]
                  : 1;
              }),
              (e.prototype.addResource = function (e, t) {
                var n,
                  i = this.resourcesStatus.findIndex(function (t) {
                    return t.id === e;
                  });
                if (i < 0) {
                  i = this.resourcesStatus.length;
                  var r = y.find(function (t) {
                    return t.id === e;
                  });
                  if (!r) return;
                  this.resourcesStatus.push({
                    id: e,
                    amount: new E.Z(0),
                    balance: new E.Z(0),
                    hasCapacityLimit: r.hasCapacityLimit,
                    max: r.hasCapacityLimit ? new E.Z(0) : new E.Z(-1),
                    potentialEfficiency: 1,
                    income: new E.Z(0),
                    multiplier: new E.Z(1),
                    consumption: new E.Z(0),
                    isUnstable:
                      null !== (n = r.isUnstable) && void 0 !== n && n,
                    capIncome: new E.Z(0),
                    capMultiplier: new E.Z(1),
                  });
                }
                (this.resourcesStatus[i].amount =
                  this.resourcesStatus[i].amount.plus(t)),
                  this.resourcesStatus[i].max.greaterThan(0) &&
                    this.resourcesStatus[i].hasCapacityLimit &&
                    (this.resourcesStatus[i].amount = E.Z.min(
                      this.resourcesStatus[i].amount,
                      this.resourcesStatus[i].max
                    )),
                  this.resourcesStatus[i].amount.lessThan(0) &&
                    (this.resourcesStatus[i].amount = new E.Z(0)),
                  (this.cachedResources[e] = this.resourcesStatus[i]);
              }),
              (e.prototype.setResource = function (e, t) {
                var n,
                  i = this.resourcesStatus.findIndex(function (t) {
                    return t.id === e;
                  });
                if (i < 0) {
                  i = this.resourcesStatus.length;
                  var r = y.find(function (t) {
                    return t.id === e;
                  });
                  if (!r) return;
                  this.resourcesStatus.push({
                    id: e,
                    amount: new E.Z(0),
                    balance: new E.Z(0),
                    hasCapacityLimit: r.hasCapacityLimit,
                    max: r.hasCapacityLimit ? new E.Z(0) : new E.Z(-1),
                    potentialEfficiency: 1,
                    income: new E.Z(0),
                    multiplier: new E.Z(1),
                    consumption: new E.Z(0),
                    isUnstable:
                      null !== (n = r.isUnstable) && void 0 !== n && n,
                    capIncome: new E.Z(0),
                    capMultiplier: new E.Z(1),
                  });
                }
                (this.resourcesStatus[i].amount = t),
                  (this.cachedResources[e] = this.resourcesStatus[i]);
              }),
              (e.prototype.subtractResource = function (e, t) {
                var n = this.resourcesStatus.findIndex(function (t) {
                  return t.id === e;
                });
                n < 0 ||
                  ((this.resourcesStatus[n].amount =
                    this.resourcesStatus[n].amount.sub(t)),
                  (this.cachedResources[e] = this.resourcesStatus[n]));
              }),
              (e.prototype.subtractResourceBatch = function (e) {
                var t = this;
                e.forEach(function (e) {
                  t.subtractResource(e.id, e.amount);
                });
              }),
              (e.prototype.setBalance = function (e, t, n, i) {
                var r,
                  o = this.resourcesStatus.findIndex(function (t) {
                    return t.id === e;
                  });
                if (o < 0) {
                  o = this.resourcesStatus.length;
                  var a = y.find(function (t) {
                    return t.id === e;
                  });
                  if (!a) return;
                  this.resourcesStatus.push({
                    id: e,
                    amount: new E.Z(0),
                    balance: new E.Z(0),
                    hasCapacityLimit: a.hasCapacityLimit,
                    max: a.hasCapacityLimit ? new E.Z(0) : new E.Z(-1),
                    potentialEfficiency: 1,
                    income: new E.Z(0),
                    multiplier: new E.Z(1),
                    consumption: new E.Z(0),
                    isUnstable:
                      null !== (r = a.isUnstable) && void 0 !== r && r,
                    capIncome: new E.Z(0),
                    capMultiplier: new E.Z(1),
                  });
                }
                (this.resourcesStatus[o].income = t),
                  (this.resourcesStatus[o].multiplier = n),
                  (this.resourcesStatus[o].consumption = i),
                  (this.resourcesStatus[o].balance = t.mul(n).sub(i)),
                  (this.cachedResources[e] = this.resourcesStatus[o]);
              }),
              (e.prototype.setCapacity = function (e, t, n) {
                var i,
                  r = this.resourcesStatus.findIndex(function (t) {
                    return t.id === e;
                  });
                if (r < 0) {
                  r = this.resourcesStatus.length;
                  var o = y.find(function (t) {
                    return t.id === e;
                  });
                  if (!o) return;
                  this.resourcesStatus.push({
                    id: e,
                    amount: new E.Z(0),
                    balance: new E.Z(0),
                    hasCapacityLimit: o.hasCapacityLimit,
                    max: o.hasCapacityLimit ? new E.Z(0) : new E.Z(-1),
                    potentialEfficiency: 1,
                    income: new E.Z(0),
                    multiplier: new E.Z(1),
                    consumption: new E.Z(0),
                    isUnstable:
                      null !== (i = o.isUnstable) && void 0 !== i && i,
                    capIncome: new E.Z(0),
                    capMultiplier: new E.Z(1),
                  });
                }
                (this.resourcesStatus[r].capIncome = t),
                  (this.resourcesStatus[r].capMultiplier = n),
                  (this.resourcesStatus[r].max = t.mul(n)),
                  (this.cachedResources[e] = this.resourcesStatus[r]);
              }),
              (e.prototype.saveBalances = function () {
                var t = this;
                Zl.personage.attributes.getBreakdowns();
                var n = A(Zl),
                  i = {},
                  r = {};
                y.forEach(function (o) {
                  var a, u, s, c, l, d, p, f;
                  if (o.unlockCondition(Zl)) {
                    (i[o.id] = {
                      max: { income: [], multiplier: [], consumption: [] },
                      income: { income: [], multiplier: [], consumption: [] },
                    }),
                      (r[o.id] = {
                        max: { income: [], multiplier: [], consumption: [] },
                        income: { income: [], multiplier: [], consumption: [] },
                      });
                    var g = n[o.id].max.linear.reduce(function (e, t) {
                        return e.add(t.value);
                      }, new E.Z(0)),
                      m = n[o.id].max.multiplier.reduce(function (e, t) {
                        return e.mul(t.value);
                      }, new E.Z(1));
                    t.setCapacity(o.id, g, m);
                    var h = e.collapseEffects(n[o.id].max);
                    (i[o.id].max.income = n[o.id].max.linear
                      .filter(function (e) {
                        return e.value;
                      })
                      .sort(function (e, t) {
                        return t.value - e.value;
                      })
                      .map(function (e) {
                        return re(re({}, e), {
                          value: "+".concat(ee(e.value, 4)),
                        });
                      })),
                      (r[o.id].max.income = h.linear
                        .filter(function (e) {
                          return e.value;
                        })
                        .map(function (e) {
                          return re(re({}, e), {
                            value: "+".concat(ee(e.value, 4)),
                          });
                        })),
                      (i[o.id].max.multiplier = n[o.id].max.multiplier
                        .filter(function (e) {
                          return 1 !== e.value;
                        })
                        .sort(function (e, t) {
                          return t.value - e.value;
                        })
                        .map(function (e) {
                          return re(re({}, e), {
                            value: "x".concat(ee(e.value, 4)),
                          });
                        })),
                      (r[o.id].max.multiplier = h.multiplier
                        .filter(function (e) {
                          return 1 !== e.value;
                        })
                        .map(function (e) {
                          return re(re({}, e), {
                            value: "x".concat(ee(e.value, 4)),
                          });
                        }));
                    var y = e.collapseEffects(n[o.id].income),
                      A = n[o.id].income.linear.reduce(function (e, t) {
                        return e.add(t.value);
                      }, new E.Z(0)),
                      v = n[o.id].income.multiplier.reduce(function (e, t) {
                        return e.mul(t.value);
                      }, new E.Z(1)),
                      w =
                        null === (a = n[o.id].income.consumption) ||
                        void 0 === a
                          ? void 0
                          : a.reduce(function (e, t) {
                              return e.add(t.value);
                            }, new E.Z(0));
                    if (
                      (t.setBalance(o.id, A, v, w),
                      null === (u = i[o.id]) ||
                        void 0 === u ||
                        (u.income.income = n[o.id].income.linear
                          .filter(function (e) {
                            return e.value;
                          })
                          .sort(function (e, t) {
                            return t.value - e.value;
                          })
                          .map(function (e) {
                            return re(re({}, e), {
                              value: "+".concat(ee(e.value, 4)),
                            });
                          })),
                      null === (s = r[o.id]) ||
                        void 0 === s ||
                        (s.income.income = y.linear
                          .filter(function (e) {
                            return e.value;
                          })
                          .map(function (e) {
                            return re(re({}, e), {
                              value: "+".concat(ee(e.value, 4)),
                            });
                          })),
                      null === (c = i[o.id]) ||
                        void 0 === c ||
                        (c.income.multiplier = n[o.id].income.multiplier
                          .filter(function (e) {
                            return 1 !== e.value;
                          })
                          .sort(function (e, t) {
                            return t.value - e.value;
                          })
                          .map(function (e) {
                            return re(re({}, e), {
                              value: "x".concat(ee(e.value, 4)),
                            });
                          })),
                      null === (l = r[o.id]) ||
                        void 0 === l ||
                        (l.income.multiplier = y.multiplier
                          .filter(function (e) {
                            return 1 !== e.value;
                          })
                          .map(function (e) {
                            return re(re({}, e), {
                              value: "x".concat(ee(e.value, 4)),
                            });
                          })),
                      null === (d = i[o.id]) ||
                        void 0 === d ||
                        (d.income.consumption = n[o.id].income.consumption
                          .filter(function (e) {
                            return e.value;
                          })
                          .sort(function (e, t) {
                            return t.value - e.value;
                          })
                          .map(function (e) {
                            return re(re({}, e), {
                              value: "-".concat(ee(e.value, 4)),
                            });
                          })),
                      null === (p = r[o.id]) ||
                        void 0 === p ||
                        (p.income.consumption =
                          null === (f = y.consumption) || void 0 === f
                            ? void 0
                            : f
                                .filter(function (e) {
                                  return e.value;
                                })
                                .map(function (e) {
                                  return re(re({}, e), {
                                    value: "-".concat(ee(e.value, 4)),
                                  });
                                })),
                      o.hasCapacityLimit)
                    ) {
                      var b = n[o.id].max.linear.reduce(function (e, t) {
                          return e.add(t.value);
                        }, new E.Z(0)),
                        I = n[o.id].max.multiplier.reduce(function (e, t) {
                          return e.mul(t.value);
                        }, new E.Z(1));
                      t.setCapacity(o.id, b, I);
                    }
                  }
                }),
                  (this.cachedBreakdown = i),
                  (this.cachedShortenedBreakdown = r);
              }),
              (e.prototype.resetEfficiency = function () {
                e.lackEfficiencyResources = {};
              }),
              (e.prototype.assertBalances = function (e) {
                var t;
                void 0 === e && (e = !1);
                var n = A(Zl),
                  i = {};
                for (var r in n) {
                  var o = n[r].income.linear.reduce(function (e, t) {
                      return e.add(t.value);
                    }, new E.Z(0)),
                    a = n[r].income.multiplier.reduce(function (e, t) {
                      return e.mul(t.value);
                    }, new E.Z(1)),
                    u =
                      null === (t = n[r].income.consumption) || void 0 === t
                        ? void 0
                        : t.reduce(function (e, t) {
                            return e.add(t.value);
                          }, new E.Z(0)),
                    s =
                      (o.mul(a).sub(u || 0),
                      this.getPotentialEfficiency(
                        E.Z.max(0, this.getResource(r)).add(o.mul(a)),
                        (u || new E.Z(0)).mul(-1)
                      ));
                  i[r] = s < 1 && e ? 0 : s;
                }
                return i;
              }),
              (e.prototype.shouldChangeBalances = function (e) {
                return (
                  Object.values(e).findIndex(function (e) {
                    return e < 1;
                  }) > -1
                );
              }),
              (e.prototype.applyBalances = function (t) {
                for (var n in t) {
                  var i = n;
                  i in e.lackEfficiencyResources &&
                  null != e.lackEfficiencyResources[i]
                    ? (e.lackEfficiencyResources[i] *= t[i])
                    : (e.lackEfficiencyResources[i] = t[i]);
                }
                e.lackEfficiencyResourcesCached = re(
                  {},
                  e.lackEfficiencyResources
                );
              }),
              (e.prototype.applyEfficiencies = function () {}),
              (e.prototype.assertAndApplyBalances = function () {
                for (
                  var e = this.assertBalances(), t = 0;
                  this.shouldChangeBalances(e) && t < 15;

                )
                  this.applyBalances(e),
                    this.applyEfficiencies(),
                    (e = this.assertBalances(t > 10)),
                    t++;
              }),
              (e.prototype.reassertBalances = function () {
                this.resetEfficiency(),
                  this.assertAndApplyBalances(),
                  this.saveBalances(),
                  this.rebuildCache();
              }),
              (e.prototype.process = function (t) {
                var n = this;
                this.dbCache ||
                  (this.dbCache = y.reduce(function (e, t) {
                    return (e[t.id] = t), e;
                  }, {}));
                var i = !1,
                  r = "";
                this.resourcesStatus.forEach(function (e) {
                  e.balance.lessThan(0) &&
                    e.balance.add(e.amount).lessThan(0) &&
                    ((i = !0), (r = e.id));
                }),
                  i &&
                    (console.log(
                      "should re-assert: ",
                      i,
                      r,
                      e.lackEfficiencyResources
                    ),
                    this.reassertBalances()),
                  this.resourcesStatus.forEach(function (e) {
                    e.isUnstable
                      ? n.setResource(e.id, e.balance)
                      : n.addResource(e.id, e.balance.mul(t));
                  });
              }),
              (e.prototype.getResource = function (e) {
                var t;
                return (
                  (null === (t = this.cachedResources[e]) || void 0 === t
                    ? void 0
                    : t.amount) || new E.Z(0)
                );
              }),
              (e.prototype.getResourceMultiplier = function (e) {
                var t;
                return (
                  (null === (t = this.cachedResources[e]) || void 0 === t
                    ? void 0
                    : t.multiplier) || new E.Z(0)
                );
              }),
              (e.prototype.getBalance = function (e) {
                var t;
                return (
                  (null === (t = this.cachedResources[e]) || void 0 === t
                    ? void 0
                    : t.balance) || new E.Z(0)
                );
              }),
              (e.prototype.getPotentialEfficiency = function (e, t) {
                return t.lessThanOrEqualTo(0)
                  ? 1
                  : Math.min(1, -E.Z.max(0, e).div(t).toNumber());
              }),
              (e.prototype.getBatchObject = function () {
                return this.resourcesStatus.reduce(function (e, t) {
                  return (e[t.id] = t.amount), e;
                }, {});
              }),
              (e.prototype.getBatchBalanceObject = function () {
                return this.resourcesStatus.reduce(function (e, t) {
                  return (e[t.id] = t.balance), e;
                }, {});
              }),
              (e.prototype.getResourceBalance = function (e) {
                var t;
                return (
                  (null === (t = this.cachedResources[e]) || void 0 === t
                    ? void 0
                    : t.balance) || new E.Z(0)
                );
              }),
              (e.prototype.getResourceCap = function (e) {
                var t, n;
                return (
                  null === (t = this.cachedResources[e]) || void 0 === t
                    ? void 0
                    : t.hasCapacityLimit
                )
                  ? (null === (n = this.cachedResources[e]) || void 0 === n
                      ? void 0
                      : n.max) || new E.Z(0)
                  : new E.Z("1.e+30000");
              }),
              (e.prototype.getResourceCapBase = function (e) {
                var t, n;
                return (
                  null === (t = this.cachedResources[e]) || void 0 === t
                    ? void 0
                    : t.hasCapacityLimit
                )
                  ? (null === (n = this.cachedResources[e]) || void 0 === n
                      ? void 0
                      : n.capIncome) || new E.Z(0)
                  : new E.Z("1.e+30000");
              }),
              (e.prototype.getResourceCapMult = function (e) {
                var t, n;
                return (
                  null === (t = this.cachedResources[e]) || void 0 === t
                    ? void 0
                    : t.hasCapacityLimit
                )
                  ? (null === (n = this.cachedResources[e]) || void 0 === n
                      ? void 0
                      : n.capMultiplier) || new E.Z(0)
                  : new E.Z("1.e+30000");
              }),
              (e.prototype.assertEnought = function (e, t, n) {
                var i = [];
                return (
                  e.forEach(function (e) {
                    var n = "0";
                    if (
                      (t[e.id] || (t[e.id] = new E.Z(0)),
                      e.amount &&
                        e.amount.greaterThan(0) &&
                        t[e.id].greaterThan(0))
                    ) {
                      var r = 100 * t[e.id].div(e.amount).toNumber();
                      r > 100 && (r = 100), (n = r.toPrecision(3));
                    }
                    e.amount.greaterThan(0) &&
                      i.push({
                        id: e.id,
                        name: e.name,
                        amount: ee(e.amount),
                        percentage: n,
                        maxAmount: ee(e.max),
                        isAvailable: e.max.greaterThanOrEqualTo(1),
                        eta: T(e.eta),
                        percentageOf: e.percentageOf,
                      });
                  }),
                  i
                );
              }),
              (e.prototype.exportData = function () {
                return this.resourcesStatus.map(function (e) {
                  return { id: e.id, amount: e.amount.toPrecision(18) };
                });
              }),
              (e.prototype.importData = function (e) {
                this.resourcesStatus =
                  (null == e
                    ? void 0
                    : e.map(function (e) {
                        var t,
                          n = y.find(function (t) {
                            return t.id === e.id;
                          });
                        if (!n) throw new Error("Invalid resource");
                        return {
                          id: e.id,
                          amount: N(e.amount) ? new E.Z(e.amount) : new E.Z(0),
                          balance: new E.Z(0),
                          hasCapacityLimit: n.hasCapacityLimit,
                          max: new E.Z(0),
                          potentialEfficiency: 1,
                          income: new E.Z(0),
                          multiplier: new E.Z(1),
                          consumption: new E.Z(0),
                          isUnstable:
                            null !== (t = n.isUnstable) && void 0 !== t && t,
                          capIncome: new E.Z(0),
                          capMultiplier: new E.Z(1),
                        };
                      })) || [];
              }),
              (e.prototype.dataToUI = function () {
                var e = this;
                return {
                  resources: y.map(function (t) {
                    var n,
                      i,
                      r,
                      o,
                      a = e.resourcesStatus.find(function (e) {
                        return e.id === t.id;
                      });
                    return {
                      id: t.id,
                      name: t.name,
                      showOnSidebar:
                        null !== (n = t.isShownInPanel) && void 0 !== n && n,
                      amount: ee((null == a ? void 0 : a.amount) || new E.Z(0)),
                      balance: ee(
                        (null == a ? void 0 : a.balance) || new E.Z(0)
                      ),
                      isUnlocked: t.unlockCondition(Zl),
                      max: ee((null == a ? void 0 : a.max) || new E.Z(0)),
                      toFullPercentage: (a && a.max.greaterThan(0)
                        ? 100 * a.amount.div(a.max).toNumber()
                        : 0
                      ).toPrecision(3),
                      hasMaxLimit: t.hasCapacityLimit,
                      breakdown: e.cachedBreakdown[t.id],
                      breakdownCollapsed: e.cachedShortenedBreakdown[t.id],
                      toFullTime:
                        (null == a ? void 0 : a.max) &&
                        (null == a ? void 0 : a.balance.greaterThan(0))
                          ? T(a.max.sub(a.amount).div(a.balance).toNumber())
                          : "",
                      toEmptyTime:
                        a && (null == a ? void 0 : a.balance.lessThan(0))
                          ? T(
                              -(null == a ? void 0 : a.amount)
                                .div(null == a ? void 0 : a.balance)
                                .toNumber()
                            )
                          : "",
                      isSecondary:
                        null !== (i = t.isCraftable) && void 0 !== i && i,
                      isCraftable:
                        null !== (r = t.isCraftable) && void 0 !== r && r,
                      isHidden: null !== (o = t.isHidden) && void 0 !== o && o,
                      isNegative:
                        ((null == a ? void 0 : a.balance) || 0) < 0 ||
                        (e.getResourceEfficiency(t.id) || 0) < 1,
                      isPositive: ((null == a ? void 0 : a.balance) || 0) > 0,
                      isCapped:
                        !!a &&
                        a.max.greaterThan(0) &&
                        a.max.lessThanOrEqualTo(
                          a.amount.plus(a.balance.mul(2 * Zl.dT))
                        ),
                    };
                  }),
                };
              }),
              (e.prototype.reset = function (e) {
                void 0 === e && (e = !0),
                  (this.resourcesStatus = e
                    ? this.resourcesStatus.filter(function (e) {
                        var t;
                        return !!(null ===
                          (t = y.find(function (t) {
                            return t.id === e.id;
                          })) || void 0 === t
                          ? void 0
                          : t.isCraftable);
                      })
                    : []);
              }),
              (e.lackEfficiencyResources = {}),
              (e.lackEfficiencyResourcesCached = {}),
              e
            );
          })(),
          ae = oe.getInstance();
        !(function (e) {
          (e[(e.POLYNOMIAL = 0)] = "POLYNOMIAL"),
            (e[(e.EXPONENTIAL = 1)] = "EXPONENTIAL"),
            (e[(e.LINEAR = 2)] = "LINEAR");
        })(O || (O = {}));
        var ue,
          se = [
            {
              id: "manacap",
              name: "Mana Cap",
              description:
                "Expand your magic abilities by learning this rune. Mana capacity will be slightly increased.",
              unlockCondition: function (e) {
                return !0;
              },
              getCap:
                ((S = {}),
                (S[i.MANA] = function (e) {
                  return { A: new E.Z(0.1), B: new E.Z(0), type: O.LINEAR };
                }),
                S),
              getCost:
                ((M = {}),
                (M[i.MANA] = function (e) {
                  return { A: new E.Z(0), B: new E.Z(1), type: O.LINEAR };
                }),
                M),
              levelRequirement: new E.Z(1),
            },
            {
              id: "willpower",
              name: "Willpower",
              description:
                "Rise your willpower attribute, improving mana generation rate",
              unlockCondition: function (e) {
                return e.resources
                  .getResourceCap(i.MANA)
                  .greaterThanOrEqualTo(2);
              },
              getAttribute:
                ((P = {}),
                (P[c.WILLPOWER] = function (e) {
                  return { A: new E.Z(0.1), B: new E.Z(0), type: O.LINEAR };
                }),
                P),
              getCost:
                ((Z = {}),
                (Z[i.MANA] = function (e) {
                  return { A: new E.Z(0), B: new E.Z(2), type: O.LINEAR };
                }),
                Z),
              levelRequirement: new E.Z(1),
            },
            {
              id: "intellect",
              name: "Intellect",
              description:
                "Rise your intellect attribute, improving skill learning speed",
              unlockCondition: function (e) {
                return e.resources
                  .getResourceCap(i.MANA)
                  .greaterThanOrEqualTo(4);
              },
              getAttribute:
                ((_ = {}),
                (_[c.RUNE_READING] = function (e) {
                  return { A: new E.Z(0.1), B: new E.Z(0), type: O.LINEAR };
                }),
                _),
              getCost:
                ((G = {}),
                (G[i.MANA] = function (e) {
                  return { A: new E.Z(0), B: new E.Z(2), type: O.LINEAR };
                }),
                G),
              levelRequirement: new E.Z(1),
            },
            {
              id: "knowledge-rune",
              name: "Knowledge Rune",
              description: "Increase knowledge generation",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(o.KNOWLEDGE) > 0;
              },
              getGain:
                ((D = {}),
                (D[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(0.003), B: new E.Z(0), type: O.LINEAR };
                }),
                D),
              getCost:
                ((k = {}),
                (k[i.MANA] = function (e) {
                  return { A: new E.Z(0), B: new E.Z(10), type: O.LINEAR };
                }),
                k),
              levelRequirement: new E.Z(5),
            },
            {
              id: "manarate",
              name: "Mana Rate",
              description: "Improve your mana gain",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(o.EXPAND_MANA) > 0
                );
              },
              getMultiplier:
                ((B = {}),
                (B[i.MANA] = function (e) {
                  return { A: new E.Z(0.02), B: new E.Z(1), type: O.LINEAR };
                }),
                B),
              getCost:
                ((U = {}),
                (U[i.MANA] = function (e) {
                  return { A: new E.Z(0), B: new E.Z(5), type: O.LINEAR };
                }),
                (U[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(0), B: new E.Z(1), type: O.LINEAR };
                }),
                U),
              levelRequirement: new E.Z(25),
            },
            {
              id: "rune_master",
              name: "Rune Master",
              description: "Reduce other runes learning xp cost",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(o.RUNE_MASTER) > 0
                );
              },
              getCost:
                ((x = {}),
                (x[i.MANA] = function (e) {
                  return { A: new E.Z(0), B: new E.Z(50), type: O.LINEAR };
                }),
                (x[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(0), B: new E.Z(10), type: O.LINEAR };
                }),
                x),
              getAttribute:
                ((H = {}),
                (H[c.RUNE_MASTERY] = function (e) {
                  return { A: new E.Z(0.2), B: new E.Z(0), type: O.LINEAR };
                }),
                H),
              levelRequirement: new E.Z(2e3),
            },
            {
              id: "rune_memory",
              name: "Memory Rune",
              description: "Increase mana and knowledge caps",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(o.MEMORY_RUNE) > 0
                );
              },
              getCapMultiplier:
                ((W = {}),
                (W[i.MANA] = function (e) {
                  return { A: new E.Z(0.02), B: new E.Z(1), type: O.LINEAR };
                }),
                (W[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(0.02), B: new E.Z(1), type: O.LINEAR };
                }),
                W),
              getCost:
                ((Y = {}),
                (Y[i.MANA] = function (e) {
                  return { A: new E.Z(0), B: new E.Z(20), type: O.LINEAR };
                }),
                (Y[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(0), B: new E.Z(2), type: O.LINEAR };
                }),
                Y),
              levelRequirement: new E.Z(500),
            },
            {
              id: "rune_endurance",
              name: "Endurance Rune",
              description: "Increase vitality attribute",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.ENDURANCE_RUNE) > 0
                );
              },
              getAttributeMultiplier:
                ((q = {}),
                (q[c.VITALITY] = function (e) {
                  return { A: new E.Z(0.005), B: new E.Z(1), type: O.LINEAR };
                }),
                q),
              getCost:
                ((X = {}),
                (X[i.MANA] = function (e) {
                  return { A: new E.Z(0), B: new E.Z(2500), type: O.LINEAR };
                }),
                (X[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(0), B: new E.Z(5), type: O.LINEAR };
                }),
                X),
              levelRequirement: new E.Z(1e7),
            },
            {
              id: "muscle",
              name: "Muscle Rune",
              description: "Increase strength attribute",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.MUSCLE_RUNE) > 0
                );
              },
              getAttributeMultiplier:
                ((K = {}),
                (K[c.STRENGTH] = function (e) {
                  return { A: new E.Z(0.005), B: new E.Z(1), type: O.LINEAR };
                }),
                K),
              getCost:
                ((F = {}),
                (F[i.MANA] = function (e) {
                  return { A: new E.Z(0), B: new E.Z(15e3), type: O.LINEAR };
                }),
                (F[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(0), B: new E.Z(125), type: O.LINEAR };
                }),
                F),
              levelRequirement: new E.Z(2e7),
            },
            {
              id: "agility",
              name: "Agility Rune",
              description:
                "Increase agility attribute, which increase maximum speed of actions performance",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.AGILITY_RUNE) > 0
                );
              },
              getAttributeMultiplier:
                ((j = {}),
                (j[c.AGILITY] = function (e) {
                  return { A: new E.Z(0.002), B: new E.Z(1), type: O.LINEAR };
                }),
                j),
              getCost:
                ((V = {}),
                (V[i.MANA] = function (e) {
                  return { A: new E.Z(0), B: new E.Z(4e6), type: O.LINEAR };
                }),
                (V[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(0), B: new E.Z(5e4), type: O.LINEAR };
                }),
                V),
              levelRequirement: new E.Z(2e12),
            },
            {
              id: "spark_cap",
              name: "Spark Holding Rune",
              description: "Increase spark capacity",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.SPARK_CONTAINER) > 0
                );
              },
              getCapMultiplier:
                ((z = {}),
                (z[i.SPARK] = function (e) {
                  return { A: new E.Z(0.005), B: new E.Z(1), type: O.LINEAR };
                }),
                z),
              getCost:
                ((Q = {}),
                (Q[i.MANA] = function (e) {
                  return { A: new E.Z(0), B: new E.Z("4.e+7"), type: O.LINEAR };
                }),
                (Q[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(0), B: new E.Z("4.e+8"), type: O.LINEAR };
                }),
                Q),
              levelRequirement: new E.Z("5.e+30"),
            },
            {
              id: "elven_rune",
              name: "Elven Rune",
              description: "Increase spellbinding attribute",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.ELVEN_RUNE) > 0;
              },
              getAttributeMultiplier:
                ((J = {}),
                (J[c.MAGIC_KNOWLEDGE] = function (e) {
                  return { A: new E.Z(0.005), B: new E.Z(1), type: O.LINEAR };
                }),
                J),
              getCost:
                (($ = {}),
                ($[i.MANA] = function (e) {
                  return {
                    A: new E.Z(0),
                    B: new E.Z("4.e+11"),
                    type: O.LINEAR,
                  };
                }),
                ($[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(0),
                    B: new E.Z("5.e+12"),
                    type: O.LINEAR,
                  };
                }),
                $),
              levelRequirement: new E.Z("5.e+40"),
            },
          ],
          ce = [
            {
              id: c.RUNE_READING,
              name: "Intellect",
              minimum: 0,
              unlockCondition: function (e) {
                return !0;
              },
              description: "Determines how quickly you are learning runes",
            },
            {
              id: c.WILLPOWER,
              name: "Will Power",
              minimum: 0,
              unlockCondition: function (e) {
                return !0;
              },
              description: "Increase mana re-generation speed",
            },
            {
              id: c.RUNE_MASTERY,
              name: "Rune Mastery",
              minimum: 0,
              unlockCondition: function (e) {
                return !0;
              },
              description: "Decrease rune learning cost",
            },
            {
              id: c.STRENGTH,
              name: "Strength",
              minimum: 0,
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(o.TICKET_OUT) > 0 ||
                  e.city.actions.isUnlocked
                );
              },
              description: "Increase physical activities efficiency",
            },
            {
              id: c.VITALITY,
              name: "Vitality",
              minimum: 0,
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(o.TICKET_OUT) > 0 ||
                  e.city.actions.isUnlocked
                );
              },
              description: "Increase endurance activities efficiency",
            },
            {
              id: c.AGILITY,
              name: "Agility",
              minimum: 0,
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.AGILITY_RUNE) > 0 ||
                  e.personage.attributes.getAttribute(c.AGILITY).greaterThan(1)
                );
              },
              description: "Increase maximum speed of your actions",
            },
            {
              id: c.MAGIC_KNOWLEDGE,
              name: "Spellbinding",
              minimum: 0,
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.ILLUSION_SPELLS) >
                    0 ||
                  e.personage.attributes
                    .getAttribute(c.MAGIC_KNOWLEDGE)
                    .greaterThan(1)
                );
              },
              description: "Increase general spell efficiency",
            },
            {
              id: c.REST_EFFICIENCY,
              name: "Rest Efficiency",
              minimum: 0,
              unlockCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.REST_EFFICIENCY)
                  .greaterThan(1);
              },
              description: "Increase rest efficiency",
            },
            {
              id: c.CONJURATION_LORE,
              name: "Conjuration Lore",
              minimum: 0,
              unlockCondition: function (e) {
                return (
                  e.personage.attributes
                    .getAttribute(c.CONJURATION_LORE)
                    .greaterThan(1) ||
                  e.city.academyUpgrades.getUpgradeLevel(a.CONJURATION_STUDY) >
                    0
                );
              },
              description: "Increase conjuration spells speed efficiency",
            },
            {
              id: c.STAMINA,
              name: "Stamina",
              minimum: 0,
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.BATTLE_MASTERY) > 0
                );
              },
              description: "Increase your fighting efficiency",
            },
          ],
          le = function (e, t) {
            void 0 === t && (t = !1);
            var n = y.find(function (t) {
              return t.id === e;
            });
            if (n) return n.unlockCondition(Zl) || t ? n.name : "???";
            var i = ce.find(function (t) {
              return t.id === e;
            });
            return i ? (i.unlockCondition(Zl) || t ? i.name : "???") : e;
          },
          de = function () {
            return (
              (de =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, r) &&
                        (e[r] = t[r]);
                  return e;
                }),
              de.apply(this, arguments)
            );
          },
          pe = (function () {
            function e() {}
            return (
              (e.calculate = function (t, n, i) {
                var r = n(t);
                return e.calculateFormula(r, i);
              }),
              (e.calculateBatch = function (t, n, i, r) {
                r || (r = new E.Z(1));
                var o = n(t);
                return e.calculateFormulaBatch(o, i, r);
              }),
              (e.calculateFormula = function (t, n) {
                switch (t.type) {
                  case O.EXPONENTIAL:
                    return e.calculateExponential(t, n);
                  case O.POLYNOMIAL:
                    return e.calculatePolynomial(t, n);
                  case O.LINEAR:
                    return e.calculateLinear(t, n);
                  default:
                    return new E.Z(0);
                }
              }),
              (e.calculateExponential = function (e, t) {
                return e.A.mul(w(e.B, t));
              }),
              (e.calculatePolynomial = function (e, t) {
                return e.A.mul(w(t, e.B));
              }),
              (e.calculateLinear = function (e, t) {
                return e.B.plus(e.A.mul(t));
              }),
              (e.calculateFormulaBatch = function (t, n, i) {
                switch (t.type) {
                  case O.EXPONENTIAL:
                    return e.calculateExponentialBatch(t, n, i);
                  case O.POLYNOMIAL:
                    return e.calculatePolynomialBatch(t, n, i);
                  case O.LINEAR:
                    return e.calculateLinearBatch(t, n, i);
                  default:
                    return new E.Z(0);
                }
              }),
              (e.calculateExponentialBatch = function (e, t, n) {
                return e.B.equals(1)
                  ? e.A.mul(n)
                  : e.A.mul(w(e.B, t).mul(w(e.B, n).sub(1)).div(e.B.sub(1)));
              }),
              (e.calculatePolynomialBatch = function (e, t, n) {
                return (
                  console.error("Polynomial batch is not implemented"),
                  new E.Z(0)
                );
              }),
              (e.calculateLinearBatch = function (e, t, n) {
                return n
                  .mul(e.B.plus(e.A.mul(t)))
                  .plus(e.A.mul(w(n, 2).mul(0.5)))
                  .sub(e.A.div(2));
              }),
              (e.calculateDX = function (t, n, i, r) {
                var o = n(t);
                return e.calculateDXByFormula(o, i, r);
              }),
              (e.calculateDXByFormula = function (t, n, i) {
                switch (t.type) {
                  case O.EXPONENTIAL:
                    return e.calculateDXExponential(t, n, i);
                  case O.POLYNOMIAL:
                    return e.calculateDXPolynomial(t, n, i);
                  case O.LINEAR:
                    return e.calculateDXLinear(t, n, i);
                  default:
                    return new E.Z(0);
                }
              }),
              (e.calculateDXExponential = function (e, t, n) {
                return e.A.equals(0)
                  ? new E.Z("1.e+30000")
                  : e.B.equals(1)
                  ? n.div(e.A)
                  : n
                  ? v(
                      n
                        .mul(e.B.sub(1))
                        .div(e.A.mul(w(e.B, t)))
                        .plus(1),
                      e.B
                    )
                  : new E.Z(0);
              }),
              (e.calculateDXPolynomial = function (e, t, n) {
                return (
                  console.error("Polynomial dX is not implemented"), new E.Z(0)
                );
              }),
              (e.calculateDXLinear = function (e, t, n) {
                var i = e.A,
                  r = e.B,
                  o = t,
                  a = n;
                if (i.equals(0)) return n.div(r).floor();
                var u = i.mul(2).mul(o).plus(r.mul(2)).minus(i),
                  s = a.mul(2),
                  c = u.pow(2).plus(i.mul(4).mul(s));
                if (c.lessThan(0)) return new E.Z(0);
                var l = u.neg().plus(c.sqrt()).div(i.mul(2)),
                  d = u.neg().minus(c.sqrt()).div(i.mul(2)),
                  p = E.Z.min(l.floor(), d.floor());
                return p.greaterThanOrEqualTo(0) ? p : new E.Z(0);
              }),
              (e.calcBatch = function (t, n, i, r, o, a) {
                void 0 === r && (r = new E.Z(1)),
                  void 0 === o && (o = !1),
                  void 0 === a && (a = 1);
                var u = [];
                return (
                  Object.entries(t).forEach(function (t) {
                    var s = t[0],
                      c = t[1];
                    u.push({
                      id: s,
                      name: le(s, o),
                      amount: e.calculateBatch(n, c, i, r).mul(a),
                    });
                  }),
                  u
                );
              }),
              (e.calcDXBatch = function (t, n, i, r) {
                var o = {};
                return (
                  Object.entries(t).forEach(function (t) {
                    var a = t[0],
                      u = t[1];
                    o[a] = e.calculateDX(n, u, i, r[a]);
                  }),
                  o
                );
              }),
              (e.calcBatchAll = function (t, n, i, r, o, a) {
                void 0 === o && (o = new E.Z(1)),
                  void 0 === a && (a = new E.Z(1));
                var u = [];
                return (
                  Object.entries(t).forEach(function (t) {
                    var s = t[0],
                      c = t[1];
                    r[s] || (r[s] = new E.Z(0));
                    var l = e.calculateDX(n, c, i, r[s]).div(a),
                      d = e.calculateBatch(n, c, i, o).mul(a),
                      p = 0,
                      f = !1;
                    if (l.lessThan(1)) {
                      var g = n.resources.getResourceCap(s);
                      g.lessThan(d) && (f = !0),
                        (p =
                          g.lessThan(d) ||
                          (n.resources.getResourceBalance(s).lessThan(0) &&
                            d.sub(r[s] || 0).greaterThan(0))
                            ? 1e300
                            : d
                                .sub(r[s] || 0)
                                .div(
                                  n.resources.getResourceBalance(s) || 1e-300
                                )
                                .toNumber());
                    }
                    u.push({
                      id: s,
                      name: le(s),
                      amount: d,
                      max: l,
                      eta: p,
                      isBlocked: f,
                      percentageOf: d.lessThan(r[s])
                        ? d.div(r[s]).toNumber()
                        : void 0,
                    });
                  }),
                  u
                );
              }),
              (e.calcSum = function (e, t, n) {
                void 0 === t && (t = []), void 0 === n && (n = []);
                var i = (function (e, t, n) {
                  if (n || 2 === arguments.length)
                    for (var i, r = 0, o = t.length; r < o; r++)
                      (!i && r in t) ||
                        (i || (i = Array.prototype.slice.call(t, 0, r)),
                        (i[r] = t[r]));
                  return e.concat(i || Array.prototype.slice.call(t));
                })([], t, !0);
                n.forEach(function (e) {
                  var t = i.findIndex(function (t) {
                    return t.id === e.id;
                  });
                  t > -1
                    ? (i[t].amount = i[t].amount.add(e.amount))
                    : i.push(de({}, e));
                });
                var r = e.resources.getBatchObject();
                return (
                  i.forEach(function (t, n) {
                    var o = e.resources.getResourceCap(t.id),
                      a = !1,
                      u = 0;
                    o && o.lessThan(t.amount) && (a = !0),
                      (u =
                        (o && o.lessThan(t.amount)) ||
                        (e.resources.getResourceBalance(t.id).lessThan(0) &&
                          t.amount.sub(r[t.id] || 0).greaterThan(0))
                          ? 1e300
                          : t.amount
                              .sub(r[t.id] || 0)
                              .div(
                                e.resources.getResourceBalance(t.id) || 1e-300
                              )
                              .toNumber()),
                      (i[n].isBlocked = a),
                      (i[n].eta = u),
                      (i[n].max = t.amount.sub(r[t.id] || 0).greaterThan(0)
                        ? (r[t.id] || new E.Z(0)).div(t.amount.plus(1e-50))
                        : new E.Z(1)),
                      (i[n].percentageOf = t.amount.lessThan(r[t.id])
                        ? t.amount.div(r[t.id]).toNumber()
                        : void 0);
                  }),
                  i
                );
              }),
              (e.getValue = function (e, t) {
                var n = [];
                return (
                  Object.entries(e).forEach(function (e) {
                    var i = e[0],
                      r = e[1];
                    n.push({ id: i, name: le(i), amount: r(t) });
                  }),
                  n
                );
              }),
              e
            );
          })();
        !(function (e) {
          (e.SCHOLAR = "Scholar"),
            (e.PHYSICAL = "Physical"),
            (e.MENTAL = "Mental"),
            (e.MAGICAL = "Magical");
        })(ue || (ue = {}));
        var fe,
          ge,
          me,
          he,
          ye,
          Ee,
          Ae,
          ve,
          we,
          be,
          Ie,
          Ce,
          Ne,
          Te,
          Re,
          Le,
          Oe,
          Se,
          Me,
          Pe,
          Ze,
          _e,
          Ge,
          De,
          ke,
          Be,
          Ue,
          xe,
          He,
          We,
          Ye,
          qe,
          Xe,
          Ke,
          Fe,
          je,
          Ve,
          ze,
          Qe,
          Je,
          $e,
          et,
          tt,
          nt,
          it,
          rt,
          ot,
          at,
          ut,
          st,
          ct,
          lt,
          dt,
          pt,
          ft,
          gt,
          mt,
          ht,
          yt,
          Et,
          At,
          vt,
          wt,
          bt,
          It,
          Ct,
          Nt,
          Tt,
          Rt,
          Lt,
          Ot,
          St,
          Mt,
          Pt,
          Zt,
          _t,
          Gt,
          Dt,
          kt,
          Bt,
          Ut,
          xt,
          Ht,
          Wt,
          Yt,
          qt,
          Xt,
          Kt,
          Ft,
          jt,
          Vt,
          zt,
          Qt,
          Jt,
          $t,
          en,
          tn,
          nn,
          rn,
          on,
          an,
          un,
          sn,
          cn,
          ln,
          dn,
          pn,
          fn,
          gn,
          mn,
          hn,
          yn,
          En,
          An,
          vn,
          wn,
          bn,
          In,
          Cn,
          Nn,
          Tn,
          Rn,
          Ln,
          On,
          Sn,
          Mn,
          Pn,
          Zn,
          _n,
          Gn,
          Dn,
          kn,
          Bn,
          Un,
          xn,
          Hn,
          Wn,
          Yn,
          qn,
          Xn,
          Kn,
          Fn,
          jn,
          Vn,
          zn,
          Qn,
          Jn,
          $n,
          ei,
          ti,
          ni,
          ii,
          ri,
          oi,
          ai,
          ui,
          si,
          ci,
          li,
          di,
          pi,
          fi,
          gi,
          mi,
          hi,
          yi,
          Ei,
          Ai,
          vi,
          wi,
          bi,
          Ii =
            ((fe = function (e, t) {
              return (
                (fe =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                fe(e, t)
              );
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null"
                );
              function n() {
                this.constructor = e;
              }
              fe(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            }),
          Ci = function () {
            return (
              (Ci =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, r) &&
                        (e[r] = t[r]);
                  return e;
                }),
              Ci.apply(this, arguments)
            );
          },
          Ni = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.runes = []),
                (t.cachedRunes = []),
                (t.dbCache = {}),
                (t.isAutomated = !1),
                t.workDispatcher.on("[runes] toggle active", function (e) {
                  console.log("do learn", e),
                    t.toggleLearn(e.id),
                    t.regenerateCache();
                }),
                t.workDispatcher.on("[runes] sacrifice", function (e) {
                  console.log("do sacrifice", e), t.doSacrifice(e.id);
                }),
                t.workDispatcher.on("[runes] toggle automation", function (e) {
                  console.log("do automate", e),
                    (t.isAutomated = e && t.isAutomationUnlocked());
                }),
                (t.dbCache = se.reduce(function (e, t) {
                  var n;
                  return Ci(Ci({}, e), (((n = {})[t.id] = t), n));
                }, {})),
                t
              );
            }
            return (
              Ii(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.regenerateCache = function () {
                var e = this;
                this.cachedRunes = se.map(function (t) {
                  return e.processToUI(t);
                });
              }),
              (t.prototype.importData = function (e) {
                var t, n;
                (this.runes =
                  (null === (t = (null == e ? void 0 : e.runes) || e) ||
                  void 0 === t
                    ? void 0
                    : t.map(function (e) {
                        return Ci(Ci({}, e), {
                          level: new E.Z(e.level),
                          xp: new E.Z(e.xp),
                          xpMult: new E.Z(e.xpMult || 1),
                          numSacrificed: new E.Z(e.numSacrificed || 0),
                        });
                      })) || []),
                  (this.isAutomated =
                    null !== (n = null == e ? void 0 : e.isAutomated) &&
                    void 0 !== n &&
                    n);
              }),
              (t.prototype.exportData = function () {
                return {
                  runes: this.runes.map(function (e) {
                    return Ci(Ci({}, e), {
                      level: e.level.toPrecision(18),
                      xp: e.xp.toPrecision(18),
                      xpMult: e.xpMult.toPrecision(18),
                      numSacrificed: e.numSacrificed.toPrecision(18),
                    });
                  }),
                  isAutomated: this.isAutomated,
                };
              }),
              (t.prototype.dataFromCache = function () {
                var e = this;
                return this.cachedRunes
                  .filter(function (e) {
                    return e.isUnlocked;
                  })
                  .map(function (t) {
                    var n = e.runes.find(function (e) {
                      return t.id === e.id;
                    });
                    n ||
                      ((n = {
                        id: t.id,
                        level: new E.Z(0),
                        xp: new E.Z(0),
                        isActive: !1,
                        isLearning: !1,
                        xpMult: new E.Z(1),
                        numSacrificed: new E.Z(0),
                      }),
                      e.runes.push(n));
                    var i = e.dbCache[t.id],
                      r = e
                        .getLearnSpeed()
                        .mul(e.getSacrificedBonus(n.numSacrificed))
                        .mul(n.xpMult),
                      o = e.getMaxXp(i.levelRequirement, n),
                      a = o.sub(n.xp).div(r),
                      u = i.getCost
                        ? pe.calcBatchAll(
                            i.getCost,
                            Pl.getInstance(),
                            n.level,
                            Pl.getInstance().resources.getBatchObject(),
                            new E.Z(1),
                            Zl.learning.wizardOrb.getManaMult()
                          )
                        : [],
                      s = u.reduce(function (e, t) {
                        return E.Z.min(e, t.max.floor());
                      }, new E.Z("1.e+30000")),
                      c = u.reduce(function (e, t) {
                        return e && !t.isBlocked;
                      }, !0),
                      l = u.reduce(function (e, t) {
                        return Math.max(e, t.eta);
                      }, 0);
                    return Ci(Ci({}, t), {
                      etaNum: l,
                      isAvailable: s.greaterThanOrEqualTo(1),
                      cost: Pl.getInstance().resources.assertEnought(
                        u,
                        Pl.getInstance().resources.getBatchObject(),
                        Pl.getInstance().resources.getBatchBalanceObject()
                      ),
                      xp: ee(n.xp),
                      maxXp: ee(o),
                      learnEta: L(a),
                      progress: Math.min(
                        100,
                        n.xp.mul(100).div(o).toNumber()
                      ).toPrecision(3),
                      learnSpeed: ee(r),
                      isBlocked: !c || !i.unlockCondition(Zl),
                    });
                  });
              }),
              (t.prototype.dataToUI = function () {
                return {
                  runes: this.dataFromCache(),
                  maxRunes: this.getMaxSlots(),
                  usedSlots: this.getRunesActive(),
                  runningPreset: Zl.learning.runePresets.getActiveName(),
                  isAutomationUnlocked: this.isAutomationUnlocked(),
                  isAutomated: this.isAutomated,
                };
              }),
              (t.prototype.getEffectiveLevel = function (e) {
                return this.getSacrificedBonusMult(e.numSacrificed).mul(
                  e.level
                );
              }),
              (t.prototype.processToUI = function (e) {
                var t = this.runes.find(function (t) {
                  return t.id === e.id;
                });
                t ||
                  ((t = {
                    id: e.id,
                    level: new E.Z(0),
                    xp: new E.Z(0),
                    isActive: !1,
                    isLearning: !1,
                    xpMult: new E.Z(1),
                    numSacrificed: new E.Z(0),
                  }),
                  this.runes.push(t));
                var n = e.getCost
                    ? pe.calcBatchAll(
                        e.getCost,
                        Pl.getInstance(),
                        t.level,
                        Pl.getInstance().resources.getBatchObject(),
                        new E.Z(1),
                        Zl.learning.wizardOrb.getManaMult()
                      )
                    : [],
                  i = e.getGain
                    ? pe.calcBatch(e.getGain, Pl.getInstance(), t.level)
                    : [],
                  r = n.reduce(function (e, t) {
                    return E.Z.min(e, t.max.floor());
                  }, new E.Z("1.e+30000")),
                  o = n.reduce(function (e, t) {
                    return e && !t.isBlocked;
                  }, !0),
                  a = n.reduce(function (e, t) {
                    return Math.max(e, t.eta);
                  }, 0),
                  u = e.unlockCondition(Zl) || t.level.greaterThan(0);
                u &&
                  t.level.lessThanOrEqualTo(0) &&
                  Zl.newNotifications.registerNotification(
                    "learning:runes:rune:".concat(e.id)
                  );
                var s = this.getSacrificedBonus(t.numSacrificed),
                  c = this.getSacrificedBonusMult(t.numSacrificed),
                  l = this.getSacrificeReward(t),
                  d = this.getLearnSpeed().mul(s).mul(t.xpMult),
                  p = this.getMaxXp(e.levelRequirement, t),
                  f = p.sub(t.xp).div(d);
                return {
                  id: e.id,
                  name: e.name,
                  description: e.description,
                  isUnlocked: u,
                  isAvailable: r.greaterThanOrEqualTo(1),
                  cost: Pl.getInstance().resources.assertEnought(
                    n,
                    Pl.getInstance().resources.getBatchObject(),
                    Pl.getInstance().resources.getBatchBalanceObject()
                  ),
                  gain: i.map(function (e) {
                    return Ci(Ci({}, e), {
                      amountValue: e.amount.toString(),
                      amount: ee(e.amount),
                    });
                  }),
                  progress: Math.min(
                    100,
                    t.xp.mul(100).div(p).toNumber()
                  ).toPrecision(3),
                  isBlocked: !o || !e.unlockCondition(Zl),
                  etaNum: a,
                  isActive: t.isActive,
                  isLearning: t.isLearning,
                  level: ie(t.level, 2),
                  xp: ee(t.xp),
                  maxXp: ee(p),
                  learnEta: L(f),
                  learnSpeed: ee(d),
                  haveSacrificeMult: t.numSacrificed.greaterThan(0),
                  isSacrificeAvailable: this.getSacrificeAvailable(t),
                  currentSacrificeMult: ee(s),
                  currentProdMult: ee(c),
                  potentialSacrificeMult: ee(this.getSacrificedBonus(l)),
                  potentialProdMult: ee(this.getSacrificedBonusMult(l)),
                };
              }),
              (t.prototype.getMaxSlots = function () {
                return (
                  1 +
                  Zl.learning.runeUpgrades.getUpgradeLevel(o.ADD_RUNIC_TABLE) +
                  Zl.learning.runeUpgrades.getUpgradeLevel(o.EXPAND_MAGIC_LIB)
                );
              }),
              (t.prototype.getRunesActive = function () {
                return this.runes.filter(function (e) {
                  return e.isActive;
                }).length;
              }),
              (t.prototype.getSacrificeAvailable = function (e) {
                return (
                  e.numSacrificed.lessThanOrEqualTo(
                    this.getSacrificeReward(e)
                  ) && e.level.greaterThanOrEqualTo(175)
                );
              }),
              (t.prototype.getSacrificeReward = function (e) {
                return e.level
                  .mul(
                    Math.pow(
                      2,
                      Zl.learning.runeUpgrades.getUpgradeLevel(
                        o.EXPANDED_SACRIFICE
                      ) +
                        Zl.learning.runeUpgrades.getUpgradeLevel(o.RUNIC_SPLASH)
                    )
                  )
                  .plus(25);
              }),
              (t.prototype.doSacrifice = function (e) {
                var t = this.runes.find(function (t) {
                  return t.id === e;
                });
                if (
                  (t ||
                    ((t = {
                      id: e,
                      level: new E.Z(0),
                      xp: new E.Z(0),
                      isActive: !1,
                      isLearning: !1,
                      xpMult: new E.Z(1),
                      numSacrificed: new E.Z(0),
                    }),
                    this.runes.push(t)),
                  this.getSacrificeAvailable(t))
                ) {
                  for (var n = 0; n < this.runes.length; n++)
                    this.runes[n].id === e &&
                      ((this.runes[n].numSacrificed = this.getSacrificeReward(
                        this.runes[n]
                      )),
                      (this.runes[n].level = new E.Z(0))),
                      Zl.city.academyUpgrades.getUpgradeLevel(
                        a.RUNE_PROTECTION
                      ) <= 0
                        ? (this.runes[n].level = new E.Z(0))
                        : (this.runes[n].level = E.Z.min(
                            this.runes[n].level,
                            Math.pow(
                              2 *
                                Zl.city.academyUpgrades.getUpgradeLevel(
                                  a.RUNE_PROTECTION
                                ),
                              2
                            )
                          )),
                      (this.runes[n].isActive = !1),
                      (this.runes[n].isLearning = !1),
                      (this.runes[n].xp = new E.Z(0)),
                      (this.runes[n].xpMult = new E.Z(1));
                  (Zl.statistics.stats.fastestRuneTime = Zl.statistics.stats
                    .numRuneResets
                    ? Math.min(
                        Zl.statistics.stats.fastestRuneTime,
                        Zl.statistics.stats.timeThisRune
                      )
                    : Zl.statistics.stats.timeThisRune),
                    (Zl.statistics.stats.timeThisRune = 0),
                    Zl.statistics.stats.numRuneResets++,
                    Zl.learning.wizardOrb.reset(),
                    Zl.learning.runeUpgrades.reset();
                  var r = Zl.resources.getResource(i.COINS);
                  Zl.resources.reset(),
                    Zl.newNotifications.resetNotifications(),
                    Zl.learning.runePresets.runDefault(),
                    Zl.regenerateCache(),
                    Zl.resources.reassertBalances(),
                    Zl.city.academyUpgrades.getUpgradeLevel(
                      a.GOLD_PROTECTION
                    ) && Zl.resources.setResource(i.COINS, r);
                }
              }),
              (t.prototype.applyBatch = function (e) {
                var t = this,
                  n = e
                    .filter(function (e) {
                      var t;
                      return null ===
                        (t = se.find(function (t) {
                          return t.id === e;
                        })) || void 0 === t
                        ? void 0
                        : t.unlockCondition(Zl);
                    })
                    .splice(0, this.getMaxSlots());
                this.runes.forEach(function (e, i) {
                  t.runes[i].isActive = n.includes(e.id);
                });
              }),
              (t.prototype.toggleLearn = function (e) {
                if (
                  se.find(function (t) {
                    return t.id === e;
                  })
                ) {
                  var t = this.runes.findIndex(function (t) {
                    return t.id === e;
                  });
                  if (
                    (t < 0 &&
                      ((t = this.runes.length),
                      this.runes.push({
                        id: e,
                        level: new E.Z(0),
                        xp: new E.Z(0),
                        isActive: !1,
                        isLearning: !1,
                        xpMult: new E.Z(1),
                        numSacrificed: new E.Z(0),
                      })),
                    this.getMaxSlots() <= this.getRunesActive())
                  )
                    if (this.runes[t].isActive) this.runes[t].isActive = !1;
                    else {
                      var n = this.runes.findIndex(function (e) {
                        return e.isActive;
                      });
                      if (n < 0) return;
                      (this.runes[n].isActive = !1),
                        (this.runes[t].isActive = !0);
                    }
                  else this.runes[t].isActive = !this.runes[t].isActive;
                }
              }),
              (t.prototype.getRuneLevel = function (e) {
                var t;
                return (
                  (null ===
                    (t = this.runes.find(function (t) {
                      return t.id === e;
                    })) || void 0 === t
                    ? void 0
                    : t.level) || new E.Z(0)
                );
              }),
              (t.prototype.getRuneSacrificeLevel = function (e) {
                var t;
                return (
                  (null ===
                    (t = this.runes.find(function (t) {
                      return t.id === e;
                    })) || void 0 === t
                    ? void 0
                    : t.numSacrificed) || new E.Z(0)
                );
              }),
              (t.prototype.getRuneMasteryLogarithmic = function () {
                return b(Zl.personage.attributes.getAttribute(c.RUNE_MASTERY));
              }),
              (t.prototype.getMaxXpMulLog = function (e, t) {
                return t.sub(this.getRuneMasteryLogarithmic());
              }),
              (t.prototype.getMaxRunesPerXpV3 = function (e, t, n) {
                if (t.equals(0) || n.equals(0)) return new E.Z(0);
                var i = b(this.getExpGrowth().plus(1)),
                  r = this.getRuneMasteryLogarithmic(),
                  o = b(t).sub(r).add(e.level.mul(i)),
                  a = b(n);
                if (a.lessThan(o)) return new E.Z(0);
                var u = a.sub(o).div(i),
                  s = u.isNegative() ? new E.Z(0) : u;
                return s.lessThan(100)
                  ? E.Z.max(1, s.floor())
                  : E.Z.min(
                      s.mul(0.75).floor(),
                      e.level.plus(10).mul(0.1).floor()
                    );
              }),
              (t.prototype.getMaxXp = function (e, t) {
                var n = this.getMaxXpMulLog(t, b(e)).add(
                  b(this.getExpGrowth().plus(1)).mul(t.level)
                );
                return n.lessThanOrEqualTo("-1.e+12")
                  ? new E.Z("1.e-300000")
                  : w(new E.Z(10), n);
              }),
              (t.prototype.getLearnSpeed = function () {
                return Zl.personage.attributes
                  .getAttribute(c.RUNE_READING)
                  .mul(
                    Math.pow(
                      1.5,
                      Zl.learning.runeUpgrades.getUpgradeLevel(o.RUNIC_MEMORY)
                    )
                  )
                  .mul(
                    Math.pow(
                      2,
                      Zl.learning.runeUpgrades.getUpgradeLevel(o.RUNIC_MEMORY2)
                    )
                  )
                  .mul(
                    Math.pow(
                      3,
                      Zl.learning.runeUpgrades.getUpgradeLevel(
                        o.RUNIC_TABLE_ENHANCEMENT
                      )
                    )
                  );
              }),
              (t.prototype.getExpGrowth = function () {
                return new E.Z(0.04).div(
                  Zl.city.reincarnation.getBonus(ue.SCHOLAR)
                );
              }),
              (t.prototype.getSacrificedBonus = function (e) {
                return e.lessThan(100) ? new E.Z(1) : w(e.div(40), 1.4);
              }),
              (t.prototype.getSacrificedBonusMult = function (e) {
                return e.lessThan(100)
                  ? new E.Z(1)
                  : w(
                      e.div(50),
                      0.25 +
                        (Zl.achievements.getAchievementComplete(
                          "rune-mastery-rune"
                        )
                          ? 0.02
                          : 0)
                    );
              }),
              (t.prototype.rescheduleRunes = function () {
                var e = this;
                this.runes.forEach(function (t, n) {
                  t.isActive &&
                    ((e.runes[n].isLearning = !1),
                    (e.runes[n].xp = new E.Z(0)));
                });
              }),
              (t.prototype.calculateRuneLevelUpEfficiency = function (e, t) {
                var n = se.find(function (t) {
                    return t.id === e.id;
                  }),
                  i = { willpower: 4, knowledge: 3, manarate: 2 }[e.id] || 1;
                if (!n) return { maxPerCost: 0, maxPerTime: 0, efficiency: 0 };
                var r = this.getLearnSpeed().mul(
                    Zl.learning.wizardOrb
                      .getSpeedMult(t)
                      .mul(this.getSacrificedBonus(e.numSacrificed))
                  ),
                  o = this.getMaxXp(n.levelRequirement, e),
                  a = r.div(o).toNumber(),
                  u = (
                    n.getCost
                      ? pe.calcBatchAll(
                          n.getCost,
                          Pl.getInstance(),
                          e.level,
                          Pl.getInstance().resources.getBatchObject(),
                          new E.Z(1),
                          Zl.learning.wizardOrb.getManaMult(t)
                        )
                      : []
                  )
                    .reduce(function (e, t) {
                      return E.Z.min(
                        e,
                        Zl.resources
                          .getResourceBalance(t.id)
                          .mul(0.25)
                          .div(t.amount),
                        Zl.resources.getResourceCap(t.id).div(t.amount)
                      );
                    }, new E.Z("1.e+30000"))
                    .toNumber();
                return {
                  maxPerTime: a,
                  maxPerCost: u,
                  efficiency: u < a && t > 0 ? 0 : i * Math.min(u, a),
                };
              }),
              (t.prototype.selectOptimalOrbAndRunesForLeveling = function () {
                for (
                  var e = this,
                    t = 0,
                    n = [],
                    i = 0,
                    r = Zl.learning.wizardOrb.state.levelBuilt,
                    o = Zl.learning.wizardOrb.getSpeedBase();
                  r >= 0;

                ) {
                  var a = this.runes
                      .map(function (t) {
                        return Ci(
                          Ci({}, t),
                          e.calculateRuneLevelUpEfficiency(t, r)
                        );
                      })
                      .sort(function (e, t) {
                        return t.efficiency - e.efficiency;
                      }),
                    u = a.reduce(function (e, t) {
                      return Math.max(e, t.maxPerCost);
                    }, 0),
                    s = a.reduce(function (e, t) {
                      return Math.max(e, t.maxPerTime);
                    }, 0),
                    c = a.slice(0, this.getMaxSlots()),
                    l = c.reduce(function (e, t) {
                      return e + t.efficiency;
                    }, 0);
                  if (
                    (console.log(
                      "Ranks at Wizard Orb Level: "
                        .concat(r, " (maxResEff: ")
                        .concat(u, "; maxTime: ")
                        .concat(s, ")"),
                      c
                    ),
                    l > i && ((i = l), (t = r), (n = c)),
                    u < (0.1 * s) / o.toNumber())
                  ) {
                    var d = Math.floor(
                      Math.log(s / u) / Math.log(40 * o.toNumber())
                    );
                    console.log("Decreasing orbLevel by " + d),
                      (r -= Math.max(1, Math.min(d, Math.round(r / 3))));
                  } else {
                    if (s < (0.1 * u) / 4) {
                      console.log(
                        "Breaking cause nothing limited by resource any longer;"
                      );
                      break;
                    }
                    r--;
                  }
                }
                console.log("Optimal Wizard Orb Level: ".concat(t)),
                  Zl.learning.runePresets.stopPreset(),
                  Zl.learning.runes.applyBatch(
                    n.map(function (e) {
                      return e.id;
                    })
                  );
                var p = Zl.learning.wizardOrb.state.levelActive;
                (Zl.learning.wizardOrb.state.levelActive = t),
                  p !== Zl.learning.wizardOrb.state.levelActive &&
                    Zl.learning.wizardOrb.state.cancelRuneOnChange &&
                    (console.log(
                      "rescheduling: ",
                      p,
                      Zl.learning.wizardOrb.state.levelActive
                    ),
                    Zl.learning.runes.rescheduleRunes());
              }),
              (t.prototype.isAutomationUnlocked = function () {
                return (
                  Zl.city.academyUpgrades.getUpgradeLevel(a.RUNE_EXPERTISE) > 0
                );
              }),
              (t.prototype.process = function (e) {
                var t = this,
                  n = !1;
                if (
                  Zl.statistics.stats.timeThisRune % 10 <= e &&
                  this.isAutomated
                ) {
                  var i = performance.now();
                  this.selectOptimalOrbAndRunesForLeveling(),
                    console.log("Ended up in " + (performance.now() - i));
                }
                this.runes.forEach(function (i, r) {
                  if (i.isActive) {
                    var o = se.find(function (e) {
                      return e.id === i.id;
                    });
                    if (!o) throw new Error("Rune ".concat(i.id, " not found"));
                    var a = t.getMaxXp(o.levelRequirement, i),
                      u = t
                        .getLearnSpeed()
                        .mul(
                          i.xpMult
                            .mul(e)
                            .mul(t.getSacrificedBonus(i.numSacrificed))
                        );
                    if (a.lessThan(u)) {
                      t.runes[r].xpMult >
                        Zl.learning.wizardOrb.getSpeedMult() &&
                        ((t.runes[r].xpMult =
                          Zl.learning.wizardOrb.getSpeedMult()),
                        (u = t
                          .getLearnSpeed()
                          .mul(
                            i.xpMult
                              .mul(e)
                              .mul(t.getSacrificedBonus(i.numSacrificed))
                          )));
                      var s = t.getMaxRunesPerXpV3(i, o.levelRequirement, u),
                        c = (
                          o.getCost
                            ? pe.calcBatchAll(
                                o.getCost,
                                Pl.getInstance(),
                                i.level,
                                Pl.getInstance().resources.getBatchObject(),
                                new E.Z("1.e+30000"),
                                Zl.learning.wizardOrb.getManaMult()
                              )
                            : []
                        ).reduce(function (e, t) {
                          return E.Z.min(e, t.max.floor());
                        }, new E.Z("1.e+30000")),
                        l = E.Z.min(c, s);
                      if (
                        (d = o.getCost
                          ? pe.calcBatchAll(
                              o.getCost,
                              Pl.getInstance(),
                              i.level,
                              Pl.getInstance().resources.getBatchObject(),
                              l,
                              Zl.learning.wizardOrb.getManaMult()
                            )
                          : [])
                          .reduce(function (e, t) {
                            return E.Z.min(e, t.max.floor());
                          }, new E.Z("1.e+30000"))
                          .lessThan(1)
                      )
                        return;
                      return (
                        Pl.getInstance().resources.subtractResourceBatch(d),
                        (i.xp = new E.Z(0)),
                        (i.level = i.level.plus(l)),
                        void (n = !0)
                      );
                    }
                    if (i.isLearning) i.xp = i.xp.plus(u);
                    else {
                      var d;
                      if (
                        (c = (d = o.getCost
                          ? pe.calcBatchAll(
                              o.getCost,
                              Pl.getInstance(),
                              i.level,
                              Pl.getInstance().resources.getBatchObject(),
                              new E.Z(1),
                              Zl.learning.wizardOrb.getManaMult()
                            )
                          : []).reduce(function (e, t) {
                          return E.Z.min(e, t.max.floor());
                        }, new E.Z("1.e+30000"))).lessThan(1)
                      )
                        return;
                      Pl.getInstance().resources.subtractResourceBatch(d),
                        (t.runes[r].isLearning = !0),
                        (t.runes[r].xpMult =
                          Zl.learning.wizardOrb.getSpeedMult()),
                        (n = !0);
                    }
                    i.xp.greaterThanOrEqualTo(a) &&
                      ((i.xp = new E.Z(0)),
                      (i.level = i.level.plus(1)),
                      (t.runes[r].isLearning = !1),
                      (n = !0));
                  }
                }),
                  n &&
                    (Zl.resources.reassertBalances(),
                    Zl.regenerateCache(),
                    Zl.learning.runePresets.applyPreset());
              }),
              (t.prototype.getResourceBeingStored = function (e) {
                var t = this,
                  n = se.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getCap) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  i = [];
                return (
                  this.runes.forEach(function (r) {
                    var o = n.find(function (e) {
                      return e.id === r.id;
                    });
                    if (o && o.getCap) {
                      var a = pe.calculate(
                        Zl,
                        o.getCap[e],
                        t.getEffectiveLevel(r)
                      );
                      i.push({
                        label: "Rune: ".concat(o.name),
                        value: a,
                        id: "rune-".concat(o.id),
                        category: "Runes",
                      });
                    }
                  }, 0),
                  i
                );
              }),
              (t.prototype.getResourceBeingStoredMultiplier = function (e) {
                var t = this,
                  n = se.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getCapMultiplier) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  i = [];
                return (
                  this.runes.forEach(function (r) {
                    var o = n.find(function (e) {
                      return e.id === r.id;
                    });
                    if (o && o.getCapMultiplier) {
                      var a = pe.calculate(
                        Zl,
                        o.getCapMultiplier[e],
                        t.getEffectiveLevel(r)
                      );
                      a.equals(1) ||
                        i.push({
                          label: "Rune: ".concat(o.name),
                          value: a,
                          id: "rune-".concat(o.id),
                          category: "Runes",
                        });
                    }
                  }, 0),
                  i
                );
              }),
              (t.prototype.getMultiplier = function (e) {
                var t = this,
                  n = se.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getMultiplier) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  i = [];
                return (
                  this.runes.forEach(function (r) {
                    var o = n.find(function (e) {
                      return e.id === r.id;
                    });
                    if (o && o.getMultiplier) {
                      var a = pe.calculate(
                        Zl,
                        o.getMultiplier[e],
                        t.getEffectiveLevel(r)
                      );
                      a.equals(1) ||
                        i.push({
                          label: "Rune: ".concat(o.name),
                          value: a,
                          id: "rune-".concat(o.id),
                          category: "Runes",
                        });
                    }
                  }, 0),
                  i
                );
              }),
              (t.prototype.getResourceGain = function (e) {
                var t = this,
                  n = se.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getGain) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  i = [];
                return (
                  this.runes.forEach(function (r) {
                    var o = n.find(function (e) {
                      return e.id === r.id;
                    });
                    if (o && o.getGain) {
                      var a = pe.calculate(
                        Zl,
                        o.getGain[e],
                        t.getEffectiveLevel(r)
                      );
                      i.push({
                        label: "Rune: ".concat(o.name),
                        value: a,
                        id: "rune-".concat(o.id),
                        category: "Runes",
                      });
                    }
                  }, 0),
                  i
                );
              }),
              (t.prototype.getAttributeGained = function (e) {
                var t = this,
                  n = se.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getAttribute) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  i = [];
                return (
                  this.runes.forEach(function (r) {
                    var o = n.find(function (e) {
                      return e.id === r.id;
                    });
                    if (o && o.getAttribute) {
                      var a = pe.calculate(
                        Zl,
                        o.getAttribute[e],
                        t.getEffectiveLevel(r)
                      );
                      i.push({
                        label: "Rune: ".concat(o.name),
                        value: a,
                        id: "rune-".concat(o.id),
                        category: "Runes",
                      });
                    }
                  }, 0),
                  i
                );
              }),
              (t.prototype.getAttributeMultiplier = function (e) {
                var t = this,
                  n = se.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getAttributeMultiplier) ||
                    void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  i = [];
                return (
                  this.runes.forEach(function (r) {
                    var o = n.find(function (e) {
                      return e.id === r.id;
                    });
                    if (o && o.getAttributeMultiplier) {
                      var a = pe.calculate(
                        Zl,
                        o.getAttributeMultiplier[e],
                        t.getEffectiveLevel(r)
                      );
                      a.equals(1) ||
                        i.push({
                          label: "Rune: ".concat(o.name),
                          value: a,
                          id: "rune-".concat(o.id),
                          category: "Runes",
                        });
                    }
                  }, 0),
                  i
                );
              }),
              (t.prototype.reset = function () {
                this.runes = [];
              }),
              t
            );
          })(s),
          Ti = Ni.getInstance(),
          Ri = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function i() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((i.prototype = n.prototype), new i()));
            };
          })(),
          Li = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                t.workDispatcher.on("[wizard-orb] set level", function (e) {
                  console.log("set level vval", e),
                    (t.state.levelActive = Math.max(
                      0,
                      Math.min(t.state.levelBuilt, e)
                    )),
                    t.state.cancelRuneOnChange &&
                      Zl.learning.runes.rescheduleRunes();
                }),
                t.workDispatcher.on("[wizard-orb] toggle cancel", function (e) {
                  console.log("toggle cancel", e),
                    (t.state.cancelRuneOnChange = !t.state.cancelRuneOnChange);
                }),
                t.workDispatcher.on("[wizard-orb] do build", function (e) {
                  console.log("build", e), t.doBuild();
                }),
                (t.state = {
                  levelActive: 0,
                  levelBuilt: 0,
                  cancelRuneOnChange: !1,
                }),
                t
              );
            }
            return (
              Ri(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                this.state = e || { levelActive: 0, levelBuilt: 0 };
              }),
              (t.prototype.exportData = function () {
                return this.state;
              }),
              (t.prototype.unlockCond = function () {
                return Zl.resources
                  .getResourceCap(i.MANA)
                  .greaterThanOrEqualTo(8);
              }),
              (t.prototype.getSpeedBase = function () {
                return new E.Z(2).mul(
                  E.Z.pow(
                    1.2,
                    Zl.learning.runeUpgrades.getUpgradeLevel(o.BETTER_ORB) +
                      Zl.learning.runeUpgrades.getUpgradeLevel(
                        o.ORB_MANIPULATIONS
                      )
                  )
                );
              }),
              (t.prototype.getSpeedMult = function (e) {
                return (
                  void 0 === e && (e = this.state.levelActive),
                  E.Z.pow(this.getSpeedBase(), e || 0)
                );
              }),
              (t.prototype.getManaMult = function (e) {
                return (
                  void 0 === e && (e = this.state.levelActive),
                  E.Z.pow(4, e || 0)
                );
              }),
              (t.prototype.getCostFormula = function () {
                var e;
                return (
                  ((e = {})[i.MANA] = function (e) {
                    return {
                      A: new E.Z(5),
                      B: new E.Z(5),
                      type: O.EXPONENTIAL,
                    };
                  }),
                  e
                );
              }),
              (t.prototype.doBuild = function () {
                var e = pe.calcBatchAll(
                  this.getCostFormula(),
                  Zl,
                  new E.Z(this.state.levelBuilt),
                  Zl.resources.getBatchObject()
                );
                e
                  .reduce(function (e, t) {
                    return E.Z.min(e, t.max.floor());
                  }, new E.Z("1.e+30000"))
                  .lessThan(1) ||
                  (Pl.getInstance().resources.subtractResourceBatch(e),
                  this.state.levelBuilt++,
                  Pl.getInstance().learning.runePresets.applyPreset(),
                  Zl.resources.reassertBalances(),
                  Zl.regenerateCache());
              }),
              (t.prototype.dataToUI = function () {
                var e = pe.calcBatchAll(
                    this.getCostFormula(),
                    Zl,
                    new E.Z(this.state.levelBuilt),
                    Zl.resources.getBatchObject()
                  ),
                  t = e.reduce(function (e, t) {
                    return E.Z.min(e, t.max.floor());
                  }, new E.Z("1.e+30000"));
                return {
                  isUnlocked: this.unlockCond(),
                  isAvailable: t.greaterThanOrEqualTo(1),
                  maxAmplifyTier: this.state.levelBuilt,
                  currentAmplifyTier: this.state.levelActive || 0,
                  speedMult: ee(this.getSpeedMult()),
                  manaMult: ee(this.getManaMult()),
                  cancelRuneOnChange: this.state.cancelRuneOnChange,
                  upgradeCost: Pl.getInstance().resources.assertEnought(
                    e,
                    Pl.getInstance().resources.getBatchObject(),
                    Pl.getInstance().resources.getBatchBalanceObject()
                  ),
                };
              }),
              (t.prototype.preProcess = function (e) {}),
              (t.prototype.process = function (e) {}),
              (t.prototype.regenerateCache = function () {}),
              (t.prototype.reset = function () {
                this.state = {
                  levelActive: 0,
                  levelBuilt: 0,
                  cancelRuneOnChange: this.state.cancelRuneOnChange || !1,
                };
              }),
              t
            );
          })(s),
          Oi = Li.getInstance(),
          Si = [
            {
              id: o.MANA_ORB,
              name: "Better Mana Orb",
              description: "Better Mana Orb, providing 25% more mana storage",
              unlockCondition: function (e) {
                return !0;
              },
              maxLevel: 10,
              getCost:
                ((ge = {}),
                (ge[i.MANA] = function (e) {
                  return {
                    A: new E.Z(10),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                ge),
              getCapacityMultiplier:
                ((me = {}),
                (me[i.MANA] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.25),
                    type: O.EXPONENTIAL,
                  };
                }),
                me),
            },
            {
              id: o.ADD_RUNIC_TABLE,
              name: "Runic Table",
              description:
                "Increase amount of runes that can be learned at once by 1",
              unlockCondition: function (e) {
                return !0;
              },
              maxLevel: 1,
              getCost:
                ((he = {}),
                (he[i.MANA] = function (e) {
                  return { A: new E.Z(15), B: new E.Z(2), type: O.EXPONENTIAL };
                }),
                he),
            },
            {
              id: o.MAGIC_PRISM,
              name: "Magic Prism",
              description: "Increase mana generation by 25%",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(o.MANA_ORB) > 0;
              },
              maxLevel: 10,
              getCost:
                ((ye = {}),
                (ye[i.MANA] = function (e) {
                  return { A: new E.Z(20), B: new E.Z(2), type: O.EXPONENTIAL };
                }),
                ye),
              getGainMultiplier:
                ((Ee = {}),
                (Ee[i.MANA] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.25),
                    type: O.EXPONENTIAL,
                  };
                }),
                Ee),
            },
            {
              id: o.KNOWLEDGE,
              name: "Knowledge",
              description:
                "Unlock new rune, providing access to new resource - knowledge",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(o.ADD_RUNIC_TABLE) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((Ae = {}),
                (Ae[i.MANA] = function (e) {
                  return { A: new E.Z(20), B: new E.Z(2), type: O.EXPONENTIAL };
                }),
                Ae),
            },
            {
              id: o.RUNIC_MEMORY,
              name: "Runic Memory",
              description:
                "Use your magic knowledge to make rune learning 50% faster",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(o.KNOWLEDGE) > 0;
              },
              maxLevel: 12,
              getCost:
                ((ve = {}),
                (ve[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(2), type: O.EXPONENTIAL };
                }),
                ve),
            },
            {
              id: o.EXPAND_MANA,
              name: "Expand Mana Rune",
              description:
                "Use your magic knowledge to learn new rune improving your mana income",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(o.KNOWLEDGE) > 0;
              },
              maxLevel: 1,
              getCost:
                ((we = {}),
                (we[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(40), B: new E.Z(2), type: O.EXPONENTIAL };
                }),
                we),
            },
            {
              id: o.EXPAND_MAGIC_LIB,
              name: "Expand Magic Library",
              description: "Further increase max active runes by 1 per level",
              unlockCondition: function (e) {
                return !0;
              },
              maxLevel: 3,
              getCost:
                ((be = {}),
                (be[i.MANA] = function (e) {
                  return {
                    A: new E.Z(50),
                    B: new E.Z(10),
                    type: O.EXPONENTIAL,
                  };
                }),
                be),
            },
            {
              id: o.EXPAND_BOOKCASES,
              name: "Expanded Bookcases",
              description: "Increase knowledge capacity by 30%",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(o.EXPAND_MAGIC_LIB) >
                  0
                );
              },
              maxLevel: 10,
              getCapacityMultiplier:
                ((Ie = {}),
                (Ie[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.3),
                    type: O.EXPONENTIAL,
                  };
                }),
                Ie),
              getCost:
                ((Ce = {}),
                (Ce[i.MANA] = function (e) {
                  return {
                    A: new E.Z(75),
                    B: new E.Z(10),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Ce[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(50),
                    B: new E.Z(10),
                    type: O.EXPONENTIAL,
                  };
                }),
                Ce),
            },
            {
              id: o.MEMORY_RUNE,
              name: "Memory Rune",
              description:
                "Unlock memory rune, boosting your magical and mental capacity",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(o.EXPAND_BOOKCASES) >
                  0
                );
              },
              maxLevel: 1,
              getCost:
                ((Ne = {}),
                (Ne[i.MANA] = function (e) {
                  return {
                    A: new E.Z(80),
                    B: new E.Z(10),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Ne[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(50),
                    B: new E.Z(10),
                    type: O.EXPONENTIAL,
                  };
                }),
                Ne),
            },
            {
              id: o.READING_TOOLS,
              name: "Reading Tools",
              description:
                "Learn how to use energetically charged magnifying glass to increase knowledge rune efficiency by 30%",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(o.EXPAND_BOOKCASES) >
                  0
                );
              },
              maxLevel: 8,
              getCost:
                ((Te = {}),
                (Te[i.MANA] = function (e) {
                  return {
                    A: new E.Z(1e3),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                Te),
              getGainMultiplier:
                ((Re = {}),
                (Re[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.3),
                    type: O.EXPONENTIAL,
                  };
                }),
                Re),
            },
            {
              id: o.EXPANDED_SACRIFICE,
              name: "Expanded Sacrifice",
              description:
                "Increase sacrificed runes gain 2 times (acts as you had twice as much runes to sacrifice)",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(o.MEMORY_RUNE) > 0
                );
              },
              maxLevel: 10,
              getCost:
                ((Le = {}),
                (Le[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(100),
                    B: new E.Z(3),
                    type: O.EXPONENTIAL,
                  };
                }),
                Le),
            },
            {
              id: o.CRYSTALS,
              name: "Crystals",
              description:
                "Unlock crystals, that persist through rune sacrifices and can significantly contribute to your magic and learning capabilities",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(o.MEMORY_RUNE) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((Oe = {}),
                (Oe[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(80), B: new E.Z(3), type: O.EXPONENTIAL };
                }),
                Oe),
            },
            {
              id: o.RUNE_MASTER,
              name: "Rune Master Rune",
              description:
                "Unlock rune, that helps to read other runes, reducing their XP requirements",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(o.MEMORY_RUNE) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((Se = {}),
                (Se[i.MANA] = function (e) {
                  return {
                    A: new E.Z(200),
                    B: new E.Z(10),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Se[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(150),
                    B: new E.Z(10),
                    type: O.EXPONENTIAL,
                  };
                }),
                Se),
            },
            {
              id: o.TICKET_OUT,
              name: "Ticket To Mages City",
              description:
                "Gain your access to mages city. Unlocks new game layer.",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(o.MEMORY_RUNE) > 0 &&
                  !e.city.actions.isUnlocked
                );
              },
              maxLevel: 1,
              getCost:
                ((Me = {}),
                (Me[i.MANA] = function (e) {
                  return {
                    A: new E.Z(1e3),
                    B: new E.Z(10),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Me[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(300),
                    B: new E.Z(10),
                    type: O.EXPONENTIAL,
                  };
                }),
                Me),
            },
            {
              id: o.BETTER_STASH,
              name: "Better Stash",
              description:
                "Just a stash for coins storage.Increase coin capacity by 25%",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(o.TICKET_OUT) > 0 ||
                  e.city.actions.isUnlocked
                );
              },
              maxLevel: 10,
              getCost:
                ((Pe = {}),
                (Pe[i.COINS] = function (e) {
                  return { A: new E.Z(10), B: new E.Z(2), type: O.EXPONENTIAL };
                }),
                Pe),
              getCapacityMultiplier:
                ((Ze = {}),
                (Ze[i.COINS] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.25),
                    type: O.EXPONENTIAL,
                  };
                }),
                Ze),
            },
            {
              id: o.KNOWLEDGE_GENERATION,
              name: "Knowledge Generation",
              description:
                "Improve your knowledge about knowledge. Boost knowledge generation by 25%",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.KNOWLEDGE_UPGRADES) >
                    0 &&
                  e.learning.runeUpgrades.getUpgradeLevel(o.KNOWLEDGE) > 0
                );
              },
              maxLevel: 10,
              getCost:
                ((_e = {}),
                (_e[i.MANA] = function (e) {
                  return {
                    A: new E.Z(1e4),
                    B: new E.Z(4),
                    type: O.EXPONENTIAL,
                  };
                }),
                (_e[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(5e3),
                    B: new E.Z(4),
                    type: O.EXPONENTIAL,
                  };
                }),
                _e),
              getGainMultiplier:
                ((Ge = {}),
                (Ge[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.25),
                    type: O.EXPONENTIAL,
                  };
                }),
                Ge),
            },
            {
              id: o.BETTER_ORB,
              name: "Better Orb",
              description:
                "Wizard orb learning bonus is larger by 20% per active level",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.KNOWLEDGE_UPGRADES) >
                    0 &&
                  e.learning.runeUpgrades.getUpgradeLevel(o.KNOWLEDGE) > 0
                );
              },
              maxLevel: 10,
              getCost:
                ((De = {}),
                (De[i.MANA] = function (e) {
                  return {
                    A: new E.Z(1e4),
                    B: new E.Z(5),
                    type: O.EXPONENTIAL,
                  };
                }),
                (De[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(5e3),
                    B: new E.Z(5),
                    type: O.EXPONENTIAL,
                  };
                }),
                De),
              getGainMultiplier: {},
            },
            {
              id: o.RUNIC_MEMORY2,
              name: "Runic Memory II",
              description:
                "Use your magic knowledge to make rune learning even 50% more efficient",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(o.RUNIC_MEMORY) > 11
                );
              },
              maxLevel: 12,
              getCost:
                ((ke = {}),
                (ke[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(2e5),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                ke),
            },
            {
              id: o.RUNIC_TABLE_ENHANCEMENT,
              name: "Runic Table Enhancement",
              description:
                "Improve your runes table to make rune learning 200% faster",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.BASIC_WIZARDRY) > 0
                );
              },
              maxLevel: 10,
              getCost:
                ((Be = {}),
                (Be[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(1e8),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                Be),
            },
            {
              id: o.ORB_MANIPULATIONS,
              name: "Enchanted Orb",
              description: "Make your Wizard Orb 20% better",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.BASIC_WIZARDRY) > 0
                );
              },
              maxLevel: 10,
              getCost:
                ((Ue = {}),
                (Ue[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(1e8),
                    B: new E.Z(4),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Ue[i.COINS] = function (e) {
                  return {
                    A: new E.Z(1e3),
                    B: new E.Z(4),
                    type: O.EXPONENTIAL,
                  };
                }),
                Ue),
            },
            {
              id: o.RUNIC_SPLASH,
              name: "Runic Splash",
              description:
                "Use spark to reveal more runic energy on sacrifice. Increase sacrifice level twice",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.SPARK_GENERATION) > 0
                );
              },
              maxLevel: 12,
              getCost:
                ((xe = {}),
                (xe[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(1e11),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (xe[i.SPARK] = function (e) {
                  return { A: new E.Z(4), B: new E.Z(2), type: O.EXPONENTIAL };
                }),
                xe),
            },
          ],
          Mi = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function i() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((i.prototype = n.prototype), new i()));
            };
          })(),
          Pi = function () {
            return (
              (Pi =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, r) &&
                        (e[r] = t[r]);
                  return e;
                }),
              Pi.apply(this, arguments)
            );
          },
          Zi = (function (e) {
            function t() {
              var t = e.call(this) || this;
              for (var n in ((t.upgrades = []),
              (t.cachedUpgrades = []),
              (t.autoTick = 0),
              (t.viewType = 0),
              t.workDispatcher.on("[rune-upgrade] do upgrade", function (e) {
                console.log("do upgrade", e), t.doUpgrade(e.id);
              }),
              t.workDispatcher.on("[rune-upgrade] set priority", function (e) {
                var n;
                console.log("do set priority", e),
                  (t.autoPriorities[e.id] = Math.max(
                    null !== (n = e.priority) && void 0 !== n ? n : 0,
                    0
                  ));
              }),
              t.workDispatcher.on("[rune-upgrade] toggle view", function (e) {
                console.log("do set view", e), (t.viewType = e);
              }),
              (t.autoPriorities = {}),
              o))
                t.autoPriorities[o[n]] = 10;
              return t;
            }
            return (
              Mi(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                var t;
                if (Array.isArray(e))
                  return (
                    (this.upgrades =
                      (null == e
                        ? void 0
                        : e.map(function (e) {
                            return Pi({}, e);
                          })) || []),
                    void (this.autoPriorities = {})
                  );
                (this.upgrades =
                  (null === (t = null == e ? void 0 : e.upgrades) ||
                  void 0 === t
                    ? void 0
                    : t.map(function (e) {
                        return Pi({}, e);
                      })) || []),
                  (this.autoPriorities = null == e ? void 0 : e.priorities),
                  (this.viewType = e.viewType);
              }),
              (t.prototype.exportData = function () {
                return {
                  upgrades: this.upgrades.map(function (e) {
                    return Pi({}, e);
                  }),
                  priorities: this.autoPriorities,
                  viewType: this.viewType,
                };
              }),
              (t.prototype.regenerateCache = function () {
                var e = this;
                this.cachedUpgrades = Si.map(function (t) {
                  return e.processToUI(t);
                });
              }),
              (t.prototype.dataFromCache = function () {
                var e = this;
                return this.cachedUpgrades
                  .filter(function (e) {
                    return e.isUnlocked && !e.isMaxedOut;
                  })
                  .map(function (t) {
                    var n = Si.find(function (e) {
                      return e.id === t.id;
                    });
                    if (!n) return t;
                    var r = e.upgrades.find(function (e) {
                      return e.id === n.id;
                    });
                    r || ((r = { id: n.id, level: 0 }), e.upgrades.push(r));
                    var o = pe.calcBatchAll(
                        n.getCost,
                        Pl.getInstance(),
                        new E.Z(r.level),
                        Pl.getInstance().resources.getBatchObject()
                      ),
                      a =
                        (o.reduce(function (e, t) {
                          return e && !t.isBlocked;
                        }, !0),
                        o.reduce(function (e, t) {
                          return Math.max(e, t.eta);
                        }, 0)),
                      u = o.reduce(function (e, t) {
                        return E.Z.min(e, t.max);
                      }, new E.Z("1.e+30000"));
                    return (
                      Pl.getInstance()
                        .resources.getResourceCap(i.MANA)
                        .greaterThanOrEqualTo(10) &&
                        r.level <= 0 &&
                        Zl.newNotifications.registerNotification(
                          "learning:runes:upgrade:".concat(n.id)
                        ),
                      Pi(Pi({}, t), {
                        etaNum: a,
                        isAvailable: u.greaterThanOrEqualTo(1),
                        cost: Pl.getInstance().resources.assertEnought(
                          o,
                          Pl.getInstance().resources.getBatchObject(),
                          Pl.getInstance().resources.getBatchBalanceObject()
                        ),
                        progress: u.lessThan(1)
                          ? (100 * u.toNumber()).toPrecision(3)
                          : "100",
                        priority: e.autoPriorities[t.id] || 0,
                      })
                    );
                  });
              }),
              (t.prototype.getAutoupgradeTick = function () {
                return (
                  10 /
                  Math.pow(
                    1.2,
                    Pl.getInstance()
                      .learning.crystals.getCrystalLevel("lazy")
                      .toNumber()
                  )
                );
              }),
              (t.prototype.dataToUI = function () {
                var e;
                return {
                  list: this.dataFromCache(),
                  viewType:
                    null !== (e = this.viewType) && void 0 !== e ? e : 0,
                  isAutoupgradeAllowed: this.isAutomationUnlocked(),
                  autoupgradeTickMax: T(this.getAutoupgradeTick()),
                  autoupgradeProgress:
                    this.autoTick / this.getAutoupgradeTick(),
                  isUnlocked: Pl.getInstance()
                    .resources.getResourceCap(i.MANA)
                    .greaterThanOrEqualTo(10),
                };
              }),
              (t.prototype.isAutomationUnlocked = function () {
                return Zl.learning.crystals
                  .getCrystalLevel("lazy")
                  .greaterThan(0);
              }),
              (t.prototype.getUpgradeLevel = function (e) {
                var t;
                return (
                  (null ===
                    (t = this.upgrades.find(function (t) {
                      return t.id === e;
                    })) || void 0 === t
                    ? void 0
                    : t.level) || 0
                );
              }),
              (t.prototype.processToUI = function (e, t) {
                void 0 === t && (t = 0);
                var n = this.upgrades.find(function (t) {
                  return t.id === e.id;
                });
                n || ((n = { id: e.id, level: 0 }), this.upgrades.push(n));
                var i = pe.calcBatchAll(
                    e.getCost,
                    Pl.getInstance(),
                    new E.Z(n.level + t),
                    Pl.getInstance().resources.getBatchObject()
                  ),
                  r = i.reduce(function (e, t) {
                    return e && !t.isBlocked;
                  }, !0),
                  o = i.reduce(function (e, t) {
                    return Math.max(e, t.eta);
                  }, 0),
                  a = i.reduce(function (e, t) {
                    return E.Z.min(e, t.max);
                  }, new E.Z("1.e+30000")),
                  u = e.unlockCondition(Zl);
                return {
                  id: e.id,
                  name: e.name,
                  description: e.description,
                  isUnlocked: u,
                  isAvailable: a.greaterThanOrEqualTo(1),
                  cost: Pl.getInstance().resources.assertEnought(
                    i,
                    Pl.getInstance().resources.getBatchObject(),
                    Pl.getInstance().resources.getBatchBalanceObject()
                  ),
                  progress: a.lessThan(1)
                    ? (100 * a.toNumber()).toPrecision(3)
                    : "100",
                  isMaxedOut: !!e.maxLevel && e.maxLevel <= n.level,
                  maxLevel: e.maxLevel,
                  level: n.level + t,
                  isBlocked: !r,
                  etaNum: o,
                  priority: this.autoPriorities[e.id] || 10,
                };
              }),
              (t.prototype.doUpgrade = function (e, t) {
                void 0 === t && (t = 1);
                var n = Si.find(function (t) {
                  return t.id === e;
                });
                if ((console.log("[upgrade] db", n), n)) {
                  var i = this.upgrades.findIndex(function (t) {
                    return t.id === e;
                  });
                  if (i < 0)
                    (i = this.upgrades.length),
                      this.upgrades.push({ id: e, level: 0 });
                  else if (n.maxLevel && this.upgrades[i].level >= n.maxLevel)
                    return;
                  var r = pe
                    .calcBatchAll(
                      n.getCost,
                      Pl.getInstance(),
                      new E.Z(this.upgrades[i].level),
                      Pl.getInstance().resources.getBatchObject(),
                      new E.Z(t)
                    )
                    .reduce(function (e, t) {
                      return E.Z.min(e, t.max.floor());
                    }, new E.Z("1.e+30000"));
                  if (
                    (console.log("[upgrade] mx: ", r.toNumber()),
                    !r.lessThan(1))
                  ) {
                    n.maxLevel &&
                      (r = E.Z.min(n.maxLevel - this.upgrades[i].level, r));
                    var o = E.Z.min(t, r),
                      a = pe.calcBatchAll(
                        n.getCost,
                        Pl.getInstance(),
                        new E.Z(this.upgrades[i].level),
                        Pl.getInstance().resources.getBatchObject(),
                        o
                      );
                    return (
                      (this.upgrades[i].level =
                        this.upgrades[i].level + o.toNumber()),
                      console.log("costs: ", a, o.toNumber()),
                      Pl.getInstance().resources.subtractResourceBatch(a),
                      Pl.getInstance().learning.runePresets.applyPreset(),
                      Zl.resources.reassertBalances(),
                      Zl.regenerateCache(),
                      !0
                    );
                  }
                }
              }),
              (t.prototype.getGain = function (e) {
                var t = Si.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getGain) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  n = [];
                return (
                  this.upgrades.forEach(function (i) {
                    var r = t.find(function (e) {
                      return e.id === i.id;
                    });
                    if (r && r.getGain) {
                      var o = pe.calculate(Zl, r.getGain[e], new E.Z(i.level));
                      n.push({
                        label: "Upgrade: ".concat(r.name),
                        value: o,
                        id: "upgrade-".concat(r.id),
                        category: "Upgrades",
                      });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getGainMultiplier = function (e) {
                var t = Si.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getGainMultiplier) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  n = [];
                return (
                  this.upgrades.forEach(function (i) {
                    var r = t.find(function (e) {
                      return e.id === i.id;
                    });
                    if (r && r.getGainMultiplier) {
                      var o = pe.calculate(
                        Zl,
                        r.getGainMultiplier[e],
                        new E.Z(i.level)
                      );
                      o &&
                        !o.eq(1) &&
                        n.push({
                          label: "Upgrade: ".concat(r.name),
                          value: o,
                          id: "upgrade-".concat(r.id),
                          category: "Upgrades",
                        });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getCraftingMultiplier = function () {
                var e = Si.filter(function (e) {
                    return !!e.getCraftingMultiplier;
                  }),
                  t = [];
                return (
                  this.upgrades.forEach(function (n) {
                    var i = e.find(function (e) {
                      return e.id === n.id;
                    });
                    if (i && i.getCraftingMultiplier) {
                      var r = pe.calculate(
                          Zl,
                          i.getCraftingMultiplier,
                          new E.Z(n.level)
                        ),
                        o = r;
                      r &&
                        t.push({
                          label: "Upgrade: ".concat(i.name),
                          value: o,
                          id: "upgrade-".concat(i.id),
                          category: "Upgrades",
                        });
                    }
                  }, 0),
                  t
                );
              }),
              (t.prototype.getCapacity = function (e) {
                var t = Si.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getCapacityEffect) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  n = [];
                return (
                  this.upgrades.forEach(function (i) {
                    var r = t.find(function (e) {
                      return e.id === i.id;
                    });
                    if (r && r.getCapacityEffect) {
                      var o = pe.calculate(
                        Zl,
                        r.getCapacityEffect[e],
                        new E.Z(i.level)
                      );
                      n.push({
                        label: "Upgrade: ".concat(r.name),
                        value: o,
                        id: "upgrade-".concat(r.id),
                        category: "Upgrades",
                      });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getCapacityMult = function (e) {
                var t = Si.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getCapacityMultiplier) ||
                    void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  n = [];
                return (
                  this.upgrades.forEach(function (i) {
                    var r = t.find(function (e) {
                      return e.id === i.id;
                    });
                    if (r && r.getCapacityMultiplier) {
                      var o = pe.calculate(
                        Zl,
                        r.getCapacityMultiplier[e],
                        new E.Z(i.level)
                      );
                      o &&
                        n.push({
                          label: "Upgrade: ".concat(r.name),
                          value: o,
                          id: "upgrade-".concat(r.id),
                          category: "Upgrades",
                        });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.process = function (e) {
                if (
                  Pl.getInstance().settings.turnOnAutoupgrade &&
                  !Pl.getInstance()
                    .learning.crystals.getCrystalLevel("lazy")
                    .lessThanOrEqualTo(0)
                ) {
                  var t = this.getAutoupgradeTick(),
                    n = Math.max(t, 3 * e);
                  if (((this.autoTick += e), !(this.autoTick < n))) {
                    var i = 1;
                    t < 3 * e && (i = Math.max(1, Math.ceil((3 * e) / t))),
                      (this.autoTick = 0);
                    var r = this.dataFromCache()
                      .filter(function (e) {
                        return (
                          e.isUnlocked &&
                          !e.isMaxedOut &&
                          e.isAvailable &&
                          e.priority > 0
                        );
                      })
                      .sort(function (e, t) {
                        return (e.priority || 10) - (t.priority || 10);
                      });
                    r.length
                      ? this.doUpgrade(r[0].id, i)
                      : Zl.learning.wizardOrb.doBuild();
                  }
                }
              }),
              (t.prototype.reset = function () {
                this.upgrades = [];
              }),
              t
            );
          })(s),
          _i = Zi.getInstance(),
          Gi = [
            {
              id: "basic",
              name: "Source of Mana",
              description:
                "Provides some static bonus to your mana cap and generation",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(o.CRYSTALS) > 0;
              },
              getGain:
                ((He = {}),
                (He[i.MANA] = function (e) {
                  return { A: new E.Z(0.5), B: new E.Z(0), type: O.LINEAR };
                }),
                He),
              getCap:
                ((We = {}),
                (We[i.MANA] = function (e) {
                  return { A: new E.Z(4), B: new E.Z(0), type: O.LINEAR };
                }),
                We),
              getCost:
                ((Ye = {}),
                (Ye[i.MANA] = function (e) {
                  return {
                    A: new E.Z(200),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Ye[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(80), B: new E.Z(2), type: O.EXPONENTIAL };
                }),
                Ye),
            },
            {
              id: "wise",
              name: "Wise Crystal",
              description: "Consists of knowledge...",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(o.CRYSTALS) > 0;
              },
              getMultiplier:
                ((qe = {}),
                (qe[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                qe),
              getCapMultiplier:
                ((Xe = {}),
                (Xe[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                Xe),
              getCost:
                ((Ke = {}),
                (Ke[i.MANA] = function (e) {
                  return {
                    A: new E.Z(500),
                    B: new E.Z(4),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Ke[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(200),
                    B: new E.Z(4),
                    type: O.EXPONENTIAL,
                  };
                }),
                Ke),
            },
            {
              id: "lazy",
              name: "Lazy Crystal",
              description: "Unlocks upgrades automation",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(o.CRYSTALS) > 0 &&
                  e.city.academyUpgrades.getUpgradeLevel(a.LAZY_CRYSTAL) > 0
                );
              },
              getCost:
                ((Fe = {}),
                (Fe[i.MANA] = function (e) {
                  return {
                    A: new E.Z(1e4),
                    B: new E.Z(4),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Fe[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(2e3),
                    B: new E.Z(4),
                    type: O.EXPONENTIAL,
                  };
                }),
                Fe),
            },
            {
              id: "gold",
              name: "Gold Crystal",
              description: "Boosts gold cap",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(o.CRYSTALS) > 0 &&
                  e.city.academyUpgrades.getUpgradeLevel(a.GOLD_CRYSTAL) > 0
                );
              },
              getCost:
                ((je = {}),
                (je[i.MANA] = function (e) {
                  return {
                    A: new E.Z(1e4),
                    B: new E.Z(4),
                    type: O.EXPONENTIAL,
                  };
                }),
                (je[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(2e3),
                    B: new E.Z(4),
                    type: O.EXPONENTIAL,
                  };
                }),
                je),
              getCapMultiplier:
                ((Ve = {}),
                (Ve[i.COINS] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.5),
                    type: O.EXPONENTIAL,
                  };
                }),
                Ve),
            },
            {
              id: "mana-crystal",
              name: "Mana Crystal",
              description: "Boosts mana cap",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(o.CRYSTALS) > 0 &&
                  e.city.academyUpgrades.getUpgradeLevel(a.MANA_CRYSTAL) > 0
                );
              },
              getCost:
                ((ze = {}),
                (ze[i.MANA] = function (e) {
                  return {
                    A: new E.Z(1e4),
                    B: new E.Z(4),
                    type: O.EXPONENTIAL,
                  };
                }),
                (ze[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(2e5),
                    B: new E.Z(4),
                    type: O.EXPONENTIAL,
                  };
                }),
                ze),
              getCapMultiplier:
                ((Qe = {}),
                (Qe[i.MANA] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                Qe),
            },
            {
              id: "wellness-crystal",
              name: "Wealth Crystal",
              description: "Generates some coins passively",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(o.CRYSTALS) > 0 &&
                  e.city.academyUpgrades.getUpgradeLevel(a.WELLNESS_CRYSTAL) > 0
                );
              },
              getCost:
                ((Je = {}),
                (Je[i.MANA] = function (e) {
                  return {
                    A: new E.Z("1.e+9"),
                    B: new E.Z(4),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Je[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z("4.e+9"),
                    B: new E.Z(4),
                    type: O.EXPONENTIAL,
                  };
                }),
                Je),
              getGain:
                (($e = {}),
                ($e[i.COINS] = function (e) {
                  return {
                    A: new E.Z(1.4).pow(
                      e.learning.crystals.getCrystalLevel("wellness-crystal")
                    ),
                    B: new E.Z(0),
                    type: O.LINEAR,
                  };
                }),
                $e),
            },
            {
              id: "protection-crystal",
              name: "Protection Crystal",
              description:
                "Amplifying your armor by creating invisible shield around you",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(o.CRYSTALS) > 0 &&
                  e.city.academyUpgrades.getUpgradeLevel(a.PROTECTION_CRYSTAL) >
                    0
                );
              },
              getCost:
                ((et = {}),
                (et[i.MANA] = function (e) {
                  return {
                    A: new E.Z("1.e+15"),
                    B: new E.Z(4),
                    type: O.EXPONENTIAL,
                  };
                }),
                (et[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z("1.e+18"),
                    B: new E.Z(4),
                    type: O.EXPONENTIAL,
                  };
                }),
                et),
              getBattleAttributeMultiplier:
                ((tt = {}),
                (tt[l.ARMOR] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.25),
                    type: O.EXPONENTIAL,
                  };
                }),
                tt),
            },
            {
              id: "elemental-protection-crystal",
              name: "Elemental Protection Crystal",
              description:
                "Amplifying your elemental resistances by creating invisible energetic field",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(o.CRYSTALS) > 0 &&
                  e.city.academyUpgrades.getUpgradeLevel(
                    a.ELEMENTAL_PROTECTION_CRYSTAL
                  ) > 0
                );
              },
              getCost:
                ((nt = {}),
                (nt[i.MANA] = function (e) {
                  return {
                    A: new E.Z("1.e+17"),
                    B: new E.Z(4),
                    type: O.EXPONENTIAL,
                  };
                }),
                (nt[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z("1.e+20"),
                    B: new E.Z(4),
                    type: O.EXPONENTIAL,
                  };
                }),
                nt),
              getBattleAttributeMultiplier:
                ((it = {}),
                (it[l.FIRE_RESISTANCE] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.25),
                    type: O.EXPONENTIAL,
                  };
                }),
                (it[l.MAGIC_RESISTANCE] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.25),
                    type: O.EXPONENTIAL,
                  };
                }),
                it),
            },
          ],
          Di = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function i() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((i.prototype = n.prototype), new i()));
            };
          })(),
          ki = function () {
            return (
              (ki =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, r) &&
                        (e[r] = t[r]);
                  return e;
                }),
              ki.apply(this, arguments)
            );
          },
          Bi = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.crystals = []),
                t.workDispatcher.on("[crystal] do upgrade", function (e) {
                  console.log("do upgrade crystal", e),
                    t.purchaseCrystal(e.id, e.amt);
                }),
                t.workDispatcher.on("[crystal] toggle automate", function (e) {
                  console.log("do automate crystal", e);
                  var n = t.crystals.find(function (t) {
                    return t.id === e.id;
                  });
                  n && (n.isAutobuild = !n.isAutobuild);
                }),
                t.workDispatcher.on(
                  "[crystal] toggle automate all",
                  function (e) {
                    console.log("do automate all crystals", e),
                      t.crystals.forEach(function (t) {
                        return (t.isAutobuild = e);
                      });
                  }
                ),
                t
              );
            }
            return (
              Di(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                this.crystals =
                  (null == e
                    ? void 0
                    : e.map(function (e) {
                        var t;
                        return ki(ki({}, e), {
                          level: new E.Z(e.level),
                          isAutobuild:
                            null !== (t = e.isAutobuild) && void 0 !== t && t,
                        });
                      })) || [];
              }),
              (t.prototype.exportData = function () {
                return this.crystals.map(function (e) {
                  return ki(ki({}, e), { level: e.level.toPrecision(18) });
                });
              }),
              (t.prototype.dataToUI = function () {
                var e = this,
                  t = Gi.map(function (t) {
                    return e.processToUI(t);
                  });
                return {
                  isUnlocked:
                    Zl.learning.runeUpgrades.getUpgradeLevel(o.CRYSTALS) > 0 ||
                    this.crystals.filter(function (e) {
                      return e.level.greaterThan(0);
                    }).length > 0,
                  crystals: t,
                };
              }),
              (t.prototype.processToUI = function (e) {
                var t = this.crystals.find(function (t) {
                  return t.id === e.id;
                });
                t ||
                  ((t = { id: e.id, level: new E.Z(0), isAutobuild: !1 }),
                  this.crystals.push(t));
                var n = e.getCost
                    ? pe.calcBatchAll(
                        e.getCost,
                        Pl.getInstance(),
                        t.level,
                        Pl.getInstance().resources.getBatchObject(),
                        new E.Z(1)
                      )
                    : [],
                  i = e.getGain
                    ? pe.calcBatch(e.getGain, Pl.getInstance(), t.level.plus(1))
                    : [],
                  r = e.getMultiplier
                    ? pe.calcBatch(
                        e.getMultiplier,
                        Pl.getInstance(),
                        t.level.plus(1)
                      )
                    : [],
                  o = e.getCap
                    ? pe.calcBatch(e.getCap, Pl.getInstance(), t.level.plus(1))
                    : [],
                  a = e.getCapMultiplier
                    ? pe.calcBatch(
                        e.getCapMultiplier,
                        Pl.getInstance(),
                        t.level.plus(1)
                      )
                    : [],
                  u = e.getBattleAttributeMultiplier
                    ? pe.calcBatch(
                        e.getBattleAttributeMultiplier,
                        Pl.getInstance(),
                        t.level.plus(1)
                      )
                    : [],
                  s = n.reduce(function (e, t) {
                    return E.Z.min(e, t.max.floor());
                  }, new E.Z("1.e+30000")),
                  c = n.reduce(function (e, t) {
                    return e && !t.isBlocked;
                  }, !0),
                  l = n.reduce(function (e, t) {
                    return Math.max(e, t.eta);
                  }, 0),
                  d = e.unlockCondition(Zl) || t.level.greaterThan(0);
                return (
                  d &&
                    t.level.lessThanOrEqualTo(0) &&
                    Zl.newNotifications.registerNotification(
                      "learning:crystals:crystal:".concat(e.id)
                    ),
                  {
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    isUnlocked: d,
                    isAvailable: s.greaterThanOrEqualTo(1),
                    cost: Pl.getInstance().resources.assertEnought(
                      n,
                      Pl.getInstance().resources.getBatchObject(),
                      Pl.getInstance().resources.getBatchBalanceObject()
                    ),
                    gain: i.map(function (e) {
                      return ki(ki({}, e), {
                        amountValue: e.amount.toString(),
                        amount: ee(e.amount),
                      });
                    }),
                    progress: E.Z.min(1, s.mul(100)).toNumber().toPrecision(3),
                    isBlocked: !c,
                    etaNum: l,
                    level: ie(t.level, 2),
                    gainMult: r.map(function (e) {
                      return ki(ki({}, e), {
                        amountValue: e.amount.toString(),
                        amount: ee(e.amount),
                      });
                    }),
                    cap: o.map(function (e) {
                      return ki(ki({}, e), {
                        amountValue: e.amount.toString(),
                        amount: ee(e.amount),
                      });
                    }),
                    capMult: a.map(function (e) {
                      return ki(ki({}, e), {
                        amountValue: e.amount.toString(),
                        amount: "x".concat(ee(e.amount)),
                      });
                    }),
                    battleAttrMult: u.map(function (e) {
                      return ki(ki({}, e), {
                        amountValue: e.amount.toString(),
                        amount: "x".concat(ee(e.amount)),
                      });
                    }),
                    isAutobuild: t.isAutobuild,
                  }
                );
              }),
              (t.prototype.purchaseCrystal = function (e, t) {
                void 0 === t && (t = 1);
                var n = Gi.find(function (t) {
                  return t.id === e;
                });
                if (n) {
                  var i = this.crystals.findIndex(function (t) {
                    return t.id === e;
                  });
                  i < 0 &&
                    ((i = this.crystals.length),
                    this.crystals.push({
                      id: e,
                      level: new E.Z(0),
                      isAutobuild: !1,
                    }));
                  var r = pe
                    .calcBatchAll(
                      n.getCost,
                      Pl.getInstance(),
                      new E.Z(this.crystals[i].level),
                      Pl.getInstance().resources.getBatchObject(),
                      new E.Z(t)
                    )
                    .reduce(function (e, t) {
                      return E.Z.min(e, t.max.floor());
                    }, new E.Z("1.e+30000"));
                  if (
                    (console.log("[upgrade] mx: ", r.toNumber()),
                    !r.lessThan(1))
                  ) {
                    var o = E.Z.min(t, r),
                      a = pe.calcBatchAll(
                        n.getCost,
                        Pl.getInstance(),
                        new E.Z(this.crystals[i].level),
                        Pl.getInstance().resources.getBatchObject(),
                        o
                      );
                    (this.crystals[i].level = this.crystals[i].level.plus(o)),
                      Pl.getInstance().resources.subtractResourceBatch(a),
                      console.log("costs: ", o, a),
                      Zl.regenerateCache(),
                      Zl.resources.reassertBalances();
                  }
                }
              }),
              (t.prototype.getCrystalLevel = function (e) {
                var t;
                return (
                  (null ===
                    (t = this.crystals.find(function (t) {
                      return t.id === e;
                    })) || void 0 === t
                    ? void 0
                    : t.level) || new E.Z(0)
                );
              }),
              (t.prototype.process = function (e) {
                var t = this;
                if (Zl.statistics.stats.timeInGame % 5 <= e) {
                  var n = Gi.filter(function (e) {
                      return e.unlockCondition(Zl);
                    }).reduce(function (e, t) {
                      return (e[t.id] = t), e;
                    }, {}),
                    i = performance.now();
                  this.crystals.forEach(function (e) {
                    n[e.id] && e.isAutobuild && t.purchaseCrystal(e.id);
                  }),
                    console.log(
                      "[autobuild crystals] finished in " +
                        (performance.now() - i) +
                        "ms"
                    );
                }
              }),
              (t.prototype.getResourceBeingStored = function (e) {
                var t = Gi.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getCap) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  n = [];
                return (
                  this.crystals.forEach(function (i) {
                    var r = t.find(function (e) {
                      return e.id === i.id;
                    });
                    if (r && r.getCap) {
                      var o = pe.calculate(Zl, r.getCap[e], i.level);
                      o.equals(0) ||
                        n.push({
                          label: "Crystal: ".concat(r.name),
                          value: o,
                          id: "crystal-".concat(r.id),
                          category: "Crystals",
                        });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getResourceBeingStoredMultiplier = function (e) {
                var t = Gi.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getCapMultiplier) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  n = [];
                return (
                  this.crystals.forEach(function (i) {
                    var r = t.find(function (e) {
                      return e.id === i.id;
                    });
                    if (r && r.getCapMultiplier) {
                      var o = pe.calculate(Zl, r.getCapMultiplier[e], i.level);
                      o.equals(1) ||
                        n.push({
                          label: "Crystal: ".concat(r.name),
                          value: o,
                          id: "crystal-".concat(r.id),
                          category: "Crystals",
                        });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getMultiplier = function (e) {
                var t = Gi.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getMultiplier) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  n = [];
                return (
                  this.crystals.forEach(function (i) {
                    var r = t.find(function (e) {
                      return e.id === i.id;
                    });
                    if (r && r.getMultiplier) {
                      var o = pe.calculate(Zl, r.getMultiplier[e], i.level);
                      o.equals(1) ||
                        n.push({
                          label: "Crystal: ".concat(r.name),
                          value: o,
                          id: "crystal-".concat(r.id),
                          category: "Crystals",
                        });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getResourceGain = function (e) {
                var t = Gi.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getGain) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  n = [];
                return (
                  this.crystals.forEach(function (i) {
                    var r = t.find(function (e) {
                      return e.id === i.id;
                    });
                    if (r && r.getGain) {
                      var o = pe.calculate(Zl, r.getGain[e], i.level);
                      o.equals(0) ||
                        n.push({
                          label: "Crystal: ".concat(r.name),
                          value: o,
                          id: "crystal-".concat(r.id),
                          category: "Crystals",
                        });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getAttributeGained = function (e) {
                var t = Gi.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getAttribute) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  n = [];
                return (
                  this.crystals.forEach(function (i) {
                    var r = t.find(function (e) {
                      return e.id === i.id;
                    });
                    if (r && r.getAttribute) {
                      var o = pe.calculate(Zl, r.getAttribute[e], i.level);
                      n.push({
                        label: "Crystal: ".concat(r.name),
                        value: o,
                        id: "crystal-".concat(r.id),
                        category: "Crystals",
                      });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getBattleAttributeMultiplier = function (e) {
                var t = Gi.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getBattleAttributeMultiplier) ||
                    void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  n = [];
                return (
                  this.crystals.forEach(function (i) {
                    var r = t.find(function (e) {
                      return e.id === i.id;
                    });
                    if (r && r.getBattleAttributeMultiplier) {
                      var o = pe.calculate(
                        Zl,
                        r.getBattleAttributeMultiplier[e],
                        i.level
                      );
                      n.push({
                        label: "Crystal: ".concat(r.name),
                        value: o,
                        id: "crystal-".concat(r.id),
                        category: "Crystals",
                      });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.reset = function () {
                this.crystals = [];
              }),
              t
            );
          })(s),
          Ui = Bi.getInstance(),
          xi = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function i() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((i.prototype = n.prototype), new i()));
            };
          })(),
          Hi = function () {
            return (
              (Hi =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, r) &&
                        (e[r] = t[r]);
                  return e;
                }),
              Hi.apply(this, arguments)
            );
          },
          Wi = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.presets = []),
                t.workDispatcher.on("[rune-presets] do save", function (e) {
                  console.log("do save", e), t.savePreset(e);
                }),
                t.workDispatcher.on("[rune-presets] delete", function (e) {
                  console.log("do delete", e), t.deletePreset(e.id);
                }),
                t.workDispatcher.on("[rune-presets] run", function (e) {
                  console.log("do run", e), t.runPreset(e.id);
                }),
                t.workDispatcher.on("[rune-presets] stop", function (e) {
                  console.log("do stop", e), t.stopPreset();
                }),
                t
              );
            }
            return (
              xi(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                (this.presets = (null == e ? void 0 : e.list) || []),
                  (this.active = null == e ? void 0 : e.active);
              }),
              (t.prototype.exportData = function () {
                return { list: this.presets, active: this.active };
              }),
              (t.prototype.processListToUI = function (e) {
                var t = se
                  .filter(function (e) {
                    return (
                      e.unlockCondition(Zl) ||
                      Zl.learning.runes.runes.find(function (t) {
                        return t.id === e.id;
                      })
                    );
                  })
                  .reduce(function (e, t) {
                    return (e[t.id] = t), e;
                  }, {});
                return {
                  id: e.id,
                  name: e.name,
                  orbLevel: e.orbLevel,
                  isDefault: e.isDefault,
                  runes: e.runes.map(function (e, n) {
                    return { id: e.id, name: t[e.id].name, orderIndex: n };
                  }),
                };
              }),
              (t.prototype.dataToUI = function () {
                var e = this;
                return {
                  isUnlocked:
                    Pl.getInstance().statistics.stats.numRuneResets > 0,
                  list: this.presets.map(function (t) {
                    return e.processListToUI(t);
                  }),
                  active: this.active
                    ? { id: this.active, name: this.getActiveName() }
                    : void 0,
                };
              }),
              (t.prototype.savePreset = function (e) {
                var t = this;
                if (!e.name) throw new Error("Preset name should not be empty");
                if (
                  (e.isDefault &&
                    this.presets.forEach(function (e, n) {
                      return (t.presets[n].isDefault = !1);
                    }),
                  e.id)
                ) {
                  var n = this.presets.findIndex(function (t) {
                    return t.id === e.id;
                  });
                  n > -1 && (this.presets[n] = e);
                } else
                  (e = Hi(Hi({}, e), { id: "".concat(Math.random()) })),
                    this.presets.push(e);
              }),
              (t.prototype.deletePreset = function (e) {
                var t = this.presets.findIndex(function (t) {
                  return t.id === e;
                });
                t > -1 && this.presets.splice(t, 1),
                  this.active === e && (this.active = void 0);
              }),
              (t.prototype.runPreset = function (e) {
                this.presets.findIndex(function (t) {
                  return t.id === e;
                }) > -1 && (this.active = e),
                  this.applyPreset();
              }),
              (t.prototype.stopPreset = function () {
                this.active = void 0;
              }),
              (t.prototype.runDefault = function () {
                if (Zl.statistics.stats.numRuneResets) {
                  var e = this.presets.find(function (e) {
                    return e.isDefault;
                  });
                  e && ((this.active = e.id), this.applyPreset());
                }
              }),
              (t.prototype.getActiveName = function () {
                var e = this;
                if (this.active && Zl.statistics.stats.numRuneResets) {
                  var t = this.presets.find(function (t) {
                    return t.id === e.active;
                  });
                  if (t) return t.name;
                }
              }),
              (t.prototype.applyPreset = function () {
                var e = this;
                if (this.active && Zl.statistics.stats.numRuneResets) {
                  var t = this.presets.find(function (t) {
                    return t.id === e.active;
                  });
                  if (t) {
                    Zl.learning.runes.applyBatch(
                      t.runes.map(function (e) {
                        return e.id;
                      })
                    );
                    var n = Zl.learning.wizardOrb.state.levelActive;
                    (Zl.learning.wizardOrb.state.levelActive = Math.min(
                      Zl.learning.wizardOrb.state.levelBuilt,
                      t.orbLevel
                    )),
                      n !== Zl.learning.wizardOrb.state.levelActive &&
                        Zl.learning.wizardOrb.state.cancelRuneOnChange &&
                        (console.log(
                          "rescheduling: ",
                          n,
                          Zl.learning.wizardOrb.state.levelActive
                        ),
                        Zl.learning.runes.rescheduleRunes());
                  }
                }
              }),
              t
            );
          })(s).getInstance(),
          Yi = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function i() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((i.prototype = n.prototype), new i()));
            };
          })(),
          qi = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.runes = Ti),
                (t.wizardOrb = Oi),
                (t.runeUpgrades = _i),
                (t.crystals = Ui),
                (t.runePresets = Wi),
                t
              );
            }
            return (
              Yi(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                this.runes.importData(null == e ? void 0 : e.runes),
                  this.wizardOrb.importData(null == e ? void 0 : e.wizardOrb),
                  this.runeUpgrades.importData(
                    null == e ? void 0 : e.runeUpgrades
                  ),
                  this.crystals.importData(null == e ? void 0 : e.crystals),
                  this.runePresets.importData(null == e ? void 0 : e.presets);
              }),
              (t.prototype.exportData = function () {
                return {
                  runes: this.runes.exportData(),
                  wizardOrb: this.wizardOrb.exportData(),
                  runeUpgrades: this.runeUpgrades.exportData(),
                  crystals: this.crystals.exportData(),
                  presets: this.runePresets.exportData(),
                };
              }),
              (t.prototype.dataToUI = function () {
                return {
                  runes: this.runes.dataToUI(),
                  wizardOrb: this.wizardOrb.dataToUI(),
                  runeUpgrades: this.runeUpgrades.dataToUI(),
                  crystals: this.crystals.dataToUI(),
                  presets: this.runePresets.dataToUI(),
                };
              }),
              (t.prototype.preProcess = function (e) {}),
              (t.prototype.process = function (e) {
                this.runes.process(e),
                  this.crystals.process(e),
                  this.runeUpgrades.process(e);
              }),
              (t.prototype.regenerateCache = function () {
                this.runes.regenerateCache(),
                  this.runeUpgrades.regenerateCache();
              }),
              (t.prototype.reset = function () {
                this.runes.reset();
              }),
              t
            );
          })(s).getInstance(),
          Xi = function (e, t) {
            var n = {};
            for (var i in e) n[i] = t(e[i], i);
            return n;
          },
          Ki = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function i() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((i.prototype = n.prototype), new i()));
            };
          })(),
          Fi = function () {
            return (
              (Fi =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, r) &&
                        (e[r] = t[r]);
                  return e;
                }),
              Fi.apply(this, arguments)
            );
          },
          ji = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.attributesEffects = {}),
                (t.stored = {}),
                (t.attributesBreakdowns = {}),
                t
              );
            }
            return (
              Ki(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                this.stored = Xi(e.stored, function (e) {
                  return new E.Z(e);
                });
              }),
              (t.prototype.exportData = function () {
                return {
                  stored: Xi(this.stored, function (e) {
                    return e.toPrecision(18);
                  }),
                };
              }),
              (t.prototype.dataToUI = function () {
                var e = this;
                return {
                  attributes: ce.map(function (t) {
                    return e.processToUI(t);
                  }),
                };
              }),
              (t.prototype.applyMinimumToEffect = function (e, t) {
                if (e > t) return e;
                var n = t - e;
                return t * Math.pow(1.01, -n);
              }),
              (t.prototype.getBreakdowns = function () {
                var e = this,
                  t = (function (e) {
                    var t,
                      n,
                      i,
                      r,
                      o,
                      a,
                      u,
                      s,
                      l,
                      d,
                      p,
                      f =
                        (((t = {})[c.RUNE_READING] = {
                          linear: [
                            {
                              id: "basic",
                              label: "Basic",
                              value: new E.Z(1),
                              category: "Basic",
                            },
                          ],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[c.RUNE_MASTERY] = {
                          linear: [
                            {
                              id: "basic",
                              label: "Basic",
                              value: new E.Z(1),
                              category: "Basic",
                            },
                          ],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[c.WILLPOWER] = {
                          linear: [
                            {
                              id: "basic",
                              label: "Basic",
                              value: new E.Z(1),
                              category: "Basic",
                            },
                          ],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[c.SANITY] = {
                          linear: [
                            {
                              id: "basic",
                              label: "Basic",
                              value: new E.Z(1),
                              category: "Base",
                            },
                          ],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[c.STRENGTH] = {
                          linear: [
                            {
                              id: "basic",
                              label: "Basic",
                              value: new E.Z(1),
                              category: "Base",
                            },
                          ],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[c.VITALITY] = {
                          linear: [
                            {
                              id: "basic",
                              label: "Basic",
                              value: new E.Z(1),
                              category: "Base",
                            },
                          ],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[c.AGILITY] = {
                          linear: [
                            {
                              id: "basic",
                              label: "Basic",
                              value: new E.Z(1),
                              category: "Base",
                            },
                          ],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[c.MAGIC_KNOWLEDGE] = {
                          linear: [
                            {
                              id: "basic",
                              label: "Basic",
                              value: new E.Z(1),
                              category: "Base",
                            },
                          ],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[c.REST_EFFICIENCY] = {
                          linear: [
                            {
                              id: "basic",
                              label: "Basic",
                              value: new E.Z(1),
                              category: "Base",
                            },
                          ],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[c.CONJURATION_LORE] = {
                          linear: [
                            {
                              id: "basic",
                              label: "Basic",
                              value: new E.Z(1),
                              category: "Base",
                            },
                          ],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[c.STAMINA] = {
                          linear: [
                            {
                              id: "basic",
                              label: "Basic",
                              value: new E.Z(1),
                              category: "Base",
                            },
                          ],
                          multiplier: [],
                          consumption: [],
                        }),
                        t);
                    for (var g in f)
                      (n = f[g].linear).push.apply(
                        n,
                        Zl.learning.runes.getAttributeGained(g)
                      ),
                        (i = f[g].multiplier).push.apply(
                          i,
                          Zl.learning.runes.getAttributeMultiplier(g)
                        ),
                        (r = f[g].linear).push.apply(
                          r,
                          Zl.city.actions.getAttributeProduced(g)
                        ),
                        (o = f[g].multiplier).push.apply(
                          o,
                          Zl.city.actions.getAttributeMultiplier(g)
                        ),
                        (a = f[g].linear).push.apply(
                          a,
                          Zl.construction.structures.getAttributeProduced(g)
                        ),
                        (u = f[g].multiplier).push.apply(
                          u,
                          Zl.construction.structures.getAttributeMultiplier(g)
                        ),
                        (s = f[g].linear).push.apply(
                          s,
                          Zl.achievements.getAttributeGain(g)
                        ),
                        (l = f[g].multiplier).push.apply(
                          l,
                          Zl.achievements.getAttributeMultiplier(g)
                        ),
                        (d = f[g].linear).push.apply(
                          d,
                          Zl.battle.battleItems.getAttributeProduced(g)
                        ),
                        (p = f[g].multiplier).push.apply(
                          p,
                          Zl.battle.battleItems.getAttributeMultiplier(g)
                        );
                    return f;
                  })(),
                  n = {};
                ce.forEach(function (i) {
                  var r, o, a;
                  if (i.unlockCondition(Zl)) {
                    n[i.id] = { income: [], multiplier: [], consumption: [] };
                    var u =
                        null === (r = t[i.id].linear) || void 0 === r
                          ? void 0
                          : r.reduce(function (e, t) {
                              return e.plus(t.value);
                            }, new E.Z(0)),
                      s =
                        null === (o = t[i.id].multiplier) || void 0 === o
                          ? void 0
                          : o.reduce(function (e, t) {
                              return e.mul(t.value);
                            }, new E.Z(1)),
                      c =
                        (null === (a = t[i.id].consumption) || void 0 === a
                          ? void 0
                          : a.reduce(function (e, t) {
                              return e.plus(t.value);
                            }, new E.Z(0))) || new E.Z(0);
                    (e.attributesEffects[i.id] = new E.Z(u.mul(s)).sub(c)),
                      (n[i.id].income = t[i.id].linear
                        .filter(function (e) {
                          return e.value;
                        })
                        .map(function (e) {
                          return Fi(Fi({}, e), {
                            value: "+".concat(e.value.toPrecision(4)),
                          });
                        })),
                      (n[i.id].multiplier = t[i.id].multiplier
                        .filter(function (e) {
                          return 1 !== e.value;
                        })
                        .map(function (e) {
                          return Fi(Fi({}, e), {
                            value: "x".concat(e.value.toPrecision(4)),
                          });
                        })),
                      (n[i.id].consumption = t[i.id].consumption
                        .filter(function (e) {
                          return e.value;
                        })
                        .map(function (e) {
                          return Fi(Fi({}, e), {
                            value: "-".concat(e.value.toPrecision(4)),
                          });
                        }));
                  }
                }),
                  (this.attributesBreakdowns = n);
              }),
              (t.prototype.processToUI = function (e) {
                var t,
                  n,
                  i = e.unlockCondition(Zl);
                return {
                  id: e.id,
                  name: e.name,
                  isUnlocked: i,
                  amount: ee(
                    null !== (t = this.attributesEffects[e.id]) && void 0 !== t
                      ? t
                      : new E.Z(0)
                  ),
                  breakdown:
                    null !== (n = this.attributesBreakdowns[e.id]) &&
                    void 0 !== n
                      ? n
                      : { income: [], multiplier: [], consumption: [] },
                  description: e.description,
                };
              }),
              (t.prototype.process = function (e) {
                this.getBreakdowns();
              }),
              (t.prototype.getAttribute = function (e) {
                return this.attributesEffects[e] || new E.Z(0);
              }),
              (t.prototype.addAttribute = function (e, t) {
                var n;
                this.stored[e] ||
                  (this.stored[e] =
                    null === (n = this.stored[e]) || void 0 === n
                      ? void 0
                      : n.plus(t));
              }),
              (t.prototype.reset = function () {
                (this.attributesBreakdowns = {}), (this.attributesEffects = {});
              }),
              t
            );
          })(s),
          Vi = ji.getInstance(),
          zi = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function i() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((i.prototype = n.prototype), new i()));
            };
          })(),
          Qi = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (t.attributes = Vi), t;
            }
            return (
              zi(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                this.attributes.importData(null == e ? void 0 : e.attributes);
              }),
              (t.prototype.exportData = function () {
                return { attributes: this.attributes.exportData() };
              }),
              (t.prototype.dataToUI = function () {
                return { attributes: this.attributes.dataToUI() };
              }),
              (t.prototype.preProcess = function (e) {}),
              (t.prototype.process = function (e) {
                this.attributes.process(e);
              }),
              (t.prototype.regenerateCache = function () {}),
              (t.prototype.reset = function () {
                this.attributes.reset();
              }),
              t
            );
          })(s).getInstance();
        !(function (e) {
          (e.CLEAN_STREETS = "clean_streets"),
            (e.DIG_CHANNELS = "dig_channels"),
            (e.CARE_BAGS = "care_bags"),
            (e.LABOUR = "labour"),
            (e.FARMER = "farmer"),
            (e.QUARRYMAN = "quarryman"),
            (e.MINER = "miner"),
            (e.HEAD_MINER = "head_miner"),
            (e.BUILDER = "builder"),
            (e.HEAD_BUILDER = "head_builder"),
            (e.REST = "rest"),
            (e.PUSHUP = "pushup"),
            (e.BREATH = "breath"),
            (e.TRAIN_STRENGTH = "train_strength"),
            (e.TRAIN_ENDURANCE = "train_endurance"),
            (e.SPARK_HEART_INFUSION = "spark_heart_infusion"),
            (e.SPARK_MUSCLE_INFUSION = "muscle_spark_infusion"),
            (e.SPARK_BRAIN_INFUSION = "spark_brain_infusion"),
            (e.INVESTIGATE_WORLD = "investigate_world"),
            (e.MEAL = "meal"),
            (e.READ_BOOKS = "read_books"),
            (e.READ_MANUSCRIPTS = "read_manuscripts"),
            (e.APTITUDE_TRAINING = "aptitude_training"),
            (e.BRAINSTORM = "brain_storm"),
            (e.BRAIN_EMPOWER = "brain_empower"),
            (e.RUNE_LESSONS = "rune_lessons"),
            (e.MEDITATE = "meditate"),
            (e.WILLPOWER_TRAINING = "willpower_training"),
            (e.FIND_MANA_SOURCE = "find_mana_source"),
            (e.MAGIC_LESSONS = "magic_lessons"),
            (e.READ_ELVEN_BOOKS = "read_elven_books"),
            (e.IMPROVE_SPARK_STORAGE = "improve_spark_storage"),
            (e.CONJURATION_TRAINING = "conjuration_training"),
            (e.ENCHANT_REACTION = "enchant_reaction"),
            (e.SPELL_SINGING = "spellsinging"),
            (e.FORTITUDE = "fortitude"),
            (e.CONDENSE_STASHES = "condense_stashes"),
            (e.CONJURE_SPARK = "conjure_spark"),
            (e.CONJURE_WOOD = "conjure_wood"),
            (e.CONJURE_STONE = "conjure_stone"),
            (e.CONJURE_IRON = "conjure_iron"),
            (e.CRAFT = "craft"),
            (e.FIGHT = "fight"),
            (e.WEAPON_MASTERY = "weapons_mastery"),
            (e.BATTLE_ENDURANCE = "battle_endurance"),
            (e.EVOCATION_TRAINING = "evocation_training"),
            (e.CONJURATION_SINGING = "conjuration_singing");
        })(rt || (rt = {}));
        var Ji,
          $i,
          er,
          tr,
          nr,
          ir,
          rr,
          or,
          ar,
          ur,
          sr,
          cr,
          lr,
          dr,
          pr,
          fr,
          gr,
          mr,
          hr,
          yr,
          Er,
          Ar,
          vr,
          wr,
          br,
          Ir,
          Cr,
          Nr,
          Tr,
          Rr,
          Lr,
          Or,
          Sr,
          Mr,
          Pr,
          Zr,
          _r,
          Gr,
          Dr,
          kr,
          Br,
          Ur,
          xr,
          Hr,
          Wr,
          Yr,
          qr,
          Xr,
          Kr,
          Fr,
          jr,
          Vr,
          zr,
          Qr,
          Jr,
          $r,
          eo,
          to,
          no,
          io,
          ro,
          oo,
          ao,
          uo,
          so,
          co,
          lo,
          po,
          fo,
          go,
          mo,
          ho,
          yo,
          Eo,
          Ao,
          vo,
          wo = [
            {
              id: rt.CLEAN_STREETS,
              name: "Clean Streets",
              description: "",
              unlockCondition: function (e) {
                return !0;
              },
              effortRequired: new E.Z(3),
              attributesEffortEffect: ((ot = {}), (ot[c.STRENGTH] = 1), ot),
              tags: ["physical", "actions", "coins"],
              baseResourcePerCast:
                ((at = {}), (at[i.COINS] = new E.Z(0.1)), at),
              baseCostPerCast: ((ut = {}), (ut[i.ENERGY] = new E.Z(0.5)), ut),
              xpGain: new E.Z("5"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: rt.DIG_CHANNELS,
              name: "Dig Channels",
              description: "",
              unlockCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.STRENGTH)
                  .greaterThan(10);
              },
              effortRequired: new E.Z(50),
              attributesEffortEffect: ((st = {}), (st[c.STRENGTH] = 1), st),
              tags: ["physical", "actions", "coins"],
              baseResourcePerCast:
                ((ct = {}), (ct[i.COINS] = new E.Z(0.6)), ct),
              baseCostPerCast: ((lt = {}), (lt[i.ENERGY] = new E.Z(1.5)), lt),
              xpGain: new E.Z("25"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: rt.CARE_BAGS,
              name: "Carry Bags",
              description: "",
              unlockCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.STRENGTH)
                  .greaterThan(1e3);
              },
              effortRequired: new E.Z(500),
              attributesEffortEffect: ((dt = {}), (dt[c.STRENGTH] = 1), dt),
              tags: ["physical", "actions", "coins"],
              baseResourcePerCast: ((pt = {}), (pt[i.COINS] = new E.Z(4)), pt),
              baseCostPerCast: ((ft = {}), (ft[i.ENERGY] = new E.Z(5)), ft),
              xpGain: new E.Z("125"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: rt.LABOUR,
              name: "Labour",
              description: "",
              unlockCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.STRENGTH)
                  .greaterThan(1e5);
              },
              effortRequired: new E.Z(5e3),
              attributesEffortEffect: ((gt = {}), (gt[c.STRENGTH] = 1), gt),
              tags: ["physical", "actions", "coins"],
              baseResourcePerCast: ((mt = {}), (mt[i.COINS] = new E.Z(32)), mt),
              baseCostPerCast: ((ht = {}), (ht[i.ENERGY] = new E.Z(15)), ht),
              xpGain: new E.Z("625"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: rt.FARMER,
              name: "Farmer",
              description: "",
              unlockCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.STRENGTH)
                  .greaterThan("1.e+8");
              },
              effortRequired: new E.Z(5e4),
              attributesEffortEffect: ((yt = {}), (yt[c.STRENGTH] = 1), yt),
              tags: ["physical", "actions", "coins"],
              baseResourcePerCast:
                ((Et = {}), (Et[i.COINS] = new E.Z(160)), Et),
              baseCostPerCast: ((At = {}), (At[i.ENERGY] = new E.Z(50)), At),
              xpGain: new E.Z("3025"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: rt.QUARRYMAN,
              name: "Quarryman",
              description: "",
              unlockCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.STRENGTH)
                  .greaterThan("1.e+12");
              },
              effortRequired: new E.Z(5e5),
              attributesEffortEffect: ((vt = {}), (vt[c.STRENGTH] = 1), vt),
              tags: ["physical", "actions", "coins"],
              baseResourcePerCast:
                ((wt = {}), (wt[i.COINS] = new E.Z(800)), wt),
              baseCostPerCast: ((bt = {}), (bt[i.ENERGY] = new E.Z(150)), bt),
              xpGain: new E.Z("15125"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: rt.MINER,
              name: "Miner",
              description: "",
              unlockCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.STRENGTH)
                  .greaterThan("1.e+18");
              },
              effortRequired: new E.Z(5e6),
              attributesEffortEffect: ((It = {}), (It[c.STRENGTH] = 1), It),
              tags: ["physical", "actions", "coins"],
              baseResourcePerCast:
                ((Ct = {}), (Ct[i.COINS] = new E.Z(4e3)), Ct),
              baseCostPerCast: ((Nt = {}), (Nt[i.ENERGY] = new E.Z(450)), Nt),
              xpGain: new E.Z("75625"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: rt.HEAD_MINER,
              name: "Head Miner",
              description: "",
              unlockCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.STRENGTH)
                  .greaterThan("1.e+25");
              },
              effortRequired: new E.Z(5e7),
              attributesEffortEffect: ((Tt = {}), (Tt[c.STRENGTH] = 1), Tt),
              tags: ["physical", "actions", "coins"],
              baseResourcePerCast:
                ((Rt = {}), (Rt[i.COINS] = new E.Z(2e4)), Rt),
              baseCostPerCast: ((Lt = {}), (Lt[i.ENERGY] = new E.Z(1350)), Lt),
              xpGain: new E.Z("4.e+5"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: rt.BUILDER,
              name: "Builder",
              description: "",
              unlockCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.STRENGTH)
                  .greaterThan("1.e+36");
              },
              effortRequired: new E.Z(5e8),
              attributesEffortEffect: ((Ot = {}), (Ot[c.STRENGTH] = 1), Ot),
              tags: ["physical", "actions", "coins"],
              baseResourcePerCast:
                ((St = {}), (St[i.COINS] = new E.Z(1e5)), St),
              baseCostPerCast: ((Mt = {}), (Mt[i.ENERGY] = new E.Z(4050)), Mt),
              xpGain: new E.Z("2.e+6"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: rt.REST,
              name: "Rest",
              description:
                "Even mages need to take some rest. Devote some time to yourself to recover energy",
              unlockCondition: function (e) {
                return !0;
              },
              effortRequired: new E.Z(1),
              attributesEffortEffect: ((Pt = {}), (Pt[c.VITALITY] = 1), Pt),
              tags: ["physical", "actions", "energy"],
              baseResourcePerCast:
                ((Zt = {}), (Zt[i.ENERGY] = new E.Z(0.2)), Zt),
              xpGain: new E.Z("0.1"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: rt.PUSHUP,
              name: "Push Up",
              description: "Train your physical abilities",
              unlockCondition: function (e) {
                return !0;
              },
              effortRequired: new E.Z(5),
              attributesEffortEffect:
                ((_t = {}),
                (_t[c.VITALITY] = 0.75),
                (_t[c.STRENGTH] = 0.25),
                _t),
              tags: ["physical", "actions", "training", "strength"],
              baseAttributePerCats:
                ((Gt = {}), (Gt[c.STRENGTH] = new E.Z(0.1)), Gt),
              baseCostPerCast: ((Dt = {}), (Dt[i.ENERGY] = new E.Z(1)), Dt),
              xpGain: new E.Z("25"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1.01);
              },
            },
            {
              id: rt.BREATH,
              name: "Breath Techniques",
              description: "Train your vitality",
              unlockCondition: function (e) {
                return !0;
              },
              effortRequired: new E.Z(5),
              attributesEffortEffect:
                ((kt = {}), (kt[c.VITALITY] = 0.5), (kt[c.STRENGTH] = 0.5), kt),
              tags: ["physical", "actions", "training", "vitality"],
              baseAttributePerCats:
                ((Bt = {}), (Bt[c.VITALITY] = new E.Z(0.1)), Bt),
              baseCostPerCast: ((Ut = {}), (Ut[i.ENERGY] = new E.Z(1)), Ut),
              xpGain: new E.Z("25"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1.01);
              },
            },
            {
              id: rt.INVESTIGATE_WORLD,
              name: "Investigate World",
              description:
                "Learn more about surroundings and place where you are living",
              unlockCondition: function (e) {
                return !0;
              },
              effortRequired: new E.Z(10),
              attributesEffortEffect:
                ((xt = {}),
                (xt[c.VITALITY] = 0.75),
                (xt[c.STRENGTH] = 0.25),
                xt),
              tags: ["mental", "actions", "training", "intellect"],
              baseAttributeMultiplierPerCast:
                ((Ht = {}), (Ht[c.RUNE_READING] = new E.Z(0.1)), Ht),
              baseCostPerCast: ((Wt = {}), (Wt[i.ENERGY] = new E.Z(1)), Wt),
              xpGain: new E.Z("50"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1.01);
              },
            },
            {
              id: rt.TRAIN_ENDURANCE,
              name: "Train Endurance",
              description: "Take endurance training at local gladiators school",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.TRAINING_CHAMBERS) >
                  0
                );
              },
              effortRequired: new E.Z(1e5),
              attributesEffortEffect:
                ((Yt = {}),
                (Yt[c.VITALITY] = 0.75),
                (Yt[c.STRENGTH] = 0.25),
                Yt),
              tags: ["physical", "actions", "training", "vitality"],
              baseAttributeMultiplierPerCast:
                ((qt = {}), (qt[c.VITALITY] = new E.Z(0.1)), qt),
              baseCostPerCast:
                ((Xt = {}),
                (Xt[i.ENERGY] = new E.Z(10)),
                (Xt[i.COINS] = new E.Z(10)),
                Xt),
              xpGain: new E.Z("4000"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1.01);
              },
            },
            {
              id: rt.TRAIN_STRENGTH,
              name: "Train Strength",
              description: "Take strength training at local gladiators school",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.TRAINING_CHAMBERS) >
                  0
                );
              },
              effortRequired: new E.Z(1e5),
              attributesEffortEffect:
                ((Kt = {}),
                (Kt[c.VITALITY] = 0.75),
                (Kt[c.STRENGTH] = 0.25),
                Kt),
              tags: ["physical", "actions", "training", "strength"],
              baseAttributeMultiplierPerCast:
                ((Ft = {}), (Ft[c.STRENGTH] = new E.Z(0.1)), Ft),
              baseCostPerCast:
                ((jt = {}),
                (jt[i.ENERGY] = new E.Z(10)),
                (jt[i.COINS] = new E.Z(10)),
                jt),
              xpGain: new E.Z("4000"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1.01);
              },
            },
            {
              id: rt.READ_BOOKS,
              name: "Read Books",
              description:
                "Spend time reading old magic books, full of knowledge. Increase knowledge cap, but requires mana to translate magic language",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.READ_BOOKS) > 0;
              },
              effortRequired: new E.Z(4e3),
              attributesEffortEffect:
                ((Vt = {}),
                (Vt[c.RUNE_READING] = 0.75),
                (Vt[c.WILLPOWER] = 0.25),
                Vt),
              tags: ["mental", "actions", "training", "knowledge"],
              baseResourceCapPerCast:
                ((zt = {}), (zt[i.KNOWLEDGE] = new E.Z(1)), zt),
              baseCostPerCast:
                ((Qt = {}),
                (Qt[i.ENERGY] = new E.Z(5)),
                (Qt[i.MANA] = new E.Z(1e4)),
                Qt),
              xpGain: new E.Z("200"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: rt.READ_MANUSCRIPTS,
              name: "Read Manuscripts",
              description:
                "Spend time reading rune manuscripts, increasing rune mastery",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.RUNE_LANGUAGE) > 0
                );
              },
              effortRequired: new E.Z(8e3),
              attributesEffortEffect:
                ((Jt = {}),
                (Jt[c.RUNE_READING] = 0.75),
                (Jt[c.WILLPOWER] = 0.25),
                Jt),
              tags: ["mental", "actions", "training", "rune mastery"],
              baseAttributeMultiplierPerCast:
                (($t = {}), ($t[c.RUNE_MASTERY] = new E.Z(0.05)), $t),
              baseCostPerCast:
                ((en = {}),
                (en[i.ENERGY] = new E.Z(10)),
                (en[i.MANA] = new E.Z(5e4)),
                en),
              xpGain: new E.Z("300"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1.01);
              },
            },
            {
              id: rt.APTITUDE_TRAINING,
              name: "Mental Aptitude",
              description:
                "Train your mental abilities by solving problems from academy books. Increase Intellect",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.APTITUDE) > 0;
              },
              effortRequired: new E.Z(1e4),
              attributesEffortEffect:
                ((tn = {}),
                (tn[c.VITALITY] = 0.25),
                (tn[c.WILLPOWER] = 0.75),
                tn),
              tags: ["mental", "actions", "training", "intellect"],
              baseAttributeMultiplierPerCast:
                ((nn = {}), (nn[c.RUNE_READING] = new E.Z(0.05)), nn),
              baseCostPerCast:
                ((rn = {}),
                (rn[i.ENERGY] = new E.Z(10)),
                (rn[i.KNOWLEDGE] = new E.Z(5e3)),
                rn),
              xpGain: new E.Z("1000"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1.01);
              },
            },
            {
              id: rt.BRAINSTORM,
              name: "Brainstorm",
              description:
                "Train your mental abilities. Increase Knowledge generation",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.BRAINSTORM) > 0;
              },
              effortRequired: new E.Z(1e5),
              attributesEffortEffect:
                ((on = {}),
                (on[c.WILLPOWER] = 0.5),
                (on[c.RUNE_READING] = 0.5),
                on),
              tags: ["mental", "actions", "empower", "knowledge"],
              baseResourceMultiplierPerCast:
                ((an = {}), (an[i.KNOWLEDGE] = new E.Z(0.02)), an),
              baseCostPerCast:
                ((un = {}),
                (un[i.ENERGY] = new E.Z(25)),
                (un[i.MANA] = new E.Z(1e6)),
                un),
              xpGain: new E.Z("1500"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: rt.MEDITATE,
              name: "Meditate",
              description: "Use special techniques to improve your mana cap",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.MEDITATE) > 0;
              },
              effortRequired: new E.Z(2e6),
              attributesEffortEffect:
                ((sn = {}),
                (sn[c.RUNE_READING] = 0.75),
                (sn[c.VITALITY] = 0.25),
                sn),
              tags: ["mental", "actions", "empower", "mana", "capacity"],
              baseResourceCapMultiplierPerCast:
                ((cn = {}), (cn[i.MANA] = new E.Z(0.02)), cn),
              baseCostPerCast:
                ((ln = {}),
                (ln[i.ENERGY] = new E.Z(50)),
                (ln[i.KNOWLEDGE] = new E.Z(2e6)),
                ln),
              xpGain: new E.Z("3e+3"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: rt.WILLPOWER_TRAINING,
              name: "Willpower Training",
              description: "Use special techniques to improve your willpower",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.WILLPOWER_TRAINING) >
                  0
                );
              },
              effortRequired: new E.Z(1e7),
              attributesEffortEffect: ((dn = {}), (dn[c.RUNE_READING] = 1), dn),
              tags: ["mental", "actions", "empower", "mana"],
              baseAttributeMultiplierPerCast:
                ((pn = {}), (pn[c.WILLPOWER] = new E.Z(0.02)), pn),
              baseCostPerCast:
                ((fn = {}),
                (fn[i.ENERGY] = new E.Z(150)),
                (fn[i.KNOWLEDGE] = new E.Z(2e6)),
                fn),
              xpGain: new E.Z("8e+3"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1.01);
              },
            },
            {
              id: rt.RUNE_LESSONS,
              name: "Rune Lessons",
              description: "Take some rune mastery lessons",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.RUNE_SCIENCE) > 0
                );
              },
              effortRequired: new E.Z(5e7),
              attributesEffortEffect:
                ((gn = {}),
                (gn[c.RUNE_READING] = 0.75),
                (gn[c.WILLPOWER] = 0.25),
                gn),
              tags: ["mental", "actions", "empower", "runes"],
              baseAttributeMultiplierPerCast:
                ((mn = {}), (mn[c.RUNE_MASTERY] = new E.Z(0.05)), mn),
              baseCostPerCast:
                ((hn = {}),
                (hn[i.ENERGY] = new E.Z(250)),
                (hn[i.KNOWLEDGE] = new E.Z(5e7)),
                hn),
              xpGain: new E.Z("3.e+4"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1.01);
              },
            },
            {
              id: rt.CONDENSE_STASHES,
              name: "Condense Stashes",
              description:
                "Cast the spell over your coins to make it taking less place",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.ILLUSION_SPELLS) > 0
                );
              },
              effortRequired: new E.Z(1e5),
              attributesEffortEffect:
                ((yn = {}),
                (yn[c.RUNE_READING] = 0.05),
                (yn[c.MAGIC_KNOWLEDGE] = 0.95),
                yn),
              tags: ["magical", "spell", "illusion", "coins"],
              baseResourceCapPerCast:
                ((En = {}), (En[i.COINS] = new E.Z(0.1)), En),
              baseCostPerCast:
                ((An = {}),
                (An[i.ENERGY] = new E.Z(500)),
                (An[i.MANA] = new E.Z("1.e+9")),
                An),
              xpGain: new E.Z("5.e+4"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: rt.SPARK_HEART_INFUSION,
              name: "Heart Spark Infusion",
              description:
                "Use spark to enchant your heart, boosting your vitality",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.SPARK_INFUSION) > 0
                );
              },
              effortRequired: new E.Z(100),
              attributesEffortEffect:
                ((vn = {}), (vn[c.MAGIC_KNOWLEDGE] = 1), vn),
              tags: ["magical", "spell", "infusion", "vitality"],
              baseAttributeMultiplierPerCast:
                ((wn = {}), (wn[c.VITALITY] = new E.Z(0.05)), wn),
              baseCostPerCast:
                ((bn = {}),
                (bn[i.ENERGY] = new E.Z(500)),
                (bn[i.SPARK] = new E.Z(20)),
                (bn[i.KNOWLEDGE] = new E.Z("2.e+10")),
                bn),
              xpGain: new E.Z("1500"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1.01);
              },
            },
            {
              id: rt.SPARK_MUSCLE_INFUSION,
              name: "Muscle Spark Infusion",
              description:
                "Use spark to enchant your muscles, boosting your strength",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.SPARK_INFUSION) > 0
                );
              },
              effortRequired: new E.Z(100),
              attributesEffortEffect:
                ((In = {}), (In[c.MAGIC_KNOWLEDGE] = 1), In),
              tags: ["magical", "spell", "infusion", "strength"],
              baseAttributeMultiplierPerCast:
                ((Cn = {}), (Cn[c.STRENGTH] = new E.Z(0.05)), Cn),
              baseCostPerCast:
                ((Nn = {}),
                (Nn[i.ENERGY] = new E.Z(500)),
                (Nn[i.SPARK] = new E.Z(20)),
                (Nn[i.KNOWLEDGE] = new E.Z("2.e+10")),
                Nn),
              xpGain: new E.Z("1500"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1.01);
              },
            },
            {
              id: rt.SPARK_BRAIN_INFUSION,
              name: "Brain Spark Infusion",
              description:
                "Use magic to increase your intellect potential. Efficient, but dangerous.",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(
                    a.SPARK_MIND_INFUSION
                  ) > 0
                );
              },
              effortRequired: new E.Z(100),
              attributesEffortEffect:
                ((Tn = {}), (Tn[c.MAGIC_KNOWLEDGE] = 1), Tn),
              tags: ["magical", "spell", "infusion", "intellect"],
              baseAttributeMultiplierPerCast:
                ((Rn = {}), (Rn[c.RUNE_READING] = new E.Z(0.05)), Rn),
              baseCostPerCast:
                ((Ln = {}),
                (Ln[i.ENERGY] = new E.Z(1e3)),
                (Ln[i.SPARK] = new E.Z(100)),
                (Ln[i.KNOWLEDGE] = new E.Z("1.e+11")),
                Ln),
              xpGain: new E.Z("1500"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1.01);
              },
            },
            {
              id: rt.MAGIC_LESSONS,
              name: "Magic Lessons",
              description: "Train your capabilities of spell casting",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(
                    a.SPELLBINDING_TRAINING
                  ) > 0
                );
              },
              effortRequired: new E.Z(1e10),
              attributesEffortEffect:
                ((On = {}),
                (On[c.RUNE_READING] = 0.75),
                (On[c.WILLPOWER] = 0.25),
                On),
              tags: ["mental", "actions", "training", "spellbinding"],
              baseAttributeMultiplierPerCast:
                ((Sn = {}), (Sn[c.MAGIC_KNOWLEDGE] = new E.Z(0.05)), Sn),
              baseCostPerCast:
                ((Mn = {}),
                (Mn[i.ENERGY] = new E.Z(500)),
                (Mn[i.KNOWLEDGE] = new E.Z("1.e+12")),
                (Mn[i.MANA] = new E.Z("1.e+12")),
                Mn),
              xpGain: new E.Z("1.e+5"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1.01);
              },
            },
            {
              id: rt.IMPROVE_SPARK_STORAGE,
              name: "Improve Spark Storage",
              description: "Feel the electricity in your hands",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.BASIC_ELEMENTALISM) >
                  0
                );
              },
              effortRequired: new E.Z("5.e+12"),
              attributesEffortEffect:
                ((Pn = {}),
                (Pn[c.RUNE_READING] = 0.75),
                (Pn[c.WILLPOWER] = 0.25),
                Pn),
              tags: ["mental", "actions", "training", "knowledge"],
              baseResourceCapMultiplierPerCast:
                ((Zn = {}), (Zn[i.SPARK] = new E.Z(0.01)), Zn),
              baseCostPerCast:
                ((_n = {}),
                (_n[i.ENERGY] = new E.Z(2500)),
                (_n[i.KNOWLEDGE] = new E.Z("1.e+17")),
                _n),
              xpGain: new E.Z("1.e+4"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: rt.CONJURATION_TRAINING,
              name: "Conjuration Training",
              description: "Train your conjuration lore",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.CONJURATION_STUDY) >
                  0
                );
              },
              effortRequired: new E.Z("1.e+12"),
              attributesEffortEffect:
                ((Gn = {}),
                (Gn[c.VITALITY] = 0.75),
                (Gn[c.WILLPOWER] = 0.25),
                Gn),
              tags: ["mental", "actions", "training", "conjuration lore"],
              baseAttributeMultiplierPerCast:
                ((Dn = {}), (Dn[c.CONJURATION_LORE] = new E.Z(0.01)), Dn),
              baseCostPerCast:
                ((kn = {}),
                (kn[i.ENERGY] = new E.Z(2500)),
                (kn[i.MANA] = new E.Z("5.e+14")),
                kn),
              xpGain: new E.Z("1.e+5"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1.01);
              },
            },
            {
              id: rt.ENCHANT_REACTION,
              name: "Enchant Fingers",
              description:
                "Now that you know magic well enough and you understand your body and mentality, you can use new methods of self-improvement! Cast some spells on your fingers to make yourself more agile!",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.REFLEXES_TRAINING) >
                  0
                );
              },
              effortRequired: new E.Z("1.e+8"),
              attributesEffortEffect:
                ((Bn = {}), (Bn[c.MAGIC_KNOWLEDGE] = 1), Bn),
              tags: ["magical", "spell", "enhancement", "agility"],
              baseAttributeMultiplierPerCast:
                ((Un = {}), (Un[c.AGILITY] = new E.Z(0.01)), Un),
              baseCostPerCast:
                ((xn = {}),
                (xn[i.ENERGY] = new E.Z(25e3)),
                (xn[i.MANA] = new E.Z("1.e+17")),
                xn),
              xpGain: new E.Z("5.e+7"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1.01);
              },
            },
            {
              id: rt.SPELL_SINGING,
              name: "Spell-singing courses",
              description: "Train your spell mastery even more",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(
                    a.SPELLSINGING_TRAINING
                  ) > 0
                );
              },
              effortRequired: new E.Z("1.e+14"),
              attributesEffortEffect:
                ((Hn = {}),
                (Hn[c.RUNE_READING] = 0.75),
                (Hn[c.WILLPOWER] = 0.25),
                Hn),
              tags: ["mental", "actions", "training", "spellbinding"],
              baseAttributeMultiplierPerCast:
                ((Wn = {}), (Wn[c.MAGIC_KNOWLEDGE] = new E.Z(0.02)), Wn),
              baseCostPerCast:
                ((Yn = {}),
                (Yn[i.ENERGY] = new E.Z(25e3)),
                (Yn[i.KNOWLEDGE] = new E.Z("1.e+22")),
                Yn),
              xpGain: new E.Z("5.e+7"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1.01);
              },
            },
            {
              id: rt.FORTITUDE,
              name: "Fortitude",
              description:
                "Make your spirits invincible, and your will undeniable",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.FORTITUDE_TRAINING) >
                  0
                );
              },
              effortRequired: new E.Z("1.e+14"),
              attributesEffortEffect:
                ((qn = {}),
                (qn[c.RUNE_READING] = 0.75),
                (qn[c.VITALITY] = 0.25),
                qn),
              tags: ["mental", "actions", "training", "willpower"],
              baseAttributeMultiplierPerCast:
                ((Xn = {}), (Xn[c.WILLPOWER] = new E.Z(0.02)), Xn),
              baseCostPerCast:
                ((Kn = {}),
                (Kn[i.ENERGY] = new E.Z(62500)),
                (Kn[i.KNOWLEDGE] = new E.Z("1.e+23")),
                Kn),
              xpGain: new E.Z("5.e+8"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1.01);
              },
            },
            {
              id: rt.CONJURATION_SINGING,
              name: "Conjuration Singing",
              description: "Train your conjuration lore",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(
                    a.CONJURATION_SINGING
                  ) > 0
                );
              },
              effortRequired: new E.Z("1.e+13"),
              attributesEffortEffect:
                ((Fn = {}), (Fn[c.MAGIC_KNOWLEDGE] = 1), Fn),
              tags: ["mental", "actions", "training", "conjuration lore"],
              baseAttributeMultiplierPerCast:
                ((jn = {}), (jn[c.CONJURATION_LORE] = new E.Z(0.01)), jn),
              baseCostPerCast:
                ((Vn = {}),
                (Vn[i.ENERGY] = new E.Z(25e5)),
                (Vn[i.MANA] = new E.Z("1.e+22")),
                Vn),
              xpGain: new E.Z("1.e+7"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1.01);
              },
            },
            {
              id: rt.CONJURE_SPARK,
              name: "Conjure Spark",
              description:
                "Spend your time making ritual, increasing your mana output",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.SPARK_GENERATION) > 0
                );
              },
              effortRequired: new E.Z(1e7),
              attributesEffortEffect:
                ((zn = {}),
                (zn[c.RUNE_READING] = 0.01),
                (zn[c.MAGIC_KNOWLEDGE] = 0.99),
                zn),
              tags: ["magical", "spell", "conjuration", "spark"],
              baseResourcePerCast:
                ((Qn = {}), (Qn[i.SPARK] = new E.Z(0.1)), Qn),
              baseCostPerCast:
                ((Jn = {}),
                (Jn[i.ENERGY] = new E.Z(250)),
                (Jn[i.MANA] = new E.Z("5.e+9")),
                Jn),
              xpGain: new E.Z("5.e+4"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: rt.CONJURE_WOOD,
              name: "Conjure Wood",
              description: "Conjure some pile of raw wood",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.WOODWORKING) > 0
                );
              },
              effortRequired: new E.Z(1e8),
              attributesEffortEffect:
                (($n = {}),
                ($n[c.RUNE_READING] = 0.01),
                ($n[c.MAGIC_KNOWLEDGE] = 0.99),
                $n),
              tags: ["magical", "spell", "conjuration", "wood"],
              baseResourcePerCast:
                ((ei = {}), (ei[i.WOOD] = new E.Z(0.25)), ei),
              baseCostPerCast:
                ((ti = {}),
                (ti[i.ENERGY] = new E.Z(500)),
                (ti[i.MANA] = new E.Z("1.e+10")),
                ti),
              xpGain: new E.Z("1.e+5"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: rt.CONJURE_STONE,
              name: "Conjure Stone",
              description: "Conjure some stone",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.STONEWORKING) > 0
                );
              },
              effortRequired: new E.Z(5e8),
              attributesEffortEffect:
                ((ni = {}),
                (ni[c.RUNE_READING] = 0.01),
                (ni[c.MAGIC_KNOWLEDGE] = 0.99),
                ni),
              tags: ["magical", "spell", "conjuration", "stone"],
              baseResourcePerCast:
                ((ii = {}), (ii[i.STONE] = new E.Z(0.25)), ii),
              baseCostPerCast:
                ((ri = {}),
                (ri[i.ENERGY] = new E.Z(1e3)),
                (ri[i.MANA] = new E.Z("1.e+11")),
                ri),
              xpGain: new E.Z("2.e+5"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: rt.CONJURE_IRON,
              name: "Conjure Iron",
              description: "Conjure iron ore",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.METALWORKING) > 0
                );
              },
              effortRequired: new E.Z(25e8),
              attributesEffortEffect:
                ((oi = {}),
                (oi[c.RUNE_READING] = 0.01),
                (oi[c.MAGIC_KNOWLEDGE] = 0.99),
                oi),
              tags: ["magical", "spell", "conjuration", "iron"],
              baseResourcePerCast:
                ((ai = {}), (ai[i.IRON_ORE] = new E.Z(0.25)), ai),
              baseCostPerCast:
                ((ui = {}),
                (ui[i.ENERGY] = new E.Z(2500)),
                (ui[i.MANA] = new E.Z("1.e+12")),
                ui),
              xpGain: new E.Z("5.e+5"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: rt.CRAFT,
              name: "Craft",
              description: "Devote some time to crafting",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.WOODWORKING) > 0
                );
              },
              effortRequired: new E.Z(1e8),
              attributesEffortEffect: ((si = {}), (si[c.STRENGTH] = 1), si),
              tags: ["technical", "crafting"],
              baseResourcePerCast:
                ((ci = {}), (ci[i.CRAFTSMANSHIP] = new E.Z(1)), ci),
              baseCostPerCast: ((li = {}), (li[i.ENERGY] = new E.Z(2500)), li),
              xpGain: new E.Z("1.e+6"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: rt.FIGHT,
              name: "Fight",
              description:
                "Spent some time fighting. Produces fighting actions",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.BATTLE_MASTERY) > 0
                );
              },
              effortRequired: new E.Z(1),
              attributesEffortEffect: ((di = {}), (di[c.STAMINA] = 1), di),
              tags: ["technical", "fighting", "battle"],
              baseResourcePerCast:
                ((pi = {}), (pi[i.FIGHTING_ACTIONS] = new E.Z(1)), pi),
              baseCostPerCast: ((fi = {}), (fi[i.ENERGY] = new E.Z(5e3)), fi),
              xpGain: new E.Z("1.e+7"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: rt.WEAPON_MASTERY,
              name: "Weapon Mastery Training",
              description:
                "Spent some time to train your weapons mastery with greatest magic arena warriors. However, you should pay for this lessons with most precious resource in mages city - your knowledge. ",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.BATTLE_TRAINING) > 0
                );
              },
              effortRequired: new E.Z("1.e+13"),
              attributesEffortEffect: ((gi = {}), (gi[c.STRENGTH] = 1), gi),
              tags: [
                "physical",
                "fighting",
                "damage",
                "attack",
                "battle",
                "battle-training",
              ],
              baseBattleAttributeMultiplierPerCast:
                ((mi = {}), (mi[l.PHYSICAL_DAMAGE] = new E.Z(0.01)), mi),
              baseCostPerCast:
                ((hi = {}),
                (hi[i.ENERGY] = new E.Z(25e3)),
                (hi[i.KNOWLEDGE] = new E.Z("2.e+17")),
                hi),
              xpGain: new E.Z("3.e+6"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: rt.BATTLE_ENDURANCE,
              name: "Battle Endurance Training",
              description:
                "Use your magic knowledge to enchant your body and heart",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.BATTLE_TRAINING) > 0
                );
              },
              effortRequired: new E.Z("1.e+13"),
              attributesEffortEffect: ((yi = {}), (yi[c.STRENGTH] = 1), yi),
              tags: [
                "physical",
                "fighting",
                "hp",
                "defensive",
                "battle",
                "battle-training",
              ],
              baseBattleAttributeMultiplierPerCast:
                ((Ei = {}),
                (Ei[l.MAX_HP] = new E.Z(0.01)),
                (Ei[l.HP_REGEN] = new E.Z(0.002)),
                Ei),
              baseCostPerCast:
                ((Ai = {}),
                (Ai[i.ENERGY] = new E.Z(25e3)),
                (Ai[i.KNOWLEDGE] = new E.Z("2.e+17")),
                Ai),
              xpGain: new E.Z("3.e+6"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: rt.EVOCATION_TRAINING,
              name: "Evocation Training",
              description:
                "Train your destructive magic with best mages in the city",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.EVOCATION_SPELLS) > 0
                );
              },
              effortRequired: new E.Z("1.e+13"),
              attributesEffortEffect: ((vi = {}), (vi[c.RUNE_READING] = 1), vi),
              tags: [
                "magical",
                "fighting",
                "damage",
                "attack",
                "battle",
                "battle-training",
              ],
              baseBattleAttributeMultiplierPerCast:
                ((wi = {}),
                (wi[l.FIRE_DAMAGE] = new E.Z(0.01)),
                (wi[l.MAGICAL_DAMAGE] = new E.Z(0.01)),
                wi),
              baseCostPerCast:
                ((bi = {}),
                (bi[i.ENERGY] = new E.Z(25e3)),
                (bi[i.KNOWLEDGE] = new E.Z("2.e+17")),
                bi),
              xpGain: new E.Z("3.e+6"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
          ],
          bo = function () {
            return (
              (bo =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, r) &&
                        (e[r] = t[r]);
                  return e;
                }),
              bo.apply(this, arguments)
            );
          },
          Io = function (e, t) {
            var n = {};
            return (
              Object.keys(bo(bo({}, e), t)).forEach(function (i) {
                n[i] = (e[i] || new E.Z(0)).minus(t[i] || new E.Z(0));
              }),
              n
            );
          },
          Co = function (e, t) {
            void 0 === t && (t = new E.Z(1e-14));
            var n = {};
            return (
              Object.keys(e).forEach(function (i) {
                e[i].abs().lessThanOrEqualTo(t)
                  ? (n[i] = new E.Z(0))
                  : (n[i] = e[i]);
              }),
              n
            );
          },
          No = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function i() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((i.prototype = n.prototype), new i()));
            };
          })(),
          To = function () {
            return (
              (To =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, r) &&
                        (e[r] = t[r]);
                  return e;
                }),
              To.apply(this, arguments)
            );
          },
          Ro = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.actions = []),
                (t.lists = { lists: [] }),
                (t.listAssertsCached = {}),
                (t.actionsCached = {}),
                (t.diminishReturns = {}),
                (t.isUnlocked = !1),
                (t.autoStranger = !1),
                (t.lastReassert = 0),
                (t.ttpMark = 0),
                (t.actionEffortsCached = {}),
                (t.checkSum = 0),
                t.workDispatcher.on("[actions] save list", function (e) {
                  console.log("do save list", e), t.editList(e);
                }),
                t.workDispatcher.on("[actions] list to ui", function (e) {
                  console.log("do set list to ui", e), t.listToUI(e);
                }),
                t.workDispatcher.on("[actions] run list", function (e) {
                  console.log("do run list", e), t.runList(e.id);
                }),
                t.workDispatcher.on("[actions] run quick list", function (e) {
                  console.log("do run quick list", e),
                    t.createQuickList(e.id, !0);
                }),
                t.workDispatcher.on("[actions] delete list", function (e) {
                  console.log("do delete list", e), t.deleteList(e.id);
                }),
                t.workDispatcher.on("[actions] stop list", function (e) {
                  console.log("do stop list", e), t.stopList();
                }),
                t.workDispatcher.on(
                  "[actions] toggle autostranger",
                  function (e) {
                    console.log("do autostranger", e),
                      (t.autoStranger = !t.autoStranger);
                  }
                ),
                t
              );
            }
            return (
              No(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                var t;
                (this.actions =
                  (null == e
                    ? void 0
                    : e.actions.map(function (e) {
                        return To(To({}, e), {
                          numPerformed: N(e.numPerformed)
                            ? new E.Z(e.numPerformed)
                            : new E.Z(0),
                          purePerformed: N(e.purePerformed)
                            ? new E.Z(e.purePerformed)
                            : new E.Z(
                                N(e.numPerformed)
                                  ? new E.Z(e.numPerformed)
                                  : new E.Z(0)
                              ),
                        });
                      })) || []),
                  (this.lists = (null == e ? void 0 : e.actionLists) || {
                    selectedId: void 0,
                    selectedProgress: 0,
                    lists: [],
                  }),
                  (this.isUnlocked =
                    null !== (t = null == e ? void 0 : e.isUnlocked) &&
                    void 0 !== t &&
                    t),
                  (this.runningState = e.running
                    ? {
                        id: e.running.id,
                        progress: new E.Z(e.running.progress),
                        isPaused: e.running.isPaused,
                        pauseCd: 0,
                        efficiency: 1,
                      }
                    : void 0),
                  (this.autoStranger =
                    (null == e ? void 0 : e.autoStranger) || !1);
              }),
              (t.prototype.exportData = function () {
                return {
                  actions: this.actions.map(function (e) {
                    return To(To({}, e), {
                      numPerformed: e.numPerformed.toPrecision(18),
                      purePerformed: e.purePerformed.toPrecision(18),
                    });
                  }),
                  actionLists: this.lists,
                  isUnlocked: this.isUnlocked,
                  running: this.runningState
                    ? {
                        id: this.runningState.id,
                        progress: this.runningState.progress.toPrecision(18),
                        isPaused: this.runningState.isPaused,
                      }
                    : void 0,
                  autoStranger: this.autoStranger,
                };
              }),
              (t.prototype.regenerateCache = function () {
                var e,
                  t,
                  n,
                  i = this;
                performance.now(),
                  this.lists.lists.forEach(function (e) {
                    var t;
                    ((null === (t = i.runningState) || void 0 === t
                      ? void 0
                      : t.id) !== e.id &&
                      i.listAssertsCached[e.id]) ||
                      i.calculateList(e, !0);
                  }),
                  (null === (e = this.runningState) || void 0 === e
                    ? void 0
                    : e.id) &&
                    !this.listAssertsCached[
                      null === (t = this.runningState) || void 0 === t
                        ? void 0
                        : t.id
                    ] &&
                    (console.error(
                      "Invalid list running: ",
                      null === (n = this.runningState) || void 0 === n
                        ? void 0
                        : n.id
                    ),
                    this.stopList()),
                  (this.ttpMark = 0);
                var r = new E.Z(0),
                  o = {};
                wo.forEach(function (e) {
                  var t = i.actions.find(function (t) {
                    return t.id === e.id;
                  });
                  (i.diminishReturns[e.id] = i.getDiminishReturn(e, t)),
                    (i.actionsCached[e.id] = i.processToUI(e)),
                    t &&
                      ((o[e.name] = t.purePerformed.mul(e.xpGain)),
                      (r = r.plus(o[e.name])));
                }),
                  Zl.statistics.regenerateActionXP(o, r);
              }),
              (t.prototype.dataFromCache = function () {
                var e = this;
                return Object.values(this.actionsCached).map(function (t) {
                  return (
                    t.isUnlocked &&
                      e.isUnlocked &&
                      Zl.newNotifications.registerNotification(
                        "city:actions:action:".concat(t.id)
                      ),
                    t
                  );
                });
              }),
              (t.prototype.dataToUI = function () {
                var e,
                  t = this;
                return {
                  actions: this.dataFromCache(),
                  isUnlocked: this.isUnlocked,
                  lists: this.lists.lists.map(function (e) {
                    return t.processListToUI(e);
                  }),
                  running: this.processRunningToUI(),
                  listEdited: this.listEdited
                    ? this.processCalculationsToUI(this.listEdited)
                    : void 0,
                  autoStranger:
                    null !== (e = this.autoStranger) && void 0 !== e && e,
                };
              }),
              (t.prototype.processRunningToUI = function () {
                var e = this;
                if (this.runningState) {
                  var t = this.listAssertsCached[this.runningState.id],
                    n = this.lists.lists.find(function (t) {
                      var n;
                      return (
                        t.id ===
                        (null === (n = e.runningState) || void 0 === n
                          ? void 0
                          : n.id)
                      );
                    });
                  if (n) {
                    var i = t.effort.div(this.runningState.efficiency),
                      r = t.effort.greaterThanOrEqualTo(1)
                        ? L(
                            i.minus(
                              this.runningState.progress.div(
                                this.runningState.efficiency
                              )
                            )
                          )
                        : L(i, !1);
                    return {
                      id: this.runningState.id,
                      name: n.name,
                      progress: i.greaterThanOrEqualTo(1)
                        ? this.runningState.progress
                            .mul(100)
                            .div(t.effort)
                            .toPrecision(2)
                        : "100",
                      eta: this.runningState.isPaused ? "Paused" : r,
                    };
                  }
                }
              }),
              (t.prototype.getCostPerCast = function (e, t, n) {
                return (
                  void 0 === t && (t = 1),
                  e.baseCostPerCast
                    ? Object.entries(e.baseCostPerCast).map(function (e) {
                        var i = e[0],
                          r = e[1];
                        return {
                          id: i,
                          amount: r.mul(t).div(n || new E.Z(1)),
                          amountOriginal: r.mul(t),
                        };
                      })
                    : []
                );
              }),
              (t.prototype.getGainPerCast = function (e, t, n) {
                return (
                  void 0 === t && (t = 1),
                  e.baseResourcePerCast
                    ? Object.entries(e.baseResourcePerCast).map(function (e) {
                        var i = e[0],
                          r = e[1];
                        return {
                          id: i,
                          amount: r.mul(t).div(n || new E.Z(1)),
                          amountOriginal: r.mul(t),
                        };
                      })
                    : []
                );
              }),
              (t.prototype.getGainMultPerCast = function (e, t, n) {
                return (
                  void 0 === t && (t = 1),
                  e.baseResourceMultiplierPerCast
                    ? Object.entries(e.baseResourceMultiplierPerCast).map(
                        function (e) {
                          return {
                            id: e[0],
                            amount: e[1].mul(t).div(n || new E.Z(1)),
                          };
                        }
                      )
                    : []
                );
              }),
              (t.prototype.getCapGainPerCast = function (e, t, n) {
                return (
                  void 0 === t && (t = 1),
                  e.baseResourceCapPerCast
                    ? Object.entries(e.baseResourceCapPerCast).map(function (
                        e
                      ) {
                        return {
                          id: e[0],
                          amount: e[1].mul(t).div(n || new E.Z(1)),
                        };
                      })
                    : []
                );
              }),
              (t.prototype.getCapMultPerCast = function (e, t, n) {
                return (
                  void 0 === t && (t = 1),
                  e.baseResourceCapMultiplierPerCast
                    ? Object.entries(e.baseResourceCapMultiplierPerCast).map(
                        function (e) {
                          return {
                            id: e[0],
                            amount: e[1].mul(t).div(n || new E.Z(1)),
                          };
                        }
                      )
                    : []
                );
              }),
              (t.prototype.getAttributePerCast = function (e, t, n) {
                return (
                  void 0 === t && (t = 1),
                  e.baseAttributePerCats
                    ? Object.entries(e.baseAttributePerCats).map(function (e) {
                        return {
                          id: e[0],
                          amount: e[1].mul(t).div(n || new E.Z(1)),
                        };
                      })
                    : []
                );
              }),
              (t.prototype.getAttributeMultPerCast = function (e, t, n) {
                return (
                  void 0 === t && (t = 1),
                  e.baseAttributeMultiplierPerCast
                    ? Object.entries(e.baseAttributeMultiplierPerCast).map(
                        function (e) {
                          return {
                            id: e[0],
                            amount: e[1]
                              .mul(t)
                              .div(n || new E.Z(1))
                              .plus(1),
                          };
                        }
                      )
                    : []
                );
              }),
              (t.prototype.getBattleAttributePerCast = function (e, t, n) {
                return (
                  void 0 === t && (t = 1),
                  e.baseBattleAttributePerCats
                    ? Object.entries(e.baseBattleAttributePerCats).map(
                        function (e) {
                          return {
                            id: e[0],
                            amount: e[1].mul(t).div(n || new E.Z(1)),
                          };
                        }
                      )
                    : []
                );
              }),
              (t.prototype.getBattleAttributeMultPerCast = function (e, t, n) {
                return (
                  void 0 === t && (t = 1),
                  e.baseBattleAttributeMultiplierPerCast
                    ? Object.entries(
                        e.baseBattleAttributeMultiplierPerCast
                      ).map(function (e) {
                        return {
                          id: e[0],
                          amount: e[1]
                            .mul(t)
                            .div(n || new E.Z(1))
                            .plus(1),
                        };
                      })
                    : []
                );
              }),
              (t.prototype.getTagMultiplier = function (e) {
                var t = new E.Z(1);
                return (
                  e.tags.includes("physical") &&
                    (t = t.mul(Zl.city.reincarnation.getBonus(ue.PHYSICAL))),
                  e.tags.includes("mental") &&
                    (t = t.mul(Zl.city.reincarnation.getBonus(ue.MENTAL))),
                  e.tags.includes("spell") &&
                    (t = t.mul(Zl.city.reincarnation.getBonus(ue.MAGICAL))),
                  e.tags.includes("conjuration") &&
                    (t = t.mul(
                      E.Z.max(
                        Zl.personage.attributes.getAttribute(
                          c.CONJURATION_LORE
                        ),
                        1
                      )
                    )),
                  t
                );
              }),
              (t.prototype.getCap = function (e) {
                var t = this.getTagMultiplier(e);
                return new E.Z(0.01).div(
                  E.Z.max(
                    Zl.personage.attributes.getAttribute(c.AGILITY),
                    new E.Z(1)
                  ).mul(t)
                );
              }),
              (t.prototype.getRealEffort = function (e, t, n) {
                void 0 === t && (t = 1), void 0 === n && (n = !1);
                var i = Object.entries(e.attributesEffortEffect).reduce(
                    function (e, t) {
                      return e.plus(
                        w(
                          Zl.personage.attributes.getAttribute(t[0]),
                          new E.Z(0.75)
                        ).mul(t[1])
                      );
                    },
                    new E.Z(0)
                  ),
                  r = Object.entries(e.attributesEffortEffect).reduce(function (
                    e,
                    t
                  ) {
                    return e.plus(t[1]);
                  },
                  new E.Z(0));
                r.lessThan(1) && (i = i.plus(1).sub(r)),
                  i.lessThanOrEqualTo(0) && (i = new E.Z(1));
                var o = w(this.getTagMultiplier(e), new E.Z(0.25)),
                  a = e.effortRequired.mul(t).div(i.mul(o)),
                  u = n ? 0 : this.getCap(e).mul(t);
                return E.Z.max(a, u);
              }),
              (t.prototype.getDiminishCached = function (e, t) {
                return (
                  this.diminishReturns[e.id] ||
                    (this.diminishReturns[e.id] = this.getDiminishReturn(e, t)),
                  this.diminishReturns[e.id]
                );
              }),
              (t.prototype.getAverageDiminish = function (e, t, n) {
                var i = this.getDiminishCached(e, t);
                if (
                  n.mul(i).div(t.numPerformed.plus(1)).lessThanOrEqualTo(0.1) ||
                  n.lessThan(10)
                )
                  return i;
                var r = this.getDiminishReturn(
                    e,
                    To(To({}, t), { numPerformed: t.numPerformed.plus(n) })
                  ),
                  o = this.getDiminishReturn(
                    e,
                    To(To({}, t), {
                      numPerformed: t.numPerformed.plus(n.div(2)),
                    })
                  ),
                  a = i.plus(r).plus(o.mul(4)).div(6),
                  u = t.numPerformed
                    .plus(0.1)
                    .mul(0.1)
                    .plus(1)
                    .div(n.plus(0.1));
                return (
                  console.log("modded: ", a.toNumber(), u.toNumber()),
                  E.Z.min(a, u)
                );
              }),
              (t.prototype.getDiminishReturn = function (e, t) {
                var n = null == t ? void 0 : t.numPerformed;
                if (!n || (null == n ? void 0 : n.lessThan(1)))
                  return new E.Z(1);
                var i = e.getDiminishReturnEffect(Zl);
                return i.lessThanOrEqualTo(1)
                  ? new E.Z(1)
                  : i.pow(n.pow(0.5).neg());
              }),
              (t.prototype.calculateAdditionalActionsRequired = function (
                e,
                t,
                n
              ) {
                var i, r, o, a, u, s, c, l, d, p, f, g, m;
                void 0 === n && (n = 0),
                  e.additionalActionsRequired ||
                    (e.additionalActionsRequired = {}),
                  n++;
                for (
                  var h = function (n, m) {
                      if (m.lessThan(0)) {
                        for (
                          var h = Object.values(t).filter(function (e) {
                              return (
                                e.unlockCondition(Zl) &&
                                e.baseResourcePerCast &&
                                e.baseResourcePerCast[n]
                              );
                            }),
                            A = 1 / 0,
                            v = new E.Z("1.e+500"),
                            w = null,
                            b = 0,
                            I = Zl.resources.getResourceMultiplier(n),
                            C = 0,
                            N = h;
                          C < N.length;
                          C++
                        ) {
                          var T = N[C],
                            R = (
                              (null === (i = T.baseResourcePerCast) ||
                              void 0 === i
                                ? void 0
                                : i[n]) || new E.Z(0)
                            ).mul(I),
                            L = Math.ceil(m.negated().div(R).toNumber()),
                            O = y.actionEffortsCached[T.id].mul(L);
                          console.log(
                            "Missing: "
                              .concat(m.toNumber(), " of ")
                              .concat(n, ". Checking: ")
                              .concat(T.id, ". Required: ")
                              .concat(L, " (time: ")
                              .concat(O, ")")
                          ),
                            O.lessThan(v) &&
                              ((A = L), (v = O), (w = T.id), (b = A));
                        }
                        if (null !== w && A !== 1 / 0) {
                          e.additionalActionsRequired[w] =
                            +(e.additionalActionsRequired[w] || 0) + A;
                          var S =
                            (null ===
                              (o =
                                null === (r = t[w]) || void 0 === r
                                  ? void 0
                                  : r.baseResourcePerCast) || void 0 === o
                              ? void 0
                              : o[n]) || new E.Z(0);
                          if (
                            ((e.balanceCalculated[n] =
                              null === (a = e.balanceCalculated[n]) ||
                              void 0 === a
                                ? void 0
                                : a.plus(S.mul(b).mul(I))),
                            console.log(
                              "New balance for "
                                .concat(n, " is ")
                                .concat(
                                  null === (u = e.balanceCalculated[n]) ||
                                    void 0 === u
                                    ? void 0
                                    : u.toNumber(),
                                  ", after adding "
                                )
                                .concat(b, " of ")
                                .concat(w)
                            ),
                            null === (s = t[w]) || void 0 === s
                              ? void 0
                              : s.baseCostPerCast)
                          )
                            for (var M in null === (c = t[w]) || void 0 === c
                              ? void 0
                              : c.baseCostPerCast)
                              console.log(
                                "Prev balance for " +
                                  M +
                                  " is " +
                                  (null === (l = e.balanceCalculated[M]) ||
                                  void 0 === l
                                    ? void 0
                                    : l.toNumber())
                              ),
                                (e.balanceCalculated[M] =
                                  null === (d = e.balanceCalculated[M]) ||
                                  void 0 === d
                                    ? void 0
                                    : d.sub(
                                        (
                                          (null ===
                                            (f =
                                              null === (p = t[w]) ||
                                              void 0 === p
                                                ? void 0
                                                : p.baseCostPerCast) ||
                                          void 0 === f
                                            ? void 0
                                            : f[M]) || new E.Z(0)
                                        ).mul(b)
                                      )),
                                console.log(
                                  "New balance for "
                                    .concat(M, " is ")
                                    .concat(
                                      null === (g = e.balanceCalculated[M]) ||
                                        void 0 === g
                                        ? void 0
                                        : g.toNumber(),
                                      ", after adding "
                                    )
                                    .concat(b, " of ")
                                    .concat(w)
                                );
                        }
                      }
                    },
                    y = this,
                    A = 0,
                    v = Object.entries(e.balanceCalculated);
                  A < v.length;
                  A++
                ) {
                  var w = v[A];
                  h(w[0], w[1]);
                }
                if (
                  n < 100 &&
                  Object.entries(e.balanceCalculated).some(function (e) {
                    var n = e[0];
                    return (
                      e[1].lessThan(0) &&
                      Object.values(t).some(function (e) {
                        var t;
                        return (
                          e.unlockCondition(Zl) &&
                          (null === (t = e.baseResourcePerCast) || void 0 === t
                            ? void 0
                            : t[n])
                        );
                      })
                    );
                  })
                )
                  return (
                    console.log(
                      "re-assert due to: ",
                      e.balanceCalculated,
                      e.additionalActionsRequired
                    ),
                    this.calculateAdditionalActionsRequired(e, t, n)
                  );
                for (var b in (console.log(
                  "finalOptimals: ",
                  e.additionalActionsRequired
                ),
                e.additionalActionsRequired))
                  e.additionalActionsRequired[b] += +(
                    (null === (m = e.originalActions) || void 0 === m
                      ? void 0
                      : m[b]) || 0
                  );
                return e;
              }),
              (t.prototype.calculateList = function (e, t, n) {
                var r,
                  o = this;
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                var a = wo.reduce(function (e, t) {
                  return (e[t.id] = t), e;
                }, {});
                e.actions = e.actions.filter(function (e) {
                  return a[e.id];
                });
                var u = e.actions.reduce(function (e, t) {
                    return e.plus(o.getRealEffort(a[t.id], t.number).mul(1));
                  }, new E.Z(0)),
                  s = e.actions.reduce(function (e, t) {
                    return (
                      (e[t.id] = o
                        .getRealEffort(a[t.id], t.number)
                        .div(u)
                        .toNumber()),
                      e
                    );
                  }, {}),
                  c = {
                    effort: u,
                    attributeGain: {},
                    attributeMultGain: {},
                    battleAttributeGain: {},
                    battleAttributeMultGain: {},
                    resourceGain: {},
                    resourceGainMult: {},
                    resourceCost: {},
                    resourceCapGain: {},
                    resourceCapMult: {},
                    balanceCalculated: {},
                    canBeRunned: !0,
                    impactingAttributes: {},
                    timeBreakdowns: s,
                    requiredRestChange: 0,
                    originalActions: {},
                  },
                  l = e.actions.reduce(function (e, t) {
                    var n = o
                      .getCostPerCast(a[t.id], t.number)
                      .find(function (e) {
                        return e.id === i.ENERGY;
                      });
                    return n && (e = e.plus(n.amount)), e;
                  }, new E.Z(0)),
                  d = a[rt.REST]
                    ? (null ===
                        (r = this.getGainPerCast(a[rt.REST], 1).find(function (
                          e
                        ) {
                          return e.id === i.ENERGY;
                        })) || void 0 === r
                        ? void 0
                        : r.amount.mul(
                            Zl.resources.getResourceMultiplier(i.ENERGY)
                          )) || new E.Z(0.1)
                    : new E.Z(1);
                c.requiredRestChange = Math.ceil(l.div(d).toNumber());
                var p = {},
                  f = {};
                e.actions.forEach(function (e) {
                  if (a[e.id]) {
                    a[e.id].unlockCondition(Zl) || (c.canBeRunned = !1);
                    var t = Object.entries(
                      a[e.id].attributesEffortEffect
                    ).reduce(function (e, t) {
                      return e.plus(t[1]);
                    }, new E.Z(0));
                    c.originalActions || (c.originalActions = {}),
                      (c.originalActions[e.id] = e.number);
                    var n = o
                        .getDiminishCached(
                          a[e.id],
                          o.actions.find(function (t) {
                            return t.id === e.id;
                          })
                        )
                        .mul(e.number),
                      i = o.getAttributePerCast(a[e.id], n, u),
                      r = o.getGainPerCast(a[e.id], n, u),
                      s = o.getGainMultPerCast(a[e.id], n, u),
                      l = o.getCapGainPerCast(a[e.id], n, u),
                      d = o.getCapMultPerCast(a[e.id], n, u),
                      g = o.getCostPerCast(a[e.id], e.number, u),
                      m = o.getAttributeMultPerCast(a[e.id], n, u),
                      h = Object.entries(a[e.id].attributesEffortEffect).reduce(
                        function (e, t) {
                          return e.plus(
                            Zl.personage.attributes.getAttribute(t[0]).mul(t[1])
                          );
                        },
                        new E.Z("1.e-3000")
                      ),
                      y = Object.entries(
                        a[e.id].attributesEffortEffect || {}
                      ).map(function (e) {
                        var t = e[0],
                          n = e[1];
                        return {
                          id: t,
                          value: 100 * n,
                          weighted: Zl.personage.attributes
                            .getAttribute(t)
                            .mul(n)
                            .div(h)
                            .toNumber(),
                        };
                      });
                    i.forEach(function (e) {
                      var t;
                      c.attributeGain[e.id] ||
                        (c.attributeGain[e.id] = new E.Z(0)),
                        (c.attributeGain[e.id] =
                          null === (t = c.attributeGain[e.id]) || void 0 === t
                            ? void 0
                            : t.plus(e.amount));
                    }),
                      m.forEach(function (e) {
                        var t;
                        c.attributeMultGain[e.id] ||
                          (c.attributeMultGain[e.id] = new E.Z(1)),
                          (c.attributeMultGain[e.id] =
                            null === (t = c.attributeMultGain[e.id]) ||
                            void 0 === t
                              ? void 0
                              : t.mul(e.amount));
                      }),
                      r.forEach(function (e) {
                        var t, n;
                        c.resourceGain[e.id] ||
                          (c.resourceGain[e.id] = new E.Z(0)),
                          (c.resourceGain[e.id] =
                            null === (t = c.resourceGain[e.id]) || void 0 === t
                              ? void 0
                              : t.plus(e.amount)),
                          p[e.id] || (p[e.id] = new E.Z(0)),
                          (p[e.id] =
                            null === (n = p[e.id]) || void 0 === n
                              ? void 0
                              : n.plus(e.amountOriginal));
                      }),
                      s.forEach(function (e) {
                        var t;
                        c.resourceGainMult[e.id] ||
                          (c.resourceGainMult[e.id] = new E.Z(1)),
                          (c.resourceGainMult[e.id] =
                            null === (t = c.resourceGainMult[e.id]) ||
                            void 0 === t
                              ? void 0
                              : t.mul(e.amount));
                      }),
                      l.forEach(function (e) {
                        var t;
                        c.resourceCapGain[e.id] ||
                          (c.resourceCapGain[e.id] = new E.Z(0)),
                          (c.resourceCapGain[e.id] =
                            null === (t = c.resourceCapGain[e.id]) ||
                            void 0 === t
                              ? void 0
                              : t.plus(e.amount));
                      }),
                      d.forEach(function (e) {
                        var t;
                        c.resourceCapMult[e.id] ||
                          (c.resourceCapMult[e.id] = new E.Z(1)),
                          (c.resourceCapMult[e.id] =
                            null === (t = c.resourceCapMult[e.id]) ||
                            void 0 === t
                              ? void 0
                              : t.mul(e.amount));
                      }),
                      g.forEach(function (e) {
                        var t, n;
                        c.resourceCost[e.id] ||
                          (c.resourceCost[e.id] = new E.Z(0)),
                          (c.resourceCost[e.id] =
                            null === (t = c.resourceCost[e.id]) || void 0 === t
                              ? void 0
                              : t.plus(e.amount)),
                          f[e.id] || (f[e.id] = new E.Z(0)),
                          (f[e.id] =
                            null === (n = f[e.id]) || void 0 === n
                              ? void 0
                              : n.plus(e.amountOriginal));
                      }),
                      y.forEach(function (n) {
                        var i;
                        c.impactingAttributes[n.id] ||
                          (c.impactingAttributes[n.id] = new E.Z(0)),
                          (c.impactingAttributes[n.id] =
                            null === (i = c.impactingAttributes[n.id]) ||
                            void 0 === i
                              ? void 0
                              : i.plus(
                                  o
                                    .getRealEffort(a[e.id], e.number)
                                    .mul(100 * n.weighted)
                                    .div(u.mul(t))
                                ));
                      });
                  }
                });
                var g = {};
                if (
                  (Object.entries(c.resourceGain).forEach(function (e) {
                    var t = e[0],
                      n = e[1];
                    g[t] = n.mul(Zl.resources.getResourceMultiplier(t));
                  }),
                  (c.balanceCalculated = Co(Io(g, c.resourceCost))),
                  n)
                ) {
                  var m = Object.values(i).reduce(function (e, t) {
                      var n,
                        i =
                          (null === (n = p[t]) || void 0 === n
                            ? void 0
                            : n.mul(Zl.resources.getResourceMultiplier(t))) ||
                          new E.Z(0),
                        r = f[t] || new E.Z(0);
                      return (
                        (e[t] = r.negated().plus(i)),
                        console.log(
                          "potNewResult BAL: " + t + ": ",
                          r.toNumber(),
                          i.toNumber(),
                          f
                        ),
                        e
                      );
                    }, {}),
                    h = this.calculateAdditionalActionsRequired(
                      To(To({}, c), { balanceCalculated: m }),
                      a
                    );
                  console.log("potNewResult: ", h),
                    (c.additionalActionsRequired = h.additionalActionsRequired);
                }
                return t && (this.listAssertsCached[e.id] = c), c;
              }),
              (t.prototype.listToUI = function (e) {
                (this.listEdited = e ? this.calculateList(e, !1, !0) : void 0),
                  console.log("Recalculate list: ", this.listEdited);
              }),
              (t.prototype.createQuickList = function (e, t) {
                var n;
                void 0 === t && (t = !1);
                var i = wo.find(function (t) {
                  return t.id === e;
                });
                if (i) {
                  var r = "".concat(e, "-quick"),
                    o = {
                      isTemporary: !0,
                      id: r,
                      name: i.name,
                      actions: [{ id: e, number: 1 }],
                    },
                    a = this.calculateList(o, !0, t);
                  t
                    ? (n = o.actions).push.apply(
                        n,
                        Object.entries(a.additionalActionsRequired || {}).map(
                          function (e) {
                            return { id: e[0], number: e[1] };
                          }
                        )
                      )
                    : a.requiredRestChange &&
                      o.actions.push({
                        id: rt.REST,
                        number: a.requiredRestChange,
                      }),
                    (this.lists.lists = this.lists.lists.filter(function (e) {
                      return !e.isTemporary;
                    })),
                    this.editList(o, !0),
                    this.runList(r);
                }
              }),
              (t.prototype.editList = function (e, t) {
                if ((void 0 === t && (t = !1), !e.name))
                  throw new Error("List name should not be empty");
                if (e.id) {
                  var n = this.lists.lists.findIndex(function (t) {
                    return t.id === e.id;
                  });
                  n > -1
                    ? (this.lists.lists[n] = e)
                    : t && ((e = To({}, e)), this.lists.lists.push(e));
                } else
                  (e = To(To({}, e), { id: "".concat(Math.random()) })),
                    this.lists.lists.push(e);
                this.calculateList(e, !0);
              }),
              (t.prototype.runList = function (e) {
                (this.runningState = {
                  id: e,
                  progress: new E.Z(0),
                  isPaused: !1,
                  pauseCd: 0,
                  efficiency: 1,
                }),
                  Zl.regenerateCache(),
                  Zl.resources.reassertBalances();
              }),
              (t.prototype.deleteList = function (e) {
                var t = this.lists.lists.findIndex(function (t) {
                  return t.id === e;
                });
                t >= 0 && this.lists.lists.splice(t, 1);
              }),
              (t.prototype.stopList = function () {
                (this.runningState = void 0),
                  (this.lists.lists = this.lists.lists.filter(function (e) {
                    return !e.isTemporary;
                  })),
                  Zl.regenerateCache(),
                  Zl.resources.reassertBalances();
              }),
              (t.prototype.toUI = function (e, t) {
                return (
                  void 0 === t &&
                    (t = function (e) {
                      return ee(e, 4);
                    }),
                  e.map(function (e) {
                    return {
                      id: e.id,
                      name: le(e.id),
                      amount: t(e.amount),
                      amountValue: e.amount.toPrecision(18),
                    };
                  })
                );
              }),
              (t.prototype.recordToUI = function (e, t) {
                return (
                  void 0 === t &&
                    (t = function (e) {
                      return ee(e, 4);
                    }),
                  Object.entries(e).map(function (e) {
                    var n = e[0],
                      i = e[1];
                    return {
                      id: n,
                      name: le(n),
                      amount: t(i),
                      amountValue: i.toPrecision(18),
                    };
                  })
                );
              }),
              (t.prototype.processToUI = function (e) {
                var t,
                  n = this.actions.find(function (t) {
                    return t.id === e.id;
                  });
                n ||
                  ((n = {
                    id: e.id,
                    numPerformed: new E.Z(0),
                    purePerformed: new E.Z(0),
                  }),
                  this.actions.push(n)),
                  Number.isNaN(n.numPerformed) && (n.numPerformed = new E.Z(0));
                var i = this.getDiminishCached(e, n),
                  r = this.toUI(this.getCostPerCast(e)),
                  o = this.toUI(this.getGainPerCast(e, 1)),
                  a = this.toUI(this.getGainMultPerCast(e, 1), function (e) {
                    return "+x".concat(ee(e, 4));
                  }),
                  u = this.toUI(this.getCapGainPerCast(e, 1)),
                  s = this.toUI(this.getCapMultPerCast(e, 1), function (e) {
                    return "+x".concat(ee(e, 4));
                  }),
                  c = this.toUI(this.getAttributePerCast(e, 1)),
                  l = this.toUI(
                    this.getAttributeMultPerCast(e, 1),
                    function (e) {
                      return "+x".concat(ee(e.sub(1), 4));
                    }
                  ),
                  d = this.toUI(this.getBattleAttributePerCast(e, 1)),
                  p = this.toUI(
                    this.getBattleAttributeMultPerCast(e, 1),
                    function (e) {
                      return "+x".concat(ee(e.sub(1), 4));
                    }
                  ),
                  f = performance.now(),
                  g = this.getRealEffort(e);
                this.actionEffortsCached[e.id] = g;
                var m = g.toNumber(),
                  h = i.div(g);
                this.ttpMark += performance.now() - f;
                var y = e.unlockCondition(Zl),
                  A =
                    !!(null === (t = this.runningState) || void 0 === t
                      ? void 0
                      : t.id) &&
                    !!this.listAssertsCached[this.runningState.id]
                      .timeBreakdowns[e.id];
                return {
                  id: e.id,
                  name: e.name,
                  description: e.description,
                  isUnlocked: y,
                  isAvailable: y,
                  cost: r,
                  gain: o,
                  gainMult: a,
                  attr: c,
                  attrMult: l,
                  battleAttr: d,
                  battleAttrMult: p,
                  capGain: u,
                  capMult: s,
                  etaNum: m,
                  amount: ee(n.numPerformed || 0),
                  isBlocked: !1,
                  effort: L(g, !1),
                  capEffort: L(this.getCap(e), !1),
                  effortEffects: Object.entries(e.attributesEffortEffect).map(
                    function (e) {
                      var t = e[0],
                        n = e[1];
                      return {
                        name: le(t),
                        effect: Math.round(100 * n).toPrecision(3),
                      };
                    }
                  ),
                  tags: e.tags,
                  mitigation: i.lessThan(1)
                    ? "".concat(ee(i.mul(100)), "%")
                    : void 0,
                  effectiveNumber: E.Z.min(
                    i.div(g.mul(n.numPerformed || 0)).toNumber(),
                    1e300
                  ).toNumber(),
                  PPS: E.Z.min(h, 1e100).toNumber(),
                  isRunning: A,
                };
              }),
              (t.prototype.processCalculationsToUI = function (e) {
                return {
                  id: "edited.".concat(Math.random()),
                  name: "edited.".concat(Math.random()),
                  effort: L(e.effort, !1),
                  items: [],
                  resourceGain: this.recordToUI(e.balanceCalculated),
                  attributeGain: this.recordToUI(e.attributeGain),
                  battleAttributeGain: this.recordToUI(e.attributeGain),
                  resourceCapGain: this.recordToUI(e.resourceCapGain),
                  resourceCapMult: this.recordToUI(
                    e.resourceCapMult,
                    function (e) {
                      return "+x".concat(ee(e.sub(1), 4));
                    }
                  ),
                  resourceGainMult: this.recordToUI(
                    e.resourceGainMult,
                    function (e) {
                      return "+x".concat(ee(e, 4));
                    }
                  ),
                  attributeMultGain: this.recordToUI(
                    e.attributeMultGain,
                    function (e) {
                      return "+x".concat(ee(e.sub(1), 4));
                    }
                  ),
                  battleAttributeMultGain: this.recordToUI(
                    e.attributeMultGain,
                    function (e) {
                      return "+x".concat(ee(e.sub(1), 4));
                    }
                  ),
                  impactingAttributes: this.recordToUI(
                    e.impactingAttributes,
                    function (e) {
                      return "".concat(ee(e, 2), "%");
                    }
                  ),
                  requiredRestChange: e.requiredRestChange,
                  timeBreakdowns: e.timeBreakdowns,
                  additionalActionsRequired: e.additionalActionsRequired,
                  canBeRunned: !0,
                  isTemporary: !1,
                };
              }),
              (t.prototype.processListToUI = function (e) {
                var t,
                  n = wo.reduce(function (e, t) {
                    return (e[t.id] = t), e;
                  }, {});
                return {
                  id: e.id,
                  name: e.name,
                  effort: L(this.listAssertsCached[e.id].effort, !1),
                  items: e.actions.map(function (e) {
                    return {
                      id: e.id,
                      amount: e.number,
                      name: n[e.id].name,
                      canBeRunned: n[e.id].unlockCondition(Zl),
                    };
                  }),
                  resourceGain: this.recordToUI(
                    this.listAssertsCached[e.id].balanceCalculated
                  ),
                  resourceGainMult: this.recordToUI(
                    this.listAssertsCached[e.id].resourceGainMult,
                    function (e) {
                      return "+x".concat(ee(e.sub(1), 4));
                    }
                  ),
                  resourceCapGain: this.recordToUI(
                    this.listAssertsCached[e.id].resourceCapGain,
                    function (e) {
                      return "+".concat(ee(e, 4));
                    }
                  ),
                  attributeGain: this.recordToUI(
                    this.listAssertsCached[e.id].attributeGain,
                    function (e) {
                      return "+".concat(ee(e, 4));
                    }
                  ),
                  attributeMultGain: this.recordToUI(
                    this.listAssertsCached[e.id].attributeMultGain,
                    function (e) {
                      return "+x".concat(ee(e.sub(1), 4));
                    }
                  ),
                  battleAttributeGain: this.recordToUI(
                    this.listAssertsCached[e.id].battleAttributeGain,
                    function (e) {
                      return "+".concat(ee(e, 4));
                    }
                  ),
                  battleAttributeMultGain: this.recordToUI(
                    this.listAssertsCached[e.id].battleAttributeMultGain,
                    function (e) {
                      return "+x".concat(ee(e.sub(1), 4));
                    }
                  ),
                  resourceCapMult: this.recordToUI(
                    this.listAssertsCached[e.id].resourceCapMult,
                    function (e) {
                      return "+x".concat(ee(e.sub(1), 4));
                    }
                  ),
                  canBeRunned: !e.actions.find(function (e) {
                    return !n[e.id].unlockCondition(Zl);
                  }),
                  impactingAttributes: this.recordToUI(
                    this.listAssertsCached[e.id].impactingAttributes,
                    function (e) {
                      return "".concat(ee(e, 4), "%");
                    }
                  ),
                  requiredRestChange:
                    this.listAssertsCached[e.id].requiredRestChange,
                  timeBreakdowns: this.listAssertsCached[e.id].timeBreakdowns,
                  isTemporary:
                    null !== (t = e.isTemporary) && void 0 !== t && t,
                };
              }),
              (t.prototype.canAfford = function (e, t, n) {
                var i,
                  r = 1;
                for (var o in e.balanceCalculated)
                  if (
                    null === (i = e.balanceCalculated[o]) || void 0 === i
                      ? void 0
                      : i.lessThan(
                          Zl.resources
                            .getResource(o)
                            .mul(10 * t)
                            .neg()
                        )
                  ) {
                    var a = Zl.resources.getResourceBalance(o),
                      u = Zl.resources
                        .getResourceMultiplier(o)
                        .mul(e.resourceGain[o] || new E.Z(0))
                        .sub(e.resourceCost[o] || new E.Z(0)),
                      s = 1 - a.div(u.mul(n)).toNumber();
                    if ((r = Math.min(r, s)) < 0) return 0;
                  }
                return r;
              }),
              (t.prototype.autoStrangerMode = function (e) {
                var t,
                  n,
                  r,
                  o,
                  a,
                  u,
                  s = this;
                void 0 === e && (e = !1);
                var l = wo.filter(function (e) {
                    return e.unlockCondition(Zl);
                  }),
                  d = {},
                  p = {},
                  f = {},
                  g = (((t = {})[c.WILLPOWER] = i.MANA), t),
                  m = void 0;
                if (
                  null === (n = this.runningState) || void 0 === n
                    ? void 0
                    : n.id
                ) {
                  this.listAssertsCached[this.runningState.id];
                  var h = this.lists.lists.find(function (e) {
                    var t;
                    return (
                      e.id ===
                      (null === (t = s.runningState) || void 0 === t
                        ? void 0
                        : t.id)
                    );
                  });
                  h &&
                    (m =
                      null ===
                        (r = h.actions.find(function (e) {
                          return e.id !== rt.REST;
                        })) || void 0 === r
                        ? void 0
                        : r.id);
                }
                for (
                  var y = l.reduce(function (t, n) {
                      var r = 0;
                      if (!s.actionEffortsCached[n.id])
                        return (
                          (t[n.id] = { id: n.id, weight: 0, maxProdWeight: 1 }),
                          t
                        );
                      var o = 0;
                      (n.baseAttributeMultiplierPerCast ||
                        n.baseAttributePerCats) &&
                        ((r += 10),
                        (o = 2),
                        Object.keys(
                          n.baseAttributeMultiplierPerCast ||
                            n.baseAttributePerCats ||
                            {}
                        ).forEach(function (e) {
                          var t,
                            i = null !== (t = g[e]) && void 0 !== t ? t : null;
                          i && (p[i] || (p[i] = []), p[i].push(n.id));
                        })),
                        n.baseResourceMultiplierPerCast &&
                          ((r += 5),
                          Object.keys(n.baseResourceMultiplierPerCast).forEach(
                            function (e) {
                              p[e] || (p[e] = []), p[e].push(n.id);
                            }
                          ),
                          (o = 1)),
                        n.baseResourcePerCast &&
                          ((r += 1),
                          Object.keys(n.baseResourcePerCast).forEach(function (
                            e
                          ) {
                            var t, i;
                            d[e] || (d[e] = []),
                              d[e].push({
                                id: n.id,
                                ps:
                                  (null ===
                                    (i =
                                      null === (t = n.baseResourcePerCast) ||
                                      void 0 === t
                                        ? void 0
                                        : t[e]) || void 0 === i
                                    ? void 0
                                    : i.div(s.actionEffortsCached[n.id])) ||
                                  new E.Z(0),
                              });
                            var o = Zl.resources.getResourceCap(e),
                              a = Zl.resources
                                .getResource(e)
                                .add(Zl.resources.getResourceBalance(e));
                            o && o.lessThanOrEqualTo(a) && (r *= 0);
                          })),
                        n.baseResourceCapPerCast &&
                          ((r += 2),
                          Object.keys(n.baseResourceCapPerCast).forEach(
                            function (e) {
                              var t, i;
                              f[e] || (f[e] = []);
                              var o = Zl.resources.getResourceCapMult(e);
                              f[e].push({
                                id: n.id,
                                ps:
                                  (null ===
                                    (i =
                                      null === (t = n.baseResourceCapPerCast) ||
                                      void 0 === t
                                        ? void 0
                                        : t[e]) || void 0 === i
                                    ? void 0
                                    : i
                                        .mul(o)
                                        .div(s.actionEffortsCached[n.id])) ||
                                  new E.Z(0),
                              }),
                                Zl.resources
                                  .getResourceCap(e)
                                  .lessThanOrEqualTo(
                                    Zl.resources
                                      .getResource(e)
                                      .plus(Zl.resources.getResourceBalance(e))
                                  ) &&
                                  (console.log(
                                    "[stranger] increasing weight of " +
                                      n.id +
                                      " cause resource " +
                                      e +
                                      " capped"
                                  ),
                                  (r += 2));
                            }
                          ),
                          (o = 1)),
                        n.baseResourceCapMultiplierPerCast &&
                          ((r += 2),
                          Object.keys(
                            n.baseResourceCapMultiplierPerCast
                          ).forEach(function (e) {
                            var t, i;
                            f[e] || (f[e] = []);
                            var r = Zl.resources
                              .getResourceCap(e)
                              .div(
                                s
                                  .getActionPerforms(n.id)
                                  .mul(
                                    (
                                      (null ===
                                        (t =
                                          n.baseResourceCapMultiplierPerCast) ||
                                      void 0 === t
                                        ? void 0
                                        : t[e]) || new E.Z(0)
                                    ).plus(1)
                                  )
                              );
                            f[e].push({
                              id: n.id,
                              ps:
                                (
                                  (null ===
                                    (i = n.baseResourceCapMultiplierPerCast) ||
                                  void 0 === i
                                    ? void 0
                                    : i[e]) || new E.Z(0)
                                )
                                  .mul(r)
                                  .div(s.actionEffortsCached[n.id]) ||
                                new E.Z(0),
                            });
                          }),
                          (o = 1)),
                        (r *= w(
                          s
                            .getDiminishCached(n)
                            .div(
                              s
                                .getActionPerforms(n.id)
                                .plus(1)
                                .mul(s.actionEffortsCached[n.id])
                            ),
                          1 - 0.25 * o
                        ).toNumber());
                      var a = s.getCostPerCast(n).find(function (e) {
                          return (
                            e.id !== i.ENERGY &&
                            e.amount
                              .div(s.actionEffortsCached[n.id])
                              .greaterThan(
                                Zl.resources.getResource(e.id).mul(0.5)
                              )
                          );
                        }),
                        u = a
                          ? {
                              id: a.id,
                              amount: a.amount.div(s.actionEffortsCached[n.id]),
                              isBlockage: Zl.resources
                                .getResourceBalance(a.id)
                                .lessThanOrEqualTo(0),
                            }
                          : void 0,
                        c = s.getCostPerCast(n).find(function (t) {
                          return (
                            t.id !== i.ENERGY &&
                            t.amount
                              .div(s.actionEffortsCached[n.id])
                              .greaterThan(
                                Zl.resources
                                  .getResourceCap(t.id)
                                  .mul(e ? 2 : 0.5)
                              )
                          );
                        }),
                        l = c
                          ? {
                              id: c.id,
                              amount: c.amount.div(s.actionEffortsCached[n.id]),
                            }
                          : void 0;
                      return (
                        (t[n.id] = {
                          id: n.id,
                          weight: r,
                          missings: u,
                          blocks: l,
                          maxProdWeight: 1,
                        }),
                        t
                      );
                    }, {}),
                    A = function (t) {
                      if (t.blocks)
                        (null === (o = f[t.blocks.id]) || void 0 === o
                          ? void 0
                          : o.length) &&
                          f[t.blocks.id].forEach(function (e) {
                            var n, i, r, o;
                            if (y[e.id]) {
                              var a = Math.min(
                                1,
                                1e3 *
                                  e.ps
                                    .div(
                                      (null === (n = t.blocks) || void 0 === n
                                        ? void 0
                                        : n.amount) || 1
                                    )
                                    .toNumber()
                              );
                              console.log(
                                "[stranger] rising " +
                                  e.id +
                                  " for prod cause missing cap for " +
                                  t.id +
                                  " ProdCoef = " +
                                  e.ps.toNumber() +
                                  " Miss: " +
                                  (null === (i = t.blocks) || void 0 === i
                                    ? void 0
                                    : i.amount.toNumber()) +
                                  "; FPC: " +
                                  a
                              ),
                                y[e.id].weight &&
                                  (y[e.id].weight =
                                    (null === (r = y[t.id]) || void 0 === r
                                      ? void 0
                                      : r.weight) *
                                      a *
                                      Math.random() +
                                    (null === (o = y[e.id]) || void 0 === o
                                      ? void 0
                                      : o.weight));
                            }
                          });
                      else if (t.missings) {
                        var n = 1;
                        (null === (a = d[t.missings.id]) || void 0 === a
                          ? void 0
                          : a.length) &&
                          ((n = 0),
                          d[t.missings.id].forEach(function (i) {
                            var r, o, a, u, s;
                            if (y[i.id]) {
                              var c = Math.min(
                                1,
                                10 *
                                  i.ps
                                    .div(
                                      (null === (r = t.missings) || void 0 === r
                                        ? void 0
                                        : r.amount) || 1
                                    )
                                    .toNumber()
                              );
                              console.log(
                                "[stranger] rising " +
                                  i.id +
                                  " with weight " +
                                  (null ===
                                    (o = null == y ? void 0 : y[i.id]) ||
                                  void 0 === o
                                    ? void 0
                                    : o.weight) +
                                  " for prod cause missing resource for " +
                                  t.id +
                                  "; CRW: " +
                                  (null === (a = y[t.id]) || void 0 === a
                                    ? void 0
                                    : a.weight) +
                                  "; hardMul: " +
                                  c
                              ),
                                y[i.id].weight &&
                                  !e &&
                                  (y[i.id].weight =
                                    (null === (u = y[t.id]) || void 0 === u
                                      ? void 0
                                      : u.weight) *
                                      c +
                                    (null === (s = y[i.id]) || void 0 === s
                                      ? void 0
                                      : s.weight)),
                                (n = Math.max(n, c));
                            }
                          })),
                          console.log("[stranger] MULTERS: ", t.missings.id, p),
                          (null === (u = p[t.missings.id]) || void 0 === u
                            ? void 0
                            : u.length) &&
                            p[t.missings.id].forEach(function (e) {
                              var n, i, r, o;
                              y[e] &&
                                (console.log(
                                  "[stranger] rising " +
                                    e +
                                    " (" +
                                    (null === (n = y[e]) || void 0 === n
                                      ? void 0
                                      : n.weight) +
                                    ") for mult by " +
                                    (null === (i = y[t.id]) || void 0 === i
                                      ? void 0
                                      : i.weight) +
                                    " cause missing resource for " +
                                    t.id
                                ),
                                (y[e].weight =
                                  (null === (r = y[t.id]) || void 0 === r
                                    ? void 0
                                    : r.weight) *
                                    Math.random() +
                                  (null === (o = y[e]) || void 0 === o
                                    ? void 0
                                    : o.weight)));
                            }),
                          (y[t.id].maxProdWeight = n);
                      }
                    },
                    v = 0,
                    b = Object.values(y);
                  v < b.length;
                  v++
                )
                  A((N = b[v]));
                for (var I = 0, C = Object.values(y); I < C.length; I++) {
                  var N;
                  (N = C[I]).missings &&
                    (console.log(
                      "[stranger] decreasing " +
                        N.id +
                        " for prod cause missing important resources: " +
                        N.missings.id +
                        ". WGHT: " +
                        N.weight +
                        "; ProdHeavyWght: " +
                        N.maxProdWeight
                    ),
                    e ||
                      ((y[N.id].weight *= 0.01 * N.maxProdWeight),
                      N.maxProdWeight < 0.01 && (y[N.id].weight = 0))),
                    N.blocks &&
                      (console.log(
                        "[stranger] blocking " +
                          N.id +
                          " for prod cause missing important resources: " +
                          N.blocks.id
                      ),
                      (y[N.id].weight = 0));
                }
                console.log("[stranger] WGHTS: ", y);
                var T = null,
                  R = null,
                  L = 0,
                  O = 0;
                for (var S in y) {
                  var M = y[S].weight;
                  M > L
                    ? ((O = L), (R = T), (L = M), (T = y[S]))
                    : M > O && M < L && ((O = M), (R = y[S]));
                }
                return T && T.id === m && Math.random() < 0 && R
                  ? (console.log(
                      "[stranger] Second Highest Weight Action (25% chance): ",
                      R
                    ),
                    R)
                  : (console.log("[stranger] Highest Weight Action: ", T), T);
              }),
              (t.prototype.process = function (e) {
                var t = this;
                if (
                  (!this.isUnlocked &&
                    Zl.learning.runeUpgrades.getUpgradeLevel(o.TICKET_OUT) >
                      0 &&
                    (this.isUnlocked = !0),
                  this.autoStranger &&
                    Zl.statistics.stats.timeThisReincarnation % 10 < e)
                ) {
                  var n = this.autoStrangerMode(!0);
                  this.createQuickList(n.id, !0);
                }
                if (this.runningState) {
                  if (!this.runningState.id)
                    return void (this.runningState = void 0);
                  if (
                    this.runningState.isPaused &&
                    this.runningState.pauseCd > 0
                  )
                    return void (this.runningState.pauseCd -= e);
                  if (
                    (this.runningState.efficiency < 1 &&
                      this.runningState.pauseCd > 0 &&
                      (this.runningState.pauseCd -= e),
                    !this.listAssertsCached[this.runningState.id].canBeRunned)
                  )
                    return void this.stopList();
                  (this.runningState.efficiency < 1 ||
                    this.runningState.isPaused) &&
                    this.runningState.pauseCd <= 0 &&
                    ((this.runningState.efficiency = 1),
                    (this.runningState.isPaused = !1),
                    Zl.regenerateCache(),
                    Zl.resources.reassertBalances());
                  var i = this.canAfford(
                    this.listAssertsCached[this.runningState.id],
                    e,
                    this.runningState.efficiency
                  );
                  if (
                    (i < 1
                      ? (i <= 0
                          ? ((this.runningState.isPaused = !0),
                            (this.runningState.pauseCd = 10 * e))
                          : ((this.runningState.isPaused = !1),
                            (this.runningState.pauseCd = 10 * e),
                            (this.runningState.efficiency =
                              i * this.runningState.efficiency)),
                        Zl.regenerateCache(),
                        Zl.resources.reassertBalances())
                      : this.runningState.isPaused &&
                        ((this.runningState.isPaused = !1),
                        Zl.regenerateCache(),
                        Zl.resources.reassertBalances()),
                    !this.runningState.efficiency || this.runningState.isPaused)
                  )
                    return;
                  this.runningState.progress = this.runningState.progress.add(
                    e * this.runningState.efficiency
                  );
                  var r = new E.Z(1),
                    a = !1;
                  this.runningState.progress.greaterThanOrEqualTo(
                    this.listAssertsCached[this.runningState.id].effort
                  ) && (a = !0),
                    (r = new E.Z(e * this.runningState.efficiency).div(
                      this.listAssertsCached[this.runningState.id].effort
                    )),
                    (n = this.lists.lists.find(function (e) {
                      var n;
                      return (
                        e.id ===
                        (null === (n = t.runningState) || void 0 === n
                          ? void 0
                          : n.id)
                      );
                    })),
                    n &&
                      n.actions.forEach(function (n) {
                        var i,
                          o = t.actions.findIndex(function (e) {
                            return e.id === n.id;
                          }),
                          a = wo.find(function (e) {
                            return e.id === n.id;
                          });
                        if (a && o >= 0) {
                          Zl.statistics.addActionTime(
                            a.name,
                            (t.listAssertsCached[
                              null === (i = t.runningState) || void 0 === i
                                ? void 0
                                : i.id
                            ].timeBreakdowns[n.id] || 0) * e
                          );
                          var u = r.mul(n.number),
                            s = t.getAverageDiminish(a, t.actions[o], u);
                          (t.actions[o].numPerformed = t.actions[
                            o
                          ].numPerformed.plus(u.mul(s))),
                            (t.actions[o].purePerformed =
                              t.actions[o].purePerformed.plus(u));
                        }
                      }),
                    a && (this.runningState.progress = new E.Z(0)),
                    (!this.lastReassert ||
                      this.lastReassert < Date.now() - 2e3) &&
                      ((this.lastReassert = Date.now()),
                      Zl.regenerateCache(),
                      Zl.resources.reassertBalances(),
                      this.lists.lists.map(function (e) {
                        return t.calculateList(e, !0);
                      }));
                }
              }),
              (t.prototype.getResourceBeingProduced = function (e) {
                var t, n, i, r;
                if (
                  !(null === (t = this.runningState) || void 0 === t
                    ? void 0
                    : t.id) ||
                  this.runningState.isPaused
                )
                  return [];
                var o =
                  this.listAssertsCached[
                    null === (n = this.runningState) || void 0 === n
                      ? void 0
                      : n.id
                  ];
                if (!o) return (this.runningState = void 0), [];
                var a = [];
                return (
                  o.resourceGain[e] &&
                    a.push({
                      label: "Actions",
                      value:
                        null !==
                          (r =
                            null === (i = o.resourceGain[e]) || void 0 === i
                              ? void 0
                              : i.mul(this.runningState.efficiency)) &&
                        void 0 !== r
                          ? r
                          : new E.Z(0),
                      id: "actions",
                      category: "Actions",
                    }),
                  a
                );
              }),
              (t.prototype.getResourceBeingStored = function (e) {
                var t = this,
                  n = wo.filter(function (t) {
                    var n;
                    return null === (n = t.baseResourceCapPerCast) ||
                      void 0 === n
                      ? void 0
                      : n[e];
                  }),
                  i = [];
                return (
                  n.forEach(function (n) {
                    var r,
                      o,
                      a = t.getActionPerforms(n.id);
                    a.greaterThan(0) &&
                      i.push({
                        label: "Actions: ".concat(n.name),
                        value:
                          (null ===
                            (o =
                              null === (r = n.baseResourceCapPerCast) ||
                              void 0 === r
                                ? void 0
                                : r[e]) || void 0 === o
                            ? void 0
                            : o.mul(a)) || new E.Z(0),
                        id: "actions:".concat(n.id),
                        category: "Actions",
                      });
                  }),
                  i
                );
              }),
              (t.prototype.getResourceBeingStoredMultiplier = function (e) {
                var t = this,
                  n = wo.filter(function (t) {
                    var n;
                    return null === (n = t.baseResourceCapMultiplierPerCast) ||
                      void 0 === n
                      ? void 0
                      : n[e];
                  }),
                  i = [];
                return (
                  n.forEach(function (n) {
                    var r,
                      o,
                      a = t.getActionPerforms(n.id);
                    a.greaterThan(0) &&
                      i.push({
                        label: "Actions: ".concat(n.name),
                        value: (
                          (null ===
                            (o =
                              null ===
                                (r = n.baseResourceCapMultiplierPerCast) ||
                              void 0 === r
                                ? void 0
                                : r[e]) || void 0 === o
                            ? void 0
                            : o.mul(a)) || new E.Z(0)
                        ).plus(1),
                        id: "actions:".concat(n.id),
                        category: "Actions",
                      });
                  }),
                  i
                );
              }),
              (t.prototype.getResourceBeingConsumed = function (e) {
                var t, n, i, r;
                if (
                  !(null === (t = this.runningState) || void 0 === t
                    ? void 0
                    : t.id) ||
                  this.runningState.isPaused
                )
                  return [];
                var o =
                    this.listAssertsCached[
                      null === (n = this.runningState) || void 0 === n
                        ? void 0
                        : n.id
                    ],
                  a = [];
                return (
                  o.resourceCost[e] &&
                    a.push({
                      label: "Actions",
                      value:
                        null !==
                          (r =
                            null === (i = o.resourceCost[e]) || void 0 === i
                              ? void 0
                              : i.mul(this.runningState.efficiency)) &&
                        void 0 !== r
                          ? r
                          : new E.Z(0),
                      id: "actions",
                      category: "Actions",
                    }),
                  a
                );
              }),
              (t.prototype.getActionPerforms = function (e) {
                var t;
                return (
                  (null ===
                    (t = this.actions.find(function (t) {
                      return t.id === e;
                    })) || void 0 === t
                    ? void 0
                    : t.numPerformed) || new E.Z(0)
                );
              }),
              (t.prototype.getAttributeProduced = function (e) {
                var t = this,
                  n = wo.filter(function (t) {
                    var n;
                    return null === (n = t.baseAttributePerCats) || void 0 === n
                      ? void 0
                      : n[e];
                  }),
                  i = [];
                return (
                  n.forEach(function (n) {
                    var r,
                      o,
                      a = t.getActionPerforms(n.id);
                    a.greaterThan(0) &&
                      i.push({
                        label: "Actions: ".concat(n.name),
                        value:
                          (null ===
                            (o =
                              null === (r = n.baseAttributePerCats) ||
                              void 0 === r
                                ? void 0
                                : r[e]) || void 0 === o
                            ? void 0
                            : o.mul(a)) || new E.Z(0),
                        id: "actions",
                        category: "Actions",
                      });
                  }),
                  i
                );
              }),
              (t.prototype.getAttributeMultiplier = function (e) {
                var t = this,
                  n = wo.filter(function (t) {
                    var n;
                    return null === (n = t.baseAttributeMultiplierPerCast) ||
                      void 0 === n
                      ? void 0
                      : n[e];
                  }),
                  i = [];
                return (
                  n.forEach(function (n) {
                    var r,
                      o,
                      a = t.getActionPerforms(n.id);
                    a.greaterThan(0) &&
                      i.push({
                        label: "Actions: ".concat(n.name),
                        value: (
                          (null ===
                            (o =
                              null === (r = n.baseAttributeMultiplierPerCast) ||
                              void 0 === r
                                ? void 0
                                : r[e]) || void 0 === o
                            ? void 0
                            : o.mul(a)) || new E.Z(0)
                        ).plus(1),
                        id: "actions",
                        category: "Actions",
                      });
                  }),
                  i
                );
              }),
              (t.prototype.getBattleAttributeProduced = function (e) {
                var t = this,
                  n = wo.filter(function (t) {
                    var n;
                    return null === (n = t.baseBattleAttributePerCats) ||
                      void 0 === n
                      ? void 0
                      : n[e];
                  }),
                  i = [];
                return (
                  n.forEach(function (n) {
                    var r,
                      o,
                      a = t.getActionPerforms(n.id);
                    a.greaterThan(0) &&
                      i.push({
                        label: "Actions: ".concat(n.name),
                        value:
                          (null ===
                            (o =
                              null === (r = n.baseBattleAttributePerCats) ||
                              void 0 === r
                                ? void 0
                                : r[e]) || void 0 === o
                            ? void 0
                            : o.mul(a)) || new E.Z(0),
                        id: "actions",
                        category: "Actions",
                      });
                  }),
                  i
                );
              }),
              (t.prototype.getBattleAttributeMultiplier = function (e) {
                var t = this,
                  n = wo.filter(function (t) {
                    var n;
                    return null ===
                      (n = t.baseBattleAttributeMultiplierPerCast) ||
                      void 0 === n
                      ? void 0
                      : n[e];
                  }),
                  i = [];
                return (
                  n.forEach(function (n) {
                    var r,
                      o,
                      a = t.getActionPerforms(n.id);
                    a.greaterThan(0) &&
                      i.push({
                        label: "Actions: ".concat(n.name),
                        value: (
                          (null ===
                            (o =
                              null ===
                                (r = n.baseBattleAttributeMultiplierPerCast) ||
                              void 0 === r
                                ? void 0
                                : r[e]) || void 0 === o
                            ? void 0
                            : o.mul(a)) || new E.Z(0)
                        ).plus(1),
                        id: "actions",
                        category: "Actions",
                      });
                  }),
                  i
                );
              }),
              (t.prototype.getGainMultiplier = function (e) {
                var t = this,
                  n = wo.filter(function (t) {
                    var n;
                    return null === (n = t.baseResourceMultiplierPerCast) ||
                      void 0 === n
                      ? void 0
                      : n[e];
                  }),
                  i = [];
                return (
                  n.forEach(function (n) {
                    var r,
                      o,
                      a = t.getActionPerforms(n.id);
                    a.greaterThan(0) &&
                      i.push({
                        label: "Actions: ".concat(n.name),
                        value: (
                          (null ===
                            (o =
                              null === (r = n.baseResourceMultiplierPerCast) ||
                              void 0 === r
                                ? void 0
                                : r[e]) || void 0 === o
                            ? void 0
                            : o.mul(a)) || new E.Z(0)
                        ).plus(1),
                        id: "actions",
                        category: "Actions",
                      });
                  }),
                  i
                );
              }),
              (t.prototype.reset = function () {
                var e = this;
                this.actions.forEach(function (t, n) {
                  (e.actions[n].numPerformed = new E.Z(0)),
                    (e.actions[n].purePerformed = new E.Z(0));
                });
              }),
              t
            );
          })(s),
          Lo = Ro.getInstance(),
          Oo = [
            {
              id: a.READ_BOOKS,
              name: "Read Books",
              description:
                "Learn old language to open an opportunity of learning old books",
              unlockCondition: function (e) {
                return !0;
              },
              maxLevel: 1,
              getCost:
                ((Ji = {}),
                (Ji[i.COINS] = function (e) {
                  return { A: new E.Z(20), B: new E.Z(2), type: O.EXPONENTIAL };
                }),
                (Ji[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(1e3),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                Ji),
            },
            {
              id: a.RUNE_LANGUAGE,
              name: "Rune Language",
              description:
                "Learn rune language to enable reading runic manuscripts",
              unlockCondition: function (e) {
                return !0;
              },
              maxLevel: 1,
              getCost:
                (($i = {}),
                ($i[i.COINS] = function (e) {
                  return { A: new E.Z(40), B: new E.Z(2), type: O.EXPONENTIAL };
                }),
                ($i[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(2500),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                $i),
            },
            {
              id: a.LAZY_CRYSTAL,
              name: "Lazy Crystal",
              description: "Unlock crystal that allows upgrades automation",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.RUNE_LANGUAGE) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((er = {}),
                (er[i.COINS] = function (e) {
                  return { A: new E.Z(50), B: new E.Z(2), type: O.EXPONENTIAL };
                }),
                (er[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(5e3),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                er),
            },
            {
              id: a.GOLD_CRYSTAL,
              name: "Gold Crystal",
              description: "Unlock gold crystal that increases gold caps",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.RUNE_LANGUAGE) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((tr = {}),
                (tr[i.COINS] = function (e) {
                  return { A: new E.Z(30), B: new E.Z(2), type: O.EXPONENTIAL };
                }),
                (tr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(2560),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                tr),
            },
            {
              id: a.ENDURANCE_RUNE,
              name: "Endurance Rune",
              description:
                "Unlock new rune that can significantly boost your body",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.RUNE_LANGUAGE) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((nr = {}),
                (nr[i.COINS] = function (e) {
                  return {
                    A: new E.Z(80),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                (nr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(16e3),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                nr),
            },
            {
              id: a.MUSCLE_RUNE,
              name: "Muscle Rune",
              description: "Learn new rune, that can boost your body power",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.GOLD_CRYSTAL) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((ir = {}),
                (ir[i.COINS] = function (e) {
                  return {
                    A: new E.Z(125),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (ir[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(25e3),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                ir),
            },
            {
              id: a.TRAINING_CHAMBERS,
              name: "Training Chambers Access",
              description:
                "Visit local arena to obtain access to advanced training lessons",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.MUSCLE_RUNE) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((rr = {}),
                (rr[i.COINS] = function (e) {
                  return {
                    A: new E.Z(250),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (rr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(25e5),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                rr),
            },
            {
              id: a.GOLD_PROTECTION,
              name: "Coins Protection",
              description:
                "Protected Gold Stash prevent coins from being reset on runic sacrifice",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.GOLD_CRYSTAL) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((or = {}),
                (or[i.COINS] = function (e) {
                  return {
                    A: new E.Z(100),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (or[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(15e3),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                or),
            },
            {
              id: a.RUNE_PROTECTION,
              name: "Rune Protection",
              description:
                "Create magic barriers on your runes, preventing some amounts of runes reset on sacrifice (excepting the one that you sacrificing)",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.GOLD_PROTECTION) > 0
                );
              },
              maxLevel: 5,
              getCost:
                ((ar = {}),
                (ar[i.COINS] = function (e) {
                  return {
                    A: new E.Z(125),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (ar[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(3e4),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                ar),
            },
            {
              id: a.KNOWLEDGE_UPGRADES,
              name: "Knowledge Knowledge",
              description:
                "Unlock new ways of improvement of your magic workplace to further advance your learning capabilities",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.RUNE_LANGUAGE) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((ur = {}),
                (ur[i.COINS] = function (e) {
                  return {
                    A: new E.Z(100),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (ur[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(16e3),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                ur),
            },
            {
              id: a.RUNE_EXPERTISE,
              name: "Rune Expertise",
              description:
                "Deeper understanding of runes led you to new innovative ways of managing them. Unlocks runes auto-learn",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.RUNE_LANGUAGE) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((sr = {}),
                (sr[i.COINS] = function (e) {
                  return {
                    A: new E.Z(200),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (sr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(125e3),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                sr),
            },
            {
              id: a.APTITUDE,
              name: "Aptitude",
              description:
                "Learn new techniques to increases your mental powers",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.KNOWLEDGE_UPGRADES) >
                  0
                );
              },
              maxLevel: 1,
              getCost:
                ((cr = {}),
                (cr[i.COINS] = function (e) {
                  return {
                    A: new E.Z(150),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (cr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(1e5),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                cr),
            },
            {
              id: a.BRAINSTORM,
              name: "Brainstorm",
              description: "Devote your time to magic investigations",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.KNOWLEDGE_UPGRADES) >
                  0
                );
              },
              maxLevel: 1,
              getCost:
                ((lr = {}),
                (lr[i.COINS] = function (e) {
                  return {
                    A: new E.Z(150),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (lr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(1e5),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                lr),
            },
            {
              id: a.REINCARNATION,
              name: "Reincarnation",
              description: "Unlocks reincarnation",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.BRAINSTORM) > 0;
              },
              maxLevel: 1,
              getCost:
                ((dr = {}),
                (dr[i.COINS] = function (e) {
                  return {
                    A: new E.Z(250),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (dr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(8e5),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                dr),
            },
            {
              id: a.MEDITATE,
              name: "Meditation",
              description: "Learn new techniques boosting your magical powers",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.BRAINSTORM) > 0;
              },
              maxLevel: 1,
              getCost:
                ((pr = {}),
                (pr[i.COINS] = function (e) {
                  return {
                    A: new E.Z(300),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (pr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(5e5),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                pr),
            },
            {
              id: a.AGILITY_RUNE,
              name: "Agility Rune",
              description: "Learn new rune improving your reflexes",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.BRAINSTORM) > 0;
              },
              maxLevel: 1,
              getCost:
                ((fr = {}),
                (fr[i.COINS] = function (e) {
                  return {
                    A: new E.Z("5.e+3"),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (fr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z("1.e+9"),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                fr),
            },
            {
              id: a.WILLPOWER_TRAINING,
              name: "Willpower Training",
              description:
                "Unlock access to activities training your willpower",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.MEDITATE) > 0;
              },
              maxLevel: 1,
              getCost:
                ((gr = {}),
                (gr[i.COINS] = function (e) {
                  return {
                    A: new E.Z(1250),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (gr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z("1.0e+7"),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                gr),
            },
            {
              id: a.MANA_CRYSTAL,
              name: "Mana Crystal",
              description:
                "Use your knowledge to understand the source of magic flowing through your hands. Unlocks new crystal",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.MEDITATE) > 0;
              },
              maxLevel: 1,
              getCost:
                ((mr = {}),
                (mr[i.COINS] = function (e) {
                  return {
                    A: new E.Z(1250),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (mr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z("1.0e+7"),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                mr),
            },
            {
              id: a.RUNE_SCIENCE,
              name: "Runes Science",
              description: "Take some lessons to master your runes",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.MEDITATE) > 0;
              },
              maxLevel: 1,
              getCost:
                ((hr = {}),
                (hr[i.COINS] = function (e) {
                  return {
                    A: new E.Z(9400),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (hr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z("1.25e+10"),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                hr),
            },
            {
              id: a.BASIC_WIZARDRY,
              name: "Basic Wizardry",
              description:
                "Get access to wizard beginners school entry. Unlocks new upgrades and possibility to learn spells",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.MEDITATE) > 0;
              },
              maxLevel: 1,
              getCost:
                ((yr = {}),
                (yr[i.COINS] = function (e) {
                  return {
                    A: new E.Z(5e3),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (yr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z("1.e+10"),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                yr),
            },
            {
              id: a.ILLUSION_SPELLS,
              name: "Illusion Spells",
              description:
                "Unlock your first magic spells! The very basic school is Illusion, focused on making things looking not what they are. Manipulate with spatial and optical features of things",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.BASIC_WIZARDRY) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((Er = {}),
                (Er[i.COINS] = function (e) {
                  return {
                    A: new E.Z(1e4),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Er[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z("7.5e+10"),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                Er),
            },
            {
              id: a.SPARK_GENERATION,
              name: "Spark Generation",
              description:
                "Unlock new resource - magically powered electricity, that can be created using new magic school spells - Conjuration",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.ILLUSION_SPELLS) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((Ar = {}),
                (Ar[i.COINS] = function (e) {
                  return {
                    A: new E.Z(15e4),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Ar[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(75e10),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                Ar),
            },
            {
              id: a.SPARK_CONTAINER,
              name: "Spark Container",
              description: "Could you hold more magic electricity you produce?",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.SPARK_GENERATION) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((vr = {}),
                (vr[i.COINS] = function (e) {
                  return {
                    A: new E.Z(45e4),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (vr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(1e13),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                vr),
            },
            {
              id: a.SPARK_INFUSION,
              name: "Spark Infusion",
              description: "Use sparks to boost your body",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.SPARK_GENERATION) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((wr = {}),
                (wr[i.COINS] = function (e) {
                  return {
                    A: new E.Z(8e5),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (wr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(125e11),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                wr),
            },
            {
              id: a.SPARK_MIND_INFUSION,
              name: "Spark Mind Infusion",
              description:
                "Scientists saying brain is also part of humans body. Not that mages should believe in science, but maybe you could enchant your mind as well?",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.SPARK_INFUSION) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((br = {}),
                (br[i.COINS] = function (e) {
                  return {
                    A: new E.Z(1e6),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (br[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(1e14),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                br),
            },
            {
              id: a.SPELLBINDING_TRAINING,
              name: "Courses of Apprentice",
              description:
                "Finally you can start learning true magic... Can't you?",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(
                    a.SPARK_MIND_INFUSION
                  ) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((Ir = {}),
                (Ir[i.COINS] = function (e) {
                  return {
                    A: new E.Z(5e6),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Ir[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(1e15),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                Ir),
            },
            {
              id: a.ELVEN_RUNE,
              name: "Elven Rune",
              description:
                "Open new opportunities by learning elven language, unlocking new rune",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(
                    a.SPELLBINDING_TRAINING
                  ) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((Cr = {}),
                (Cr[i.COINS] = function (e) {
                  return {
                    A: new E.Z("5.e+9"),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Cr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(1e18),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                Cr),
            },
            {
              id: a.CONJURATION_STUDY,
              name: "Conjuration Study",
              description:
                "Unlock new training, focused on conjuration training",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(
                    a.SPELLBINDING_TRAINING
                  ) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((Nr = {}),
                (Nr[i.COINS] = function (e) {
                  return {
                    A: new E.Z("2.e+9"),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Nr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z("1.0e+18"),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                Nr),
            },
            {
              id: a.BASIC_ELEMENTALISM,
              name: "Basic Elementalism",
              description:
                "Learn how to handle sparks more efficiently. Unlock new ways of spark storage improvement",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.CONJURATION_STUDY) >
                  0
                );
              },
              maxLevel: 1,
              getCost:
                ((Tr = {}),
                (Tr[i.COINS] = function (e) {
                  return {
                    A: new E.Z("2.e+11"),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Tr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z("5.0e+19"),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                Tr),
            },
            {
              id: a.WELLNESS_CRYSTAL,
              name: "Wealth Crystal",
              description:
                "What if you try to make crystal creating illusion of wellness? You could use magic to make you rich!",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.ILLUSION_SPELLS) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((Rr = {}),
                (Rr[i.COINS] = function (e) {
                  return {
                    A: new E.Z(25e4),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Rr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(1e12),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                Rr),
            },
            {
              id: a.WOODWORKING,
              name: "Woodworking",
              description:
                "Learn how to combine your magic with your handwork to create wood and something useful from it!",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.SPARK_GENERATION) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((Lr = {}),
                (Lr[i.COINS] = function (e) {
                  return {
                    A: new E.Z(48e4),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Lr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(5e12),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                Lr),
            },
            {
              id: a.PAPERWORKING,
              name: "Paperworking",
              description:
                "If you can work with wood, you can do so with paper",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.WOODWORKING) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((Or = {}),
                (Or[i.COINS] = function (e) {
                  return {
                    A: new E.Z(125e4),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Or[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(1e14),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                Or),
            },
            {
              id: a.STONEWORKING,
              name: "Stoneworking",
              description: "Lets master some harder materials",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.WOODWORKING) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((Sr = {}),
                (Sr[i.COINS] = function (e) {
                  return {
                    A: new E.Z(5e6),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Sr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(1e15),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                Sr),
            },
            {
              id: a.CHARGED_CRAFTING,
              name: "Charged Crafting",
              description:
                "Learn how to use magic sparks to create new crafting materials and structures.",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.WOODWORKING) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((Mr = {}),
                (Mr[i.COINS] = function (e) {
                  return {
                    A: new E.Z("5.e+9"),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Mr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(1e18),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                Mr),
            },
            {
              id: a.METALWORKING,
              name: "Metalworking",
              description:
                "Now that you can manage high temperatures, you could also smelt iron ore",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.STONEWORKING) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((Pr = {}),
                (Pr[i.COINS] = function (e) {
                  return {
                    A: new E.Z("2.e+10"),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Pr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(2e19),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                Pr),
            },
            {
              id: a.GLASSMAKING,
              name: "Glassmaking",
              description:
                "Ok, if you can make stone - you can crash it into sand, and then smelt into glass. Can't you?",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.STONEWORKING) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((Zr = {}),
                (Zr[i.COINS] = function (e) {
                  return {
                    A: new E.Z("4.e+11"),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Zr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(5e20),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                Zr),
            },
            {
              id: a.BATTLE_MASTERY,
              name: "Battle Mastery",
              description: "Unlocks fights",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.METALWORKING) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((_r = {}),
                (_r[i.COINS] = function (e) {
                  return {
                    A: new E.Z("5.e+9"),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (_r[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(1e20),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                _r),
            },
            {
              id: a.BONE_EXTRACTION,
              name: "Bone Extraction",
              description: "Unlocks obtaining bones from battles",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.BATTLE_MASTERY) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((Gr = {}),
                (Gr[i.COINS] = function (e) {
                  return {
                    A: new E.Z("5.e+11"),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Gr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(5e20),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                Gr),
            },
            {
              id: a.BATTLE_TRAINING,
              name: "Battle Training",
              description:
                "Claim access to battle mages beginners school, that gives you possibility to train basic fighting skills",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.BATTLE_MASTERY) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((Dr = {}),
                (Dr[i.COINS] = function (e) {
                  return {
                    A: new E.Z("5.e+11"),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Dr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(5e20),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                Dr),
            },
            {
              id: a.REFLEXES_TRAINING,
              name: "Reflexes Training",
              description:
                "Fighting not only gives you loot, but knowledge. You understand your body better now. You understand how your reaction works. And a little more magic can make it even better...",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.BATTLE_TRAINING) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((kr = {}),
                (kr[i.COINS] = function (e) {
                  return {
                    A: new E.Z("1.e+13"),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (kr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(2e22),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                kr),
            },
            {
              id: a.SPELLSINGING_TRAINING,
              name: "Spell-singing Training",
              description:
                "Bring your spell mastery to new level using innovative methods of casting",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.REFLEXES_TRAINING) >
                  0
                );
              },
              maxLevel: 1,
              getCost:
                ((Br = {}),
                (Br[i.COINS] = function (e) {
                  return {
                    A: new E.Z("5.e+13"),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Br[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(5e23),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                Br),
            },
            {
              id: a.FORTITUDE_TRAINING,
              name: "Fortitude Training",
              description: "Reveal new ways of improving your willpower",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(
                    a.SPELLSINGING_TRAINING
                  ) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((Ur = {}),
                (Ur[i.COINS] = function (e) {
                  return {
                    A: new E.Z("5.e+14"),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Ur[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(2e24),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                Ur),
            },
            {
              id: a.PROTECTION_SPELLS,
              name: "Basic Protection Spells",
              description:
                "Learn basic protection spells that will significantly boost your survivability in fights",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.BATTLE_TRAINING) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((xr = {}),
                (xr[i.COINS] = function (e) {
                  return {
                    A: new E.Z("1.e+13"),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (xr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(1e22),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                xr),
            },
            {
              id: a.ADVANCED_BONES_MECHANISMS,
              name: "Bones Mechanisms",
              description:
                "Combine engineering with magic to unlock some new structures",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.BONE_EXTRACTION) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((Hr = {}),
                (Hr[i.COINS] = function (e) {
                  return {
                    A: new E.Z("5.e+12"),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Hr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(1e22),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                Hr),
            },
            {
              id: a.PROTECTION_CRYSTAL,
              name: "Protection Crystal",
              description:
                "Now you know that you can connect your crystals to some kind of defensive aura",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.PROTECTION_SPELLS) >
                  0
                );
              },
              maxLevel: 1,
              getCost:
                ((Wr = {}),
                (Wr[i.COINS] = function (e) {
                  return {
                    A: new E.Z("2.e+11"),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Wr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(4e21),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                Wr),
            },
            {
              id: a.EVOCATION_SPELLS,
              name: "Evocation Spells",
              description: "Learn how to destroy with your magic powers",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.PROTECTION_SPELLS) >
                  0
                );
              },
              maxLevel: 1,
              getCost:
                ((Yr = {}),
                (Yr[i.COINS] = function (e) {
                  return {
                    A: new E.Z("5.e+14"),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Yr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(9e22),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                Yr),
            },
            {
              id: a.BONE_DRYING,
              name: "Bone Drying",
              description:
                "Advanced bone processing let now store them in cellar. Cellar now also boost bone storage",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(
                    a.ADVANCED_BONES_MECHANISMS
                  ) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((qr = {}),
                (qr[i.COINS] = function (e) {
                  return {
                    A: new E.Z("2.e+13"),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (qr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(15e22),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                qr),
            },
            {
              id: a.T_ENERGY,
              name: "T Energy",
              description:
                "Unlock fighting mutants, affected by one of the most powerful energy form in the world - T-energy. Fighting them unlock new precious rewards, including T-shards for your runes",
              unlockCondition: function (e) {
                return !1;
              },
              maxLevel: 1,
              getCost:
                ((Xr = {}),
                (Xr[i.COINS] = function (e) {
                  return {
                    A: new E.Z("5.e+12"),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Xr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(3e24),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                Xr),
            },
            {
              id: a.ADVANCED_EVOCATION,
              name: "Advanced Evocation",
              description: "Unlock new evocation spells",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.EVOCATION_SPELLS) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((Kr = {}),
                (Kr[i.COINS] = function (e) {
                  return {
                    A: new E.Z("5.e+15"),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Kr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(5e25),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                Kr),
            },
            {
              id: a.ADVANCED_FIGHT_MOVES,
              name: "Advanced Fight Moves",
              description: "Unlock new hit types",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.EVOCATION_SPELLS) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((Fr = {}),
                (Fr[i.COINS] = function (e) {
                  return {
                    A: new E.Z("5.e+15"),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Fr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(5e25),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                Fr),
            },
            {
              id: a.ELEMENTAL_BRICK,
              name: "Elemental Brick Crafting",
              description:
                "Unlock new advanced magic material, that further expand your building capabilities",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(
                    a.ADVANCED_BONES_MECHANISMS
                  ) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((jr = {}),
                (jr[i.COINS] = function (e) {
                  return {
                    A: new E.Z("1.e+16"),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (jr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(1e26),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                jr),
            },
            {
              id: a.ELEMENTAL_PROTECTION_CRYSTAL,
              name: "Elemental Protection Crystal",
              description:
                "Deeper understanding of elements unlocks new way of protection against them",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.ADVANCED_EVOCATION) >
                  0
                );
              },
              maxLevel: 1,
              getCost:
                ((Vr = {}),
                (Vr[i.COINS] = function (e) {
                  return {
                    A: new E.Z("5.e+18"),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Vr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(5e28),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                Vr),
            },
            {
              id: a.ELEMENTAL_PLATE,
              name: "Elemental Plate Crafting",
              description:
                "Improve your elemental and building mastery by inventing new material",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.ELEMENTAL_BRICK) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((zr = {}),
                (zr[i.COINS] = function (e) {
                  return {
                    A: new E.Z("1.e+19"),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (zr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(1e29),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                zr),
            },
            {
              id: a.ELEMENTAL_RESONATOR,
              name: "Elemental Resonator",
              description:
                "Invent new way of boosting your magic activities using elemental resonance",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.ELEMENTAL_PLATE) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((Qr = {}),
                (Qr[i.COINS] = function (e) {
                  return {
                    A: new E.Z("5.e+19"),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Qr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(5e29),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                Qr),
            },
            {
              id: a.CONJURATION_SINGING,
              name: "Conjuration Singing",
              description:
                "Now your will in combination with your voice can create incredible things! Unlocks new ways of boosting conjuration.",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.FORTITUDE_TRAINING) >
                  0
                );
              },
              maxLevel: 1,
              getCost:
                ((Jr = {}),
                (Jr[i.COINS] = function (e) {
                  return {
                    A: new E.Z("5.e+19"),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Jr[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(5e29),
                    B: new E.Z(1.75),
                    type: O.EXPONENTIAL,
                  };
                }),
                Jr),
            },
          ],
          So = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function i() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((i.prototype = n.prototype), new i()));
            };
          })(),
          Mo = function () {
            return (
              (Mo =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, r) &&
                        (e[r] = t[r]);
                  return e;
                }),
              Mo.apply(this, arguments)
            );
          },
          Po = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.upgrades = []),
                (t.cachedUpgrades = []),
                (t.tickPerf = 0),
                t.workDispatcher.on(
                  "[academy-upgrade] do upgrade",
                  function (e) {
                    console.log("do upgrade", e), t.doUpgrade(e.id);
                  }
                ),
                t
              );
            }
            return (
              So(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                this.upgrades =
                  (null == e
                    ? void 0
                    : e.upgrades.map(function (e) {
                        return Mo({}, e);
                      })) || [];
              }),
              (t.prototype.exportData = function () {
                return {
                  upgrades: this.upgrades.map(function (e) {
                    return Mo({}, e);
                  }),
                };
              }),
              (t.prototype.regenerateCache = function () {
                var e = this;
                (this.tickPerf = 0),
                  (this.cachedUpgrades = Oo.map(function (t) {
                    return e.processToUI(t);
                  }));
              }),
              (t.prototype.dataFromCache = function () {
                var e = this;
                return this.cachedUpgrades
                  .filter(function (e) {
                    return e.isUnlocked && !e.isMaxedOut;
                  })
                  .map(function (t) {
                    var n = Oo.find(function (e) {
                      return e.id === t.id;
                    });
                    if (!n) return t;
                    var i = e.upgrades.find(function (e) {
                      return e.id === n.id;
                    });
                    i || ((i = { id: n.id, level: 0 }), e.upgrades.push(i));
                    var r = pe.calcBatchAll(
                        n.getCost,
                        Pl.getInstance(),
                        new E.Z(i.level),
                        Pl.getInstance().resources.getBatchObject()
                      ),
                      o =
                        (r.reduce(function (e, t) {
                          return e && !t.isBlocked;
                        }, !0),
                        r.reduce(function (e, t) {
                          return Math.max(e, t.eta);
                        }, 0)),
                      a = r.reduce(function (e, t) {
                        return E.Z.min(e, t.max);
                      }, new E.Z("1.e+30000"));
                    return (
                      i.level <= 0 &&
                        Zl.newNotifications.registerNotification(
                          "city:academy:upgrade:".concat(n.id)
                        ),
                      Mo(Mo({}, t), {
                        etaNum: o,
                        isAvailable: a.greaterThanOrEqualTo(1),
                        cost: Pl.getInstance().resources.assertEnought(
                          r,
                          Pl.getInstance().resources.getBatchObject(),
                          Pl.getInstance().resources.getBatchBalanceObject()
                        ),
                        progress: a.lessThan(1)
                          ? (100 * a.toNumber()).toPrecision(3)
                          : "100",
                      })
                    );
                  });
              }),
              (t.prototype.dataToUI = function () {
                return {
                  list: this.dataFromCache(),
                  isUnlocked: Pl.getInstance()
                    .resources.getResourceCap(i.MANA)
                    .greaterThanOrEqualTo(10),
                };
              }),
              (t.prototype.getUpgradeLevel = function (e) {
                var t;
                return (
                  (null ===
                    (t = this.upgrades.find(function (t) {
                      return t.id === e;
                    })) || void 0 === t
                    ? void 0
                    : t.level) || 0
                );
              }),
              (t.prototype.processToUI = function (e, t) {
                void 0 === t && (t = 0);
                var n = performance.now(),
                  i = this.upgrades.find(function (t) {
                    return t.id === e.id;
                  });
                i || ((i = { id: e.id, level: 0 }), this.upgrades.push(i));
                var r = pe.calcBatchAll(
                    e.getCost,
                    Pl.getInstance(),
                    new E.Z(i.level + t),
                    Pl.getInstance().resources.getBatchObject()
                  ),
                  o = r.reduce(function (e, t) {
                    return e && !t.isBlocked;
                  }, !0),
                  a = r.reduce(function (e, t) {
                    return Math.max(e, t.eta);
                  }, 0),
                  u = r.reduce(function (e, t) {
                    return E.Z.min(e, t.max);
                  }, new E.Z("1.e+30000")),
                  s = e.unlockCondition(Zl);
                return (
                  (this.tickPerf += performance.now() - n),
                  {
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    isUnlocked: s,
                    isAvailable: u.greaterThanOrEqualTo(1),
                    cost: Pl.getInstance().resources.assertEnought(
                      r,
                      Pl.getInstance().resources.getBatchObject(),
                      Pl.getInstance().resources.getBatchBalanceObject()
                    ),
                    progress: u.lessThan(1)
                      ? (100 * u.toNumber()).toPrecision(3)
                      : "100",
                    isMaxedOut: !!e.maxLevel && e.maxLevel <= i.level,
                    maxLevel: e.maxLevel,
                    level: i.level + t,
                    isBlocked: !o,
                    etaNum: a,
                  }
                );
              }),
              (t.prototype.doUpgrade = function (e) {
                var t = Oo.find(function (t) {
                  return t.id === e;
                });
                if ((console.log("[upgrade] db", t), t)) {
                  var n = this.upgrades.findIndex(function (t) {
                    return t.id === e;
                  });
                  if (n < 0)
                    (n = this.upgrades.length),
                      this.upgrades.push({ id: e, level: 0 });
                  else if (t.maxLevel && this.upgrades[n].level >= t.maxLevel)
                    return;
                  var i = pe.calcBatchAll(
                      t.getCost,
                      Pl.getInstance(),
                      new E.Z(this.upgrades[n].level),
                      Pl.getInstance().resources.getBatchObject()
                    ),
                    r = i.reduce(function (e, t) {
                      return E.Z.min(e, t.max.floor());
                    }, new E.Z("1.e+30000"));
                  if (
                    (console.log("[upgrade] mx: ", r.toNumber()),
                    !r.lessThan(1))
                  )
                    return (
                      (this.upgrades[n].level = this.upgrades[n].level + 1),
                      console.log("costs: ", i),
                      Pl.getInstance().resources.subtractResourceBatch(i),
                      Zl.resources.reassertBalances(),
                      Zl.regenerateCache(),
                      !0
                    );
                }
              }),
              (t.prototype.process = function (e) {}),
              (t.prototype.reset = function () {
                this.upgrades = [];
              }),
              t
            );
          })(s),
          Zo = Po.getInstance(),
          _o = function (e, t) {
            var n = wo.filter(t).reduce(function (e, t) {
              return (e[t.id] = t), e;
            }, {});
            return e.city.actions.actions.reduce(function (e, t) {
              var i = n[t.id];
              return i ? (e = e.plus(t.purePerformed.mul(i.xpGain))) : e;
            }, new E.Z(0));
          },
          Go = [
            {
              id: ue.SCHOLAR,
              name: "Scholar",
              description:
                "Improve your learning abilities, decrease runes effort increase with leveling (making you able to afford significantly more rune levels)",
              unlockCondition: function (e) {
                return !0;
              },
              getPointsReward: function (e) {
                return _o(e, function () {
                  return !0;
                });
              },
              getBonus: function (e, t) {
                return E.Z.max(1, w(t.div(1e4), 0.075));
              },
              getBonusText: function (e) {
                return "x#BONUS# rune learning effort increase reduction";
              },
              getMinimumPoints: function (e) {
                return new E.Z(1e6);
              },
            },
            {
              id: ue.PHYSICAL,
              name: "Physical",
              description:
                "Improve your physical power, making all physical actions executed faster",
              unlockCondition: function (e) {
                return !0;
              },
              getPointsReward: function (e) {
                return _o(e, function () {
                  return !0;
                });
              },
              getBonus: function (e, t) {
                return E.Z.max(1, w(t.div(1e4), 0.4));
              },
              getSecondaryBonus: function (e, t) {
                return E.Z.max(1, w(t.div(1e4), 0.1));
              },
              getBonusText: function (e) {
                return "x#BONUS# physical actions max speed, x#SECONDARY_BONUS# to physical actions speed";
              },
              getMinimumPoints: function (e) {
                return new E.Z(1e6);
              },
            },
            {
              id: ue.MENTAL,
              name: "Mental",
              description:
                "Improve your mental power, making all mental actions executed faster",
              unlockCondition: function (e) {
                return !0;
              },
              getPointsReward: function (e) {
                return _o(e, function () {
                  return !0;
                });
              },
              getBonus: function (e, t) {
                return E.Z.max(1, w(t.div(1e4), 0.4));
              },
              getSecondaryBonus: function (e, t) {
                return E.Z.max(1, w(t.div(1e4), 0.1));
              },
              getBonusText: function (e) {
                return "x#BONUS# mental actions max speed, x#SECONDARY_BONUS# to mental actions speed";
              },
              getMinimumPoints: function (e) {
                return new E.Z(1e6);
              },
            },
            {
              id: ue.MAGICAL,
              name: "Magical",
              description:
                "Improve your magic power, making all spells executed faster",
              unlockCondition: function (e) {
                return (
                  Zl.city.academyUpgrades.getUpgradeLevel(a.ILLUSION_SPELLS) > 0
                );
              },
              getPointsReward: function (e) {
                return _o(e, function () {
                  return !0;
                });
              },
              getBonus: function (e, t) {
                return E.Z.max(1, w(t.div(1e7), 0.4));
              },
              getSecondaryBonus: function (e, t) {
                return E.Z.max(1, w(t.div(1e7), 0.1));
              },
              getBonusText: function (e) {
                return "x#BONUS# spell max speed, x#SECONDARY_BONUS# to spell speed";
              },
              getMinimumPoints: function (e) {
                return new E.Z(1e7);
              },
            },
          ],
          Do = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function i() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((i.prototype = n.prototype), new i()));
            };
          })(),
          ko = function () {
            return (
              (ko =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, r) &&
                        (e[r] = t[r]);
                  return e;
                }),
              ko.apply(this, arguments)
            );
          },
          Bo = (function (e) {
            function t() {
              var t,
                n = e.call(this) || this;
              return (
                (n.state = []),
                (n.uiCache = []),
                (n.bonusesCached =
                  (((t = {})[ue.SCHOLAR] = new E.Z(1)),
                  (t[ue.PHYSICAL] = new E.Z(1)),
                  (t[ue.MENTAL] = new E.Z(1)),
                  (t[ue.MAGICAL] = new E.Z(1)),
                  t)),
                n.workDispatcher.on(
                  "[reincarnation] do reincarnate",
                  function (e) {
                    console.log("do reincarnate", e), n.doReincarnate(e.id);
                  }
                ),
                n
              );
            }
            return (
              Do(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                this.state =
                  (null == e
                    ? void 0
                    : e.resets.map(function (e) {
                        return ko(ko({}, e), {
                          numPoints: new E.Z(e.numPoints),
                        });
                      })) || [];
              }),
              (t.prototype.exportData = function () {
                return {
                  resets: this.state.map(function (e) {
                    return ko(ko({}, e), {
                      numPoints: e.numPoints.toPrecision(18),
                    });
                  }),
                };
              }),
              (t.prototype.regenerateCache = function () {
                var e = this;
                Go.forEach(function (t) {
                  var n = e.state.find(function (e) {
                    return e.id === t.id;
                  });
                  e.bonusesCached[t.id] = n
                    ? t.getBonus(Zl, n.numPoints)
                    : new E.Z(1);
                }),
                  (this.uiCache = Go.map(function (t) {
                    return e.processToUI(t);
                  }));
              }),
              (t.prototype.dataToUI = function () {
                return {
                  resets: this.uiCache.filter(function (e) {
                    return e.isUnlocked;
                  }),
                  isUnlocked:
                    Pl.getInstance().city.academyUpgrades.getUpgradeLevel(
                      a.REINCARNATION
                    ) > 0,
                };
              }),
              (t.prototype.processToUI = function (e) {
                var t = e.getPointsReward(Zl),
                  n = this.state.find(function (t) {
                    return t.id === e.id;
                  }),
                  i = new E.Z(1);
                n && (i = n.numPoints);
                var r = e.getBonusText(Zl),
                  o = r.replace("#BONUS#", ee(e.getBonus(Zl, i))),
                  a = r.replace("#BONUS#", ee(e.getBonus(Zl, t)));
                e.getSecondaryBonus &&
                  ((o = o.replace(
                    "#SECONDARY_BONUS#",
                    ee(e.getSecondaryBonus(Zl, i))
                  )),
                  (a = a.replace(
                    "#SECONDARY_BONUS#",
                    ee(e.getSecondaryBonus(Zl, t))
                  )));
                var u = E.Z.max(e.getMinimumPoints(Zl), i).sub(t);
                return (
                  t.greaterThanOrEqualTo(i) &&
                    u.lessThanOrEqualTo(0) &&
                    e.unlockCondition(Zl) &&
                    Zl.newNotifications.registerNotification(
                      "city:reincarnations:reincarnation:".concat(e.id)
                    ),
                  {
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    potentialBonus: a,
                    isAvailable:
                      t.greaterThanOrEqualTo(i) && u.lessThanOrEqualTo(0),
                    pointsLeft: ee(u),
                    isUnlocked: e.unlockCondition(Zl),
                    bonus: o,
                  }
                );
              }),
              (t.prototype.doReincarnate = function (e) {
                var t = Go.find(function (t) {
                  return t.id === e;
                });
                if (t) {
                  var n = t.getPointsReward(Zl),
                    i = this.state.findIndex(function (e) {
                      return e.id === t.id;
                    });
                  if (
                    (i < 0 &&
                      ((i = this.state.length),
                      this.state.push({
                        id: e,
                        numReincarnations: 0,
                        numPoints: new E.Z(1),
                      })),
                    !this.state[i].numPoints.greaterThan(n))
                  ) {
                    this.state[i].numPoints = n;
                    for (var r = 0; r < Zl.learning.runes.runes.length; r++)
                      Zl.city.academyUpgrades.getUpgradeLevel(
                        a.RUNE_PROTECTION
                      ) <= 0
                        ? (Zl.learning.runes.runes[r].level = new E.Z(0))
                        : (Zl.learning.runes.runes[r].level = E.Z.min(
                            Zl.learning.runes.runes[r].level,
                            Math.pow(
                              2 *
                                Zl.city.academyUpgrades.getUpgradeLevel(
                                  a.RUNE_PROTECTION
                                ),
                              2
                            )
                          )),
                        (Zl.learning.runes.runes[r].isActive = !1),
                        (Zl.learning.runes.runes[r].isLearning = !1),
                        (Zl.learning.runes.runes[r].xp = new E.Z(0)),
                        (Zl.learning.runes.runes[r].xpMult = new E.Z(1));
                    (Zl.statistics.stats.fastestReincarnateTime = Zl.statistics
                      .stats.numReincarnations
                      ? Math.min(
                          Zl.statistics.stats.fastestReincarnateTime,
                          Zl.statistics.stats.timeThisReincarnation
                        )
                      : Zl.statistics.stats.timeThisReincarnation),
                      (Zl.statistics.stats.timeThisReincarnation = 0),
                      Zl.learning.wizardOrb.reset(),
                      Zl.learning.runeUpgrades.reset(),
                      Zl.newNotifications.resetNotifications(),
                      Zl.resources.reset(),
                      Zl.learning.runePresets.runDefault(),
                      this.state[i].numReincarnations++,
                      Zl.city.actions.reset(),
                      Zl.resources.reassertBalances(),
                      Zl.regenerateCache(),
                      Zl.learning.runePresets.applyPreset(),
                      Zl.statistics.stats.numReincarnations++,
                      (Zl.statistics.stats.actions = {});
                  }
                }
              }),
              (t.prototype.getBonus = function (e) {
                return (
                  (this.bonusesCached && this.bonusesCached[e]) ||
                    this.regenerateCache(),
                  this.bonusesCached[e]
                );
              }),
              t
            );
          })(s),
          Uo = Bo.getInstance(),
          xo = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function i() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((i.prototype = n.prototype), new i()));
            };
          })(),
          Ho = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.actions = Lo),
                (t.academyUpgrades = Zo),
                (t.reincarnation = Uo),
                t
              );
            }
            return (
              xo(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                this.actions.importData(null == e ? void 0 : e.actions),
                  this.academyUpgrades.importData(
                    null == e ? void 0 : e.academy
                  ),
                  this.reincarnation.importData(
                    null == e ? void 0 : e.reincarnations
                  );
              }),
              (t.prototype.exportData = function () {
                return {
                  actions: this.actions.exportData(),
                  academy: this.academyUpgrades.exportData(),
                  reincarnations: this.reincarnation.exportData(),
                };
              }),
              (t.prototype.dataToUI = function () {
                var e = this.actions.dataToUI(),
                  t = this.academyUpgrades.dataToUI(),
                  n = this.reincarnation.dataToUI();
                return {
                  isUnlocked: e.isUnlocked,
                  academy: t,
                  actions: e,
                  reincarnation: n,
                };
              }),
              (t.prototype.process = function (e) {
                this.actions.process(e);
              }),
              (t.prototype.regenerateCache = function () {
                this.academyUpgrades.regenerateCache(),
                  this.actions.regenerateCache(),
                  this.reincarnation.regenerateCache();
              }),
              t
            );
          })(s),
          Wo = Ho.getInstance(),
          Yo = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function i() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((i.prototype = n.prototype), new i()));
            };
          })(),
          qo = function () {
            return (
              (qo =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, r) &&
                        (e[r] = t[r]);
                  return e;
                }),
              qo.apply(this, arguments)
            );
          },
          Xo = {
            timeInGame: 0,
            timeThisRune: 0,
            fastestRuneTime: 0,
            numRuneResets: 0,
            numReincarnations: 0,
            timeThisReincarnation: 0,
            fastestReincarnateTime: 0,
            actions: {},
            xpGains: {},
          },
          Ko = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (t.stats = qo({}, Xo)), t;
            }
            return (
              Yo(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                var t = e || {
                  timeInGame: 0,
                  timeThisRune: 0,
                  numRuneResets: 0,
                };
                this.stats = qo(qo({}, Xo), t);
              }),
              (t.prototype.exportData = function () {
                return this.stats;
              }),
              (t.prototype.dataToUI = function () {
                return qo({}, this.stats);
              }),
              (t.prototype.process = function (e) {
                (this.stats.timeThisRune += e),
                  (this.stats.timeInGame += e),
                  (this.stats.timeThisReincarnation += e);
              }),
              (t.prototype.addActionTime = function (e, t) {
                var n;
                this.stats.actions[e] || (this.stats.actions[e] = 0),
                  (this.stats.actions[e] =
                    ((null === (n = this.stats.actions) || void 0 === n
                      ? void 0
                      : n[e]) || 0) + t);
              }),
              (t.prototype.regenerateActionXP = function (e, t) {
                var n = this;
                (this.stats.xpGains = {}),
                  Object.entries(e).forEach(function (e) {
                    var i = e[0],
                      r = e[1];
                    n.stats.xpGains[i] = r
                      .mul(100)
                      .div(E.Z.max(1e-300, t))
                      .toNumber();
                  });
              }),
              (t.prototype.reset = function () {}),
              t
            );
          })(s),
          Fo = Ko.getInstance(),
          jo = [
            {
              id: i.REFINED_WOOD,
              name: "Refine Wood",
              getCost:
                (($r = {}),
                ($r[i.WOOD] = function (e) {
                  return {
                    A: new E.Z(0.2),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                ($r[i.CRAFTSMANSHIP] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(2), type: O.EXPONENTIAL };
                }),
                $r),
              getProduce:
                ((eo = {}),
                (eo[i.REFINED_WOOD] = function (e) {
                  return {
                    A: new E.Z(0.02),
                    B: new E.Z(1.5),
                    type: O.EXPONENTIAL,
                  };
                }),
                eo),
              baseSlotsPrice: 1,
              unlockCondition: function (e) {
                return !0;
              },
            },
            {
              id: i.PAPER,
              name: "Craft Paper",
              getCost:
                ((to = {}),
                (to[i.WOOD] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(2), type: O.EXPONENTIAL };
                }),
                (to[i.CRAFTSMANSHIP] = function (e) {
                  return { A: new E.Z(3), B: new E.Z(2), type: O.EXPONENTIAL };
                }),
                to),
              getProduce:
                ((no = {}),
                (no[i.PAPER] = function (e) {
                  return {
                    A: new E.Z(0.05),
                    B: new E.Z(1.5),
                    type: O.EXPONENTIAL,
                  };
                }),
                no),
              baseSlotsPrice: 2,
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.PAPERWORKING) > 0
                );
              },
            },
            {
              id: i.BRICK,
              name: "Craft Brick",
              getCost:
                ((io = {}),
                (io[i.STONE] = function (e) {
                  return {
                    A: new E.Z(0.5),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (io[i.CRAFTSMANSHIP] = function (e) {
                  return { A: new E.Z(10), B: new E.Z(2), type: O.EXPONENTIAL };
                }),
                io),
              getProduce:
                ((ro = {}),
                (ro[i.BRICK] = function (e) {
                  return {
                    A: new E.Z(0.05),
                    B: new E.Z(1.5),
                    type: O.EXPONENTIAL,
                  };
                }),
                ro),
              baseSlotsPrice: 2,
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.STONEWORKING) > 0
                );
              },
            },
            {
              id: i.CHARGED_WOOD,
              name: "Charged Wood",
              getCost:
                ((oo = {}),
                (oo[i.REFINED_WOOD] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(2), type: O.EXPONENTIAL };
                }),
                (oo[i.SPARK] = function (e) {
                  return { A: new E.Z(30), B: new E.Z(2), type: O.EXPONENTIAL };
                }),
                (oo[i.CRAFTSMANSHIP] = function (e) {
                  return { A: new E.Z(50), B: new E.Z(2), type: O.EXPONENTIAL };
                }),
                oo),
              getProduce:
                ((ao = {}),
                (ao[i.CHARGED_WOOD] = function (e) {
                  return {
                    A: new E.Z(0.05),
                    B: new E.Z(1.5),
                    type: O.EXPONENTIAL,
                  };
                }),
                ao),
              baseSlotsPrice: 2,
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.CHARGED_CRAFTING) > 0
                );
              },
            },
            {
              id: i.CHARGED_PAPER,
              name: "Charged Paper",
              getCost:
                ((uo = {}),
                (uo[i.PAPER] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(2), type: O.EXPONENTIAL };
                }),
                (uo[i.SPARK] = function (e) {
                  return { A: new E.Z(50), B: new E.Z(2), type: O.EXPONENTIAL };
                }),
                (uo[i.CRAFTSMANSHIP] = function (e) {
                  return { A: new E.Z(50), B: new E.Z(2), type: O.EXPONENTIAL };
                }),
                uo),
              getProduce:
                ((so = {}),
                (so[i.CHARGED_PAPER] = function (e) {
                  return {
                    A: new E.Z(0.05),
                    B: new E.Z(1.5),
                    type: O.EXPONENTIAL,
                  };
                }),
                so),
              baseSlotsPrice: 2,
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.CHARGED_CRAFTING) > 0
                );
              },
            },
            {
              id: i.SAND,
              name: "Sand",
              getCost:
                ((co = {}),
                (co[i.STONE] = function (e) {
                  return {
                    A: new E.Z(0.5),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (co[i.CRAFTSMANSHIP] = function (e) {
                  return { A: new E.Z(50), B: new E.Z(2), type: O.EXPONENTIAL };
                }),
                co),
              getProduce:
                ((lo = {}),
                (lo[i.SAND] = function (e) {
                  return {
                    A: new E.Z(0.05),
                    B: new E.Z(1.5),
                    type: O.EXPONENTIAL,
                  };
                }),
                lo),
              baseSlotsPrice: 2,
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.GLASSMAKING) > 0
                );
              },
            },
            {
              id: i.GLASS,
              name: "Glass",
              getCost:
                ((po = {}),
                (po[i.SAND] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(2), type: O.EXPONENTIAL };
                }),
                (po[i.MANA] = function (e) {
                  return {
                    A: new E.Z(5e13),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (po[i.CRAFTSMANSHIP] = function (e) {
                  return {
                    A: new E.Z(150),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                po),
              getProduce:
                ((fo = {}),
                (fo[i.GLASS] = function (e) {
                  return {
                    A: new E.Z(0.05),
                    B: new E.Z(1.5),
                    type: O.EXPONENTIAL,
                  };
                }),
                fo),
              baseSlotsPrice: 2,
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.GLASSMAKING) > 0
                );
              },
            },
            {
              id: i.IRON_PLATE,
              name: "Iron Plate",
              getCost:
                ((go = {}),
                (go[i.IRON_ORE] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(2), type: O.EXPONENTIAL };
                }),
                (go[i.CRAFTSMANSHIP] = function (e) {
                  return {
                    A: new E.Z(150),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                go),
              getProduce:
                ((mo = {}),
                (mo[i.IRON_PLATE] = function (e) {
                  return {
                    A: new E.Z(0.02),
                    B: new E.Z(1.5),
                    type: O.EXPONENTIAL,
                  };
                }),
                mo),
              baseSlotsPrice: 2,
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.METALWORKING) > 0
                );
              },
            },
            {
              id: i.ELEMENTAL_BRICK,
              name: "Elemental Brick",
              getCost:
                ((ho = {}),
                (ho[i.BRICK] = function (e) {
                  return {
                    A: new E.Z(100),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (ho[i.SPARK] = function (e) {
                  return {
                    A: new E.Z(1e5),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (ho[i.CRAFTSMANSHIP] = function (e) {
                  return {
                    A: new E.Z(15e3),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                ho),
              getProduce:
                ((yo = {}),
                (yo[i.ELEMENTAL_BRICK] = function (e) {
                  return {
                    A: new E.Z(0.01),
                    B: new E.Z(1.5),
                    type: O.EXPONENTIAL,
                  };
                }),
                yo),
              baseSlotsPrice: 2,
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.ELEMENTAL_BRICK) > 0
                );
              },
            },
            {
              id: i.ELEMENTAL_PLATE,
              name: "Elemental Plate",
              getCost:
                ((Eo = {}),
                (Eo[i.IRON_PLATE] = function (e) {
                  return { A: new E.Z(50), B: new E.Z(2), type: O.EXPONENTIAL };
                }),
                (Eo[i.SPARK] = function (e) {
                  return {
                    A: new E.Z(1e6),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Eo[i.CRAFTSMANSHIP] = function (e) {
                  return {
                    A: new E.Z(75e3),
                    B: new E.Z(2),
                    type: O.EXPONENTIAL,
                  };
                }),
                Eo),
              getProduce:
                ((Ao = {}),
                (Ao[i.ELEMENTAL_PLATE] = function (e) {
                  return {
                    A: new E.Z(0.01),
                    B: new E.Z(1.5),
                    type: O.EXPONENTIAL,
                  };
                }),
                Ao),
              baseSlotsPrice: 2,
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.ELEMENTAL_PLATE) > 0
                );
              },
            },
          ];
        !(function (e) {
          (e.CRAFTING_TABLE = "crafting-table"),
            (e.TRAINING_BENCH = "training-bench"),
            (e.RUNE_HOLDER = "rune-holder"),
            (e.BOOKSHELL = "bookshell"),
            (e.MANUSCRIPT = "manuscript"),
            (e.SCROLL = "scroll"),
            (e.STONE_WALL = "stonewall"),
            (e.LUMBERMILL = "lumbermill"),
            (e.CELLAR = "cellar"),
            (e.MAGIC_CLOCK = "magic_clock"),
            (e.MAGIC_SCROLL = "magic_scroll"),
            (e.MANA_ORB = "mana_orb"),
            (e.CONJURATION_ORB = "spell-orb"),
            (e.FORGE = "forge"),
            (e.STONE_CRUSHER = "stone_crusher"),
            (e.ELEMENTAL_MONUMENT = "elemental_monument"),
            (e.STONE_COMPENDIUM = "stone_compendium"),
            (e.ELEMENTAL_TOWER = "elemental_tower"),
            (e.MAGIC_PRINTER = "magic_printer"),
            (e.ELEMENTAL_RESONATOR = "elemental_resonator"),
            (e.MIND_RESONATOR = "mind_resonator"),
            (e.BONE_STORAGE = "bone_storage"),
            (e.BONE_AMULET = "bone_amulet"),
            (e.BONE_STATUE = "bone_statue"),
            (e.BONE_RACK = "bone_rack"),
            (e.BONE_MILL = "bone_mill"),
            (e.BONE_BANNER = "bone_banner");
        })(vo || (vo = {}));
        var Vo,
          zo,
          Qo,
          Jo,
          $o,
          ea,
          ta,
          na,
          ia,
          ra,
          oa,
          aa,
          ua,
          sa,
          ca,
          la,
          da,
          pa,
          fa,
          ga,
          ma,
          ha,
          ya,
          Ea,
          Aa,
          va,
          wa,
          ba,
          Ia,
          Ca,
          Na,
          Ta,
          Ra,
          La,
          Oa,
          Sa,
          Ma,
          Pa,
          Za,
          _a,
          Ga,
          Da,
          ka,
          Ba,
          Ua,
          xa,
          Ha,
          Wa,
          Ya,
          qa,
          Xa,
          Ka,
          Fa,
          ja,
          Va,
          za,
          Qa,
          Ja,
          $a,
          eu,
          tu,
          nu,
          iu,
          ru,
          ou,
          au,
          uu,
          su,
          cu,
          lu,
          du,
          pu,
          fu,
          gu,
          mu,
          hu,
          yu,
          Eu,
          Au,
          vu,
          wu,
          bu,
          Iu,
          Cu = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function i() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((i.prototype = n.prototype), new i()));
            };
          })(),
          Nu = function () {
            return (
              (Nu =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, r) &&
                        (e[r] = t[r]);
                  return e;
                }),
              Nu.apply(this, arguments)
            );
          },
          Tu = function (e, t, n) {
            if (n || 2 === arguments.length)
              for (var i, r = 0, o = t.length; r < o; r++)
                (!i && r in t) ||
                  (i || (i = Array.prototype.slice.call(t, 0, r)),
                  (i[r] = t[r]));
            return e.concat(i || Array.prototype.slice.call(t));
          },
          Ru = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.slots = []),
                (t.cachedCosts = {}),
                (t.cachedGains = {}),
                (t.cachedCostsUI = {}),
                (t.cachedGainsUI = {}),
                t.workDispatcher.on("[crafting] set slot", function (e) {
                  console.log("do set crafting slot", e),
                    t.setCraftingSlot(e.id, e.level);
                }),
                t
              );
            }
            return (
              Cu(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                this.slots = (null == e ? void 0 : e.slots) || [];
              }),
              (t.prototype.exportData = function () {
                return { slots: this.slots };
              }),
              (t.prototype.regenerateCache = function () {
                var e = this;
                jo.forEach(function (t) {
                  var n = e.slots.find(function (e) {
                    return e.id === t.id;
                  });
                  if (!n || n.level < 1)
                    return (
                      (e.cachedCosts[t.id] = []),
                      (e.cachedGains[t.id] = []),
                      (e.cachedCostsUI[t.id] = pe.calcBatch(
                        t.getCost,
                        Zl,
                        new E.Z(1)
                      )),
                      void (e.cachedGainsUI[t.id] = pe.calcBatch(
                        t.getProduce,
                        Zl,
                        new E.Z(1)
                      ))
                    );
                  (e.cachedCosts[t.id] = pe.calcBatch(
                    t.getCost,
                    Zl,
                    new E.Z(n.level)
                  )),
                    (e.cachedGains[t.id] = pe.calcBatch(
                      t.getProduce,
                      Zl,
                      new E.Z(n.level)
                    )),
                    (e.cachedCostsUI[t.id] = Tu([], e.cachedCosts[t.id], !0)),
                    (e.cachedGainsUI[t.id] = Tu([], e.cachedGains[t.id], !0));
                });
              }),
              (t.prototype.processRecipeAvalilable = function (e) {
                var t,
                  n,
                  i,
                  r = this.slots.find(function (t) {
                    return t.id === e.id;
                  }),
                  o =
                    (new E.Z(
                      null !== (t = null == r ? void 0 : r.level) &&
                      void 0 !== t
                        ? t
                        : 0
                    ),
                    e.unlockCondition(Zl));
                return (
                  o &&
                    Zl.city.academyUpgrades.getUpgradeLevel(a.WOODWORKING) >
                      0 &&
                    Zl.newNotifications.registerNotification(
                      "construction:crafting:recipe:".concat(e.id)
                    ),
                  {
                    id: e.id,
                    name: e.name,
                    isUnlocked: o,
                    cost: this.cachedCostsUI[e.id].map(function (e) {
                      return Nu(Nu({}, e), {
                        amountValue: e.amount.toString(),
                        amount: ee(e.amount),
                      });
                    }),
                    gain: this.cachedGainsUI[e.id].map(function (e) {
                      return Nu(Nu({}, e), {
                        amountValue: e.amount.toString(),
                        amount: ee(e.amount),
                      });
                    }),
                    level:
                      null !== (n = null == r ? void 0 : r.level) &&
                      void 0 !== n
                        ? n
                        : 0,
                    isActive: !!(null == r ? void 0 : r.level),
                    isPaused:
                      null !== (i = null == r ? void 0 : r.isPaused) &&
                      void 0 !== i &&
                      i,
                  }
                );
              }),
              (t.prototype.getMaxSlots = function () {
                return (
                  10 +
                  Zl.construction.structures.getStructureLevel(vo.FORGE) +
                  2 * Zl.construction.structures.getStructureLevel(vo.BONE_MILL)
                );
              }),
              (t.prototype.getBusySlots = function () {
                return this.slots.reduce(function (e, t) {
                  return e + t.level;
                }, 0);
              }),
              (t.prototype.dataToUI = function () {
                var e = this,
                  t = jo.map(function (t) {
                    return e.processRecipeAvalilable(t);
                  }),
                  n = this.getBusySlots(),
                  i = this.getMaxSlots();
                return {
                  isUnlocked:
                    Zl.city.academyUpgrades.getUpgradeLevel(a.WOODWORKING) > 0,
                  recipes: t.filter(function (e) {
                    return e.isUnlocked;
                  }),
                  busySlots: n,
                  totalSlots: i,
                };
              }),
              (t.prototype.resetCraftingSlotsTo = function (e) {
                var t = this;
                this.slots.map(function (n, i) {
                  var r;
                  t.slots[i].level =
                    (null ===
                      (r = e.find(function (e) {
                        return e.id === n.id;
                      })) || void 0 === r
                      ? void 0
                      : r.amount) || 0;
                });
              }),
              (t.prototype.setCraftingSlot = function (e, t) {
                var n = this.getBusySlots(),
                  i = this.getMaxSlots() - n,
                  r = this.slots.findIndex(function (t) {
                    return t.id === e;
                  }),
                  o = 0;
                r > -1 && (o = this.slots[r].level),
                  t - o > i && (t = o + i),
                  r > -1
                    ? (this.slots[r].level = t)
                    : this.slots.push({
                        id: e,
                        level: t,
                        isPaused: !1,
                        pauseCd: 0,
                      }),
                  Zl.resources.reassertBalances(),
                  Zl.regenerateCache();
              }),
              (t.prototype.canAfford = function (e, t) {
                for (var n, i = 0, r = e; i < r.length; i++) {
                  var o = r[i];
                  if (
                    null === (n = null == o ? void 0 : o.amount) || void 0 === n
                      ? void 0
                      : n.greaterThan(Zl.resources.getResource(o.id))
                  )
                    return !1;
                }
                return !0;
              }),
              (t.prototype.process = function (e) {
                var t = this,
                  n = !1;
                this.slots.forEach(function (i, r) {
                  i.level < 0 && (i.level = 0),
                    i.level < 1 ||
                      (i.isPaused &&
                        ((t.slots[r].pauseCd += e),
                        t.slots[r].pauseCd > 2 &&
                          ((t.slots[r].isPaused = !1), (n = !0))),
                      t.slots[r].isPaused ||
                        t.canAfford(t.cachedCosts[i.id], e) ||
                        ((t.slots[r].isPaused = !0),
                        (t.slots[r].pauseCd = 0),
                        (n = !0)));
                }),
                  n && (Zl.resources.reassertBalances(), Zl.regenerateCache());
              }),
              (t.prototype.getResourceGain = function (e) {
                var t = this.slots
                    .filter(function (e) {
                      return e.level >= 1;
                    })
                    .reduce(function (e, t) {
                      return (
                        e[t.id] || t.isPaused || (e[t.id] = new E.Z(t.level)), e
                      );
                    }, {}),
                  n = jo.filter(function (n) {
                    return n.getProduce[e] && t[n.id];
                  }),
                  i = [];
                return (
                  n.forEach(function (n) {
                    var r = pe.calculate(Zl, n.getProduce[e], t[n.id]);
                    i.push({
                      label: "Crafting: ".concat(n.name),
                      value: r,
                      id: "Crafting: ".concat(n.id),
                      category: "Crafting",
                    });
                  }),
                  i
                );
              }),
              (t.prototype.getResourceConsumption = function (e) {
                var t = this.slots
                    .filter(function (e) {
                      return e.level >= 1;
                    })
                    .reduce(function (e, t) {
                      return (
                        e[t.id] || t.isPaused || (e[t.id] = new E.Z(t.level)), e
                      );
                    }, {}),
                  n = jo.filter(function (n) {
                    return n.getCost[e] && t[n.id];
                  }),
                  i = [];
                return (
                  n.forEach(function (n) {
                    var r = pe.calculate(Zl, n.getCost[e], t[n.id]);
                    i.push({
                      label: "Crafting: ".concat(n.name),
                      value: r,
                      id: "Crafting: ".concat(n.id),
                      category: "Crafting",
                    });
                  }),
                  i
                );
              }),
              t
            );
          })(s),
          Lu = Ru.getInstance(),
          Ou = [
            {
              id: vo.CRAFTING_TABLE,
              name: "Crafting Table",
              description:
                "You need more tools to make crafting more convenient. But you can craft them, dont you?",
              getCost:
                ((Vo = {}),
                (Vo[i.REFINED_WOOD] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                Vo),
              unlockCondition: function (e) {
                return !0;
              },
              getGainMultiplier:
                ((zo = {}),
                (zo[i.CRAFTSMANSHIP] = function (e) {
                  return { A: new E.Z(0.2), B: new E.Z(1), type: O.LINEAR };
                }),
                zo),
              tags: ["crafting", "craftmanship", "resource"],
            },
            {
              id: vo.TRAINING_BENCH,
              name: "Training Bench",
              description:
                "Very basic, but very helpful equipment for trainings. Provide 5% bonuses to Strength and Vitality",
              getCost:
                ((Qo = {}),
                (Qo[i.REFINED_WOOD] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                Qo),
              unlockCondition: function (e) {
                return !0;
              },
              getAttributeGainMultiplier:
                ((Jo = {}),
                (Jo[c.VITALITY] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.05),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Jo[c.STRENGTH] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.05),
                    type: O.EXPONENTIAL,
                  };
                }),
                Jo),
              tags: ["attribute", "strength", "vitality"],
            },
            {
              id: vo.RUNE_HOLDER,
              name: "Rune Holder",
              description:
                "Lets work on something making runes learning more efficient. At least, these wooden holders should help you a bit",
              getCost:
                (($o = {}),
                ($o[i.REFINED_WOOD] = function (e) {
                  return {
                    A: new E.Z(2),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                ($o[i.MANA] = function (e) {
                  return {
                    A: new E.Z("1.e+8"),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                $o),
              unlockCondition: function (e) {
                return !0;
              },
              getAttributeGainMultiplier:
                ((ea = {}),
                (ea[c.RUNE_MASTERY] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.05),
                    type: O.EXPONENTIAL,
                  };
                }),
                ea),
              tags: ["attribute", "rune mastery"],
            },
            {
              id: vo.BOOKSHELL,
              name: "Bookshelf",
              description:
                "It looks like there is complete disorder in your library. An extra shelf will help organize your writings.",
              getCost:
                ((ta = {}),
                (ta[i.REFINED_WOOD] = function (e) {
                  return {
                    A: new E.Z(5),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (ta[i.MANA] = function (e) {
                  return {
                    A: new E.Z("1.e+8"),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                ta),
              unlockCondition: function (e) {
                return !0;
              },
              getCapacityMultiplier:
                ((na = {}),
                (na[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.05),
                    type: O.EXPONENTIAL,
                  };
                }),
                na),
              tags: ["resource", "knowledge", "capacity"],
            },
            {
              id: vo.MANUSCRIPT,
              name: "Manuscript",
              description:
                "Build some magic manuscript to improve your willpower",
              getCost:
                ((ia = {}),
                (ia[i.PAPER] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (ia[i.MANA] = function (e) {
                  return {
                    A: new E.Z("1.e+10"),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                ia),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.PAPERWORKING) > 0
                );
              },
              getAttributeGainMultiplier:
                ((ra = {}),
                (ra[c.WILLPOWER] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.05),
                    type: O.EXPONENTIAL,
                  };
                }),
                ra),
              tags: ["attribute", "willpower", "mana", "production"],
            },
            {
              id: vo.SCROLL,
              name: "Spell Scroll",
              description: "Spell scroll, boosting your Spellbinding",
              getCost:
                ((oa = {}),
                (oa[i.PAPER] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (oa[i.MANA] = function (e) {
                  return {
                    A: new E.Z("1.e+10"),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                oa),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.PAPERWORKING) > 0
                );
              },
              getAttributeGainMultiplier:
                ((aa = {}),
                (aa[c.MAGIC_KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.05),
                    type: O.EXPONENTIAL,
                  };
                }),
                aa),
              tags: ["attribute", "spellbinding"],
            },
            {
              id: vo.STONE_WALL,
              name: "Stone Wall",
              description:
                "My home is my fortress. Build some walls to prevent yourself from disruption when resting, to increase rest efficiency",
              getCost:
                ((ua = {}),
                (ua[i.BRICK] = function (e) {
                  return {
                    A: new E.Z(2),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (ua[i.REFINED_WOOD] = function (e) {
                  return {
                    A: new E.Z(2),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                ua),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.STONEWORKING) > 0
                );
              },
              getGainMultiplier:
                ((sa = {}),
                (sa[i.ENERGY] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.05),
                    type: O.EXPONENTIAL,
                  };
                }),
                sa),
              tags: ["resource", "energy", "production"],
            },
            {
              id: vo.CELLAR,
              name: "Cellar",
              description: "You must have some place to store your goods",
              getCost:
                ((ca = {}),
                (ca[i.BRICK] = function (e) {
                  return {
                    A: new E.Z(3),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (ca[i.REFINED_WOOD] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                ca),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.STONEWORKING) > 0
                );
              },
              getCapacityMultiplier:
                ((la = {}),
                (la[i.COINS] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.05),
                    type: O.EXPONENTIAL,
                  };
                }),
                (la[i.BONE] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(
                      1 +
                        0.05 *
                          e.city.academyUpgrades.getUpgradeLevel(a.BONE_DRYING)
                    ),
                    type: O.EXPONENTIAL,
                  };
                }),
                la),
              tags: ["coins", "storage", "resource"],
            },
            {
              id: vo.LUMBERMILL,
              name: "Lumbermill",
              description: "Increase your wood craft efficiency",
              getCost:
                ((da = {}),
                (da[i.BRICK] = function (e) {
                  return {
                    A: new E.Z(2),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (da[i.REFINED_WOOD] = function (e) {
                  return {
                    A: new E.Z(5),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                da),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.STONEWORKING) > 0
                );
              },
              getGainMultiplier:
                ((pa = {}),
                (pa[i.REFINED_WOOD] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.05),
                    type: O.EXPONENTIAL,
                  };
                }),
                (pa[i.CHARGED_WOOD] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.05),
                    type: O.EXPONENTIAL,
                  };
                }),
                pa),
              tags: ["wood", "production", "resource", "crafting"],
            },
            {
              id: vo.MAGIC_CLOCK,
              name: "Magic Clock",
              description:
                "Create clock that able to slow down time around you, increasing your actions speed",
              getCost:
                ((fa = {}),
                (fa[i.CHARGED_WOOD] = function (e) {
                  return {
                    A: new E.Z(3),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (fa[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z("1.e+13"),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                fa),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.CHARGED_CRAFTING) > 0
                );
              },
              getAttributeGainMultiplier:
                ((ga = {}),
                (ga[c.AGILITY] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.05),
                    type: O.EXPONENTIAL,
                  };
                }),
                ga),
              tags: ["attribute", "agility", "action speed"],
            },
            {
              id: vo.MAGIC_SCROLL,
              name: "Magic Scroll",
              description:
                "Create more sophisticated but pretty useful scroll, amplifying your magic and mental abilities",
              getCost:
                ((ma = {}),
                (ma[i.CHARGED_PAPER] = function (e) {
                  return {
                    A: new E.Z(3),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (ma[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z("1.e+13"),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                ma),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.CHARGED_CRAFTING) > 0
                );
              },
              getAttributeGainMultiplier:
                ((ha = {}),
                (ha[c.RUNE_READING] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.02),
                    type: O.EXPONENTIAL,
                  };
                }),
                (ha[c.MAGIC_KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.02),
                    type: O.EXPONENTIAL,
                  };
                }),
                ha),
              tags: ["attribute", "intellect", "spellbinding"],
            },
            {
              id: vo.MANA_ORB,
              name: "Knowledge Orb",
              description:
                "Put magic parchment into glass sphere to crate magic resonance, boosting your knowledge gain",
              getCost:
                ((ya = {}),
                (ya[i.GLASS] = function (e) {
                  return {
                    A: new E.Z(3),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (ya[i.CHARGED_PAPER] = function (e) {
                  return {
                    A: new E.Z(3),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                ya),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.GLASSMAKING) > 0
                );
              },
              getGainMultiplier:
                ((Ea = {}),
                (Ea[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.05),
                    type: O.EXPONENTIAL,
                  };
                }),
                Ea),
              tags: ["knowledge", "production", "resource"],
            },
            {
              id: vo.CONJURATION_ORB,
              name: "Conjuration Orb",
              description: "Increase your conjuration spell speed",
              getCost:
                ((Aa = {}),
                (Aa[i.CHARGED_WOOD] = function (e) {
                  return {
                    A: new E.Z(5),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Aa[i.GLASS] = function (e) {
                  return {
                    A: new E.Z(5),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                Aa),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.GLASSMAKING) > 0
                );
              },
              getAttributeGainMultiplier:
                ((va = {}),
                (va[c.CONJURATION_LORE] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.05),
                    type: O.EXPONENTIAL,
                  };
                }),
                va),
              tags: ["attribute", "conjuration lore"],
            },
            {
              id: vo.FORGE,
              name: "Forge",
              description: "Increase your max crafting slots by 1",
              getCost:
                ((wa = {}),
                (wa[i.REFINED_WOOD] = function (e) {
                  return {
                    A: new E.Z(5),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (wa[i.BRICK] = function (e) {
                  return {
                    A: new E.Z(5),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (wa[i.IRON_PLATE] = function (e) {
                  return {
                    A: new E.Z(5),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                wa),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.METALWORKING) > 0
                );
              },
              tags: ["crafting", "slots"],
            },
            {
              id: vo.STONE_CRUSHER,
              name: "Stone Crusher",
              description: "Increase your brick and sand output",
              getCost:
                ((ba = {}),
                (ba[i.REFINED_WOOD] = function (e) {
                  return {
                    A: new E.Z(5),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (ba[i.IRON_PLATE] = function (e) {
                  return {
                    A: new E.Z(10),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                ba),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.METALWORKING) > 0
                );
              },
              getGainMultiplier:
                ((Ia = {}),
                (Ia[i.BRICK] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.05),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Ia[i.SAND] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.05),
                    type: O.EXPONENTIAL,
                  };
                }),
                Ia),
              tags: ["brick", "sand", "production", "resource"],
            },
            {
              id: vo.ELEMENTAL_MONUMENT,
              name: "Elemental Monument",
              description: "Increase your spark income",
              getCost:
                ((Ca = {}),
                (Ca[i.REFINED_WOOD] = function (e) {
                  return {
                    A: new E.Z(500),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Ca[i.ELEMENTAL_BRICK] = function (e) {
                  return {
                    A: new E.Z(3),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                Ca),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.ELEMENTAL_BRICK) > 0
                );
              },
              getGainMultiplier:
                ((Na = {}),
                (Na[i.SPARK] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.05),
                    type: O.EXPONENTIAL,
                  };
                }),
                Na),
              tags: ["elemental", "spark", "production", "resource"],
            },
            {
              id: vo.STONE_COMPENDIUM,
              name: "Stone Compendium",
              description: "Consists of knowledge of the ancient",
              getCost:
                ((Ta = {}),
                (Ta[i.CHARGED_PAPER] = function (e) {
                  return {
                    A: new E.Z(50),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Ta[i.ELEMENTAL_BRICK] = function (e) {
                  return {
                    A: new E.Z(3),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                Ta),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.ELEMENTAL_BRICK) > 0
                );
              },
              getGainMultiplier:
                ((Ra = {}),
                (Ra[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.05),
                    type: O.EXPONENTIAL,
                  };
                }),
                Ra),
              tags: ["elemental", "knowledge", "production", "resource"],
            },
            {
              id: vo.ELEMENTAL_TOWER,
              name: "Elemental Tower",
              description:
                "Must have building for all mages. Boosts your elemental damage",
              getCost:
                ((La = {}),
                (La[i.ELEMENTAL_BRICK] = function (e) {
                  return {
                    A: new E.Z(5),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (La[i.ELEMENTAL_PLATE] = function (e) {
                  return {
                    A: new E.Z(3),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                La),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.ELEMENTAL_PLATE) > 0
                );
              },
              getBattleAttributeGainMultiplier:
                ((Oa = {}),
                (Oa[l.FIRE_DAMAGE] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.05),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Oa[l.MAGICAL_DAMAGE] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.05),
                    type: O.EXPONENTIAL,
                  };
                }),
                Oa),
              tags: ["elemental", "battle", "damage", "fight"],
            },
            {
              id: vo.MAGIC_PRINTER,
              name: "Magic Printer",
              description:
                "Advanced printing mechanism, boosting your paper goods production",
              getCost:
                ((Sa = {}),
                (Sa[i.CHARGED_WOOD] = function (e) {
                  return {
                    A: new E.Z(50),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Sa[i.ELEMENTAL_PLATE] = function (e) {
                  return {
                    A: new E.Z(3),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                Sa),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.ELEMENTAL_PLATE) > 0
                );
              },
              getGainMultiplier:
                ((Ma = {}),
                (Ma[i.PAPER] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.05),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Ma[i.CHARGED_PAPER] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.05),
                    type: O.EXPONENTIAL,
                  };
                }),
                Ma),
              tags: ["elemental", "paper", "production", "resource"],
            },
            {
              id: vo.ELEMENTAL_RESONATOR,
              name: "Elemental Resonator",
              description:
                "Creates magic resonance between your mind and material things surrounding you, boosting your conjuration lore even more",
              getCost:
                ((Pa = {}),
                (Pa[i.GLASS] = function (e) {
                  return {
                    A: new E.Z(50),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Pa[i.ELEMENTAL_BRICK] = function (e) {
                  return {
                    A: new E.Z(3),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                Pa),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(
                    a.ELEMENTAL_RESONATOR
                  ) > 0
                );
              },
              getAttributeGainMultiplier:
                ((Za = {}),
                (Za[c.CONJURATION_LORE] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.05),
                    type: O.EXPONENTIAL,
                  };
                }),
                Za),
              tags: ["elemental", "resonance", "conjuration", "attribute"],
            },
            {
              id: vo.MIND_RESONATOR,
              name: "Mind Resonator",
              description:
                "Creates resonance between your brain impulses, severely boosting your mental activities efficiency",
              getCost:
                ((_a = {}),
                (_a[i.CHARGED_WOOD] = function (e) {
                  return {
                    A: new E.Z(50),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (_a[i.ELEMENTAL_PLATE] = function (e) {
                  return {
                    A: new E.Z(3),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                _a),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(
                    a.ELEMENTAL_RESONATOR
                  ) > 0
                );
              },
              getAttributeGainMultiplier:
                ((Ga = {}),
                (Ga[c.RUNE_READING] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.05),
                    type: O.EXPONENTIAL,
                  };
                }),
                Ga),
              tags: ["elemental", "resonance", "intellect", "attribute"],
            },
            {
              id: vo.BONE_STORAGE,
              name: "Bone Storage",
              description: "Increase your bone storage capacity",
              getCost:
                ((Da = {}),
                (Da[i.REFINED_WOOD] = function (e) {
                  return {
                    A: new E.Z(50),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Da[i.BRICK] = function (e) {
                  return {
                    A: new E.Z(100),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Da[i.BONE] = function (e) {
                  return {
                    A: new E.Z(10),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                Da),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.BONE_EXTRACTION) > 0
                );
              },
              getCapacityEffect:
                ((ka = {}),
                (ka[i.BONE] = function (e) {
                  return { A: new E.Z(50), B: new E.Z(0), type: O.LINEAR };
                }),
                ka),
              tags: ["bone", "storage", "resource"],
            },
            {
              id: vo.BONE_AMULET,
              name: "Bone Charm",
              description: "Increase your max HP",
              getCost:
                ((Ba = {}),
                (Ba[i.IRON_PLATE] = function (e) {
                  return {
                    A: new E.Z(100),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Ba[i.BONE] = function (e) {
                  return {
                    A: new E.Z(25),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                Ba),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.BONE_EXTRACTION) > 0
                );
              },
              getBattleAttributeGainMultiplier:
                ((Ua = {}),
                (Ua[l.MAX_HP] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.05),
                    type: O.EXPONENTIAL,
                  };
                }),
                Ua),
              tags: ["hp", "fighting", "battle", "bone"],
            },
            {
              id: vo.BONE_STATUE,
              name: "Bone Statue",
              description: "Increase your mana income significantly",
              getCost:
                ((xa = {}),
                (xa[i.GLASS] = function (e) {
                  return {
                    A: new E.Z(10),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (xa[i.BONE] = function (e) {
                  return {
                    A: new E.Z(25),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                xa),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.BONE_EXTRACTION) > 0
                );
              },
              getGainMultiplier:
                ((Ha = {}),
                (Ha[i.MANA] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.05),
                    type: O.EXPONENTIAL,
                  };
                }),
                Ha),
              tags: ["mana", "production", "resource", "bone"],
            },
            {
              id: vo.BONE_RACK,
              name: "Bone Rack",
              description: "Increase your knowledge capacity even more",
              getCost:
                ((Wa = {}),
                (Wa[i.REFINED_WOOD] = function (e) {
                  return {
                    A: new E.Z(100),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Wa[i.BONE] = function (e) {
                  return {
                    A: new E.Z(10),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                Wa),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.BONE_EXTRACTION) > 0
                );
              },
              getCapacityMultiplier:
                ((Ya = {}),
                (Ya[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(0.1), B: new E.Z(1), type: O.LINEAR };
                }),
                Ya),
              tags: ["knowledge", "storage", "resource", "bone"],
            },
            {
              id: vo.BONE_BANNER,
              name: "Bone Banner",
              description: "Raise your spirits, increasing battle stamina",
              getCost:
                ((qa = {}),
                (qa[i.CHARGED_WOOD] = function (e) {
                  return {
                    A: new E.Z(30),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (qa[i.BONE] = function (e) {
                  return {
                    A: new E.Z(15),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                qa),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(
                    a.ADVANCED_BONES_MECHANISMS
                  ) > 0
                );
              },
              getAttributeGainMultiplier:
                ((Xa = {}),
                (Xa[c.STAMINA] = function (e) {
                  return {
                    A: new E.Z(1),
                    B: new E.Z(1.05),
                    type: O.EXPONENTIAL,
                  };
                }),
                Xa),
              tags: ["attribute", "stamina", "fight", "battle", "bone"],
            },
            {
              id: vo.BONE_MILL,
              name: "Bone Mill",
              description:
                "A machine made of bones, magic and love to craftsmanship. Increase your crafting slots by 2",
              getCost:
                ((Ka = {}),
                (Ka[i.BRICK] = function (e) {
                  return {
                    A: new E.Z(200),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Ka[i.BONE] = function (e) {
                  return {
                    A: new E.Z(15),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                (Ka[i.KNOWLEDGE] = function (e) {
                  return {
                    A: new E.Z("1.e+17"),
                    B: new E.Z(1.2),
                    type: O.EXPONENTIAL,
                  };
                }),
                Ka),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(
                    a.ADVANCED_BONES_MECHANISMS
                  ) > 0
                );
              },
              tags: ["crafting", "slots", "bone"],
            },
          ],
          Su = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function i() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((i.prototype = n.prototype), new i()));
            };
          })(),
          Mu = function () {
            return (
              (Mu =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, r) &&
                        (e[r] = t[r]);
                  return e;
                }),
              Mu.apply(this, arguments)
            );
          },
          Pu = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.structures = []),
                (t.cachedStructures = []),
                (t.tickPerf = 0),
                t.workDispatcher.on("[structures] do build", function (e) {
                  console.log("do build", e), t.doBuild(e.id, e.amt);
                }),
                t.workDispatcher.on(
                  "[structures] toggle automate",
                  function (e) {
                    console.log("do build", e);
                    var n = t.structures.find(function (t) {
                      return t.id === e.id;
                    });
                    n && (n.isAutobuild = !n.isAutobuild);
                  }
                ),
                t.workDispatcher.on(
                  "[structures] toggle automate all",
                  function (e) {
                    console.log("do build", e),
                      t.structures.forEach(function (t) {
                        return (t.isAutobuild = e);
                      });
                  }
                ),
                t
              );
            }
            return (
              Su(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                this.structures =
                  (null == e
                    ? void 0
                    : e.list.map(function (e) {
                        return Mu({}, e);
                      })) || [];
              }),
              (t.prototype.exportData = function () {
                return {
                  list: this.structures.map(function (e) {
                    return Mu({}, e);
                  }),
                };
              }),
              (t.prototype.regenerateCache = function () {
                var e = this;
                (this.tickPerf = 0),
                  (this.cachedStructures = Ou.map(function (t) {
                    return e.processToUI(t);
                  }));
              }),
              (t.prototype.dataFromCache = function () {
                var e = this;
                return this.cachedStructures
                  .filter(function (e) {
                    return e.isUnlocked;
                  })
                  .map(function (t) {
                    var n = Ou.find(function (e) {
                      return e.id === t.id;
                    });
                    if (!n) return t;
                    var i = e.structures.find(function (e) {
                      return e.id === n.id;
                    });
                    i ||
                      ((i = { id: n.id, level: 0, isAutobuild: !1 }),
                      e.structures.push(i));
                    var r = pe.calcBatchAll(
                        n.getCost,
                        Pl.getInstance(),
                        new E.Z(i.level),
                        Pl.getInstance().resources.getBatchObject()
                      ),
                      o =
                        (r.reduce(function (e, t) {
                          return e && !t.isBlocked;
                        }, !0),
                        r.reduce(function (e, t) {
                          return Math.max(e, t.eta);
                        }, 0)),
                      u = r.reduce(function (e, t) {
                        return E.Z.min(e, t.max);
                      }, new E.Z("1.e+30000"));
                    return (
                      Zl.city.academyUpgrades.getUpgradeLevel(a.WOODWORKING) >
                        0 &&
                        Zl.newNotifications.registerNotification(
                          "construction:structures:structure:".concat(n.id)
                        ),
                      Mu(Mu({}, t), {
                        etaNum: o,
                        isAvailable: u.greaterThanOrEqualTo(1),
                        cost: Pl.getInstance().resources.assertEnought(
                          r,
                          Pl.getInstance().resources.getBatchObject(),
                          Pl.getInstance().resources.getBatchBalanceObject()
                        ),
                        progress: u.lessThan(1)
                          ? (100 * u.toNumber()).toPrecision(3)
                          : "100",
                      })
                    );
                  });
              }),
              (t.prototype.dataToUI = function () {
                return {
                  list: this.dataFromCache(),
                  isUnlocked: Pl.getInstance()
                    .resources.getResourceCap(i.MANA)
                    .greaterThanOrEqualTo(10),
                };
              }),
              (t.prototype.getStructureLevel = function (e) {
                var t;
                return (
                  (null ===
                    (t = this.structures.find(function (t) {
                      return t.id === e;
                    })) || void 0 === t
                    ? void 0
                    : t.level) || 0
                );
              }),
              (t.prototype.processToUI = function (e, t) {
                void 0 === t && (t = 1);
                var n = this.structures.find(function (t) {
                  return t.id === e.id;
                });
                n ||
                  ((n = { id: e.id, level: 0, isAutobuild: !1 }),
                  this.structures.push(n));
                var i = pe.calcBatchAll(
                    e.getCost,
                    Pl.getInstance(),
                    new E.Z(n.level + t),
                    Pl.getInstance().resources.getBatchObject()
                  ),
                  r = e.getGain
                    ? pe.calcBatch(e.getGain, Zl, new E.Z(n.level))
                    : [],
                  o = e.getGainMultiplier
                    ? pe.calcBatch(
                        e.getGainMultiplier,
                        Zl,
                        new E.Z(n.level + t)
                      )
                    : [],
                  a = e.getCapacityEffect
                    ? pe.calcBatch(
                        e.getCapacityEffect,
                        Zl,
                        new E.Z(n.level + t)
                      )
                    : [],
                  u = e.getCapacityMultiplier
                    ? pe.calcBatch(
                        e.getCapacityMultiplier,
                        Zl,
                        new E.Z(n.level + t)
                      )
                    : [],
                  s = e.getAttributeGain
                    ? pe.calcBatch(e.getAttributeGain, Zl, new E.Z(n.level + t))
                    : [],
                  c = e.getAttributeGainMultiplier
                    ? pe.calcBatch(
                        e.getAttributeGainMultiplier,
                        Zl,
                        new E.Z(n.level + t)
                      )
                    : [],
                  l = e.getBattleAttributeGain
                    ? pe.calcBatch(
                        e.getBattleAttributeGain,
                        Zl,
                        new E.Z(n.level + t)
                      )
                    : [],
                  d = e.getBattleAttributeGainMultiplier
                    ? pe.calcBatch(
                        e.getBattleAttributeGainMultiplier,
                        Zl,
                        new E.Z(n.level + t)
                      )
                    : [],
                  p = i.reduce(function (e, t) {
                    return e && !t.isBlocked;
                  }, !0),
                  f = i.reduce(function (e, t) {
                    return Math.max(e, t.eta);
                  }, 0),
                  g = i.reduce(function (e, t) {
                    return E.Z.min(e, t.max);
                  }, new E.Z("1.e+30000")),
                  m = e.unlockCondition(Zl);
                return {
                  id: e.id,
                  name: e.name,
                  description: e.description,
                  isUnlocked: m,
                  isAvailable: g.greaterThanOrEqualTo(1),
                  cost: Pl.getInstance().resources.assertEnought(
                    i,
                    Pl.getInstance().resources.getBatchObject(),
                    Pl.getInstance().resources.getBatchBalanceObject()
                  ),
                  level: n.level,
                  isAutobuild: n.isAutobuild,
                  isBlocked: !p,
                  etaNum: f,
                  attr: s.map(function (e) {
                    return Mu(Mu({}, e), {
                      amountValue: e.amount.toString(),
                      amount: "+".concat(ee(e.amount)),
                    });
                  }),
                  attrMult: c.map(function (e) {
                    return Mu(Mu({}, e), {
                      amountValue: e.amount.toString(),
                      amount: "x".concat(ee(e.amount)),
                    });
                  }),
                  battleAttr: l.map(function (e) {
                    return Mu(Mu({}, e), {
                      amountValue: e.amount.toString(),
                      amount: "+".concat(ee(e.amount)),
                    });
                  }),
                  battleAttrMult: d.map(function (e) {
                    return Mu(Mu({}, e), {
                      amountValue: e.amount.toString(),
                      amount: "x".concat(ee(e.amount)),
                    });
                  }),
                  capGain: a.map(function (e) {
                    return Mu(Mu({}, e), {
                      amountValue: e.amount.toString(),
                      amount: "+".concat(ee(e.amount)),
                    });
                  }),
                  capMult: u.map(function (e) {
                    return Mu(Mu({}, e), {
                      amountValue: e.amount.toString(),
                      amount: "x".concat(ee(e.amount)),
                    });
                  }),
                  gain: r.map(function (e) {
                    return Mu(Mu({}, e), {
                      amountValue: e.amount.toString(),
                      amount: "+".concat(ee(e.amount)),
                    });
                  }),
                  gainMult: o.map(function (e) {
                    return Mu(Mu({}, e), {
                      amountValue: e.amount.toString(),
                      amount: "x".concat(ee(e.amount)),
                    });
                  }),
                  progress: g.lessThan(1)
                    ? (100 * g.toNumber()).toPrecision(3)
                    : "100",
                  tags: e.tags,
                };
              }),
              (t.prototype.doBuild = function (e, t) {
                void 0 === t && (t = 1);
                var n = Ou.find(function (t) {
                  return t.id === e;
                });
                if ((console.log("[construct] db", n), n)) {
                  var i = this.structures.findIndex(function (t) {
                    return t.id === e;
                  });
                  i < 0 &&
                    ((i = this.structures.length),
                    this.structures.push({ id: e, level: 0, isAutobuild: !1 }));
                  var r = pe
                    .calcBatchAll(
                      n.getCost,
                      Pl.getInstance(),
                      new E.Z(this.structures[i].level),
                      Pl.getInstance().resources.getBatchObject(),
                      new E.Z(t)
                    )
                    .reduce(function (e, t) {
                      return E.Z.min(e, t.max.floor());
                    }, new E.Z("1.e+30000"));
                  if (
                    (console.log("[upgrade] mx: ", r.toNumber()),
                    !r.lessThan(1))
                  ) {
                    var o = E.Z.min(t, r),
                      a = pe.calcBatchAll(
                        n.getCost,
                        Pl.getInstance(),
                        new E.Z(this.structures[i].level),
                        Pl.getInstance().resources.getBatchObject(),
                        o
                      );
                    return (
                      (this.structures[i].level =
                        this.structures[i].level + o.toNumber()),
                      console.log("costs: ", a, o.toNumber()),
                      Pl.getInstance().resources.subtractResourceBatch(a),
                      Zl.resources.reassertBalances(),
                      Zl.regenerateCache(),
                      !0
                    );
                  }
                }
              }),
              (t.prototype.process = function (e) {
                var t = this;
                if (Zl.statistics.stats.timeInGame % 5 <= e) {
                  var n = performance.now(),
                    i = Ou.filter(function (e) {
                      return e.unlockCondition(Zl);
                    }).reduce(function (e, t) {
                      return (e[t.id] = t), e;
                    }, {});
                  this.structures.forEach(function (e) {
                    i[e.id] && e.isAutobuild && t.doBuild(e.id);
                  }),
                    console.log(
                      "[autobuild] finished in " +
                        (performance.now() - n) +
                        "ms"
                    );
                }
              }),
              (t.prototype.reset = function () {
                this.structures = [];
              }),
              (t.prototype.getResourceBeingProduced = function (e) {
                var t = this.structures
                    .filter(function (e) {
                      return e.level >= 1;
                    })
                    .reduce(function (e, t) {
                      return e[t.id] || (e[t.id] = new E.Z(t.level)), e;
                    }, {}),
                  n = Ou.filter(function (n) {
                    var i;
                    return (
                      (null === (i = n.getGain) || void 0 === i
                        ? void 0
                        : i[e]) && t[n.id]
                    );
                  }),
                  i = [];
                return (
                  n.forEach(function (n) {
                    var r;
                    if (
                      null === (r = n.getGain) || void 0 === r ? void 0 : r[e]
                    ) {
                      var o = pe.calculate(Zl, n.getGain[e], t[n.id]);
                      o.eq(0) ||
                        i.push({
                          label: "Structures: ".concat(n.name),
                          value: o,
                          id: "Structure: ".concat(n.id),
                          category: "Structures",
                        });
                    }
                  }),
                  i
                );
              }),
              (t.prototype.getResourceBeingStored = function (e) {
                var t = this.structures
                    .filter(function (e) {
                      return e.level >= 1;
                    })
                    .reduce(function (e, t) {
                      return e[t.id] || (e[t.id] = new E.Z(t.level)), e;
                    }, {}),
                  n = Ou.filter(function (n) {
                    var i;
                    return (
                      (null === (i = n.getCapacityEffect) || void 0 === i
                        ? void 0
                        : i[e]) && t[n.id]
                    );
                  }),
                  i = [];
                return (
                  n.forEach(function (n) {
                    var r;
                    if (
                      null === (r = n.getCapacityEffect) || void 0 === r
                        ? void 0
                        : r[e]
                    ) {
                      var o = pe.calculate(Zl, n.getCapacityEffect[e], t[n.id]);
                      o.eq(0) ||
                        i.push({
                          label: "Structures: ".concat(n.name),
                          value: o,
                          id: "Structure: ".concat(n.id),
                          category: "Structures",
                        });
                    }
                  }),
                  i
                );
              }),
              (t.prototype.getResourceBeingStoredMultiplier = function (e) {
                var t = this.structures
                    .filter(function (e) {
                      return e.level >= 1;
                    })
                    .reduce(function (e, t) {
                      return e[t.id] || (e[t.id] = new E.Z(t.level)), e;
                    }, {}),
                  n = Ou.filter(function (n) {
                    var i;
                    return (
                      (null === (i = n.getCapacityMultiplier) || void 0 === i
                        ? void 0
                        : i[e]) && t[n.id]
                    );
                  }),
                  i = [];
                return (
                  n.forEach(function (n) {
                    var r;
                    if (
                      null === (r = n.getCapacityMultiplier) || void 0 === r
                        ? void 0
                        : r[e]
                    ) {
                      var o = pe.calculate(
                        Zl,
                        n.getCapacityMultiplier[e],
                        t[n.id]
                      );
                      o.eq(1) ||
                        i.push({
                          label: "Structures: ".concat(n.name),
                          value: o,
                          id: "Structure: ".concat(n.id),
                          category: "Structures",
                        });
                    }
                  }),
                  i
                );
              }),
              (t.prototype.getAttributeProduced = function (e) {
                var t = this.structures
                    .filter(function (e) {
                      return e.level >= 1;
                    })
                    .reduce(function (e, t) {
                      return e[t.id] || (e[t.id] = new E.Z(t.level)), e;
                    }, {}),
                  n = Ou.filter(function (n) {
                    var i;
                    return (
                      (null === (i = n.getAttributeGain) || void 0 === i
                        ? void 0
                        : i[e]) && t[n.id]
                    );
                  }),
                  i = [];
                return (
                  n.forEach(function (n) {
                    var r;
                    if (
                      null === (r = n.getAttributeGain) || void 0 === r
                        ? void 0
                        : r[e]
                    ) {
                      var o = pe.calculate(Zl, n.getAttributeGain[e], t[n.id]);
                      o.eq(0) ||
                        i.push({
                          label: "Structures: ".concat(n.name),
                          value: o,
                          id: "Structure: ".concat(n.id),
                          category: "Structures",
                        });
                    }
                  }),
                  i
                );
              }),
              (t.prototype.getAttributeMultiplier = function (e) {
                var t = this.structures
                    .filter(function (e) {
                      return e.level >= 1;
                    })
                    .reduce(function (e, t) {
                      return e[t.id] || (e[t.id] = new E.Z(t.level)), e;
                    }, {}),
                  n = Ou.filter(function (n) {
                    var i;
                    return (
                      (null === (i = n.getAttributeGainMultiplier) ||
                      void 0 === i
                        ? void 0
                        : i[e]) && t[n.id]
                    );
                  }),
                  i = [];
                return (
                  n.forEach(function (n) {
                    var r;
                    if (
                      null === (r = n.getAttributeGainMultiplier) ||
                      void 0 === r
                        ? void 0
                        : r[e]
                    ) {
                      var o = pe.calculate(
                        Zl,
                        n.getAttributeGainMultiplier[e],
                        t[n.id]
                      );
                      o.eq(0) ||
                        i.push({
                          label: "Structures: ".concat(n.name),
                          value: o,
                          id: "Structure: ".concat(n.id),
                          category: "Structures",
                        });
                    }
                  }),
                  i
                );
              }),
              (t.prototype.getBattleAttributeProduced = function (e) {
                var t = this.structures
                    .filter(function (e) {
                      return e.level >= 1;
                    })
                    .reduce(function (e, t) {
                      return e[t.id] || (e[t.id] = new E.Z(t.level)), e;
                    }, {}),
                  n = Ou.filter(function (n) {
                    var i;
                    return (
                      (null === (i = n.getBattleAttributeGain) || void 0 === i
                        ? void 0
                        : i[e]) && t[n.id]
                    );
                  }),
                  i = [];
                return (
                  n.forEach(function (n) {
                    var r;
                    if (
                      null === (r = n.getBattleAttributeGain) || void 0 === r
                        ? void 0
                        : r[e]
                    ) {
                      var o = pe.calculate(
                        Zl,
                        n.getBattleAttributeGain[e],
                        t[n.id]
                      );
                      o.eq(0) ||
                        i.push({
                          label: "Structures: ".concat(n.name),
                          value: o,
                          id: "Structure: ".concat(n.id),
                          category: "Structures",
                        });
                    }
                  }),
                  i
                );
              }),
              (t.prototype.getBattleAttributeMultiplier = function (e) {
                var t = this.structures
                    .filter(function (e) {
                      return e.level >= 1;
                    })
                    .reduce(function (e, t) {
                      return e[t.id] || (e[t.id] = new E.Z(t.level)), e;
                    }, {}),
                  n = Ou.filter(function (n) {
                    var i;
                    return (
                      (null === (i = n.getBattleAttributeGainMultiplier) ||
                      void 0 === i
                        ? void 0
                        : i[e]) && t[n.id]
                    );
                  }),
                  i = [];
                return (
                  n.forEach(function (n) {
                    var r;
                    if (
                      null === (r = n.getBattleAttributeGainMultiplier) ||
                      void 0 === r
                        ? void 0
                        : r[e]
                    ) {
                      var o = pe.calculate(
                        Zl,
                        n.getBattleAttributeGainMultiplier[e],
                        t[n.id]
                      );
                      o.eq(0) ||
                        i.push({
                          label: "Structures: ".concat(n.name),
                          value: o,
                          id: "Structure: ".concat(n.id),
                          category: "Structures",
                        });
                    }
                  }),
                  i
                );
              }),
              (t.prototype.getGainMultiplier = function (e) {
                var t = this.structures
                    .filter(function (e) {
                      return e.level >= 1;
                    })
                    .reduce(function (e, t) {
                      return e[t.id] || (e[t.id] = new E.Z(t.level)), e;
                    }, {}),
                  n = Ou.filter(function (n) {
                    var i;
                    return (
                      (null === (i = n.getGainMultiplier) || void 0 === i
                        ? void 0
                        : i[e]) && t[n.id]
                    );
                  }),
                  i = [];
                return (
                  n.forEach(function (n) {
                    var r;
                    if (
                      null === (r = n.getGainMultiplier) || void 0 === r
                        ? void 0
                        : r[e]
                    ) {
                      var o = pe.calculate(Zl, n.getGainMultiplier[e], t[n.id]);
                      o.eq(1) ||
                        i.push({
                          label: "Structures: ".concat(n.name),
                          value: o,
                          id: "Structure: ".concat(n.id),
                          category: "Structures",
                        });
                    }
                  }),
                  i
                );
              }),
              t
            );
          })(s),
          Zu = Pu.getInstance(),
          _u = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function i() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((i.prototype = n.prototype), new i()));
            };
          })(),
          Gu = function () {
            return (
              (Gu =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, r) &&
                        (e[r] = t[r]);
                  return e;
                }),
              Gu.apply(this, arguments)
            );
          },
          Du = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.presets = []),
                t.workDispatcher.on("[crafting-presets] do save", function (e) {
                  console.log("do save", e), t.savePreset(e);
                }),
                t.workDispatcher.on("[crafting-presets] delete", function (e) {
                  console.log("do delete", e), t.deletePreset(e.id);
                }),
                t.workDispatcher.on("[crafting-presets] run", function (e) {
                  console.log("do run", e), t.runPreset(e.id);
                }),
                t.workDispatcher.on("[crafting-presets] stop", function (e) {
                  console.log("do stop", e), t.stopPreset();
                }),
                t
              );
            }
            return (
              _u(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                (this.presets = (null == e ? void 0 : e.presets) || []),
                  (this.active = null == e ? void 0 : e.runningId);
              }),
              (t.prototype.exportData = function () {
                return { presets: this.presets, runningId: this.active };
              }),
              (t.prototype.processListToUI = function (e) {
                var t = jo
                  .filter(function (e) {
                    return e.unlockCondition(Zl);
                  })
                  .reduce(function (e, t) {
                    return (e[t.id] = t), e;
                  }, {});
                return {
                  id: e.id,
                  name: e.name,
                  items: e.items.map(function (e, n) {
                    return {
                      id: e.id,
                      name: t[e.id].name,
                      amount: e.amount,
                      isPercentage: e.isPercentage,
                    };
                  }),
                };
              }),
              (t.prototype.dataToUI = function () {
                var e = this;
                return {
                  isUnlocked:
                    Pl.getInstance().statistics.stats.numRuneResets > 0,
                  list: this.presets.map(function (t) {
                    return e.processListToUI(t);
                  }),
                  active: this.active
                    ? { id: this.active, name: this.getActiveName() }
                    : void 0,
                };
              }),
              (t.prototype.savePreset = function (e) {
                if (!e.name) throw new Error("Preset name should not be empty");
                if (e.id) {
                  var t = this.presets.findIndex(function (t) {
                    return t.id === e.id;
                  });
                  t > -1 && (this.presets[t] = e);
                } else
                  (e = Gu(Gu({}, e), { id: "".concat(Math.random()) })),
                    this.presets.push(e);
              }),
              (t.prototype.deletePreset = function (e) {
                var t = this.presets.findIndex(function (t) {
                  return t.id === e;
                });
                t > -1 && this.presets.splice(t, 1),
                  this.active === e && (this.active = void 0);
              }),
              (t.prototype.runPreset = function (e) {
                this.presets.findIndex(function (t) {
                  return t.id === e;
                }) > -1 && (this.active = e),
                  this.applyPreset();
              }),
              (t.prototype.stopPreset = function () {
                this.active = void 0;
              }),
              (t.prototype.getActiveName = function () {
                var e = this;
                if (this.active && Zl.statistics.stats.numRuneResets) {
                  var t = this.presets.find(function (t) {
                    return t.id === e.active;
                  });
                  if (t) return t.name;
                }
              }),
              (t.prototype.applyPreset = function () {
                var e = this;
                if (this.active && Zl.statistics.stats.numRuneResets) {
                  var t = this.presets.find(function (t) {
                    return t.id === e.active;
                  });
                  if (t) {
                    var n = t.items.filter(function (e) {
                        return !e.isPercentage && e.amount > 0;
                      }),
                      i = [],
                      r = Zl.construction.crafting.getMaxSlots();
                    n.forEach(function (e) {
                      var t = Math.min(e.amount, r);
                      i.push({ id: e.id, amount: t }), (r -= t);
                    });
                    var o = t.items.filter(function (e) {
                        return e.isPercentage;
                      }),
                      a = o.reduce(function (e, t) {
                        return e + t.amount;
                      }, 0);
                    a > 100 &&
                      o.forEach(function (e) {
                        e.amount = (e.amount / a) * 100;
                      });
                    var u = r;
                    o.forEach(function (e) {
                      var t = Math.floor((e.amount / 100) * u);
                      i.push({ id: e.id, amount: t }), (r -= t);
                    }),
                      Zl.construction.crafting.resetCraftingSlotsTo(i);
                  }
                }
              }),
              t
            );
          })(s).getInstance(),
          ku = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function i() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((i.prototype = n.prototype), new i()));
            };
          })(),
          Bu = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.crafting = Lu),
                (t.structures = Zu),
                (t.craftingPresets = Du),
                t
              );
            }
            return (
              ku(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                this.crafting.importData(null == e ? void 0 : e.crafting),
                  this.structures.importData(null == e ? void 0 : e.structures),
                  this.craftingPresets.importData(
                    null == e ? void 0 : e.craftingPresets
                  );
              }),
              (t.prototype.exportData = function () {
                return {
                  crafting: this.crafting.exportData(),
                  structures: this.structures.exportData(),
                  craftingPresets: this.craftingPresets.exportData(),
                };
              }),
              (t.prototype.dataToUI = function () {
                var e = this.crafting.dataToUI(),
                  t = this.structures.dataToUI();
                return {
                  isUnlocked: e.isUnlocked,
                  crafting: e,
                  structures: t,
                  craftingPresets: this.craftingPresets.dataToUI(),
                };
              }),
              (t.prototype.process = function (e) {
                this.crafting.process(e), this.structures.process(e);
              }),
              (t.prototype.regenerateCache = function () {
                this.crafting.regenerateCache(),
                  this.structures.regenerateCache();
              }),
              t
            );
          })(s),
          Uu = Bu.getInstance(),
          xu = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function i() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((i.prototype = n.prototype), new i()));
            };
          })(),
          Hu = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.newNotificationState = {}),
                (t.notificationsToUI = {}),
                t.workDispatcher.on(
                  "[new-notification] set viewed",
                  function (e) {
                    console.log("new-notification set viewed", e),
                      t.setViewed(e.id);
                  }
                ),
                t
              );
            }
            return (
              xu(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                this.newNotificationState = e || {};
              }),
              (t.prototype.exportData = function () {
                return this.newNotificationState;
              }),
              (t.prototype.dataToUI = function () {
                return { new: this.notificationsToUI };
              }),
              (t.prototype.setViewed = function (e) {
                this.newNotificationState[e] = !0;
              }),
              (t.prototype.getViewed = function (e) {
                var t;
                return (
                  null !== (t = this.newNotificationState[e]) &&
                  void 0 !== t &&
                  t
                );
              }),
              (t.prototype.registerNotification = function (e) {
                if (this.newNotificationState[e]) return !1;
                for (var t = e.split(":"), n = []; t.length > 0; )
                  n.push("".concat(t.splice(0, 1))),
                    (this.notificationsToUI[n.join(":")] = !0);
                return this.notificationsToUI[e];
              }),
              (t.prototype.reset = function () {
                (this.newNotificationState = {}), (this.notificationsToUI = {});
              }),
              (t.prototype.preUI = function () {
                this.notificationsToUI = {};
              }),
              (t.prototype.resetNotifications = function () {
                var e = this;
                Pl.getInstance().settings.resetNotificationsOnPrestige &&
                  ((this.notificationsToUI = {}),
                  Object.entries(this.newNotificationState).forEach(function (
                    t
                  ) {
                    var n = t[0];
                    t[1],
                      "progress" !== n.split(":")[0] &&
                        delete e.newNotificationState[n];
                  }));
              }),
              t
            );
          })(s),
          Wu = Hu.getInstance();
        !(function (e) {
          (e[(e.PENDING = 0)] = "PENDING"),
            (e[(e.COMLETE = 1)] = "COMLETE"),
            (e[(e.FAILED = 2)] = "FAILED");
        })(Fa || (Fa = {}));
        var Yu,
          qu,
          Xu,
          Ku,
          Fu,
          ju,
          Vu,
          zu,
          Qu,
          Ju,
          $u,
          es,
          ts,
          ns,
          is,
          rs,
          os,
          as,
          us,
          ss,
          cs,
          ls,
          ds,
          ps,
          fs,
          gs,
          ms,
          hs,
          ys,
          Es,
          As,
          vs,
          ws,
          bs,
          Is,
          Cs,
          Ns,
          Ts,
          Rs,
          Ls,
          Os,
          Ss,
          Ms,
          Ps,
          Zs,
          _s,
          Gs,
          Ds,
          ks,
          Bs,
          Us,
          xs,
          Hs,
          Ws,
          Ys,
          qs,
          Xs,
          Ks,
          Fs,
          js,
          Vs,
          zs,
          Qs,
          Js,
          $s,
          ec,
          tc,
          nc,
          ic,
          rc,
          oc,
          ac,
          uc,
          sc,
          cc,
          lc,
          dc,
          pc,
          fc,
          gc,
          mc,
          hc,
          yc,
          Ec,
          Ac,
          vc,
          wc,
          bc,
          Ic,
          Cc,
          Nc,
          Tc,
          Rc,
          Lc,
          Oc,
          Sc,
          Mc,
          Pc,
          Zc,
          _c,
          Gc,
          Dc,
          kc,
          Bc,
          Uc,
          xc,
          Hc,
          Wc,
          Yc,
          qc = [
            {
              id: "manacap-sacrifice",
              name: "Mana Cap Sacrifice",
              description: "Now you know how to store mana.",
              requirementsDesc: ["Perform one sacrifice on mana cap rune"],
              getCompleteCondition: function (e) {
                return e.learning.runes
                  .getRuneSacrificeLevel("manacap")
                  .greaterThanOrEqualTo(1);
              },
              bonusesDesc: [],
              isHidden: !1,
              getAttribute:
                ((ja = {}),
                (ja[c.WILLPOWER] = function (e) {
                  return new E.Z(4);
                }),
                ja),
              unlockCondition: function (e) {
                return !0;
              },
            },
            {
              id: "willpower-sacrifice",
              name: "Willpower Sacrifice",
              description: "Show the power of your will to everyone!",
              requirementsDesc: ["Perform one sacrifice on willpower rune"],
              getCompleteCondition: function (e) {
                return e.learning.runes
                  .getRuneSacrificeLevel("willpower")
                  .greaterThanOrEqualTo(1);
              },
              bonusesDesc: [],
              isHidden: !1,
              getAttribute:
                ((Va = {}),
                (Va[c.RUNE_READING] = function (e) {
                  return new E.Z(4);
                }),
                Va),
              unlockCondition: function (e) {
                return !0;
              },
            },
            {
              id: "intellect-sacrifice",
              name: "Intellect Sacrifice",
              description: "So smart...",
              requirementsDesc: ["Perform one sacrifice on intellect rune"],
              getCompleteCondition: function (e) {
                return e.learning.runes
                  .getRuneSacrificeLevel("intellect")
                  .greaterThanOrEqualTo(1);
              },
              bonusesDesc: [],
              isHidden: !1,
              getGainMultiplier:
                ((za = {}),
                (za[i.KNOWLEDGE] = function (e) {
                  return new E.Z(1.1);
                }),
                (za[i.MANA] = function (e) {
                  return new E.Z(1.1);
                }),
                za),
              unlockCondition: function (e) {
                return !0;
              },
            },
            {
              id: "knowledge-sacrifice",
              name: "Knowledge Sacrifice",
              description: "You are the wise one",
              requirementsDesc: ["Perform one sacrifice on knowledge rune"],
              getCompleteCondition: function (e) {
                return e.learning.runes
                  .getRuneSacrificeLevel("knowledge-rune")
                  .greaterThanOrEqualTo(1);
              },
              bonusesDesc: [],
              isHidden: !1,
              getCapacityMultiplier:
                ((Qa = {}),
                (Qa[i.KNOWLEDGE] = function (e) {
                  return new E.Z(1.1);
                }),
                (Qa[i.MANA] = function (e) {
                  return new E.Z(1.1);
                }),
                Qa),
              unlockCondition: function (e) {
                return !0;
              },
            },
            {
              id: "memory-rune",
              name: "Memory Rune Sacrifice",
              description:
                "Even if you could live several lives, you would remember all of them",
              requirementsDesc: ["Perform one sacrifice on memory rune"],
              getCompleteCondition: function (e) {
                return e.learning.runes
                  .getRuneSacrificeLevel("rune_memory")
                  .greaterThanOrEqualTo(1);
              },
              bonusesDesc: [],
              isHidden: !1,
              getCapacityMultiplier:
                ((Ja = {}),
                (Ja[i.KNOWLEDGE] = function (e) {
                  return new E.Z(1.25);
                }),
                Ja),
              unlockCondition: function (e) {
                return !0;
              },
            },
            {
              id: "rune-mastery-rune",
              name: "Mastery Rune Sacrifice",
              description: "The master of runes. Yes, you. You are the champ!",
              requirementsDesc: ["Perform one sacrifice on rune master rune"],
              getCompleteCondition: function (e) {
                return e.learning.runes
                  .getRuneSacrificeLevel("rune_master")
                  .greaterThanOrEqualTo(1);
              },
              bonusesDesc: [
                "Sacrifice runes now provide better effect (0.2 to exponenta in effect formula)",
              ],
              isHidden: !1,
              unlockCondition: function (e) {
                return !0;
              },
            },
            {
              id: "breath-techniques",
              name: "Breath Techniques",
              description:
                "If you lived in the highest mountains, you would definitely survive",
              requirementsDesc: ["Perform Breath Techniques for 500 times"],
              getCompleteCondition: function (e) {
                return e.city.actions
                  .getActionPerforms(rt.BREATH)
                  .greaterThanOrEqualTo(500);
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                (($a = {}),
                ($a[c.VITALITY] = function (e) {
                  return new E.Z(1.25);
                }),
                $a),
              isHidden: !1,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "breath-techniques2",
              name: "Breath Techniques II",
              description: "The survivor",
              requirementsDesc: ["Perform Breath Techniques for 10000 times"],
              getCompleteCondition: function (e) {
                return e.city.actions
                  .getActionPerforms(rt.BREATH)
                  .greaterThanOrEqualTo(1e4);
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((eu = {}),
                (eu[c.VITALITY] = function (e) {
                  return new E.Z(1.25);
                }),
                eu),
              isHidden: !1,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "stranger",
              name: "The Stranger",
              description: "Yes, you understand this world",
              requirementsDesc: ["Perform Investigate World for 500 times"],
              getCompleteCondition: function (e) {
                return e.city.actions
                  .getActionPerforms(rt.INVESTIGATE_WORLD)
                  .greaterThanOrEqualTo(500);
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((tu = {}),
                (tu[c.RUNE_READING] = function (e) {
                  return new E.Z(1.25);
                }),
                tu),
              isHidden: !1,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "stranger2",
              name: "The Stranger II",
              description: "Over the hills and far away...",
              requirementsDesc: ["Perform Investigate World for 10000 times"],
              getCompleteCondition: function (e) {
                return e.city.actions
                  .getActionPerforms(rt.INVESTIGATE_WORLD)
                  .greaterThanOrEqualTo(1e4);
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((nu = {}),
                (nu[c.RUNE_READING] = function (e) {
                  return new E.Z(1.25);
                }),
                nu),
              isHidden: !1,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "willpower1",
              name: "Unyielding Spirit I",
              description:
                "Your willpower shines through, unwavering and steadfast.",
              requirementsDesc: ["Reach 1M Willpower"],
              getCompleteCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.WILLPOWER)
                  .greaterThanOrEqualTo("1.e+6");
              },
              bonusesDesc: [],
              getGainMultiplier:
                ((iu = {}),
                (iu[i.MANA] = function (e) {
                  return new E.Z(1.1);
                }),
                iu),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "willpower2",
              name: "Unyielding Spirit II",
              description:
                "Your willpower is an unbreakable force, surpassing mortal limits.",
              requirementsDesc: ["Reach 1T Willpower"],
              getCompleteCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.WILLPOWER)
                  .greaterThanOrEqualTo("1.e+12");
              },
              bonusesDesc: [],
              getGainMultiplier:
                ((ru = {}),
                (ru[i.MANA] = function (e) {
                  return new E.Z(1.1);
                }),
                ru),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "willpower3",
              name: "Unyielding Spirit III",
              description:
                "Your willpower transcends known boundaries, setting a new pinnacle of mental fortitude.",
              requirementsDesc: ["Reach 1Sx Willpower"],
              getCompleteCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.WILLPOWER)
                  .greaterThanOrEqualTo("1.e+21");
              },
              bonusesDesc: [],
              getGainMultiplier:
                ((ou = {}),
                (ou[i.MANA] = function (e) {
                  return new E.Z(1.1);
                }),
                ou),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "intellect1",
              name: "Mind's Horizon I",
              description:
                "Your intellect breaks through the first barrier, unveiling new realms of thought.",
              requirementsDesc: ["Reach 1M Intellect"],
              getCompleteCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.RUNE_READING)
                  .greaterThanOrEqualTo("1.e+6");
              },
              bonusesDesc: [],
              getCapacityMultiplier:
                ((au = {}),
                (au[i.KNOWLEDGE] = function (e) {
                  return new E.Z(1.1);
                }),
                au),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "intellect2",
              name: "Mind's Horizon II",
              description:
                "Your intellect now dwells in territories only dreamed of, a testament to your cognitive mastery.",
              requirementsDesc: ["Reach 1T Intellect"],
              getCompleteCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.RUNE_READING)
                  .greaterThanOrEqualTo("1.e+12");
              },
              bonusesDesc: [],
              getCapacityMultiplier:
                ((uu = {}),
                (uu[i.KNOWLEDGE] = function (e) {
                  return new E.Z(1.1);
                }),
                uu),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "intellect3",
              name: "Mind's Horizon III",
              description:
                "Your intellect has scaled heights unseen, becoming a beacon of wisdom and knowledge.",
              requirementsDesc: ["Reach 1Sx Intellect"],
              getCompleteCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.RUNE_READING)
                  .greaterThanOrEqualTo("1.e+21");
              },
              bonusesDesc: [],
              getCapacityMultiplier:
                ((su = {}),
                (su[i.KNOWLEDGE] = function (e) {
                  return new E.Z(1.1);
                }),
                su),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "spellbinding1",
              name: "Arcane Anchor I",
              description:
                "You have begun to tap into the essence of spellbinding, harnessing arcane energies.",
              requirementsDesc: ["Reach 1M Spellbinding"],
              getCompleteCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.MAGIC_KNOWLEDGE)
                  .greaterThanOrEqualTo("1.e+6");
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((cu = {}),
                (cu[c.RUNE_READING] = function (e) {
                  return new E.Z(1.1);
                }),
                cu),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "spellbinding2",
              name: "Arcane Anchor II",
              description:
                "Your mastery of spellbinding now weaves complex magical tapestries, bending reality.",
              requirementsDesc: ["Reach 1T Spellbinding"],
              getCompleteCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.MAGIC_KNOWLEDGE)
                  .greaterThanOrEqualTo("1.e+12");
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((lu = {}),
                (lu[c.RUNE_READING] = function (e) {
                  return new E.Z(1.1);
                }),
                lu),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "spellbinding3",
              name: "Arcane Anchor III",
              description:
                "You stand at the apex of spellbinding, a master of arcane forces unparalleled.",
              requirementsDesc: ["Reach 1Sx Spellbinding"],
              getCompleteCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.MAGIC_KNOWLEDGE)
                  .greaterThanOrEqualTo("1.e+21");
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((du = {}),
                (du[c.RUNE_READING] = function (e) {
                  return new E.Z(1.1);
                }),
                du),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "vitality1",
              name: "Lifeblood I",
              description:
                "Your vitality surges, brimming with newfound strength and vigor.",
              requirementsDesc: ["Reach 1M Vitality"],
              getCompleteCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.VITALITY)
                  .greaterThanOrEqualTo("1.e+6");
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((pu = {}),
                (pu[c.VITALITY] = function (e) {
                  return new E.Z(1.1);
                }),
                pu),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "vitality2",
              name: "Lifeblood II",
              description:
                "You exhibit extraordinary vitality, resilient and enduring against all odds.",
              requirementsDesc: ["Reach 1T Vitality"],
              getCompleteCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.VITALITY)
                  .greaterThanOrEqualTo("1.e+12");
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((fu = {}),
                (fu[c.VITALITY] = function (e) {
                  return new E.Z(1.1);
                }),
                fu),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "vitality3",
              name: "Lifeblood III",
              description:
                "Your vitality has reached legendary proportions, a paragon of health and endurance.",
              requirementsDesc: ["Reach 1Sx Vitality"],
              getCompleteCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.VITALITY)
                  .greaterThanOrEqualTo("1.e+21");
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((gu = {}),
                (gu[c.VITALITY] = function (e) {
                  return new E.Z(1.1);
                }),
                gu),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "strength1",
              name: "Might of Titans I",
              description:
                "Your strength grows formidable, echoing the might of ancient titans.",
              requirementsDesc: ["Reach 1M Strength"],
              getCompleteCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.STRENGTH)
                  .greaterThanOrEqualTo("1.e+6");
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((mu = {}),
                (mu[c.STRENGTH] = function (e) {
                  return new E.Z(1.1);
                }),
                mu),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "strength2",
              name: "Might of Titans II",
              description:
                "Your sheer strength is awe-inspiring, capable of feats once deemed impossible.",
              requirementsDesc: ["Reach 1T Strength"],
              getCompleteCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.STRENGTH)
                  .greaterThanOrEqualTo("1.e+12");
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((hu = {}),
                (hu[c.STRENGTH] = function (e) {
                  return new E.Z(1.1);
                }),
                hu),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "strength3",
              name: "Might of Titans III",
              description:
                "In the realm of strength, you are now a legend, wielding power that bends the very fabric of reality.",
              requirementsDesc: ["Reach 1Sx Strength"],
              getCompleteCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.STRENGTH)
                  .greaterThanOrEqualTo("1.e+21");
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((yu = {}),
                (yu[c.STRENGTH] = function (e) {
                  return new E.Z(1.1);
                }),
                yu),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "runemastery1",
              name: "Runic Scholar I",
              description:
                "Your mastery of runes has reached an initial, remarkable milestone.",
              requirementsDesc: ["Reach 1M Rune Mastery"],
              getCompleteCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.RUNE_MASTERY)
                  .greaterThanOrEqualTo("1.e+6");
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((Eu = {}),
                (Eu[c.RUNE_READING] = function (e) {
                  return new E.Z(1.1);
                }),
                Eu),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "runemastery2",
              name: "Runic Scholar II",
              description:
                "Your understanding of runes now delves into the deeper, more arcane aspects.",
              requirementsDesc: ["Reach 1T Rune Mastery"],
              getCompleteCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.RUNE_MASTERY)
                  .greaterThanOrEqualTo("1.e+12");
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((Au = {}),
                (Au[c.RUNE_MASTERY] = function (e) {
                  return new E.Z(1.1);
                }),
                Au),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "runemastery3",
              name: "Runic Scholar III",
              description:
                "Your rune mastery reaches a zenith, bridging the gap between the physical and the mystical.",
              requirementsDesc: ["Reach 1Sx Rune Mastery"],
              getCompleteCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.RUNE_MASTERY)
                  .greaterThanOrEqualTo("1.e+21");
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((vu = {}),
                (vu[c.RUNE_READING] = function (e) {
                  return new E.Z(1.1);
                }),
                vu),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "agility1",
              name: "Fleetfoot I",
              description:
                "Your agility has hit a remarkable milestone, making you swift and elusive.",
              requirementsDesc: ["Reach 1M Agility"],
              getCompleteCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.AGILITY)
                  .greaterThanOrEqualTo("1.e+6");
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((wu = {}),
                (wu[c.AGILITY] = function (e) {
                  return new E.Z(1.1);
                }),
                wu),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "agility2",
              name: "Fleetfoot II",
              description:
                "Your agility is unmatched, allowing you to move with unparalleled grace and speed.",
              requirementsDesc: ["Reach 1T Agility"],
              getCompleteCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.AGILITY)
                  .greaterThanOrEqualTo("1.e+12");
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((bu = {}),
                (bu[c.AGILITY] = function (e) {
                  return new E.Z(1.1);
                }),
                bu),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "agility3",
              name: "Fleetfoot III",
              description:
                "You have achieved the pinnacle of agility, moving like a whisper on the wind.",
              requirementsDesc: ["Reach 1Sx Agility"],
              getCompleteCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.AGILITY)
                  .greaterThanOrEqualTo("1.e+21");
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((Iu = {}),
                (Iu[c.AGILITY] = function (e) {
                  return new E.Z(1.1);
                }),
                Iu),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "sewers50",
              name: "Sewer Survivor",
              description:
                "You have braved the dank and dangerous sewers, reaching combat level 50 amidst its murky depths.",
              requirementsDesc: ["Reach combat level 50 in the Sewers"],
              getCompleteCondition: function (e) {
                return (
                  e.battle.battleLocations.getBattleLocationMaxLevel(
                    p.SEVERS
                  ) >= 50
                );
              },
              bonusesDesc: ["+20% to all damage types"],
              isHidden: !1,
              unlockCondition: function (e) {
                return (
                  e.battle.battleLocations.getBattleLocationFights(p.SEVERS) > 0
                );
              },
            },
            {
              id: "sewers100",
              name: "Lord of the Underworld",
              description:
                "Master of the Sewers, you have reached combat level 100, dominating its shadowy corridors.",
              requirementsDesc: ["Reach combat level 100 in the Sewers"],
              getCompleteCondition: function (e) {
                return (
                  e.battle.battleLocations.getBattleLocationMaxLevel(
                    p.SEVERS
                  ) >= 100
                );
              },
              bonusesDesc: ["+20% to all damage types"],
              isHidden: !1,
              unlockCondition: function (e) {
                return (
                  e.battle.battleLocations.getBattleLocationFights(p.SEVERS) > 0
                );
              },
            },
            {
              id: "lake50",
              name: "Lake Guardian",
              description:
                "At the serene yet deceptive lake, you have achieved combat level 50, proving your prowess.",
              requirementsDesc: ["Reach combat level 50 at the Lake"],
              getCompleteCondition: function (e) {
                return (
                  e.battle.battleLocations.getBattleLocationMaxLevel(p.LAKE) >=
                  50
                );
              },
              bonusesDesc: ["+20% to all damage types"],
              isHidden: !1,
              unlockCondition: function (e) {
                return (
                  e.battle.battleLocations.getBattleLocationFights(p.LAKE) > 0
                );
              },
            },
            {
              id: "lake100",
              name: "Lake Conqueror",
              description:
                "With unmatched skill, you have conquered the Lake, reaching combat level 100.",
              requirementsDesc: ["Reach combat level 100 at the Lake"],
              getCompleteCondition: function (e) {
                return (
                  e.battle.battleLocations.getBattleLocationMaxLevel(p.LAKE) >=
                  100
                );
              },
              bonusesDesc: ["+20% to all damage types"],
              isHidden: !1,
              unlockCondition: function (e) {
                return (
                  e.battle.battleLocations.getBattleLocationFights(p.LAKE) > 0
                );
              },
            },
            {
              id: "field50",
              name: "Field Fighter",
              description:
                "In the open fields, you have proven your mettle by reaching combat level 50.",
              requirementsDesc: ["Reach combat level 50 in the Field"],
              getCompleteCondition: function (e) {
                return (
                  e.battle.battleLocations.getBattleLocationMaxLevel(p.FIELD) >=
                  50
                );
              },
              bonusesDesc: ["+20% to all damage types"],
              isHidden: !1,
              unlockCondition: function (e) {
                return (
                  e.battle.battleLocations.getBattleLocationFights(p.FIELD) > 0
                );
              },
            },
            {
              id: "field100",
              name: "Master of the Meadows",
              description:
                "As a true Master of the Meadows, you have reached the pinnacle combat level 100 in the Field.",
              requirementsDesc: ["Reach combat level 100 in the Field"],
              getCompleteCondition: function (e) {
                return (
                  e.battle.battleLocations.getBattleLocationMaxLevel(p.FIELD) >=
                  100
                );
              },
              bonusesDesc: ["+20% to all damage types"],
              isHidden: !1,
              unlockCondition: function (e) {
                return (
                  e.battle.battleLocations.getBattleLocationFights(p.FIELD) > 0
                );
              },
            },
            {
              id: "cave50",
              name: "Cave Challenger",
              description:
                "Within the echoing caves, you have fought bravely to reach combat level 50.",
              requirementsDesc: ["Reach combat level 50 in the Cave"],
              getCompleteCondition: function (e) {
                return (
                  e.battle.battleLocations.getBattleLocationMaxLevel(p.CAVE) >=
                  50
                );
              },
              bonusesDesc: ["+20% to all damage types"],
              isHidden: !1,
              unlockCondition: function (e) {
                return (
                  e.battle.battleLocations.getBattleLocationFights(p.CAVE) > 0
                );
              },
            },
            {
              id: "cave100",
              name: "Cavern Conqueror",
              description:
                "In the depths of the Caves, you have achieved the legendary combat level 100.",
              requirementsDesc: ["Reach combat level 100 in the Cave"],
              getCompleteCondition: function (e) {
                return (
                  e.battle.battleLocations.getBattleLocationMaxLevel(p.CAVE) >=
                  100
                );
              },
              bonusesDesc: ["+20% to all damage types"],
              isHidden: !1,
              unlockCondition: function (e) {
                return (
                  e.battle.battleLocations.getBattleLocationFights(p.CAVE) > 0
                );
              },
            },
            {
              id: "forest50",
              name: "Forest Forerunner",
              description:
                "Amidst the whispering woods of the Forest, you've attained combat level 50, a true forerunner.",
              requirementsDesc: ["Reach combat level 50 in the Forest"],
              getCompleteCondition: function (e) {
                return (
                  e.battle.battleLocations.getBattleLocationMaxLevel(
                    p.FOREST
                  ) >= 50
                );
              },
              bonusesDesc: ["+20% to all damage types"],
              isHidden: !1,
              unlockCondition: function (e) {
                return (
                  e.battle.battleLocations.getBattleLocationFights(p.FOREST) > 0
                );
              },
            },
            {
              id: "forest100",
              name: "Sylvan Sovereign",
              description:
                "As the Sylvan Sovereign, you reign supreme in the Forest, having reached combat level 100.",
              requirementsDesc: ["Reach combat level 100 in the Forest"],
              getCompleteCondition: function (e) {
                return (
                  e.battle.battleLocations.getBattleLocationMaxLevel(
                    p.FOREST
                  ) >= 100
                );
              },
              bonusesDesc: ["+20% to all damage types"],
              isHidden: !1,
              unlockCondition: function (e) {
                return (
                  e.battle.battleLocations.getBattleLocationFights(p.FOREST) > 0
                );
              },
            },
            {
              id: "library50",
              name: "Scholar Warrior",
              description:
                "Amongst ancient tomes and mystical lore, you've reached combat level 50 in the Library.",
              requirementsDesc: ["Reach combat level 50 in the Library"],
              getCompleteCondition: function (e) {
                return (
                  e.battle.battleLocations.getBattleLocationMaxLevel(
                    p.LIBRARY
                  ) >= 50
                );
              },
              bonusesDesc: ["+20% to all damage types"],
              isHidden: !1,
              unlockCondition: function (e) {
                return (
                  e.battle.battleLocations.getBattleLocationFights(p.LIBRARY) >
                  0
                );
              },
            },
            {
              id: "library100",
              name: "Guardian of Knowledge",
              description:
                "As the Guardian of Knowledge, you have achieved combat level 100, mastering the battles of the mind and sword in the Library.",
              requirementsDesc: ["Reach combat level 100 in the Library"],
              getCompleteCondition: function (e) {
                return (
                  e.battle.battleLocations.getBattleLocationMaxLevel(
                    p.LIBRARY
                  ) >= 100
                );
              },
              bonusesDesc: ["+20% to all damage types"],
              isHidden: !1,
              unlockCondition: function (e) {
                return (
                  e.battle.battleLocations.getBattleLocationFights(p.LIBRARY) >
                  0
                );
              },
            },
          ],
          Xc = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function i() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((i.prototype = n.prototype), new i()));
            };
          })(),
          Kc = function () {
            return (
              (Kc =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, r) &&
                        (e[r] = t[r]);
                  return e;
                }),
              Kc.apply(this, arguments)
            );
          },
          Fc = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.achievementsDBCache = {}),
                (t.achievementsState = []),
                t.fullfillMissing(),
                t
              );
            }
            return (
              Xc(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.onInit = function () {
                this.achievementsDBCache = qc.reduce(function (e, t) {
                  return (e[t.id] = t), e;
                }, {});
              }),
              (t.prototype.importData = function (e) {
                (this.achievementsState = (null == e ? void 0 : e.list) || []),
                  this.fullfillMissing();
              }),
              (t.prototype.exportData = function () {
                return { list: this.achievementsState };
              }),
              (t.prototype.fullfillMissing = function () {
                var e = this;
                qc.forEach(function (t) {
                  e.achievementsState.find(function (e) {
                    return e.id === t.id;
                  }) ||
                    e.achievementsState.push({
                      id: t.id,
                      statusId: Fa.PENDING,
                    });
                });
              }),
              (t.prototype.dataToUI = function () {
                var e = this;
                return {
                  totalAmount: qc.length,
                  amountCompleted: this.achievementsState.filter(function (e) {
                    return e.statusId === Fa.COMLETE;
                  }).length,
                  amountHidden: qc.filter(function (e) {
                    return e.isHidden;
                  }).length,
                  hiddenComplete: this.achievementsState
                    .filter(function (e) {
                      return e.statusId === Fa.COMLETE;
                    })
                    .filter(function (e) {
                      return !!qc.find(function (t) {
                        return t.id === e.id && t.isHidden;
                      });
                    }).length,
                  list: qc
                    .filter(function (t) {
                      return e.isUnlocked(t);
                    })
                    .map(function (t) {
                      return e.currentAchievementToUI(t);
                    }),
                  retained: this.achievementsState
                    .filter(function (e) {
                      return (
                        e.statusId === Fa.COMLETE &&
                        (e.completeAt || 0) + 30 >
                          Zl.statistics.stats.timeInGame
                      );
                    })
                    .map(function (t) {
                      return {
                        id: t.id,
                        name: e.achievementsDBCache[t.id].name,
                      };
                    }),
                };
              }),
              (t.prototype.isUnlocked = function (e) {
                var t;
                return (
                  (!e.isHidden ||
                    (null ===
                      (t = this.achievementsState.find(function (t) {
                        return t.id === e.id;
                      })) || void 0 === t
                      ? void 0
                      : t.statusId) === Fa.COMLETE) &&
                  e.unlockCondition(Zl)
                );
              }),
              (t.prototype.currentAchievementToUI = function (e) {
                var t = this.achievementsState.findIndex(function (t) {
                  return t.id === e.id;
                });
                return (
                  t < 0 &&
                    (this.achievementsState.push({
                      id: e.id,
                      statusId: Fa.PENDING,
                    }),
                    (t = this.achievementsState.length - 1)),
                  this.achievementsState[t].statusId === Fa.COMLETE &&
                    Zl.newNotifications.registerNotification(
                      "progress:achievements:".concat(e.id)
                    ),
                  {
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    bonusText: e.bonusesDesc,
                    requirementText: e.requirementsDesc,
                    isHidden: e.isHidden,
                    isVisible:
                      !e.isHidden ||
                      this.achievementsState[t].statusId === Fa.COMLETE,
                    status: this.achievementsState[t].statusId,
                    gain: e.getGain
                      ? pe
                          .getValue(e.getGain, Pl.getInstance())
                          .filter(function (e) {
                            return e.amount;
                          })
                          .map(function (e) {
                            return Kc(Kc({}, e), {
                              amountValue: e.amount.toPrecision(18),
                              amount: ee(e.amount),
                            });
                          })
                      : [],
                    max: e.getCapacityEffect
                      ? pe
                          .getValue(e.getCapacityEffect, Pl.getInstance())
                          .filter(function (e) {
                            return e.amount;
                          })
                          .map(function (e) {
                            return Kc(Kc({}, e), {
                              amountValue: e.amount.toPrecision(18),
                              amount: ee(e.amount),
                            });
                          })
                      : [],
                    gainAttribute: e.getAttribute
                      ? pe
                          .getValue(e.getAttribute, Pl.getInstance())
                          .filter(function (e) {
                            return e.amount;
                          })
                          .map(function (e) {
                            return Kc(Kc({}, e), {
                              amountValue: e.amount.toPrecision(18),
                              amount: "+".concat(ee(e.amount)),
                            });
                          })
                      : [],
                    gainMult: e.getGainMultiplier
                      ? pe
                          .getValue(e.getGainMultiplier, Pl.getInstance())
                          .filter(function (e) {
                            return e.amount;
                          })
                          .map(function (e) {
                            return Kc(Kc({}, e), {
                              amountValue: e.amount.toPrecision(18),
                              amount: "x".concat(ee(e.amount)),
                            });
                          })
                      : [],
                    maxMult: e.getCapacityMultiplier
                      ? pe
                          .getValue(e.getCapacityMultiplier, Pl.getInstance())
                          .filter(function (e) {
                            return e.amount;
                          })
                          .map(function (e) {
                            return Kc(Kc({}, e), {
                              amountValue: e.amount.toPrecision(18),
                              amount: "x".concat(ee(e.amount)),
                            });
                          })
                      : [],
                    attributeMult: e.getAttributeMultiplier
                      ? pe
                          .getValue(e.getAttributeMultiplier, Pl.getInstance())
                          .filter(function (e) {
                            return e.amount;
                          })
                          .map(function (e) {
                            return Kc(Kc({}, e), {
                              amountValue: e.amount.toPrecision(18),
                              amount: "x".concat(ee(e.amount)),
                            });
                          })
                      : [],
                  }
                );
              }),
              (t.prototype.checkAchievementsStatus = function () {
                var e = this;
                this.achievementsState.forEach(function (t, n) {
                  if (t.statusId === Fa.PENDING) {
                    var i = qc.find(function (e) {
                      return e.id === t.id;
                    });
                    if (i)
                      return i.unlockCondition(Zl) && i.getCompleteCondition(Zl)
                        ? ((e.achievementsState[n].statusId = Fa.COMLETE),
                          (e.achievementsState[n].completeAt =
                            Zl.statistics.stats.timeInGame),
                          Zl.resources.reassertBalances(),
                          void Zl.regenerateCache())
                        : void (
                            i.getFailureCondition &&
                            i.getFailureCondition(Zl) &&
                            (e.achievementsState[n].statusId = Fa.FAILED)
                          );
                  }
                });
              }),
              (t.prototype.getAchievementComplete = function (e) {
                var t;
                return (
                  (null ===
                    (t = this.achievementsState.find(function (t) {
                      return t.id === e;
                    })) || void 0 === t
                    ? void 0
                    : t.statusId) === Fa.COMLETE || !1
                );
              }),
              (t.prototype.process = function (e) {
                Zl.statistics.stats.timeInGame % 1 < e &&
                  this.checkAchievementsStatus();
              }),
              (t.prototype.getAttributeGain = function (e) {
                var t = qc.filter(function (t) {
                    var n;
                    return (
                      t.getAttribute &&
                      !!(null === (n = t.getAttribute) || void 0 === n
                        ? void 0
                        : n[e])
                    );
                  }),
                  n = [];
                return (
                  this.achievementsState.forEach(function (i) {
                    if (i.statusId === Fa.COMLETE) {
                      var r = t.find(function (e) {
                        return e.id === i.id;
                      });
                      if (r && r.getAttribute) {
                        var o = r.getAttribute[e](Pl.getInstance());
                        n.push({
                          label: "Achievement: ".concat(r.name),
                          value: o,
                          id: "achievement-".concat(r.id),
                          category: "Achievements",
                        });
                      }
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getAttributeMultiplier = function (e) {
                var t = qc.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getAttributeMultiplier) ||
                    void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  n = [];
                return (
                  this.achievementsState.forEach(function (i) {
                    if (i.statusId === Fa.COMLETE) {
                      var r = t.find(function (e) {
                        return e.id === i.id;
                      });
                      if (r && r.getAttributeMultiplier) {
                        var o = r.getAttributeMultiplier[e](Pl.getInstance());
                        n.push({
                          label: "Achievement: ".concat(r.name),
                          value: o,
                          id: "achievement-".concat(r.id),
                          category: "Achievements",
                        });
                      }
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getResourceBeingProduced = function (e) {
                var t = qc.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getGain) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  n = [];
                return (
                  this.achievementsState.forEach(function (i) {
                    var r;
                    if (i.statusId === Fa.COMLETE) {
                      var o = t.find(function (e) {
                        return e.id === i.id;
                      });
                      if (
                        o &&
                        (null === (r = o.getGain) || void 0 === r
                          ? void 0
                          : r[e])
                      ) {
                        var a = o.getGain[e](Pl.getInstance());
                        n.push({
                          label: "Achievement: ".concat(o.name),
                          value: a,
                          id: "achievement-".concat(o.id),
                          category: "Achievements",
                        });
                      }
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getCraftingMultiplier = function () {
                var e = qc.filter(function (e) {
                    return !!e.getCraftingMultiplier;
                  }),
                  t = [];
                return (
                  this.achievementsState.forEach(function (n) {
                    if (n.statusId === Fa.COMLETE) {
                      var i = e.find(function (e) {
                        return e.id === n.id;
                      });
                      if (i && i.getCraftingMultiplier) {
                        var r = i.getCraftingMultiplier(Pl.getInstance());
                        t.push({
                          label: "Achievement: ".concat(i.name),
                          value: r,
                          id: "achievement-".concat(i.id),
                          category: "Achievements",
                        });
                      }
                    }
                  }, 0),
                  t
                );
              }),
              (t.prototype.getResourceMultiplier = function (e) {
                var t = qc.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getGainMultiplier) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  n = [];
                return (
                  this.achievementsState.forEach(function (i) {
                    var r;
                    if (i.statusId === Fa.COMLETE) {
                      var o = t.find(function (e) {
                        return e.id === i.id;
                      });
                      if (
                        o &&
                        (null === (r = o.getGainMultiplier) || void 0 === r
                          ? void 0
                          : r[e])
                      ) {
                        var a = o.getGainMultiplier[e](Pl.getInstance());
                        n.push({
                          label: "Achievement: ".concat(o.name),
                          value: a,
                          id: "achievement-".concat(o.id),
                          category: "Achievements",
                        });
                      }
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getResourceBeingStored = function (e) {
                var t = qc.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getCapacityEffect) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  n = [];
                return (
                  this.achievementsState.forEach(function (i) {
                    var r;
                    if (i.statusId === Fa.COMLETE) {
                      var o = t.find(function (e) {
                        return e.id === i.id;
                      });
                      if (
                        o &&
                        (null === (r = o.getCapacityEffect) || void 0 === r
                          ? void 0
                          : r[e])
                      ) {
                        var a = o.getCapacityEffect[e](Pl.getInstance());
                        n.push({
                          label: "Achievement: ".concat(o.name),
                          value: a,
                          id: "achievement-".concat(o.id),
                          category: "Achievements",
                        });
                      }
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getResourceStorageMultiplier = function (e) {
                var t = qc.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getCapacityMultiplier) ||
                    void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  n = [];
                return (
                  this.achievementsState.forEach(function (i) {
                    var r;
                    if (i.statusId === Fa.COMLETE) {
                      var o = t.find(function (e) {
                        return e.id === i.id;
                      });
                      if (
                        o &&
                        (null === (r = o.getCapacityMultiplier) || void 0 === r
                          ? void 0
                          : r[e])
                      ) {
                        var a = o.getCapacityMultiplier[e](Pl.getInstance());
                        n.push({
                          label: "Achievement: ".concat(o.name),
                          value: a,
                          id: "achievement-".concat(o.id),
                          category: "Achievements",
                        });
                      }
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.resetFailedOnKP = function () {
                var e = qc.filter(function (e) {
                  return e.resetFailureOnKPPrestige;
                });
                this.reset(e);
              }),
              (t.prototype.resetFailedOnXP = function () {
                var e = qc.filter(function (e) {
                  return e.resetFailureOnXPPrestige;
                });
                this.reset(e);
              }),
              (t.prototype.reset = function (e) {
                this.achievementsState = this.achievementsState.map(function (
                  t
                ) {
                  return t.statusId !== Fa.FAILED
                    ? t
                    : e.find(function (e) {
                        return e.id === t.id;
                      })
                    ? Kc(Kc({}, t), { statusId: Fa.PENDING })
                    : t;
                });
              }),
              t
            );
          })(s),
          jc = Fc.getInstance(),
          Vc = [
            {
              id: "how-to",
              question: "I am new to game. How should I start?",
              answer: [
                "Every mage should start from learning runes. They provide bonuses to basic and very important mage attributes and resources.",
                'Navigate to "Runes" tab under "Learning" page. Here you see list of runes available for you. Initially you have only one rune available - "Mana Capacity". So, you should start learning it by clicking "OFF" button on it.After you press the button, the inscription will change to "ON", which means that this rune is active. Studying the rune requires time and resources. Once you have gathered enough resources, they will be deducted from you, and the study of the active rune will begin. As soon as the study is completed - you will receive a new level of the rune, with greater bonuses.',
                "It should be noted that the study of the active rune will not start until you accumulate enough resources. If the rune is active, its study will begin automatically as soon as you have accumulated enough resources.",
              ],
              unlockCond: function (e) {
                return !0;
              },
            },
            {
              id: "what-rune-do",
              question: "How do I know what each rune does?",
              answer: [
                "You can hover over rune to see it's effect, or click to see more detailed description",
              ],
              unlockCond: function (e) {
                return !0;
              },
            },
            {
              id: "why-slow-down",
              question: "I feel like my learning runes speed slow down. Why?",
              answer: [
                "Its ok. The more you learn rune, the more time it takes to learn new level",
                "Each next level require 4% more time than previous one. You can see specific amount of rune XP required for level up in details tab by clicking rune",
                "Dont worry. Game provides a lot of ways to reduce time by increasing rune learning speed as well as decrease rune requirement",
              ],
              unlockCond: function (e) {
                return !0;
              },
            },
            {
              id: "stuck-on-runes",
              question:
                "I feel like learning anything start taking too much time. What to do?",
              answer: [
                "Learn upgrades tab (unlocked when you have 10 mana capacity). You have some upgrades that can speed up rune learning",
              ],
              unlockCond: function (e) {
                return !0;
              },
            },
            {
              id: "sacrifice",
              question:
                "I have red indicator with S letter inside over rune. What does it mean?",
              answer: [
                "It means that you finally ready for first prestige layer - rune sacrifice",
                "Rune sacrifice resets all your runes levels and resources, but makes rune learning speed and power much better",
              ],
              unlockCond: function (e) {
                return !0;
              },
            },
            {
              id: "sacrifice-2",
              question: "Should I sacrifice as soon as I see indicator?",
              answer: [
                "Nope! You should take a look at numbers. In rune details you can see potential multipliers",
                "Its much more efficient to wait for having 1.5-2 times larger rune power multiplier before you sacrifice, since it takes time to build up your runes again",
              ],
              unlockCond: function (e) {
                return !0;
              },
            },
            {
              id: "crystals",
              question: "What are crystals?",
              answer: [
                "Crystals are important part of game. They provide you bonuses that NEVER reset!",
                'Once you performed "Crystals" upgrade at runes tab, you can purchase new crystals. Crystals that already have 1 level can be upgraded even without upgrade purchase.',
              ],
              unlockCond: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(o.CRYSTALS) > 0;
              },
            },
            {
              id: "next-target",
              question:
                "Ok, I unlocked Crystals and several new runes. Whats next?",
              answer: [
                "Try to get ticket to mages city upgrade. It unlocks whole new game layer!",
              ],
              unlockCond: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(o.CRYSTALS) > 0;
              },
            },
            {
              id: "city",
              question: "What to do in city?",
              answer: [
                "First of all - you can do actions, providing you different bonuses. Also, you can now access academy for purchasing upgrades unlocking new content",
              ],
              unlockCond: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "actions",
              question: "How to use actions?",
              answer: [
                "You cant use them directly. Actions are used only when they added to list that is currently running",
                'You should first of all create new actions list (bottom left of "Actions" tab at "City" page). Add new actions to your list. You\'ll see time required for list to run, and bonuses/resources provided by list to the bottom right.',
                "Keep on track your action list resources usage. If you dont have enough of them - list will be performed much slower (or even wont be able to run at all)",
                'Also, please keep in mind that almost every action requires energy. If you see that it goes below 0 for edited list - just add "Rest" action. It will take more time to perform, but makes you able to keep running list without tiring (going above 0 on "Energy" resource, and interrupting list)',
              ],
              unlockCond: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "actions",
              question: "I feel stuck. Actions are taking too much to be done",
              answer: [
                "First of all, every action can be sped up by boosting impacting attributes. You can see this in action details, by clicking specific action",
                "Also, when you create or edit list, you can see in list details (bottom right, under bonuses and resources gain breakdown) attributes, impacting list speed the most",
                'So, if you create list having a lot of "Investigate the world" actions - just run breath techniques before to speed it up, or add them into you list, to make it speed up itself',
                "Also, keep your runes strong enough to provide significant attribute bonuses.",
                "And finally - you can always determine weak attributes, create list focused on raising them up - and go doing your own business while list is running and making your personage stronger. Its rather active, but still an idle game) If you have to wait 10-15 minutes - its ok.",
              ],
              unlockCond: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "reincarnate",
              question: "What reincarnation does",
              answer: [
                "Reincarnation resets all your resources, rune levels and actions bonuses, but provide various bonuses",
                "It keeps your crystal and rune sacrifices. So, its a good practise to sacrifice runes as much as you can before you do reincarnation",
                "Reincarnation is very important part of game progress, but you should do it only once you experiencing troubles getting next upgrade/milestone, or when potential bonus is significant",
              ],
              unlockCond: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.REINCARNATION) > 0
                );
              },
            },
            {
              id: "reincarnate-2",
              question: "What reincarnation type should I chose?",
              answer: [
                "General answer - its up to you. Not that helpful advise, right?",
                'Ok. Reincarnations giving a huge boost to max actions speed. Having actions boosting attributes that they rely on (like "Mental Aptitude", or "Breath Techniques") - speed limitations are your main bottlenecks early on. So, first of all, look at resource you need the most, ways of incrementing it via actions and limiting attribute on this action.',
                "Need more mana cap? Meditation is a way you go. Need more intellect? Try mental reincarnation. Need more energy to be able grab even more intellect? Go for physical reset.",
                "Feel stuck on runes - do Runes reincarnation. Learning speed multiplier will give you more levels, more sacrifice power and make your run starts easier.",
              ],
              unlockCond: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.REINCARNATION) > 0
                );
              },
            },
            {
              id: "reincarnate-2",
              question: "What reincarnation type should I chose?",
              answer: [
                "General answer - its up to you. Not that helpful advise, right?",
                'Ok. Reincarnations giving a huge boost to max actions speed. Having actions boosting attributes that they rely on (like "Mental Aptitude", or "Breath Techniques") - speed limitations are your main bottlenecks early on. So, first of all, look at resource you need the most, ways of incrementing it via actions and limiting attribute on this action.',
                "Need more mana cap? Meditation is a way you go. Need more intellect? Try mental reincarnation. Need more energy to be able grab even more intellect? Go for physical reset.",
                "Feel stuck on runes - do Runes reincarnation. Learning speed multiplier will give you more levels, more sacrifice power and make your run starts easier.",
              ],
              unlockCond: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.BATTLE_MASTERY) > 0
                );
              },
            },
            {
              id: "combat-locations",
              question: "What are combat locations?",
              answer: [
                "Battles with monsters occur in various locations. Initially, only one location is available to you - the Sewers. As you progress in the previous location, the next ones will unlock. Each location is divided into zones. 20 victories in a zone unlock the next one.",
              ],
              unlockCond: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.BATTLE_MASTERY) > 0
                );
              },
            },
            {
              id: "start-battle",
              question: "How do I start a battle?",
              answer: [
                'Battles occur in automatic mode and start as soon as you press "Enter Location". However, to inflict damage on enemies, you need to perform attacks or use magic. Before the fight, you must create a list of battle actions and launch it. Each action requires time and "Battle Actions", a resource produced in the city "Fight".',
                "Step by step:",
                ' 1. In the city, launch a list that includes "Battle Actions" production.',
                ' 2. In the "Actions" tab on the "Battles" page, create and launch a list of battle actions. If you produce insufficient "Battle Actions", your list will be less effective, but you can still fight and progress.',
                ' 3. In the Locations tab, select a location and press "Enter Location".',
              ],
              unlockCond: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.BATTLE_MASTERY) > 0
                );
              },
            },
            {
              id: "lose-battle",
              question: "I lost in battle. What now?",
              answer: [
                "Don't be upset, your character is weak at the beginning. But defeat is not a big deal. Your character will rest and fully restore health in 100 seconds. You can continue the battle as soon as you restore enough health. This will not affect your actions in the city.",
              ],
              unlockCond: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.BATTLE_MASTERY) > 0
                );
              },
            },
            {
              id: "become-stronger",
              question: "How do I become stronger?",
              answer: [
                "To become stronger, increase your combat attributes. Initially, try to raise Vitality and Strength. Victories in battles bring resources and equipment, affecting your attributes. Over time, as you unlock new upgrades in the academy, you gain access to new battle actions, diversifying your strategy.",
              ],
              unlockCond: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.BATTLE_MASTERY) > 0
                );
              },
            },
            {
              id: "equipment",
              question: "What about equipment?",
              answer: [
                "Equipment works in a classic way. Battles bring you weapons or armor, giving bonuses when equipped. For information about bonuses, hover over the weapon. To equip, click on it.",
              ],
              unlockCond: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.BATTLE_MASTERY) > 0
                );
              },
            },
            {
              id: "improve-equipment",
              question: "Can I somehow improve my equipment?",
              answer: [
                'Of course! When you dismantle unnecessary weapons, you receive shards of various materials. Each weapon gives a different number of shards, depending on its quality. After accumulating enough shards, unequip the item you want to improve. Press "Upgrade mode" and click on the item. The necessary number of shards will be shown when hovering over the item.',
              ],
              unlockCond: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.BATTLE_MASTERY) > 0
                );
              },
            },
          ],
          zc = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function i() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((i.prototype = n.prototype), new i()));
            };
          })(),
          Qc = (function (e) {
            function t() {
              return e.call(this) || this;
            }
            return (
              zc(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.dataToUI = function () {
                var e = Vc.filter(function (e) {
                  return e.unlockCond(Zl);
                }).map(function (e) {
                  return (
                    Zl.newNotifications.registerNotification(
                      "about:faq:".concat(e.id)
                    ),
                    { id: e.id, question: e.question, answer: e.answer }
                  );
                });
                return { items: e };
              }),
              (t.prototype.process = function (e) {}),
              (t.prototype.regenerateCache = function () {}),
              t
            );
          })(s),
          Jc = Qc.getInstance(),
          $c = [
            {
              id: "story0",
              name: "Dark room",
              dialogues: [
                "You awaken in a dark and cold room, confused about your whereabouts.",
                "Suddenly, you see the light of a torch gradually approaching.",
                'A man in a dark cloak approaches and says, "Oh, has Sleeping Beauty awoken?"',
                'You: "Where am I?"',
                'Cloaked Man: "That\'s not important for now. Domingo, take care of him!"',
                'Another man, more pleasant and friendly, replies to the man in the cloak, "Yes, sir! Of course!"',
                "The man in the cloak disappears. His servant begins to speak.",
                'Domingo: "My master may seem stern, but he means no harm. You\'re lucky he found you first."',
                'You: "Found me? Where am I, and what\'s happening to me?"',
                "Domingo: \"Hmm, you really don't remember who you are? Don't rush, you'll find out in time. For now, you need to regain your power as quickly as possible.\"",
                'You: "What power? I don\'t feel tired..."',
                'Domingo: "Magical strength. Well, since you remember nothing, let\'s start from the basics - runes."',
                'You: "Runes? Magical powers??? I understand less and less what\'s going on."',
                "The servant approaches a table and removes a cover from it. You see strange glowing objects.",
                'Domingo: "Your memory will return to you gradually, along with your magic. First, you need to know that the main power of a mage lies in the power of thought. However, using your magical potential requires a lot of magical energy - mana. These runes hold the basic knowledge for a mage. To start with, you need to work on mana control. Take this magnifying glass."',
                "You take the magnifying glass and approach the table. Letters start to appear on the runes, but they change quickly. You barely manage to read a hieroglyph...",
                "You (surprised): \"Strange, but it seems I'm beginning to understand what's written here.\"",
                'Domingo: "See, not everything is so bad. So, start studying the very first rune. I will return to you later.',
              ],
              reqStrings: ["Reach 2 mana capacity"],
              completeCondition: function (e) {
                return e.resources
                  .getResourceCap(i.MANA)
                  .greaterThanOrEqualTo(2);
              },
            },
            {
              id: "story1",
              name: "Replenish powers",
              dialogues: [
                "After some time, Domingo returns to check on your progress.",
                'Domingo: "How are you feeling? Any progress with the mana control?"',
                "You: \"It's strange, but I think I'm getting the hang of it. I can feel the mana flowing within me.\"",
                "Domingo: \"Excellent! You're a quick learner. Now, it's time to enhance your mana income. This will require willpower.\"",
                'You: "Willpower? How does that help with mana?"',
                'Domingo: "Willpower is the mental strength to channel and sustain magical energy. It\'s essential for a mage. The more you have, the more mana you can gather and retain."',
                'You: "I see. So, how do I increase my willpower?"',
                'Domingo: "By mastering the willpower rune. This rune will help you focus and strengthen your mind, increasing your mana income over time."',
                'You: "I understand. I\'ll focus on this willpower rune then."',
                "Domingo: \"Good. Remember, the path of magic requires patience and discipline. I'll be around if you need guidance. Keep practicing, and soon you'll harness even greater magical powers.\"",
                "You take a deep breath, focusing on the new rune before you, determined to master this new aspect of your growing powers.",
              ],
              reqStrings: ["Have 30 willpower rune"],
              completeCondition: function (e) {
                return e.learning.runes
                  .getRuneLevel("willpower")
                  .greaterThanOrEqualTo(30);
              },
            },
            {
              id: "story2",
              name: "Sharpened Mind",
              dialogues: [
                "Domingo enters the room with a look of anticipation, noticing your deep focus on the magical texts before you.",
                "Domingo: \"You've been making remarkable progress. Now, it's time to introduce you to something that will sharpen your mind further: the Intellect rune.\"",
                'You, with a hint of curiosity: "The Intellect rune? Sounds intriguing."',
                'Domingo: "Indeed, it is. This rune enhances your mental acuity, making the rune learning process more efficient. For a mage, having a sharp mind is not a luxury; it\'s a necessity."',
                'You: "So it will aid me in grasping complex magical concepts more swiftly?"',
                'Domingo: "Exactly. The Intellect rune is fundamental in accelerating your understanding of deeper magical principles. It\'s an essential step on your path."',
                'You: "That sounds like a critical advantage. I\'m eager to learn and master this Intellect rune."',
                'Domingo: "Good. Remember, in the world of magic, a keen mind is your most potent weapon."',
                "You nod, feeling a sense of excitement at the prospect of expanding your mental capabilities, ready to delve into the mysteries of the Intellect rune.",
              ],
              reqStrings: ["Have 4 max mana", "Have 50 intellect rune"],
              completeCondition: function (e) {
                return e.learning.runes
                  .getRuneLevel("intellect")
                  .greaterThanOrEqualTo(50);
              },
            },
            {
              id: "story3",
              name: "Expanding Mana",
              dialogues: [
                "Domingo watches you practice with a satisfied nod.",
                'Domingo: "Your control over mana is improving. Now, it\'s time to expand your limits. Aim to reach 10 maximum mana."',
                'You: "Ten maximum mana? That sounds like a lot."',
                'Domingo: "Indeed, it is a significant milestone. But I believe in your potential. It will allow you to handle more complex and powerful runes."',
                'You: "I\'ll do my best. The more mana I can handle, the more powerful I can become."',
                'Domingo: "Precisely. Remember, the journey of a mage is a marathon, not a sprint. Patience and persistence are key."',
                "You focus back on your runes, determined to reach this new goal, feeling the flow of mana becoming ever more familiar.",
              ],
              reqStrings: ["Have 10 mana capacity"],
              completeCondition: function (e) {
                return e.resources
                  .getResourceCap(i.MANA)
                  .greaterThanOrEqualTo(10);
              },
            },
            {
              id: "story4",
              name: "Mystical Enhancements",
              dialogues: [
                "While practicing, you notice a shelf that begins to glow as you approach it.",
                "You: \"What's this? The shelf... it's glowing!\"",
                "As you inspect the shelf, Domingo enters the room.",
                "Domingo: \"Ah, you've discovered the enhancement shelf. It's filled with books, instructions, and equipment to upgrade your rune learning process.\"",
                'You: "Can these really help me with the runes?"',
                'Domingo: "Absolutely. For starters, use the inventory to upgrade your Mana Orb, which will increase your mana capacity. Also, take an additional rune table from there. It will allow you to learn multiple runes simultaneously."',
                'You: "That sounds incredibly useful. I\'ll make sure to utilize these enhancements."',
                'Domingo: "Wise decision. These tools will aid you greatly on your path to becoming a powerful mage."',
                "You approach the shelf with a sense of awe, ready to explore the myriad of mystical aids that will bolster your magical journey.",
              ],
              reqStrings: [
                'Upgrade "Better mana orb" at least once',
                "Upgrade Rune table",
              ],
              completeCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(o.MANA_ORB) > 0 &&
                  e.learning.runeUpgrades.getUpgradeLevel(o.ADD_RUNIC_TABLE) > 0
                );
              },
            },
            {
              id: "story4_1",
              name: "Wizard Orb",
              dialogues: [
                "As you meticulously arrange your study materials, Domingo enters, his presence bringing a sense of urgency.",
                "Domingo, catching your attention: \"There comes a time in every mage's journey when traditional methods of study are no longer sufficient. It's time for you to learn about the Wizard Orb.\"",
                'You, intrigued by the mention of a new tool: "The Wizard Orb? What does it do?"',
                'Domingo: "The Wizard Orb is a powerful artifact that accelerates the process of rune learning. However, it comes at a cost. Utilizing it makes the learning process more resource-intensive."',
                'You, pondering the trade-off: "So, it will speed up my learning, but at the expense of using more resources?"',
                'Domingo: "Precisely. The Orb channels the essence of your resources directly into the acceleration of your magical studies. It\'s a tool for those ready to invest heavily in their growth, sacrificing immediate resources for rapid advancement."',
                'You: "That sounds like a powerful advantage. I\'m willing to make the necessary sacrifices for my development."',
                'Domingo, with a nod of approval: "Wise decision. The path of a mage is fraught with such choices. The Wizard Orb will test your dedication and resourcefulness."',
                'You, feeling a renewed determination: "I\'ll use the Wizard Orb wisely, balancing my resources to maximize my growth. Thank you, Domingo."',
                'Domingo offers a supportive smile: "The journey of magic is one of constant learning and adaptation. The Wizard Orb is but one of many tools you\'ll encounter. Use it well."',
              ],
              reqStrings: [
                "Build at least 1 level wizard orb",
                "Activate at least 1 level wizard orb",
              ],
              completeCondition: function (e) {
                return e.learning.wizardOrb.state.levelActive > 0;
              },
            },
            {
              id: "story5",
              name: "The Knowledge Quest",
              dialogues: [
                'Domingo: "Mana is crucial, but a mage\'s journey also demands another mental resource - knowledge."',
                'You: "Knowledge? How does that help?"',
                "Domingo: \"Deep understanding is power. Learn the Knowledge rune. It's essential for a mage's mental arsenal.\"",
                'You: "Alright, I\'ll focus on mastering this Knowledge rune."',
                'Domingo: "Excellent. Remember, the depth of your knowledge defines the height of your power."',
              ],
              reqStrings: [
                "Purchase Knowledge upgrade",
                "Have 50 Knowledge runes",
              ],
              completeCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(o.KNOWLEDGE) > 0 &&
                  e.learning.runes
                    .getRuneLevel("knowledge-rune")
                    .greaterThanOrEqualTo(50)
                );
              },
            },
            {
              id: "story6",
              name: "The Transformation of Power",
              dialogues: [
                'Domingo: "Reaching a high level of mana capacity is vital. Aim for 175 levels of the mana cap rune."',
                'You: "175 levels? That sounds daunting."',
                'Domingo: "Once mastered, you can sacrifice your understanding of this rune to enhance its power significantly."',
                'You: "Sacrifice my understanding?"',
                'Domingo: "Yes, but it worth it."',
                "You nod, understanding the importance of this task, ready to push your limits.",
                "NOTE: Look for a red indicator with an 'S' on the rune. Sacrificing it unlocks its true potential. Check the details at the bottom of the rune's page for the bonus it provides.",
              ],
              reqStrings: [
                "Have at least 175 mana capacity runes",
                "Sacrifice mana capacity rune",
              ],
              completeCondition: function (e) {
                return e.learning.runes
                  .getRuneSacrificeLevel("manacap")
                  .greaterThanOrEqualTo(1);
              },
            },
            {
              id: "story7",
              name: "A Test of Will",
              dialogues: [
                "After sacrificing the rune, you feel extremely weak, as if your skin is burning.",
                'Domingo: "This weakness is part of the process. Your willpower rune must also be sacrificed to reveal its full potential."',
                'You: "It\'s painful... but I understand the necessity."',
                'Domingo: "Unfortunately, you have to do this for each rune separately. As you, probably, already understood - Willpower rune also requires sacrifices."',
                'Domingo: "Remember to utilize the shelf\'s instruments. They can be of great aid in your journey."',
                "You nod, steeling yourself for the next phase of your magical evolution.",
              ],
              reqStrings: [
                "Have at least 175 willpower runes",
                "Sacrifice willpower rune",
              ],
              completeCondition: function (e) {
                return e.learning.runes
                  .getRuneSacrificeLevel("willpower")
                  .greaterThanOrEqualTo(1);
              },
            },
            {
              id: "story8",
              name: "Echoes of the Past",
              dialogues: [
                "The room darkens as the man in the cloak reappears, his enigmatic aura filling the space.",
                'Cloaked Man: "You have traversed a significant path, yet it is only the beginning. I found you amidst the remnants of a forgotten battle."',
                'You, with a mix of curiosity and frustration: "A battle? What more can you tell me? Who am I in this vast world of magic?"',
                'The Cloaked Man, his voice tinged with hidden pain: "Patience. Your past is not yet ready to surface. Focus on the now." He shifts away, leaving your questions hanging in the air.',
                'Domingo enters, sensing your confusion, his voice steady and reassuring: "The path of a mage is as much about the present as it is about the past. Our magical shelf glows with items and upgrades essential for your journey. It\'s a repository of arcane knowledge and tools."',
                'You, considering his words: "So, these upgrades... How do they fit into my training?"',
                'Domingo, gesturing towards the glowing shelf: "Each item, each upgrade, has its purpose. They enhance your abilities, aid in learning runes. But remember, the art of magic is a balance. Adjusting the Wizard orb level will increase resource demands for boosting rune learning speed, yet it will also escalate the cost in mana and knowledge."',
                'You, thoughtfully: "A strategic decision, then. How I use my resources to learn runes or adjust the orb could shape my journey as a mage."',
                'Domingo nods: "Precisely. The path of magic is yours to shape. Use the glowing shelf wisely, balance your resources, and your magical prowess will grow. The choices are yours, and they will forge your destiny."',
                "You stand before the glowing shelf, feeling the weight and potential of your choices, ready to delve deeper into the arcane mysteries that await.",
                "NOTE: Keep looking for rune sacrifices for reasonable bonuses. That might help you!",
              ],
              reqStrings: [
                'Purchase "Crystals" upgrade',
                'Have at least 1 level of "Source of mana" crystal',
              ],
              completeCondition: function (e) {
                return (
                  e.learning.crystals.getCrystalLevel("basic").greaterThan(0) &&
                  e.learning.runeUpgrades.getUpgradeLevel(o.CRYSTALS) > 0
                );
              },
            },
            {
              id: "story9",
              name: "Unlocking the Mastery",
              dialogues: [
                'Domingo enters, his eyes reflecting a hidden wisdom: "Knowledge is a journey, not a destination. To quicken your path, the Rune Mastery rune awaits your attention."',
                'You, curious and eager: "Rune Mastery? How will it aid me?"',
                'Domingo, with a hint of a smile: "It\'s a rune of potent knowledge, a beacon that illuminates the arcane path. Activating it will hasten your understanding of all runes, making your studies less arduous and more fruitful."',
                'You, filled with a newfound resolve: "Then I shall embrace this challenge. To master the runes swiftly is to advance my journey towards uncovering my true self."',
                'Domingo nods approvingly: "Indeed. The mastery of runes is the mastery of self. Proceed, and let the ancient wisdom guide you."',
                "You turn to your studies with renewed vigor, feeling the ancient magic waiting to be unlocked by your newfound knowledge.",
              ],
              reqStrings: [
                'Purchase "Rune Mastery rune" upgrade',
                "Have at least 20 Rune mastery runes",
              ],
              completeCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(o.RUNE_MASTER) > 0 &&
                  e.learning.runes
                    .getRuneLevel("rune_master")
                    .greaterThanOrEqualTo(20)
                );
              },
            },
            {
              id: "story10",
              name: "The Gateway to Destiny",
              dialogues: [
                "As dawn breaks, the man in the cloak leads you to the roof. The first light of morning reveals a hidden city, shrouded in mystic fog and arcane energy.",
                'Cloaked Man, his voice echoing with the weight of centuries: "Behold, the Mages\' City, veiled from the world by spells of old. Here, magic breathes and thrives."',
                'You, awestruck by the sight: "It\'s magnificent... So, what must I do to earn my place there?"',
                "The Cloaked Man, pointing to a distant shimmering light: \"Your final trial awaits. The 'Exit Card' on our enchanted shelf. Activate it, and the path to the city shall open. This is where you prove your worth.\"",
                'You, with a heart full of determination and eyes set on the horizon: "Then I shall not falter. I am ready to take this step, to walk through the gateway to my destiny."',
                "The man in the cloak watches silently as you descend back to the chamber, the city's image etched in your mind, a symbol of hope and mystery.",
              ],
              reqStrings: ['Purchase "Ticket to city" upgrade'],
              completeCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(o.TICKET_OUT) > 0 ||
                  e.city.actions.isUnlocked
                );
              },
            },
            {
              id: "story11",
              name: "The Breath of Renewal",
              dialogues: [
                "You step through the door into the bustling Mages City. Domingo greets you with a warm smile.",
                'Domingo: "Welcome to our hidden sanctuary. Here, mages seek refuge from those who hunt us. You fought valiantly against Hazzard, the dark elves\' leader, but at great cost."',
                'You: "Hazzard... my powers, are they gone?"',
                "Domingo: \"Yes, but not forever. Your body and mind are weakened. We must rebuild your strength. Start with 'Breath Techniques' to revitalize your body. Do it twenty times to regain your footing in this world.\"",
                "You nod, understanding the urgency and importance of regaining your strength.",
              ],
              reqStrings: ["Perform Breath techniques 20 times"],
              completeCondition: function (e) {
                return e.city.actions
                  .getActionPerforms(rt.BREATH)
                  .greaterThanOrEqualTo(20);
              },
            },
            {
              id: "story12",
              name: "Balance of Being",
              dialogues: [
                "As you practice your breath techniques, Domingo approaches, his robe fluttering gently in the morning breeze of the city.",
                'Domingo, observing your steady progress with a keen eye: "The path of a mage is a delicate balance between the vigor of the body and the wisdom of the mind. Explore our city, meet fellow mages, and continue your breath exercises. The city is alive with lessons and mysteries waiting to be uncovered."',
                'You, taking a deep breath, feeling the energy of the city: "I understand. The breath techniques have begun to fortify me, and I am eager to discover the city\'s secrets and its people. Their stories and wisdom are pieces of a larger puzzle."',
                'Domingo, with a hint of a smile: "Indeed. And remember, the journey of a mage is never just outward. Continue your study and sacrifice of runes. It is a cycle that perpetuates growth. And do not fear – sacrificing runes will not impede your actions within the city. It is a seamless harmony between internal growth and external exploration."',
                'You nod, feeling a sense of purpose. The city sprawls before you, a tapestry of streets and faces, each turn offering a new avenue of knowledge. You turn back to Domingo, your resolve clear in your eyes: "I will balance my journey, walking the line between the arcane and the worldly."',
                'Domingo claps you on the shoulder, his gaze affirming: "That is the spirit. Let the rhythm of the city and the cadence of the runes guide you."',
              ],
              reqStrings: [
                "Perform Breath techniques 250 times",
                "Perform Investigate world 250 times",
              ],
              completeCondition: function (e) {
                return (
                  e.city.actions
                    .getActionPerforms(rt.BREATH)
                    .greaterThanOrEqualTo(250) &&
                  e.city.actions
                    .getActionPerforms(rt.INVESTIGATE_WORLD)
                    .greaterThanOrEqualTo(250)
                );
              },
            },
            {
              id: "story13",
              name: "The Academy's Call",
              dialogues: [
                "As you wander through the city, a grand building catches your eye. Its tall spires and mystical symbols mark it as a place of learning.",
                'The Cloaked Man suddenly appears: "Surprised to see you here so soon. This is our academy, where knowledge and power converge."',
                'You, looking at the grand structure: "It\'s magnificent. But how can I contribute here?"',
                'Cloaked Man: "For now, focus on learning how to earn coins. It may seem mundane, but it\'s necessary for acquiring upgrades and furthering your studies."',
                "You, frustrated yet understanding the need: \"Cleaning streets for gold... A humbling start for a mage. But if it's necessary, I'll do it.\"",
                "The Cloaked Man nods, a mysterious smile playing on his lips, as he vanishes into the shadows of the academy.",
                "You, disappointed, decide to leave without even entering academy",
              ],
              reqStrings: ['Perform "Push up" 100 times', "Have 2 coins"],
              completeCondition: function (e) {
                return (
                  e.city.actions
                    .getActionPerforms(rt.PUSHUP)
                    .greaterThanOrEqualTo(100) &&
                  e.resources.getResource(i.COINS).greaterThanOrEqualTo(2)
                );
              },
            },
            {
              id: "story14",
              name: "Breaking limits of the mind",
              dialogues: [
                "Near the academy, you spot Domingo, his arms laden with scrolls, hurrying along. He spots you and pauses, a look of purpose in his eyes.",
                'Domingo, slightly out of breath: "Ah, I was just on my way to find you. Have you been to the academy yet? It\'s a cornerstone of our city, a beacon of knowledge and power."',
                "You, curious about the imposing building: \"I've seen it from afar, but haven't ventured inside yet.\"",
                'Domingo, his eyes lighting up: "You must visit it. The academy holds vital upgrades and tools for your journey. There\'s a wealth of knowledge to be found within its walls."',
                "He shifts the scrolls in his arms, continuing: \"Among other things, focus on expanding your knowledge. The 'Memory Rune' is particularly crucial. Sacrifice it at least once to unlock deeper understanding. And don’t forget to purchase the 'Read Books' upgrade. The books in the academy are more than mere words; they are gateways to vast realms of knowledge.\"",
                "You, intrigued by the prospect: \"I understand. I'll make my way there and start with the 'Memory Rune' and reading. It seems every page holds a key to unlocking more of my potential.\"",
                'Domingo, with a knowing nod: "Precisely. Knowledge is the foundation upon which all magic is built. Use it well, and you will see your abilities grow exponentially."',
                "With a final nod, Domingo hurries off, leaving you to ponder the secrets that await within the hallowed halls of the academy.",
              ],
              reqStrings: [
                "Sacrifice Memory rune at least once",
                'Purchase "Read books" upgrade',
                'Perform "Read books" action 20 times',
              ],
              completeCondition: function (e) {
                return (
                  e.city.actions
                    .getActionPerforms(rt.READ_BOOKS)
                    .greaterThanOrEqualTo(20) &&
                  e.learning.runes
                    .getRuneSacrificeLevel("rune_memory")
                    .greaterThanOrEqualTo(1)
                );
              },
            },
            {
              id: "story15",
              name: "Mastery of Runes",
              dialogues: [
                "Domingo finds you deeply engrossed in your rune studies, the air around you tinged with magical energy.",
                'Domingo, with an approving nod: "Your dedication to the arcane arts is commendable. But now, we must deepen your understanding. The Rune Mastery rune is key to your growth."',
                'You, looking up from your intricate rune patterns: "Rune Mastery? How can I enhance my skills further?"',
                'Domingo: "Sacrifice the Rune Mastery rune. It’s a powerful process that will amplify your command over runes. The sacrifice isn’t an end, but a new beginning, a way to access greater magical depths."',
                "He then gestures towards the academy: \"And don’t forget to visit the academy. There’s an upgrade, 'Rune Language', that can significantly improve your ability to decipher and comprehend ancient rune manuscripts.\"",
                'You, feeling a surge of determination: "I see. Sacrifice for greater power, and continue my learning. The academy holds more secrets for me to uncover."',
                'Domingo, smiling at your resolve: "Exactly. With each rune you master and each manuscript you read, you step closer to becoming a true master of the magical arts. Let the academy be your guide."',
                "Domingo turns to leave, but after a few steps, he pauses and swiftly turns back towards you.",
                'Domingo, as if struck by a sudden realization: "Ah, one more thing! Don’t overlook the power of crystals. They are not mere trinkets but potent tools that enhance your magical abilities. Utilizing crystals wisely can significantly bolster your progress."',
                'You, nodding in understanding: "Crystals... I’ll make sure to explore their potential as well. Thank you, Domingo."',
                "Domingo: Also, to reveal true power of magic you will need immense amount of mana. Don't neglect sacrificing runes that increase your mana potential",
                "You: Sure, mana is like a fuel for a wizard",
                "Domingo gives a final nod, a twinkle in his eye, before leaving you to your studies. The mention of crystals adds another layer to the depth of your magical education.",
              ],
              reqStrings: [
                "Sacrifice rune mastery rune at least once",
                'Purchase "Rune Language" upgrade',
                'Perform "Read manuscripts" action 25 times',
              ],
              completeCondition: function (e) {
                return (
                  e.city.actions
                    .getActionPerforms(rt.READ_MANUSCRIPTS)
                    .greaterThanOrEqualTo(25) &&
                  e.learning.runes
                    .getRuneSacrificeLevel("rune_master")
                    .greaterThanOrEqualTo(1)
                );
              },
            },
            {
              id: "story16",
              name: "Runic Resilience",
              dialogues: [
                "Returning to the academy, you find Domingo in conversation with an elderly man.",
                'Domingo introduces you: "Meet our rune shopkeeper. He holds keys to many powers." To the shopkeeper: "This aspiring mage is ready for the Endurance rune."',
                'Shopkeeper, eyeing you curiously: "Endurance is vital for any mage. It will test and strengthen your limits. Purchase and focus on this rune."',
                'You, intrigued by this new aspect of your training: "Endurance... it sounds like a vital step in my journey. I\'ll begin my work on it immediately."',
                "Domingo and the shopkeeper exchange a knowing glance, as you step towards understanding the resilience of a true mage.",
              ],
              reqStrings: [
                "Purchase Endurance rune academy upgrade",
                "Sacrifice endurance rune at least once",
              ],
              completeCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.ENDURANCE_RUNE) >
                    0 &&
                  e.learning.runes
                    .getRuneSacrificeLevel("rune_endurance")
                    .greaterThanOrEqualTo(1)
                );
              },
            },
            {
              id: "story17",
              name: "The Wisdom of Ages",
              dialogues: [
                "While engrossed in your rune studies, Domingo enters the room.",
                'Domingo: "Your progress is remarkable. But the path of a mage requires vast knowledge. Amass 800K in knowledge - it is a key to unlocking deeper arcane secrets."',
                'You, overwhelmed yet determined: "Almost one million in knowledge... a daunting task, but I understand its importance."',
                'Domingo: "Visit the academy often. It holds many secrets and upgrades that can aid you. Your journey to mastery is only just beginning."',
                "You nod, feeling the weight of your quest, yet excited for the wealth of knowledge that lies ahead.",
              ],
              reqStrings: ["Have 800K knowledge"],
              completeCondition: function (e) {
                return e.resources
                  .getResource(i.KNOWLEDGE)
                  .greaterThanOrEqualTo("8.e+5");
              },
            },
            {
              id: "story18",
              name: "Cycles of Renewal",
              dialogues: [
                "The Cloaked Man finds you, his gaze piercing through the mysteries of life and death.",
                'Cloaked Man: "Life is but a fleeting moment in the grand scheme. To transcend its limits, one must embrace reincarnation. It is time for you to undergo this profound transformation."',
                'You, intrigued by the concept: "Reincarnation? What does it entail?"',
                'Cloaked Man: "It is the rebirth of self, breaking the shackles of time. Perform a scholar reincarnation to start anew, yet stronger and wiser. It is the path to true mastery."',
                'You, feeling the weight of this decision: "To start anew... Well, if it leads to greater power and understanding, I am ready."',
                'The Cloaked Man nods solemnly: "The cycle of rebirth will reveal truths unseen. Embrace it, and rise anew."',
              ],
              reqStrings: [
                'Purchase "Reincarnation" upgrade',
                "Perform reincarnation of any type at least once",
              ],
              completeCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.REINCARNATION) > 0 &&
                  e.statistics.stats.numReincarnations > 0
                );
              },
            },
            {
              id: "story19",
              name: "Renewal of Strength",
              dialogues: [
                "Feeling drained and weakened after your reincarnation, you encounter the man in the cloak and Domingo, who seem to have been discussing your condition.",
                "The man in the cloak glances at you, exchanging a silent look with Domingo, who had entered the room unnoticed.",
                'After a moment of pause, you ask with a tone of disappointment, "So, back to square one?"',
                "Domingo reassures you, explaining that your rune sacrifice levels and crystals remain intact. Moreover, you've grown stronger and will progress faster.",
                "Then, the man in the cloak suggests that instead of despair, you should focus on regaining your strength and purchase the meditation course and training chambers access at the academy.",
              ],
              reqStrings: [
                'Purchase "Meditation" upgrade',
                'Purchase "Training Chambers Access"',
              ],
              completeCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.TRAINING_CHAMBERS) >
                    0 && e.city.academyUpgrades.getUpgradeLevel(a.MEDITATE) > 0
                );
              },
            },
            {
              id: "story20",
              name: "Intellectual Ascendancy",
              dialogues: [
                "Deeply immersed in rune studies, the ambient light in your room seems to dance with the intensity of your focus. Domingo enters, his footsteps nearly silent.",
                'Domingo, with a look of admiration: "Your commitment to the arcane is truly impressive. Yet, remember the role of intellect. It\'s the cornerstone that supports the mastery of runes and the efficiency of mental endeavors."',
                'You, pausing to consider his words: "I’ve been so focused on the runes themselves, I may have overlooked the broader picture."',
                'Domingo: "Indeed. Intellect is like the light that illuminates the path of knowledge. With 1 billion Intellect, the complexities of the arcane will unravel before you, easing your journey significantly."',
                'You nod, a new sense of clarity dawning within you: "Then I shall endeavor to sharpen my intellect to its finest edge, turning challenges into opportunities for growth."',
                'Domingo smiles: "That’s the spirit of a true mage. Let your mind be as boundless as the stars."',
              ],
              reqStrings: ["Have 1B Intellect"],
              completeCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.RUNE_READING)
                  .greaterThanOrEqualTo("1.e+9");
              },
            },
            {
              id: "story21",
              name: "Chase for Agility",
              dialogues: [
                "As you stroll near the academy, you notice Domingo in a state of haste, his brows furrowed with worry. Suddenly, he signals you towards a fleet-footed thief, clutching a box of runes.",
                'Domingo, urgently: "Stop that thief! They\'ve stolen some of our most valuable runes!" You dash after the thief, but despite your best efforts, they slip away into the shadows.',
                "Catching your breath, you return to Domingo, who looks at you thoughtfully.",
                "Domingo: \"It seems we have overlooked a crucial aspect of your training – the Agility rune. It's not just about speed; it's about reflexes and adaptability in a world of constant change.\"",
                "You, determined not to be outpaced again: \"I understand. I'll focus on mastering this Agility rune. If it can give me an edge like that, I can't afford to ignore it.\"",
                'Domingo: "Good. And remember, the pursuit of agility might require you to first master other skills and gain new knowledge. The academy will guide you."',
              ],
              reqStrings: [
                'Purchase "Agility" rune',
                'Sacrifice "Agility" rune at least once',
              ],
              completeCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.AGILITY_RUNE) > 0 &&
                  e.learning.runes
                    .getRuneSacrificeLevel("agility")
                    .greaterThanOrEqualTo(1)
                );
              },
            },
            {
              id: "story22",
              name: "The Path to Wizardry",
              dialogues: [
                "Returning to your room, you overhear a conversation between the man in the cloak and Domingo.",
                'Cloaked Man, in a contemplative tone: "Do you think he\'s ready for the next step?"',
                "Domingo notices you and quickly shifts the conversation: \"Ah, you're here. The time has come for you to embrace real power. You must start with the 'Basic Wizardry' course at the academy.\"",
                'You, intrigued: "Basic Wizardry? What will that entail?"',
                "Domingo: \"It's a foundational course that will unlock your potential to wield true magical forces. It's the first step in mastering the arcane arts. The academy will guide you through it.\"",
                "Feeling a mix of excitement and determination, you nod in agreement, ready to embark on this new chapter of your magical journey.",
              ],
              reqStrings: ['Purchase "Basic Wizardry" upgrade'],
              completeCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.BASIC_WIZARDRY) > 0
                );
              },
            },
            {
              id: "story23",
              name: "Spark of Illusion",
              dialogues: [
                "Standing with the cloaked man on a rooftop, you gaze out over the city, taking in the view.",
                'Cloaked Man, beginning a tale: "Once, a mage saved this city from a horde of demons by conjuring a powerful spark, incinerating the invaders."',
                'You, curious: "Who was this mage?"',
                "Cloaked Man: \"That's a long story, not a coincidence I mention it. You’re ready to step into the realm of real magic. Start by mastering the basics of Illusion and learning to 'Conjure Spark'.\"",
                "Feeling an awakening within, you realize the path ahead is filled with deeper mysteries and powerful magic waiting to be unveiled.",
              ],
              reqStrings: [
                'Purchase "Illusion Spells" upgrade',
                'Purchase "Conjure Spark" upgrade',
              ],
              completeCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.ILLUSION_SPELLS) >
                    0 &&
                  e.city.academyUpgrades.getUpgradeLevel(a.SPARK_GENERATION) > 0
                );
              },
            },
            {
              id: "story24",
              name: "Crafting the Arcane",
              dialogues: [
                'Domingo shares his wisdom: "True mages can materialize their thoughts into reality. And now, you need to learn this art as you\'re in need of more inventory."',
                'He continues: "Start by learning Woodworking at the academy. It’s crucial to take care of your surroundings, your abode. Yes, your abode. From today, you are a full member of the mage order, and this abode is rightfully yours."',
                'You, surprised yet intrigued: "Woodworking? I never thought it’d be part of a mage’s skills."',
                'Domingo: "It’s about shaping the world around you, not just with magic but with skill and craft. Start with the basics and your workshop will soon reflect your magical prowess."',
              ],
              reqStrings: [
                'Purchase "Woodworking" upgrade',
                "Have at least 5 Training Benches",
                "Have at least 5 Bookshelves",
              ],
              completeCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.WOODWORKING) > 0 &&
                  e.construction.structures.getStructureLevel(
                    vo.TRAINING_BENCH
                  ) > 4 &&
                  e.construction.structures.getStructureLevel(vo.BOOKSHELL) > 4
                );
              },
            },
            {
              id: "story24_1",
              name: "Spell Mastery",
              dialogues: [
                "While you are busy managing your estate, Domingo knocks and steps into the room. He observes your work with a nod of recognition.",
                'Domingo, with a hint of pride: "I see you\'ve mastered the basics of crafting materials and transforming them into something useful. The academy holds much more knowledge in this area, knowledge that will be crucial for your journey."',
                "You, pausing your work: \"Yes, I've learned much about handling materials, but I realize there's always more to discover.\"",
                "Domingo, leaning against the doorway: \"True, but remember, a mage's primary focus is magic, not construction. Your next challenge is to enhance your Spellbinding attribute. It won't be an easy task and may require much time and even multiple reincarnations.\"",
                'You, feeling the weight of the task ahead: "Enhancing Spellbinding... it sounds like a journey in itself."',
                'Domingo: "Indeed, it is. But I have confidence in you. You\'ve shown remarkable ability to self-improve. Remember to balance your time between runes, crystals, the academy, and equipping your estate with items made from complex materials."',
                'You, with renewed determination: "It will be a long journey, but I\'m ready for it. The path of a mage is never a short one."',
                'Domingo smiles warmly: "That\'s the spirit. Each step you take in enhancing your Spellbinding attribute brings you closer to the true mastery of magic. Go forth with patience and persistence."',
              ],
              reqStrings: ["Have Spellbinding attribute at least 1000"],
              completeCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.MAGIC_KNOWLEDGE)
                  .greaterThanOrEqualTo(1e3);
              },
            },
            {
              id: "story25",
              name: "Conjuration's Depth",
              dialogues: [
                "As you practice your magic, Domingo enters with a knock, observing your efforts.",
                'Domingo: "Your training is progressing well. The academy has a course that will deepen your understanding in this area. Also, you’ll need to work with more complex and even enchanted materials, which will require further processing."',
                'You, with a growing sense of mastery: "I’m ready to take on more complex aspects of magic. The challenge excites me."',
                'Domingo: "Excellent. The path of a mage is never static. Always evolving, always growing. Your dedication will unlock new realms of power."',
              ],
              reqStrings: ["Have Conjuration attribute at least 10"],
              completeCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.CONJURATION_LORE)
                  .greaterThanOrEqualTo(10);
              },
            },
            {
              id: "story26",
              name: "Duty of the Mage",
              dialogues: [
                'The cloaked man shares a solemn message: "As a full member of the mage order, you have responsibilities to the order and the city, including ensuring its safety."',
                'He explains: "After completing several courses and trainings, you’ll gain access to battle magic. But first, you must learn the basics and ensure the safety of the sewers. There are always mutated rats attacking the cleaners there."',
                'You, accepting the new responsibility: "Protecting the city is a noble duty. I will prepare myself for this task and ensure the safety of those below."',
                'The cloaked man nods: "This is the way of the mage – protector, scholar, and guardian. Your journey into battle magic begins now."',
              ],
              reqStrings: [
                "Purchase Battles upgrade",
                "Have at least one fight in Sewers",
              ],
              completeCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.BATTLE_MASTERY) >
                    0 &&
                  e.battle.battleLocations.getBattleLocationFights(p.SEVERS) > 0
                );
              },
            },
            {
              id: "story27",
              name: "Guardian of the City",
              dialogues: [
                'Domingo shares a crucial insight: "Even though our city is well-protected, enemies often infiltrate it in hidden ways. Each mage has pledged to protect the city in exchange for sanctuary."',
                "He adds: \"Now it’s your turn to learn battle magic. Starting with 'Protection' and 'Evocation' spells will prepare you for any threat that might sneak past our defenses.\"",
                'You, feeling the weight of your new role: "To be a guardian, to protect those around me – I embrace this duty. I’ll begin my training in these spells immediately."',
                'Domingo: "Your commitment to the safety of our city is commendable. These spells are not just for defense; they are a mage’s promise to those they protect."',
              ],
              reqStrings: [
                'Purchase "Protection" spells upgrades',
                'Purchase "Evocation" spells upgrades',
              ],
              completeCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.PROTECTION_SPELLS) >
                    0 &&
                  e.city.academyUpgrades.getUpgradeLevel(a.EVOCATION_SPELLS) > 0
                );
              },
            },
            {
              id: "story28",
              name: "Rescue in the Sewers",
              dialogues: [
                "In the midst of your training routine, the door bursts open, and the cloaked man rushes in, his face etched with concern.",
                "Cloaked Man, breathlessly: \"A dire situation has arisen. Domingo ventured into the sewers to gather beaver fat for a potion and hasn't returned. It's been over a day.\"",
                'You, pausing mid-motion, alarm rising: "Domingo missing in the sewers? That doesn\'t sound good. What do you think happened?"',
                'Cloaked Man: "I fear he may have encountered something... dangerous. The sewers are not just simple tunnels; they hide many perils beneath the city."',
                'You, grabbing your gear: "I\'ll go find him. No one knows those tunnels better than Domingo, but he might need help."',
                'Cloaked Man, with urgency: "Be cautious. Whatever lies in those depths is not to be underestimated. Reach at least level 50 - that\'s where he was heading. And be prepared for anything."',
                'You, determination in your eyes: "I\'ll bring him back. Whatever it takes."',
                "As the cloaked man leaves, you take a deep breath, steeling yourself for the challenges of the sewer's labyrinthine paths and unknown dangers lurking in the shadows.",
              ],
              reqStrings: ["Reach level 75 in Sewers"],
              completeCondition: function (e) {
                return (
                  e.battle.battleLocations.getBattleLocationMaxLevel(
                    p.SEVERS
                  ) >= 75
                );
              },
            },
            {
              id: "story29",
              name: "Confrontation in the Shadows",
              dialogues: [
                "The severed head of another rat falls at your feet. The deeper you venture, the more oppressive the stench becomes, stifling your breath. Suddenly, your torch flickers out, leaving you enveloped in darkness.",
                "Fumbling in the dark, you stumble over something. Relighting your torch, the flame reveals a chilling sight beneath you.",
                'You, with a gasp: "Domingo..."',
                "Lying before you is the lifeless body of Domingo, his face frozen in an eternal silence. A voice echoes from the shadows behind you, dripping with irony:",
                'Mysterious Voice: "Oh, what a reunion! Our little boy has grown so much..."',
                "Turning swiftly, you come face to face with a gaunt, pallid man in a silver cloak, holding a scepter. Flashes of memory engulf you – a destroyed city, the same man wielding the scepter, and your own defeat...",
                'You, with anger and sarcasm: "Hazzard? Delighted to see you again!"',
                'Hazzard, with a cold smile: "Glad to see your memory and sharp tongue are intact. A pity they won’t be of much use to you anymore! Doneskin, deal with this!"',
                "Hazzard utters an incantation and vanishes. In his place, a massive three-headed rat materializes.",
                'Doneskin, with a guttural growl: "Thank you, master, master feeds Doneskin! Doneskin will not starve anymore!"',
                "You brace yourself, knowing this battle will not just be for survival, but a clash entwined with your past and the shadows that have haunted you.",
              ],
              reqStrings: ["Beat Doneskin"],
              completeCondition: function (e) {
                return (
                  e.battle.battleLocations.getBattleLocationWin(
                    p.SEWERS_CHAMBER
                  ) > 0
                );
              },
            },
            {
              id: "story30",
              name: "The Path to True Power",
              dialogues: [
                "As the last head of Doneskin smolders, a deep sense of frustration washes over you. You couldn't catch Hazzard, couldn't end this once and for all. Your thoughts are interrupted by footsteps behind you.",
                "The man in the cloak places a hand on your shoulder, sensing your despair.",
                "You, in anguish: \"I was too slow... I couldn't catch him. I've failed again...\"",
                'Cloaked Man, with a tone of wisdom: "In fact, you just won your most challenging battle - the battle with your past, with your fear. That is a remarkable victory."',
                'You, troubled: "But Hazzard is still alive. He\'s here, and the city is in danger."',
                "Cloaked Man: \"It's too soon for you to worry about that. You're still too weak to face him.\"",
                'You, angrily: "So what, I should go back to sweeping streets, reading magical books, and learning runes?"',
                'Cloaked Man, sternly: "Enough of these childish tantrums. When it comes to eternal conflicts, time is irrelevant. You must gather your spirit and dedicate as much time and effort as needed for our victory! Yes, it requires extensive training and learning. The major battles are still ahead of you. You haven’t even mastered half of the knowledge required to stand against our enemies."',
                "The cloaked man vanishes, leaving you without a specific task, but his words resonate within you... It's clear what you must do.",
              ],
              reqStrings: ["Reach 1Oc (1.e+27) intellect"],
              completeCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.RUNE_READING)
                  .greaterThanOrEqualTo(1e27);
              },
            },
          ],
          el = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function i() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((i.prototype = n.prototype), new i()));
            };
          })(),
          tl = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.state = { currentIndex: 0, isShown: !1 }),
                t.workDispatcher.on("[story] mark shown", function (e) {
                  console.log("do mark story shown", e), t.markAsShown();
                }),
                t
              );
            }
            return (
              el(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                this.state = e || { currentIndex: 0, isShown: !1 };
              }),
              (t.prototype.exportData = function () {
                return this.state;
              }),
              (t.prototype.dataToUI = function () {
                var e,
                  t = $c
                    .slice(0, this.state.currentIndex + 1)
                    .map(function (e) {
                      return {
                        id: e.id,
                        name: e.name,
                        dialogues: e.dialogues,
                        completeConditions: e.reqStrings,
                      };
                    });
                return (
                  (e =
                    this.state.currentIndex >= t.length || this.state.isShown
                      ? null
                      : t[this.state.currentIndex]),
                  {
                    items: t.reverse(),
                    currentIndex: this.state.currentIndex,
                    shownStory: e,
                  }
                );
              }),
              (t.prototype.process = function (e) {
                if (!(this.state.currentIndex >= $c.length))
                  for (
                    var t = $c[this.state.currentIndex];
                    t.completeCondition(Zl) &&
                    this.state.currentIndex < $c.length;

                  )
                    this.state.currentIndex++,
                      Zl.settings.showStory && (this.state.isShown = !1),
                      (t = $c[this.state.currentIndex]);
              }),
              (t.prototype.markAsShown = function () {
                this.state.currentIndex >= $c.length ||
                  (this.state.isShown = !0);
              }),
              (t.prototype.regenerateCache = function () {}),
              t
            );
          })(s),
          nl = tl.getInstance(),
          il = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function i() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((i.prototype = n.prototype), new i()));
            };
          })(),
          rl = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (t.faq = Jc), (t.story = nl), t;
            }
            return (
              il(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.dataToUI = function () {
                return {
                  faq: this.faq.dataToUI(),
                  story: this.story.dataToUI(),
                };
              }),
              (t.prototype.importData = function (e) {
                this.story.importData(null == e ? void 0 : e.story);
              }),
              (t.prototype.exportData = function () {
                return { story: this.story.exportData() };
              }),
              (t.prototype.process = function (e) {
                this.story.process(e);
              }),
              (t.prototype.regenerateCache = function () {
                this.faq.regenerateCache();
              }),
              t
            );
          })(s).getInstance(),
          ol = [
            {
              id: l.MAX_HP,
              name: "Max HP",
              description: "Your ability to take punishment",
              unlockCond: function (e) {
                return !0;
              },
            },
            {
              id: l.PHYSICAL_DAMAGE,
              name: "Physical Damage",
              description: "Your physical damage",
              unlockCond: function (e) {
                return !0;
              },
            },
            {
              id: l.MAX_PHYSICAL_DAMAGE,
              name: "Max Physical Damage",
              description: "Your max physical damage",
              unlockCond: function (e) {
                return !0;
              },
            },
            {
              id: l.MAGICAL_DAMAGE,
              name: "Magical Damage",
              description: "Your physical damage",
              unlockCond: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.EVOCATION_SPELLS) > 0
                );
              },
            },
            {
              id: l.MAX_MAGICAL_DAMAGE,
              name: "Max Magical Damage",
              description: "Your max physical damage",
              unlockCond: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.EVOCATION_SPELLS) > 0
                );
              },
            },
            {
              id: l.FIRE_DAMAGE,
              name: "Fire Damage",
              description: "Your fire damage",
              unlockCond: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.EVOCATION_SPELLS) > 0
                );
              },
            },
            {
              id: l.MAX_FIRE_DAMAGE,
              name: "Max Fire Damage",
              description: "Your max fire damage",
              unlockCond: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.EVOCATION_SPELLS) > 0
                );
              },
            },
            {
              id: l.HP_REGEN,
              name: "HP Regeneration",
              description: "Your HP regeneration",
              unlockCond: function (e) {
                return !0;
              },
              allowDecimal: !0,
            },
            {
              id: l.ARMOR,
              name: "Armor",
              description: "Your armor",
              unlockCond: function (e) {
                return !0;
              },
            },
            {
              id: l.MAGIC_RESISTANCE,
              name: "Magic Resistance",
              description: "Your magic resistance",
              unlockCond: function (e) {
                return !0;
              },
            },
            {
              id: l.FIRE_RESISTANCE,
              name: "Fire Resistance",
              description: "Your fire resistance",
              unlockCond: function (e) {
                return !0;
              },
            },
            {
              id: l.CRIT_CHANCE,
              name: "Critical Chance",
              description: "Your chance to land lucky strike",
              unlockCond: function (e) {
                return !0;
              },
              isPercentage: !0,
            },
            {
              id: l.CRIT_MULTIPLIER,
              name: "Critical Multiplier",
              description: "Multiplier of critical strike",
              unlockCond: function (e) {
                return !0;
              },
            },
            {
              id: l.DODGE_CHANCE,
              name: "Dodge Chance",
              description: "Chance to avoid physical damage",
              unlockCond: function (e) {
                return !0;
              },
              isPercentage: !0,
            },
            {
              id: l.PRECISION,
              name: "Precision",
              description: "Chance to ignore enemies dodge",
              unlockCond: function (e) {
                return !0;
              },
            },
          ],
          al = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function i() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((i.prototype = n.prototype), new i()));
            };
          })(),
          ul = function () {
            return (
              (ul =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, r) &&
                        (e[r] = t[r]);
                  return e;
                }),
              ul.apply(this, arguments)
            );
          },
          sl = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.battleAttributesEffects = {}),
                (t.battleAttributesBreakdowns = {}),
                (t.dbCache = {}),
                t
              );
            }
            return (
              al(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.onInit = function () {
                this.dbCache = ol.reduce(function (e, t) {
                  return (e[t.id] = t), e;
                }, {});
              }),
              (t.prototype.importData = function () {}),
              (t.prototype.exportData = function () {
                return {};
              }),
              (t.prototype.dataToUI = function () {
                var e = this;
                return {
                  attributes: ol
                    .map(function (t) {
                      return e.processToUI(t);
                    })
                    .filter(function (e) {
                      return e.isUnlocked;
                    }),
                };
              }),
              (t.prototype.getBreakdowns = function () {
                var e = this,
                  t = (function (e) {
                    var t,
                      n,
                      i,
                      r,
                      o,
                      a,
                      u,
                      s,
                      c,
                      d,
                      p,
                      f,
                      g,
                      m,
                      h,
                      y =
                        (((t = {})[l.MAX_HP] = {
                          linear: [
                            {
                              id: "basic",
                              label: "Basic",
                              value: new E.Z(1),
                              category: "Basic",
                            },
                          ],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[l.HP_REGEN] = {
                          linear: [
                            {
                              id: "basic",
                              label: "Basic",
                              value: new E.Z(0.1),
                              category: "Basic",
                            },
                          ],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[l.ARMOR] = {
                          linear: [
                            {
                              id: "basic",
                              label: "Basic",
                              value: new E.Z(1),
                              category: "Basic",
                            },
                          ],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[l.MAGICAL_DAMAGE] = {
                          linear: [
                            {
                              id: "basic",
                              label: "Basic",
                              value: new E.Z(0),
                              category: "Base",
                            },
                          ],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[l.MAX_MAGICAL_DAMAGE] = {
                          linear: [
                            {
                              id: "basic",
                              label: "Basic",
                              value: new E.Z(0),
                              category: "Base",
                            },
                          ],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[l.PHYSICAL_DAMAGE] = {
                          linear: [
                            {
                              id: "basic",
                              label: "Basic",
                              value: new E.Z(0),
                              category: "Base",
                            },
                          ],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[l.MAX_PHYSICAL_DAMAGE] = {
                          linear: [
                            {
                              id: "basic",
                              label: "Basic",
                              value: new E.Z(0),
                              category: "Base",
                            },
                          ],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[l.FIRE_DAMAGE] = {
                          linear: [
                            {
                              id: "basic",
                              label: "Basic",
                              value: new E.Z(0),
                              category: "Base",
                            },
                          ],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[l.MAX_FIRE_DAMAGE] = {
                          linear: [
                            {
                              id: "basic",
                              label: "Basic",
                              value: new E.Z(0),
                              category: "Base",
                            },
                          ],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[l.CRIT_CHANCE] = {
                          linear: [],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[l.CRIT_MULTIPLIER] = {
                          linear: [
                            {
                              id: "basic",
                              label: "Basic",
                              value: new E.Z(2),
                              category: "Basic",
                            },
                          ],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[l.DODGE_CHANCE] = {
                          linear: [],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[l.PRECISION] = {
                          linear: [],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[l.MAGIC_RESISTANCE] = {
                          linear: [],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[l.FIRE_RESISTANCE] = {
                          linear: [],
                          multiplier: [],
                          consumption: [],
                        }),
                        t);
                    for (var A in y)
                      (n = y[A].linear).push.apply(
                        n,
                        Zl.battle.battleActions.getAttributeProduced(A)
                      ),
                        (i = y[A].multiplier).push.apply(
                          i,
                          Zl.battle.battleActions.getAttributeMultiplier(A)
                        ),
                        (r = y[A].linear).push.apply(
                          r,
                          Zl.battle.battleAttributes.getAttributeProduced(A)
                        ),
                        (o = y[A].multiplier).push.apply(
                          o,
                          Zl.battle.battleAttributes.getAttributeMultiplier(A)
                        ),
                        (a = y[A].linear).push.apply(
                          a,
                          Zl.city.actions.getBattleAttributeProduced(A)
                        ),
                        (u = y[A].multiplier).push.apply(
                          u,
                          Zl.city.actions.getBattleAttributeMultiplier(A)
                        ),
                        (s = y[A].linear).push.apply(
                          s,
                          Zl.construction.structures.getBattleAttributeProduced(
                            A
                          )
                        ),
                        (c = y[A].multiplier).push.apply(
                          c,
                          Zl.construction.structures.getBattleAttributeMultiplier(
                            A
                          )
                        ),
                        (d = y[A].linear).push.apply(
                          d,
                          Zl.battle.battleItems.getBattleAttributeProduced(A)
                        ),
                        (p = y[A].multiplier).push.apply(
                          p,
                          Zl.battle.battleItems.getBattleAttributeMultiplier(A)
                        ),
                        (f = y[A].multiplier).push.apply(
                          f,
                          Zl.learning.crystals.getBattleAttributeMultiplier(A)
                        );
                    return (
                      (g = y[l.MAX_PHYSICAL_DAMAGE].multiplier).push.apply(
                        g,
                        y[l.PHYSICAL_DAMAGE].multiplier
                      ),
                      (m = y[l.MAX_FIRE_DAMAGE].multiplier).push.apply(
                        m,
                        y[l.FIRE_DAMAGE].multiplier
                      ),
                      (h = y[l.MAX_MAGICAL_DAMAGE].multiplier).push.apply(
                        h,
                        y[l.MAGICAL_DAMAGE].multiplier
                      ),
                      y
                    );
                  })(),
                  n = {};
                ol.forEach(function (i) {
                  var r, o, a;
                  if (i.unlockCond(Zl)) {
                    n[i.id] = { income: [], multiplier: [], consumption: [] };
                    var u =
                        null === (r = t[i.id].linear) || void 0 === r
                          ? void 0
                          : r.reduce(function (e, t) {
                              return e.plus(t.value);
                            }, new E.Z(0)),
                      s =
                        null === (o = t[i.id].multiplier) || void 0 === o
                          ? void 0
                          : o.reduce(function (e, t) {
                              return e.mul(t.value);
                            }, new E.Z(1)),
                      c =
                        (null === (a = t[i.id].consumption) || void 0 === a
                          ? void 0
                          : a.reduce(function (e, t) {
                              return e.plus(t.value);
                            }, new E.Z(0))) || new E.Z(0);
                    (e.battleAttributesEffects[i.id] = new E.Z(u.mul(s)).sub(
                      c
                    )),
                      (n[i.id].income = t[i.id].linear
                        .filter(function (e) {
                          return e.value;
                        })
                        .map(function (e) {
                          return ul(ul({}, e), {
                            value: "+".concat(e.value.toPrecision(4)),
                          });
                        })),
                      (n[i.id].multiplier = t[i.id].multiplier
                        .filter(function (e) {
                          return 1 !== e.value;
                        })
                        .map(function (e) {
                          return ul(ul({}, e), {
                            value: "x".concat(e.value.toPrecision(4)),
                          });
                        })),
                      (n[i.id].consumption = t[i.id].consumption
                        .filter(function (e) {
                          return e.value;
                        })
                        .map(function (e) {
                          return ul(ul({}, e), {
                            value: "-".concat(e.value.toPrecision(4)),
                          });
                        }));
                  }
                }),
                  (this.battleAttributesBreakdowns = n);
              }),
              (t.prototype.getDisplayRepresentation = function (e, t) {
                var n,
                  i,
                  r,
                  o,
                  a = null !== (n = t[e]) && void 0 !== n ? n : new E.Z(0);
                if (
                  (e === l.MAX_PHYSICAL_DAMAGE &&
                    (a = a.plus(
                      null !==
                        (i = this.battleAttributesEffects[l.PHYSICAL_DAMAGE]) &&
                        void 0 !== i
                        ? i
                        : new E.Z(0)
                    )),
                  [l.CRIT_CHANCE, l.CRIT_MULTIPLIER].includes(e) &&
                    (null === (r = t[l.CRIT_CHANCE]) || void 0 === r
                      ? void 0
                      : r.lessThanOrEqualTo(0)))
                )
                  return null;
                if (
                  [l.DODGE_CHANCE, l.PRECISION].includes(e) &&
                  (null === (o = t[e]) || void 0 === o
                    ? void 0
                    : o.lessThanOrEqualTo(0))
                )
                  return null;
                var u = this.dbCache[e];
                return u.isPercentage
                  ? "".concat(ee(a.mul(100), 2), "%")
                  : u.allowDecimal
                  ? ee(a)
                  : ie(a, 2);
              }),
              (t.prototype.processToUI = function (e) {
                var t,
                  n = e.unlockCond(Zl),
                  i = this.getDisplayRepresentation(
                    e.id,
                    this.battleAttributesEffects
                  );
                return (
                  i || (n = !1),
                  {
                    id: e.id,
                    name: e.name,
                    isUnlocked: n,
                    amount: i || "0",
                    breakdown:
                      null !== (t = this.battleAttributesBreakdowns[e.id]) &&
                      void 0 !== t
                        ? t
                        : { income: [], multiplier: [], consumption: [] },
                    description: e.description,
                  }
                );
              }),
              (t.prototype.process = function (e) {
                this.getBreakdowns();
              }),
              (t.prototype.getBattleAttribute = function (e) {
                return this.battleAttributesEffects[e] || new E.Z(0);
              }),
              (t.prototype.getBattleAttributes = function () {
                return this.battleAttributesEffects;
              }),
              (t.prototype.reset = function () {
                (this.battleAttributesBreakdowns = {}),
                  (this.battleAttributesEffects = {});
              }),
              (t.prototype.getAttributeProduced = function (e) {
                var t = [];
                return (
                  e === l.MAX_HP &&
                    t.push({
                      label: "Attribute: Vitality",
                      value: w(
                        Zl.personage.attributes.getAttribute(c.VITALITY),
                        0.1
                      ),
                      id: "attributes",
                      category: "Attributes",
                    }),
                  e === l.HP_REGEN &&
                    t.push({
                      label: "Attribute: Vitality",
                      value: w(
                        Zl.personage.attributes.getAttribute(c.VITALITY),
                        0.1
                      ).mul(0.01),
                      id: "attributes",
                      category: "Attributes",
                    }),
                  t
                );
              }),
              (t.prototype.getAttributeMultiplier = function (e) {
                var t = [];
                return (
                  e === l.PHYSICAL_DAMAGE &&
                    t.push({
                      label: "Attribute: Strength",
                      value: w(
                        Zl.personage.attributes.getAttribute(c.STRENGTH),
                        0.1
                      )
                        .mul(0.1)
                        .plus(1),
                      id: "battleAttrs",
                      category: "Attributes",
                    }),
                  [l.FIRE_DAMAGE, l.MAGICAL_DAMAGE].includes(e) &&
                    t.push({
                      label: "Attribute: Intellect",
                      value: w(
                        Zl.personage.attributes.getAttribute(c.RUNE_READING),
                        0.1
                      )
                        .mul(0.1)
                        .plus(1),
                      id: "battleAttrs",
                      category: "Attributes",
                    }),
                  [l.FIRE_DAMAGE, l.PHYSICAL_DAMAGE, l.MAGICAL_DAMAGE].includes(
                    e
                  ) &&
                    t.push({
                      label: "Achievements: Conquer areas",
                      value: new E.Z(
                        1 +
                          (Zl.achievements.getAchievementComplete("cave50")
                            ? 0.2
                            : 0) +
                          (Zl.achievements.getAchievementComplete("cave100")
                            ? 0.2
                            : 0) +
                          (Zl.achievements.getAchievementComplete("lake50")
                            ? 0.2
                            : 0) +
                          (Zl.achievements.getAchievementComplete("lake100")
                            ? 0.2
                            : 0) +
                          (Zl.achievements.getAchievementComplete("field50")
                            ? 0.2
                            : 0) +
                          (Zl.achievements.getAchievementComplete("field100")
                            ? 0.2
                            : 0) +
                          (Zl.achievements.getAchievementComplete("sewers50")
                            ? 0.2
                            : 0) +
                          (Zl.achievements.getAchievementComplete("sewers100")
                            ? 0.2
                            : 0) +
                          (Zl.achievements.getAchievementComplete("forest50")
                            ? 0.2
                            : 0) +
                          (Zl.achievements.getAchievementComplete("forest100")
                            ? 0.2
                            : 0) +
                          (Zl.achievements.getAchievementComplete("library50")
                            ? 0.2
                            : 0) +
                          (Zl.achievements.getAchievementComplete("library100")
                            ? 0.2
                            : 0)
                      ),
                      id: "achievements",
                      category: "Achievements",
                    }),
                  t
                );
              }),
              t
            );
          })(s),
          cl = sl.getInstance(),
          ll = [
            {
              id: d.KICK,
              name: "Kick",
              unlockCondition: function (e) {
                return !0;
              },
              effortRequired: new E.Z(1),
              description: "Kick your enemies",
              baseAttributePerCats:
                ((Yu = {}),
                (Yu[l.PHYSICAL_DAMAGE] = new E.Z(2)),
                (Yu[l.MAX_PHYSICAL_DAMAGE] = new E.Z(1)),
                Yu),
              baseCostPerCast:
                ((qu = {}), (qu[i.FIGHTING_ACTIONS] = new E.Z(1)), qu),
              tags: ["physical", "attack"],
            },
            {
              id: d.RESTORE,
              name: "Restore",
              unlockCondition: function (e) {
                return !0;
              },
              effortRequired: new E.Z(1),
              description: "Restore some of your HP",
              baseAttributePerCats:
                ((Xu = {}), (Xu[l.HP_REGEN] = new E.Z(0.2)), Xu),
              baseCostPerCast:
                ((Ku = {}), (Ku[i.FIGHTING_ACTIONS] = new E.Z(1)), Ku),
              tags: ["physical", "hp"],
            },
            {
              id: d.STONE_SKIN,
              name: "Stone Skin Spell",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.PROTECTION_SPELLS) >
                  0
                );
              },
              effortRequired: new E.Z(1),
              description: "Improve your armor significantly",
              baseAttributePerCats: {},
              baseAttributeMultiplierPerCast:
                ((Fu = {}), (Fu[l.ARMOR] = new E.Z(3)), Fu),
              baseCostPerCast:
                ((ju = {}),
                (ju[i.FIGHTING_ACTIONS] = new E.Z(5)),
                (ju[i.MANA] = new E.Z("1.e+16")),
                ju),
              tags: ["physical", "armor"],
            },
            {
              id: d.MINOR_HEAL,
              name: "Minor Heal",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.PROTECTION_SPELLS) >
                  0
                );
              },
              effortRequired: new E.Z(1),
              description: "Restore some of your HP",
              baseAttributePerCats:
                ((Vu = {}), (Vu[l.HP_REGEN] = new E.Z(20)), Vu),
              baseCostPerCast:
                ((zu = {}),
                (zu[i.FIGHTING_ACTIONS] = new E.Z(5)),
                (zu[i.MANA] = new E.Z("1.e+16")),
                zu),
              tags: ["physical", "hp"],
            },
            {
              id: d.FIREBALL,
              name: "Fireball",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.EVOCATION_SPELLS) > 0
                );
              },
              effortRequired: new E.Z(1),
              description:
                "Create fireball and launch it against your opponents",
              baseAttributePerCats:
                ((Qu = {}),
                (Qu[l.FIRE_DAMAGE] = new E.Z(3)),
                (Qu[l.MAX_FIRE_DAMAGE] = new E.Z(6)),
                Qu),
              baseCostPerCast:
                ((Ju = {}),
                (Ju[i.FIGHTING_ACTIONS] = new E.Z(5)),
                (Ju[i.MANA] = new E.Z("1.e+16")),
                Ju),
              tags: ["spell", "fire", "damage"],
            },
            {
              id: d.FIRE_BLAST,
              name: "Fire Blast",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.ADVANCED_EVOCATION) >
                  0
                );
              },
              effortRequired: new E.Z(1),
              description: "Unleash massive fire blast at your opponents",
              baseAttributePerCats:
                (($u = {}),
                ($u[l.FIRE_DAMAGE] = new E.Z(14)),
                ($u[l.MAX_FIRE_DAMAGE] = new E.Z(21)),
                $u),
              baseCostPerCast:
                ((es = {}),
                (es[i.FIGHTING_ACTIONS] = new E.Z(10)),
                (es[i.MANA] = new E.Z("1.e+18")),
                es),
              tags: ["spell", "fire", "damage"],
            },
            {
              id: d.MAGIC_ARROW,
              name: "Magic Arrow",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.ADVANCED_EVOCATION) >
                  0
                );
              },
              effortRequired: new E.Z(1),
              description: "Launch arrow made of magic at your opponents",
              baseAttributePerCats:
                ((ts = {}),
                (ts[l.MAGICAL_DAMAGE] = new E.Z(1)),
                (ts[l.MAX_MAGICAL_DAMAGE] = new E.Z(49)),
                ts),
              baseCostPerCast:
                ((ns = {}),
                (ns[i.FIGHTING_ACTIONS] = new E.Z(10)),
                (ns[i.MANA] = new E.Z("1.e+18")),
                ns),
              tags: ["spell", "magic", "damage"],
            },
            {
              id: d.SWEEPING_BLOW,
              name: "Sweeping Blow",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(
                    a.ADVANCED_FIGHT_MOVES
                  ) > 0
                );
              },
              effortRequired: new E.Z(1),
              description: "Massive Hit",
              baseAttributePerCats:
                ((is = {}),
                (is[l.PHYSICAL_DAMAGE] = new E.Z(10)),
                (is[l.MAX_PHYSICAL_DAMAGE] = new E.Z(7)),
                is),
              baseCostPerCast:
                ((rs = {}),
                (rs[i.FIGHTING_ACTIONS] = new E.Z(5)),
                (rs[i.KNOWLEDGE] = new E.Z("1.e+21")),
                rs),
              tags: ["physical", "attack"],
            },
          ],
          dl = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function i() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((i.prototype = n.prototype), new i()));
            };
          })(),
          pl = function () {
            return (
              (pl =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, r) &&
                        (e[r] = t[r]);
                  return e;
                }),
              pl.apply(this, arguments)
            );
          },
          fl = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.battleActions = []),
                (t.lists = { lists: [] }),
                (t.listAssertsCached = {}),
                (t.battleActionsCached = {}),
                (t.diminishReturns = {}),
                (t.isUnlocked = !1),
                (t.lastReassert = 0),
                (t.ttpMark = 0),
                t.workDispatcher.on("[battle-actions] save list", function (e) {
                  console.log("do save list", e), t.editList(e);
                }),
                t.workDispatcher.on(
                  "[battle-actions] list to ui",
                  function (e) {
                    console.log("do set list to ui", e), t.listToUI(e);
                  }
                ),
                t.workDispatcher.on("[battle-actions] run list", function (e) {
                  console.log("do run battle list", e), t.runList(e.id);
                }),
                t.workDispatcher.on(
                  "[battle-actions] delete list",
                  function (e) {
                    console.log("do delete list", e), t.deleteList(e.id);
                  }
                ),
                t.workDispatcher.on("[battle-actions] stop list", function (e) {
                  console.log("do stop list", e), t.stopList();
                }),
                t
              );
            }
            return (
              dl(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                var t;
                (this.battleActions =
                  (null == e
                    ? void 0
                    : e.actions.map(function (e) {
                        return pl(pl({}, e), {
                          numPerformed: new E.Z(e.numPerformed),
                        });
                      })) || []),
                  (this.lists = (null == e ? void 0 : e.actionLists) || {
                    selectedId: void 0,
                    selectedProgress: 0,
                    lists: [],
                  }),
                  (this.isUnlocked =
                    null !== (t = null == e ? void 0 : e.isUnlocked) &&
                    void 0 !== t &&
                    t),
                  (this.runningState = (null == e ? void 0 : e.running)
                    ? {
                        id: e.running.id,
                        progress: new E.Z(e.running.progress),
                        isPaused: e.running.isPaused,
                        pauseCd: 0,
                        efficiency: 1,
                      }
                    : void 0);
              }),
              (t.prototype.exportData = function () {
                return {
                  actions: this.battleActions.map(function (e) {
                    return pl(pl({}, e), {
                      numPerformed: e.numPerformed.toPrecision(18),
                    });
                  }),
                  actionLists: this.lists,
                  isUnlocked: this.isUnlocked,
                  running: this.runningState
                    ? {
                        id: this.runningState.id,
                        progress: this.runningState.progress.toPrecision(18),
                        isPaused: this.runningState.isPaused,
                      }
                    : void 0,
                };
              }),
              (t.prototype.regenerateCache = function () {
                var e = this;
                performance.now(),
                  this.lists.lists.forEach(function (t) {
                    var n;
                    ((null === (n = e.runningState) || void 0 === n
                      ? void 0
                      : n.id) !== t.id &&
                      e.listAssertsCached[t.id]) ||
                      e.calculateList(t, !0);
                  }),
                  (this.ttpMark = 0),
                  ll.forEach(function (t) {
                    e.battleActions.find(function (e) {
                      return e.id === t.id;
                    }),
                      (e.battleActionsCached[t.id] = e.processToUI(t));
                  });
              }),
              (t.prototype.dataFromCache = function () {
                return Object.values(this.battleActionsCached).map(function (
                  e
                ) {
                  return e;
                });
              }),
              (t.prototype.dataToUI = function () {
                var e = this;
                return {
                  actions: this.dataFromCache(),
                  isUnlocked: this.isUnlocked,
                  lists: this.lists.lists.map(function (t) {
                    return e.processListToUI(t);
                  }),
                  running: this.processRunningToUI(),
                  listEdited: this.listEdited
                    ? this.processCalculationsToUI(this.listEdited)
                    : void 0,
                };
              }),
              (t.prototype.processRunningToUI = function () {
                var e = this;
                if (this.runningState) {
                  var t = this.listAssertsCached[this.runningState.id],
                    n = this.lists.lists.find(function (t) {
                      var n;
                      return (
                        t.id ===
                        (null === (n = e.runningState) || void 0 === n
                          ? void 0
                          : n.id)
                      );
                    });
                  if (n) {
                    var i = t.effort.div(this.runningState.efficiency),
                      r = t.effort.greaterThanOrEqualTo(1)
                        ? L(
                            i.minus(
                              this.runningState.progress.div(
                                this.runningState.efficiency
                              )
                            )
                          )
                        : L(i, !1);
                    return {
                      id: this.runningState.id,
                      name: n.name,
                      progress: i.greaterThanOrEqualTo(1)
                        ? this.runningState.progress
                            .mul(100)
                            .div(t.effort)
                            .toPrecision(2)
                        : "100",
                      eta: this.runningState.isPaused ? "Paused" : r,
                    };
                  }
                }
              }),
              (t.prototype.getCostPerCast = function (e, t, n) {
                return (
                  void 0 === t && (t = 1),
                  e.baseCostPerCast
                    ? Object.entries(e.baseCostPerCast).map(function (e) {
                        return {
                          id: e[0],
                          amount: e[1].mul(t).div(n || new E.Z(1)),
                        };
                      })
                    : []
                );
              }),
              (t.prototype.getAttributePerCast = function (e, t, n) {
                return (
                  void 0 === t && (t = 1),
                  e.baseAttributePerCats
                    ? Object.entries(e.baseAttributePerCats).map(function (e) {
                        return {
                          id: e[0],
                          amount: e[1].mul(t).div(n || new E.Z(1)),
                        };
                      })
                    : []
                );
              }),
              (t.prototype.getAttributeMultPerCast = function (e, t, n) {
                return (
                  void 0 === t && (t = 1),
                  e.baseAttributeMultiplierPerCast
                    ? Object.entries(e.baseAttributeMultiplierPerCast).map(
                        function (e) {
                          return {
                            id: e[0],
                            amount: e[1]
                              .mul(t)
                              .div(n || new E.Z(1))
                              .plus(1),
                          };
                        }
                      )
                    : []
                );
              }),
              (t.prototype.getCap = function (e) {
                var t = new E.Z(1);
                return new E.Z(0.05).div(
                  E.Z.max(
                    Zl.personage.attributes.getAttribute(c.AGILITY),
                    new E.Z(1)
                  ).mul(t)
                );
              }),
              (t.prototype.getRealEffort = function (e, t, n) {
                void 0 === t && (t = 1), void 0 === n && (n = !1);
                var i = new E.Z(1),
                  r = e.effortRequired.mul(t).div(i),
                  o = n ? 0 : this.getCap(e).mul(t);
                return E.Z.max(r, o);
              }),
              (t.prototype.calculateList = function (e, t) {
                var n = this;
                void 0 === t && (t = !1);
                var r = ll.reduce(function (e, t) {
                    return (e[t.id] = t), e;
                  }, {}),
                  o = e.actions.reduce(function (e, t) {
                    return e.plus(n.getRealEffort(r[t.id], t.number).mul(1));
                  }, new E.Z(0)),
                  a = e.actions.reduce(function (e, t) {
                    return (
                      (e[t.id] = n
                        .getRealEffort(r[t.id], t.number)
                        .div(o)
                        .toNumber()),
                      e
                    );
                  }, {}),
                  u = {
                    effort: o,
                    attributeGain: {},
                    attributeMultGain: {},
                    resourceCost: {},
                    balanceCalculated: {},
                    canBeRunned: !0,
                    timeBreakdowns: a,
                    requiredRestChange: 0,
                  };
                return (
                  e.actions.reduce(function (e, t) {
                    var o = n
                      .getCostPerCast(r[t.id], t.number)
                      .find(function (e) {
                        return e.id === i.ENERGY;
                      });
                    return o && (e = e.plus(o.amount)), e;
                  }, new E.Z(0)),
                  e.actions.forEach(function (e) {
                    if (r[e.id]) {
                      r[e.id].unlockCondition(Zl) || (u.canBeRunned = !1);
                      var t = n.getAttributePerCast(r[e.id], e.number, o),
                        i = n.getCostPerCast(r[e.id], e.number, o),
                        a = n.getAttributeMultPerCast(r[e.id], e.number, o);
                      t.forEach(function (e) {
                        var t;
                        u.attributeGain[e.id] ||
                          (u.attributeGain[e.id] = new E.Z(0)),
                          (u.attributeGain[e.id] =
                            null === (t = u.attributeGain[e.id]) || void 0 === t
                              ? void 0
                              : t.plus(e.amount));
                      }),
                        a.forEach(function (e) {
                          var t;
                          u.attributeMultGain[e.id] ||
                            (u.attributeMultGain[e.id] = new E.Z(1)),
                            (u.attributeMultGain[e.id] =
                              null === (t = u.attributeMultGain[e.id]) ||
                              void 0 === t
                                ? void 0
                                : t.mul(e.amount));
                        }),
                        i.forEach(function (e) {
                          var t;
                          u.resourceCost[e.id] ||
                            (u.resourceCost[e.id] = new E.Z(0)),
                            (u.resourceCost[e.id] =
                              null === (t = u.resourceCost[e.id]) ||
                              void 0 === t
                                ? void 0
                                : t.plus(e.amount));
                        });
                    }
                  }),
                  (u.balanceCalculated = Co(Io({}, u.resourceCost))),
                  t && (this.listAssertsCached[e.id] = u),
                  u
                );
              }),
              (t.prototype.listToUI = function (e) {
                (this.listEdited = e ? this.calculateList(e) : void 0),
                  console.log("Recalculate list: ", this.listEdited);
              }),
              (t.prototype.editList = function (e) {
                if (!e.name) throw new Error("List name should not be empty");
                if (e.id) {
                  var t = this.lists.lists.findIndex(function (t) {
                    return t.id === e.id;
                  });
                  t > -1 && (this.lists.lists[t] = e);
                } else
                  (e = pl(pl({}, e), { id: "".concat(Math.random()) })),
                    this.lists.lists.push(e);
                this.calculateList(e, !0);
              }),
              (t.prototype.runList = function (e) {
                (this.runningState = {
                  id: e,
                  progress: new E.Z(0),
                  isPaused: !1,
                  pauseCd: 0,
                  efficiency: 1,
                }),
                  Zl.regenerateCache(),
                  Zl.resources.reassertBalances();
              }),
              (t.prototype.deleteList = function (e) {
                var t = this.lists.lists.findIndex(function (t) {
                  return t.id === e;
                });
                t >= 0 && this.lists.lists.splice(t, 1);
              }),
              (t.prototype.stopList = function () {
                (this.runningState = void 0),
                  Zl.regenerateCache(),
                  Zl.resources.reassertBalances();
              }),
              (t.prototype.toUI = function (e, t) {
                return (
                  void 0 === t &&
                    (t = function (e) {
                      return ee(e, 4);
                    }),
                  e.map(function (e) {
                    return {
                      id: e.id,
                      name: le(e.id),
                      amount: t(e.amount),
                      amountValue: e.amount.toPrecision(18),
                    };
                  })
                );
              }),
              (t.prototype.recordToUI = function (e, t) {
                return (
                  void 0 === t &&
                    (t = function (e) {
                      return ee(e, 4);
                    }),
                  Object.entries(e).map(function (e) {
                    var n = e[0],
                      i = e[1];
                    return {
                      id: n,
                      name: le(n),
                      amount: t(i),
                      amountValue: i.toPrecision(18),
                    };
                  })
                );
              }),
              (t.prototype.processToUI = function (e) {
                var t,
                  n = this.battleActions.find(function (t) {
                    return t.id === e.id;
                  });
                n ||
                  ((n = { id: e.id, numPerformed: new E.Z(0) }),
                  this.battleActions.push(n));
                var i = this.toUI(this.getCostPerCast(e)),
                  r = this.toUI(this.getAttributePerCast(e, 1)),
                  o = this.toUI(
                    this.getAttributeMultPerCast(e, 1),
                    function (e) {
                      return "+x".concat(ee(e.sub(1), 4));
                    }
                  ),
                  a = performance.now(),
                  u = this.getRealEffort(e),
                  s = u.toNumber();
                this.ttpMark += performance.now() - a;
                var c = e.unlockCondition(Zl);
                c &&
                  this.isUnlocked &&
                  n.numPerformed.lessThanOrEqualTo(0) &&
                  Zl.newNotifications.registerNotification(
                    "battle:battle-actions:battle-action:".concat(e.id)
                  );
                var l =
                  !!(null === (t = this.runningState) || void 0 === t
                    ? void 0
                    : t.id) &&
                  !!this.listAssertsCached[this.runningState.id].timeBreakdowns[
                    e.id
                  ];
                return {
                  id: e.id,
                  name: e.name,
                  description: e.description,
                  isUnlocked: c,
                  isAvailable: c,
                  cost: i,
                  attr: r,
                  attrMult: o,
                  etaNum: s,
                  amount: ee(n.numPerformed),
                  isBlocked: !1,
                  effort: L(u, !1),
                  capEffort: L(this.getCap(e), !1),
                  tags: e.tags,
                  isRunning: l,
                };
              }),
              (t.prototype.processCalculationsToUI = function (e) {
                return {
                  id: "edited.".concat(Math.random()),
                  name: "edited.".concat(Math.random()),
                  effort: L(e.effort, !1),
                  items: [],
                  resourceGain: this.recordToUI(e.balanceCalculated),
                  attributeGain: this.recordToUI(e.attributeGain),
                  attributeMultGain: this.recordToUI(
                    e.attributeMultGain,
                    function (e) {
                      return "+x".concat(ee(e.sub(1), 4));
                    }
                  ),
                  timeBreakdowns: e.timeBreakdowns,
                  canBeRunned: !0,
                };
              }),
              (t.prototype.processListToUI = function (e) {
                var t = ll.reduce(function (e, t) {
                  return (e[t.id] = t), e;
                }, {});
                return {
                  id: e.id,
                  name: e.name,
                  effort: L(this.listAssertsCached[e.id].effort, !1),
                  items: e.actions.map(function (e) {
                    return {
                      id: e.id,
                      amount: e.number,
                      name: t[e.id].name,
                      canBeRunned: t[e.id].unlockCondition(Zl),
                    };
                  }),
                  resourceGain: this.recordToUI(
                    this.listAssertsCached[e.id].balanceCalculated
                  ),
                  attributeGain: this.recordToUI(
                    this.listAssertsCached[e.id].attributeGain,
                    function (e) {
                      return "+".concat(ee(e, 4));
                    }
                  ),
                  attributeMultGain: this.recordToUI(
                    this.listAssertsCached[e.id].attributeMultGain,
                    function (e) {
                      return "+x".concat(ee(e.sub(1), 4));
                    }
                  ),
                  canBeRunned: !e.actions.find(function (e) {
                    return !t[e.id].unlockCondition(Zl);
                  }),
                  timeBreakdowns: this.listAssertsCached[e.id].timeBreakdowns,
                };
              }),
              (t.prototype.canAfford = function (e, t, n) {
                var i, r;
                void 0 === n && (n = 1);
                var o = 1;
                for (var a in e.balanceCalculated)
                  if (
                    null === (i = e.balanceCalculated[a]) || void 0 === i
                      ? void 0
                      : i.lessThan(
                          Zl.resources
                            .getResource(a)
                            .mul(10 * t)
                            .neg()
                        )
                  ) {
                    var u = Zl.resources.getResourceBalance(a),
                      s =
                        (null === (r = e.resourceCost[a]) || void 0 === r
                          ? void 0
                          : r.neg()) || new E.Z(0),
                      c = 1 - u.div(s.mul(n)).toNumber();
                    if ((o = Math.min(o, c)) < 0) return 0;
                  }
                return o;
              }),
              (t.prototype.process = function (e) {
                var t = this;
                if (
                  (!this.isUnlocked &&
                    Zl.learning.runeUpgrades.getUpgradeLevel(o.TICKET_OUT) >
                      0 &&
                    (this.isUnlocked = !0),
                  this.runningState)
                ) {
                  if (!this.runningState.id)
                    return void (this.runningState = void 0);
                  if (
                    this.runningState.isPaused &&
                    this.runningState.pauseCd > 0
                  )
                    return void (this.runningState.pauseCd -= e);
                  if (
                    (this.runningState.efficiency < 1 &&
                      this.runningState.pauseCd > 0 &&
                      (this.runningState.pauseCd -= e),
                    !this.listAssertsCached[this.runningState.id].canBeRunned)
                  )
                    return void this.stopList();
                  (this.runningState.efficiency < 1 ||
                    this.runningState.isPaused) &&
                    this.runningState.pauseCd <= 0 &&
                    ((this.runningState.efficiency = 1),
                    (this.runningState.isPaused = !1),
                    Zl.regenerateCache(),
                    Zl.resources.reassertBalances());
                  var n = this.canAfford(
                    this.listAssertsCached[this.runningState.id],
                    e,
                    this.runningState.efficiency
                  );
                  if (
                    (n < 1
                      ? (n <= 0
                          ? ((this.runningState.isPaused = !0),
                            (this.runningState.pauseCd = 10 * e))
                          : ((this.runningState.isPaused = !1),
                            (this.runningState.pauseCd = 10 * e),
                            (this.runningState.efficiency =
                              n * this.runningState.efficiency)),
                        Zl.regenerateCache(),
                        Zl.resources.reassertBalances())
                      : this.runningState.isPaused &&
                        ((this.runningState.isPaused = !1),
                        Zl.regenerateCache(),
                        Zl.resources.reassertBalances()),
                    this.runningState.isPaused)
                  )
                    return;
                  this.runningState.progress = this.runningState.progress.add(
                    e * this.runningState.efficiency
                  );
                  var i = new E.Z(1),
                    r = !1;
                  this.runningState.progress.greaterThanOrEqualTo(
                    this.listAssertsCached[this.runningState.id].effort
                  ) && (r = !0),
                    (i = new E.Z(e * this.runningState.efficiency).div(
                      this.listAssertsCached[this.runningState.id].effort
                    ));
                  var a = this.lists.lists.find(function (e) {
                    var n;
                    return (
                      e.id ===
                      (null === (n = t.runningState) || void 0 === n
                        ? void 0
                        : n.id)
                    );
                  });
                  a &&
                    a.actions.forEach(function (e) {
                      var n = t.battleActions.findIndex(function (t) {
                        return t.id === e.id;
                      });
                      ll.find(function (t) {
                        return t.id === e.id;
                      }) &&
                        n >= 0 &&
                        (t.battleActions[n].numPerformed = t.battleActions[
                          n
                        ].numPerformed.plus(i.mul(e.number)));
                    }),
                    r && (this.runningState.progress = new E.Z(0)),
                    (!this.lastReassert ||
                      this.lastReassert < Date.now() - 2e3) &&
                      ((this.lastReassert = Date.now()),
                      Zl.regenerateCache(),
                      Zl.resources.reassertBalances(),
                      this.lists.lists.map(function (e) {
                        return t.calculateList(e, !0);
                      }));
                }
              }),
              (t.prototype.getBattleActionPerforms = function (e) {
                var t;
                return (
                  (null ===
                    (t = this.battleActions.find(function (t) {
                      return t.id === e;
                    })) || void 0 === t
                    ? void 0
                    : t.numPerformed) || new E.Z(0)
                );
              }),
              (t.prototype.getAttributeProduced = function (e) {
                var t, n, i, r;
                if (
                  !(null === (t = this.runningState) || void 0 === t
                    ? void 0
                    : t.id) ||
                  this.runningState.isPaused
                )
                  return [];
                var o =
                    this.listAssertsCached[
                      null === (n = this.runningState) || void 0 === n
                        ? void 0
                        : n.id
                    ],
                  a = [];
                return (
                  o.attributeGain[e] &&
                    a.push({
                      label: "BattleActions",
                      value:
                        null !==
                          (r =
                            null === (i = o.attributeGain[e]) || void 0 === i
                              ? void 0
                              : i.mul(this.runningState.efficiency)) &&
                        void 0 !== r
                          ? r
                          : new E.Z(0),
                      id: "battleActions",
                      category: "BattleActions",
                    }),
                  a
                );
              }),
              (t.prototype.getAttributeMultiplier = function (e) {
                var t, n, i, r;
                if (
                  !(null === (t = this.runningState) || void 0 === t
                    ? void 0
                    : t.id) ||
                  this.runningState.isPaused
                )
                  return [];
                var o =
                    this.listAssertsCached[
                      null === (n = this.runningState) || void 0 === n
                        ? void 0
                        : n.id
                    ],
                  a = [];
                return (
                  o.attributeMultGain[e] &&
                    a.push({
                      label: "BattleActions",
                      value: (null !==
                        (r =
                          null === (i = o.attributeMultGain[e]) || void 0 === i
                            ? void 0
                            : i.mul(this.runningState.efficiency)) &&
                      void 0 !== r
                        ? r
                        : new E.Z(0)
                      ).plus(1),
                      id: "battleActions",
                      category: "BattleActions",
                    }),
                  a
                );
              }),
              (t.prototype.getResourceBeingConsumed = function (e) {
                var t, n, i, r;
                if (
                  !(null === (t = this.runningState) || void 0 === t
                    ? void 0
                    : t.id) ||
                  this.runningState.isPaused
                )
                  return [];
                var o =
                    this.listAssertsCached[
                      null === (n = this.runningState) || void 0 === n
                        ? void 0
                        : n.id
                    ],
                  a = [];
                return (
                  o.resourceCost[e] &&
                    a.push({
                      label: "Battle Actions",
                      value:
                        null !==
                          (r =
                            null === (i = o.resourceCost[e]) || void 0 === i
                              ? void 0
                              : i.mul(this.runningState.efficiency)) &&
                        void 0 !== r
                          ? r
                          : new E.Z(0),
                      id: "battle-actions",
                      category: "Battle Actions",
                    }),
                  a
                );
              }),
              (t.prototype.reset = function () {
                var e = this;
                this.battleActions.forEach(function (t, n) {
                  e.battleActions[n].numPerformed = new E.Z(0);
                });
              }),
              t
            );
          })(s),
          gl = fl.getInstance(),
          ml = [
            {
              id: p.SEVERS,
              name: "Sewers",
              description: "",
              possibleEnemies:
                ((os = {}), (os[f.RAT] = 3), (os[f.BEAVER] = 0.5), os),
              possibleLootMultipliers:
                ((as = {}),
                (as[i.WOOD] = 10),
                (as[i.PAPER] = 0.5),
                (as[i.BONE] = 0.25),
                as),
              unlockCondition: function (e) {
                return !0;
              },
              levelMult: 1,
            },
            {
              id: p.LAKE,
              name: "Lake",
              description: "",
              possibleEnemies:
                ((us = {}),
                (us[f.MUSKRAT] = 1),
                (us[f.MOSQUITO] = 2),
                (us[f.TORTOISE] = 1),
                us),
              possibleLootMultipliers:
                ((ss = {}),
                (ss[i.SAND] = 1),
                (ss[i.IRON_ORE] = 4),
                (ss[i.BONE] = 1),
                ss),
              unlockCondition: function (e) {
                return (
                  e.battle.battleLocations.getBattleLocationMaxLevel(
                    p.SEVERS
                  ) >= 20
                );
              },
              levelMult: 2,
            },
            {
              id: p.FIELD,
              name: "Field",
              description: "",
              possibleEnemies:
                ((cs = {}),
                (cs[f.WASP] = 5),
                (cs[f.ARMADILLO] = 2),
                (cs[f.RAVEN] = 3),
                cs),
              possibleLootMultipliers:
                ((ls = {}),
                (ls[i.REFINED_WOOD] = 4),
                (ls[i.BRICK] = 12),
                (ls[i.BONE] = 4),
                ls),
              unlockCondition: function (e) {
                return (
                  e.battle.battleLocations.getBattleLocationMaxLevel(p.LAKE) >=
                  20
                );
              },
              levelMult: 4,
            },
            {
              id: p.CAVE,
              name: "Cave",
              description: "",
              possibleEnemies:
                ((ds = {}),
                (ds[f.SPIDER] = 2),
                (ds[f.MAGIC_SPIDER] = 0.5),
                (ds[f.SMALL_DEMON] = 3),
                (ds[f.FIRE_DEMON] = 1),
                ds),
              possibleLootMultipliers:
                ((ps = {}),
                (ps[i.IRON_PLATE] = 4),
                (ps[i.BRICK] = 12),
                (ps[i.BONE] = 16),
                ps),
              unlockCondition: function (e) {
                return (
                  e.battle.battleLocations.getBattleLocationMaxLevel(p.FIELD) >=
                  20
                );
              },
              levelMult: 8,
            },
            {
              id: p.FOREST,
              name: "Forest",
              description: "",
              possibleEnemies:
                ((fs = {}),
                (fs[f.WOLF] = 2),
                (fs[f.BEAR] = 0.5),
                (fs[f.MAGIC_FLY] = 3),
                fs),
              possibleLootMultipliers:
                ((gs = {}),
                (gs[i.REFINED_WOOD] = 16),
                (gs[i.CHARGED_WOOD] = 4),
                (gs[i.BONE] = 64),
                gs),
              unlockCondition: function (e) {
                return (
                  e.battle.battleLocations.getBattleLocationMaxLevel(p.CAVE) >=
                  20
                );
              },
              levelMult: 16,
            },
            {
              id: p.LIBRARY,
              name: "Library",
              description: "",
              possibleEnemies:
                ((ms = {}),
                (ms[f.LIVING_BOOK] = 2),
                (ms[f.GUARDIAN] = 2),
                (ms[f.FLAMED_SCROLL] = 3),
                ms),
              possibleLootMultipliers:
                ((hs = {}),
                (hs[i.PAPER] = 128),
                (hs[i.GLASS] = 12),
                (hs[i.BONE] = 128),
                hs),
              unlockCondition: function (e) {
                return (
                  e.battle.battleLocations.getBattleLocationMaxLevel(
                    p.FOREST
                  ) >= 20
                );
              },
              levelMult: 32,
            },
            {
              id: p.SEWERS_CHAMBER,
              name: "Doneskin",
              description: "",
              possibleEnemies: ((ys = {}), (ys[f.DONESKIN] = 1), ys),
              possibleLootMultipliers: {},
              isBossFight: !0,
              unlockCondition: function (e) {
                return (
                  e.battle.battleLocations.getBattleLocationMaxLevel(
                    p.SEVERS
                  ) >= 75
                );
              },
              levelMult: 128,
            },
          ],
          hl = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function i() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((i.prototype = n.prototype), new i()));
            };
          })(),
          yl = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.logs = []),
                (t.state = {
                  my: { packs: [], isAlive: !1 },
                  opponent: { packs: [], isAlive: !1 },
                  isRunning: !1,
                  attackTimer: 0,
                  statusId: 0,
                  complexityLevel: 0,
                }),
                t
              );
            }
            return (
              hl(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.dataToUI = function () {
                var e = this;
                return {
                  my: {
                    participants: this.state.my.packs.map(function (t) {
                      return e.processToUI(t);
                    }),
                  },
                  opponent: {
                    participants: this.state.opponent.packs.map(function (t) {
                      return e.processToUI(t);
                    }),
                  },
                  logs: this.logs,
                  isRunning: this.state.isRunning || 1 === this.state.statusId,
                };
              }),
              (t.prototype.processToUI = function (e) {
                return {
                  id: e.id,
                  name: e.name,
                  hp: ee(e.hp),
                  numAlive: e.amount,
                  attributes: Xi(e.attributes, function (t, n) {
                    return Zl.battle.battleAttributes.getDisplayRepresentation(
                      n,
                      e.attributes
                    );
                  }),
                  hpProgress: e.hp
                    .mul(100)
                    .div(
                      (e.attributes[l.MAX_HP] || new E.Z(1)).mul(e.startAmount)
                    )
                    .toPrecision(2),
                  rarityLevel: e.rarityLevel,
                };
              }),
              (t.prototype.stopFight = function () {
                (this.state.isRunning = !1),
                  (this.state.my = { packs: [], isAlive: !1 }),
                  (this.state.opponent = { packs: [], isAlive: !1 }),
                  (this.state.statusId = 0);
              }),
              (t.prototype.initializeFight = function (e, t, n) {
                void 0 === n && (n = 1),
                  (this.state.my = e),
                  (this.state.opponent = t),
                  (this.state.isRunning = !0),
                  (this.state.attackTimer = 0),
                  (this.state.statusId = 0),
                  (this.state.complexityLevel = n);
              }),
              (t.prototype.regenHP = function (e, t) {
                e.packs.forEach(function (e) {
                  var n;
                  e.hp = E.Z.min(
                    (e.attributes[l.MAX_HP] || new E.Z(0)).mul(e.amount),
                    e.hp.plus(
                      (null === (n = e.attributes[l.HP_REGEN]) || void 0 === n
                        ? void 0
                        : n.mul(t)) || new E.Z(0)
                    )
                  );
                });
              }),
              (t.prototype.getAtkVsDef = function (e, t) {
                return e
                  .mul(e.pow(0.4))
                  .div(
                    E.Z.max(1e-300, (t || new E.Z(0)).pow(0.4)).plus(e.pow(0.4))
                  );
              }),
              (t.prototype.attack = function (e, t) {
                var n = this;
                e.packs.forEach(function (e) {
                  var i, r, o, a, u, s;
                  if (t.packs.length) {
                    var c = (
                        e.attributes[l.PHYSICAL_DAMAGE] || new E.Z("1.e-300")
                      ).plus(
                        null ===
                          (i =
                            e.attributes[l.MAX_PHYSICAL_DAMAGE] ||
                            new E.Z(0)) || void 0 === i
                          ? void 0
                          : i.mul(Math.random())
                      ),
                      d = Math.random(),
                      p = !1;
                    (null === (r = e.attributes[l.CRIT_CHANCE]) || void 0 === r
                      ? void 0
                      : r.greaterThan(d)) &&
                      ((p = !0),
                      (c = c.mul(e.attributes[l.CRIT_MULTIPLIER] || 1)));
                    var f = !1;
                    if (
                      null === (o = t.packs[0].attributes[l.DODGE_CHANCE]) ||
                      void 0 === o
                        ? void 0
                        : o.greaterThan(0)
                    ) {
                      var g =
                        (null === (a = t.packs[0].attributes[l.DODGE_CHANCE]) ||
                        void 0 === a
                          ? void 0
                          : a
                              .div(
                                new E.Z(1).plus(e.attributes[l.PRECISION] || 0)
                              )
                              .toNumber()) || 0;
                      Math.random() < g && (f = !0);
                    }
                    if (f)
                      n.logs.unshift({
                        date: R(new Date()),
                        message: ""
                          .concat(e.name, " have missed ")
                          .concat(t.packs[0].name),
                        type: "combat-special",
                      });
                    else {
                      var m = n.getAtkVsDef(c, t.packs[0].attributes[l.ARMOR]);
                      t.packs[0].hp = t.packs[0].hp.sub(m);
                      var h = ""
                        .concat(e.name, " have attacked ")
                        .concat(t.packs[0].name, " for ")
                        .concat(ee(m), " damage");
                      p &&
                        (h = ""
                          .concat(e.name, " have landed critical damage on ")
                          .concat(t.packs[0].name, " for ")
                          .concat(ee(m), " damage!")),
                        n.logs.unshift({
                          date: R(new Date()),
                          message: h,
                          type: p ? "combat-special" : "combat",
                        });
                    }
                    var y = (
                        e.attributes[l.FIRE_DAMAGE] || new E.Z("1.e-300")
                      ).plus(
                        null ===
                          (u = e.attributes[l.MAX_FIRE_DAMAGE] || new E.Z(0)) ||
                          void 0 === u
                          ? void 0
                          : u.mul(Math.random())
                      ),
                      A = n.getAtkVsDef(
                        y,
                        t.packs[0].attributes[l.FIRE_RESISTANCE]
                      ),
                      v = (
                        e.attributes[l.MAGICAL_DAMAGE] || new E.Z("1.e-300")
                      ).plus(
                        null ===
                          (s =
                            e.attributes[l.MAX_MAGICAL_DAMAGE] || new E.Z(0)) ||
                          void 0 === s
                          ? void 0
                          : s.mul(Math.random())
                      ),
                      w = n.getAtkVsDef(
                        v,
                        t.packs[0].attributes[l.MAGIC_RESISTANCE]
                      ),
                      b = A.plus(w);
                    b.greaterThan(1e-8) &&
                      ((t.packs[0].hp = t.packs[0].hp.sub(b)),
                      (h = ""
                        .concat(e.name, " have attacked ")
                        .concat(t.packs[0].name, " for ")
                        .concat(ee(b), " elemental damage")),
                      n.logs.unshift({
                        date: R(new Date()),
                        message: h,
                        type: "combat",
                      })),
                      (t.packs[0].amount = Math.ceil(
                        t.packs[0].hp
                          .div(t.packs[0].attributes[l.MAX_HP] || new E.Z(1))
                          .toNumber()
                      )),
                      t.packs[0].amount <= 0 &&
                        (n.logs.unshift({
                          date: R(new Date()),
                          message: "".concat(t.packs[0].name, " just died"),
                          type: "combat",
                        }),
                        t.packs.splice(0, 1));
                  }
                });
              }),
              (t.prototype.process = function (e) {
                if (
                  this.state.isRunning &&
                  ((this.state.attackTimer += e), !(this.state.attackTimer < 1))
                ) {
                  if (
                    ((this.state.attackTimer = 0),
                    this.attack(this.state.opponent, this.state.my),
                    this.attack(this.state.my, this.state.opponent),
                    this.regenHP(this.state.opponent, e),
                    this.regenHP(this.state.my, e),
                    this.state.my.packs.length <= 0)
                  )
                    return (
                      (this.state.statusId = 2),
                      (this.state.isRunning = !1),
                      (Zl.battle.battleLocations.relevantHP = new E.Z(0.1)),
                      void this.logs.unshift({
                        date: R(new Date()),
                        message: "You lost",
                        type: "combat-result",
                      })
                    );
                  if (this.state.opponent.packs.length <= 0)
                    return (
                      (this.state.statusId = 1),
                      (this.state.isRunning = !1),
                      void this.logs.unshift({
                        date: R(new Date()),
                        message: "You won",
                        type: "combat-result",
                      })
                    );
                  this.logs.length > 100 &&
                    (this.logs = this.logs.slice(0, 100)),
                    (Zl.battle.battleLocations.relevantHP =
                      this.state.my.packs[0].hp);
                }
              }),
              t
            );
          })(s),
          El = yl.getInstance(),
          Al = [
            {
              id: f.RAT,
              name: "Rat",
              description: "",
              battleAttributes:
                ((Es = {}),
                (Es[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul(5);
                }),
                (Es[l.PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul(1);
                }),
                (Es[l.MAX_PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul(2);
                }),
                (Es[l.HP_REGEN] = function (e) {
                  return w(1.4, e).mul(0.1);
                }),
                Es),
              packSize: 5,
            },
            {
              id: f.BEAVER,
              name: "Beaver",
              description: "",
              battleAttributes:
                ((As = {}),
                (As[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul(12);
                }),
                (As[l.PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul(1);
                }),
                (As[l.MAX_PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul(4);
                }),
                (As[l.HP_REGEN] = function (e) {
                  return w(1.4, e).mul(0.1);
                }),
                As),
              packSize: 2,
            },
            {
              id: f.TORTOISE,
              name: "Tortoise",
              description: "",
              battleAttributes:
                ((vs = {}),
                (vs[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul(825);
                }),
                (vs[l.PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul(33);
                }),
                (vs[l.MAX_PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul(19);
                }),
                (vs[l.HP_REGEN] = function (e) {
                  return w(1.4, e).mul(10);
                }),
                (vs[l.ARMOR] = function (e) {
                  return w(1.4, e).mul(50);
                }),
                vs),
              packSize: 2,
            },
            {
              id: f.MOSQUITO,
              name: "Mosquito",
              description: "",
              battleAttributes:
                ((ws = {}),
                (ws[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul(360);
                }),
                (ws[l.PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul(42);
                }),
                (ws[l.MAX_PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul(160);
                }),
                ws),
              packSize: 2,
            },
            {
              id: f.MUSKRAT,
              name: "Muskrat",
              description: "",
              battleAttributes:
                ((bs = {}),
                (bs[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul(583);
                }),
                (bs[l.PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul(39);
                }),
                (bs[l.MAX_PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul(57);
                }),
                (bs[l.HP_REGEN] = function (e) {
                  return w(1.4, e).mul(3);
                }),
                (bs[l.ARMOR] = function (e) {
                  return w(1.4, e).mul(18);
                }),
                bs),
              packSize: 2,
            },
            {
              id: f.ARMADILLO,
              name: "Armadillo",
              description: "",
              battleAttributes:
                ((Is = {}),
                (Is[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul(16200);
                }),
                (Is[l.PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul(1082);
                }),
                (Is[l.MAX_PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul(1379);
                }),
                (Is[l.HP_REGEN] = function (e) {
                  return w(1.4, e).mul(100);
                }),
                (Is[l.ARMOR] = function (e) {
                  return w(1.4, e).mul(1e4);
                }),
                Is),
              packSize: 2,
            },
            {
              id: f.RAVEN,
              name: "Raven",
              description: "",
              battleAttributes:
                ((Cs = {}),
                (Cs[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul(6400);
                }),
                (Cs[l.PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul(3582);
                }),
                (Cs[l.MAX_PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul(6479);
                }),
                (Cs[l.HP_REGEN] = function (e) {
                  return w(1.4, e).mul(40);
                }),
                (Cs[l.ARMOR] = function (e) {
                  return w(1.4, e).mul(1200);
                }),
                (Cs[l.CRIT_CHANCE] = function (e) {
                  return new E.Z(0.25);
                }),
                (Cs[l.CRIT_MULTIPLIER] = function (e) {
                  return new E.Z(4);
                }),
                Cs),
              packSize: 2,
            },
            {
              id: f.WASP,
              name: "Wasp",
              description: "",
              battleAttributes:
                ((Ns = {}),
                (Ns[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul(4200);
                }),
                (Ns[l.PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul(1882);
                }),
                (Ns[l.MAX_PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul(16024);
                }),
                (Ns[l.HP_REGEN] = function (e) {
                  return w(1.4, e).mul(40);
                }),
                (Ns[l.ARMOR] = function (e) {
                  return w(1.4, e).mul(1200);
                }),
                (Ns[l.CRIT_CHANCE] = function (e) {
                  return new E.Z(0.05);
                }),
                (Ns[l.CRIT_MULTIPLIER] = function (e) {
                  return new E.Z(2);
                }),
                (Ns[l.DODGE_CHANCE] = function (e) {
                  return new E.Z(0.3);
                }),
                Ns),
              packSize: 2,
            },
            {
              id: f.SMALL_DEMON,
              name: "Small Demon",
              description: "",
              battleAttributes:
                ((Ts = {}),
                (Ts[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul("8.e+5");
                }),
                (Ts[l.PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul("1.1e+5");
                }),
                (Ts[l.MAX_PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul("1.7e+5");
                }),
                (Ts[l.HP_REGEN] = function (e) {
                  return w(1.4, e).mul("1.e+3");
                }),
                (Ts[l.ARMOR] = function (e) {
                  return w(1.4, e).mul("1.e+5");
                }),
                (Ts[l.FIRE_RESISTANCE] = function (e) {
                  return w(1.4, e).mul("1.e+4");
                }),
                (Ts[l.MAGIC_RESISTANCE] = function (e) {
                  return w(1.4, e).mul("1.e+4");
                }),
                Ts),
              packSize: 3,
            },
            {
              id: f.FIRE_DEMON,
              name: "Fire Demon",
              description: "",
              battleAttributes:
                ((Rs = {}),
                (Rs[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul("2.e+5");
                }),
                (Rs[l.FIRE_DAMAGE] = function (e) {
                  return w(1.4, e).mul("3.1e+5");
                }),
                (Rs[l.MAX_FIRE_DAMAGE] = function (e) {
                  return w(1.4, e).mul("5.7e+5");
                }),
                (Rs[l.HP_REGEN] = function (e) {
                  return w(1.4, e).mul("1.e+3");
                }),
                (Rs[l.ARMOR] = function (e) {
                  return w(1.4, e).mul("1.e+4");
                }),
                (Rs[l.FIRE_RESISTANCE] = function (e) {
                  return w(1.4, e).mul("1.e+6");
                }),
                (Rs[l.MAGIC_RESISTANCE] = function (e) {
                  return w(1.4, e).mul("3.e+4");
                }),
                Rs),
              packSize: 3,
            },
            {
              id: f.SPIDER,
              name: "Spider",
              description: "",
              battleAttributes:
                ((Ls = {}),
                (Ls[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul("1.e+5");
                }),
                (Ls[l.PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul("2.4e+4");
                }),
                (Ls[l.MAX_PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul("4.8e+4");
                }),
                (Ls[l.HP_REGEN] = function (e) {
                  return w(1.4, e).mul("1.e+3");
                }),
                (Ls[l.ARMOR] = function (e) {
                  return w(1.4, e).mul("1.e+5");
                }),
                (Ls[l.CRIT_CHANCE] = function (e) {
                  return new E.Z(0.5);
                }),
                (Ls[l.CRIT_MULTIPLIER] = function (e) {
                  return new E.Z(4);
                }),
                Ls),
              packSize: 3,
            },
            {
              id: f.MAGIC_SPIDER,
              name: "Magic Spider",
              description: "",
              battleAttributes:
                ((Os = {}),
                (Os[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul("1.6e+5");
                }),
                (Os[l.MAGICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul("2.e+1");
                }),
                (Os[l.MAX_MAGICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul("1.7e+5");
                }),
                (Os[l.HP_REGEN] = function (e) {
                  return w(1.4, e).mul("1.e+3");
                }),
                (Os[l.ARMOR] = function (e) {
                  return w(1.4, e).mul("1.e+4");
                }),
                (Os[l.FIRE_RESISTANCE] = function (e) {
                  return w(1.4, e).mul("5.e+4");
                }),
                (Os[l.MAGIC_RESISTANCE] = function (e) {
                  return w(1.4, e).mul("9.e+5");
                }),
                Os),
              packSize: 3,
            },
            {
              id: f.WOLF,
              name: "Wolf",
              description: "",
              battleAttributes:
                ((Ss = {}),
                (Ss[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul("1.e+7");
                }),
                (Ss[l.PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul("2.4e+6");
                }),
                (Ss[l.MAX_PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul("6.8e+6");
                }),
                (Ss[l.HP_REGEN] = function (e) {
                  return w(1.4, e).mul("2.e+3");
                }),
                (Ss[l.ARMOR] = function (e) {
                  return w(1.4, e).mul("2.e+5");
                }),
                (Ss[l.CRIT_CHANCE] = function (e) {
                  return new E.Z(0.5);
                }),
                (Ss[l.CRIT_MULTIPLIER] = function (e) {
                  return new E.Z(4);
                }),
                (Ss[l.DODGE_CHANCE] = function (e) {
                  return new E.Z(0.5);
                }),
                Ss),
              packSize: 6,
            },
            {
              id: f.BEAR,
              name: "Bear",
              description: "",
              battleAttributes:
                ((Ms = {}),
                (Ms[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul("2.e+7");
                }),
                (Ms[l.PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul("1.4e+6");
                }),
                (Ms[l.MAX_PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul("3.2e+6");
                }),
                (Ms[l.HP_REGEN] = function (e) {
                  return w(1.4, e).mul("2.e+5");
                }),
                (Ms[l.ARMOR] = function (e) {
                  return w(1.4, e).mul("2.e+6");
                }),
                Ms),
              packSize: 3,
            },
            {
              id: f.MAGIC_FLY,
              name: "Magic Fly",
              description: "",
              battleAttributes:
                ((Ps = {}),
                (Ps[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul("4.6e+6");
                }),
                (Ps[l.MAGICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul("4.e+1");
                }),
                (Ps[l.MAX_MAGICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul("9.2e+6");
                }),
                (Ps[l.HP_REGEN] = function (e) {
                  return w(1.4, e).mul("2.e+4");
                }),
                (Ps[l.ARMOR] = function (e) {
                  return w(1.4, e).mul("2.e+5");
                }),
                (Ps[l.FIRE_RESISTANCE] = function (e) {
                  return w(1.4, e).mul("1.e+6");
                }),
                (Ps[l.MAGIC_RESISTANCE] = function (e) {
                  return w(1.4, e).mul("8.e+6");
                }),
                Ps),
              packSize: 3,
            },
            {
              id: f.LIVING_BOOK,
              name: "Living Book",
              description: "",
              battleAttributes:
                ((Zs = {}),
                (Zs[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul("8.e+8");
                }),
                (Zs[l.PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul("2.4e+8");
                }),
                (Zs[l.MAX_PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul("6.8e+8");
                }),
                (Zs[l.HP_REGEN] = function (e) {
                  return w(1.4, e).mul("2.e+5");
                }),
                (Zs[l.ARMOR] = function (e) {
                  return w(1.4, e).mul("2.e+6");
                }),
                (Zs[l.CRIT_CHANCE] = function (e) {
                  return new E.Z(0.5);
                }),
                (Zs[l.CRIT_MULTIPLIER] = function (e) {
                  return new E.Z(8);
                }),
                (Zs[l.DODGE_CHANCE] = function (e) {
                  return new E.Z(0.5);
                }),
                Zs),
              packSize: 6,
            },
            {
              id: f.GUARDIAN,
              name: "Guardian",
              description: "",
              battleAttributes:
                ((_s = {}),
                (_s[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul("2.e+9");
                }),
                (_s[l.PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul("1.4e+8");
                }),
                (_s[l.MAX_PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul("3.2e+8");
                }),
                (_s[l.MAGICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul("1.4e+8");
                }),
                (_s[l.MAX_MAGICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul("3.2e+8");
                }),
                (_s[l.HP_REGEN] = function (e) {
                  return w(1.4, e).mul("2.e+7");
                }),
                (_s[l.ARMOR] = function (e) {
                  return w(1.4, e).mul("2.e+8");
                }),
                (_s[l.FIRE_RESISTANCE] = function (e) {
                  return w(1.4, e).mul("3.e+8");
                }),
                (_s[l.MAGIC_RESISTANCE] = function (e) {
                  return w(1.4, e).mul("9.e+7");
                }),
                _s),
              packSize: 3,
            },
            {
              id: f.FLAMED_SCROLL,
              name: "Flamed Scroll",
              description: "",
              battleAttributes:
                ((Gs = {}),
                (Gs[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul("4.6e+8");
                }),
                (Gs[l.FIRE_DAMAGE] = function (e) {
                  return w(1.4, e).mul("4.e+8");
                }),
                (Gs[l.MAX_FIRE_DAMAGE] = function (e) {
                  return w(1.4, e).mul("9.2e+8");
                }),
                (Gs[l.HP_REGEN] = function (e) {
                  return w(1.4, e).mul("2.e+4");
                }),
                (Gs[l.ARMOR] = function (e) {
                  return w(1.4, e).mul("2.e+7");
                }),
                (Gs[l.FIRE_RESISTANCE] = function (e) {
                  return w(1.4, e).mul("8.e+8");
                }),
                (Gs[l.MAGIC_RESISTANCE] = function (e) {
                  return w(1.4, e).mul("1.e+8");
                }),
                Gs),
              packSize: 3,
            },
            {
              id: f.DONESKIN,
              name: "Doneskin",
              description: "",
              battleAttributes:
                ((Ds = {}),
                (Ds[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul(1e14);
                }),
                (Ds[l.PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul(5e10);
                }),
                (Ds[l.MAX_PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul(24e10);
                }),
                (Ds[l.HP_REGEN] = function (e) {
                  return w(1.4, e).mul(1e10);
                }),
                Ds),
              packSize: 1,
            },
          ],
          vl = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function i() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((i.prototype = n.prototype), new i()));
            };
          })(),
          wl = function () {
            return (
              (wl =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, r) &&
                        (e[r] = t[r]);
                  return e;
                }),
              wl.apply(this, arguments)
            );
          },
          bl = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.state = []),
                (t.selectedLocation = null),
                (t.autoProgress = !1),
                (t.battleFights = El),
                (t.relevantHP = new E.Z(1)),
                t.workDispatcher.on(
                  "[battle-locations] set level",
                  function (e) {
                    console.log("do set level", e),
                      t.setLocationLevel(e.id, e.level);
                  }
                ),
                t.workDispatcher.on(
                  "[battle-locations] set autoprogress",
                  function (e) {
                    console.log("do set autoprogress", e), (t.autoProgress = e);
                  }
                ),
                t.workDispatcher.on(
                  "[battle-locations] enter location",
                  function (e) {
                    console.log("do enter", e),
                      (t.selectedLocation = e.id),
                      e.id ? t.initializeFight() : t.battleFights.stopFight();
                  }
                ),
                t
              );
            }
            return (
              vl(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                var t, n;
                (this.state =
                  (null === (t = null == e ? void 0 : e.battleLocations) ||
                  void 0 === t
                    ? void 0
                    : t.map(function (e) {
                        return wl({}, e);
                      })) || []),
                  (this.selectedLocation =
                    null == e ? void 0 : e.selectedLocation),
                  (this.relevantHP = new E.Z(
                    (null == e ? void 0 : e.relevantHP) || "0.1"
                  )),
                  (this.autoProgress =
                    null !== (n = null == e ? void 0 : e.autoProgress) &&
                    void 0 !== n &&
                    n);
              }),
              (t.prototype.exportData = function () {
                var e;
                return {
                  battleLocations: this.state.map(function (e) {
                    return wl({}, e);
                  }),
                  selectedLocation: this.selectedLocation,
                  relevantHP: this.relevantHP.toPrecision(18),
                  autoProgress:
                    null !== (e = this.autoProgress) && void 0 !== e && e,
                };
              }),
              (t.prototype.dataToUI = function () {
                var e = this,
                  t = ml.map(function (t) {
                    return e.processToUI(t);
                  });
                return {
                  battleLocations: t.filter(function (e) {
                    return e.isUnlocked;
                  }),
                  selectedLocation:
                    (this.selectedLocation &&
                      t.find(function (t) {
                        return t.id === e.selectedLocation;
                      })) ||
                    null,
                  fight: this.battleFights.dataToUI(),
                  relevantHP: ""
                    .concat(ee(this.relevantHP), " / ")
                    .concat(
                      ee(
                        Zl.battle.battleAttributes.getBattleAttribute(l.MAX_HP)
                      )
                    ),
                  autoProgress: this.autoProgress,
                };
              }),
              (t.prototype.getLootsNumeric = function (e, t) {
                var n, i;
                if (!e.possibleLootMultipliers) return [];
                var r = [];
                for (var o in e.possibleLootMultipliers)
                  if (
                    null ===
                      (i =
                        null === (n = Zl.resources.dbCache) || void 0 === n
                          ? void 0
                          : n[o]) || void 0 === i
                      ? void 0
                      : i.unlockCondition(Zl)
                  ) {
                    var a = w(1.2, t.level).mul(e.possibleLootMultipliers[o]);
                    r.push({ id: o, amount: a });
                  }
                return r;
              }),
              (t.prototype.getLoots = function (e, t) {
                if (!e.possibleLootMultipliers) return [];
                var n = [];
                return (
                  this.getLootsNumeric(e, t).forEach(function (e) {
                    n.push({
                      id: e.id,
                      name: le(e.id),
                      amount: ee(e.amount),
                      amountValue: e.amount.toPrecision(18),
                    });
                  }),
                  n
                );
              }),
              (t.prototype.processToUI = function (e) {
                var t = this.state.find(function (t) {
                  return t.id === e.id;
                });
                t ||
                  ((t = {
                    id: e.id,
                    level: 0,
                    maxLevel: 0,
                    wins: 0,
                    losses: 0,
                    progress: 0,
                  }),
                  this.state.push(t));
                var n = this.getLoots(e, t),
                  i = e.unlockCondition(Zl) && (!e.isBossFight || t.wins <= 0);
                return (
                  i &&
                    t.wins <= 0 &&
                    Zl.newNotifications.registerNotification(
                      "battle:locations:location:".concat(e.id)
                    ),
                  {
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    isUnlocked: i,
                    level: t.level,
                    maxLevel: t.maxLevel,
                    wins: ie(t.wins, 2),
                    losses: ie(t.losses, 2),
                    possibleLoot: n,
                    progress: Math.max(0, 20 - t.progress),
                  }
                );
              }),
              (t.prototype.getBattleLocationLevel = function (e) {
                var t;
                return (
                  (null ===
                    (t = this.state.find(function (t) {
                      return t.id === e;
                    })) || void 0 === t
                    ? void 0
                    : t.level) || 0
                );
              }),
              (t.prototype.getBattleLocationMaxLevel = function (e) {
                var t;
                return (
                  (null ===
                    (t = this.state.find(function (t) {
                      return t.id === e;
                    })) || void 0 === t
                    ? void 0
                    : t.maxLevel) || 0
                );
              }),
              (t.prototype.getBattleLocationFights = function (e) {
                var t, n;
                return (
                  ((null ===
                    (t = this.state.find(function (t) {
                      return t.id === e;
                    })) || void 0 === t
                    ? void 0
                    : t.wins) || 0) +
                  ((null ===
                    (n = this.state.find(function (t) {
                      return t.id === e;
                    })) || void 0 === n
                    ? void 0
                    : n.losses) || 0)
                );
              }),
              (t.prototype.getBattleLocationWin = function (e) {
                var t;
                return (
                  (null ===
                    (t = this.state.find(function (t) {
                      return t.id === e;
                    })) || void 0 === t
                    ? void 0
                    : t.wins) || 0
                );
              }),
              (t.prototype.setLocationLevel = function (e, t) {
                var n = this.state.findIndex(function (t) {
                  return t.id === e;
                });
                if (n < 0)
                  throw new Error("Invalid location id passed: ".concat(p));
                this.state[n].level = Math.max(
                  0,
                  Math.min(t, this.state[n].maxLevel)
                );
              }),
              (t.prototype.initializeMe = function () {
                var e = {
                  id: "me",
                  name: "You",
                  amount: 1,
                  startAmount: 1,
                  attributes: Zl.battle.battleAttributes.getBattleAttributes(),
                  hp: this.relevantHP,
                  rarityLevel: 0,
                };
                return (
                  console.log(
                    "init with: ",
                    Xi(
                      Zl.battle.battleAttributes.getBattleAttributes(),
                      function (e) {
                        return e.toNumber();
                      }
                    )
                  ),
                  { packs: [e], isAlive: !0 }
                );
              }),
              (t.prototype.initializeEnemy = function (e) {
                var t = this;
                void 0 === e && (e = 0);
                var n = ml.find(function (e) {
                  return e.id === t.selectedLocation;
                });
                if (!n) throw new Error("Zone ".concat(n, " not found"));
                var i = this.state.find(function (e) {
                  return e.id === t.selectedLocation;
                });
                i ||
                  ((i = {
                    id: n.id,
                    level: 0,
                    maxLevel: 0,
                    wins: 0,
                    losses: 0,
                    progress: 0,
                  }),
                  this.state.push(i));
                for (
                  var r = [],
                    o = 1 + (n.isBossFight ? 0 : Math.floor(3 * Math.random())),
                    a = function (t) {
                      var o = Object.entries(n.possibleEnemies),
                        a = o[Math.floor(Math.random() * o.length)],
                        u = Al.find(function (e) {
                          return a[0] === e.id;
                        });
                      if (!u) return "continue";
                      var s = n.isBossFight
                          ? 1
                          : 1 + Math.floor(Math.random() * a[1]),
                        c = 0,
                        d = null == i ? void 0 : i.level;
                      0 === t &&
                        e > 0 &&
                        ((c = e),
                        (d =
                          (((null == i ? void 0 : i.level) || 0) + 3 * c) *
                          (1 + 0.05 * c)),
                        (s = 1));
                      var p = Xi(u.battleAttributes, function (e) {
                        return e(d);
                      });
                      console.log(
                        "creating: ",
                        d,
                        u.name,
                        i.level,
                        u,
                        Xi(p, function (e, t) {
                          return e.toNumber();
                        })
                      ),
                        r.push({
                          id: u.id,
                          name: u.name,
                          startAmount: s,
                          amount: s,
                          attributes: p,
                          hp: p[l.MAX_HP].mul(s),
                          rarityLevel: c,
                        });
                    },
                    u = 0;
                  u < o;
                  u++
                )
                  a(u);
                return { packs: r, isAlive: !0 };
              }),
              (t.prototype.initializeFight = function () {
                if (this.selectedLocation) {
                  var e = 0,
                    t = Math.random();
                  t < 0.02 ? (e = 2) : t < 0.15 && (e = 1),
                    this.battleFights.initializeFight(
                      this.initializeMe(),
                      this.initializeEnemy(e),
                      e
                    );
                }
              }),
              (t.prototype.process = function (e) {
                var t = this;
                if (!this.battleFights.state.isRunning) {
                  if (this.selectedLocation) {
                    var n = this.state.findIndex(function (e) {
                      return e.id === t.selectedLocation;
                    });
                    if (1 === this.battleFights.state.statusId) {
                      this.state[n].wins++;
                      var i = ml.find(function (e) {
                        return e.id === t.selectedLocation;
                      });
                      if (!i) throw new Error("Invalid zone");
                      if (Math.random() > 0.5) {
                        var r = this.getLootsNumeric(
                            i,
                            this.state.find(function (e) {
                              return e.id === t.selectedLocation;
                            })
                          ),
                          o = Math.floor(Math.random() * r.length);
                        Zl.resources.addResource(r[o].id, r[o].amount),
                          this.battleFights.logs.unshift({
                            date: R(new Date()),
                            message: "You got "
                              .concat(ee(r[o].amount), " of ")
                              .concat(le(r[o].id)),
                            type: "combat-result",
                          });
                      }
                      if (
                        Math.random() <
                        0.1 * (1 + 5 * this.battleFights.state.complexityLevel)
                      ) {
                        var a = Zl.battle.battleItems.giveRandomItem(
                          (this.state[n].level + 1) * i.levelMult,
                          this.battleFights.state.complexityLevel
                        );
                        a &&
                          this.battleFights.logs.unshift({
                            date: R(new Date()),
                            message: "You found ".concat(a.name),
                            type: "combat-result",
                          });
                      }
                      this.state[n].level === this.state[n].maxLevel &&
                        (this.state[n].progress++,
                        this.state[n].progress >= 20 &&
                          (this.state[n].maxLevel++,
                          (this.state[n].progress = 0))),
                        this.autoProgress &&
                          (this.state[n].level = this.state[n].maxLevel),
                        this.initializeFight();
                    }
                    2 === this.battleFights.state.statusId &&
                      (this.state[n].losses++, this.battleFights.stopFight());
                  }
                  var u = Zl.battle.battleAttributes.getBattleAttribute(
                    l.MAX_HP
                  );
                  this.relevantHP.lessThan(u)
                    ? (this.relevantHP = E.Z.min(
                        u,
                        this.relevantHP.plus(u.mul(0.01 * e))
                      ))
                    : (this.relevantHP = u),
                    this.selectedLocation &&
                      this.relevantHP.greaterThanOrEqualTo(u.mul(0.99)) &&
                      this.initializeFight();
                }
                this.battleFights.process(e);
              }),
              t
            );
          })(s),
          Il = bl.getInstance(),
          Cl = [
            {
              baseId: h.CAP,
              name: "Cap",
              slot: g.HEAD,
              basicBattleAttributeGain:
                ((ks = {}),
                (ks[l.ARMOR] = function (e) {
                  return w(1.03, e)
                    .mul(2 * (e + 1))
                    .round();
                }),
                (ks[l.DODGE_CHANCE] = function (e) {
                  return new E.Z(0.05);
                }),
                ks),
              basicBattleAttributeMultiplier: {},
              secondaryAttributeGain: {},
              secondaryAttributeMultiplier:
                ((Bs = {}),
                (Bs[c.AGILITY] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                Bs),
              secondaryBattleAttributeGain:
                ((Us = {}),
                (Us[l.MAX_HP] = function (e) {
                  return w(1, e)
                    .mul(2 * (e + 1))
                    .round();
                }),
                (Us[l.HP_REGEN] = function (e) {
                  return w(1.02, e).mul(0.02 * (e + 1));
                }),
                (Us[l.CRIT_CHANCE] = function (e) {
                  return new E.Z(0.02);
                }),
                Us),
              secondaryBattleAttributeMultiplier:
                ((xs = {}),
                (xs[l.CRIT_MULTIPLIER] = function (e) {
                  return new E.Z(1.1 + 0.01 * e);
                }),
                xs),
              unlockCondition: function (e) {
                return !0;
              },
              baseScrapGain: { leather: 2 },
              equipmentType: m.LEATHER,
            },
            {
              baseId: h.HELMET,
              name: "Helmet",
              slot: g.HEAD,
              basicBattleAttributeGain:
                ((Hs = {}),
                (Hs[l.ARMOR] = function (e) {
                  return w(1.03, e)
                    .mul(5 * (e + 1))
                    .round();
                }),
                Hs),
              basicBattleAttributeMultiplier: {},
              secondaryAttributeGain: {},
              secondaryAttributeMultiplier:
                ((Ws = {}),
                (Ws[c.VITALITY] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                Ws),
              secondaryBattleAttributeGain:
                ((Ys = {}),
                (Ys[l.MAX_HP] = function (e) {
                  return w(1, e)
                    .mul(5 * (e + 1))
                    .round();
                }),
                (Ys[l.HP_REGEN] = function (e) {
                  return w(1.02, e).mul(0.04 * (e + 1));
                }),
                (Ys[l.FIRE_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(5 * (e + 1))
                    .round();
                }),
                (Ys[l.MAGIC_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(5 * (e + 1))
                    .round();
                }),
                Ys),
              secondaryBattleAttributeMultiplier: {},
              unlockCondition: function (e) {
                return !0;
              },
              baseScrapGain: { iron: 2 },
              equipmentType: m.IRON,
            },
            {
              baseId: h.HAT,
              name: "Hat",
              slot: g.HEAD,
              basicBattleAttributeGain:
                ((qs = {}),
                (qs[l.ARMOR] = function (e) {
                  return w(1.03, e)
                    .mul(1 * (e + 1))
                    .round();
                }),
                (qs[l.FIRE_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(25 * (e + 1))
                    .round();
                }),
                qs),
              basicBattleAttributeMultiplier: {},
              secondaryAttributeGain: {},
              secondaryAttributeMultiplier:
                ((Xs = {}),
                (Xs[c.RUNE_READING] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                (Xs[c.MAGIC_KNOWLEDGE] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                Xs),
              secondaryBattleAttributeGain:
                ((Ks = {}),
                (Ks[l.MAX_HP] = function (e) {
                  return w(1, e)
                    .mul(2 * (e + 1))
                    .round();
                }),
                (Ks[l.HP_REGEN] = function (e) {
                  return w(1.02, e).mul(0.02 * (e + 1));
                }),
                (Ks[l.MAGIC_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(25 * (e + 1))
                    .round();
                }),
                Ks),
              secondaryBattleAttributeMultiplier:
                ((Fs = {}),
                (Fs[l.MAGICAL_DAMAGE] = function (e) {
                  return new E.Z(1.2 + 0.012 * Math.pow(e, 0.5));
                }),
                (Fs[l.FIRE_DAMAGE] = function (e) {
                  return new E.Z(1.2 + 0.012 * Math.pow(e, 0.5));
                }),
                Fs),
              unlockCondition: function (e) {
                return !0;
              },
              baseScrapGain: { wool: 2 },
              equipmentType: m.MAGIC,
            },
            {
              baseId: h.JACKET,
              name: "Leather Armor",
              slot: g.BODY,
              basicBattleAttributeGain:
                ((js = {}),
                (js[l.ARMOR] = function (e) {
                  return w(1.03, e)
                    .mul(8 * (e + 1))
                    .round();
                }),
                (js[l.DODGE_CHANCE] = function (e) {
                  return new E.Z(0.15);
                }),
                js),
              basicBattleAttributeMultiplier: {},
              secondaryAttributeGain: {},
              secondaryAttributeMultiplier:
                ((Vs = {}),
                (Vs[c.AGILITY] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                Vs),
              secondaryBattleAttributeGain:
                ((zs = {}),
                (zs[l.MAX_HP] = function (e) {
                  return w(1, e)
                    .mul(2 * (e + 1))
                    .round();
                }),
                (zs[l.HP_REGEN] = function (e) {
                  return w(1.02, e).mul(0.05 * (e + 1));
                }),
                (zs[l.CRIT_CHANCE] = function (e) {
                  return new E.Z(0.03);
                }),
                zs),
              secondaryBattleAttributeMultiplier:
                ((Qs = {}),
                (Qs[l.CRIT_MULTIPLIER] = function (e) {
                  return new E.Z(1.1 + 0.01 * e);
                }),
                Qs),
              unlockCondition: function (e) {
                return !0;
              },
              baseScrapGain: { leather: 4 },
              equipmentType: m.LEATHER,
            },
            {
              baseId: h.ARMOR,
              name: "Plated Armor",
              slot: g.BODY,
              basicBattleAttributeGain:
                ((Js = {}),
                (Js[l.ARMOR] = function (e) {
                  return w(1.03, e)
                    .mul(35 * (e + 1))
                    .round();
                }),
                Js),
              basicBattleAttributeMultiplier: {},
              secondaryAttributeGain: {},
              secondaryAttributeMultiplier: {},
              secondaryBattleAttributeGain:
                (($s = {}),
                ($s[l.MAX_HP] = function (e) {
                  return w(1, e)
                    .mul(25 * (e + 1))
                    .round();
                }),
                ($s[l.HP_REGEN] = function (e) {
                  return w(1.02, e).mul(0.08 * (e + 1));
                }),
                ($s[l.FIRE_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(20 * (e + 1))
                    .round();
                }),
                ($s[l.MAGIC_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(20 * (e + 1))
                    .round();
                }),
                $s),
              secondaryBattleAttributeMultiplier: {},
              unlockCondition: function (e) {
                return !0;
              },
              baseScrapGain: { iron: 4 },
              equipmentType: m.IRON,
            },
            {
              baseId: h.CLOACK,
              name: "Cloak",
              slot: g.BODY,
              basicBattleAttributeGain:
                ((ec = {}),
                (ec[l.ARMOR] = function (e) {
                  return w(1.03, e)
                    .mul(2 * (e + 1))
                    .round();
                }),
                ec),
              basicBattleAttributeMultiplier:
                ((tc = {}),
                (tc[l.MAGICAL_DAMAGE] = function (e) {
                  return new E.Z(1.5);
                }),
                (tc[l.FIRE_DAMAGE] = function (e) {
                  return new E.Z(1.5);
                }),
                tc),
              secondaryAttributeGain: {},
              secondaryAttributeMultiplier:
                ((nc = {}),
                (nc[c.RUNE_READING] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                (nc[c.WILLPOWER] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                (nc[c.MAGIC_KNOWLEDGE] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                nc),
              secondaryBattleAttributeGain:
                ((ic = {}),
                (ic[l.MAX_HP] = function (e) {
                  return w(1, e)
                    .mul(2 * (e + 1))
                    .round();
                }),
                (ic[l.HP_REGEN] = function (e) {
                  return w(1.02, e).mul(0.02 * (e + 1));
                }),
                (ic[l.FIRE_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(45 * (e + 1))
                    .round();
                }),
                (ic[l.MAGIC_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(45 * (e + 1))
                    .round();
                }),
                ic),
              secondaryBattleAttributeMultiplier:
                ((rc = {}),
                (rc[l.MAGICAL_DAMAGE] = function (e) {
                  return new E.Z(1.5 + 0.02 * Math.pow(e, 0.5));
                }),
                (rc[l.FIRE_DAMAGE] = function (e) {
                  return new E.Z(1.5 + 0.02 * Math.pow(e, 0.5));
                }),
                rc),
              unlockCondition: function (e) {
                return !0;
              },
              baseScrapGain: { wool: 4 },
              equipmentType: m.MAGIC,
            },
            {
              baseId: h.LEATHER_BOOTS,
              name: "Leather Boots",
              slot: g.LEGS,
              basicBattleAttributeGain:
                ((oc = {}),
                (oc[l.ARMOR] = function (e) {
                  return w(1.03, e)
                    .mul(2 * (e + 1))
                    .round();
                }),
                (oc[l.DODGE_CHANCE] = function (e) {
                  return new E.Z(0.1);
                }),
                oc),
              basicBattleAttributeMultiplier: {},
              secondaryAttributeGain: {},
              secondaryAttributeMultiplier:
                ((ac = {}),
                (ac[c.AGILITY] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                ac),
              secondaryBattleAttributeGain:
                ((uc = {}),
                (uc[l.MAX_HP] = function (e) {
                  return w(1, e)
                    .mul(2 * (e + 1))
                    .round();
                }),
                (uc[l.HP_REGEN] = function (e) {
                  return w(1.02, e).mul(0.05 * (e + 1));
                }),
                (uc[l.CRIT_CHANCE] = function (e) {
                  return new E.Z(0.02);
                }),
                uc),
              secondaryBattleAttributeMultiplier:
                ((sc = {}),
                (sc[l.CRIT_MULTIPLIER] = function (e) {
                  return new E.Z(1.1 + 0.01 * e);
                }),
                sc),
              unlockCondition: function (e) {
                return !0;
              },
              baseScrapGain: { leather: 2 },
              equipmentType: m.LEATHER,
            },
            {
              baseId: h.IRON_BOOTS,
              name: "Iron Boots",
              slot: g.LEGS,
              basicBattleAttributeGain:
                ((cc = {}),
                (cc[l.ARMOR] = function (e) {
                  return w(1.03, e)
                    .mul(4 * (e + 1))
                    .round();
                }),
                cc),
              basicBattleAttributeMultiplier: {},
              secondaryAttributeGain: {},
              secondaryAttributeMultiplier:
                ((lc = {}),
                (lc[c.VITALITY] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                lc),
              secondaryBattleAttributeGain:
                ((dc = {}),
                (dc[l.MAX_HP] = function (e) {
                  return w(1, e)
                    .mul(12 * (e + 1))
                    .round();
                }),
                (dc[l.HP_REGEN] = function (e) {
                  return w(1.02, e).mul(0.04 * (e + 1));
                }),
                (dc[l.FIRE_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(15 * (e + 1))
                    .round();
                }),
                (dc[l.MAGIC_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(15 * (e + 1))
                    .round();
                }),
                dc),
              secondaryBattleAttributeMultiplier: {},
              unlockCondition: function (e) {
                return !0;
              },
              baseScrapGain: { iron: 2 },
              equipmentType: m.IRON,
            },
            {
              baseId: h.SLIPPERS,
              name: "Slippers",
              slot: g.LEGS,
              basicBattleAttributeGain:
                ((pc = {}),
                (pc[l.ARMOR] = function (e) {
                  return w(1.03, e)
                    .mul(1 * (e + 1))
                    .round();
                }),
                (pc[l.MAGIC_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(10 * (e + 1))
                    .round();
                }),
                pc),
              basicBattleAttributeMultiplier: {},
              secondaryAttributeGain: {},
              secondaryAttributeMultiplier:
                ((fc = {}),
                (fc[c.RUNE_READING] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                (fc[c.WILLPOWER] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                (fc[c.MAGIC_KNOWLEDGE] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                fc),
              secondaryBattleAttributeGain:
                ((gc = {}),
                (gc[l.MAX_HP] = function (e) {
                  return w(1, e)
                    .mul(2 * (e + 1))
                    .round();
                }),
                (gc[l.HP_REGEN] = function (e) {
                  return w(1.02, e).mul(0.01 * (e + 1));
                }),
                (gc[l.FIRE_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(25 * (e + 1))
                    .round();
                }),
                gc),
              secondaryBattleAttributeMultiplier:
                ((mc = {}),
                (mc[l.MAGICAL_DAMAGE] = function (e) {
                  return new E.Z(1.1 + 0.01 * Math.pow(e, 0.5));
                }),
                (mc[l.FIRE_DAMAGE] = function (e) {
                  return new E.Z(1.1 + 0.01 * Math.pow(e, 0.5));
                }),
                mc),
              unlockCondition: function (e) {
                return !0;
              },
              baseScrapGain: { wool: 2 },
              equipmentType: m.MAGIC,
            },
            {
              baseId: h.SWORD,
              name: "Sword",
              slot: g.HANDS,
              basicBattleAttributeGain: {},
              basicBattleAttributeMultiplier:
                ((hc = {}),
                (hc[l.PHYSICAL_DAMAGE] = function (e) {
                  return new E.Z(1 + 0.02 * e);
                }),
                hc),
              secondaryAttributeGain: {},
              secondaryAttributeMultiplier:
                ((yc = {}),
                (yc[c.STRENGTH] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                yc),
              secondaryBattleAttributeGain: {},
              secondaryBattleAttributeMultiplier:
                ((Ec = {}),
                (Ec[l.MAX_PHYSICAL_DAMAGE] = function (e) {
                  return new E.Z(1 + 0.01 * e);
                }),
                (Ec[l.CRIT_MULTIPLIER] = function (e) {
                  return new E.Z(1.1 + 0.01 * e);
                }),
                Ec),
              unlockCondition: function (e) {
                return !0;
              },
              baseScrapGain: { iron: 2 },
              equipmentType: m.IRON,
            },
            {
              baseId: h.STUFF,
              name: "Staff",
              slot: g.HANDS,
              basicBattleAttributeGain:
                ((Ac = {}),
                (Ac[l.ARMOR] = function (e) {
                  return w(1.03, e)
                    .mul(2 * (e + 1))
                    .round();
                }),
                Ac),
              basicBattleAttributeMultiplier:
                ((vc = {}),
                (vc[l.MAGICAL_DAMAGE] = function (e) {
                  return new E.Z(1 + 0.02 * e);
                }),
                (vc[l.FIRE_DAMAGE] = function (e) {
                  return new E.Z(1 + 0.02 * e);
                }),
                vc),
              secondaryAttributeGain: {},
              secondaryAttributeMultiplier:
                ((wc = {}),
                (wc[c.RUNE_READING] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                (wc[c.WILLPOWER] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                (wc[c.MAGIC_KNOWLEDGE] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                wc),
              secondaryBattleAttributeGain:
                ((bc = {}),
                (bc[l.MAX_HP] = function (e) {
                  return w(1, e)
                    .mul(2 * (e + 1))
                    .round();
                }),
                (bc[l.FIRE_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(25 * (e + 1))
                    .round();
                }),
                (bc[l.MAGIC_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(25 * (e + 1))
                    .round();
                }),
                bc),
              secondaryBattleAttributeMultiplier:
                ((Ic = {}),
                (Ic[l.PHYSICAL_DAMAGE] = function (e) {
                  return new E.Z(1 + 0.01 * Math.pow(e, 0.5));
                }),
                Ic),
              unlockCondition: function (e) {
                return !0;
              },
              baseScrapGain: { iron: 1, wool: 1 },
              equipmentType: m.MAGIC,
            },
            {
              baseId: h.CLUB,
              name: "Club",
              slot: g.HANDS,
              basicBattleAttributeGain: {},
              basicBattleAttributeMultiplier:
                ((Cc = {}),
                (Cc[l.ARMOR] = function (e) {
                  return new E.Z(1.2 + 0.02 * Math.pow(e, 0.5));
                }),
                Cc),
              secondaryAttributeGain: {},
              secondaryAttributeMultiplier:
                ((Nc = {}),
                (Nc[c.STRENGTH] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                (Nc[c.WILLPOWER] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                (Nc[c.VITALITY] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                Nc),
              secondaryBattleAttributeGain:
                ((Tc = {}),
                (Tc[l.MAX_HP] = function (e) {
                  return w(1, e)
                    .mul(12 * (e + 1))
                    .round();
                }),
                (Tc[l.FIRE_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(15 * (e + 1))
                    .round();
                }),
                (Tc[l.MAGIC_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(15 * (e + 1))
                    .round();
                }),
                (Tc[l.ARMOR] = function (e) {
                  return w(1.03, e)
                    .mul(24 * (e + 1))
                    .round();
                }),
                Tc),
              secondaryBattleAttributeMultiplier:
                ((Rc = {}),
                (Rc[l.PHYSICAL_DAMAGE] = function (e) {
                  return new E.Z(1 + 0.01 * Math.pow(e, 0.5));
                }),
                Rc),
              unlockCondition: function (e) {
                return !0;
              },
              baseScrapGain: { iron: 1, leather: 1 },
              equipmentType: m.IRON,
            },
            {
              baseId: h.KNIFE,
              name: "Knife",
              slot: g.HANDS,
              basicBattleAttributeGain:
                ((Lc = {}),
                (Lc[l.CRIT_CHANCE] = function (e) {
                  return new E.Z(0.15);
                }),
                Lc),
              basicBattleAttributeMultiplier:
                ((Oc = {}),
                (Oc[l.CRIT_MULTIPLIER] = function (e) {
                  return new E.Z(1.2 + 0.02 * Math.pow(e, 0.5));
                }),
                Oc),
              secondaryAttributeGain: {},
              secondaryAttributeMultiplier:
                ((Sc = {}),
                (Sc[c.STRENGTH] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                (Sc[c.AGILITY] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                Sc),
              secondaryBattleAttributeGain:
                ((Mc = {}),
                (Mc[l.MAX_HP] = function (e) {
                  return w(1, e)
                    .mul(12 * (e + 1))
                    .round();
                }),
                (Mc[l.FIRE_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(5 * (e + 1))
                    .round();
                }),
                (Mc[l.MAGIC_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(5 * (e + 1))
                    .round();
                }),
                Mc),
              secondaryBattleAttributeMultiplier:
                ((Pc = {}),
                (Pc[l.PHYSICAL_DAMAGE] = function (e) {
                  return new E.Z(1 + 0.01 * Math.pow(e, 0.5));
                }),
                Pc),
              unlockCondition: function (e) {
                return !0;
              },
              baseScrapGain: { iron: 1, leather: 1 },
              equipmentType: m.IRON,
            },
            {
              baseId: h.WOODEN_SHIELD,
              name: "Wooden Shield",
              slot: g.SHIELD,
              basicBattleAttributeGain:
                ((Zc = {}),
                (Zc[l.ARMOR] = function (e) {
                  return w(1.03, e)
                    .mul(18 * (e + 1))
                    .round();
                }),
                (Zc[l.DODGE_CHANCE] = function (e) {
                  return new E.Z(0.05);
                }),
                Zc),
              basicBattleAttributeMultiplier: {},
              secondaryAttributeGain: {},
              secondaryAttributeMultiplier:
                ((_c = {}),
                (_c[c.VITALITY] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                _c),
              secondaryBattleAttributeGain:
                ((Gc = {}),
                (Gc[l.MAX_HP] = function (e) {
                  return w(1, e)
                    .mul(6 * (e + 1))
                    .round();
                }),
                (Gc[l.HP_REGEN] = function (e) {
                  return w(1.02, e).mul(0.05 * (e + 1));
                }),
                (Gc[l.CRIT_CHANCE] = function (e) {
                  return new E.Z(0.03);
                }),
                (Gc[l.MAGIC_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(18 * (e + 1))
                    .round();
                }),
                (Gc[l.FIRE_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(18 * (e + 1))
                    .round();
                }),
                Gc),
              secondaryBattleAttributeMultiplier:
                ((Dc = {}),
                (Dc[l.CRIT_MULTIPLIER] = function (e) {
                  return new E.Z(1.1 + 0.01 * e);
                }),
                Dc),
              unlockCondition: function (e) {
                return !0;
              },
              baseScrapGain: { leather: 4 },
              equipmentType: m.LEATHER,
            },
            {
              baseId: h.IRON_SHIELD,
              name: "Iron Shield",
              slot: g.SHIELD,
              basicBattleAttributeGain:
                ((kc = {}),
                (kc[l.ARMOR] = function (e) {
                  return w(1.03, e)
                    .mul(70 * (e + 1))
                    .round();
                }),
                kc),
              basicBattleAttributeMultiplier: {},
              secondaryAttributeGain: {},
              secondaryAttributeMultiplier: {},
              secondaryBattleAttributeGain:
                ((Bc = {}),
                (Bc[l.MAX_HP] = function (e) {
                  return w(1, e)
                    .mul(25 * (e + 1))
                    .round();
                }),
                (Bc[l.HP_REGEN] = function (e) {
                  return w(1.02, e).mul(0.08 * (e + 1));
                }),
                (Bc[l.FIRE_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(20 * (e + 1))
                    .round();
                }),
                (Bc[l.MAGIC_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(20 * (e + 1))
                    .round();
                }),
                Bc),
              secondaryBattleAttributeMultiplier:
                ((Uc = {}),
                (Uc[l.ARMOR] = function (e) {
                  return new E.Z(1.2 + 0.02 * Math.pow(e, 0.5));
                }),
                Uc),
              unlockCondition: function (e) {
                return !0;
              },
              baseScrapGain: { iron: 4 },
              equipmentType: m.IRON,
            },
            {
              baseId: h.BONE_SHIELD,
              name: "Bone Shield",
              slot: g.SHIELD,
              basicBattleAttributeGain:
                ((xc = {}),
                (xc[l.FIRE_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(60 * (e + 1))
                    .round();
                }),
                (xc[l.MAGIC_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(60 * (e + 1))
                    .round();
                }),
                xc),
              basicBattleAttributeMultiplier: {},
              secondaryAttributeGain: {},
              secondaryAttributeMultiplier:
                ((Hc = {}),
                (Hc[c.RUNE_READING] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                (Hc[c.WILLPOWER] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                (Hc[c.MAGIC_KNOWLEDGE] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                Hc),
              secondaryBattleAttributeGain:
                ((Wc = {}),
                (Wc[l.MAX_HP] = function (e) {
                  return w(1, e)
                    .mul(2 * (e + 1))
                    .round();
                }),
                (Wc[l.HP_REGEN] = function (e) {
                  return w(1.02, e).mul(0.02 * (e + 1));
                }),
                (Wc[l.ARMOR] = function (e) {
                  return w(1.03, e)
                    .mul(24 * (e + 1))
                    .round();
                }),
                Wc),
              secondaryBattleAttributeMultiplier:
                ((Yc = {}),
                (Yc[l.MAGICAL_DAMAGE] = function (e) {
                  return new E.Z(1.2 + 0.02 * Math.pow(e, 0.5));
                }),
                (Yc[l.FIRE_DAMAGE] = function (e) {
                  return new E.Z(1.2 + 0.02 * Math.pow(e, 0.5));
                }),
                Yc),
              unlockCondition: function (e) {
                return !0;
              },
              baseScrapGain: { wool: 4 },
              equipmentType: m.MAGIC,
            },
          ],
          Nl = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function i() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((i.prototype = n.prototype), new i()));
            };
          })(),
          Tl = function () {
            return (
              (Tl =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, r) &&
                        (e[r] = t[r]);
                  return e;
                }),
              Tl.apply(this, arguments)
            );
          },
          Rl = (function (e) {
            function t() {
              var t,
                n = e.call(this) || this;
              return (
                (n.equipped =
                  (((t = {})[g.HANDS] = void 0),
                  (t[g.BODY] = void 0),
                  (t[g.LEGS] = void 0),
                  (t[g.HEAD] = void 0),
                  (t[g.SHIELD] = void 0),
                  t)),
                (n.inventory = []),
                (n.lootFilter = {
                  minRarity: 0,
                  minLevel: 0,
                  equipmentType: [m.IRON, m.LEATHER, m.MAGIC],
                  equipmentSlot: [g.HANDS, g.LEGS, g.HANDS, g.BODY, g.SHIELD],
                }),
                (n.scrap = {
                  wool: new E.Z(0),
                  iron: new E.Z(0),
                  leather: new E.Z(0),
                }),
                n.workDispatcher.on("[battle-items] equip item", function (e) {
                  console.log("do equip", e), n.equipItem(e.index);
                }),
                n.workDispatcher.on(
                  "[battle-items] unequip item",
                  function (e) {
                    console.log("do equip", e), n.unEquipItem(e.slot);
                  }
                ),
                n.workDispatcher.on("[battle-items] drop item", function (e) {
                  console.log("do drop", e), n.scrapItem(e.index);
                }),
                n.workDispatcher.on(
                  "[battle-items] upgrade item",
                  function (e) {
                    console.log("upgrade", e), n.upgradeItem(e.index);
                  }
                ),
                n.workDispatcher.on(
                  "[battle-items] set loot rarity",
                  function (e) {
                    console.log("do set rarity", e),
                      (n.lootFilter.minRarity = e.rarity);
                  }
                ),
                n.workDispatcher.on(
                  "[battle-items] set loot equipment-type",
                  function (e) {
                    console.log("do set equipment types", e),
                      (n.lootFilter.equipmentType = e.types);
                  }
                ),
                n.workDispatcher.on(
                  "[battle-items] set loot equipment-slot",
                  function (e) {
                    console.log("do set equipment types", e),
                      (n.lootFilter.equipmentSlot = e.slots);
                  }
                ),
                n.workDispatcher.on(
                  "[battle-items] set loot level",
                  function (e) {
                    console.log("do set equipment level", e),
                      (n.lootFilter.minLevel = e.level);
                  }
                ),
                n
              );
            }
            return (
              Nl(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                (this.equipped = Xi(
                  null == e ? void 0 : e.equipped,
                  function (e) {
                    return e
                      ? Tl(Tl({}, e), {
                          battleAttributeGain: Xi(
                            e.battleAttributeGain,
                            function (e) {
                              return new E.Z(e);
                            }
                          ),
                          battleAttributeMultiplier: Xi(
                            e.battleAttributeMultiplier,
                            function (e) {
                              return new E.Z(e);
                            }
                          ),
                          attributeGain: Xi(e.attributeGain, function (e) {
                            return new E.Z(e);
                          }),
                          attributeMultiplier: Xi(
                            e.attributeMultiplier,
                            function (e) {
                              return new E.Z(e);
                            }
                          ),
                        })
                      : void 0;
                  }
                )),
                  (this.inventory =
                    (null == e
                      ? void 0
                      : e.inventory.map(function (e) {
                          return Tl(Tl({}, e), {
                            battleAttributeGain: Xi(
                              e.battleAttributeGain,
                              function (e) {
                                return new E.Z(e);
                              }
                            ),
                            battleAttributeMultiplier: Xi(
                              e.battleAttributeMultiplier,
                              function (e) {
                                return new E.Z(e);
                              }
                            ),
                            attributeGain: Xi(e.attributeGain, function (e) {
                              return new E.Z(e);
                            }),
                            attributeMultiplier: Xi(
                              e.attributeMultiplier,
                              function (e) {
                                return new E.Z(e);
                              }
                            ),
                          });
                        })) || []),
                  (this.lootFilter = (null == e ? void 0 : e.lootFilter) || {
                    minRarity: 0,
                    equipmentType: [m.MAGIC, m.LEATHER, m.IRON],
                    equipmentSlot: [g.HANDS, g.LEGS, g.HANDS, g.BODY, g.SHIELD],
                  }),
                  this.lootFilter.minLevel || (this.lootFilter.minLevel = 0),
                  this.lootFilter.equipmentType ||
                    (this.lootFilter.equipmentType = [
                      m.MAGIC,
                      m.LEATHER,
                      m.IRON,
                    ]),
                  this.lootFilter.equipmentSlot ||
                    (this.lootFilter.equipmentSlot = [
                      g.HANDS,
                      g.LEGS,
                      g.HANDS,
                      g.BODY,
                      g.SHIELD,
                    ]),
                  (null == e ? void 0 : e.scrap) &&
                    (this.scrap = {
                      wool: new E.Z(e.scrap.wool),
                      iron: new E.Z(e.scrap.iron),
                      leather: new E.Z(e.scrap.leather),
                    }),
                  console.log("this.lootFlt", this.lootFilter);
              }),
              (t.prototype.exportData = function () {
                return {
                  equipped: Xi(this.equipped, function (e) {
                    return e
                      ? Tl(Tl({}, e), {
                          battleAttributeGain: Xi(
                            e.battleAttributeGain,
                            function (e) {
                              return e.toPrecision(18);
                            }
                          ),
                          battleAttributeMultiplier: Xi(
                            e.battleAttributeMultiplier,
                            function (e) {
                              return e.toPrecision(18);
                            }
                          ),
                          attributeGain: Xi(e.attributeGain, function (e) {
                            return e.toPrecision(18);
                          }),
                          attributeMultiplier: Xi(
                            e.attributeMultiplier,
                            function (e) {
                              return e.toPrecision(18);
                            }
                          ),
                        })
                      : void 0;
                  }),
                  inventory: this.inventory.map(function (e) {
                    return Tl(Tl({}, e), {
                      battleAttributeGain: Xi(
                        e.battleAttributeGain,
                        function (e) {
                          return e.toPrecision(18);
                        }
                      ),
                      battleAttributeMultiplier: Xi(
                        e.battleAttributeMultiplier,
                        function (e) {
                          return e.toPrecision(18);
                        }
                      ),
                      attributeGain: Xi(e.attributeGain, function (e) {
                        return e.toPrecision(18);
                      }),
                      attributeMultiplier: Xi(
                        e.attributeMultiplier,
                        function (e) {
                          return e.toPrecision(18);
                        }
                      ),
                    });
                  }),
                  lootFilter: this.lootFilter,
                  scrap: {
                    wool: this.scrap.wool.toPrecision(18),
                    iron: this.scrap.iron.toPrecision(18),
                    leather: this.scrap.leather.toPrecision(18),
                  },
                };
              }),
              (t.prototype.dataToUI = function () {
                var e = this;
                return {
                  inventory: this.inventory.map(function (t) {
                    return e.processToUI(t);
                  }),
                  equipped: Xi(this.equipped, function (t) {
                    return t ? e.processToUI(t) : void 0;
                  }),
                  maxInventory: this.getInventoryMax(),
                  usedInventory: this.inventory.length,
                  isUnlocked:
                    Zl.city.academyUpgrades.getUpgradeLevel(a.BATTLE_MASTERY) >
                    0,
                  lootFilter: this.lootFilter,
                  scrap: Xi(this.scrap, function (e) {
                    return ie(e, 2);
                  }),
                };
              }),
              (t.prototype.equipItem = function (e) {
                if (e < 0 || e >= this.inventory.length)
                  console.error("Invalid inventory index");
                else {
                  var t = this.inventory[e];
                  if (this.equipped[t.slot]) {
                    if (!(this.inventory.length <= this.getInventoryMax()))
                      return void console.error(
                        "Inventory full, cannot unequip current item"
                      );
                    this.inventory.push(this.equipped[t.slot]);
                  }
                  (this.equipped[t.slot] = t), this.inventory.splice(e, 1);
                }
              }),
              (t.prototype.unEquipItem = function (e) {
                var t = this.equipped[e];
                t
                  ? this.inventory.length < this.getInventoryMax()
                    ? (this.inventory.push(t), (this.equipped[e] = void 0))
                    : console.error("Inventory full, cannot unequip the item")
                  : console.error("No item equipped in the specified slot");
              }),
              (t.prototype.scrapItem = function (e) {
                var t = this.inventory[e];
                this.getScrap(t), this.inventory.splice(e, 1);
              }),
              (t.prototype.getScrap = function (e) {
                var t = this.getScrapGain(e);
                for (var n in t)
                  this.scrap[n] = this.scrap[n].plus(t[n] || new E.Z(0));
              }),
              (t.prototype.upgradeItem = function (e) {
                var t = this.inventory[e],
                  n = pe.calcBatchAll(
                    this.getScrapCostFormula(t),
                    Zl,
                    new E.Z(t.improvementStage || 0),
                    this.scrap
                  ),
                  i = n.reduce(function (e, t) {
                    return E.Z.min(e, t.max.floor());
                  }, new E.Z("1.e+30000"));
                if (
                  (console.log("[upgrade] mx: ", i.toNumber()), !i.lessThan(1))
                )
                  return (
                    (this.inventory[e].improvementStage =
                      this.inventory[e].improvementStage + 1),
                    Pl.getInstance().resources.subtractResourceBatch(n),
                    Zl.resources.reassertBalances(),
                    Zl.regenerateCache(),
                    !0
                  );
              }),
              (t.prototype.getInventoryMax = function () {
                return 40;
              }),
              (t.prototype.recordToUI = function (e, t) {
                return (
                  void 0 === t &&
                    (t = function (e) {
                      return ee(e, 4);
                    }),
                  Object.entries(e).map(function (e) {
                    var n = e[0],
                      i = e[1];
                    return {
                      id: n,
                      name: le(n),
                      amount: t(i),
                      amountValue: i.toPrecision(18),
                    };
                  })
                );
              }),
              (t.prototype.getScrapGain = function (e) {
                var t =
                  (e.level + 1) *
                  (e.rarity + 1) *
                  (1 + 0.1 * e.improvementStage);
                return Xi(e.baseScrapGain, function (e) {
                  return e * t;
                });
              }),
              (t.prototype.getScrapCost = function (e) {
                var t = 5 * e.level * (e.rarity + 1);
                return Xi(e.baseScrapGain, function (e) {
                  return e * t;
                });
              }),
              (t.prototype.getScrapCostFormula = function (e) {
                return Xi(this.getScrapCost(e), function (e) {
                  return function (t) {
                    return {
                      A: new E.Z(e),
                      B: new E.Z(1.5),
                      type: O.EXPONENTIAL,
                    };
                  };
                });
              }),
              (t.prototype.modifyImprovement = function (e, t, n) {
                return [l.DODGE_CHANCE, l.CRIT_CHANCE].includes(t)
                  ? e
                  : e.mul(1 + 0.05 * (n || 0));
              }),
              (t.prototype.applyImprovementsGains = function (e, t) {
                var n = this;
                return Xi(e, function (e, i) {
                  return n.modifyImprovement(e, i, t);
                });
              }),
              (t.prototype.modifyImprovementMult = function (e, t, n) {
                return [l.DODGE_CHANCE, l.CRIT_CHANCE].includes(t)
                  ? e
                  : e
                      .sub(1)
                      .mul(1 + 0.05 * (n || 0))
                      .plus(1);
              }),
              (t.prototype.applyImprovementsMultipliers = function (e, t) {
                var n = this;
                return Xi(e, function (e, i) {
                  return n.modifyImprovementMult(e, i, t);
                });
              }),
              (t.prototype.processToUI = function (e) {
                var t = this.recordToUI(
                    this.applyImprovementsGains(
                      e.attributeGain,
                      e.improvementStage
                    )
                  ),
                  n = this.recordToUI(
                    this.applyImprovementsMultipliers(
                      e.attributeMultiplier,
                      e.improvementStage
                    ),
                    function (e) {
                      return "x".concat(ee(e, 4));
                    }
                  ),
                  i = this.recordToUI(
                    this.applyImprovementsGains(
                      e.battleAttributeGain,
                      e.improvementStage
                    )
                  ),
                  r = this.recordToUI(
                    this.applyImprovementsMultipliers(
                      e.battleAttributeMultiplier,
                      e.improvementStage
                    ),
                    function (e) {
                      return "x".concat(ee(e, 4));
                    }
                  ),
                  o = Object.entries(this.getScrapGain(e)).map(function (e) {
                    var t = e[0],
                      n = e[1];
                    return { id: t, amount: ee(n), amountValue: n, name: t };
                  }),
                  a = pe.calcBatchAll(
                    this.getScrapCostFormula(e),
                    Zl,
                    new E.Z(e.improvementStage || 0),
                    this.scrap
                  );
                return {
                  id: e.id,
                  type: e.baseId,
                  name: e.name,
                  slot: e.slot,
                  rarity: e.rarity,
                  level: ie(e.level, 2),
                  attr: t,
                  attrMult: n,
                  battleAttr: i,
                  battleAttrMult: r,
                  scrapCost: Pl.getInstance().resources.assertEnought(
                    a,
                    this.scrap,
                    {}
                  ),
                  scrapGain: o,
                  improvementStage: ie(e.improvementStage || 0, 2),
                };
              }),
              (t.prototype.generateItem = function (e, t, n) {
                var i = 1 + (0.5 * Math.random() + 0.5) * t,
                  r = Math.random(),
                  o = 0;
                r < 0.002 * (n + 1)
                  ? (o = 4)
                  : r < 0.01 * (n + 1)
                  ? (o = 3)
                  : r < 0.05 * (n + 1)
                  ? (o = 2)
                  : r < 0.3 * (n + 1) && (o = 1);
                var a = Xi(e.basicBattleAttributeGain, function (e) {
                    return e(i);
                  }),
                  u = Xi(e.basicBattleAttributeMultiplier, function (e) {
                    return e(i);
                  }),
                  s = {
                    secondaryBattleAttributeMultiplier: {},
                    secondaryBattleAttributeGain: {},
                    secondaryAttributeMultiplier: {},
                    secondaryAttributeGain: {},
                  };
                if (o > 0)
                  for (
                    var c = {
                        secondaryBattleAttributeMultiplier: Tl(
                          {},
                          e.secondaryBattleAttributeMultiplier
                        ),
                        secondaryBattleAttributeGain: Tl(
                          {},
                          e.secondaryBattleAttributeGain
                        ),
                        secondaryAttributeMultiplier: Tl(
                          {},
                          e.secondaryAttributeMultiplier
                        ),
                        secondaryAttributeGain: Tl(
                          {},
                          e.secondaryAttributeGain
                        ),
                      },
                      l = 0;
                    l < o;

                  ) {
                    var d = Object.keys(c).filter(function (e) {
                      return Object.keys(c[e]).length > 0;
                    });
                    if (0 === d.length) break;
                    var p = Math.floor(Math.random() * d.length),
                      f = c[d[p]],
                      g = Object.keys(f);
                    if (g.length > 0) {
                      var m = g[Math.floor(Math.random() * g.length)];
                      s[d[p]] || (s[d[p]] = {}),
                        (s[d[p]][m] = f[m](i)),
                        delete f[m],
                        l++;
                    }
                  }
                return (
                  console.log("[item-loot] equipedItem: ", r, o, a, u),
                  {
                    id: "".concat(Math.random(), "_item"),
                    baseId: e.baseId,
                    name: e.name,
                    level: i,
                    slot: e.slot,
                    rarity: o,
                    battleAttributeGain: Tl(
                      Tl({}, a),
                      s.secondaryBattleAttributeGain
                    ),
                    battleAttributeMultiplier: Tl(
                      Tl({}, u),
                      s.secondaryBattleAttributeMultiplier
                    ),
                    attributeMultiplier: s.secondaryAttributeMultiplier,
                    attributeGain: s.secondaryAttributeGain,
                    improvementStage: 0,
                    baseScrapGain: e.baseScrapGain,
                    equipmentType: e.equipmentType,
                  }
                );
              }),
              (t.prototype.giveItem = function (e, t, n, i) {
                if (
                  (void 0 === n && (n = 1),
                  void 0 === i && (i = !1),
                  !(this.inventory.length >= this.getInventoryMax()))
                ) {
                  var r = this.generateItem(e, t, n);
                  return r.rarity < this.lootFilter.minRarity ||
                    !this.lootFilter.equipmentType.includes(r.equipmentType) ||
                    !this.lootFilter.equipmentSlot.includes(r.slot) ||
                    this.lootFilter.minLevel > r.level
                    ? (this.getScrap(r),
                      void console.log(
                        "[item-loot] filtered out",
                        r.rarity,
                        this.lootFilter.minRarity,
                        n,
                        r.equipmentType,
                        r.slot,
                        ""
                          .concat(r.level, " of ")
                          .concat(this.lootFilter.minLevel)
                      ))
                    : (this.inventory.push(r), r);
                }
              }),
              (t.prototype.giveRandomItem = function (e, t) {
                var n = Math.floor(Math.random() * Cl.length),
                  i = Cl[n];
                return this.giveItem(i, e, t, !0);
              }),
              (t.prototype.process = function (e) {}),
              (t.prototype.getAttributeProduced = function (e) {
                var t = this,
                  n = Object.values(this.equipped).filter(function (t) {
                    var n;
                    return (
                      t &&
                      (null === (n = t.attributeGain) || void 0 === n
                        ? void 0
                        : n[e])
                    );
                  }),
                  i = [];
                return (
                  n.forEach(function (n) {
                    var r;
                    if (
                      n &&
                      (null === (r = n.attributeGain) || void 0 === r
                        ? void 0
                        : r[e])
                    ) {
                      var o = n.attributeGain[e];
                      o &&
                        o.greaterThan(0) &&
                        i.push({
                          label: "Item: ".concat(n.name),
                          value: t.modifyImprovement(o, e, n.improvementStage),
                          id: "items",
                          category: "Items",
                        });
                    }
                  }),
                  i
                );
              }),
              (t.prototype.getAttributeMultiplier = function (e) {
                var t = this,
                  n = Object.values(this.equipped).filter(function (t) {
                    var n;
                    return (
                      t &&
                      (null === (n = t.attributeMultiplier) || void 0 === n
                        ? void 0
                        : n[e])
                    );
                  }),
                  i = [];
                return (
                  n.forEach(function (n) {
                    var r;
                    if (
                      n &&
                      (null === (r = n.attributeMultiplier) || void 0 === r
                        ? void 0
                        : r[e])
                    ) {
                      var o = n.attributeMultiplier[e];
                      o &&
                        !o.equals(1) &&
                        i.push({
                          label: "Item: ".concat(n.name),
                          value: t.modifyImprovementMult(
                            o,
                            e,
                            n.improvementStage
                          ),
                          id: "items",
                          category: "Items",
                        });
                    }
                  }),
                  i
                );
              }),
              (t.prototype.getBattleAttributeProduced = function (e) {
                var t = this,
                  n = Object.values(this.equipped).filter(function (t) {
                    var n;
                    return (
                      t &&
                      (null === (n = t.battleAttributeGain) || void 0 === n
                        ? void 0
                        : n[e])
                    );
                  }),
                  i = [];
                return (
                  n.forEach(function (n) {
                    var r;
                    if (
                      n &&
                      (null === (r = n.battleAttributeGain) || void 0 === r
                        ? void 0
                        : r[e])
                    ) {
                      var o = n.battleAttributeGain[e];
                      o &&
                        o.greaterThan(0) &&
                        i.push({
                          label: "Item: ".concat(n.name),
                          value: t.modifyImprovement(o, e, n.improvementStage),
                          id: "items",
                          category: "Items",
                        });
                    }
                  }),
                  i
                );
              }),
              (t.prototype.getBattleAttributeMultiplier = function (e) {
                var t = this,
                  n = Object.values(this.equipped).filter(function (t) {
                    var n;
                    return (
                      t &&
                      (null === (n = t.battleAttributeMultiplier) ||
                      void 0 === n
                        ? void 0
                        : n[e])
                    );
                  }),
                  i = [];
                return (
                  n.forEach(function (n) {
                    var r;
                    if (
                      n &&
                      (null === (r = n.battleAttributeMultiplier) ||
                      void 0 === r
                        ? void 0
                        : r[e])
                    ) {
                      var o = n.battleAttributeMultiplier[e];
                      o &&
                        !o.equals(1) &&
                        i.push({
                          label: "Item: ".concat(n.name),
                          value: t.modifyImprovementMult(
                            o,
                            e,
                            n.improvementStage
                          ),
                          id: "items",
                          category: "Items",
                        });
                    }
                  }),
                  i
                );
              }),
              t
            );
          })(s),
          Ll = Rl.getInstance(),
          Ol = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function i() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((i.prototype = n.prototype), new i()));
            };
          })(),
          Sl = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.battleAttributes = cl),
                (t.battleActions = gl),
                (t.battleLocations = Il),
                (t.battleItems = Ll),
                t
              );
            }
            return (
              Ol(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.onInit = function () {
                this.battleAttributes.onInit();
              }),
              (t.prototype.importData = function (e) {
                this.battleActions.importData(null == e ? void 0 : e.actions),
                  this.battleLocations.importData(
                    null == e ? void 0 : e.locations
                  ),
                  this.battleItems.importData(null == e ? void 0 : e.items);
              }),
              (t.prototype.exportData = function () {
                return {
                  actions: this.battleActions.exportData(),
                  locations: this.battleLocations.exportData(),
                  items: this.battleItems.exportData(),
                };
              }),
              (t.prototype.dataToUI = function () {
                return {
                  battleAttributes: this.battleAttributes.dataToUI(),
                  battleActions: this.battleActions.dataToUI(),
                  battleLocations: this.battleLocations.dataToUI(),
                  battleItems: this.battleItems.dataToUI(),
                  isUnlocked:
                    Zl.city.academyUpgrades.getUpgradeLevel(a.BATTLE_MASTERY) >
                    0,
                };
              }),
              (t.prototype.preProcess = function (e) {}),
              (t.prototype.process = function (e) {
                this.battleAttributes.process(e),
                  this.battleActions.process(e),
                  this.battleLocations.process(e);
              }),
              (t.prototype.regenerateCache = function () {
                this.battleActions.regenerateCache();
              }),
              (t.prototype.reset = function () {
                this.battleAttributes.reset();
              }),
              t
            );
          })(s).getInstance(),
          Ml = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function i() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((i.prototype = n.prototype), new i()));
            };
          })(),
          Pl = (function (e) {
            function t() {
              var t = this,
                n = Date.now();
              return (
                ((t = e.call(this) || this).dT = 0),
                (t.isFirstIter = !1),
                (t.isLoading = !0),
                (t.speedUpFactor = 1),
                (t.settings = {
                  turnAnimationsOn: !0,
                  theme: r.DARK,
                  addToQueueUnavailable: !0,
                  disableResidental: !1,
                  unsafeBulkBuilding: !1,
                  resetNotificationsOnPrestige: !1,
                  turnOnAutoupgrade: !1,
                  showStory: !0,
                  useCleverLists: !0,
                  notation: "standard",
                }),
                t.workDispatcher.on("initialize", function (e) {
                  console.log("Received payload", e);
                }),
                (t.resources = ae),
                (t.learning = qi),
                (t.personage = Qi),
                (t.city = Wo),
                (t.statistics = Fo),
                (t.construction = Uu),
                (t.battle = Sl),
                (t.newNotifications = Wu),
                (t.achievements = jc),
                (t.about = rl),
                (t.isFirstIter = !0),
                (t.lastIterTick = performance.now()),
                setInterval(function () {
                  t.isLoading
                    ? console.warn("Game is loading... Skip")
                    : t.process(0.1);
                }, 100),
                setInterval(function () {
                  if (t.isLoading) console.warn("Game is loading... Skip");
                  else {
                    var e = t.dataToUI();
                    try {
                      t.workDispatcher.output("[game] update ui", e);
                    } catch (t) {
                      console.error(t, "dataToUI: ", e);
                    }
                  }
                }, 200),
                setInterval(function () {
                  t.isLoading
                    ? console.warn("Game is loading... Skip")
                    : (console.log("saveGame: ", t.exportData()),
                      t.workDispatcher.output("[game] save", t.exportData()));
                }, 2e4),
                t.workDispatcher.on("[game] load", function (e) {
                  console.log("Received load", e), t.importData(e);
                }),
                t.workDispatcher.on("[game] export text", function (e) {
                  console.log("Received export text", e),
                    t.workDispatcher.output(
                      "[game] export to string",
                      t.exportData()
                    );
                }),
                t.workDispatcher.on("[game] export file", function (e) {
                  console.log("Received export to file", e),
                    t.workDispatcher.output(
                      "[game] export to file",
                      t.exportData()
                    );
                }),
                t.workDispatcher.on("[game] purchase max", function (e) {
                  console.log("Received purchase max", e), t.purchaseMax();
                }),
                t.workDispatcher.on("[game] trigger save", function (e) {
                  t.workDispatcher.output("[game] save", t.exportData());
                }),
                t.workDispatcher.on("[game] toggle animations", function (e) {
                  (t.settings.turnAnimationsOn = e),
                    t.workDispatcher.output(
                      "[game] save and reload",
                      t.exportData()
                    );
                }),
                t.workDispatcher.on("[game] toggle setting", function (e) {
                  (t.settings[e.key] = e.value),
                    "notation" === e.key && C("notation", t.settings.notation);
                }),
                t.workDispatcher.on("[game] toggle theme", function (e) {
                  (t.settings.theme = e),
                    t.workDispatcher.output(
                      "[game] save and reload",
                      t.exportData()
                    );
                }),
                setTimeout(function () {
                  t.workDispatcher.output("loaded", { ttp: Date.now() - n }),
                    t.onInit(),
                    (t.isLoading = !1);
                }, 3e3),
                t
              );
            }
            return (
              Ml(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.onInit = function () {
                this.battle.onInit(), this.achievements.onInit();
              }),
              (t.prototype.process = function (e) {
                var t = 1 * this.speedUpFactor,
                  n = Date.now() / 1e3;
                this.dT = e * t;
                var i = this.isFirstIter ? 0 : n - this.lastIterTick - this.dT;
                (this.lastIterTick = n),
                  i > 0.1 && i < 1 && (this.dT += i / 1e3),
                  performance.now(),
                  this.isFirstIter &&
                    (this.regenerateCache(),
                    this.resources.reassertBalances(),
                    console.log("firstIterRan")),
                  this.learning.process(this.dT),
                  this.resources.process(this.dT),
                  this.city.process(this.dT),
                  this.construction.process(this.dT),
                  this.statistics.process(this.dT),
                  this.achievements.process(this.dT),
                  this.battle.process(this.dT),
                  this.about.process(this.dT),
                  this.isFirstIter &&
                    ((this.isFirstIter = !1),
                    this.regenerateCache(),
                    this.resources.reassertBalances(),
                    console.log("firstIterRan"));
              }),
              (t.prototype.importData = function (e) {
                (this.isLoading = !0),
                  (this.settings = e.settings || {
                    turnAnimationsOn: !0,
                    theme: r.DARK,
                  }),
                  "showStory" in this.settings ||
                    (this.settings.showStory = !0),
                  this.settings.theme || (this.settings.theme = r.DARK),
                  "addToQueueUnavailable" in this.settings ||
                    (this.settings.addToQueueUnavailable = !0),
                  C("notation", this.settings.notation),
                  this.resources.importData(e.resources),
                  this.learning.importData(e.learning),
                  this.city.importData(e.city),
                  this.construction.importData(e.construction),
                  this.statistics.importData(e.statistics),
                  this.newNotifications.importData(e.newNotifications),
                  this.achievements.importData(e.achievements),
                  this.battle.importData(e.battle),
                  this.about.importData(e.about),
                  (this.isFirstIter = !0),
                  this.regenerateCache(),
                  this.resources.reassertBalances(),
                  this.learning.runePresets.applyPreset(),
                  (this.isLoading = !1);
              }),
              (t.prototype.exportData = function () {
                return {
                  settings: this.settings,
                  learning: this.learning.exportData(),
                  resources: this.resources.exportData(),
                  newNotifications: this.newNotifications.exportData(),
                  city: this.city.exportData(),
                  battle: this.battle.exportData(),
                  construction: this.construction.exportData(),
                  statistics: this.statistics.exportData(),
                  achievements: this.achievements.exportData(),
                  about: this.about.exportData(),
                };
              }),
              (t.prototype.dataToUI = function () {
                return (
                  performance.now(),
                  this.newNotifications.preUI(),
                  {
                    isLoaded: !this.isLoading,
                    settings: this.settings,
                    resources: this.resources.dataToUI(),
                    personage: this.personage.dataToUI(),
                    learning: this.learning.dataToUI(),
                    statistics: this.statistics.dataToUI(),
                    newNotifications: this.newNotifications.dataToUI(),
                    achievements: this.achievements.dataToUI(),
                    city: this.city.dataToUI(),
                    construction: this.construction.dataToUI(),
                    battle: this.battle.dataToUI(),
                    about: this.about.dataToUI(),
                  }
                );
              }),
              (t.prototype.purchaseMax = function () {}),
              (t.prototype.regenerateCache = function () {
                performance.now(),
                  this.learning.regenerateCache(),
                  this.city.regenerateCache(),
                  this.construction.regenerateCache(),
                  this.battle.regenerateCache();
              }),
              t
            );
          })(s),
          Zl = Pl.getInstance();
        self.addEventListener("message", function (e) {
          var t = e.data;
          console.log("send to worker: ", t),
            Zl.workDispatcher.handleInput(t.type, t.payload);
        });
      },
    },
    i = {};
  function r(e) {
    var t = i[e];
    if (void 0 !== t) return t.exports;
    var o = (i[e] = { exports: {} });
    return n[e](o, o.exports, r), o.exports;
  }
  (r.m = n),
    (r.x = () => {
      var e = r.O(void 0, [482], () => r(785));
      return r.O(e);
    }),
    (e = []),
    (r.O = (t, n, i, o) => {
      if (!n) {
        var a = 1 / 0;
        for (l = 0; l < e.length; l++) {
          for (var [n, i, o] = e[l], u = !0, s = 0; s < n.length; s++)
            (!1 & o || a >= o) && Object.keys(r.O).every((e) => r.O[e](n[s]))
              ? n.splice(s--, 1)
              : ((u = !1), o < a && (a = o));
          if (u) {
            e.splice(l--, 1);
            var c = i();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      o = o || 0;
      for (var l = e.length; l > 0 && e[l - 1][2] > o; l--) e[l] = e[l - 1];
      e[l] = [n, i, o];
    }),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.f = {}),
    (r.e = (e) =>
      Promise.all(Object.keys(r.f).reduce((t, n) => (r.f[n](e, t), t), []))),
    (r.u = (e) => e + ".index.bundle.js"),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e;
      r.g.importScripts && (e = r.g.location + "");
      var t = r.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName("script");
        n.length && (e = n[n.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (r.p = e);
    })(),
    (() => {
      var e = { 785: 1 };
      r.f.i = (t, n) => {
        e[t] || importScripts(r.p + r.u(t));
      };
      var t = (self.webpackChunkidlemancery2 =
          self.webpackChunkidlemancery2 || []),
        n = t.push.bind(t);
      t.push = (t) => {
        var [i, o, a] = t;
        for (var u in o) r.o(o, u) && (r.m[u] = o[u]);
        for (a && a(r); i.length; ) e[i.pop()] = 1;
        n(t);
      };
    })(),
    (t = r.x),
    (r.x = () => r.e(482).then(t)),
    r.x();
})();
