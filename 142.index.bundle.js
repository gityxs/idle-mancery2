(() => {
  "use strict";
  var e,
    t,
    n = {
      142: (e, t, n) => {
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
            (e.IRON_PLATE = "iron_plate");
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
              (e.ADVANCED_FIGHT_MOVES = "advanced_fight_moves");
          })(a || (a = {}));
        var c,
          l,
          d,
          p,
          f,
          g,
          m,
          h,
          A = [
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
                return e.learning.runeUpgrades.getUpgradeLevel(o.KNOWLEDGE) > 0 || e.city.actions.isUnlocked;
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
                return e.city.academyUpgrades.getUpgradeLevel(a.SPARK_GENERATION) > 0;
              },
              hasCapacityLimit: !0,
              valuability: 1024,
              isShownInPanel: !0,
            },
            {
              id: i.BONE,
              name: "Bone",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.BONE_EXTRACTION) > 0;
              },
              hasCapacityLimit: !0,
              valuability: 10240,
              isShownInPanel: !0,
            },
            {
              id: i.CRAFTSMANSHIP,
              name: "Craftsmanship",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.WOODWORKING) > 0;
              },
              hasCapacityLimit: !1,
              valuability: 1024,
              isShownInPanel: !0,
            },
            {
              id: i.FIGHTING_ACTIONS,
              name: "Fighting Actions",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.BATTLE_MASTERY) > 0;
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
                return e.city.academyUpgrades.getUpgradeLevel(a.WOODWORKING) > 0;
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
                return e.city.academyUpgrades.getUpgradeLevel(a.STONEWORKING) > 0;
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
                return e.city.academyUpgrades.getUpgradeLevel(a.STONEWORKING) > 0;
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
                return e.city.academyUpgrades.getUpgradeLevel(a.WOODWORKING) > 0;
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
                return e.city.academyUpgrades.getUpgradeLevel(a.CHARGED_CRAFTING) > 0;
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
                return e.city.academyUpgrades.getUpgradeLevel(a.WOODWORKING) > 0;
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
                return e.city.academyUpgrades.getUpgradeLevel(a.CHARGED_CRAFTING) > 0;
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
                return e.city.academyUpgrades.getUpgradeLevel(a.GLASSMAKING) > 0;
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
                return e.city.academyUpgrades.getUpgradeLevel(a.GLASSMAKING) > 0;
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
                return e.city.academyUpgrades.getUpgradeLevel(a.METALWORKING) > 0;
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
                return e.city.academyUpgrades.getUpgradeLevel(a.METALWORKING) > 0;
              },
              hasCapacityLimit: !1,
              valuability: 4096,
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
            (e.SEVERS = "severs"), (e.LAKE = "lake"), (e.FIELD = "field"), (e.FOREST = "forest"), (e.CAVE = "cave"), (e.LIBRARY = "library");
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
              (e.MAGIC_BOOK = "magic_book");
          })(f || (f = {})),
          (function (e) {
            (e.HEAD = "head"), (e.BODY = "body"), (e.LEGS = "legs"), (e.HANDS = "hands"), (e.SHIELD = "shield");
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
        var v = function (e) {
          var t,
            n =
              (((t = {})[i.MANA] = {
                income: {
                  linear: [{ id: "base", label: "Willpower", value: e.personage.attributes.getAttribute(c.WILLPOWER).mul(0.2), category: "Attribute" }],
                  multiplier: [],
                  consumption: [],
                },
                max: { linear: [{ id: "base", label: "Natural", value: new E.Z(1), category: "Wizard" }], multiplier: [], consumption: [] },
              }),
              (t[i.CONTROL] = {
                max: { linear: [{ id: "base", label: "Natural", value: new E.Z(1e3), category: "Wizard" }], multiplier: [], consumption: [] },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[i.KNOWLEDGE] = {
                max: { linear: [{ id: "base", label: "Natural", value: new E.Z(50), category: "Wizard" }], multiplier: [], consumption: [] },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[i.ENERGY] = {
                max: { linear: [{ id: "base", label: "Natural", value: new E.Z(100), category: "Wizard" }], multiplier: [], consumption: [] },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[i.COINS] = {
                max: { linear: [{ id: "base", label: "Natural", value: new E.Z(50), category: "Wizard" }], multiplier: [], consumption: [] },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[i.BONE] = {
                max: { linear: [{ id: "base", label: "Natural", value: new E.Z(50), category: "Wizard" }], multiplier: [], consumption: [] },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[i.SPARK] = {
                max: { linear: [{ id: "base", label: "Natural", value: new E.Z(50), category: "Wizard" }], multiplier: [], consumption: [] },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[i.CRAFTSMANSHIP] = { max: { linear: [], multiplier: [], consumption: [] }, income: { linear: [], multiplier: [], consumption: [] } }),
              (t[i.FIGHTING_ACTIONS] = { max: { linear: [], multiplier: [], consumption: [] }, income: { linear: [], multiplier: [], consumption: [] } }),
              (t[i.WOOD] = { max: { linear: [], multiplier: [], consumption: [] }, income: { linear: [], multiplier: [], consumption: [] } }),
              (t[i.STONE] = { max: { linear: [], multiplier: [], consumption: [] }, income: { linear: [], multiplier: [], consumption: [] } }),
              (t[i.REFINED_WOOD] = { max: { linear: [], multiplier: [], consumption: [] }, income: { linear: [], multiplier: [], consumption: [] } }),
              (t[i.PAPER] = { max: { linear: [], multiplier: [], consumption: [] }, income: { linear: [], multiplier: [], consumption: [] } }),
              (t[i.CHARGED_WOOD] = { max: { linear: [], multiplier: [], consumption: [] }, income: { linear: [], multiplier: [], consumption: [] } }),
              (t[i.CHARGED_PAPER] = { max: { linear: [], multiplier: [], consumption: [] }, income: { linear: [], multiplier: [], consumption: [] } }),
              (t[i.BRICK] = { max: { linear: [], multiplier: [], consumption: [] }, income: { linear: [], multiplier: [], consumption: [] } }),
              (t[i.SAND] = { max: { linear: [], multiplier: [], consumption: [] }, income: { linear: [], multiplier: [], consumption: [] } }),
              (t[i.GLASS] = { max: { linear: [], multiplier: [], consumption: [] }, income: { linear: [], multiplier: [], consumption: [] } }),
              (t[i.IRON_ORE] = { max: { linear: [], multiplier: [], consumption: [] }, income: { linear: [], multiplier: [], consumption: [] } }),
              (t[i.IRON_PLATE] = { max: { linear: [], multiplier: [], consumption: [] }, income: { linear: [], multiplier: [], consumption: [] } }),
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
                v,
                y,
                w,
                b,
                I,
                C,
                N,
                R,
                L,
                O,
                T,
                S,
                M,
                Z,
                P,
                _ = A.find(function (t) {
                  return t.id === e;
                });
              null == _ || _.isCraftable,
                null == _ || _.isPrestigeCurrency,
                (t = n[e].max.linear).push.apply(t, ml.learning.runes.getResourceBeingStored(e)),
                (i = n[e].max.multiplier).push.apply(i, ml.learning.runes.getResourceBeingStoredMultiplier(e)),
                (r = n[e].income.multiplier).push.apply(r, ml.learning.runes.getMultiplier(e)),
                (o = n[e].income.linear).push.apply(o, ml.learning.runes.getResourceGain(e)),
                (a = n[e].max.linear).push.apply(a, ml.learning.crystals.getResourceBeingStored(e)),
                (u = n[e].max.multiplier).push.apply(u, ml.learning.crystals.getResourceBeingStoredMultiplier(e)),
                (s = n[e].income.multiplier).push.apply(s, ml.learning.crystals.getMultiplier(e)),
                (c = n[e].income.linear).push.apply(c, ml.learning.crystals.getResourceGain(e)),
                (l = n[e].income.multiplier).push.apply(l, ml.learning.runeUpgrades.getGainMultiplier(e)),
                (d = n[e].income.linear).push.apply(d, ml.learning.runeUpgrades.getGain(e)),
                (p = n[e].income.linear).push.apply(p, ml.city.actions.getResourceBeingProduced(e)),
                (f = n[e].income.multiplier).push.apply(f, ml.city.actions.getGainMultiplier(e)),
                (g = n[e].income.consumption).push.apply(g, ml.city.actions.getResourceBeingConsumed(e)),
                (m = n[e].max.linear).push.apply(m, ml.city.actions.getResourceBeingStored(e)),
                (h = n[e].max.multiplier).push.apply(h, ml.city.actions.getResourceBeingStoredMultiplier(e)),
                (E = n[e].max.multiplier).push.apply(E, ml.learning.runeUpgrades.getCapacityMult(e)),
                (v = n[e].max.linear).push.apply(v, ml.learning.runeUpgrades.getCapacity(e)),
                (y = n[e].max.multiplier).push.apply(y, ml.city.mercenaries.getResourceBeingStoredMultiplier(e)),
                (w = n[e].income.multiplier).push.apply(w, ml.city.mercenaries.getResourceBeingProducedMultiplier(e)),
                (b = n[e].income.consumption).push.apply(b, ml.city.mercenaries.getResourceBeingConsumed(e)),
                (I = n[e].income.linear).push.apply(I, ml.construction.crafting.getResourceGain(e)),
                (C = n[e].income.consumption).push.apply(C, ml.construction.crafting.getResourceConsumption(e)),
                (N = n[e].income.linear).push.apply(N, ml.construction.structures.getResourceBeingProduced(e)),
                (R = n[e].income.multiplier).push.apply(R, ml.construction.structures.getGainMultiplier(e)),
                (L = n[e].max.linear).push.apply(L, ml.construction.structures.getResourceBeingStored(e)),
                (O = n[e].max.multiplier).push.apply(O, ml.construction.structures.getResourceBeingStoredMultiplier(e)),
                (T = n[e].income.linear).push.apply(T, ml.achievements.getResourceBeingProduced(e)),
                (S = n[e].income.multiplier).push.apply(S, ml.achievements.getResourceMultiplier(e)),
                (M = n[e].max.linear).push.apply(M, ml.achievements.getResourceBeingStored(e)),
                (Z = n[e].max.multiplier).push.apply(Z, ml.achievements.getResourceStorageMultiplier(e)),
                (P = n[e].income.consumption).push.apply(P, ml.battle.battleActions.getResourceBeingConsumed(e));
            };
          for (var o in n) r(o);
          return n;
        };
        function y(e, t) {
          if (e.lte(Number.MAX_VALUE)) return new E.Z(Math.log(e.toNumber()) / Math.log(t.toNumber()));
          var n = e.toExponential().split("e"),
            i = n[0],
            r = n[1];
          return new E.Z(r).mul(E.Z.log(t)).plus(E.Z.log(new E.Z(i)).div(E.Z.log(t)));
        }
        function w(e, t) {
          if ((t = new E.Z(t)).greaterThanOrEqualTo(Number.MAX_SAFE_INTEGER) || t.lessThanOrEqualTo(Number.MIN_SAFE_INTEGER)) return E.Z.pow(e, t);
          var n = e.toExponential().split("e"),
            i = parseFloat(n[0]),
            r = parseInt(n[1], 10),
            o = Math.pow(i, t.toNumber()),
            a = E.Z.pow(10, t.mul(r));
          return new E.Z(o).mul(a);
        }
        function b(e) {
          return y(e, new E.Z(10));
        }
        function I(e) {
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
        function C(e) {
          var t = function (e) {
              return e < 10 ? "0" + e : e;
            },
            n = e.getFullYear(),
            i = t(e.getMonth() + 1),
            r = t(e.getDate()),
            o = t(e.getHours()),
            a = t(e.getMinutes()),
            u = t(e.getSeconds());
          return "".concat(n, "-").concat(i, "-").concat(r, " ").concat(o, ":").concat(a, ":").concat(u);
        }
        function N(e, t) {
          return (
            void 0 === t && (t = !0),
            e.greaterThanOrEqualTo("1.e+18")
              ? "Never"
              : e.greaterThanOrEqualTo("1")
              ? I(e.toNumber())
              : t || e.lessThanOrEqualTo("0")
              ? "00:00:00"
              : "".concat(J(e.pow(-1)), "/s")
          );
        }
        var R,
          L,
          O,
          T,
          S,
          M,
          Z,
          P,
          _,
          G,
          B,
          D,
          U,
          k,
          x,
          H,
          W,
          X,
          q,
          F,
          Y,
          K,
          j,
          V,
          z,
          J = function (e, t, n) {
            void 0 === t && (t = 2), void 0 === n && (n = !1), E.Z.isDecimal(e) || (e = new E.Z(e));
            var i = e.isNegative();
            if ((e = e.abs()).greaterThanOrEqualTo(1e33)) return (i ? "-" : "") + e.toExponential(t);
            if (e.lessThan(w(10, -t)) && e.greaterThanOrEqualTo("1.e-15")) return n ? "0" : (i ? "-" : "") + e.toExponential(t).toString();
            if (e.lessThan(1)) return n ? "0" : (i ? "-" : "") + e.toDecimalPlaces(t).toString();
            var r = b(e.abs().plus(0.1)).floor().div(3).floor().toNumber(),
              o = e.div(new E.Z(10).pow(3 * r)),
              a = Math.abs(r) > 0 ? Q(r) : "";
            if (n) return (i ? "-" : "") + o.toFixed(a ? (o.toNumber() >= 100 ? Math.max(t - 1, 0) : t) : 0) + a;
            var u = o.toFixed(o.toNumber() >= 100 ? Math.max(t - 1, 0) : t);
            return (i ? "-" : "") + $(u) + a;
          },
          Q = function (e) {
            return ["", "K", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No", "Dc", "UDc", "DDc", "TDc"][e] || "E".concat(3 * e);
          },
          $ = function (e) {
            return e.includes(".") && (e = e.replace(/\.?0+$/, "")), e;
          },
          ee = function (e, t) {
            return J(e, t, !0);
          },
          te = function () {
            return (
              (te =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                  return e;
                }),
              te.apply(this, arguments)
            );
          },
          ne = (function () {
            function e() {
              (this.cachedBreakdown = {}),
                (this.cachedShortenedBreakdown = {}),
                (this.cachedResources = {}),
                (this.resourcesStatus = A.map(function (e) {
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
                    isUnstable: null !== (t = e.isUnstable) && void 0 !== t && t,
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
                    return e[t.category] ? (e[t.category].value = e[t.category].value.plus(t.value)) : (e[t.category] = te({}, t)), e;
                  }, {}),
                  i = e.multiplier.reduce(function (e, t) {
                    return e[t.category] ? (e[t.category].value = e[t.category].value.mul(t.value)) : (e[t.category] = te({}, t)), e;
                  }, {}),
                  r =
                    null === (t = e.consumption) || void 0 === t
                      ? void 0
                      : t.reduce(function (e, t) {
                          return e[t.category] ? (e[t.category].value = e[t.category].value.plus(t.value)) : (e[t.category] = te({}, t)), e;
                        }, {});
                return {
                  linear: Object.values(n).map(function (e) {
                    return te(te({}, e), { label: e.category });
                  }),
                  multiplier: Object.values(i).map(function (e) {
                    return te(te({}, e), { label: e.category });
                  }),
                  consumption: r
                    ? Object.values(r).map(function (e) {
                        return te(te({}, e), { label: e.category });
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
                return t in e.lackEfficiencyResources ? (null == e.lackEfficiencyResources[t] ? 1 : e.lackEfficiencyResources[t]) : 1;
              }),
              (e.prototype.addResource = function (e, t) {
                var n,
                  i = this.resourcesStatus.findIndex(function (t) {
                    return t.id === e;
                  });
                if (i < 0) {
                  i = this.resourcesStatus.length;
                  var r = A.find(function (t) {
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
                    isUnstable: null !== (n = r.isUnstable) && void 0 !== n && n,
                  });
                }
                (this.resourcesStatus[i].amount = this.resourcesStatus[i].amount.plus(t)),
                  this.resourcesStatus[i].max.greaterThan(0) &&
                    this.resourcesStatus[i].hasCapacityLimit &&
                    (this.resourcesStatus[i].amount = E.Z.min(this.resourcesStatus[i].amount, this.resourcesStatus[i].max)),
                  this.resourcesStatus[i].amount.lessThan(0) && (this.resourcesStatus[i].amount = new E.Z(0)),
                  (this.cachedResources[e] = this.resourcesStatus[i]);
              }),
              (e.prototype.setResource = function (e, t) {
                var n,
                  i = this.resourcesStatus.findIndex(function (t) {
                    return t.id === e;
                  });
                if (i < 0) {
                  i = this.resourcesStatus.length;
                  var r = A.find(function (t) {
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
                    isUnstable: null !== (n = r.isUnstable) && void 0 !== n && n,
                  });
                }
                (this.resourcesStatus[i].amount = t), (this.cachedResources[e] = this.resourcesStatus[i]);
              }),
              (e.prototype.subtractResource = function (e, t) {
                var n = this.resourcesStatus.findIndex(function (t) {
                  return t.id === e;
                });
                n < 0 || ((this.resourcesStatus[n].amount = this.resourcesStatus[n].amount.sub(t)), (this.cachedResources[e] = this.resourcesStatus[n]));
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
                  var a = A.find(function (t) {
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
                    isUnstable: null !== (r = a.isUnstable) && void 0 !== r && r,
                  });
                }
                (this.resourcesStatus[o].income = t),
                  (this.resourcesStatus[o].multiplier = n),
                  (this.resourcesStatus[o].consumption = i),
                  (this.resourcesStatus[o].balance = t.mul(n).sub(i)),
                  (this.cachedResources[e] = this.resourcesStatus[o]);
              }),
              (e.prototype.setCapacity = function (e, t) {
                var n,
                  i = this.resourcesStatus.findIndex(function (t) {
                    return t.id === e;
                  });
                if (i < 0) {
                  i = this.resourcesStatus.length;
                  var r = A.find(function (t) {
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
                    isUnstable: null !== (n = r.isUnstable) && void 0 !== n && n,
                  });
                }
                (this.resourcesStatus[i].max = t), (this.cachedResources[e] = this.resourcesStatus[i]);
              }),
              (e.prototype.saveBalances = function () {
                var t = this;
                ml.personage.attributes.getBreakdowns();
                var n = v(ml),
                  i = {},
                  r = {};
                A.forEach(function (o) {
                  var a, u, s, c, l, d, p, f;
                  if (o.unlockCondition(ml)) {
                    (i[o.id] = { max: { income: [], multiplier: [], consumption: [] }, income: { income: [], multiplier: [], consumption: [] } }),
                      (r[o.id] = { max: { income: [], multiplier: [], consumption: [] }, income: { income: [], multiplier: [], consumption: [] } });
                    var g = n[o.id].max.linear.reduce(function (e, t) {
                        return e.add(t.value);
                      }, new E.Z(0)),
                      m = n[o.id].max.multiplier.reduce(function (e, t) {
                        return e.mul(t.value);
                      }, new E.Z(1));
                    t.setCapacity(o.id, g.mul(m));
                    var h = e.collapseEffects(n[o.id].max);
                    (i[o.id].max.income = n[o.id].max.linear
                      .filter(function (e) {
                        return e.value;
                      })
                      .sort(function (e, t) {
                        return t.value - e.value;
                      })
                      .map(function (e) {
                        return te(te({}, e), { value: "+".concat(J(e.value, 4)) });
                      })),
                      (r[o.id].max.income = h.linear
                        .filter(function (e) {
                          return e.value;
                        })
                        .map(function (e) {
                          return te(te({}, e), { value: "+".concat(J(e.value, 4)) });
                        })),
                      (i[o.id].max.multiplier = n[o.id].max.multiplier
                        .filter(function (e) {
                          return 1 !== e.value;
                        })
                        .sort(function (e, t) {
                          return t.value - e.value;
                        })
                        .map(function (e) {
                          return te(te({}, e), { value: "x".concat(J(e.value, 4)) });
                        })),
                      (r[o.id].max.multiplier = h.multiplier
                        .filter(function (e) {
                          return 1 !== e.value;
                        })
                        .map(function (e) {
                          return te(te({}, e), { value: "x".concat(J(e.value, 4)) });
                        }));
                    var A = e.collapseEffects(n[o.id].income),
                      v = n[o.id].income.linear.reduce(function (e, t) {
                        return e.add(t.value);
                      }, new E.Z(0)),
                      y = n[o.id].income.multiplier.reduce(function (e, t) {
                        return e.mul(t.value);
                      }, new E.Z(1)),
                      w =
                        null === (a = n[o.id].income.consumption) || void 0 === a
                          ? void 0
                          : a.reduce(function (e, t) {
                              return e.add(t.value);
                            }, new E.Z(0));
                    if (
                      (t.setBalance(o.id, v, y, w),
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
                            return te(te({}, e), { value: "+".concat(J(e.value, 4)) });
                          })),
                      null === (s = r[o.id]) ||
                        void 0 === s ||
                        (s.income.income = A.linear
                          .filter(function (e) {
                            return e.value;
                          })
                          .map(function (e) {
                            return te(te({}, e), { value: "+".concat(J(e.value, 4)) });
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
                            return te(te({}, e), { value: "x".concat(J(e.value, 4)) });
                          })),
                      null === (l = r[o.id]) ||
                        void 0 === l ||
                        (l.income.multiplier = A.multiplier
                          .filter(function (e) {
                            return 1 !== e.value;
                          })
                          .map(function (e) {
                            return te(te({}, e), { value: "x".concat(J(e.value, 4)) });
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
                            return te(te({}, e), { value: "-".concat(J(e.value, 4)) });
                          })),
                      null === (p = r[o.id]) ||
                        void 0 === p ||
                        (p.income.consumption =
                          null === (f = A.consumption) || void 0 === f
                            ? void 0
                            : f
                                .filter(function (e) {
                                  return e.value;
                                })
                                .map(function (e) {
                                  return te(te({}, e), { value: "-".concat(J(e.value, 4)) });
                                })),
                      o.hasCapacityLimit)
                    ) {
                      var b = n[o.id].max.linear.reduce(function (e, t) {
                          return e.add(t.value);
                        }, new E.Z(0)),
                        I = n[o.id].max.multiplier.reduce(function (e, t) {
                          return e.mul(t.value);
                        }, new E.Z(1));
                      t.setCapacity(o.id, b.mul(I));
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
                var n = v(ml),
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
                    s = (o.mul(a).sub(u || 0), this.getPotentialEfficiency(E.Z.max(0, this.getResource(r)).add(o.mul(a)), (u || new E.Z(0)).mul(-1)));
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
                  i in e.lackEfficiencyResources && null != e.lackEfficiencyResources[i]
                    ? (e.lackEfficiencyResources[i] *= t[i])
                    : (e.lackEfficiencyResources[i] = t[i]);
                }
                e.lackEfficiencyResourcesCached = te({}, e.lackEfficiencyResources);
              }),
              (e.prototype.applyEfficiencies = function () {}),
              (e.prototype.assertAndApplyBalances = function () {
                for (var e = this.assertBalances(), t = 0; this.shouldChangeBalances(e) && t < 15; )
                  this.applyBalances(e), this.applyEfficiencies(), (e = this.assertBalances(t > 10)), t++;
              }),
              (e.prototype.reassertBalances = function () {
                this.resetEfficiency(), this.assertAndApplyBalances(), this.saveBalances(), this.rebuildCache();
              }),
              (e.prototype.process = function (t) {
                var n = this;
                this.dbCache ||
                  (this.dbCache = A.reduce(function (e, t) {
                    return (e[t.id] = t), e;
                  }, {}));
                var i = !1,
                  r = "";
                this.resourcesStatus.forEach(function (e) {
                  e.balance.lessThan(0) && e.balance.add(e.amount).lessThan(0) && ((i = !0), (r = e.id));
                }),
                  i && (console.log("should re-assert: ", i, r, e.lackEfficiencyResources), this.reassertBalances()),
                  this.resourcesStatus.forEach(function (e) {
                    e.isUnstable ? n.setResource(e.id, e.balance) : n.addResource(e.id, e.balance.mul(t));
                  });
              }),
              (e.prototype.getResource = function (e) {
                var t;
                return (null === (t = this.cachedResources[e]) || void 0 === t ? void 0 : t.amount) || new E.Z(0);
              }),
              (e.prototype.getResourceMultiplier = function (e) {
                var t;
                return (null === (t = this.cachedResources[e]) || void 0 === t ? void 0 : t.multiplier) || new E.Z(0);
              }),
              (e.prototype.getBalance = function (e) {
                var t;
                return (null === (t = this.cachedResources[e]) || void 0 === t ? void 0 : t.balance) || new E.Z(0);
              }),
              (e.prototype.getPotentialEfficiency = function (e, t) {
                return t.lessThanOrEqualTo(0) ? 1 : Math.min(1, -E.Z.max(0, e).div(t).toNumber());
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
                return (null === (t = this.cachedResources[e]) || void 0 === t ? void 0 : t.balance) || new E.Z(0);
              }),
              (e.prototype.getResourceCap = function (e) {
                var t, n;
                return (null === (t = this.cachedResources[e]) || void 0 === t ? void 0 : t.hasCapacityLimit)
                  ? (null === (n = this.cachedResources[e]) || void 0 === n ? void 0 : n.max) || new E.Z(0)
                  : new E.Z("1.e+30000");
              }),
              (e.prototype.assertEnought = function (e, t, n) {
                var i = [];
                return (
                  e.forEach(function (e) {
                    var n = "0";
                    if ((t[e.id] || (t[e.id] = new E.Z(0)), e.amount && e.amount.greaterThan(0) && t[e.id].greaterThan(0))) {
                      var r = 100 * t[e.id].div(e.amount).toNumber();
                      r > 100 && (r = 100), (n = r.toPrecision(3));
                    }
                    e.amount.greaterThan(0) &&
                      i.push({
                        id: e.id,
                        name: e.name,
                        amount: J(e.amount),
                        percentage: n,
                        maxAmount: J(e.max),
                        isAvailable: e.max.greaterThanOrEqualTo(1),
                        eta: I(e.eta),
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
                          n = A.find(function (t) {
                            return t.id === e.id;
                          });
                        if (!n) throw new Error("Invalid resource");
                        return {
                          id: e.id,
                          amount: new E.Z(e.amount),
                          balance: new E.Z(0),
                          hasCapacityLimit: n.hasCapacityLimit,
                          max: new E.Z(0),
                          potentialEfficiency: 1,
                          income: new E.Z(0),
                          multiplier: new E.Z(1),
                          consumption: new E.Z(0),
                          isUnstable: null !== (t = n.isUnstable) && void 0 !== t && t,
                        };
                      })) || [];
              }),
              (e.prototype.dataToUI = function () {
                var e = this;
                return {
                  resources: A.map(function (t) {
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
                      showOnSidebar: null !== (n = t.isShownInPanel) && void 0 !== n && n,
                      amount: J((null == a ? void 0 : a.amount) || new E.Z(0)),
                      balance: J((null == a ? void 0 : a.balance) || new E.Z(0)),
                      isUnlocked: t.unlockCondition(ml),
                      max: J((null == a ? void 0 : a.max) || new E.Z(0)),
                      toFullPercentage: (a && a.max.greaterThan(0) ? 100 * a.amount.div(a.max).toNumber() : 0).toPrecision(3),
                      hasMaxLimit: t.hasCapacityLimit,
                      breakdown: e.cachedBreakdown[t.id],
                      breakdownCollapsed: e.cachedShortenedBreakdown[t.id],
                      toFullTime:
                        (null == a ? void 0 : a.max) && (null == a ? void 0 : a.balance.greaterThan(0)) ? I(a.max.sub(a.amount).div(a.balance).toNumber()) : "",
                      toEmptyTime:
                        a && (null == a ? void 0 : a.balance.lessThan(0))
                          ? I(-(null == a ? void 0 : a.amount).div(null == a ? void 0 : a.balance).toNumber())
                          : "",
                      isSecondary: null !== (i = t.isCraftable) && void 0 !== i && i,
                      isCraftable: null !== (r = t.isCraftable) && void 0 !== r && r,
                      isHidden: null !== (o = t.isHidden) && void 0 !== o && o,
                      isNegative: ((null == a ? void 0 : a.balance) || 0) < 0 || (e.getResourceEfficiency(t.id) || 0) < 1,
                      isPositive: ((null == a ? void 0 : a.balance) || 0) > 0,
                      isCapped: !!a && a.max.greaterThan(0) && a.max.lessThanOrEqualTo(a.amount.plus(a.balance.mul(2 * ml.dT))),
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
                          (t = A.find(function (t) {
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
          ie = ne.getInstance();
        !(function (e) {
          (e[(e.POLYNOMIAL = 0)] = "POLYNOMIAL"), (e[(e.EXPONENTIAL = 1)] = "EXPONENTIAL"), (e[(e.LINEAR = 2)] = "LINEAR");
        })(R || (R = {}));
        var re,
          oe = [
            {
              id: "manacap",
              name: "Mana Cap Rune",
              description: "Expand your magic abilities by learning this rune. Mana capacity will be slightly increased.",
              unlockCondition: function (e) {
                return !0;
              },
              getCap:
                ((L = {}),
                (L[i.MANA] = function (e) {
                  return { A: new E.Z(0.1), B: new E.Z(0), type: R.LINEAR };
                }),
                L),
              getCost:
                ((O = {}),
                (O[i.MANA] = function (e) {
                  return { A: new E.Z(0), B: new E.Z(1), type: R.LINEAR };
                }),
                O),
              levelRequirement: new E.Z(1),
            },
            {
              id: "willpower",
              name: "Willpower Rune",
              description: "Rise your willpower attribute, improving mana generation rate",
              unlockCondition: function (e) {
                return e.resources.getResourceCap(i.MANA).greaterThanOrEqualTo(2);
              },
              getAttribute:
                ((T = {}),
                (T[c.WILLPOWER] = function (e) {
                  return { A: new E.Z(0.1), B: new E.Z(0), type: R.LINEAR };
                }),
                T),
              getCost:
                ((S = {}),
                (S[i.MANA] = function (e) {
                  return { A: new E.Z(0), B: new E.Z(2), type: R.LINEAR };
                }),
                S),
              levelRequirement: new E.Z(1),
            },
            {
              id: "intellect",
              name: "Intellect Rune",
              description: "Rise your intellect attribute, improving skill learning speed",
              unlockCondition: function (e) {
                return e.resources.getResourceCap(i.MANA).greaterThanOrEqualTo(4);
              },
              getAttribute:
                ((M = {}),
                (M[c.RUNE_READING] = function (e) {
                  return { A: new E.Z(0.1), B: new E.Z(0), type: R.LINEAR };
                }),
                M),
              getCost:
                ((Z = {}),
                (Z[i.MANA] = function (e) {
                  return { A: new E.Z(0), B: new E.Z(2), type: R.LINEAR };
                }),
                Z),
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
                ((P = {}),
                (P[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(0.003), B: new E.Z(0), type: R.LINEAR };
                }),
                P),
              getCost:
                ((_ = {}),
                (_[i.MANA] = function (e) {
                  return { A: new E.Z(0), B: new E.Z(10), type: R.LINEAR };
                }),
                _),
              levelRequirement: new E.Z(10),
            },
            {
              id: "manarate",
              name: "Mana Rate Rune",
              description: "Improve your mana gain",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(o.EXPAND_MANA) > 0;
              },
              getMultiplier:
                ((G = {}),
                (G[i.MANA] = function (e) {
                  return { A: new E.Z(0.02), B: new E.Z(1), type: R.LINEAR };
                }),
                G),
              getCost:
                ((B = {}),
                (B[i.MANA] = function (e) {
                  return { A: new E.Z(0), B: new E.Z(5), type: R.LINEAR };
                }),
                (B[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(0), B: new E.Z(1), type: R.LINEAR };
                }),
                B),
              levelRequirement: new E.Z(25),
            },
            {
              id: "rune_master",
              name: "Rune Master",
              description: "Reduce other runes learning xp cost",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(o.RUNE_MASTER) > 0;
              },
              getCost:
                ((D = {}),
                (D[i.MANA] = function (e) {
                  return { A: new E.Z(0), B: new E.Z(50), type: R.LINEAR };
                }),
                (D[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(0), B: new E.Z(20), type: R.LINEAR };
                }),
                D),
              getAttribute:
                ((U = {}),
                (U[c.RUNE_MASTERY] = function (e) {
                  return { A: new E.Z(0.2), B: new E.Z(0), type: R.LINEAR };
                }),
                U),
              levelRequirement: new E.Z(2500),
            },
            {
              id: "rune_memory",
              name: "Memory Rune",
              description: "Increase mana and knowledge caps",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(o.MEMORY_RUNE) > 0;
              },
              getCapMultiplier:
                ((k = {}),
                (k[i.MANA] = function (e) {
                  return { A: new E.Z(0.02), B: new E.Z(1), type: R.LINEAR };
                }),
                (k[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(0.02), B: new E.Z(1), type: R.LINEAR };
                }),
                k),
              getCost:
                ((x = {}),
                (x[i.MANA] = function (e) {
                  return { A: new E.Z(0), B: new E.Z(20), type: R.LINEAR };
                }),
                (x[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(0), B: new E.Z(5), type: R.LINEAR };
                }),
                x),
              levelRequirement: new E.Z(1e3),
            },
            {
              id: "rune_endurance",
              name: "Endurance Rune",
              description: "Increase vitality attribute",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.ENDURANCE_RUNE) > 0;
              },
              getAttributeMultiplier:
                ((H = {}),
                (H[c.VITALITY] = function (e) {
                  return { A: new E.Z(0.005), B: new E.Z(1), type: R.LINEAR };
                }),
                H),
              getCost:
                ((W = {}),
                (W[i.MANA] = function (e) {
                  return { A: new E.Z(0), B: new E.Z(2500), type: R.LINEAR };
                }),
                (W[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(0), B: new E.Z(5), type: R.LINEAR };
                }),
                W),
              levelRequirement: new E.Z(1e7),
            },
            {
              id: "muscle",
              name: "Muscle Rune",
              description: "Increase strength attribute",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.MUSCLE_RUNE) > 0;
              },
              getAttributeMultiplier:
                ((X = {}),
                (X[c.STRENGTH] = function (e) {
                  return { A: new E.Z(0.005), B: new E.Z(1), type: R.LINEAR };
                }),
                X),
              getCost:
                ((q = {}),
                (q[i.MANA] = function (e) {
                  return { A: new E.Z(0), B: new E.Z(15e3), type: R.LINEAR };
                }),
                (q[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(0), B: new E.Z(125), type: R.LINEAR };
                }),
                q),
              levelRequirement: new E.Z(2e7),
            },
            {
              id: "agility",
              name: "Agility Rune",
              description: "Increase actions limits",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.AGILITY_RUNE) > 0;
              },
              getAttributeMultiplier:
                ((F = {}),
                (F[c.AGILITY] = function (e) {
                  return { A: new E.Z(0.002), B: new E.Z(1), type: R.LINEAR };
                }),
                F),
              getCost:
                ((Y = {}),
                (Y[i.MANA] = function (e) {
                  return { A: new E.Z(0), B: new E.Z(4e5), type: R.LINEAR };
                }),
                (Y[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(0), B: new E.Z(5e3), type: R.LINEAR };
                }),
                Y),
              levelRequirement: new E.Z(2e10),
            },
            {
              id: "spark_cap",
              name: "Spark Holding Rune",
              description: "Increase spark capacity",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.SPARK_CONTAINER) > 0;
              },
              getCapMultiplier:
                ((K = {}),
                (K[i.SPARK] = function (e) {
                  return { A: new E.Z(0.005), B: new E.Z(1), type: R.LINEAR };
                }),
                K),
              getCost:
                ((j = {}),
                (j[i.MANA] = function (e) {
                  return { A: new E.Z(0), B: new E.Z("4.e+7"), type: R.LINEAR };
                }),
                (j[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(0), B: new E.Z("4.e+8"), type: R.LINEAR };
                }),
                j),
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
                ((V = {}),
                (V[c.MAGIC_KNOWLEDGE] = function (e) {
                  return { A: new E.Z(0.005), B: new E.Z(1), type: R.LINEAR };
                }),
                V),
              getCost:
                ((z = {}),
                (z[i.MANA] = function (e) {
                  return { A: new E.Z(0), B: new E.Z("4.e+11"), type: R.LINEAR };
                }),
                (z[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(0), B: new E.Z("5.e+12"), type: R.LINEAR };
                }),
                z),
              levelRequirement: new E.Z("5.e+40"),
            },
          ],
          ae = [
            {
              id: c.RUNE_READING,
              name: "Intellect",
              minimum: 0,
              unlockCondition: function (e) {
                return !0;
              },
              description: "Determines how quickly you learning runes",
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
                return e.learning.runeUpgrades.getUpgradeLevel(o.TICKET_OUT) > 0 || e.city.actions.isUnlocked;
              },
              description: "Increase physical activities efficiency",
            },
            {
              id: c.VITALITY,
              name: "Vitality",
              minimum: 0,
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(o.TICKET_OUT) > 0 || e.city.actions.isUnlocked;
              },
              description: "Increase endurance activities efficiency",
            },
            {
              id: c.AGILITY,
              name: "Agility",
              minimum: 0,
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.AGILITY_RUNE) > 0 || e.personage.attributes.getAttribute(c.AGILITY).greaterThan(1);
              },
              description: "Increase endurance activities efficiency",
            },
            {
              id: c.MAGIC_KNOWLEDGE,
              name: "Spellbinding",
              minimum: 0,
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.ILLUSION_SPELLS) > 0 || e.personage.attributes.getAttribute(c.MAGIC_KNOWLEDGE).greaterThan(1);
              },
              description: "Increase general spell efficiency",
            },
            {
              id: c.REST_EFFICIENCY,
              name: "Rest Efficiency",
              minimum: 0,
              unlockCondition: function (e) {
                return e.personage.attributes.getAttribute(c.REST_EFFICIENCY).greaterThan(1);
              },
              description: "Increase rest efficiency",
            },
            {
              id: c.CONJURATION_LORE,
              name: "Conjuration Lore",
              minimum: 0,
              unlockCondition: function (e) {
                return (
                  e.personage.attributes.getAttribute(c.CONJURATION_LORE).greaterThan(1) || e.city.academyUpgrades.getUpgradeLevel(a.CONJURATION_STUDY) > 0
                );
              },
              description: "Increase conjuration spells speed efficiency",
            },
            {
              id: c.STAMINA,
              name: "Stamina",
              minimum: 0,
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.BATTLE_MASTERY) > 0;
              },
              description: "Increase your fighting efficiency",
            },
          ],
          ue = function (e, t) {
            void 0 === t && (t = !1);
            var n = A.find(function (t) {
              return t.id === e;
            });
            if (n) return n.unlockCondition(ml) || t ? n.name : "???";
            var i = ae.find(function (t) {
              return t.id === e;
            });
            return i ? (i.unlockCondition(ml) || t ? i.name : "???") : e;
          },
          se = function () {
            return (
              (se =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                  return e;
                }),
              se.apply(this, arguments)
            );
          },
          ce = (function () {
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
                  case R.EXPONENTIAL:
                    return e.calculateExponential(t, n);
                  case R.POLYNOMIAL:
                    return e.calculatePolynomial(t, n);
                  case R.LINEAR:
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
                  case R.EXPONENTIAL:
                    return e.calculateExponentialBatch(t, n, i);
                  case R.POLYNOMIAL:
                    return e.calculatePolynomialBatch(t, n, i);
                  case R.LINEAR:
                    return e.calculateLinearBatch(t, n, i);
                  default:
                    return new E.Z(0);
                }
              }),
              (e.calculateExponentialBatch = function (e, t, n) {
                return e.B.equals(1) ? e.A.mul(n) : e.A.mul(w(e.B, t).mul(w(e.B, n).sub(1)).div(e.B.sub(1)));
              }),
              (e.calculatePolynomialBatch = function (e, t, n) {
                return console.error("Polynomial batch is not implemented"), new E.Z(0);
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
                  case R.EXPONENTIAL:
                    return e.calculateDXExponential(t, n, i);
                  case R.POLYNOMIAL:
                    return e.calculateDXPolynomial(t, n, i);
                  case R.LINEAR:
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
                  ? y(
                      n
                        .mul(e.B.sub(1))
                        .div(e.A.mul(w(e.B, t)))
                        .plus(1),
                      e.B
                    )
                  : new E.Z(0);
              }),
              (e.calculateDXPolynomial = function (e, t, n) {
                return console.error("Polynomial dX is not implemented"), new E.Z(0);
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
                void 0 === r && (r = new E.Z(1)), void 0 === o && (o = !1), void 0 === a && (a = 1);
                var u = [];
                return (
                  Object.entries(t).forEach(function (t) {
                    var s = t[0],
                      c = t[1];
                    u.push({ id: s, name: ue(s, o), amount: e.calculateBatch(n, c, i, r).mul(a) });
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
                void 0 === o && (o = new E.Z(1)), void 0 === a && (a = new E.Z(1));
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
                          g.lessThan(d) || (n.resources.getResourceBalance(s).lessThan(0) && d.sub(r[s] || 0).greaterThan(0))
                            ? 1e300
                            : d
                                .sub(r[s] || 0)
                                .div(n.resources.getResourceBalance(s) || 1e-300)
                                .toNumber());
                    }
                    u.push({ id: s, name: ue(s), amount: d, max: l, eta: p, isBlocked: f, percentageOf: d.lessThan(r[s]) ? d.div(r[s]).toNumber() : void 0 });
                  }),
                  u
                );
              }),
              (e.calcSum = function (e, t, n) {
                void 0 === t && (t = []), void 0 === n && (n = []);
                var i = (function (e, t, n) {
                  if (n || 2 === arguments.length)
                    for (var i, r = 0, o = t.length; r < o; r++) (!i && r in t) || (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
                  return e.concat(i || Array.prototype.slice.call(t));
                })([], t, !0);
                n.forEach(function (e) {
                  var t = i.findIndex(function (t) {
                    return t.id === e.id;
                  });
                  t > -1 ? (i[t].amount = i[t].amount.add(e.amount)) : i.push(se({}, e));
                });
                var r = e.resources.getBatchObject();
                return (
                  i.forEach(function (t, n) {
                    var o = e.resources.getResourceCap(t.id),
                      a = !1,
                      u = 0;
                    o && o.lessThan(t.amount) && (a = !0),
                      (u =
                        (o && o.lessThan(t.amount)) || (e.resources.getResourceBalance(t.id).lessThan(0) && t.amount.sub(r[t.id] || 0).greaterThan(0))
                          ? 1e300
                          : t.amount
                              .sub(r[t.id] || 0)
                              .div(e.resources.getResourceBalance(t.id) || 1e-300)
                              .toNumber()),
                      (i[n].isBlocked = a),
                      (i[n].eta = u),
                      (i[n].max = t.amount.sub(r[t.id] || 0).greaterThan(0) ? (r[t.id] || new E.Z(0)).div(t.amount.plus(1e-50)) : new E.Z(1)),
                      (i[n].percentageOf = t.amount.lessThan(r[t.id]) ? t.amount.div(r[t.id]).toNumber() : void 0);
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
                    n.push({ id: i, name: ue(i), amount: r(t) });
                  }),
                  n
                );
              }),
              e
            );
          })();
        !(function (e) {
          (e.SCHOLAR = "Scholar"), (e.PHYSICAL = "Physical"), (e.MENTAL = "Mental"), (e.MAGICAL = "Magical");
        })(re || (re = {}));
        var le,
          de,
          pe,
          fe,
          ge,
          me,
          he,
          Ae,
          Ee,
          ve,
          ye,
          we,
          be,
          Ie,
          Ce,
          Ne,
          Re,
          Le,
          Oe,
          Te,
          Se,
          Me,
          Ze,
          Pe,
          _e,
          Ge,
          Be,
          De,
          Ue,
          ke,
          xe,
          He,
          We,
          Xe,
          qe,
          Fe,
          Ye,
          Ke,
          je,
          Ve,
          ze,
          Je,
          Qe,
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
          At,
          Et,
          vt,
          yt,
          wt,
          bt,
          It,
          Ct,
          Nt,
          Rt,
          Lt,
          Ot,
          Tt,
          St,
          Mt,
          Zt,
          Pt,
          _t,
          Gt,
          Bt,
          Dt,
          Ut,
          kt,
          xt,
          Ht,
          Wt,
          Xt,
          qt,
          Ft,
          Yt,
          Kt,
          jt,
          Vt,
          zt,
          Jt,
          Qt,
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
          An,
          En,
          vn,
          yn,
          wn,
          bn,
          In,
          Cn,
          Nn,
          Rn,
          Ln,
          On,
          Tn,
          Sn,
          Mn,
          Zn,
          Pn,
          _n,
          Gn,
          Bn,
          Dn,
          Un,
          kn,
          xn,
          Hn,
          Wn,
          Xn,
          qn,
          Fn,
          Yn,
          Kn,
          jn,
          Vn,
          zn,
          Jn,
          Qn,
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
          mi =
            ((le = function (e, t) {
              return (
                (le =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                le(e, t)
              );
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
              function n() {
                this.constructor = e;
              }
              le(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
            }),
          hi = function () {
            return (
              (hi =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                  return e;
                }),
              hi.apply(this, arguments)
            );
          },
          Ai = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.runes = []),
                (t.cachedRunes = []),
                (t.dbCache = {}),
                t.workDispatcher.on("[runes] toggle active", function (e) {
                  console.log("do learn", e), t.toggleLearn(e.id), t.regenerateCache();
                }),
                t.workDispatcher.on("[runes] sacrifice", function (e) {
                  console.log("do sacrifice", e), t.doSacrifice(e.id);
                }),
                (t.dbCache = oe.reduce(function (e, t) {
                  var n;
                  return hi(hi({}, e), (((n = {})[t.id] = t), n));
                }, {})),
                t
              );
            }
            return (
              mi(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.regenerateCache = function () {
                var e = this;
                this.cachedRunes = oe.map(function (t) {
                  return e.processToUI(t);
                });
              }),
              (t.prototype.importData = function (e) {
                this.runes =
                  (null == e
                    ? void 0
                    : e.map(function (e) {
                        return hi(hi({}, e), {
                          level: new E.Z(e.level),
                          xp: new E.Z(e.xp),
                          xpMult: new E.Z(e.xpMult || 1),
                          numSacrificed: new E.Z(e.numSacrificed || 0),
                        });
                      })) || [];
              }),
              (t.prototype.exportData = function () {
                return this.runes.map(function (e) {
                  return hi(hi({}, e), {
                    level: e.level.toPrecision(18),
                    xp: e.xp.toPrecision(18),
                    xpMult: e.xpMult.toPrecision(18),
                    numSacrificed: e.numSacrificed.toPrecision(18),
                  });
                });
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
                      ((n = { id: t.id, level: new E.Z(0), xp: new E.Z(0), isActive: !1, isLearning: !1, xpMult: new E.Z(1), numSacrificed: new E.Z(0) }),
                      e.runes.push(n));
                    var i = e.dbCache[t.id],
                      r = e.getLearnSpeed().mul(e.getSacrificedBonus(n.numSacrificed)).mul(n.xpMult),
                      o = e.getMaxXp(i.levelRequirement, n),
                      a = o.sub(n.xp).div(r),
                      u = i.getCost
                        ? ce.calcBatchAll(
                            i.getCost,
                            gl.getInstance(),
                            n.level,
                            gl.getInstance().resources.getBatchObject(),
                            new E.Z(1),
                            ml.learning.wizardOrb.getManaMult()
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
                    return hi(hi({}, t), {
                      etaNum: l,
                      isAvailable: s.greaterThanOrEqualTo(1),
                      cost: gl
                        .getInstance()
                        .resources.assertEnought(u, gl.getInstance().resources.getBatchObject(), gl.getInstance().resources.getBatchBalanceObject()),
                      xp: J(n.xp),
                      maxXp: J(o),
                      learnEta: N(a),
                      progress: Math.min(100, n.xp.mul(100).div(o).toNumber()).toPrecision(3),
                      learnSpeed: J(r),
                      isBlocked: !c || !i.unlockCondition(ml),
                    });
                  });
              }),
              (t.prototype.dataToUI = function () {
                return {
                  runes: this.dataFromCache(),
                  maxRunes: this.getMaxSlots(),
                  usedSlots: this.getRunesActive(),
                  runningPreset: ml.learning.runePresets.getActiveName(),
                };
              }),
              (t.prototype.getEffectiveLevel = function (e) {
                return this.getSacrificedBonusMult(e.numSacrificed).mul(e.level);
              }),
              (t.prototype.processToUI = function (e) {
                var t = this.runes.find(function (t) {
                  return t.id === e.id;
                });
                t ||
                  ((t = { id: e.id, level: new E.Z(0), xp: new E.Z(0), isActive: !1, isLearning: !1, xpMult: new E.Z(1), numSacrificed: new E.Z(0) }),
                  this.runes.push(t));
                var n = e.getCost
                    ? ce.calcBatchAll(
                        e.getCost,
                        gl.getInstance(),
                        t.level,
                        gl.getInstance().resources.getBatchObject(),
                        new E.Z(1),
                        ml.learning.wizardOrb.getManaMult()
                      )
                    : [],
                  i = e.getGain ? ce.calcBatch(e.getGain, gl.getInstance(), t.level) : [],
                  r = n.reduce(function (e, t) {
                    return E.Z.min(e, t.max.floor());
                  }, new E.Z("1.e+30000")),
                  o = n.reduce(function (e, t) {
                    return e && !t.isBlocked;
                  }, !0),
                  a = n.reduce(function (e, t) {
                    return Math.max(e, t.eta);
                  }, 0),
                  u = e.unlockCondition(ml) || t.level.greaterThan(0);
                u && t.level.lessThanOrEqualTo(0) && ml.newNotifications.registerNotification("learning:runes:rune:".concat(e.id));
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
                  cost: gl
                    .getInstance()
                    .resources.assertEnought(n, gl.getInstance().resources.getBatchObject(), gl.getInstance().resources.getBatchBalanceObject()),
                  gain: i.map(function (e) {
                    return hi(hi({}, e), { amountValue: e.amount.toString(), amount: J(e.amount) });
                  }),
                  progress: Math.min(100, t.xp.mul(100).div(p).toNumber()).toPrecision(3),
                  isBlocked: !o || !e.unlockCondition(ml),
                  etaNum: a,
                  isActive: t.isActive,
                  isLearning: t.isLearning,
                  level: ee(t.level, 2),
                  xp: J(t.xp),
                  maxXp: J(p),
                  learnEta: N(f),
                  learnSpeed: J(d),
                  haveSacrificeMult: t.numSacrificed.greaterThan(0),
                  isSacrificeAvailable: this.getSacrificeAvailable(t),
                  currentSacrificeMult: J(s),
                  currentProdMult: J(c),
                  potentialSacrificeMult: J(this.getSacrificedBonus(l)),
                  potentialProdMult: J(this.getSacrificedBonusMult(l)),
                };
              }),
              (t.prototype.getMaxSlots = function () {
                return 1 + ml.learning.runeUpgrades.getUpgradeLevel(o.ADD_RUNIC_TABLE) + ml.learning.runeUpgrades.getUpgradeLevel(o.EXPAND_MAGIC_LIB);
              }),
              (t.prototype.getRunesActive = function () {
                return this.runes.filter(function (e) {
                  return e.isActive;
                }).length;
              }),
              (t.prototype.getSacrificeAvailable = function (e) {
                return e.numSacrificed.lessThanOrEqualTo(this.getSacrificeReward(e)) && e.level.greaterThanOrEqualTo(150);
              }),
              (t.prototype.getSacrificeReward = function (e) {
                return e.level.mul(
                  Math.pow(2, ml.learning.runeUpgrades.getUpgradeLevel(o.EXPANDED_SACRIFICE) + ml.learning.runeUpgrades.getUpgradeLevel(o.RUNIC_SPLASH))
                );
              }),
              (t.prototype.doSacrifice = function (e) {
                var t = this.runes.find(function (t) {
                  return t.id === e;
                });
                if (
                  (t ||
                    ((t = { id: e, level: new E.Z(0), xp: new E.Z(0), isActive: !1, isLearning: !1, xpMult: new E.Z(1), numSacrificed: new E.Z(0) }),
                    this.runes.push(t)),
                  this.getSacrificeAvailable(t))
                ) {
                  for (var n = 0; n < this.runes.length; n++)
                    this.runes[n].id === e && ((this.runes[n].numSacrificed = this.getSacrificeReward(this.runes[n])), (this.runes[n].level = new E.Z(0))),
                      ml.city.academyUpgrades.getUpgradeLevel(a.RUNE_PROTECTION) <= 0
                        ? (this.runes[n].level = new E.Z(0))
                        : (this.runes[n].level = E.Z.min(this.runes[n].level, Math.pow(2 * ml.city.academyUpgrades.getUpgradeLevel(a.RUNE_PROTECTION), 2))),
                      (this.runes[n].isActive = !1),
                      (this.runes[n].isLearning = !1),
                      (this.runes[n].xp = new E.Z(0)),
                      (this.runes[n].xpMult = new E.Z(1));
                  (ml.statistics.stats.fastestRuneTime = ml.statistics.stats.numRuneResets
                    ? Math.min(ml.statistics.stats.fastestRuneTime, ml.statistics.stats.timeThisRune)
                    : ml.statistics.stats.timeThisRune),
                    (ml.statistics.stats.timeThisRune = 0),
                    ml.statistics.stats.numRuneResets++,
                    ml.learning.wizardOrb.reset(),
                    ml.learning.runeUpgrades.reset();
                  var r = ml.resources.getResource(i.COINS);
                  ml.resources.reset(),
                    ml.newNotifications.resetNotifications(),
                    ml.learning.runePresets.runDefault(),
                    ml.regenerateCache(),
                    ml.resources.reassertBalances(),
                    ml.city.academyUpgrades.getUpgradeLevel(a.GOLD_PROTECTION) && ml.resources.setResource(i.COINS, r);
                }
              }),
              (t.prototype.applyBatch = function (e) {
                var t = this,
                  n = e
                    .filter(function (e) {
                      var t;
                      return null ===
                        (t = oe.find(function (t) {
                          return t.id === e;
                        })) || void 0 === t
                        ? void 0
                        : t.unlockCondition(ml);
                    })
                    .splice(0, this.getMaxSlots());
                this.runes.forEach(function (e, i) {
                  t.runes[i].isActive = n.includes(e.id);
                });
              }),
              (t.prototype.toggleLearn = function (e) {
                if (
                  oe.find(function (t) {
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
                      (this.runes[n].isActive = !1), (this.runes[t].isActive = !0);
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
                return b(ml.personage.attributes.getAttribute(c.RUNE_MASTERY));
              }),
              (t.prototype.getMaxXpMulLog = function (e, t) {
                return t.sub(this.getRuneMasteryLogarithmic());
              }),
              (t.prototype.getMaxRunesPerXpV3 = function (e, t, n) {
                if (t.equals(0) || n.equals(0)) return new E.Z(0);
                var i = b(new E.Z(1.04)),
                  r = this.getRuneMasteryLogarithmic(),
                  o = b(t).sub(r).add(e.level.mul(i)),
                  a = b(n);
                if (a.lessThan(o)) return new E.Z(0);
                var u = a.sub(o).div(i);
                return u.isNegative() ? new E.Z(0) : E.Z.max(1, u.floor());
              }),
              (t.prototype.getMaxXp = function (e, t) {
                var n = this.getMaxXpMulLog(t, b(e)).add(b(new E.Z(1.04)).mul(t.level));
                return n.lessThanOrEqualTo("-1.e+12") ? new E.Z("1.e-300000") : w(new E.Z(10), n);
              }),
              (t.prototype.getLearnSpeed = function () {
                return ml.personage.attributes
                  .getAttribute(c.RUNE_READING)
                  .mul(Math.pow(1.5, ml.learning.runeUpgrades.getUpgradeLevel(o.RUNIC_MEMORY)))
                  .mul(Math.pow(2, ml.learning.runeUpgrades.getUpgradeLevel(o.RUNIC_MEMORY2)))
                  .mul(Math.pow(3, ml.learning.runeUpgrades.getUpgradeLevel(o.RUNIC_TABLE_ENHANCEMENT)))
                  .mul(ml.city.reincarnation.getBonus(re.SCHOLAR));
              }),
              (t.prototype.getSacrificedBonus = function (e) {
                return e.lessThan(100) ? new E.Z(1) : w(e.div(40), 1.4);
              }),
              (t.prototype.getSacrificedBonusMult = function (e) {
                return e.lessThan(100) ? new E.Z(1) : w(e.div(50), 0.25 + (ml.achievements.getAchievementComplete("rune-mastery-rune") ? 0.02 : 0));
              }),
              (t.prototype.rescheduleRunes = function () {
                var e = this;
                this.runes.forEach(function (t, n) {
                  t.isActive && ((e.runes[n].isLearning = !1), (e.runes[n].xp = new E.Z(0)));
                });
              }),
              (t.prototype.process = function (e) {
                var t = this,
                  n = !1;
                this.runes.forEach(function (i, r) {
                  if (i.isActive) {
                    var o = oe.find(function (e) {
                      return e.id === i.id;
                    });
                    if (!o) throw new Error("Rune ".concat(i.id, " not found"));
                    var a = t.getMaxXp(o.levelRequirement, i),
                      u = t.getLearnSpeed().mul(i.xpMult.mul(e).mul(t.getSacrificedBonus(i.numSacrificed)));
                    if (a.lessThan(u)) {
                      t.runes[r].xpMult > ml.learning.wizardOrb.getSpeedMult() &&
                        ((t.runes[r].xpMult = ml.learning.wizardOrb.getSpeedMult()),
                        (u = t.getLearnSpeed().mul(i.xpMult.mul(e).mul(t.getSacrificedBonus(i.numSacrificed)))));
                      var s = t.getMaxRunesPerXpV3(i, o.levelRequirement, u),
                        c = o.getCost
                          ? ce.calcBatchAll(
                              o.getCost,
                              gl.getInstance(),
                              i.level,
                              gl.getInstance().resources.getBatchObject(),
                              new E.Z("1.e+30000"),
                              ml.learning.wizardOrb.getManaMult()
                            )
                          : [],
                        l = c.reduce(function (e, t) {
                          return E.Z.min(e, t.max.floor());
                        }, new E.Z("1.e+30000"));
                      console.log("Start learn batch: ", c, l.toNumber(), s.toNumber());
                      var d = E.Z.min(l, s);
                      if (
                        (p = o.getCost
                          ? ce.calcBatchAll(
                              o.getCost,
                              gl.getInstance(),
                              i.level,
                              gl.getInstance().resources.getBatchObject(),
                              d,
                              ml.learning.wizardOrb.getManaMult()
                            )
                          : [])
                          .reduce(function (e, t) {
                            return E.Z.min(e, t.max.floor());
                          }, new E.Z("1.e+30000"))
                          .lessThan(1)
                      )
                        return;
                      return gl.getInstance().resources.subtractResourceBatch(p), (i.xp = new E.Z(0)), (i.level = i.level.plus(d)), void (n = !0);
                    }
                    if (i.isLearning) i.xp = i.xp.plus(u);
                    else {
                      var p;
                      if (
                        (l = (p = o.getCost
                          ? ce.calcBatchAll(
                              o.getCost,
                              gl.getInstance(),
                              i.level,
                              gl.getInstance().resources.getBatchObject(),
                              new E.Z(1),
                              ml.learning.wizardOrb.getManaMult()
                            )
                          : []).reduce(function (e, t) {
                          return E.Z.min(e, t.max.floor());
                        }, new E.Z("1.e+30000"))).lessThan(1)
                      )
                        return;
                      gl.getInstance().resources.subtractResourceBatch(p),
                        (t.runes[r].isLearning = !0),
                        (t.runes[r].xpMult = ml.learning.wizardOrb.getSpeedMult()),
                        (n = !0);
                    }
                    i.xp.greaterThanOrEqualTo(a) && ((i.xp = new E.Z(0)), (i.level = i.level.plus(1)), (t.runes[r].isLearning = !1), (n = !0));
                  }
                }),
                  n && (ml.resources.reassertBalances(), ml.regenerateCache(), ml.learning.runePresets.applyPreset());
              }),
              (t.prototype.getResourceBeingStored = function (e) {
                var t = this,
                  n = oe.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getCap) || void 0 === n ? void 0 : n[e]);
                  }),
                  i = [];
                return (
                  this.runes.forEach(function (r) {
                    var o = n.find(function (e) {
                      return e.id === r.id;
                    });
                    if (o && o.getCap) {
                      var a = ce.calculate(ml, o.getCap[e], t.getEffectiveLevel(r));
                      i.push({ label: "Rune: ".concat(o.name), value: a, id: "rune-".concat(o.id), category: "Runes" });
                    }
                  }, 0),
                  i
                );
              }),
              (t.prototype.getResourceBeingStoredMultiplier = function (e) {
                var t = this,
                  n = oe.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getCapMultiplier) || void 0 === n ? void 0 : n[e]);
                  }),
                  i = [];
                return (
                  this.runes.forEach(function (r) {
                    var o = n.find(function (e) {
                      return e.id === r.id;
                    });
                    if (o && o.getCapMultiplier) {
                      var a = ce.calculate(ml, o.getCapMultiplier[e], t.getEffectiveLevel(r));
                      a.equals(1) || i.push({ label: "Rune: ".concat(o.name), value: a, id: "rune-".concat(o.id), category: "Runes" });
                    }
                  }, 0),
                  i
                );
              }),
              (t.prototype.getMultiplier = function (e) {
                var t = this,
                  n = oe.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getMultiplier) || void 0 === n ? void 0 : n[e]);
                  }),
                  i = [];
                return (
                  this.runes.forEach(function (r) {
                    var o = n.find(function (e) {
                      return e.id === r.id;
                    });
                    if (o && o.getMultiplier) {
                      var a = ce.calculate(ml, o.getMultiplier[e], t.getEffectiveLevel(r));
                      a.equals(1) || i.push({ label: "Rune: ".concat(o.name), value: a, id: "rune-".concat(o.id), category: "Runes" });
                    }
                  }, 0),
                  i
                );
              }),
              (t.prototype.getResourceGain = function (e) {
                var t = this,
                  n = oe.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getGain) || void 0 === n ? void 0 : n[e]);
                  }),
                  i = [];
                return (
                  this.runes.forEach(function (r) {
                    var o = n.find(function (e) {
                      return e.id === r.id;
                    });
                    if (o && o.getGain) {
                      var a = ce.calculate(ml, o.getGain[e], t.getEffectiveLevel(r));
                      i.push({ label: "Rune: ".concat(o.name), value: a, id: "rune-".concat(o.id), category: "Runes" });
                    }
                  }, 0),
                  i
                );
              }),
              (t.prototype.getAttributeGained = function (e) {
                var t = this,
                  n = oe.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getAttribute) || void 0 === n ? void 0 : n[e]);
                  }),
                  i = [];
                return (
                  this.runes.forEach(function (r) {
                    var o = n.find(function (e) {
                      return e.id === r.id;
                    });
                    if (o && o.getAttribute) {
                      var a = ce.calculate(ml, o.getAttribute[e], t.getEffectiveLevel(r));
                      i.push({ label: "Rune: ".concat(o.name), value: a, id: "rune-".concat(o.id), category: "Runes" });
                    }
                  }, 0),
                  i
                );
              }),
              (t.prototype.getAttributeMultiplier = function (e) {
                var t = this,
                  n = oe.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getAttributeMultiplier) || void 0 === n ? void 0 : n[e]);
                  }),
                  i = [];
                return (
                  this.runes.forEach(function (r) {
                    var o = n.find(function (e) {
                      return e.id === r.id;
                    });
                    if (o && o.getAttributeMultiplier) {
                      var a = ce.calculate(ml, o.getAttributeMultiplier[e], t.getEffectiveLevel(r));
                      a.equals(1) || i.push({ label: "Rune: ".concat(o.name), value: a, id: "rune-".concat(o.id), category: "Runes" });
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
          Ei = Ai.getInstance(),
          vi = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
              function i() {
                this.constructor = t;
              }
              e(t, n), (t.prototype = null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
            };
          })(),
          yi = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                t.workDispatcher.on("[wizard-orb] set level", function (e) {
                  console.log("set level vval", e),
                    (t.state.levelActive = Math.max(0, Math.min(t.state.levelBuilt, e))),
                    t.state.cancelRuneOnChange && ml.learning.runes.rescheduleRunes();
                }),
                t.workDispatcher.on("[wizard-orb] toggle cancel", function (e) {
                  console.log("toggle cancel", e), (t.state.cancelRuneOnChange = !t.state.cancelRuneOnChange);
                }),
                t.workDispatcher.on("[wizard-orb] do build", function (e) {
                  console.log("build", e), t.doBuild();
                }),
                (t.state = { levelActive: 0, levelBuilt: 0, cancelRuneOnChange: !1 }),
                t
              );
            }
            return (
              vi(t, e),
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
                return ml.resources.getResourceCap(i.MANA).greaterThanOrEqualTo(8);
              }),
              (t.prototype.getSpeedMult = function () {
                return E.Z.pow(
                  new E.Z(2).mul(
                    E.Z.pow(1.2, ml.learning.runeUpgrades.getUpgradeLevel(o.BETTER_ORB) + ml.learning.runeUpgrades.getUpgradeLevel(o.ORB_MANIPULATIONS))
                  ),
                  this.state.levelActive || 0
                );
              }),
              (t.prototype.getManaMult = function () {
                return E.Z.pow(4, this.state.levelActive || 0);
              }),
              (t.prototype.getCostFormula = function () {
                var e;
                return (
                  ((e = {})[i.MANA] = function (e) {
                    return { A: new E.Z(5), B: new E.Z(5), type: R.EXPONENTIAL };
                  }),
                  e
                );
              }),
              (t.prototype.doBuild = function () {
                var e = ce.calcBatchAll(this.getCostFormula(), ml, new E.Z(this.state.levelBuilt), ml.resources.getBatchObject());
                e
                  .reduce(function (e, t) {
                    return E.Z.min(e, t.max.floor());
                  }, new E.Z("1.e+30000"))
                  .lessThan(1) ||
                  (gl.getInstance().resources.subtractResourceBatch(e),
                  this.state.levelBuilt++,
                  gl.getInstance().learning.runePresets.applyPreset(),
                  ml.resources.reassertBalances(),
                  ml.regenerateCache());
              }),
              (t.prototype.dataToUI = function () {
                var e = ce.calcBatchAll(this.getCostFormula(), ml, new E.Z(this.state.levelBuilt), ml.resources.getBatchObject()),
                  t = e.reduce(function (e, t) {
                    return E.Z.min(e, t.max.floor());
                  }, new E.Z("1.e+30000"));
                return {
                  isUnlocked: this.unlockCond(),
                  isAvailable: t.greaterThanOrEqualTo(1),
                  maxAmplifyTier: this.state.levelBuilt,
                  currentAmplifyTier: this.state.levelActive || 0,
                  speedMult: J(this.getSpeedMult()),
                  manaMult: J(this.getManaMult()),
                  cancelRuneOnChange: this.state.cancelRuneOnChange,
                  upgradeCost: gl
                    .getInstance()
                    .resources.assertEnought(e, gl.getInstance().resources.getBatchObject(), gl.getInstance().resources.getBatchBalanceObject()),
                };
              }),
              (t.prototype.preProcess = function (e) {}),
              (t.prototype.process = function (e) {}),
              (t.prototype.regenerateCache = function () {}),
              (t.prototype.reset = function () {
                this.state = { levelActive: 0, levelBuilt: 0, cancelRuneOnChange: this.state.cancelRuneOnChange || !1 };
              }),
              t
            );
          })(s),
          wi = yi.getInstance(),
          bi = [
            {
              id: o.MANA_ORB,
              name: "Better Mana Orb",
              description: "Better Mana Orb, providing 25% more mana storage",
              unlockCondition: function (e) {
                return !0;
              },
              maxLevel: 10,
              getCost:
                ((de = {}),
                (de[i.MANA] = function (e) {
                  return { A: new E.Z(10), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                de),
              getCapacityMultiplier:
                ((pe = {}),
                (pe[i.MANA] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(1.25), type: R.EXPONENTIAL };
                }),
                pe),
            },
            {
              id: o.ADD_RUNIC_TABLE,
              name: "Runic Table",
              description: "Increase amount of runes that can be learned at once by 1",
              unlockCondition: function (e) {
                return !0;
              },
              maxLevel: 1,
              getCost:
                ((fe = {}),
                (fe[i.MANA] = function (e) {
                  return { A: new E.Z(15), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                fe),
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
                ((ge = {}),
                (ge[i.MANA] = function (e) {
                  return { A: new E.Z(20), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                ge),
              getGainMultiplier:
                ((me = {}),
                (me[i.MANA] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(1.25), type: R.EXPONENTIAL };
                }),
                me),
            },
            {
              id: o.KNOWLEDGE,
              name: "Knowledge",
              description: "Unlock new rune, providing access to new resource - knowledge",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(o.ADD_RUNIC_TABLE) > 0;
              },
              maxLevel: 1,
              getCost:
                ((he = {}),
                (he[i.MANA] = function (e) {
                  return { A: new E.Z(20), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                he),
            },
            {
              id: o.RUNIC_MEMORY,
              name: "Runic Memory",
              description: "Use your magic knowledge to make rune learning 50% faster",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(o.KNOWLEDGE) > 0;
              },
              maxLevel: 12,
              getCost:
                ((Ae = {}),
                (Ae[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                Ae),
            },
            {
              id: o.EXPAND_MANA,
              name: "Expand Mana Rune",
              description: "Use your magic knowledge to learn new rune improving your mana income",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(o.KNOWLEDGE) > 0;
              },
              maxLevel: 1,
              getCost:
                ((Ee = {}),
                (Ee[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(40), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                Ee),
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
                ((ve = {}),
                (ve[i.MANA] = function (e) {
                  return { A: new E.Z(50), B: new E.Z(10), type: R.EXPONENTIAL };
                }),
                ve),
            },
            {
              id: o.EXPAND_BOOKCASES,
              name: "Expanded Bookcases",
              description: "Increase knowledge capacity by 30%",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(o.EXPAND_MAGIC_LIB) > 0;
              },
              maxLevel: 10,
              getCapacityMultiplier:
                ((ye = {}),
                (ye[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(1.3), type: R.EXPONENTIAL };
                }),
                ye),
              getCost:
                ((we = {}),
                (we[i.MANA] = function (e) {
                  return { A: new E.Z(75), B: new E.Z(10), type: R.EXPONENTIAL };
                }),
                (we[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(50), B: new E.Z(10), type: R.EXPONENTIAL };
                }),
                we),
            },
            {
              id: o.MEMORY_RUNE,
              name: "Memory Rune",
              description: "Unlock memory rune, boosting your magical and mental capacity",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(o.EXPAND_BOOKCASES) > 0;
              },
              maxLevel: 1,
              getCost:
                ((be = {}),
                (be[i.MANA] = function (e) {
                  return { A: new E.Z(80), B: new E.Z(10), type: R.EXPONENTIAL };
                }),
                (be[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(50), B: new E.Z(10), type: R.EXPONENTIAL };
                }),
                be),
            },
            {
              id: o.READING_TOOLS,
              name: "Reading Tools",
              description: "Learn how to use energetically charged magnifying glass to increase knowledge rune efficiency by 30%",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(o.EXPAND_BOOKCASES) > 0;
              },
              maxLevel: 8,
              getCost:
                ((Ie = {}),
                (Ie[i.MANA] = function (e) {
                  return { A: new E.Z(1e3), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                Ie),
              getGainMultiplier:
                ((Ce = {}),
                (Ce[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(1.3), type: R.EXPONENTIAL };
                }),
                Ce),
            },
            {
              id: o.EXPANDED_SACRIFICE,
              name: "Expanded Sacrifice",
              description: "Increase sacrificed runes gain 2 times (acts as you had twice as much runes to sacrifice)",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(o.MEMORY_RUNE) > 0;
              },
              maxLevel: 10,
              getCost:
                ((Ne = {}),
                (Ne[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(100), B: new E.Z(3), type: R.EXPONENTIAL };
                }),
                Ne),
            },
            {
              id: o.CRYSTALS,
              name: "Crystals",
              description: "Unlock crystals, that persist through rune sacrifices and can significantly contribute to your magic and learning capabilities",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(o.MEMORY_RUNE) > 0;
              },
              maxLevel: 1,
              getCost:
                ((Re = {}),
                (Re[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(120), B: new E.Z(3), type: R.EXPONENTIAL };
                }),
                Re),
            },
            {
              id: o.RUNE_MASTER,
              name: "Rune Master Rune",
              description: "Unlock rune, that helps to read other runes, reducing their XP requirements",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(o.MEMORY_RUNE) > 0;
              },
              maxLevel: 1,
              getCost:
                ((Le = {}),
                (Le[i.MANA] = function (e) {
                  return { A: new E.Z(200), B: new E.Z(10), type: R.EXPONENTIAL };
                }),
                (Le[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(150), B: new E.Z(10), type: R.EXPONENTIAL };
                }),
                Le),
            },
            {
              id: o.TICKET_OUT,
              name: "Ticket To Mages City",
              description: "Gain your access to mages city. Unlocks new game layer.",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(o.MEMORY_RUNE) > 0 && !e.city.actions.isUnlocked;
              },
              maxLevel: 1,
              getCost:
                ((Oe = {}),
                (Oe[i.MANA] = function (e) {
                  return { A: new E.Z(1e3), B: new E.Z(10), type: R.EXPONENTIAL };
                }),
                (Oe[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(300), B: new E.Z(10), type: R.EXPONENTIAL };
                }),
                Oe),
            },
            {
              id: o.BETTER_STASH,
              name: "Better Stash",
              description: "Just a stash for coins storage.Increase coin capacity by 25%",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(o.TICKET_OUT) > 0 || e.city.actions.isUnlocked;
              },
              maxLevel: 10,
              getCost:
                ((Te = {}),
                (Te[i.COINS] = function (e) {
                  return { A: new E.Z(10), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                Te),
              getCapacityMultiplier:
                ((Se = {}),
                (Se[i.COINS] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(1.25), type: R.EXPONENTIAL };
                }),
                Se),
            },
            {
              id: o.KNOWLEDGE_GENERATION,
              name: "Knowledge Generation",
              description: "Improve your knowledge about knowledge. Boost knowledge generation by 25%",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.KNOWLEDGE_UPGRADES) > 0 && e.learning.runeUpgrades.getUpgradeLevel(o.KNOWLEDGE) > 0;
              },
              maxLevel: 10,
              getCost:
                ((Me = {}),
                (Me[i.MANA] = function (e) {
                  return { A: new E.Z(1e4), B: new E.Z(4), type: R.EXPONENTIAL };
                }),
                (Me[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(5e3), B: new E.Z(4), type: R.EXPONENTIAL };
                }),
                Me),
              getGainMultiplier:
                ((Ze = {}),
                (Ze[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(1.25), type: R.EXPONENTIAL };
                }),
                Ze),
            },
            {
              id: o.BETTER_ORB,
              name: "Better Orb",
              description: "Wizard orb learning bonus is larger by 20% per active level",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.KNOWLEDGE_UPGRADES) > 0 && e.learning.runeUpgrades.getUpgradeLevel(o.KNOWLEDGE) > 0;
              },
              maxLevel: 10,
              getCost:
                ((Pe = {}),
                (Pe[i.MANA] = function (e) {
                  return { A: new E.Z(1e4), B: new E.Z(5), type: R.EXPONENTIAL };
                }),
                (Pe[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(5e3), B: new E.Z(5), type: R.EXPONENTIAL };
                }),
                Pe),
              getGainMultiplier: {},
            },
            {
              id: o.RUNIC_MEMORY2,
              name: "Runic Memory II",
              description: "Use your magic knowledge to make rune learning even 50% more efficient",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(o.RUNIC_MEMORY) > 11;
              },
              maxLevel: 12,
              getCost:
                ((_e = {}),
                (_e[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(2e5), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                _e),
            },
            {
              id: o.RUNIC_TABLE_ENHANCEMENT,
              name: "Runic Table Enhancement",
              description: "Improve your runes table to make rune learning 200% faster",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.BASIC_WIZARDRY) > 0;
              },
              maxLevel: 10,
              getCost:
                ((Ge = {}),
                (Ge[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(1e8), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                Ge),
            },
            {
              id: o.ORB_MANIPULATIONS,
              name: "Enchanted Orb",
              description: "Make your Wizard Orb 20% better",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.BASIC_WIZARDRY) > 0;
              },
              maxLevel: 10,
              getCost:
                ((Be = {}),
                (Be[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(1e8), B: new E.Z(4), type: R.EXPONENTIAL };
                }),
                (Be[i.COINS] = function (e) {
                  return { A: new E.Z(1e3), B: new E.Z(4), type: R.EXPONENTIAL };
                }),
                Be),
            },
            {
              id: o.RUNIC_SPLASH,
              name: "Runic Splash",
              description: "Use spark to reveal more runic energy on sacrifice. Increase sacrifice level twice",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.SPARK_GENERATION) > 0;
              },
              maxLevel: 12,
              getCost:
                ((De = {}),
                (De[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(2e8), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (De[i.SPARK] = function (e) {
                  return { A: new E.Z(4), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                De),
            },
          ],
          Ii = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
              function i() {
                this.constructor = t;
              }
              e(t, n), (t.prototype = null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
            };
          })(),
          Ci = function () {
            return (
              (Ci =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                  return e;
                }),
              Ci.apply(this, arguments)
            );
          },
          Ni = (function (e) {
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
                console.log("do set priority", e), (t.autoPriorities[e.id] = Math.max(null !== (n = e.priority) && void 0 !== n ? n : 0, 0));
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
              Ii(t, e),
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
                            return Ci({}, e);
                          })) || []),
                    void (this.autoPriorities = {})
                  );
                (this.upgrades =
                  (null === (t = null == e ? void 0 : e.upgrades) || void 0 === t
                    ? void 0
                    : t.map(function (e) {
                        return Ci({}, e);
                      })) || []),
                  (this.autoPriorities = null == e ? void 0 : e.priorities),
                  (this.viewType = e.viewType);
              }),
              (t.prototype.exportData = function () {
                return {
                  upgrades: this.upgrades.map(function (e) {
                    return Ci({}, e);
                  }),
                  priorities: this.autoPriorities,
                  viewType: this.viewType,
                };
              }),
              (t.prototype.regenerateCache = function () {
                var e = this;
                this.cachedUpgrades = bi.map(function (t) {
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
                    var n = bi.find(function (e) {
                      return e.id === t.id;
                    });
                    if (!n) return t;
                    var r = e.upgrades.find(function (e) {
                      return e.id === n.id;
                    });
                    r || ((r = { id: n.id, level: 0 }), e.upgrades.push(r));
                    var o = ce.calcBatchAll(n.getCost, gl.getInstance(), new E.Z(r.level), gl.getInstance().resources.getBatchObject()),
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
                      gl.getInstance().resources.getResourceCap(i.MANA).greaterThanOrEqualTo(10) &&
                        r.level <= 0 &&
                        ml.newNotifications.registerNotification("learning:runes:upgrade:".concat(n.id)),
                      Ci(Ci({}, t), {
                        etaNum: a,
                        isAvailable: u.greaterThanOrEqualTo(1),
                        cost: gl
                          .getInstance()
                          .resources.assertEnought(o, gl.getInstance().resources.getBatchObject(), gl.getInstance().resources.getBatchBalanceObject()),
                        progress: u.lessThan(1) ? (100 * u.toNumber()).toPrecision(3) : "100",
                        priority: e.autoPriorities[t.id] || 0,
                      })
                    );
                  });
              }),
              (t.prototype.getAutoupgradeTick = function () {
                return 10 / Math.pow(1.2, gl.getInstance().learning.crystals.getCrystalLevel("lazy").toNumber());
              }),
              (t.prototype.dataToUI = function () {
                var e;
                return {
                  list: this.dataFromCache(),
                  viewType: null !== (e = this.viewType) && void 0 !== e ? e : 0,
                  isAutoupgradeAllowed: this.isAutomationUnlocked(),
                  autoupgradeTickMax: I(this.getAutoupgradeTick()),
                  autoupgradeProgress: this.autoTick / this.getAutoupgradeTick(),
                  isUnlocked: gl.getInstance().resources.getResourceCap(i.MANA).greaterThanOrEqualTo(10),
                };
              }),
              (t.prototype.isAutomationUnlocked = function () {
                return ml.learning.crystals.getCrystalLevel("lazy").greaterThan(0);
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
                var i = ce.calcBatchAll(e.getCost, gl.getInstance(), new E.Z(n.level + t), gl.getInstance().resources.getBatchObject()),
                  r = i.reduce(function (e, t) {
                    return e && !t.isBlocked;
                  }, !0),
                  o = i.reduce(function (e, t) {
                    return Math.max(e, t.eta);
                  }, 0),
                  a = i.reduce(function (e, t) {
                    return E.Z.min(e, t.max);
                  }, new E.Z("1.e+30000")),
                  u = e.unlockCondition(ml);
                return {
                  id: e.id,
                  name: e.name,
                  description: e.description,
                  isUnlocked: u,
                  isAvailable: a.greaterThanOrEqualTo(1),
                  cost: gl
                    .getInstance()
                    .resources.assertEnought(i, gl.getInstance().resources.getBatchObject(), gl.getInstance().resources.getBatchBalanceObject()),
                  progress: a.lessThan(1) ? (100 * a.toNumber()).toPrecision(3) : "100",
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
                var n = bi.find(function (t) {
                  return t.id === e;
                });
                if ((console.log("[upgrade] db", n), n)) {
                  var i = this.upgrades.findIndex(function (t) {
                    return t.id === e;
                  });
                  if (i < 0) (i = this.upgrades.length), this.upgrades.push({ id: e, level: 0 });
                  else if (n.maxLevel && this.upgrades[i].level >= n.maxLevel) return;
                  var r = ce
                    .calcBatchAll(n.getCost, gl.getInstance(), new E.Z(this.upgrades[i].level), gl.getInstance().resources.getBatchObject(), new E.Z(t))
                    .reduce(function (e, t) {
                      return E.Z.min(e, t.max.floor());
                    }, new E.Z("1.e+30000"));
                  if ((console.log("[upgrade] mx: ", r.toNumber()), !r.lessThan(1))) {
                    var o = E.Z.min(t, r),
                      a = ce.calcBatchAll(n.getCost, gl.getInstance(), new E.Z(this.upgrades[i].level), gl.getInstance().resources.getBatchObject(), o);
                    return (
                      (this.upgrades[i].level = this.upgrades[i].level + o.toNumber()),
                      console.log("costs: ", a, o.toNumber()),
                      gl.getInstance().resources.subtractResourceBatch(a),
                      gl.getInstance().learning.runePresets.applyPreset(),
                      ml.resources.reassertBalances(),
                      ml.regenerateCache(),
                      !0
                    );
                  }
                }
              }),
              (t.prototype.getGain = function (e) {
                var t = bi.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getGain) || void 0 === n ? void 0 : n[e]);
                  }),
                  n = [];
                return (
                  this.upgrades.forEach(function (i) {
                    var r = t.find(function (e) {
                      return e.id === i.id;
                    });
                    if (r && r.getGain) {
                      var o = ce.calculate(ml, r.getGain[e], new E.Z(i.level));
                      n.push({ label: "Upgrade: ".concat(r.name), value: o, id: "upgrade-".concat(r.id), category: "Upgrades" });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getGainMultiplier = function (e) {
                var t = bi.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getGainMultiplier) || void 0 === n ? void 0 : n[e]);
                  }),
                  n = [];
                return (
                  this.upgrades.forEach(function (i) {
                    var r = t.find(function (e) {
                      return e.id === i.id;
                    });
                    if (r && r.getGainMultiplier) {
                      var o = ce.calculate(ml, r.getGainMultiplier[e], new E.Z(i.level));
                      o && !o.eq(1) && n.push({ label: "Upgrade: ".concat(r.name), value: o, id: "upgrade-".concat(r.id), category: "Upgrades" });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getCraftingMultiplier = function () {
                var e = bi.filter(function (e) {
                    return !!e.getCraftingMultiplier;
                  }),
                  t = [];
                return (
                  this.upgrades.forEach(function (n) {
                    var i = e.find(function (e) {
                      return e.id === n.id;
                    });
                    if (i && i.getCraftingMultiplier) {
                      var r = ce.calculate(ml, i.getCraftingMultiplier, new E.Z(n.level)),
                        o = r;
                      r && t.push({ label: "Upgrade: ".concat(i.name), value: o, id: "upgrade-".concat(i.id), category: "Upgrades" });
                    }
                  }, 0),
                  t
                );
              }),
              (t.prototype.getCapacity = function (e) {
                var t = bi.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getCapacityEffect) || void 0 === n ? void 0 : n[e]);
                  }),
                  n = [];
                return (
                  this.upgrades.forEach(function (i) {
                    var r = t.find(function (e) {
                      return e.id === i.id;
                    });
                    if (r && r.getCapacityEffect) {
                      var o = ce.calculate(ml, r.getCapacityEffect[e], new E.Z(i.level));
                      n.push({ label: "Upgrade: ".concat(r.name), value: o, id: "upgrade-".concat(r.id), category: "Upgrades" });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getCapacityMult = function (e) {
                var t = bi.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getCapacityMultiplier) || void 0 === n ? void 0 : n[e]);
                  }),
                  n = [];
                return (
                  this.upgrades.forEach(function (i) {
                    var r = t.find(function (e) {
                      return e.id === i.id;
                    });
                    if (r && r.getCapacityMultiplier) {
                      var o = ce.calculate(ml, r.getCapacityMultiplier[e], new E.Z(i.level));
                      o && n.push({ label: "Upgrade: ".concat(r.name), value: o, id: "upgrade-".concat(r.id), category: "Upgrades" });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.process = function (e) {
                if (gl.getInstance().settings.turnOnAutoupgrade && !gl.getInstance().learning.crystals.getCrystalLevel("lazy").lessThanOrEqualTo(0)) {
                  var t = Math.max(this.getAutoupgradeTick(), 3 * e);
                  if (((this.autoTick += e), !(this.autoTick < t))) {
                    var n = 1;
                    t < 3 * e && (n = Math.max(1, Math.round((3 * e) / t))), (this.autoTick = 0);
                    var i = this.dataFromCache()
                      .filter(function (e) {
                        return e.isUnlocked && !e.isMaxedOut && e.isAvailable && e.priority > 0;
                      })
                      .sort(function (e, t) {
                        return (e.priority || 10) - (t.priority || 10);
                      });
                    i.length ? this.doUpgrade(i[0].id, n) : ml.learning.wizardOrb.doBuild();
                  }
                }
              }),
              (t.prototype.reset = function () {
                this.upgrades = [];
              }),
              t
            );
          })(s),
          Ri = Ni.getInstance(),
          Li = [
            {
              id: "basic",
              name: "Source of Mana",
              description: "Provides some static bonus to your mana cap and generation",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(o.CRYSTALS) > 0;
              },
              getGain:
                ((Ue = {}),
                (Ue[i.MANA] = function (e) {
                  return { A: new E.Z(0.4), B: new E.Z(0), type: R.LINEAR };
                }),
                Ue),
              getCap:
                ((ke = {}),
                (ke[i.MANA] = function (e) {
                  return { A: new E.Z(4), B: new E.Z(0), type: R.LINEAR };
                }),
                ke),
              getCost:
                ((xe = {}),
                (xe[i.MANA] = function (e) {
                  return { A: new E.Z(200), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (xe[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(100), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                xe),
            },
            {
              id: "wise",
              name: "Wise Crystal",
              description: "Consists of knowledge...",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(o.CRYSTALS) > 0;
              },
              getMultiplier:
                ((He = {}),
                (He[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                He),
              getCapMultiplier:
                ((We = {}),
                (We[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                We),
              getCost:
                ((Xe = {}),
                (Xe[i.MANA] = function (e) {
                  return { A: new E.Z(500), B: new E.Z(4), type: R.EXPONENTIAL };
                }),
                (Xe[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(200), B: new E.Z(4), type: R.EXPONENTIAL };
                }),
                Xe),
            },
            {
              id: "lazy",
              name: "Lazy Crystal",
              description: "Unlocks upgrades automation",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(o.CRYSTALS) > 0 && e.city.academyUpgrades.getUpgradeLevel(a.LAZY_CRYSTAL) > 0;
              },
              getCost:
                ((qe = {}),
                (qe[i.MANA] = function (e) {
                  return { A: new E.Z(1e4), B: new E.Z(4), type: R.EXPONENTIAL };
                }),
                (qe[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(2e3), B: new E.Z(4), type: R.EXPONENTIAL };
                }),
                qe),
            },
            {
              id: "gold",
              name: "Gold Crystal",
              description: "Boosts gold cap",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(o.CRYSTALS) > 0 && e.city.academyUpgrades.getUpgradeLevel(a.GOLD_CRYSTAL) > 0;
              },
              getCost:
                ((Fe = {}),
                (Fe[i.MANA] = function (e) {
                  return { A: new E.Z(1e4), B: new E.Z(4), type: R.EXPONENTIAL };
                }),
                (Fe[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(2e3), B: new E.Z(4), type: R.EXPONENTIAL };
                }),
                Fe),
              getCapMultiplier:
                ((Ye = {}),
                (Ye[i.COINS] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(1.5), type: R.EXPONENTIAL };
                }),
                Ye),
            },
            {
              id: "mana-crystal",
              name: "Mana Crystal",
              description: "Boosts mana cap",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(o.CRYSTALS) > 0 && e.city.academyUpgrades.getUpgradeLevel(a.MANA_CRYSTAL) > 0;
              },
              getCost:
                ((Ke = {}),
                (Ke[i.MANA] = function (e) {
                  return { A: new E.Z(1e4), B: new E.Z(4), type: R.EXPONENTIAL };
                }),
                (Ke[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(2e5), B: new E.Z(4), type: R.EXPONENTIAL };
                }),
                Ke),
              getCapMultiplier:
                ((je = {}),
                (je[i.MANA] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                je),
            },
            {
              id: "wellness-crystal",
              name: "Wellness Crystal",
              description: "Generates some coins passively",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(o.CRYSTALS) > 0 && e.city.academyUpgrades.getUpgradeLevel(a.WELLNESS_CRYSTAL) > 0;
              },
              getCost:
                ((Ve = {}),
                (Ve[i.MANA] = function (e) {
                  return { A: new E.Z("1.e+9"), B: new E.Z(4), type: R.EXPONENTIAL };
                }),
                (Ve[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z("4.e+9"), B: new E.Z(4), type: R.EXPONENTIAL };
                }),
                Ve),
              getGain:
                ((ze = {}),
                (ze[i.COINS] = function (e) {
                  return { A: new E.Z(1.4).pow(e.learning.crystals.getCrystalLevel("wellness-crystal")), B: new E.Z(0), type: R.LINEAR };
                }),
                ze),
            },
            {
              id: "protection-crystal",
              name: "Protection Crystal",
              description: "Amplifying your armor by creating invisible shield around you",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(o.CRYSTALS) > 0 && e.city.academyUpgrades.getUpgradeLevel(a.PROTECTION_CRYSTAL) > 0;
              },
              getCost:
                ((Je = {}),
                (Je[i.MANA] = function (e) {
                  return { A: new E.Z("1.e+15"), B: new E.Z(4), type: R.EXPONENTIAL };
                }),
                (Je[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z("1.e+18"), B: new E.Z(4), type: R.EXPONENTIAL };
                }),
                Je),
              getBattleAttributeMultiplier:
                ((Qe = {}),
                (Qe[l.ARMOR] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(1.25), type: R.EXPONENTIAL };
                }),
                Qe),
            },
          ],
          Oi = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
              function i() {
                this.constructor = t;
              }
              e(t, n), (t.prototype = null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
            };
          })(),
          Ti = function () {
            return (
              (Ti =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                  return e;
                }),
              Ti.apply(this, arguments)
            );
          },
          Si = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.crystals = []),
                t.workDispatcher.on("[crystal] do upgrade", function (e) {
                  console.log("do upgrade crystal", e), t.purchaseCrystal(e.id);
                }),
                t
              );
            }
            return (
              Oi(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                this.crystals =
                  (null == e
                    ? void 0
                    : e.map(function (e) {
                        return Ti(Ti({}, e), { level: new E.Z(e.level) });
                      })) || [];
              }),
              (t.prototype.exportData = function () {
                return this.crystals.map(function (e) {
                  return Ti(Ti({}, e), { level: e.level.toPrecision(18) });
                });
              }),
              (t.prototype.dataToUI = function () {
                var e = this,
                  t = Li.map(function (t) {
                    return e.processToUI(t);
                  });
                return {
                  isUnlocked:
                    ml.learning.runeUpgrades.getUpgradeLevel(o.CRYSTALS) > 0 ||
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
                t || ((t = { id: e.id, level: new E.Z(0) }), this.crystals.push(t));
                var n = e.getCost ? ce.calcBatchAll(e.getCost, gl.getInstance(), t.level, gl.getInstance().resources.getBatchObject(), new E.Z(1)) : [],
                  i = e.getGain ? ce.calcBatch(e.getGain, gl.getInstance(), t.level.plus(1)) : [],
                  r = e.getMultiplier ? ce.calcBatch(e.getMultiplier, gl.getInstance(), t.level.plus(1)) : [],
                  o = e.getCap ? ce.calcBatch(e.getCap, gl.getInstance(), t.level.plus(1)) : [],
                  a = e.getCapMultiplier ? ce.calcBatch(e.getCapMultiplier, gl.getInstance(), t.level.plus(1)) : [],
                  u = e.getBattleAttributeMultiplier ? ce.calcBatch(e.getBattleAttributeMultiplier, gl.getInstance(), t.level.plus(1)) : [],
                  s = n.reduce(function (e, t) {
                    return E.Z.min(e, t.max.floor());
                  }, new E.Z("1.e+30000")),
                  c = n.reduce(function (e, t) {
                    return e && !t.isBlocked;
                  }, !0),
                  l = n.reduce(function (e, t) {
                    return Math.max(e, t.eta);
                  }, 0),
                  d = e.unlockCondition(ml) || t.level.greaterThan(0);
                return (
                  d && t.level.lessThanOrEqualTo(0) && ml.newNotifications.registerNotification("learning:crystals:crystal:".concat(e.id)),
                  {
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    isUnlocked: d,
                    isAvailable: s.greaterThanOrEqualTo(1),
                    cost: gl
                      .getInstance()
                      .resources.assertEnought(n, gl.getInstance().resources.getBatchObject(), gl.getInstance().resources.getBatchBalanceObject()),
                    gain: i.map(function (e) {
                      return Ti(Ti({}, e), { amountValue: e.amount.toString(), amount: J(e.amount) });
                    }),
                    progress: E.Z.min(1, s.mul(100)).toNumber().toPrecision(3),
                    isBlocked: !c,
                    etaNum: l,
                    level: ee(t.level, 2),
                    gainMult: r.map(function (e) {
                      return Ti(Ti({}, e), { amountValue: e.amount.toString(), amount: J(e.amount) });
                    }),
                    cap: o.map(function (e) {
                      return Ti(Ti({}, e), { amountValue: e.amount.toString(), amount: J(e.amount) });
                    }),
                    capMult: a.map(function (e) {
                      return Ti(Ti({}, e), { amountValue: e.amount.toString(), amount: "x".concat(J(e.amount)) });
                    }),
                    battleAttrMult: u.map(function (e) {
                      return Ti(Ti({}, e), { amountValue: e.amount.toString(), amount: "x".concat(J(e.amount)) });
                    }),
                  }
                );
              }),
              (t.prototype.purchaseCrystal = function (e) {
                var t = Li.find(function (t) {
                  return t.id === e;
                });
                if (t) {
                  var n = this.crystals.findIndex(function (t) {
                    return t.id === e;
                  });
                  n < 0 && ((n = this.crystals.length), this.crystals.push({ id: e, level: new E.Z(0) }));
                  var i = ce.calcBatchAll(t.getCost, gl.getInstance(), new E.Z(this.crystals[n].level), gl.getInstance().resources.getBatchObject()),
                    r = i.reduce(function (e, t) {
                      return E.Z.min(e, t.max.floor());
                    }, new E.Z("1.e+30000"));
                  console.log("[upgrade] mx: ", r.toNumber()),
                    r.lessThan(1) ||
                      ((this.crystals[n].level = this.crystals[n].level.plus(1)),
                      gl.getInstance().resources.subtractResourceBatch(i),
                      console.log("costs: ", i),
                      ml.regenerateCache(),
                      ml.resources.reassertBalances());
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
              (t.prototype.process = function (e) {}),
              (t.prototype.getResourceBeingStored = function (e) {
                var t = Li.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getCap) || void 0 === n ? void 0 : n[e]);
                  }),
                  n = [];
                return (
                  this.crystals.forEach(function (i) {
                    var r = t.find(function (e) {
                      return e.id === i.id;
                    });
                    if (r && r.getCap) {
                      var o = ce.calculate(ml, r.getCap[e], i.level);
                      o.equals(0) || n.push({ label: "Crystal: ".concat(r.name), value: o, id: "crystal-".concat(r.id), category: "Crystals" });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getResourceBeingStoredMultiplier = function (e) {
                var t = Li.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getCapMultiplier) || void 0 === n ? void 0 : n[e]);
                  }),
                  n = [];
                return (
                  this.crystals.forEach(function (i) {
                    var r = t.find(function (e) {
                      return e.id === i.id;
                    });
                    if (r && r.getCapMultiplier) {
                      var o = ce.calculate(ml, r.getCapMultiplier[e], i.level);
                      o.equals(1) || n.push({ label: "Crystal: ".concat(r.name), value: o, id: "crystal-".concat(r.id), category: "Crystals" });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getMultiplier = function (e) {
                var t = Li.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getMultiplier) || void 0 === n ? void 0 : n[e]);
                  }),
                  n = [];
                return (
                  this.crystals.forEach(function (i) {
                    var r = t.find(function (e) {
                      return e.id === i.id;
                    });
                    if (r && r.getMultiplier) {
                      var o = ce.calculate(ml, r.getMultiplier[e], i.level);
                      o.equals(1) || n.push({ label: "Crystal: ".concat(r.name), value: o, id: "crystal-".concat(r.id), category: "Crystals" });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getResourceGain = function (e) {
                var t = Li.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getGain) || void 0 === n ? void 0 : n[e]);
                  }),
                  n = [];
                return (
                  this.crystals.forEach(function (i) {
                    var r = t.find(function (e) {
                      return e.id === i.id;
                    });
                    if (r && r.getGain) {
                      var o = ce.calculate(ml, r.getGain[e], i.level);
                      o.equals(0) || n.push({ label: "Crystal: ".concat(r.name), value: o, id: "crystal-".concat(r.id), category: "Crystals" });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getAttributeGained = function (e) {
                var t = Li.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getAttribute) || void 0 === n ? void 0 : n[e]);
                  }),
                  n = [];
                return (
                  this.crystals.forEach(function (i) {
                    var r = t.find(function (e) {
                      return e.id === i.id;
                    });
                    if (r && r.getAttribute) {
                      var o = ce.calculate(ml, r.getAttribute[e], i.level);
                      n.push({ label: "Crystal: ".concat(r.name), value: o, id: "crystal-".concat(r.id), category: "Crystals" });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getBattleAttributeMultiplier = function (e) {
                var t = Li.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getBattleAttributeMultiplier) || void 0 === n ? void 0 : n[e]);
                  }),
                  n = [];
                return (
                  this.crystals.forEach(function (i) {
                    var r = t.find(function (e) {
                      return e.id === i.id;
                    });
                    if (r && r.getBattleAttributeMultiplier) {
                      var o = ce.calculate(ml, r.getBattleAttributeMultiplier[e], i.level);
                      n.push({ label: "Crystal: ".concat(r.name), value: o, id: "crystal-".concat(r.id), category: "Crystals" });
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
          Mi = Si.getInstance(),
          Zi = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
              function i() {
                this.constructor = t;
              }
              e(t, n), (t.prototype = null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
            };
          })(),
          Pi = function () {
            return (
              (Pi =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                  return e;
                }),
              Pi.apply(this, arguments)
            );
          },
          _i = (function (e) {
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
              Zi(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                (this.presets = (null == e ? void 0 : e.list) || []), (this.active = null == e ? void 0 : e.active);
              }),
              (t.prototype.exportData = function () {
                return { list: this.presets, active: this.active };
              }),
              (t.prototype.processListToUI = function (e) {
                var t = oe
                  .filter(function (e) {
                    return (
                      e.unlockCondition(ml) ||
                      ml.learning.runes.runes.find(function (t) {
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
                  isUnlocked: gl.getInstance().statistics.stats.numRuneResets > 0,
                  list: this.presets.map(function (t) {
                    return e.processListToUI(t);
                  }),
                  active: this.active ? { id: this.active, name: this.getActiveName() } : void 0,
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
                } else (e = Pi(Pi({}, e), { id: "".concat(Math.random()) })), this.presets.push(e);
              }),
              (t.prototype.deletePreset = function (e) {
                var t = this.presets.findIndex(function (t) {
                  return t.id === e;
                });
                t > -1 && this.presets.splice(t, 1), this.active === e && (this.active = void 0);
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
                if (ml.statistics.stats.numRuneResets) {
                  var e = this.presets.find(function (e) {
                    return e.isDefault;
                  });
                  e && ((this.active = e.id), this.applyPreset());
                }
              }),
              (t.prototype.getActiveName = function () {
                var e = this;
                if (this.active && ml.statistics.stats.numRuneResets) {
                  var t = this.presets.find(function (t) {
                    return t.id === e.active;
                  });
                  if (t) return t.name;
                }
              }),
              (t.prototype.applyPreset = function () {
                var e = this;
                if (this.active && ml.statistics.stats.numRuneResets) {
                  var t = this.presets.find(function (t) {
                    return t.id === e.active;
                  });
                  if (t) {
                    ml.learning.runes.applyBatch(
                      t.runes.map(function (e) {
                        return e.id;
                      })
                    );
                    var n = ml.learning.wizardOrb.state.levelActive;
                    (ml.learning.wizardOrb.state.levelActive = Math.min(ml.learning.wizardOrb.state.levelBuilt, t.orbLevel)),
                      n !== ml.learning.wizardOrb.state.levelActive &&
                        ml.learning.wizardOrb.state.cancelRuneOnChange &&
                        (console.log("rescheduling: ", n, ml.learning.wizardOrb.state.levelActive), ml.learning.runes.rescheduleRunes());
                  }
                }
              }),
              t
            );
          })(s).getInstance(),
          Gi = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
              function i() {
                this.constructor = t;
              }
              e(t, n), (t.prototype = null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
            };
          })(),
          Bi = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (t.runes = Ei), (t.wizardOrb = wi), (t.runeUpgrades = Ri), (t.crystals = Mi), (t.runePresets = _i), t;
            }
            return (
              Gi(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                this.runes.importData(null == e ? void 0 : e.runes),
                  this.wizardOrb.importData(null == e ? void 0 : e.wizardOrb),
                  this.runeUpgrades.importData(null == e ? void 0 : e.runeUpgrades),
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
                this.runes.process(e), this.runeUpgrades.process(e);
              }),
              (t.prototype.regenerateCache = function () {
                this.runes.regenerateCache(), this.runeUpgrades.regenerateCache();
              }),
              (t.prototype.reset = function () {
                this.runes.reset();
              }),
              t
            );
          })(s).getInstance(),
          Di = function (e, t) {
            var n = {};
            for (var i in e) n[i] = t(e[i], i);
            return n;
          },
          Ui = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
              function i() {
                this.constructor = t;
              }
              e(t, n), (t.prototype = null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
            };
          })(),
          ki = function () {
            return (
              (ki =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                  return e;
                }),
              ki.apply(this, arguments)
            );
          },
          xi = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (t.attributesEffects = {}), (t.stored = {}), (t.attributesBreakdowns = {}), t;
            }
            return (
              Ui(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                this.stored = Di(e.stored, function (e) {
                  return new E.Z(e);
                });
              }),
              (t.prototype.exportData = function () {
                return {
                  stored: Di(this.stored, function (e) {
                    return e.toPrecision(18);
                  }),
                };
              }),
              (t.prototype.dataToUI = function () {
                var e = this;
                return {
                  attributes: ae.map(function (t) {
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
                      f,
                      g =
                        (((t = {})[c.RUNE_READING] = {
                          linear: [{ id: "basic", label: "Basic", value: new E.Z(1), category: "Basic" }],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[c.RUNE_MASTERY] = {
                          linear: [{ id: "basic", label: "Basic", value: new E.Z(1), category: "Basic" }],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[c.WILLPOWER] = { linear: [{ id: "basic", label: "Basic", value: new E.Z(1), category: "Basic" }], multiplier: [], consumption: [] }),
                        (t[c.SANITY] = { linear: [{ id: "basic", label: "Basic", value: new E.Z(1), category: "Base" }], multiplier: [], consumption: [] }),
                        (t[c.STRENGTH] = { linear: [{ id: "basic", label: "Basic", value: new E.Z(1), category: "Base" }], multiplier: [], consumption: [] }),
                        (t[c.VITALITY] = { linear: [{ id: "basic", label: "Basic", value: new E.Z(1), category: "Base" }], multiplier: [], consumption: [] }),
                        (t[c.AGILITY] = { linear: [{ id: "basic", label: "Basic", value: new E.Z(1), category: "Base" }], multiplier: [], consumption: [] }),
                        (t[c.MAGIC_KNOWLEDGE] = {
                          linear: [{ id: "basic", label: "Basic", value: new E.Z(1), category: "Base" }],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[c.REST_EFFICIENCY] = {
                          linear: [{ id: "basic", label: "Basic", value: new E.Z(1), category: "Base" }],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[c.CONJURATION_LORE] = {
                          linear: [{ id: "basic", label: "Basic", value: new E.Z(1), category: "Base" }],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[c.STAMINA] = { linear: [{ id: "basic", label: "Basic", value: new E.Z(1), category: "Base" }], multiplier: [], consumption: [] }),
                        t);
                    for (var m in g)
                      (n = g[m].linear).push.apply(n, ml.learning.runes.getAttributeGained(m)),
                        (i = g[m].multiplier).push.apply(i, ml.learning.runes.getAttributeMultiplier(m)),
                        (r = g[m].linear).push.apply(r, ml.city.actions.getAttributeProduced(m)),
                        (o = g[m].multiplier).push.apply(o, ml.city.actions.getAttributeMultiplier(m)),
                        (a = g[m].linear).push.apply(a, ml.construction.structures.getAttributeProduced(m)),
                        (u = g[m].multiplier).push.apply(u, ml.construction.structures.getAttributeMultiplier(m)),
                        (s = g[m].linear).push.apply(s, ml.achievements.getAttributeGain(m)),
                        (l = g[m].multiplier).push.apply(l, ml.achievements.getAttributeMultiplier(m)),
                        (d = g[m].multiplier).push.apply(d, ml.city.mercenaries.getAttributeMultiplier(m)),
                        (p = g[m].linear).push.apply(p, ml.battle.battleItems.getAttributeProduced(m)),
                        (f = g[m].multiplier).push.apply(f, ml.battle.battleItems.getAttributeMultiplier(m));
                    return g;
                  })(),
                  n = {};
                ae.forEach(function (i) {
                  var r, o, a;
                  if (i.unlockCondition(ml)) {
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
                          return ki(ki({}, e), { value: "+".concat(e.value.toPrecision(4)) });
                        })),
                      (n[i.id].multiplier = t[i.id].multiplier
                        .filter(function (e) {
                          return 1 !== e.value;
                        })
                        .map(function (e) {
                          return ki(ki({}, e), { value: "x".concat(e.value.toPrecision(4)) });
                        })),
                      (n[i.id].consumption = t[i.id].consumption
                        .filter(function (e) {
                          return e.value;
                        })
                        .map(function (e) {
                          return ki(ki({}, e), { value: "-".concat(e.value.toPrecision(4)) });
                        }));
                  }
                }),
                  (this.attributesBreakdowns = n);
              }),
              (t.prototype.processToUI = function (e) {
                var t,
                  n,
                  i = e.unlockCondition(ml);
                return {
                  id: e.id,
                  name: e.name,
                  isUnlocked: i,
                  amount: J(null !== (t = this.attributesEffects[e.id]) && void 0 !== t ? t : new E.Z(0)),
                  breakdown: null !== (n = this.attributesBreakdowns[e.id]) && void 0 !== n ? n : { income: [], multiplier: [], consumption: [] },
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
                this.stored[e] || (this.stored[e] = null === (n = this.stored[e]) || void 0 === n ? void 0 : n.plus(t));
              }),
              (t.prototype.reset = function () {
                (this.attributesBreakdowns = {}), (this.attributesEffects = {});
              }),
              t
            );
          })(s),
          Hi = xi.getInstance(),
          Wi = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
              function i() {
                this.constructor = t;
              }
              e(t, n), (t.prototype = null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
            };
          })(),
          Xi = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (t.attributes = Hi), t;
            }
            return (
              Wi(t, e),
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
            (e.EVOCATION_TRAINING = "evocation_training");
        })($e || ($e = {}));
        var qi,
          Fi,
          Yi,
          Ki,
          ji,
          Vi,
          zi,
          Ji,
          Qi,
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
          Ar,
          Er,
          vr,
          yr,
          wr,
          br,
          Ir,
          Cr,
          Nr,
          Rr,
          Lr,
          Or,
          Tr,
          Sr,
          Mr,
          Zr,
          Pr,
          _r,
          Gr,
          Br,
          Dr,
          Ur,
          kr,
          xr,
          Hr,
          Wr,
          Xr,
          qr,
          Fr,
          Yr,
          Kr,
          jr,
          Vr,
          zr,
          Jr,
          Qr,
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
          go = [
            {
              id: $e.CLEAN_STREETS,
              name: "Clean Streets",
              description: "",
              unlockCondition: function (e) {
                return !0;
              },
              effortRequired: new E.Z(3),
              attributesEffortEffect: ((et = {}), (et[c.STRENGTH] = 1), et),
              tags: ["physical", "actions", "coins"],
              baseResourcePerCast: ((tt = {}), (tt[i.COINS] = new E.Z(0.1)), tt),
              baseCostPerCast: ((nt = {}), (nt[i.ENERGY] = new E.Z(0.5)), nt),
              xpGain: new E.Z("5"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: $e.DIG_CHANNELS,
              name: "Dig Channels",
              description: "",
              unlockCondition: function (e) {
                return e.personage.attributes.getAttribute(c.STRENGTH).greaterThan(10);
              },
              effortRequired: new E.Z(50),
              attributesEffortEffect: ((it = {}), (it[c.STRENGTH] = 1), it),
              tags: ["physical", "actions", "coins"],
              baseResourcePerCast: ((rt = {}), (rt[i.COINS] = new E.Z(0.6)), rt),
              baseCostPerCast: ((ot = {}), (ot[i.ENERGY] = new E.Z(1.5)), ot),
              xpGain: new E.Z("100"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: $e.CARE_BAGS,
              name: "Carry Bags",
              description: "",
              unlockCondition: function (e) {
                return e.personage.attributes.getAttribute(c.STRENGTH).greaterThan(1e3);
              },
              effortRequired: new E.Z(500),
              attributesEffortEffect: ((at = {}), (at[c.STRENGTH] = 1), at),
              tags: ["physical", "actions", "coins"],
              baseResourcePerCast: ((ut = {}), (ut[i.COINS] = new E.Z(4)), ut),
              baseCostPerCast: ((st = {}), (st[i.ENERGY] = new E.Z(5)), st),
              xpGain: new E.Z("1000"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: $e.LABOUR,
              name: "Labour",
              description: "",
              unlockCondition: function (e) {
                return e.personage.attributes.getAttribute(c.STRENGTH).greaterThan(1e5);
              },
              effortRequired: new E.Z(5e3),
              attributesEffortEffect: ((ct = {}), (ct[c.STRENGTH] = 1), ct),
              tags: ["physical", "actions", "coins"],
              baseResourcePerCast: ((lt = {}), (lt[i.COINS] = new E.Z(32)), lt),
              baseCostPerCast: ((dt = {}), (dt[i.ENERGY] = new E.Z(15)), dt),
              xpGain: new E.Z("10000"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: $e.FARMER,
              name: "Farmer",
              description: "",
              unlockCondition: function (e) {
                return e.personage.attributes.getAttribute(c.STRENGTH).greaterThan("1.e+8");
              },
              effortRequired: new E.Z(5e4),
              attributesEffortEffect: ((pt = {}), (pt[c.STRENGTH] = 1), pt),
              tags: ["physical", "actions", "coins"],
              baseResourcePerCast: ((ft = {}), (ft[i.COINS] = new E.Z(160)), ft),
              baseCostPerCast: ((gt = {}), (gt[i.ENERGY] = new E.Z(50)), gt),
              xpGain: new E.Z("100000"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: $e.QUARRYMAN,
              name: "Quarryman",
              description: "",
              unlockCondition: function (e) {
                return e.personage.attributes.getAttribute(c.STRENGTH).greaterThan("1.e+12");
              },
              effortRequired: new E.Z(5e5),
              attributesEffortEffect: ((mt = {}), (mt[c.STRENGTH] = 1), mt),
              tags: ["physical", "actions", "coins"],
              baseResourcePerCast: ((ht = {}), (ht[i.COINS] = new E.Z(800)), ht),
              baseCostPerCast: ((At = {}), (At[i.ENERGY] = new E.Z(150)), At),
              xpGain: new E.Z("1.e+6"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: $e.MINER,
              name: "Miner",
              description: "",
              unlockCondition: function (e) {
                return e.personage.attributes.getAttribute(c.STRENGTH).greaterThan("1.e+18");
              },
              effortRequired: new E.Z(5e6),
              attributesEffortEffect: ((Et = {}), (Et[c.STRENGTH] = 1), Et),
              tags: ["physical", "actions", "coins"],
              baseResourcePerCast: ((vt = {}), (vt[i.COINS] = new E.Z(4e3)), vt),
              baseCostPerCast: ((yt = {}), (yt[i.ENERGY] = new E.Z(450)), yt),
              xpGain: new E.Z("1.e+7"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: $e.HEAD_MINER,
              name: "Head Miner",
              description: "",
              unlockCondition: function (e) {
                return e.personage.attributes.getAttribute(c.STRENGTH).greaterThan("1.e+25");
              },
              effortRequired: new E.Z(5e7),
              attributesEffortEffect: ((wt = {}), (wt[c.STRENGTH] = 1), wt),
              tags: ["physical", "actions", "coins"],
              baseResourcePerCast: ((bt = {}), (bt[i.COINS] = new E.Z(2e4)), bt),
              baseCostPerCast: ((It = {}), (It[i.ENERGY] = new E.Z(1350)), It),
              xpGain: new E.Z("1.e+8"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: $e.BUILDER,
              name: "Builder",
              description: "",
              unlockCondition: function (e) {
                return e.personage.attributes.getAttribute(c.STRENGTH).greaterThan("1.e+36");
              },
              effortRequired: new E.Z(5e8),
              attributesEffortEffect: ((Ct = {}), (Ct[c.STRENGTH] = 1), Ct),
              tags: ["physical", "actions", "coins"],
              baseResourcePerCast: ((Nt = {}), (Nt[i.COINS] = new E.Z(1e5)), Nt),
              baseCostPerCast: ((Rt = {}), (Rt[i.ENERGY] = new E.Z(4050)), Rt),
              xpGain: new E.Z("1.e+10"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: $e.REST,
              name: "Rest",
              description: "",
              unlockCondition: function (e) {
                return !0;
              },
              effortRequired: new E.Z(1),
              attributesEffortEffect: ((Lt = {}), (Lt[c.VITALITY] = 1), Lt),
              tags: ["physical", "actions", "energy"],
              baseResourcePerCast: ((Ot = {}), (Ot[i.ENERGY] = new E.Z(0.2)), Ot),
              xpGain: new E.Z("1"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: $e.PUSHUP,
              name: "Push Up",
              description: "Train your physical abilities",
              unlockCondition: function (e) {
                return !0;
              },
              effortRequired: new E.Z(5),
              attributesEffortEffect: ((Tt = {}), (Tt[c.VITALITY] = 0.75), (Tt[c.STRENGTH] = 0.25), Tt),
              tags: ["physical", "actions", "training", "strength"],
              baseAttributePerCats: ((St = {}), (St[c.STRENGTH] = new E.Z(0.1)), St),
              baseCostPerCast: ((Mt = {}), (Mt[i.ENERGY] = new E.Z(1)), Mt),
              xpGain: new E.Z("25"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1.01);
              },
            },
            {
              id: $e.BREATH,
              name: "Breath Techniques",
              description: "Train your vitality",
              unlockCondition: function (e) {
                return !0;
              },
              effortRequired: new E.Z(5),
              attributesEffortEffect: ((Zt = {}), (Zt[c.VITALITY] = 0.5), (Zt[c.STRENGTH] = 0.5), Zt),
              tags: ["physical", "actions", "training", "vitality"],
              baseAttributePerCats: ((Pt = {}), (Pt[c.VITALITY] = new E.Z(0.1)), Pt),
              baseCostPerCast: ((_t = {}), (_t[i.ENERGY] = new E.Z(1)), _t),
              xpGain: new E.Z("25"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1.01);
              },
            },
            {
              id: $e.INVESTIGATE_WORLD,
              name: "Investigate World",
              description: "Learn more about surroundings and place where you are living",
              unlockCondition: function (e) {
                return !0;
              },
              effortRequired: new E.Z(10),
              attributesEffortEffect: ((Gt = {}), (Gt[c.VITALITY] = 0.75), (Gt[c.STRENGTH] = 0.25), Gt),
              tags: ["mental", "actions", "training", "intellect"],
              baseAttributeMultiplierPerCast: ((Bt = {}), (Bt[c.RUNE_READING] = new E.Z(0.1)), Bt),
              baseCostPerCast: ((Dt = {}), (Dt[i.ENERGY] = new E.Z(1)), Dt),
              xpGain: new E.Z("50"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1.01);
              },
            },
            {
              id: $e.TRAIN_ENDURANCE,
              name: "Train Endurance",
              description: "Take endurance training at local gladiators school",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.TRAINING_CHAMBERS) > 0;
              },
              effortRequired: new E.Z(1e5),
              attributesEffortEffect: ((Ut = {}), (Ut[c.VITALITY] = 0.75), (Ut[c.STRENGTH] = 0.25), Ut),
              tags: ["physical", "actions", "training", "vitality"],
              baseAttributeMultiplierPerCast: ((kt = {}), (kt[c.VITALITY] = new E.Z(0.1)), kt),
              baseCostPerCast: ((xt = {}), (xt[i.ENERGY] = new E.Z(10)), (xt[i.COINS] = new E.Z(10)), xt),
              xpGain: new E.Z("1500"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1.01);
              },
            },
            {
              id: $e.TRAIN_STRENGTH,
              name: "Train Strength",
              description: "Take strength training at local gladiators school",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.TRAINING_CHAMBERS) > 0;
              },
              effortRequired: new E.Z(1e5),
              attributesEffortEffect: ((Ht = {}), (Ht[c.VITALITY] = 0.75), (Ht[c.STRENGTH] = 0.25), Ht),
              tags: ["physical", "actions", "training", "strength"],
              baseAttributeMultiplierPerCast: ((Wt = {}), (Wt[c.STRENGTH] = new E.Z(0.1)), Wt),
              baseCostPerCast: ((Xt = {}), (Xt[i.ENERGY] = new E.Z(10)), (Xt[i.COINS] = new E.Z(10)), Xt),
              xpGain: new E.Z("1500"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1.01);
              },
            },
            {
              id: $e.READ_BOOKS,
              name: "Read Books",
              description: "Spend time reading old magic books, full of knowledge. Increase knowledge cap, but requires mana to translate magic language",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.READ_BOOKS) > 0;
              },
              effortRequired: new E.Z(4e3),
              attributesEffortEffect: ((qt = {}), (qt[c.RUNE_READING] = 0.75), (qt[c.WILLPOWER] = 0.25), qt),
              tags: ["mental", "actions", "training", "knowledge"],
              baseResourceCapPerCast: ((Ft = {}), (Ft[i.KNOWLEDGE] = new E.Z(1)), Ft),
              baseCostPerCast: ((Yt = {}), (Yt[i.ENERGY] = new E.Z(5)), (Yt[i.MANA] = new E.Z(1e4)), Yt),
              xpGain: new E.Z("100"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: $e.READ_MANUSCRIPTS,
              name: "Read Manuscripts",
              description: "Spend time reading rune manuscripts, increasing rune mastery",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.RUNE_LANGUAGE) > 0;
              },
              effortRequired: new E.Z(16e3),
              attributesEffortEffect: ((Kt = {}), (Kt[c.RUNE_READING] = 0.75), (Kt[c.WILLPOWER] = 0.25), Kt),
              tags: ["mental", "actions", "training", "rune mastery"],
              baseAttributeMultiplierPerCast: ((jt = {}), (jt[c.RUNE_MASTERY] = new E.Z(0.05)), jt),
              baseCostPerCast: ((Vt = {}), (Vt[i.ENERGY] = new E.Z(10)), (Vt[i.MANA] = new E.Z(2e5)), Vt),
              xpGain: new E.Z("300"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1.01);
              },
            },
            {
              id: $e.APTITUDE_TRAINING,
              name: "Mental Aptitude",
              description: "Train your mental abilities by solving problems from academy books. Increase Intellect",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.APTITUDE) > 0;
              },
              effortRequired: new E.Z(1e4),
              attributesEffortEffect: ((zt = {}), (zt[c.VITALITY] = 0.25), (zt[c.WILLPOWER] = 0.75), zt),
              tags: ["mental", "actions", "training", "intellect"],
              baseAttributeMultiplierPerCast: ((Jt = {}), (Jt[c.RUNE_READING] = new E.Z(0.05)), Jt),
              baseCostPerCast: ((Qt = {}), (Qt[i.ENERGY] = new E.Z(10)), (Qt[i.KNOWLEDGE] = new E.Z(5e3)), Qt),
              xpGain: new E.Z("1000"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1.01);
              },
            },
            {
              id: $e.BRAINSTORM,
              name: "Brainstorm",
              description: "Train your mental abilities. Increase Knowledge generation",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.BRAINSTORM) > 0;
              },
              effortRequired: new E.Z(1e5),
              attributesEffortEffect: (($t = {}), ($t[c.WILLPOWER] = 0.5), ($t[c.RUNE_READING] = 0.5), $t),
              tags: ["mental", "actions", "empower", "knowledge"],
              baseResourceMultiplierPerCast: ((en = {}), (en[i.KNOWLEDGE] = new E.Z(0.02)), en),
              baseCostPerCast: ((tn = {}), (tn[i.ENERGY] = new E.Z(25)), (tn[i.MANA] = new E.Z(2e6)), tn),
              xpGain: new E.Z("3000"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: $e.MEDITATE,
              name: "Meditate",
              description: "Use special techniques to improve your mana cap",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.MEDITATE) > 0;
              },
              effortRequired: new E.Z(2e6),
              attributesEffortEffect: ((nn = {}), (nn[c.RUNE_READING] = 0.75), (nn[c.VITALITY] = 0.25), nn),
              tags: ["mental", "actions", "empower", "mana", "capacity"],
              baseResourceCapMultiplierPerCast: ((rn = {}), (rn[i.MANA] = new E.Z(0.02)), rn),
              baseCostPerCast: ((on = {}), (on[i.ENERGY] = new E.Z(50)), (on[i.KNOWLEDGE] = new E.Z(2e5)), on),
              xpGain: new E.Z("6e+3"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: $e.WILLPOWER_TRAINING,
              name: "Willpower Training",
              description: "Use special techniques to improve your willpower",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.MEDITATE) > 0;
              },
              effortRequired: new E.Z(1e7),
              attributesEffortEffect: ((an = {}), (an[c.RUNE_READING] = 1), an),
              tags: ["mental", "actions", "empower", "mana"],
              baseAttributeMultiplierPerCast: ((un = {}), (un[c.WILLPOWER] = new E.Z(0.02)), un),
              baseCostPerCast: ((sn = {}), (sn[i.ENERGY] = new E.Z(150)), (sn[i.KNOWLEDGE] = new E.Z(8e5)), sn),
              xpGain: new E.Z("8e+3"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1.01);
              },
            },
            {
              id: $e.RUNE_LESSONS,
              name: "Rune Lessons",
              description: "Take some rune mastery lessons",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.RUNE_SCIENCE) > 0;
              },
              effortRequired: new E.Z(5e7),
              attributesEffortEffect: ((cn = {}), (cn[c.RUNE_READING] = 0.75), (cn[c.WILLPOWER] = 0.25), cn),
              tags: ["mental", "actions", "empower", "runes"],
              baseAttributeMultiplierPerCast: ((ln = {}), (ln[c.RUNE_MASTERY] = new E.Z(0.05)), ln),
              baseCostPerCast: ((dn = {}), (dn[i.ENERGY] = new E.Z(250)), (dn[i.KNOWLEDGE] = new E.Z(5e6)), dn),
              xpGain: new E.Z("3.e+4"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1.01);
              },
            },
            {
              id: $e.CONDENSE_STASHES,
              name: "Condense Stashes",
              description: "Cast the spell over your coins to make it taking less place",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.ILLUSION_SPELLS) > 0;
              },
              effortRequired: new E.Z(1e5),
              attributesEffortEffect: ((pn = {}), (pn[c.RUNE_READING] = 0.05), (pn[c.MAGIC_KNOWLEDGE] = 0.95), pn),
              tags: ["magical", "spell", "illusion", "coins"],
              baseResourceCapPerCast: ((fn = {}), (fn[i.COINS] = new E.Z(0.1)), fn),
              baseCostPerCast: ((gn = {}), (gn[i.ENERGY] = new E.Z(500)), (gn[i.MANA] = new E.Z("1.e+8")), gn),
              xpGain: new E.Z("1.e+5"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: $e.SPARK_HEART_INFUSION,
              name: "Heart Spark Infusion",
              description: "Use spark to enchant your heart, boosting your vitality",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.SPARK_INFUSION) > 0;
              },
              effortRequired: new E.Z(100),
              attributesEffortEffect: ((mn = {}), (mn[c.MAGIC_KNOWLEDGE] = 1), mn),
              tags: ["magical", "spell", "infusion", "vitality"],
              baseAttributeMultiplierPerCast: ((hn = {}), (hn[c.VITALITY] = new E.Z(0.05)), hn),
              baseCostPerCast: ((An = {}), (An[i.ENERGY] = new E.Z(500)), (An[i.SPARK] = new E.Z(20)), (An[i.KNOWLEDGE] = new E.Z("2.e+10")), An),
              xpGain: new E.Z("1500"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1.01);
              },
            },
            {
              id: $e.SPARK_MUSCLE_INFUSION,
              name: "Muscle Spark Infusion",
              description: "Use spark to enchant your muscles, boosting your strength",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.SPARK_INFUSION) > 0;
              },
              effortRequired: new E.Z(100),
              attributesEffortEffect: ((En = {}), (En[c.MAGIC_KNOWLEDGE] = 1), En),
              tags: ["magical", "spell", "infusion", "strength"],
              baseAttributeMultiplierPerCast: ((vn = {}), (vn[c.STRENGTH] = new E.Z(0.05)), vn),
              baseCostPerCast: ((yn = {}), (yn[i.ENERGY] = new E.Z(500)), (yn[i.SPARK] = new E.Z(20)), (yn[i.KNOWLEDGE] = new E.Z("2.e+10")), yn),
              xpGain: new E.Z("1500"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1.01);
              },
            },
            {
              id: $e.SPARK_BRAIN_INFUSION,
              name: "Brain Spark Infusion",
              description: "Use magic to increase your intellect potential. Efficient, but dangerous.",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.SPARK_MIND_INFUSION) > 0;
              },
              effortRequired: new E.Z(100),
              attributesEffortEffect: ((wn = {}), (wn[c.MAGIC_KNOWLEDGE] = 1), wn),
              tags: ["magical", "spell", "infusion", "intellect"],
              baseAttributeMultiplierPerCast: ((bn = {}), (bn[c.RUNE_READING] = new E.Z(0.05)), bn),
              baseCostPerCast: ((In = {}), (In[i.ENERGY] = new E.Z(1e3)), (In[i.SPARK] = new E.Z(100)), (In[i.KNOWLEDGE] = new E.Z("1.e+11")), In),
              xpGain: new E.Z("1500"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1.01);
              },
            },
            {
              id: $e.MAGIC_LESSONS,
              name: "Magic Lessons",
              description: "Train your capabilities of spell casting",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.SPELLBINDING_TRAINING) > 0;
              },
              effortRequired: new E.Z(1e10),
              attributesEffortEffect: ((Cn = {}), (Cn[c.RUNE_READING] = 0.75), (Cn[c.WILLPOWER] = 0.25), Cn),
              tags: ["mental", "actions", "training", "spellbinding"],
              baseAttributeMultiplierPerCast: ((Nn = {}), (Nn[c.MAGIC_KNOWLEDGE] = new E.Z(0.05)), Nn),
              baseCostPerCast: ((Rn = {}), (Rn[i.ENERGY] = new E.Z(500)), (Rn[i.KNOWLEDGE] = new E.Z("1.e+11")), (Rn[i.MANA] = new E.Z("1.e+11")), Rn),
              xpGain: new E.Z("1.e+5"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1.01);
              },
            },
            {
              id: $e.READ_ELVEN_BOOKS,
              name: "Read Elven Books",
              description: "Spent some time in elven library to increase your knowledge output",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.ELVEN_LIBRARY) > 0;
              },
              effortRequired: new E.Z("5.e+12"),
              attributesEffortEffect: ((Ln = {}), (Ln[c.RUNE_READING] = 0.75), (Ln[c.WILLPOWER] = 0.25), Ln),
              tags: ["mental", "actions", "training", "knowledge"],
              baseResourceMultiplierPerCast: ((On = {}), (On[i.KNOWLEDGE] = new E.Z(0.01)), On),
              baseCostPerCast: ((Tn = {}), (Tn[i.ENERGY] = new E.Z(2500)), (Tn[i.MANA] = new E.Z("1.e+13")), Tn),
              xpGain: new E.Z("1.e+5"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: $e.CONJURATION_TRAINING,
              name: "Conjuration Training",
              description: "Train your conjuration lore",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.CONJURATION_STUDY) > 0;
              },
              effortRequired: new E.Z("1.e+12"),
              attributesEffortEffect: ((Sn = {}), (Sn[c.VITALITY] = 0.75), (Sn[c.WILLPOWER] = 0.25), Sn),
              tags: ["mental", "actions", "training", "conjuration lore"],
              baseAttributeMultiplierPerCast: ((Mn = {}), (Mn[c.CONJURATION_LORE] = new E.Z(0.01)), Mn),
              baseCostPerCast: ((Zn = {}), (Zn[i.ENERGY] = new E.Z(2500)), (Zn[i.MANA] = new E.Z("1.e+14")), Zn),
              xpGain: new E.Z("1.e+5"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1.01);
              },
            },
            {
              id: $e.ENCHANT_REACTION,
              name: "Enchant Fingers",
              description:
                "Now that you know magic well enough and you understand your body and mentality, you can use new methods of self-improvement! Cast some spells on your fingers to make yourself more agile!",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.REFLEXES_TRAINING) > 0;
              },
              effortRequired: new E.Z("1.e+9"),
              attributesEffortEffect: ((Pn = {}), (Pn[c.MAGIC_KNOWLEDGE] = 0.75), (Pn[c.WILLPOWER] = 0.25), Pn),
              tags: ["magical", "spell", "enhancement", "agility"],
              baseAttributeMultiplierPerCast: ((_n = {}), (_n[c.AGILITY] = new E.Z(0.01)), _n),
              baseCostPerCast: ((Gn = {}), (Gn[i.ENERGY] = new E.Z(25e3)), (Gn[i.MANA] = new E.Z("1.e+16")), Gn),
              xpGain: new E.Z("5.e+7"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1.01);
              },
            },
            {
              id: $e.SPELL_SINGING,
              name: "Spell-singing courses",
              description: "Train your spell mastery even more",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.REFLEXES_TRAINING) > 0;
              },
              effortRequired: new E.Z("1.e+14"),
              attributesEffortEffect: ((Bn = {}), (Bn[c.RUNE_READING] = 0.75), (Bn[c.WILLPOWER] = 0.25), Bn),
              tags: ["mental", "actions", "training", "spellbinding"],
              baseAttributeMultiplierPerCast: ((Dn = {}), (Dn[c.MAGIC_KNOWLEDGE] = new E.Z(0.02)), Dn),
              baseCostPerCast: ((Un = {}), (Un[i.ENERGY] = new E.Z(25e3)), (Un[i.KNOWLEDGE] = new E.Z("1.e+22")), Un),
              xpGain: new E.Z("5.e+7"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1.01);
              },
            },
            {
              id: $e.FORTITUDE,
              name: "Fortitude",
              description: "Make your spirits invincible, and your will undeniable",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.FORTITUDE_TRAINING) > 0;
              },
              effortRequired: new E.Z("1.e+14"),
              attributesEffortEffect: ((kn = {}), (kn[c.RUNE_READING] = 0.75), (kn[c.VITALITY] = 0.25), kn),
              tags: ["mental", "actions", "training", "willpower"],
              baseAttributeMultiplierPerCast: ((xn = {}), (xn[c.WILLPOWER] = new E.Z(0.02)), xn),
              baseCostPerCast: ((Hn = {}), (Hn[i.ENERGY] = new E.Z(62500)), (Hn[i.KNOWLEDGE] = new E.Z("3.e+24")), Hn),
              xpGain: new E.Z("5.e+8"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1.01);
              },
            },
            {
              id: $e.CONJURE_SPARK,
              name: "Conjure Spark",
              description: "Spend your time making ritual, increasing your mana output",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.SPARK_GENERATION) > 0;
              },
              effortRequired: new E.Z(1e7),
              attributesEffortEffect: ((Wn = {}), (Wn[c.RUNE_READING] = 0.01), (Wn[c.MAGIC_KNOWLEDGE] = 0.99), Wn),
              tags: ["magical", "spell", "conjuration", "spark"],
              baseResourcePerCast: ((Xn = {}), (Xn[i.SPARK] = new E.Z(0.1)), Xn),
              baseCostPerCast: ((qn = {}), (qn[i.ENERGY] = new E.Z(250)), (qn[i.MANA] = new E.Z("1.e+9")), qn),
              xpGain: new E.Z("5.e+4"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: $e.CONJURE_WOOD,
              name: "Conjure Wood",
              description: "Conjure some pile of raw wood",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.WOODWORKING) > 0;
              },
              effortRequired: new E.Z(1e8),
              attributesEffortEffect: ((Fn = {}), (Fn[c.RUNE_READING] = 0.01), (Fn[c.MAGIC_KNOWLEDGE] = 0.99), Fn),
              tags: ["magical", "spell", "conjuration", "wood"],
              baseResourcePerCast: ((Yn = {}), (Yn[i.WOOD] = new E.Z(0.25)), Yn),
              baseCostPerCast: ((Kn = {}), (Kn[i.ENERGY] = new E.Z(500)), (Kn[i.MANA] = new E.Z("1.e+10")), Kn),
              xpGain: new E.Z("1.e+5"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: $e.CONJURE_STONE,
              name: "Conjure Stone",
              description: "Conjure some stone",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.STONEWORKING) > 0;
              },
              effortRequired: new E.Z(5e8),
              attributesEffortEffect: ((jn = {}), (jn[c.RUNE_READING] = 0.01), (jn[c.MAGIC_KNOWLEDGE] = 0.99), jn),
              tags: ["magical", "spell", "conjuration", "stone"],
              baseResourcePerCast: ((Vn = {}), (Vn[i.STONE] = new E.Z(0.25)), Vn),
              baseCostPerCast: ((zn = {}), (zn[i.ENERGY] = new E.Z(1e3)), (zn[i.MANA] = new E.Z("1.e+11")), zn),
              xpGain: new E.Z("2.e+5"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: $e.CONJURE_IRON,
              name: "Conjure Iron",
              description: "Conjure iron ore",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.METALWORKING) > 0;
              },
              effortRequired: new E.Z(25e8),
              attributesEffortEffect: ((Jn = {}), (Jn[c.RUNE_READING] = 0.01), (Jn[c.MAGIC_KNOWLEDGE] = 0.99), Jn),
              tags: ["magical", "spell", "conjuration", "iron"],
              baseResourcePerCast: ((Qn = {}), (Qn[i.IRON_ORE] = new E.Z(0.25)), Qn),
              baseCostPerCast: (($n = {}), ($n[i.ENERGY] = new E.Z(2500)), ($n[i.MANA] = new E.Z("1.e+12")), $n),
              xpGain: new E.Z("5.e+5"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: $e.CRAFT,
              name: "Craft",
              description: "Devote some time to crafting",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.WOODWORKING) > 0;
              },
              effortRequired: new E.Z(1e8),
              attributesEffortEffect: ((ei = {}), (ei[c.STRENGTH] = 1), ei),
              tags: ["technical", "crafting"],
              baseResourcePerCast: ((ti = {}), (ti[i.CRAFTSMANSHIP] = new E.Z(1)), ti),
              baseCostPerCast: ((ni = {}), (ni[i.ENERGY] = new E.Z(2500)), ni),
              xpGain: new E.Z("5.e+5"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: $e.FIGHT,
              name: "Fight",
              description: "Spent some time fighting. Produces fighting actions",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.BATTLE_MASTERY) > 0;
              },
              effortRequired: new E.Z(1),
              attributesEffortEffect: ((ii = {}), (ii[c.STAMINA] = 1), ii),
              tags: ["technical", "fighting", "battle"],
              baseResourcePerCast: ((ri = {}), (ri[i.FIGHTING_ACTIONS] = new E.Z(1)), ri),
              baseCostPerCast: ((oi = {}), (oi[i.ENERGY] = new E.Z(5e3)), oi),
              xpGain: new E.Z("1.e+7"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: $e.WEAPON_MASTERY,
              name: "Weapon Mastery Training",
              description:
                "Spent some time to train your weapons mastery with greatest magic arena warriors. However, you should pay for this lessons with most precious resource in mages city - your knowledge. ",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.BATTLE_TRAINING) > 0;
              },
              effortRequired: new E.Z("1.e+12"),
              attributesEffortEffect: ((ai = {}), (ai[c.STRENGTH] = 1), ai),
              tags: ["physical", "fighting", "damage", "attack", "battle"],
              baseBattleAttributeMultiplierPerCast: ((ui = {}), (ui[l.PHYSICAL_DAMAGE] = new E.Z(0.01)), ui),
              baseCostPerCast: ((si = {}), (si[i.ENERGY] = new E.Z(25e3)), (si[i.KNOWLEDGE] = new E.Z("2.e+17")), si),
              xpGain: new E.Z("3.e+6"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: $e.BATTLE_ENDURANCE,
              name: "Battle Endurance Training",
              description: "Use your magic knowledge to enchant your body and heart",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.BATTLE_TRAINING) > 0;
              },
              effortRequired: new E.Z("1.e+12"),
              attributesEffortEffect: ((ci = {}), (ci[c.STRENGTH] = 1), ci),
              tags: ["physical", "fighting", "hp", "defensive", "battle"],
              baseBattleAttributeMultiplierPerCast: ((li = {}), (li[l.MAX_HP] = new E.Z(0.01)), (li[l.HP_REGEN] = new E.Z(0.002)), li),
              baseCostPerCast: ((di = {}), (di[i.ENERGY] = new E.Z(25e3)), (di[i.KNOWLEDGE] = new E.Z("2.e+17")), di),
              xpGain: new E.Z("3.e+6"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
            {
              id: $e.EVOCATION_TRAINING,
              name: "Evocation Training",
              description: "Train your destructive magic with best mages in the city",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.EVOCATION_SPELLS) > 0;
              },
              effortRequired: new E.Z("1.e+12"),
              attributesEffortEffect: ((pi = {}), (pi[c.RUNE_READING] = 1), pi),
              tags: ["magical", "fighting", "damage", "attack", "battle"],
              baseBattleAttributeMultiplierPerCast: ((fi = {}), (fi[l.FIRE_DAMAGE] = new E.Z(0.01)), (fi[l.MAGICAL_DAMAGE] = new E.Z(0.01)), fi),
              baseCostPerCast: ((gi = {}), (gi[i.ENERGY] = new E.Z(25e3)), (gi[i.KNOWLEDGE] = new E.Z("2.e+17")), gi),
              xpGain: new E.Z("3.e+6"),
              getDiminishReturnEffect: function (e) {
                return new E.Z(1);
              },
            },
          ],
          mo = function () {
            return (
              (mo =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                  return e;
                }),
              mo.apply(this, arguments)
            );
          },
          ho = function (e, t) {
            var n = {};
            return (
              Object.keys(mo(mo({}, e), t)).forEach(function (i) {
                n[i] = (e[i] || new E.Z(0)).minus(t[i] || new E.Z(0));
              }),
              n
            );
          },
          Ao = function (e, t) {
            void 0 === t && (t = new E.Z(1e-14));
            var n = {};
            return (
              Object.keys(e).forEach(function (i) {
                e[i].abs().lessThanOrEqualTo(t) ? (n[i] = new E.Z(0)) : (n[i] = e[i]);
              }),
              n
            );
          },
          Eo = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
              function i() {
                this.constructor = t;
              }
              e(t, n), (t.prototype = null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
            };
          })(),
          vo = function () {
            return (
              (vo =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                  return e;
                }),
              vo.apply(this, arguments)
            );
          },
          yo = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.actions = []),
                (t.lists = { lists: [] }),
                (t.listAssertsCached = {}),
                (t.actionsCached = {}),
                (t.diminishReturns = {}),
                (t.isUnlocked = !1),
                (t.lastReassert = 0),
                (t.ttpMark = 0),
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
                  console.log("do run quick list", e), t.createQuickList(e.id);
                }),
                t.workDispatcher.on("[actions] delete list", function (e) {
                  console.log("do delete list", e), t.deleteList(e.id);
                }),
                t.workDispatcher.on("[actions] stop list", function (e) {
                  console.log("do stop list", e), t.stopList();
                }),
                t
              );
            }
            return (
              Eo(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                var t;
                (this.actions =
                  (null == e
                    ? void 0
                    : e.actions.map(function (e) {
                        return vo(vo({}, e), { numPerformed: new E.Z(e.numPerformed) });
                      })) || []),
                  (this.lists = (null == e ? void 0 : e.actionLists) || { selectedId: void 0, selectedProgress: 0, lists: [] }),
                  (this.isUnlocked = null !== (t = null == e ? void 0 : e.isUnlocked) && void 0 !== t && t),
                  (this.runningState = e.running
                    ? { id: e.running.id, progress: new E.Z(e.running.progress), isPaused: e.running.isPaused, pauseCd: 0, efficiency: 1 }
                    : void 0);
              }),
              (t.prototype.exportData = function () {
                return {
                  actions: this.actions.map(function (e) {
                    return vo(vo({}, e), { numPerformed: e.numPerformed.toPrecision(18) });
                  }),
                  actionLists: this.lists,
                  isUnlocked: this.isUnlocked,
                  running: this.runningState
                    ? { id: this.runningState.id, progress: this.runningState.progress.toPrecision(18), isPaused: this.runningState.isPaused }
                    : void 0,
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
                    ((null === (t = i.runningState) || void 0 === t ? void 0 : t.id) !== e.id && i.listAssertsCached[e.id]) || i.calculateList(e, !0);
                  }),
                  (null === (e = this.runningState) || void 0 === e ? void 0 : e.id) &&
                    !this.listAssertsCached[null === (t = this.runningState) || void 0 === t ? void 0 : t.id] &&
                    (console.error("Invalid list running: ", null === (n = this.runningState) || void 0 === n ? void 0 : n.id), this.stopList()),
                  (this.ttpMark = 0),
                  go.forEach(function (e) {
                    var t = i.actions.find(function (t) {
                      return t.id === e.id;
                    });
                    (i.diminishReturns[e.id] = i.getDiminishReturn(e, t)), (i.actionsCached[e.id] = i.processToUI(e));
                  });
              }),
              (t.prototype.dataFromCache = function () {
                var e = this;
                return Object.values(this.actionsCached).map(function (t) {
                  return t.isUnlocked && e.isUnlocked && ml.newNotifications.registerNotification("city:actions:action:".concat(t.id)), t;
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
                  listEdited: this.listEdited ? this.processCalculationsToUI(this.listEdited) : void 0,
                };
              }),
              (t.prototype.processRunningToUI = function () {
                var e = this;
                if (this.runningState) {
                  var t = this.listAssertsCached[this.runningState.id],
                    n = this.lists.lists.find(function (t) {
                      var n;
                      return t.id === (null === (n = e.runningState) || void 0 === n ? void 0 : n.id);
                    });
                  if (n) {
                    var i = t.effort.div(this.runningState.efficiency),
                      r = t.effort.greaterThanOrEqualTo(1) ? N(i.minus(this.runningState.progress.div(this.runningState.efficiency))) : N(i, !1);
                    return {
                      id: this.runningState.id,
                      name: n.name,
                      progress: i.greaterThanOrEqualTo(1) ? this.runningState.progress.mul(100).div(t.effort).toPrecision(2) : "100",
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
                        return { id: e[0], amount: e[1].mul(t).div(n || new E.Z(1)) };
                      })
                    : []
                );
              }),
              (t.prototype.getGainPerCast = function (e, t, n) {
                return (
                  void 0 === t && (t = 1),
                  e.baseResourcePerCast
                    ? Object.entries(e.baseResourcePerCast).map(function (e) {
                        return { id: e[0], amount: e[1].mul(t).div(n || new E.Z(1)) };
                      })
                    : []
                );
              }),
              (t.prototype.getGainMultPerCast = function (e, t, n) {
                return (
                  void 0 === t && (t = 1),
                  e.baseResourceMultiplierPerCast
                    ? Object.entries(e.baseResourceMultiplierPerCast).map(function (e) {
                        return { id: e[0], amount: e[1].mul(t).div(n || new E.Z(1)) };
                      })
                    : []
                );
              }),
              (t.prototype.getCapGainPerCast = function (e, t, n) {
                return (
                  void 0 === t && (t = 1),
                  e.baseResourceCapPerCast
                    ? Object.entries(e.baseResourceCapPerCast).map(function (e) {
                        return { id: e[0], amount: e[1].mul(t).div(n || new E.Z(1)) };
                      })
                    : []
                );
              }),
              (t.prototype.getCapMultPerCast = function (e, t, n) {
                return (
                  void 0 === t && (t = 1),
                  e.baseResourceCapMultiplierPerCast
                    ? Object.entries(e.baseResourceCapMultiplierPerCast).map(function (e) {
                        return { id: e[0], amount: e[1].mul(t).div(n || new E.Z(1)) };
                      })
                    : []
                );
              }),
              (t.prototype.getAttributePerCast = function (e, t, n) {
                return (
                  void 0 === t && (t = 1),
                  e.baseAttributePerCats
                    ? Object.entries(e.baseAttributePerCats).map(function (e) {
                        return { id: e[0], amount: e[1].mul(t).div(n || new E.Z(1)) };
                      })
                    : []
                );
              }),
              (t.prototype.getAttributeMultPerCast = function (e, t, n) {
                return (
                  void 0 === t && (t = 1),
                  e.baseAttributeMultiplierPerCast
                    ? Object.entries(e.baseAttributeMultiplierPerCast).map(function (e) {
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
              (t.prototype.getBattleAttributePerCast = function (e, t, n) {
                return (
                  void 0 === t && (t = 1),
                  e.baseBattleAttributePerCats
                    ? Object.entries(e.baseBattleAttributePerCats).map(function (e) {
                        return { id: e[0], amount: e[1].mul(t).div(n || new E.Z(1)) };
                      })
                    : []
                );
              }),
              (t.prototype.getBattleAttributeMultPerCast = function (e, t, n) {
                return (
                  void 0 === t && (t = 1),
                  e.baseBattleAttributeMultiplierPerCast
                    ? Object.entries(e.baseBattleAttributeMultiplierPerCast).map(function (e) {
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
                  e.tags.includes("physical") && (t = t.mul(ml.city.reincarnation.getBonus(re.PHYSICAL))),
                  e.tags.includes("mental") && (t = t.mul(ml.city.reincarnation.getBonus(re.MENTAL))),
                  e.tags.includes("spell") && (t = t.mul(ml.city.reincarnation.getBonus(re.MAGICAL))),
                  e.tags.includes("conjuration") && (t = t.mul(E.Z.max(ml.personage.attributes.getAttribute(c.CONJURATION_LORE), 1))),
                  t
                );
              }),
              (t.prototype.getCap = function (e) {
                var t = this.getTagMultiplier(e);
                return new E.Z(0.05).div(E.Z.max(ml.personage.attributes.getAttribute(c.AGILITY), new E.Z(1)).mul(t));
              }),
              (t.prototype.getRealEffort = function (e, t, n) {
                void 0 === t && (t = 1), void 0 === n && (n = !1);
                var i = Object.entries(e.attributesEffortEffect).reduce(function (e, t) {
                    return e.plus(w(ml.personage.attributes.getAttribute(t[0]), new E.Z(0.75)).mul(t[1]));
                  }, new E.Z(0)),
                  r = Object.entries(e.attributesEffortEffect).reduce(function (e, t) {
                    return e.plus(t[1]);
                  }, new E.Z(0));
                r.lessThan(1) && (i = i.plus(1).sub(r)), i.lessThanOrEqualTo(0) && (i = new E.Z(1));
                var o = w(this.getTagMultiplier(e), new E.Z(0.25)),
                  a = e.effortRequired.mul(t).div(i.mul(o)),
                  u = n ? 0 : this.getCap(e).mul(t);
                return E.Z.max(a, u);
              }),
              (t.prototype.getDiminishCached = function (e, t) {
                return this.diminishReturns[e.id] || (this.diminishReturns[e.id] = this.getDiminishReturn(e, t)), this.diminishReturns[e.id];
              }),
              (t.prototype.getAverageDiminish = function (e, t, n) {
                var i = this.getDiminishCached(e, t);
                if (n.mul(i).div(t.numPerformed.plus(1)).lessThanOrEqualTo(2)) return this.getDiminishCached(e, t);
                var r = this.getDiminishReturn(e, vo(vo({}, t), { numPerformed: t.numPerformed.plus(n) })),
                  o = this.getDiminishReturn(e, vo(vo({}, t), { numPerformed: t.numPerformed.plus(n.div(2)) })),
                  a = i.plus(r).plus(o.mul(4)).div(6),
                  u = t.numPerformed.mul(0.1).plus(1).div(n);
                return console.log("modded: ", a.toNumber(), u.toNumber()), E.Z.min(a, u);
              }),
              (t.prototype.getDiminishReturn = function (e, t) {
                var n = null == t ? void 0 : t.numPerformed;
                if (!n || (null == n ? void 0 : n.lessThan(1))) return new E.Z(1);
                var i = e.getDiminishReturnEffect(ml);
                return i.lessThanOrEqualTo(1) ? new E.Z(1) : i.pow(n.pow(0.5).neg());
              }),
              (t.prototype.calculateList = function (e, t) {
                var n,
                  r,
                  o,
                  a,
                  u,
                  s = this;
                void 0 === t && (t = !1);
                var c = go.reduce(function (e, t) {
                    return (e[t.id] = t), e;
                  }, {}),
                  l = e.actions.reduce(function (e, t) {
                    return e.plus(s.getRealEffort(c[t.id], t.number).mul(1));
                  }, new E.Z(0)),
                  d = e.actions.reduce(function (e, t) {
                    return (e[t.id] = s.getRealEffort(c[t.id], t.number).div(l).toNumber()), e;
                  }, {}),
                  p = {
                    effort: l,
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
                    timeBreakdowns: d,
                    requiredRestChange: 0,
                  },
                  f = e.actions.reduce(function (e, t) {
                    var n = s.getCostPerCast(c[t.id], t.number).find(function (e) {
                      return e.id === i.ENERGY;
                    });
                    return n && (e = e.plus(n.amount)), e;
                  }, new E.Z(0)),
                  g = c[$e.REST]
                    ? (null ===
                        (n = this.getGainPerCast(c[$e.REST], 1).find(function (e) {
                          return e.id === i.ENERGY;
                        })) || void 0 === n
                        ? void 0
                        : n.amount.mul(ml.resources.getResourceMultiplier(i.ENERGY))) || new E.Z(0.1)
                    : new E.Z(1);
                (p.requiredRestChange = Math.ceil(f.div(g).toNumber())),
                  e.actions.forEach(function (e) {
                    if (c[e.id]) {
                      c[e.id].unlockCondition(ml) || (p.canBeRunned = !1);
                      var t = Object.entries(c[e.id].attributesEffortEffect).reduce(function (e, t) {
                          return e.plus(t[1]);
                        }, new E.Z(0)),
                        n = s
                          .getDiminishCached(
                            c[e.id],
                            s.actions.find(function (t) {
                              return t.id === e.id;
                            })
                          )
                          .mul(e.number),
                        i = s.getAttributePerCast(c[e.id], n, l),
                        r = s.getGainPerCast(c[e.id], n, l),
                        o = s.getGainMultPerCast(c[e.id], n, l),
                        a = s.getCapGainPerCast(c[e.id], n, l),
                        u = s.getCapMultPerCast(c[e.id], n, l),
                        d = s.getCostPerCast(c[e.id], e.number, l),
                        f = s.getAttributeMultPerCast(c[e.id], n, l),
                        g = Object.entries(c[e.id].attributesEffortEffect).map(function (e) {
                          return { id: e[0], value: 100 * e[1] };
                        });
                      i.forEach(function (e) {
                        var t;
                        p.attributeGain[e.id] || (p.attributeGain[e.id] = new E.Z(0)),
                          (p.attributeGain[e.id] = null === (t = p.attributeGain[e.id]) || void 0 === t ? void 0 : t.plus(e.amount));
                      }),
                        f.forEach(function (e) {
                          var t;
                          p.attributeMultGain[e.id] || (p.attributeMultGain[e.id] = new E.Z(1)),
                            (p.attributeMultGain[e.id] = null === (t = p.attributeMultGain[e.id]) || void 0 === t ? void 0 : t.mul(e.amount));
                        }),
                        r.forEach(function (e) {
                          var t;
                          p.resourceGain[e.id] || (p.resourceGain[e.id] = new E.Z(0)),
                            (p.resourceGain[e.id] = null === (t = p.resourceGain[e.id]) || void 0 === t ? void 0 : t.plus(e.amount));
                        }),
                        o.forEach(function (e) {
                          var t;
                          p.resourceGainMult[e.id] || (p.resourceGainMult[e.id] = new E.Z(1)),
                            (p.resourceGainMult[e.id] = null === (t = p.resourceGainMult[e.id]) || void 0 === t ? void 0 : t.mul(e.amount));
                        }),
                        a.forEach(function (e) {
                          var t;
                          p.resourceCapGain[e.id] || (p.resourceCapGain[e.id] = new E.Z(0)),
                            (p.resourceCapGain[e.id] = null === (t = p.resourceCapGain[e.id]) || void 0 === t ? void 0 : t.plus(e.amount));
                        }),
                        u.forEach(function (e) {
                          var t;
                          p.resourceCapMult[e.id] || (p.resourceCapMult[e.id] = new E.Z(1)),
                            (p.resourceCapMult[e.id] = null === (t = p.resourceCapMult[e.id]) || void 0 === t ? void 0 : t.mul(e.amount));
                        }),
                        d.forEach(function (e) {
                          var t;
                          p.resourceCost[e.id] || (p.resourceCost[e.id] = new E.Z(0)),
                            (p.resourceCost[e.id] = null === (t = p.resourceCost[e.id]) || void 0 === t ? void 0 : t.plus(e.amount));
                        }),
                        g.forEach(function (n) {
                          var i;
                          p.impactingAttributes[n.id] || (p.impactingAttributes[n.id] = new E.Z(0)),
                            (p.impactingAttributes[n.id] =
                              null === (i = p.impactingAttributes[n.id]) || void 0 === i
                                ? void 0
                                : i.plus(s.getRealEffort(c[e.id], e.number).mul(n.value).div(l.mul(t))));
                        });
                    }
                  });
                var m = {};
                return (
                  Object.entries(p.resourceGain).forEach(function (e) {
                    var t = e[0],
                      n = e[1];
                    m[t] = n.mul(ml.resources.getResourceMultiplier(t));
                  }),
                  (p.balanceCalculated = Ao(ho(m, p.resourceCost))),
                  (null === (r = p.balanceCalculated[i.ENERGY]) || void 0 === r ? void 0 : r.lessThan(0)) &&
                    console.log(
                      "power: ",
                      null === (o = p.balanceCalculated[i.ENERGY]) || void 0 === o ? void 0 : o.toPrecision(18),
                      null === (a = m[i.ENERGY]) || void 0 === a ? void 0 : a.toPrecision(24),
                      null === (u = p.resourceCost[i.ENERGY]) || void 0 === u ? void 0 : u.toPrecision(24)
                    ),
                  t && (this.listAssertsCached[e.id] = p),
                  p
                );
              }),
              (t.prototype.listToUI = function (e) {
                (this.listEdited = e ? this.calculateList(e) : void 0), console.log("Recalculate list: ", this.listEdited);
              }),
              (t.prototype.createQuickList = function (e) {
                var t = go.find(function (t) {
                  return t.id === e;
                });
                if (t) {
                  var n = "".concat(e, "-quick"),
                    i = { isTemporary: !0, id: n, name: t.name, actions: [{ id: e, number: 1 }] },
                    r = this.calculateList(i, !0);
                  r.requiredRestChange && i.actions.push({ id: $e.REST, number: r.requiredRestChange }),
                    (this.lists.lists = this.lists.lists.filter(function (e) {
                      return !e.isTemporary;
                    })),
                    this.editList(i, !0),
                    this.runList(n);
                }
              }),
              (t.prototype.editList = function (e, t) {
                if ((void 0 === t && (t = !1), !e.name)) throw new Error("List name should not be empty");
                if (e.id) {
                  var n = this.lists.lists.findIndex(function (t) {
                    return t.id === e.id;
                  });
                  n > -1 ? (this.lists.lists[n] = e) : t && ((e = vo({}, e)), this.lists.lists.push(e));
                } else (e = vo(vo({}, e), { id: "".concat(Math.random()) })), this.lists.lists.push(e);
                this.calculateList(e, !0);
              }),
              (t.prototype.runList = function (e) {
                (this.runningState = { id: e, progress: new E.Z(0), isPaused: !1, pauseCd: 0, efficiency: 1 }),
                  ml.regenerateCache(),
                  ml.resources.reassertBalances();
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
                  ml.regenerateCache(),
                  ml.resources.reassertBalances();
              }),
              (t.prototype.toUI = function (e, t) {
                return (
                  void 0 === t &&
                    (t = function (e) {
                      return J(e, 4);
                    }),
                  e.map(function (e) {
                    return { id: e.id, name: ue(e.id), amount: t(e.amount), amountValue: e.amount.toPrecision(18) };
                  })
                );
              }),
              (t.prototype.recordToUI = function (e, t) {
                return (
                  void 0 === t &&
                    (t = function (e) {
                      return J(e, 4);
                    }),
                  Object.entries(e).map(function (e) {
                    var n = e[0],
                      i = e[1];
                    return { id: n, name: ue(n), amount: t(i), amountValue: i.toPrecision(18) };
                  })
                );
              }),
              (t.prototype.processToUI = function (e) {
                var t,
                  n = this.actions.find(function (t) {
                    return t.id === e.id;
                  });
                n || ((n = { id: e.id, numPerformed: new E.Z(0) }), this.actions.push(n));
                var i = this.getDiminishCached(e, n),
                  r = this.toUI(this.getCostPerCast(e)),
                  o = this.toUI(this.getGainPerCast(e, 1)),
                  a = this.toUI(this.getGainMultPerCast(e, 1), function (e) {
                    return "+x".concat(J(e, 4));
                  }),
                  u = this.toUI(this.getCapGainPerCast(e, 1)),
                  s = this.toUI(this.getCapMultPerCast(e, 1), function (e) {
                    return "+x".concat(J(e, 4));
                  }),
                  c = this.toUI(this.getAttributePerCast(e, 1)),
                  l = this.toUI(this.getAttributeMultPerCast(e, 1), function (e) {
                    return "+x".concat(J(e.sub(1), 4));
                  }),
                  d = this.toUI(this.getBattleAttributePerCast(e, 1)),
                  p = this.toUI(this.getBattleAttributeMultPerCast(e, 1), function (e) {
                    return "+x".concat(J(e.sub(1), 4));
                  }),
                  f = performance.now(),
                  g = this.getRealEffort(e),
                  m = g.toNumber(),
                  h = i.div(g);
                this.ttpMark += performance.now() - f;
                var A = e.unlockCondition(ml),
                  v =
                    !!(null === (t = this.runningState) || void 0 === t ? void 0 : t.id) && !!this.listAssertsCached[this.runningState.id].timeBreakdowns[e.id];
                return {
                  id: e.id,
                  name: e.name,
                  description: e.description,
                  isUnlocked: A,
                  isAvailable: A,
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
                  amount: J(n.numPerformed),
                  isBlocked: !1,
                  effort: N(g, !1),
                  capEffort: N(this.getCap(e), !1),
                  effortEffects: Object.entries(e.attributesEffortEffect).map(function (e) {
                    var t = e[0],
                      n = e[1];
                    return { name: ue(t), effect: Math.round(100 * n).toPrecision(3) };
                  }),
                  tags: e.tags,
                  mitigation: i.lessThan(1) ? "".concat(J(i.mul(100)), "%") : void 0,
                  effectiveNumber: E.Z.min(i.div(g.mul(n.numPerformed)).toNumber(), 1e300).toNumber(),
                  PPS: E.Z.min(h, 1e100).toNumber(),
                  isRunning: v,
                };
              }),
              (t.prototype.processCalculationsToUI = function (e) {
                return {
                  id: "edited.".concat(Math.random()),
                  name: "edited.".concat(Math.random()),
                  effort: N(e.effort, !1),
                  items: [],
                  resourceGain: this.recordToUI(e.balanceCalculated),
                  attributeGain: this.recordToUI(e.attributeGain),
                  battleAttributeGain: this.recordToUI(e.attributeGain),
                  resourceCapGain: this.recordToUI(e.resourceCapGain),
                  resourceCapMult: this.recordToUI(e.resourceCapMult, function (e) {
                    return "+x".concat(J(e.sub(1), 4));
                  }),
                  resourceGainMult: this.recordToUI(e.resourceGainMult, function (e) {
                    return "+x".concat(J(e, 4));
                  }),
                  attributeMultGain: this.recordToUI(e.attributeMultGain, function (e) {
                    return "+x".concat(J(e.sub(1), 4));
                  }),
                  battleAttributeMultGain: this.recordToUI(e.attributeMultGain, function (e) {
                    return "+x".concat(J(e.sub(1), 4));
                  }),
                  impactingAttributes: this.recordToUI(e.impactingAttributes, function (e) {
                    return "".concat(J(e, 2), "%");
                  }),
                  requiredRestChange: e.requiredRestChange,
                  timeBreakdowns: e.timeBreakdowns,
                  canBeRunned: !0,
                };
              }),
              (t.prototype.processListToUI = function (e) {
                var t = go.reduce(function (e, t) {
                  return (e[t.id] = t), e;
                }, {});
                return {
                  id: e.id,
                  name: e.name,
                  effort: N(this.listAssertsCached[e.id].effort, !1),
                  items: e.actions.map(function (e) {
                    return { id: e.id, amount: e.number, name: t[e.id].name, canBeRunned: t[e.id].unlockCondition(ml) };
                  }),
                  resourceGain: this.recordToUI(this.listAssertsCached[e.id].balanceCalculated),
                  resourceGainMult: this.recordToUI(this.listAssertsCached[e.id].resourceGainMult, function (e) {
                    return "+x".concat(J(e.sub(1), 4));
                  }),
                  resourceCapGain: this.recordToUI(this.listAssertsCached[e.id].resourceCapGain, function (e) {
                    return "+".concat(J(e, 4));
                  }),
                  attributeGain: this.recordToUI(this.listAssertsCached[e.id].attributeGain, function (e) {
                    return "+".concat(J(e, 4));
                  }),
                  attributeMultGain: this.recordToUI(this.listAssertsCached[e.id].attributeMultGain, function (e) {
                    return "+x".concat(J(e.sub(1), 4));
                  }),
                  battleAttributeGain: this.recordToUI(this.listAssertsCached[e.id].battleAttributeGain, function (e) {
                    return "+".concat(J(e, 4));
                  }),
                  battleAttributeMultGain: this.recordToUI(this.listAssertsCached[e.id].battleAttributeMultGain, function (e) {
                    return "+x".concat(J(e.sub(1), 4));
                  }),
                  resourceCapMult: this.recordToUI(this.listAssertsCached[e.id].resourceCapMult, function (e) {
                    return "+x".concat(J(e.sub(1), 4));
                  }),
                  canBeRunned: !e.actions.find(function (e) {
                    return !t[e.id].unlockCondition(ml);
                  }),
                  impactingAttributes: this.recordToUI(this.listAssertsCached[e.id].impactingAttributes, function (e) {
                    return "".concat(J(e, 4), "%");
                  }),
                  requiredRestChange: this.listAssertsCached[e.id].requiredRestChange,
                  timeBreakdowns: this.listAssertsCached[e.id].timeBreakdowns,
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
                          ml.resources
                            .getResource(o)
                            .mul(10 * t)
                            .neg()
                        )
                  ) {
                    var a = ml.resources.getResourceBalance(o),
                      u = ml.resources
                        .getResourceMultiplier(o)
                        .mul(e.resourceGain[o] || new E.Z(0))
                        .sub(e.resourceCost[o] || new E.Z(0)),
                      s = 1 - a.div(u.mul(n)).toNumber();
                    if ((r = Math.min(r, s)) < 0) return 0;
                  }
                return r;
              }),
              (t.prototype.process = function (e) {
                var t = this;
                if ((!this.isUnlocked && ml.learning.runeUpgrades.getUpgradeLevel(o.TICKET_OUT) > 0 && (this.isUnlocked = !0), this.runningState)) {
                  if (!this.runningState.id) return void (this.runningState = void 0);
                  if (this.runningState.isPaused && this.runningState.pauseCd > 0) return void (this.runningState.pauseCd -= e);
                  if (
                    (this.runningState.efficiency < 1 && this.runningState.pauseCd > 0 && (this.runningState.pauseCd -= e),
                    !this.listAssertsCached[this.runningState.id].canBeRunned)
                  )
                    return void this.stopList();
                  this.runningState.efficiency < 1 &&
                    this.runningState.pauseCd <= 0 &&
                    ((this.runningState.efficiency = 1), (this.runningState.isPaused = !1), ml.regenerateCache(), ml.resources.reassertBalances());
                  var n = this.canAfford(this.listAssertsCached[this.runningState.id], e, this.runningState.efficiency);
                  n < 1
                    ? (n <= 0
                        ? ((this.runningState.isPaused = !0), (this.runningState.pauseCd = 10 * e))
                        : ((this.runningState.isPaused = !1),
                          (this.runningState.pauseCd = 10 * e),
                          (this.runningState.efficiency = n * this.runningState.efficiency)),
                      ml.regenerateCache(),
                      ml.resources.reassertBalances())
                    : this.runningState.isPaused && ((this.runningState.isPaused = !1), ml.regenerateCache(), ml.resources.reassertBalances()),
                    (this.runningState.progress = this.runningState.progress.add(e * this.runningState.efficiency));
                  var i = new E.Z(1),
                    r = !1;
                  this.runningState.progress.greaterThanOrEqualTo(this.listAssertsCached[this.runningState.id].effort) && (r = !0),
                    (i = new E.Z(e * this.runningState.efficiency).div(this.listAssertsCached[this.runningState.id].effort));
                  var a = this.lists.lists.find(function (e) {
                    var n;
                    return e.id === (null === (n = t.runningState) || void 0 === n ? void 0 : n.id);
                  });
                  a &&
                    a.actions.forEach(function (n) {
                      var r,
                        o = t.actions.findIndex(function (e) {
                          return e.id === n.id;
                        }),
                        a = go.find(function (e) {
                          return e.id === n.id;
                        });
                      if (a && o >= 0) {
                        ml.statistics.addActionTime(
                          a.name,
                          (t.listAssertsCached[null === (r = t.runningState) || void 0 === r ? void 0 : r.id].timeBreakdowns[n.id] || 0) * e
                        );
                        var u = i.mul(n.number),
                          s = t.getAverageDiminish(a, t.actions[o], u);
                        t.actions[o].numPerformed = t.actions[o].numPerformed.plus(u.mul(s));
                      }
                    }),
                    r && (this.runningState.progress = new E.Z(0)),
                    (!this.lastReassert || this.lastReassert < Date.now() - 2e3) &&
                      ((this.lastReassert = Date.now()),
                      ml.regenerateCache(),
                      ml.resources.reassertBalances(),
                      this.lists.lists.map(function (e) {
                        return t.calculateList(e, !0);
                      }));
                }
              }),
              (t.prototype.getResourceBeingProduced = function (e) {
                var t, n, i, r;
                if (!(null === (t = this.runningState) || void 0 === t ? void 0 : t.id) || this.runningState.isPaused) return [];
                var o = this.listAssertsCached[null === (n = this.runningState) || void 0 === n ? void 0 : n.id];
                if (!o) return (this.runningState = void 0), [];
                var a = [];
                return (
                  o.resourceGain[e] &&
                    a.push({
                      label: "Actions",
                      value:
                        null !== (r = null === (i = o.resourceGain[e]) || void 0 === i ? void 0 : i.mul(this.runningState.efficiency)) && void 0 !== r
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
                  n = go.filter(function (t) {
                    var n;
                    return null === (n = t.baseResourceCapPerCast) || void 0 === n ? void 0 : n[e];
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
                          (null === (o = null === (r = n.baseResourceCapPerCast) || void 0 === r ? void 0 : r[e]) || void 0 === o ? void 0 : o.mul(a)) ||
                          new E.Z(0),
                        id: "actions:".concat(n.id),
                        category: "Actions",
                      });
                  }),
                  i
                );
              }),
              (t.prototype.getResourceBeingStoredMultiplier = function (e) {
                var t = this,
                  n = go.filter(function (t) {
                    var n;
                    return null === (n = t.baseResourceCapMultiplierPerCast) || void 0 === n ? void 0 : n[e];
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
                          (null === (o = null === (r = n.baseResourceCapMultiplierPerCast) || void 0 === r ? void 0 : r[e]) || void 0 === o
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
                if (!(null === (t = this.runningState) || void 0 === t ? void 0 : t.id) || this.runningState.isPaused) return [];
                var o = this.listAssertsCached[null === (n = this.runningState) || void 0 === n ? void 0 : n.id],
                  a = [];
                return (
                  o.resourceCost[e] &&
                    a.push({
                      label: "Actions",
                      value:
                        null !== (r = null === (i = o.resourceCost[e]) || void 0 === i ? void 0 : i.mul(this.runningState.efficiency)) && void 0 !== r
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
                  n = go.filter(function (t) {
                    var n;
                    return null === (n = t.baseAttributePerCats) || void 0 === n ? void 0 : n[e];
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
                          (null === (o = null === (r = n.baseAttributePerCats) || void 0 === r ? void 0 : r[e]) || void 0 === o ? void 0 : o.mul(a)) ||
                          new E.Z(0),
                        id: "actions",
                        category: "Actions",
                      });
                  }),
                  i
                );
              }),
              (t.prototype.getAttributeMultiplier = function (e) {
                var t = this,
                  n = go.filter(function (t) {
                    var n;
                    return null === (n = t.baseAttributeMultiplierPerCast) || void 0 === n ? void 0 : n[e];
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
                          (null === (o = null === (r = n.baseAttributeMultiplierPerCast) || void 0 === r ? void 0 : r[e]) || void 0 === o
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
                  n = go.filter(function (t) {
                    var n;
                    return null === (n = t.baseBattleAttributePerCats) || void 0 === n ? void 0 : n[e];
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
                          (null === (o = null === (r = n.baseBattleAttributePerCats) || void 0 === r ? void 0 : r[e]) || void 0 === o ? void 0 : o.mul(a)) ||
                          new E.Z(0),
                        id: "actions",
                        category: "Actions",
                      });
                  }),
                  i
                );
              }),
              (t.prototype.getBattleAttributeMultiplier = function (e) {
                var t = this,
                  n = go.filter(function (t) {
                    var n;
                    return null === (n = t.baseBattleAttributeMultiplierPerCast) || void 0 === n ? void 0 : n[e];
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
                          (null === (o = null === (r = n.baseBattleAttributeMultiplierPerCast) || void 0 === r ? void 0 : r[e]) || void 0 === o
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
                  n = go.filter(function (t) {
                    var n;
                    return null === (n = t.baseResourceMultiplierPerCast) || void 0 === n ? void 0 : n[e];
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
                          (null === (o = null === (r = n.baseResourceMultiplierPerCast) || void 0 === r ? void 0 : r[e]) || void 0 === o ? void 0 : o.mul(a)) ||
                          new E.Z(0)
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
                  e.actions[n].numPerformed = new E.Z(0);
                });
              }),
              t
            );
          })(s),
          wo = yo.getInstance(),
          bo = [
            {
              id: a.READ_BOOKS,
              name: "Read Books",
              description: "Learn old language to open an opportunity of learning old books",
              unlockCondition: function (e) {
                return !0;
              },
              maxLevel: 1,
              getCost:
                ((qi = {}),
                (qi[i.COINS] = function (e) {
                  return { A: new E.Z(20), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (qi[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(1e3), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                qi),
            },
            {
              id: a.RUNE_LANGUAGE,
              name: "Rune Language",
              description: "Learn rune language to enable reading runic manuscripts",
              unlockCondition: function (e) {
                return !0;
              },
              maxLevel: 1,
              getCost:
                ((Fi = {}),
                (Fi[i.COINS] = function (e) {
                  return { A: new E.Z(40), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (Fi[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(2500), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                Fi),
            },
            {
              id: a.LAZY_CRYSTAL,
              name: "Lazy Crystal",
              description: "Unlock crystal that allows upgrades automation",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.RUNE_LANGUAGE) > 0;
              },
              maxLevel: 1,
              getCost:
                ((Yi = {}),
                (Yi[i.COINS] = function (e) {
                  return { A: new E.Z(50), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (Yi[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(5e3), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                Yi),
            },
            {
              id: a.GOLD_CRYSTAL,
              name: "Gold Crystal",
              description: "Unlock gold crystal that increase gold caps",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.RUNE_LANGUAGE) > 0;
              },
              maxLevel: 1,
              getCost:
                ((Ki = {}),
                (Ki[i.COINS] = function (e) {
                  return { A: new E.Z(30), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (Ki[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(2560), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                Ki),
            },
            {
              id: a.ENDURANCE_RUNE,
              name: "Endurance Rune",
              description: "Unlock new rune that can significantly boost your body",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.GOLD_CRYSTAL) > 0;
              },
              maxLevel: 1,
              getCost:
                ((ji = {}),
                (ji[i.COINS] = function (e) {
                  return { A: new E.Z(80), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                (ji[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(16e3), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                ji),
            },
            {
              id: a.MUSCLE_RUNE,
              name: "Muscle Rune",
              description: "Learn new rune, that can boost your body power",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.GOLD_CRYSTAL) > 0;
              },
              maxLevel: 1,
              getCost:
                ((Vi = {}),
                (Vi[i.COINS] = function (e) {
                  return { A: new E.Z(125), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (Vi[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(25e3), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                Vi),
            },
            {
              id: a.TRAINING_CHAMBERS,
              name: "Training Chambers Access",
              description: "Visit local arena to obtain access to advanced training lessons",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.MUSCLE_RUNE) > 0;
              },
              maxLevel: 1,
              getCost:
                ((zi = {}),
                (zi[i.COINS] = function (e) {
                  return { A: new E.Z(250), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (zi[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(25e5), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                zi),
            },
            {
              id: a.GOLD_PROTECTION,
              name: "Coins Protection",
              description: "Protected Gold Stash prevent coins from being reset on runic sacrifice",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.GOLD_CRYSTAL) > 0;
              },
              maxLevel: 1,
              getCost:
                ((Ji = {}),
                (Ji[i.COINS] = function (e) {
                  return { A: new E.Z(100), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (Ji[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(15e3), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                Ji),
            },
            {
              id: a.MERCENARIES,
              name: "Mercenaries Market",
              description: "Finally you became nobble enough to encourage other people to work for you. They wont do it for free, however",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.GOLD_CRYSTAL) > 0;
              },
              maxLevel: 1,
              getCost:
                ((Qi = {}),
                (Qi[i.COINS] = function (e) {
                  return { A: new E.Z(12225), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (Qi[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z("1.25e+9"), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                Qi),
            },
            {
              id: a.RUNE_PROTECTION,
              name: "Rune Protection",
              description: "Create magic barriers on your runes, preventing some amounts of runes reset on sacrifice (excepting the one that you sacrificing)",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.GOLD_PROTECTION) > 0;
              },
              maxLevel: 5,
              getCost:
                (($i = {}),
                ($i[i.COINS] = function (e) {
                  return { A: new E.Z(125), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                ($i[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(3e4), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                $i),
            },
            {
              id: a.KNOWLEDGE_UPGRADES,
              name: "Knowledge Knowledge",
              description: "Unlock new ways of improvement of your magic workplace to further advance your learning capabilities",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.RUNE_LANGUAGE) > 0;
              },
              maxLevel: 1,
              getCost:
                ((er = {}),
                (er[i.COINS] = function (e) {
                  return { A: new E.Z(100), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (er[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(16e3), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                er),
            },
            {
              id: a.APTITUDE,
              name: "Aptitude",
              description: "Learn new techniques to increase your mental powers",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.KNOWLEDGE_UPGRADES) > 0;
              },
              maxLevel: 1,
              getCost:
                ((tr = {}),
                (tr[i.COINS] = function (e) {
                  return { A: new E.Z(150), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (tr[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(1e5), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                tr),
            },
            {
              id: a.BRAINSTORM,
              name: "Brainstorm",
              description: "Devote your time to magic investigations",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.KNOWLEDGE_UPGRADES) > 0;
              },
              maxLevel: 1,
              getCost:
                ((nr = {}),
                (nr[i.COINS] = function (e) {
                  return { A: new E.Z(150), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (nr[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(1e5), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                nr),
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
                ((ir = {}),
                (ir[i.COINS] = function (e) {
                  return { A: new E.Z(250), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (ir[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(8e5), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                ir),
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
                ((rr = {}),
                (rr[i.COINS] = function (e) {
                  return { A: new E.Z(300), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (rr[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(5e5), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                rr),
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
                ((or = {}),
                (or[i.COINS] = function (e) {
                  return { A: new E.Z(2500), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (or[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(25e6), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                or),
            },
            {
              id: a.WILLPOWER_TRAINING,
              name: "Willpower Training",
              description: "Unlock access to activities training your willpower",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.MEDITATE) > 0;
              },
              maxLevel: 1,
              getCost:
                ((ar = {}),
                (ar[i.COINS] = function (e) {
                  return { A: new E.Z(1250), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (ar[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z("1.0e+7"), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                ar),
            },
            {
              id: a.MANA_CRYSTAL,
              name: "Mana Crystal",
              description: "Use your knowledge to understand the source of magic flowing through your hands. Unlocks new crystal",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.MEDITATE) > 0;
              },
              maxLevel: 1,
              getCost:
                ((ur = {}),
                (ur[i.COINS] = function (e) {
                  return { A: new E.Z(1250), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (ur[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z("1.0e+7"), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                ur),
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
                ((sr = {}),
                (sr[i.COINS] = function (e) {
                  return { A: new E.Z(2400), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (sr[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z("1.25e+8"), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                sr),
            },
            {
              id: a.BASIC_WIZARDRY,
              name: "Basic Wizardry",
              description: "Get access to wizard beginners school entry. Unlocks new upgrades and possibility to learn spells",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.MEDITATE) > 0;
              },
              maxLevel: 1,
              getCost:
                ((cr = {}),
                (cr[i.COINS] = function (e) {
                  return { A: new E.Z(5e3), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (cr[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z("1.e+9"), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                cr),
            },
            {
              id: a.ILLUSION_SPELLS,
              name: "Illusion Spells",
              description:
                "Unlock your first magic spells! The very basic school is Illusion, focused on making things looking not what they are. Manipulate with spatial and optical features of things",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.BASIC_WIZARDRY) > 0;
              },
              maxLevel: 1,
              getCost:
                ((lr = {}),
                (lr[i.COINS] = function (e) {
                  return { A: new E.Z(1e4), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (lr[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z("2.5e+9"), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                lr),
            },
            {
              id: a.SPARK_GENERATION,
              name: "Spark Generation",
              description: "Unlock new resource - magically powered electricity, that can be created using new magic school spells - Conjuration",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.ILLUSION_SPELLS) > 0;
              },
              maxLevel: 1,
              getCost:
                ((dr = {}),
                (dr[i.COINS] = function (e) {
                  return { A: new E.Z(5e4), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (dr[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(1e10), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                dr),
            },
            {
              id: a.SPARK_CONTAINER,
              name: "Spark Container",
              description: "Could you hold more magic electricity you produce?",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.SPARK_GENERATION) > 0;
              },
              maxLevel: 1,
              getCost:
                ((pr = {}),
                (pr[i.COINS] = function (e) {
                  return { A: new E.Z(25e4), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (pr[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(1e11), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                pr),
            },
            {
              id: a.SPARK_INFUSION,
              name: "Spark Infusion",
              description: "Use sparks to boost your body",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.SPARK_GENERATION) > 0;
              },
              maxLevel: 1,
              getCost:
                ((fr = {}),
                (fr[i.COINS] = function (e) {
                  return { A: new E.Z(3e5), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (fr[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(125e9), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                fr),
            },
            {
              id: a.SPARK_MIND_INFUSION,
              name: "Spark Mind Infusion",
              description:
                "Scientists saying brain is also part of humans body. Not that mages should believe in science, but maybe you could enchant your mind as well?",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.SPARK_INFUSION) > 0;
              },
              maxLevel: 1,
              getCost:
                ((gr = {}),
                (gr[i.COINS] = function (e) {
                  return { A: new E.Z(1e6), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (gr[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(1e12), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                gr),
            },
            {
              id: a.SPELLBINDING_TRAINING,
              name: "Courses of Apprentice",
              description: "Finally you can start learning true magic... Aren't you?",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.SPARK_MIND_INFUSION) > 0;
              },
              maxLevel: 1,
              getCost:
                ((mr = {}),
                (mr[i.COINS] = function (e) {
                  return { A: new E.Z(5e6), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (mr[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(1e13), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                mr),
            },
            {
              id: a.ELVEN_RUNE,
              name: "Elven Rune",
              description: "Open new opportunities by learning elven language, unlocking new rune",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.SPELLBINDING_TRAINING) > 0;
              },
              maxLevel: 1,
              getCost:
                ((hr = {}),
                (hr[i.COINS] = function (e) {
                  return { A: new E.Z("5.e+7"), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (hr[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(1e14), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                hr),
            },
            {
              id: a.ELVEN_LIBRARY,
              name: "Elven Library",
              description: "Investigate better elven science to learn more about magic and understand the world of wizardry",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.SPELLBINDING_TRAINING) > 0;
              },
              maxLevel: 1,
              getCost:
                ((Ar = {}),
                (Ar[i.COINS] = function (e) {
                  return { A: new E.Z("5.e+8"), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (Ar[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z("1.5e+15"), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                Ar),
            },
            {
              id: a.CONJURATION_STUDY,
              name: "Conjuration Study",
              description: "Unlock new training, focused on conjuration training",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.ELVEN_LIBRARY) > 0;
              },
              maxLevel: 1,
              getCost:
                ((Er = {}),
                (Er[i.COINS] = function (e) {
                  return { A: new E.Z("2.e+9"), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (Er[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z("1.0e+16"), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                Er),
            },
            {
              id: a.WELLNESS_CRYSTAL,
              name: "Wellness Crystal",
              description: "What if you try to make crystal creating illusion of wellness? You could use magic to make you rich!",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.ILLUSION_SPELLS) > 0 && e.city.academyUpgrades.getUpgradeLevel(a.MERCENARIES) > 0;
              },
              maxLevel: 1,
              getCost:
                ((vr = {}),
                (vr[i.COINS] = function (e) {
                  return { A: new E.Z(25e4), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (vr[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(1e11), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                vr),
            },
            {
              id: a.WOODWORKING,
              name: "Woodworking",
              description: "Learn how to combine your magic with your handwork to create wood and something useful from it!",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.SPARK_GENERATION) > 0 && e.city.academyUpgrades.getUpgradeLevel(a.MERCENARIES) > 0;
              },
              maxLevel: 1,
              getCost:
                ((yr = {}),
                (yr[i.COINS] = function (e) {
                  return { A: new E.Z(48e4), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (yr[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(25e10), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                yr),
            },
            {
              id: a.PAPERWORKING,
              name: "Paperworking",
              description: "If you can work with wood, you can do so with paper",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.WOODWORKING) > 0;
              },
              maxLevel: 1,
              getCost:
                ((wr = {}),
                (wr[i.COINS] = function (e) {
                  return { A: new E.Z(125e4), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (wr[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(1e12), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                wr),
            },
            {
              id: a.STONEWORKING,
              name: "Stoneworking",
              description: "Lets master some harder materials",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.WOODWORKING) > 0;
              },
              maxLevel: 1,
              getCost:
                ((br = {}),
                (br[i.COINS] = function (e) {
                  return { A: new E.Z(5e6), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (br[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(1e13), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                br),
            },
            {
              id: a.CHARGED_CRAFTING,
              name: "Charged Crafting",
              description: "Learn how to use magic sparks to create new crafting materials and structures.",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.WOODWORKING) > 0;
              },
              maxLevel: 1,
              getCost:
                ((Ir = {}),
                (Ir[i.COINS] = function (e) {
                  return { A: new E.Z("5.e+7"), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (Ir[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(1e14), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                Ir),
            },
            {
              id: a.GLASSMAKING,
              name: "Glassmaking",
              description: "Ok, if you can make stone - you can crash it into sand, and than smelt into glass. Arent you?",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.STONEWORKING) > 0;
              },
              maxLevel: 1,
              getCost:
                ((Cr = {}),
                (Cr[i.COINS] = function (e) {
                  return { A: new E.Z("4.e+8"), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (Cr[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(5e14), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                Cr),
            },
            {
              id: a.METALWORKING,
              name: "Metalworking",
              description: "Now that you can manage high temperatures, you could also smelt iron ore",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.STONEWORKING) > 0;
              },
              maxLevel: 1,
              getCost:
                ((Nr = {}),
                (Nr[i.COINS] = function (e) {
                  return { A: new E.Z("2.e+9"), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (Nr[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(2e16), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                Nr),
            },
            {
              id: a.BATTLE_MASTERY,
              name: "Battle Mastery",
              description: "Unlocks fights",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.METALWORKING) > 0;
              },
              maxLevel: 1,
              getCost:
                ((Rr = {}),
                (Rr[i.COINS] = function (e) {
                  return { A: new E.Z("5.e+9"), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (Rr[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(1e17), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                Rr),
            },
            {
              id: a.BONE_EXTRACTION,
              name: "Bone Extraction",
              description: "Unlocks obtaining bones from battles",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.BATTLE_MASTERY) > 0;
              },
              maxLevel: 1,
              getCost:
                ((Lr = {}),
                (Lr[i.COINS] = function (e) {
                  return { A: new E.Z("1.e+10"), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (Lr[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(5e18), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                Lr),
            },
            {
              id: a.BATTLE_TRAINING,
              name: "Battle Training",
              description: "Claim access to battle mages beginners school, that gives you possibility to train basic fighting skills",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.BATTLE_MASTERY) > 0;
              },
              maxLevel: 1,
              getCost:
                ((Or = {}),
                (Or[i.COINS] = function (e) {
                  return { A: new E.Z("1.e+10"), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (Or[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(5e18), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                Or),
            },
            {
              id: a.REFLEXES_TRAINING,
              name: "Reflexes Training",
              description:
                "Fighting not only gives you loot, but knowledge. You understand your body better now. You understand how your reaction works. And a little more magic can make it even better...",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.BATTLE_MASTERY) > 0;
              },
              maxLevel: 1,
              getCost:
                ((Tr = {}),
                (Tr[i.COINS] = function (e) {
                  return { A: new E.Z("2.e+12"), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (Tr[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(2e21), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                Tr),
            },
            {
              id: a.SPELLSINGING_TRAINING,
              name: "Spell-singing Training",
              description: "Bring your spell mastery to new level using innovative methods of casting",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.REFLEXES_TRAINING) > 0;
              },
              maxLevel: 1,
              getCost:
                ((Sr = {}),
                (Sr[i.COINS] = function (e) {
                  return { A: new E.Z("5.e+13"), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (Sr[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(5e22), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                Sr),
            },
            {
              id: a.FORTITUDE_TRAINING,
              name: "Fortitude Training",
              description: "Reveal new ways of improving your willpower",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.SPELLSINGING_TRAINING) > 0;
              },
              maxLevel: 1,
              getCost:
                ((Mr = {}),
                (Mr[i.COINS] = function (e) {
                  return { A: new E.Z("5.e+14"), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (Mr[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(2e23), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                Mr),
            },
            {
              id: a.PROTECTION_SPELLS,
              name: "Basic Protection Spells",
              description: "Learn basic protection spells that will significantly boost your survivability in fights",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.BATTLE_MASTERY) > 0;
              },
              maxLevel: 1,
              getCost:
                ((Zr = {}),
                (Zr[i.COINS] = function (e) {
                  return { A: new E.Z("1.e+11"), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (Zr[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(1e20), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                Zr),
            },
            {
              id: a.ADVANCED_BONES_MECHANISMS,
              name: "Bones Mechanisms",
              description: "Combine engineering with magic to unlock some new structures",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.BONE_EXTRACTION) > 0;
              },
              maxLevel: 1,
              getCost:
                ((Pr = {}),
                (Pr[i.COINS] = function (e) {
                  return { A: new E.Z("1.e+11"), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (Pr[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(1e20), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                Pr),
            },
            {
              id: a.PROTECTION_CRYSTAL,
              name: "Protection Crystal",
              description: "Now you know that you can connect your crystals to some kind of defensive aura",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.PROTECTION_SPELLS) > 0;
              },
              maxLevel: 1,
              getCost:
                ((_r = {}),
                (_r[i.COINS] = function (e) {
                  return { A: new E.Z("2.e+11"), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (_r[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(4e20), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                _r),
            },
            {
              id: a.EVOCATION_SPELLS,
              name: "Evocation Spells",
              description: "Learn how to destroy with your magic powers",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.PROTECTION_SPELLS) > 0;
              },
              maxLevel: 1,
              getCost:
                ((Gr = {}),
                (Gr[i.COINS] = function (e) {
                  return { A: new E.Z("5.e+11"), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (Gr[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(9e20), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                Gr),
            },
            {
              id: a.BONE_DRYING,
              name: "Bone Drying",
              description: "Advanced bone processing let now store them in cellar. Cellar now also boost bone storage",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.ADVANCED_BONES_MECHANISMS) > 0;
              },
              maxLevel: 1,
              getCost:
                ((Br = {}),
                (Br[i.COINS] = function (e) {
                  return { A: new E.Z("2.e+12"), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (Br[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(15e20), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                Br),
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
                ((Dr = {}),
                (Dr[i.COINS] = function (e) {
                  return { A: new E.Z("5.e+12"), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (Dr[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(3e21), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                Dr),
            },
            {
              id: a.ADVANCED_EVOCATION,
              name: "Advanced Evocation",
              description: "Unlock new evocation spells",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.EVOCATION_SPELLS) > 0;
              },
              maxLevel: 1,
              getCost:
                ((Ur = {}),
                (Ur[i.COINS] = function (e) {
                  return { A: new E.Z("5.e+12"), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (Ur[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(5e21), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                Ur),
            },
            {
              id: a.ADVANCED_FIGHT_MOVES,
              name: "Advanced Fight Moves",
              description: "Unlock new hit types",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.EVOCATION_SPELLS) > 0;
              },
              maxLevel: 1,
              getCost:
                ((kr = {}),
                (kr[i.COINS] = function (e) {
                  return { A: new E.Z("5.e+12"), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (kr[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(5e21), B: new E.Z(1.75), type: R.EXPONENTIAL };
                }),
                kr),
            },
          ],
          Io = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
              function i() {
                this.constructor = t;
              }
              e(t, n), (t.prototype = null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
            };
          })(),
          Co = function () {
            return (
              (Co =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                  return e;
                }),
              Co.apply(this, arguments)
            );
          },
          No = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.upgrades = []),
                (t.cachedUpgrades = []),
                (t.tickPerf = 0),
                t.workDispatcher.on("[academy-upgrade] do upgrade", function (e) {
                  console.log("do upgrade", e), t.doUpgrade(e.id);
                }),
                t
              );
            }
            return (
              Io(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                this.upgrades =
                  (null == e
                    ? void 0
                    : e.upgrades.map(function (e) {
                        return Co({}, e);
                      })) || [];
              }),
              (t.prototype.exportData = function () {
                return {
                  upgrades: this.upgrades.map(function (e) {
                    return Co({}, e);
                  }),
                };
              }),
              (t.prototype.regenerateCache = function () {
                var e = this;
                (this.tickPerf = 0),
                  (this.cachedUpgrades = bo.map(function (t) {
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
                    var n = bo.find(function (e) {
                      return e.id === t.id;
                    });
                    if (!n) return t;
                    var i = e.upgrades.find(function (e) {
                      return e.id === n.id;
                    });
                    i || ((i = { id: n.id, level: 0 }), e.upgrades.push(i));
                    var r = ce.calcBatchAll(n.getCost, gl.getInstance(), new E.Z(i.level), gl.getInstance().resources.getBatchObject()),
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
                      i.level <= 0 && ml.newNotifications.registerNotification("city:academy:upgrade:".concat(n.id)),
                      Co(Co({}, t), {
                        etaNum: o,
                        isAvailable: a.greaterThanOrEqualTo(1),
                        cost: gl
                          .getInstance()
                          .resources.assertEnought(r, gl.getInstance().resources.getBatchObject(), gl.getInstance().resources.getBatchBalanceObject()),
                        progress: a.lessThan(1) ? (100 * a.toNumber()).toPrecision(3) : "100",
                      })
                    );
                  });
              }),
              (t.prototype.dataToUI = function () {
                return { list: this.dataFromCache(), isUnlocked: gl.getInstance().resources.getResourceCap(i.MANA).greaterThanOrEqualTo(10) };
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
                var r = ce.calcBatchAll(e.getCost, gl.getInstance(), new E.Z(i.level + t), gl.getInstance().resources.getBatchObject()),
                  o = r.reduce(function (e, t) {
                    return e && !t.isBlocked;
                  }, !0),
                  a = r.reduce(function (e, t) {
                    return Math.max(e, t.eta);
                  }, 0),
                  u = r.reduce(function (e, t) {
                    return E.Z.min(e, t.max);
                  }, new E.Z("1.e+30000")),
                  s = e.unlockCondition(ml);
                return (
                  (this.tickPerf += performance.now() - n),
                  {
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    isUnlocked: s,
                    isAvailable: u.greaterThanOrEqualTo(1),
                    cost: gl
                      .getInstance()
                      .resources.assertEnought(r, gl.getInstance().resources.getBatchObject(), gl.getInstance().resources.getBatchBalanceObject()),
                    progress: u.lessThan(1) ? (100 * u.toNumber()).toPrecision(3) : "100",
                    isMaxedOut: !!e.maxLevel && e.maxLevel <= i.level,
                    maxLevel: e.maxLevel,
                    level: i.level + t,
                    isBlocked: !o,
                    etaNum: a,
                  }
                );
              }),
              (t.prototype.doUpgrade = function (e) {
                var t = bo.find(function (t) {
                  return t.id === e;
                });
                if ((console.log("[upgrade] db", t), t)) {
                  var n = this.upgrades.findIndex(function (t) {
                    return t.id === e;
                  });
                  if (n < 0) (n = this.upgrades.length), this.upgrades.push({ id: e, level: 0 });
                  else if (t.maxLevel && this.upgrades[n].level >= t.maxLevel) return;
                  var i = ce.calcBatchAll(t.getCost, gl.getInstance(), new E.Z(this.upgrades[n].level), gl.getInstance().resources.getBatchObject()),
                    r = i.reduce(function (e, t) {
                      return E.Z.min(e, t.max.floor());
                    }, new E.Z("1.e+30000"));
                  if ((console.log("[upgrade] mx: ", r.toNumber()), !r.lessThan(1)))
                    return (
                      (this.upgrades[n].level = this.upgrades[n].level + 1),
                      console.log("costs: ", i),
                      gl.getInstance().resources.subtractResourceBatch(i),
                      ml.resources.reassertBalances(),
                      ml.regenerateCache(),
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
          Ro = No.getInstance(),
          Lo = [
            {
              id: "spiritual",
              name: "Spiritual",
              description: "",
              unlockCondition: function (e) {
                return !0;
              },
              getCost: ((xr = {}), (xr[i.COINS] = new E.Z(1)), xr),
              getGainMultiplier: ((Hr = {}), (Hr[i.MANA] = 0.1), Hr),
            },
            {
              id: "mana-capable",
              name: "Capable",
              description: "",
              unlockCondition: function (e) {
                return !0;
              },
              getCost: ((Wr = {}), (Wr[i.COINS] = new E.Z(1)), Wr),
              getCapacityMultiplier: ((Xr = {}), (Xr[i.MANA] = 0.1), Xr),
            },
            {
              id: "intelligent",
              name: "Intelligent",
              description: "",
              unlockCondition: function (e) {
                return !0;
              },
              getCost: ((qr = {}), (qr[i.COINS] = new E.Z(1)), qr),
              getGainMultiplier: ((Fr = {}), (Fr[i.KNOWLEDGE] = 0.1), Fr),
            },
            {
              id: "wise",
              name: "Wise",
              description: "",
              unlockCondition: function (e) {
                return !0;
              },
              getCost: ((Yr = {}), (Yr[i.COINS] = new E.Z(1)), Yr),
              getCapacityMultiplier: ((Kr = {}), (Kr[i.KNOWLEDGE] = 0.1), Kr),
            },
            {
              id: "erudite",
              name: "Erudite",
              description: "",
              unlockCondition: function (e) {
                return !0;
              },
              getCost: ((jr = {}), (jr[i.COINS] = new E.Z(1)), jr),
              getAttributeMultiplier: ((Vr = {}), (Vr[c.RUNE_READING] = 0.1), Vr),
            },
          ],
          Oo = [
            "Aelwyn",
            "Alaric",
            "Arius",
            "Artemis",
            "Azriel",
            "Balthazar",
            "Bran",
            "Caelum",
            "Cassius",
            "Cedric",
            "Darius",
            "Draco",
            "Eldric",
            "Elric",
            "Emrys",
            "Ezra",
            "Faelan",
            "Fenris",
            "Gaius",
            "Galen",
            "Gavriel",
            "Hadrian",
            "Halcyon",
            "Icarus",
            "Ignatius",
            "Jareth",
            "Kael",
            "Lazarus",
            "Leander",
            "Lucian",
            "Magnus",
            "Marius",
            "Nero",
            "Orion",
            "Osric",
            "Peregrine",
            "Quintus",
            "Ragnar",
            "Raven",
            "Rex",
            "Saros",
            "Silas",
            "Sirius",
            "Taliesin",
            "Tarquin",
            "Theron",
            "Tiberius",
            "Ulysses",
            "Valerian",
            "Viktor",
            "Xander",
            "Xerxes",
            "Zephyr",
            "Zorion",
            "Zephyrus",
            "Altair",
            "Aurelius",
            "Branwen",
            "Corvus",
            "Cyrus",
            "Dante",
            "Evander",
            "Faust",
            "Gideon",
            "Hector",
            "Ivor",
            "Jasper",
            "Kyros",
            "Lysander",
            "Mael",
            "Nikolas",
            "Oberon",
            "Phelan",
            "Raphael",
            "Remus",
            "Severin",
            "Soren",
            "Taranis",
            "Thaddeus",
            "Vladimir",
            "Wolfram",
            "Xanthus",
            "Yorick",
            "Zane",
            "Aldric",
            "Ansel",
            "Baird",
            "Caius",
            "Dariel",
            "Emeric",
            "Frey",
            "Garrick",
            "Helios",
            "Isaiah",
            "Julius",
          ],
          To = [
            "Nightshade",
            "Dragonheart",
            "Stormbringer",
            "Shadowmancer",
            "Moonwhisper",
            "Flamebinder",
            "Starweaver",
            "Frostweaver",
            "Voidwalker",
            "Sunweaver",
            "Duskwhisper",
            "Windrider",
            "Ironspell",
            "Wildsage",
            "Runeblade",
            "Thundershaper",
            "Mistweaver",
            "Skytalon",
            "Soulbinder",
            "Dreamweaver",
            "Frostguard",
            "Firemantle",
            "Stormwatcher",
            "Shadowbinder",
            "Lightbringer",
            "Winterborn",
            "Aetherwing",
            "Darkweaver",
            "Flamekeeper",
            "Starcaller",
            "Voidshaper",
            "Sunstrider",
            "Dawnwhisper",
            "Ravenwing",
            "Thunderbinder",
            "Soulcatcher",
            "Mysticblade",
            "Skywhisper",
            "Serpenteye",
            "Lightrunner",
            "Firestorm",
            "Ironward",
            "Stoneheart",
            "Dragonbane",
            "Winterstrike",
            "Starshadow",
            "Frostfall",
            "Silverglow",
            "Stormsinger",
            "Darkmoon",
            "Sunshard",
            "Flameseeker",
            "Mistheart",
            "Ravenspell",
            "Thunderforge",
            "Duskblade",
            "Windsmith",
            "Skykeeper",
            "Soulforge",
            "Firebrand",
            "Ironfang",
            "Galewind",
            "Lightshaper",
            "Stargazer",
            "Stormblade",
            "Voidheart",
            "Dawnrider",
            "Frostcaller",
            "Mysticsong",
            "Shadowflame",
            "Sunblade",
            "Firesong",
            "Nightwind",
            "Runeborn",
            "Thunderhand",
            "Wintershadow",
            "Etherwind",
            "Starforge",
            "Frostbinder",
            "Lightweaver",
            "Stormglow",
            "Voidfrost",
            "Dawnseeker",
            "Mistbinder",
            "Ravensong",
            "Skyrider",
            "Soulshadow",
            "Firewatcher",
            "Ironshaper",
            "Moondancer",
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
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
              function i() {
                this.constructor = t;
              }
              e(t, n), (t.prototype = null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
            };
          })(),
          Mo = function () {
            return (
              (Mo =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                  return e;
                }),
              Mo.apply(this, arguments)
            );
          },
          Zo = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.shop = []),
                (t.hired = []),
                (t.shopCached = []),
                (t.hiredCached = []),
                (t.totalCosts = {}),
                t.workDispatcher.on("[mercenaries] do hire", function (e) {
                  console.log("do hire", e), t.doHire(e.id);
                }),
                t.workDispatcher.on("[mercenaries] do fire", function (e) {
                  console.log("do fire", e), t.doFire(e.id);
                }),
                t.workDispatcher.on("[mercenaries] do level up", function (e) {
                  console.log("do fire", e), t.doLevelUp(e.id, e.delta || 1);
                }),
                t.workDispatcher.on("[mercenaries] do set effort", function (e) {
                  console.log("do set effort", e), t.doSetEffort(e.id, e.effort);
                }),
                t.workDispatcher.on("[mercenaries] do regenerate shop", function (e) {
                  console.log("do regenerate", e), t.regenerateShop();
                }),
                t
              );
            }
            return (
              So(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                (this.shop = (null == e ? void 0 : e.shop) || []),
                  (this.hired = (null == e ? void 0 : e.hired) || []),
                  this.shop.length || this.regenerateShop();
              }),
              (t.prototype.exportData = function () {
                return { shop: this.shop, hired: this.hired };
              }),
              (t.prototype.canAfford = function (e) {
                var t, n;
                for (var i in this.totalCosts)
                  if (null === (t = this.totalCosts[i]) || void 0 === t ? void 0 : t.greaterThan(ml.resources.getResource(i).mul(10 * e)))
                    return console.log("COST: ", i, null === (n = this.totalCosts[i]) || void 0 === n ? void 0 : n.toNumber()), !1;
                return !0;
              }),
              (t.prototype.process = function (e) {
                var t = this;
                this.canAfford(e) ||
                  (this.hired.forEach(function (e, n) {
                    t.hired[n].effort = t.hired[n].effort > 0.01 ? t.hired[n].effort / 2 : 0;
                  }),
                  ml.resources.reassertBalances(),
                  ml.regenerateCache());
              }),
              (t.prototype.regenerateShop = function () {
                this.shop = [];
                for (var e = 0; e < 5; e++) {
                  var t = this.generateMercenary();
                  this.shop.push(t);
                }
                return this.regenerateCache(), this.shop;
              }),
              (t.prototype.getMaxMercenaries = function () {
                return 2;
              }),
              (t.prototype.generateMercenary = function () {
                for (
                  var e,
                    t,
                    n = Math.pow(Math.random(), 10),
                    i = Math.ceil(n),
                    r = {
                      id: "mer-".concat(Math.random()),
                      name: ((e = Oo[Math.floor(Math.random() * Oo.length)]), (t = To[Math.floor(Math.random() * To.length)]), "".concat(e, " ").concat(t)),
                      level: 1,
                      effort: 100,
                      traits: [],
                    },
                    o = (function (e, t, n) {
                      if (n || 2 === arguments.length)
                        for (var i, r = 0, o = t.length; r < o; r++) (!i && (r in t)) || (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
                      return e.concat(i || Array.prototype.slice.call(t));
                    })([], Lo, !0),
                    a = 0;
                  a < i;
                  a++
                ) {
                  var u = Math.floor(Math.random() * o.length),
                    s = o.splice(u, 1)[0];
                  r.traits.push({ id: s.id, quality: 0.5 + 0.5 * Math.random() });
                }
                return r;
              }),
              (t.prototype.regenerateCache = function () {
                var e = this;
                (this.shopCached = this.shop.map(function (t) {
                  return e.calculateMercenary(t);
                })),
                  (this.hiredCached = this.hired.map(function (t) {
                    return e.calculateMercenary(t);
                  })),
                  (this.totalCosts = {}),
                  this.hiredCached.forEach(function (t) {
                    var n = (t.level * t.effort) / 100;
                    ce.calcBatch(t.getCost, gl.getInstance(), new E.Z(n)).forEach(function (t) {
                      var n;
                      e.totalCosts[t.id] || (e.totalCosts[t.id] = new E.Z(0)),
                        (e.totalCosts[t.id] = null === (n = e.totalCosts[t.id]) || void 0 === n ? void 0 : n.plus(t.amount.minus(1)));
                    });
                  });
              }),
              (t.prototype.dataToUI = function () {
                var e = this;
                return {
                  isUnlocked: ml.city.academyUpgrades.getUpgradeLevel(a.MERCENARIES) > 0,
                  shop: this.shopCached.map(function (t) {
                    return e.processMercenaryToUI(t);
                  }),
                  hired: this.hiredCached.map(function (t) {
                    return e.processMercenaryToUI(t);
                  }),
                  maxHired: this.getMaxMercenaries(),
                };
              }),
              (t.prototype.processMercenaryToUI = function (e) {
                var t = (e.level * e.effort) / 100,
                  n = ce.calcBatch(e.getCost, gl.getInstance(), new E.Z(t)),
                  i = e.getGainMultiplier ? ce.calcBatch(e.getGainMultiplier, gl.getInstance(), new E.Z(t)) : [],
                  r = e.getAttributeMultiplier ? ce.calcBatch(e.getAttributeMultiplier, gl.getInstance(), new E.Z(t)) : [],
                  o = e.getCapacityMultiplier ? ce.calcBatch(e.getCapacityMultiplier, gl.getInstance(), new E.Z(t)) : [],
                  a = ce.calcBatchAll(e.getLevelupCost, gl.getInstance(), new E.Z(e.level), gl.getInstance().resources.getBatchObject()),
                  u = a.reduce(function (e, t) {
                    return E.Z.min(e, t.max);
                  }, new E.Z("1.e+30000"));
                return {
                  id: e.id,
                  name: e.name,
                  description: e.description,
                  consume: n.map(function (e) {
                    return Mo(Mo({}, e), { amountValue: e.amount.minus(1).toString(), amount: J(e.amount.minus(1)) });
                  }),
                  gainMult: i.map(function (e) {
                    return Mo(Mo({}, e), { amountValue: e.amount.toString(), amount: "x".concat(J(e.amount)) });
                  }),
                  capMult: o.map(function (e) {
                    return Mo(Mo({}, e), { amountValue: e.amount.toString(), amount: "x".concat(J(e.amount)) });
                  }),
                  attrMult: r.map(function (e) {
                    return Mo(Mo({}, e), { amountValue: e.amount.toString(), amount: "x".concat(J(e.amount)) });
                  }),
                  level: e.level,
                  progress: "0",
                  effort: e.effort,
                  maxAmt: u.toNumber(),
                  isLevelupAvailable: u.greaterThanOrEqualTo(1),
                  levelupCost: gl
                    .getInstance()
                    .resources.assertEnought(a, gl.getInstance().resources.getBatchObject(), gl.getInstance().resources.getBatchBalanceObject()),
                };
              }),
              (t.prototype.calculateMercenary = function (e) {
                var t,
                  n = {},
                  r = {},
                  o = {},
                  a = {},
                  u = [];
                return (
                  e.traits.forEach(function (e) {
                    var t = Lo.find(function (t) {
                      return t.id === e.id;
                    });
                    t &&
                      (u.push(t.name),
                      t.getAttributeMultiplier &&
                        Object.entries(t.getAttributeMultiplier).forEach(function (t) {
                          var n = t[0],
                            i = t[1];
                          r[n] || (r[n] = 0), (r[n] += i * e.quality);
                        }),
                      t.getCapacityMultiplier &&
                        Object.entries(t.getCapacityMultiplier).forEach(function (t) {
                          var n = t[0],
                            i = t[1];
                          o[n] || (o[n] = 0), (o[n] += i * e.quality);
                        }),
                      t.getGainMultiplier &&
                        Object.entries(t.getGainMultiplier).forEach(function (t) {
                          var i = t[0],
                            r = t[1];
                          n[i] || (n[i] = 0), (n[i] += r * e.quality);
                        }),
                      t.getCost &&
                        Object.entries(t.getCost).forEach(function (t) {
                          var n = t[0],
                            i = t[1];
                          a[n] || (a[n] = new E.Z(0)), (a[n] = a[n].plus(i.mul(e.quality)));
                        }));
                  }),
                  {
                    id: e.id,
                    level: e.level,
                    name: e.name,
                    description: u.join(", "),
                    getCost: Di(a, function (e) {
                      return function (t) {
                        return { A: new E.Z(1), B: e.plus(1), type: R.EXPONENTIAL };
                      };
                    }),
                    getAttributeMultiplier: Di(r, function (e) {
                      return function (t) {
                        return { A: new E.Z(1), B: new E.Z(1 + e), type: R.EXPONENTIAL };
                      };
                    }),
                    getCapacityMultiplier: Di(o, function (e) {
                      return function (t) {
                        return { A: new E.Z(1), B: new E.Z(1 + e), type: R.EXPONENTIAL };
                      };
                    }),
                    getGainMultiplier: Di(n, function (e) {
                      return function (t) {
                        return { A: new E.Z(1), B: new E.Z(1 + e), type: R.EXPONENTIAL };
                      };
                    }),
                    effort: e.effort,
                    getLevelupCost:
                      ((t = {}),
                      (t[i.KNOWLEDGE] = function (e) {
                        return { A: new E.Z("2.e+9"), B: new E.Z(2), type: R.EXPONENTIAL };
                      }),
                      t),
                  }
                );
              }),
              (t.prototype.doHire = function (e) {
                if (!(this.hired.length >= this.getMaxMercenaries())) {
                  var t = this.shop.findIndex(function (t) {
                    return t.id === e;
                  });
                  if (!(t < 0)) {
                    var n = this.shop.splice(t, 1)[0];
                    this.hired.push(Mo(Mo({}, n), { effort: 0 })), ml.resources.reassertBalances(), ml.regenerateCache();
                  }
                }
              }),
              (t.prototype.doFire = function (e) {
                var t = this.hired.findIndex(function (t) {
                  return t.id === e;
                });
                if (!(t < 0)) {
                  var n = this.hired.splice(t, 1)[0];
                  this.shop.push(Mo(Mo({}, n), { effort: 0 })), ml.resources.reassertBalances(), ml.regenerateCache();
                }
              }),
              (t.prototype.doLevelUp = function (e, t) {
                var n = this.hired.findIndex(function (t) {
                  return t.id === e;
                });
                if (!(n < 0)) {
                  var i = this.hiredCached.find(function (t) {
                    return t.id === e;
                  });
                  if (i) {
                    var r = ce.calcBatchAll(i.getLevelupCost, gl.getInstance(), new E.Z(i.level), gl.getInstance().resources.getBatchObject(), new E.Z(t)),
                      o = r.reduce(function (e, t) {
                        return E.Z.min(e, t.max.floor());
                      }, new E.Z("1.e+30000"));
                    if ((console.log("[level-up] mx: ", o.toNumber()), !o.lessThan(1))) {
                      var a = E.Z.min(o, t);
                      return (
                        (this.hired[n].level += a.toNumber()),
                        console.log("costs: ", r, a.toNumber()),
                        gl.getInstance().resources.subtractResourceBatch(r),
                        this.regenerateCache(),
                        ml.resources.reassertBalances(),
                        ml.regenerateCache(),
                        !0
                      );
                    }
                  }
                }
              }),
              (t.prototype.doSetEffort = function (e, t) {
                var n = this.hired.findIndex(function (t) {
                  return t.id === e;
                });
                n < 0 ||
                  ((this.hired[n].effort = t && !Number.isNaN(+t) ? Math.min(100, Math.max(0, t)) : 0),
                  this.regenerateCache(),
                  ml.resources.reassertBalances(),
                  ml.regenerateCache());
              }),
              (t.prototype.getResourceBeingStoredMultiplier = function (e) {
                var t = this.hiredCached.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getCapacityMultiplier) || void 0 === n ? void 0 : n[e]);
                  }),
                  n = [],
                  i = new E.Z(1);
                return (
                  t.forEach(function (t) {
                    var n;
                    if (null === (n = t.getCapacityMultiplier) || void 0 === n ? void 0 : n[e]) {
                      var r = ce.calculate(ml, t.getCapacityMultiplier[e], new E.Z((t.level * t.effort) / 100));
                      i = i.plus(r).sub(1);
                    }
                  }, 0),
                  i.equals(1) || n.push({ label: "Mercenaries", value: i, id: "mercenary", category: "Mercenaries" }),
                  n
                );
              }),
              (t.prototype.getResourceBeingProducedMultiplier = function (e) {
                var t = this.hiredCached.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getGainMultiplier) || void 0 === n ? void 0 : n[e]);
                  }),
                  n = [],
                  i = new E.Z(1);
                return (
                  t.forEach(function (t) {
                    var n;
                    if (null === (n = t.getGainMultiplier) || void 0 === n ? void 0 : n[e]) {
                      var r = ce.calculate(ml, t.getGainMultiplier[e], new E.Z((t.level * t.effort) / 100));
                      i = i.plus(r).sub(1);
                    }
                  }, 0),
                  i.equals(1) || n.push({ label: "Mercenaries", value: i, id: "mercenary", category: "Mercenaries" }),
                  n
                );
              }),
              (t.prototype.getResourceBeingConsumed = function (e) {
                var t = this.hiredCached.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getCost) || void 0 === n ? void 0 : n[e]);
                  }),
                  n = [];
                return (
                  t.forEach(function (t) {
                    var i;
                    if (null === (i = t.getCost) || void 0 === i ? void 0 : i[e]) {
                      var r = ce.calculate(ml, t.getCost[e], new E.Z((t.level * t.effort) / 100)).minus(1);
                      r.equals(0) || n.push({ label: "Mercenary: ".concat(t.name), value: r, id: "mercenary-".concat(t.id), category: "Mercenaries" });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getAttributeMultiplier = function (e) {
                var t = this.hiredCached.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getAttributeMultiplier) || void 0 === n ? void 0 : n[e]);
                  }),
                  n = [],
                  i = new E.Z(1);
                return (
                  t.forEach(function (t) {
                    var n;
                    if (null === (n = t.getAttributeMultiplier) || void 0 === n ? void 0 : n[e]) {
                      var r = ce.calculate(ml, t.getAttributeMultiplier[e], new E.Z((t.level * t.effort) / 100));
                      i = i.plus(r).sub(1);
                    }
                  }, 0),
                  i.equals(1) || n.push({ label: "Mercenaries", value: i, id: "mercenary", category: "Mercenaries" }),
                  n
                );
              }),
              t
            );
          })(s),
          Po = Zo.getInstance(),
          _o = function (e, t) {
            var n = go.filter(t).reduce(function (e, t) {
              return (e[t.id] = t), e;
            }, {});
            return e.city.actions.actions.reduce(function (e, t) {
              var i = n[t.id];
              return i ? (e = e.plus(t.numPerformed.mul(i.xpGain))) : e;
            }, new E.Z(0));
          },
          Go = [
            {
              id: re.SCHOLAR,
              name: "Scholar",
              description: "Improve your learning abilities, increasing runes learning speed",
              unlockCondition: function (e) {
                return !0;
              },
              getPointsReward: function (e) {
                return _o(e, function () {
                  return !0;
                });
              },
              getBonus: function (e, t) {
                return E.Z.max(1, w(t.div(1e4), 1.5));
              },
              getBonusText: function (e) {
                return "x#BONUS# rune learning speed";
              },
              getMinimumPoints: function (e) {
                return new E.Z(1e5);
              },
            },
            {
              id: re.PHYSICAL,
              name: "Physical",
              description: "Improve your physical power, making all physical actions executed faster",
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
                return new E.Z(1e5);
              },
            },
            {
              id: re.MENTAL,
              name: "Mental",
              description: "Improve your mental power, making all mental actions executed faster",
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
                return new E.Z(1e5);
              },
            },
            {
              id: re.MAGICAL,
              name: "Magical",
              description: "Improve your magic power, making all spells executed faster",
              unlockCondition: function (e) {
                return ml.city.academyUpgrades.getUpgradeLevel(a.ILLUSION_SPELLS) > 0;
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
          Bo = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
              function i() {
                this.constructor = t;
              }
              e(t, n), (t.prototype = null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
            };
          })(),
          Do = function () {
            return (
              (Do =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                  return e;
                }),
              Do.apply(this, arguments)
            );
          },
          Uo = (function (e) {
            function t() {
              var t,
                n = e.call(this) || this;
              return (
                (n.state = []),
                (n.uiCache = []),
                (n.bonusesCached =
                  (((t = {})[re.SCHOLAR] = new E.Z(1)), (t[re.PHYSICAL] = new E.Z(1)), (t[re.MENTAL] = new E.Z(1)), (t[re.MAGICAL] = new E.Z(1)), t)),
                n.workDispatcher.on("[reincarnation] do reincarnate", function (e) {
                  console.log("do reincarnate", e), n.doReincarnate(e.id);
                }),
                n
              );
            }
            return (
              Bo(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                this.state =
                  (null == e
                    ? void 0
                    : e.resets.map(function (e) {
                        return Do(Do({}, e), { numPoints: new E.Z(e.numPoints) });
                      })) || [];
              }),
              (t.prototype.exportData = function () {
                return {
                  resets: this.state.map(function (e) {
                    return Do(Do({}, e), { numPoints: e.numPoints.toPrecision(18) });
                  }),
                };
              }),
              (t.prototype.regenerateCache = function () {
                var e = this;
                Go.forEach(function (t) {
                  var n = e.state.find(function (e) {
                    return e.id === t.id;
                  });
                  e.bonusesCached[t.id] = n ? t.getBonus(ml, n.numPoints) : new E.Z(1);
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
                  isUnlocked: gl.getInstance().city.academyUpgrades.getUpgradeLevel(a.REINCARNATION) > 0,
                };
              }),
              (t.prototype.processToUI = function (e) {
                var t = e.getPointsReward(ml),
                  n = this.state.find(function (t) {
                    return t.id === e.id;
                  }),
                  i = new E.Z(1);
                n && (i = n.numPoints);
                var r = e.getBonusText(ml),
                  o = r.replace("#BONUS#", J(e.getBonus(ml, i))),
                  a = r.replace("#BONUS#", J(e.getBonus(ml, t)));
                e.getSecondaryBonus &&
                  ((o = o.replace("#SECONDARY_BONUS#", J(e.getSecondaryBonus(ml, i)))), (a = a.replace("#SECONDARY_BONUS#", J(e.getSecondaryBonus(ml, t)))));
                var u = E.Z.max(e.getMinimumPoints(ml), i).sub(t);
                return (
                  t.greaterThanOrEqualTo(i) &&
                    u.lessThanOrEqualTo(0) &&
                    e.unlockCondition(ml) &&
                    ml.newNotifications.registerNotification("city:reincarnations:reincarnation:".concat(e.id)),
                  {
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    potentialBonus: a,
                    isAvailable: t.greaterThanOrEqualTo(i) && u.lessThanOrEqualTo(0),
                    pointsLeft: J(u),
                    isUnlocked: e.unlockCondition(ml),
                    bonus: o,
                  }
                );
              }),
              (t.prototype.doReincarnate = function (e) {
                var t = Go.find(function (t) {
                  return t.id === e;
                });
                if (t) {
                  var n = t.getPointsReward(ml),
                    i = this.state.findIndex(function (e) {
                      return e.id === t.id;
                    });
                  if (
                    (i < 0 && ((i = this.state.length), this.state.push({ id: e, numReincarnations: 0, numPoints: new E.Z(1) })),
                    !this.state[i].numPoints.greaterThan(n))
                  ) {
                    this.state[i].numPoints = n;
                    for (var r = 0; r < ml.learning.runes.runes.length; r++)
                      ml.city.academyUpgrades.getUpgradeLevel(a.RUNE_PROTECTION) <= 0
                        ? (ml.learning.runes.runes[r].level = new E.Z(0))
                        : (ml.learning.runes.runes[r].level = E.Z.min(
                            ml.learning.runes.runes[r].level,
                            Math.pow(2 * ml.city.academyUpgrades.getUpgradeLevel(a.RUNE_PROTECTION), 2)
                          )),
                        (ml.learning.runes.runes[r].isActive = !1),
                        (ml.learning.runes.runes[r].isLearning = !1),
                        (ml.learning.runes.runes[r].xp = new E.Z(0)),
                        (ml.learning.runes.runes[r].xpMult = new E.Z(1));
                    (ml.statistics.stats.fastestReincarnateTime = ml.statistics.stats.numReincarnations
                      ? Math.min(ml.statistics.stats.fastestReincarnateTime, ml.statistics.stats.timeThisReincarnation)
                      : ml.statistics.stats.timeThisReincarnation),
                      (ml.statistics.stats.timeThisReincarnation = 0),
                      ml.learning.wizardOrb.reset(),
                      ml.learning.runeUpgrades.reset(),
                      ml.newNotifications.resetNotifications(),
                      ml.resources.reset(),
                      ml.learning.runePresets.runDefault(),
                      this.state[i].numReincarnations++,
                      ml.city.actions.reset(),
                      ml.resources.reassertBalances(),
                      ml.regenerateCache(),
                      ml.learning.runePresets.applyPreset(),
                      ml.statistics.stats.numReincarnations++,
                      (ml.statistics.stats.actions = {});
                  }
                }
              }),
              (t.prototype.getBonus = function (e) {
                return (this.bonusesCached && this.bonusesCached[e]) || this.regenerateCache(), this.bonusesCached[e];
              }),
              t
            );
          })(s),
          ko = Uo.getInstance(),
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
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
              function i() {
                this.constructor = t;
              }
              e(t, n), (t.prototype = null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
            };
          })(),
          Ho = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (t.actions = wo), (t.academyUpgrades = Ro), (t.mercenaries = Po), (t.reincarnation = ko), t;
            }
            return (
              xo(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                this.actions.importData(null == e ? void 0 : e.actions),
                  this.academyUpgrades.importData(null == e ? void 0 : e.academy),
                  this.mercenaries.importData(null == e ? void 0 : e.mercenary),
                  this.reincarnation.importData(null == e ? void 0 : e.reincarnations);
              }),
              (t.prototype.exportData = function () {
                return {
                  actions: this.actions.exportData(),
                  academy: this.academyUpgrades.exportData(),
                  mercenary: this.mercenaries.exportData(),
                  reincarnations: this.reincarnation.exportData(),
                };
              }),
              (t.prototype.dataToUI = function () {
                var e = this.actions.dataToUI(),
                  t = this.academyUpgrades.dataToUI(),
                  n = this.mercenaries.dataToUI(),
                  i = this.reincarnation.dataToUI();
                return { isUnlocked: e.isUnlocked, mercenaries: n, academy: t, actions: e, reincarnation: i };
              }),
              (t.prototype.process = function (e) {
                this.actions.process(e), this.mercenaries.process(e);
              }),
              (t.prototype.regenerateCache = function () {
                this.academyUpgrades.regenerateCache(),
                  this.actions.regenerateCache(),
                  this.mercenaries.regenerateCache(),
                  this.reincarnation.regenerateCache();
              }),
              t
            );
          })(s),
          Wo = Ho.getInstance(),
          Xo = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
              function i() {
                this.constructor = t;
              }
              e(t, n), (t.prototype = null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
            };
          })(),
          qo = function () {
            return (
              (qo =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                  return e;
                }),
              qo.apply(this, arguments)
            );
          },
          Fo = {
            timeInGame: 0,
            timeThisRune: 0,
            fastestRuneTime: 0,
            numRuneResets: 0,
            numReincarnations: 0,
            timeThisReincarnation: 0,
            fastestReincarnateTime: 0,
            actions: {},
          },
          Yo = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (t.stats = qo({}, Fo)), t;
            }
            return (
              Xo(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                var t = e || { timeInGame: 0, timeThisRune: 0, numRuneResets: 0 };
                this.stats = qo(qo({}, Fo), t);
              }),
              (t.prototype.exportData = function () {
                return this.stats;
              }),
              (t.prototype.dataToUI = function () {
                return qo({}, this.stats);
              }),
              (t.prototype.process = function (e) {
                (this.stats.timeThisRune += e), (this.stats.timeInGame += e), (this.stats.timeThisReincarnation += e);
              }),
              (t.prototype.addActionTime = function (e, t) {
                var n;
                this.stats.actions[e] || (this.stats.actions[e] = 0),
                  (this.stats.actions[e] = ((null === (n = this.stats.actions) || void 0 === n ? void 0 : n[e]) || 0) + t);
              }),
              (t.prototype.reset = function () {}),
              t
            );
          })(s),
          Ko = Yo.getInstance(),
          jo = [
            {
              id: i.REFINED_WOOD,
              name: "Refine Wood",
              getCost:
                ((zr = {}),
                (zr[i.WOOD] = function (e) {
                  return { A: new E.Z(0.2), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (zr[i.CRAFTSMANSHIP] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                zr),
              getProduce:
                ((Jr = {}),
                (Jr[i.REFINED_WOOD] = function (e) {
                  return { A: new E.Z(0.02), B: new E.Z(1.5), type: R.EXPONENTIAL };
                }),
                Jr),
              baseSlotsPrice: 1,
              unlockCondition: function (e) {
                return !0;
              },
            },
            {
              id: i.PAPER,
              name: "Craft Paper",
              getCost:
                ((Qr = {}),
                (Qr[i.WOOD] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (Qr[i.CRAFTSMANSHIP] = function (e) {
                  return { A: new E.Z(3), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                Qr),
              getProduce:
                (($r = {}),
                ($r[i.PAPER] = function (e) {
                  return { A: new E.Z(0.05), B: new E.Z(1.5), type: R.EXPONENTIAL };
                }),
                $r),
              baseSlotsPrice: 2,
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.PAPERWORKING) > 0;
              },
            },
            {
              id: i.BRICK,
              name: "Craft Brick",
              getCost:
                ((eo = {}),
                (eo[i.STONE] = function (e) {
                  return { A: new E.Z(0.5), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (eo[i.CRAFTSMANSHIP] = function (e) {
                  return { A: new E.Z(10), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                eo),
              getProduce:
                ((to = {}),
                (to[i.BRICK] = function (e) {
                  return { A: new E.Z(0.05), B: new E.Z(1.5), type: R.EXPONENTIAL };
                }),
                to),
              baseSlotsPrice: 2,
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.STONEWORKING) > 0;
              },
            },
            {
              id: i.CHARGED_WOOD,
              name: "Charge Wood",
              getCost:
                ((no = {}),
                (no[i.REFINED_WOOD] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (no[i.SPARK] = function (e) {
                  return { A: new E.Z(30), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (no[i.CRAFTSMANSHIP] = function (e) {
                  return { A: new E.Z(50), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                no),
              getProduce:
                ((io = {}),
                (io[i.CHARGED_WOOD] = function (e) {
                  return { A: new E.Z(0.05), B: new E.Z(1.5), type: R.EXPONENTIAL };
                }),
                io),
              baseSlotsPrice: 2,
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.CHARGED_CRAFTING) > 0;
              },
            },
            {
              id: i.CHARGED_PAPER,
              name: "Charge Paper",
              getCost:
                ((ro = {}),
                (ro[i.PAPER] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (ro[i.SPARK] = function (e) {
                  return { A: new E.Z(50), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (ro[i.CRAFTSMANSHIP] = function (e) {
                  return { A: new E.Z(50), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                ro),
              getProduce:
                ((oo = {}),
                (oo[i.CHARGED_PAPER] = function (e) {
                  return { A: new E.Z(0.05), B: new E.Z(1.5), type: R.EXPONENTIAL };
                }),
                oo),
              baseSlotsPrice: 2,
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.CHARGED_CRAFTING) > 0;
              },
            },
            {
              id: i.SAND,
              name: "Make Sand",
              getCost:
                ((ao = {}),
                (ao[i.STONE] = function (e) {
                  return { A: new E.Z(0.5), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (ao[i.CRAFTSMANSHIP] = function (e) {
                  return { A: new E.Z(50), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                ao),
              getProduce:
                ((uo = {}),
                (uo[i.SAND] = function (e) {
                  return { A: new E.Z(0.05), B: new E.Z(1.5), type: R.EXPONENTIAL };
                }),
                uo),
              baseSlotsPrice: 2,
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.GLASSMAKING) > 0;
              },
            },
            {
              id: i.GLASS,
              name: "Craft Glass",
              getCost:
                ((so = {}),
                (so[i.SAND] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (so[i.MANA] = function (e) {
                  return { A: new E.Z(5e13), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (so[i.CRAFTSMANSHIP] = function (e) {
                  return { A: new E.Z(150), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                so),
              getProduce:
                ((co = {}),
                (co[i.GLASS] = function (e) {
                  return { A: new E.Z(0.05), B: new E.Z(1.5), type: R.EXPONENTIAL };
                }),
                co),
              baseSlotsPrice: 2,
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.GLASSMAKING) > 0;
              },
            },
            {
              id: i.IRON_PLATE,
              name: "Craft Iron Plate",
              getCost:
                ((lo = {}),
                (lo[i.IRON_ORE] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                (lo[i.CRAFTSMANSHIP] = function (e) {
                  return { A: new E.Z(150), B: new E.Z(2), type: R.EXPONENTIAL };
                }),
                lo),
              getProduce:
                ((po = {}),
                (po[i.IRON_PLATE] = function (e) {
                  return { A: new E.Z(0.02), B: new E.Z(1.5), type: R.EXPONENTIAL };
                }),
                po),
              baseSlotsPrice: 2,
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.METALWORKING) > 0;
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
            (e.BONE_STORAGE = "bone_storage"),
            (e.BONE_AMULET = "bone_amulet"),
            (e.BONE_STATUE = "bone_statue"),
            (e.BONE_RACK = "bone_rack"),
            (e.BONE_MILL = "bone_mill"),
            (e.BONE_BANNER = "bone_banner");
        })(fo || (fo = {}));
        var Vo,
          zo,
          Jo,
          Qo,
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
          Aa,
          Ea,
          va,
          ya,
          wa,
          ba,
          Ia,
          Ca,
          Na,
          Ra,
          La,
          Oa,
          Ta,
          Sa,
          Ma,
          Za,
          Pa,
          _a,
          Ga,
          Ba,
          Da,
          Ua,
          ka,
          xa,
          Ha,
          Wa,
          Xa,
          qa,
          Fa,
          Ya,
          Ka,
          ja,
          Va,
          za,
          Ja,
          Qa,
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
          pu = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
              function i() {
                this.constructor = t;
              }
              e(t, n), (t.prototype = null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
            };
          })(),
          fu = function () {
            return (
              (fu =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                  return e;
                }),
              fu.apply(this, arguments)
            );
          },
          gu = function (e, t, n) {
            if (n || 2 === arguments.length)
              for (var i, r = 0, o = t.length; r < o; r++) (!i && r in t) || (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
            return e.concat(i || Array.prototype.slice.call(t));
          },
          mu = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.slots = []),
                (t.cachedCosts = {}),
                (t.cachedGains = {}),
                (t.cachedCostsUI = {}),
                (t.cachedGainsUI = {}),
                t.workDispatcher.on("[crafting] set slot", function (e) {
                  console.log("do set crafting slot", e), t.setCraftingSlot(e.id, e.level);
                }),
                t
              );
            }
            return (
              pu(t, e),
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
                      (e.cachedCostsUI[t.id] = ce.calcBatch(t.getCost, ml, new E.Z(1))),
                      void (e.cachedGainsUI[t.id] = ce.calcBatch(t.getProduce, ml, new E.Z(1)))
                    );
                  (e.cachedCosts[t.id] = ce.calcBatch(t.getCost, ml, new E.Z(n.level))),
                    (e.cachedGains[t.id] = ce.calcBatch(t.getProduce, ml, new E.Z(n.level))),
                    (e.cachedCostsUI[t.id] = gu([], e.cachedCosts[t.id], !0)),
                    (e.cachedGainsUI[t.id] = gu([], e.cachedGains[t.id], !0));
                });
              }),
              (t.prototype.processRecipeAvalilable = function (e) {
                var t,
                  n,
                  i,
                  r = this.slots.find(function (t) {
                    return t.id === e.id;
                  }),
                  o = (new E.Z(null !== (t = null == r ? void 0 : r.level) && void 0 !== t ? t : 0), e.unlockCondition(ml));
                return (
                  o &&
                    ml.city.academyUpgrades.getUpgradeLevel(a.WOODWORKING) > 0 &&
                    ml.newNotifications.registerNotification("construction:crafting:recipe:".concat(e.id)),
                  {
                    id: e.id,
                    name: e.name,
                    isUnlocked: o,
                    cost: this.cachedCostsUI[e.id].map(function (e) {
                      return fu(fu({}, e), { amountValue: e.amount.toString(), amount: J(e.amount) });
                    }),
                    gain: this.cachedGainsUI[e.id].map(function (e) {
                      return fu(fu({}, e), { amountValue: e.amount.toString(), amount: J(e.amount) });
                    }),
                    level: null !== (n = null == r ? void 0 : r.level) && void 0 !== n ? n : 0,
                    isActive: !!(null == r ? void 0 : r.level),
                    isPaused: null !== (i = null == r ? void 0 : r.isPaused) && void 0 !== i && i,
                  }
                );
              }),
              (t.prototype.getMaxSlots = function () {
                return 6 + ml.construction.structures.getStructureLevel(fo.FORGE) + 2 * ml.construction.structures.getStructureLevel(fo.BONE_MILL);
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
                  isUnlocked: ml.city.academyUpgrades.getUpgradeLevel(a.WOODWORKING) > 0,
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
                  r > -1 ? (this.slots[r].level = t) : this.slots.push({ id: e, level: t, isPaused: !1, pauseCd: 0 }),
                  ml.resources.reassertBalances(),
                  ml.regenerateCache();
              }),
              (t.prototype.canAfford = function (e, t) {
                for (var n, i = 0, r = e; i < r.length; i++) {
                  var o = r[i];
                  if (null === (n = null == o ? void 0 : o.amount) || void 0 === n ? void 0 : n.greaterThan(ml.resources.getResource(o.id))) return !1;
                }
                return !0;
              }),
              (t.prototype.process = function (e) {
                var t = this,
                  n = !1;
                this.slots.forEach(function (i, r) {
                  i.level < 0 && (i.level = 0),
                    i.level < 1 ||
                      (i.isPaused && ((t.slots[r].pauseCd += e), t.slots[r].pauseCd > 2 && ((t.slots[r].isPaused = !1), (n = !0))),
                      t.slots[r].isPaused || t.canAfford(t.cachedCosts[i.id], e) || ((t.slots[r].isPaused = !0), (t.slots[r].pauseCd = 0), (n = !0)));
                }),
                  n && (ml.resources.reassertBalances(), ml.regenerateCache());
              }),
              (t.prototype.getResourceGain = function (e) {
                var t = this.slots
                    .filter(function (e) {
                      return e.level >= 1;
                    })
                    .reduce(function (e, t) {
                      return e[t.id] || t.isPaused || (e[t.id] = new E.Z(t.level)), e;
                    }, {}),
                  n = jo.filter(function (n) {
                    return n.getProduce[e] && t[n.id];
                  }),
                  i = [];
                return (
                  n.forEach(function (n) {
                    var r = ce.calculate(ml, n.getProduce[e], t[n.id]);
                    i.push({ label: "Crafting: ".concat(n.name), value: r, id: "Crafting: ".concat(n.id), category: "Crafting" });
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
                      return e[t.id] || t.isPaused || (e[t.id] = new E.Z(t.level)), e;
                    }, {}),
                  n = jo.filter(function (n) {
                    return n.getCost[e] && t[n.id];
                  }),
                  i = [];
                return (
                  n.forEach(function (n) {
                    var r = ce.calculate(ml, n.getCost[e], t[n.id]);
                    i.push({ label: "Crafting: ".concat(n.name), value: r, id: "Crafting: ".concat(n.id), category: "Crafting" });
                  }),
                  i
                );
              }),
              t
            );
          })(s),
          hu = mu.getInstance(),
          Au = [
            {
              id: fo.CRAFTING_TABLE,
              name: "Crafting Table",
              description: "You need more tools to make crafting more convenient. But you can craft them, dont you?",
              getCost:
                ((Vo = {}),
                (Vo[i.REFINED_WOOD] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                Vo),
              unlockCondition: function (e) {
                return !0;
              },
              getGainMultiplier:
                ((zo = {}),
                (zo[i.CRAFTSMANSHIP] = function (e) {
                  return { A: new E.Z(0.2), B: new E.Z(1), type: R.LINEAR };
                }),
                zo),
              tags: ["crafting", "craftmanship", "resource"],
            },
            {
              id: fo.TRAINING_BENCH,
              name: "Training Bench",
              description: "Very basic, but very helpful equipment for trainings. Provide 5% bonuses to Strength and Vitality",
              getCost:
                ((Jo = {}),
                (Jo[i.REFINED_WOOD] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                Jo),
              unlockCondition: function (e) {
                return !0;
              },
              getAttributeGainMultiplier:
                ((Qo = {}),
                (Qo[c.VITALITY] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(1.05), type: R.EXPONENTIAL };
                }),
                (Qo[c.STRENGTH] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(1.05), type: R.EXPONENTIAL };
                }),
                Qo),
              tags: ["attribute", "strength", "vitality"],
            },
            {
              id: fo.RUNE_HOLDER,
              name: "Rune Holder",
              description: "Lets work on something making runes learning more efficient. At least, these wooden holders should help you a bit",
              getCost:
                (($o = {}),
                ($o[i.REFINED_WOOD] = function (e) {
                  return { A: new E.Z(2), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                ($o[i.MANA] = function (e) {
                  return { A: new E.Z("1.e+8"), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                $o),
              unlockCondition: function (e) {
                return !0;
              },
              getAttributeGainMultiplier:
                ((ea = {}),
                (ea[c.RUNE_MASTERY] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(1.05), type: R.EXPONENTIAL };
                }),
                ea),
              tags: ["attribute", "rune mastery"],
            },
            {
              id: fo.BOOKSHELL,
              name: "Bookshell",
              description: "It looks like there is complete disorder in your library. An extra shelf will help organize your notebooks with notes.",
              getCost:
                ((ta = {}),
                (ta[i.REFINED_WOOD] = function (e) {
                  return { A: new E.Z(5), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                (ta[i.MANA] = function (e) {
                  return { A: new E.Z("1.e+8"), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                ta),
              unlockCondition: function (e) {
                return !0;
              },
              getCapacityMultiplier:
                ((na = {}),
                (na[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(1.05), type: R.EXPONENTIAL };
                }),
                na),
              tags: ["resource", "knowledge", "capacity"],
            },
            {
              id: fo.MANUSCRIPT,
              name: "Manuscript",
              description: "Build some magic manuscript to improve your willpower",
              getCost:
                ((ia = {}),
                (ia[i.PAPER] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                (ia[i.MANA] = function (e) {
                  return { A: new E.Z("1.e+10"), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                ia),
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.PAPERWORKING) > 0;
              },
              getAttributeGainMultiplier:
                ((ra = {}),
                (ra[c.WILLPOWER] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(1.05), type: R.EXPONENTIAL };
                }),
                ra),
              tags: ["attribute", "willpower", "mana", "production"],
            },
            {
              id: fo.SCROLL,
              name: "Spell Scroll",
              description: "Spell scroll, boosting your Spellbinding",
              getCost:
                ((oa = {}),
                (oa[i.PAPER] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                (oa[i.MANA] = function (e) {
                  return { A: new E.Z("1.e+10"), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                oa),
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.PAPERWORKING) > 0;
              },
              getAttributeGainMultiplier:
                ((aa = {}),
                (aa[c.MAGIC_KNOWLEDGE] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(1.05), type: R.EXPONENTIAL };
                }),
                aa),
              tags: ["attribute", "spellbinding"],
            },
            {
              id: fo.STONE_WALL,
              name: "Stone Wall",
              description: "My home is my fortress. Build some walls to prevent yourself from disruption when resting, to increase rest efficiency",
              getCost:
                ((ua = {}),
                (ua[i.BRICK] = function (e) {
                  return { A: new E.Z(2), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                (ua[i.REFINED_WOOD] = function (e) {
                  return { A: new E.Z(2), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                ua),
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.STONEWORKING) > 0;
              },
              getGainMultiplier:
                ((sa = {}),
                (sa[i.ENERGY] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(1.05), type: R.EXPONENTIAL };
                }),
                sa),
              tags: ["resource", "energy", "production"],
            },
            {
              id: fo.CELLAR,
              name: "Cellar",
              description: "You must have some place to store your goods",
              getCost:
                ((ca = {}),
                (ca[i.BRICK] = function (e) {
                  return { A: new E.Z(3), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                (ca[i.REFINED_WOOD] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                ca),
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.STONEWORKING) > 0;
              },
              getCapacityMultiplier:
                ((la = {}),
                (la[i.COINS] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(1.05), type: R.EXPONENTIAL };
                }),
                (la[i.BONE] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(1 + 0.05 * e.city.academyUpgrades.getUpgradeLevel(a.BONE_DRYING)), type: R.EXPONENTIAL };
                }),
                la),
              tags: ["coins", "storage", "resource"],
            },
            {
              id: fo.LUMBERMILL,
              name: "Lumbermill",
              description: "Increase your wood craft efficiency",
              getCost:
                ((da = {}),
                (da[i.BRICK] = function (e) {
                  return { A: new E.Z(2), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                (da[i.REFINED_WOOD] = function (e) {
                  return { A: new E.Z(5), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                da),
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.STONEWORKING) > 0;
              },
              getGainMultiplier:
                ((pa = {}),
                (pa[i.REFINED_WOOD] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(1.05), type: R.EXPONENTIAL };
                }),
                (pa[i.CHARGED_WOOD] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(1.05), type: R.EXPONENTIAL };
                }),
                pa),
              tags: ["wood", "production", "resource", "crafting"],
            },
            {
              id: fo.MAGIC_CLOCK,
              name: "Magic Clock",
              description: "Create clock that able to slow down time around you, increasing your actions speed",
              getCost:
                ((fa = {}),
                (fa[i.CHARGED_WOOD] = function (e) {
                  return { A: new E.Z(3), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                (fa[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z("1.e+13"), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                fa),
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.CHARGED_CRAFTING) > 0;
              },
              getAttributeGainMultiplier:
                ((ga = {}),
                (ga[c.AGILITY] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(1.05), type: R.EXPONENTIAL };
                }),
                ga),
              tags: ["attribute", "agility", "action speed"],
            },
            {
              id: fo.MAGIC_SCROLL,
              name: "Magic Scroll",
              description: "Create more sophisticated but pretty useful scroll, amplifying your magic and mental abilities",
              getCost:
                ((ma = {}),
                (ma[i.CHARGED_PAPER] = function (e) {
                  return { A: new E.Z(3), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                (ma[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z("1.e+13"), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                ma),
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.CHARGED_CRAFTING) > 0;
              },
              getAttributeGainMultiplier:
                ((ha = {}),
                (ha[c.RUNE_READING] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(1.02), type: R.EXPONENTIAL };
                }),
                (ha[c.MAGIC_KNOWLEDGE] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(1.02), type: R.EXPONENTIAL };
                }),
                ha),
              tags: ["attribute", "intellect", "spellbinding"],
            },
            {
              id: fo.MANA_ORB,
              name: "Mana Orb",
              description: "Create additional mana orb to store your mana",
              getCost:
                ((Aa = {}),
                (Aa[i.GLASS] = function (e) {
                  return { A: new E.Z(3), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                (Aa[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z("5.e+13"), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                Aa),
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.GLASSMAKING) > 0;
              },
              getCapacityMultiplier:
                ((Ea = {}),
                (Ea[i.MANA] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(1.05), type: R.EXPONENTIAL };
                }),
                Ea),
              tags: ["mana", "storage", "resource"],
            },
            {
              id: fo.CONJURATION_ORB,
              name: "Conjuration Orb",
              description: "Increase your conjuration spell speed",
              getCost:
                ((va = {}),
                (va[i.CHARGED_WOOD] = function (e) {
                  return { A: new E.Z(5), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                (va[i.GLASS] = function (e) {
                  return { A: new E.Z(5), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                va),
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.GLASSMAKING) > 0;
              },
              getAttributeGainMultiplier:
                ((ya = {}),
                (ya[c.CONJURATION_LORE] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(1.05), type: R.EXPONENTIAL };
                }),
                ya),
              tags: ["attribute", "conjuration lore"],
            },
            {
              id: fo.FORGE,
              name: "Forge",
              description: "Increase your max crafting slots by 1",
              getCost:
                ((wa = {}),
                (wa[i.REFINED_WOOD] = function (e) {
                  return { A: new E.Z(5), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                (wa[i.BRICK] = function (e) {
                  return { A: new E.Z(5), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                (wa[i.IRON_PLATE] = function (e) {
                  return { A: new E.Z(5), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                wa),
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.METALWORKING) > 0;
              },
              tags: ["crafting", "slots"],
            },
            {
              id: fo.STONE_CRUSHER,
              name: "Stone Crusher",
              description: "Increase your brick and sand output",
              getCost:
                ((ba = {}),
                (ba[i.REFINED_WOOD] = function (e) {
                  return { A: new E.Z(5), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                (ba[i.IRON_PLATE] = function (e) {
                  return { A: new E.Z(10), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                ba),
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.METALWORKING) > 0;
              },
              getGainMultiplier:
                ((Ia = {}),
                (Ia[i.BRICK] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(1.05), type: R.EXPONENTIAL };
                }),
                (Ia[i.SAND] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(1.05), type: R.EXPONENTIAL };
                }),
                Ia),
              tags: ["brick", "sand", "production", "resource"],
            },
            {
              id: fo.BONE_STORAGE,
              name: "Bone Storage",
              description: "Increase your bone storage capacity",
              getCost:
                ((Ca = {}),
                (Ca[i.REFINED_WOOD] = function (e) {
                  return { A: new E.Z(50), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                (Ca[i.BRICK] = function (e) {
                  return { A: new E.Z(100), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                (Ca[i.BONE] = function (e) {
                  return { A: new E.Z(10), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                Ca),
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.BONE_EXTRACTION) > 0;
              },
              getCapacityEffect:
                ((Na = {}),
                (Na[i.BONE] = function (e) {
                  return { A: new E.Z(50), B: new E.Z(0), type: R.LINEAR };
                }),
                Na),
              tags: ["bone", "storage", "resource"],
            },
            {
              id: fo.BONE_AMULET,
              name: "Bone Charm",
              description: "Increase your max HP",
              getCost:
                ((Ra = {}),
                (Ra[i.IRON_PLATE] = function (e) {
                  return { A: new E.Z(100), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                (Ra[i.BONE] = function (e) {
                  return { A: new E.Z(25), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                Ra),
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.BONE_EXTRACTION) > 0;
              },
              getBattleAttributeGainMultiplier:
                ((La = {}),
                (La[l.MAX_HP] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(1.05), type: R.EXPONENTIAL };
                }),
                La),
              tags: ["hp", "fighting", "battle"],
            },
            {
              id: fo.BONE_STATUE,
              name: "Bone Statue",
              description: "Increase your mana income significantly",
              getCost:
                ((Oa = {}),
                (Oa[i.GLASS] = function (e) {
                  return { A: new E.Z(10), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                (Oa[i.BONE] = function (e) {
                  return { A: new E.Z(25), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                Oa),
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.BONE_EXTRACTION) > 0;
              },
              getGainMultiplier:
                ((Ta = {}),
                (Ta[i.MANA] = function (e) {
                  return { A: new E.Z(0.1), B: new E.Z(1), type: R.LINEAR };
                }),
                Ta),
              tags: ["mana", "production", "resource"],
            },
            {
              id: fo.BONE_RACK,
              name: "Bone Rack",
              description: "Increase your knowledge capacity even more",
              getCost:
                ((Sa = {}),
                (Sa[i.REFINED_WOOD] = function (e) {
                  return { A: new E.Z(100), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                (Sa[i.BONE] = function (e) {
                  return { A: new E.Z(10), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                Sa),
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.BONE_EXTRACTION) > 0;
              },
              getCapacityMultiplier:
                ((Ma = {}),
                (Ma[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z(0.1), B: new E.Z(1), type: R.LINEAR };
                }),
                Ma),
              tags: ["knowledge", "storage", "resource"],
            },
            {
              id: fo.BONE_BANNER,
              name: "Bone Banner",
              description: "Raise your spirits, increasing battle stamina",
              getCost:
                ((Za = {}),
                (Za[i.CHARGED_WOOD] = function (e) {
                  return { A: new E.Z(30), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                (Za[i.BONE] = function (e) {
                  return { A: new E.Z(15), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                Za),
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.ADVANCED_BONES_MECHANISMS) > 0;
              },
              getAttributeGainMultiplier:
                ((Pa = {}),
                (Pa[c.STAMINA] = function (e) {
                  return { A: new E.Z(1), B: new E.Z(1.05), type: R.EXPONENTIAL };
                }),
                Pa),
              tags: ["attribute", "stamina", "fight", "battle"],
            },
            {
              id: fo.BONE_MILL,
              name: "Bone Mill",
              description: "A machine made of bones, magic and love to craftsmanship. Increase your crafting slots by 2",
              getCost:
                ((_a = {}),
                (_a[i.BRICK] = function (e) {
                  return { A: new E.Z(200), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                (_a[i.BONE] = function (e) {
                  return { A: new E.Z(15), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                (_a[i.KNOWLEDGE] = function (e) {
                  return { A: new E.Z("1.e+17"), B: new E.Z(1.2), type: R.EXPONENTIAL };
                }),
                _a),
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.ADVANCED_BONES_MECHANISMS) > 0;
              },
              tags: ["crafting", "slots"],
            },
          ],
          Eu = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
              function i() {
                this.constructor = t;
              }
              e(t, n), (t.prototype = null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
            };
          })(),
          vu = function () {
            return (
              (vu =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                  return e;
                }),
              vu.apply(this, arguments)
            );
          },
          yu = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.structures = []),
                (t.cachedStructures = []),
                (t.tickPerf = 0),
                t.workDispatcher.on("[structures] do build", function (e) {
                  console.log("do build", e), t.doBuild(e.id);
                }),
                t
              );
            }
            return (
              Eu(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                this.structures =
                  (null == e
                    ? void 0
                    : e.list.map(function (e) {
                        return vu({}, e);
                      })) || [];
              }),
              (t.prototype.exportData = function () {
                return {
                  list: this.structures.map(function (e) {
                    return vu({}, e);
                  }),
                };
              }),
              (t.prototype.regenerateCache = function () {
                var e = this;
                (this.tickPerf = 0),
                  (this.cachedStructures = Au.map(function (t) {
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
                    var n = Au.find(function (e) {
                      return e.id === t.id;
                    });
                    if (!n) return t;
                    var i = e.structures.find(function (e) {
                      return e.id === n.id;
                    });
                    i || ((i = { id: n.id, level: 0 }), e.structures.push(i));
                    var r = ce.calcBatchAll(n.getCost, gl.getInstance(), new E.Z(i.level), gl.getInstance().resources.getBatchObject()),
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
                      ml.city.academyUpgrades.getUpgradeLevel(a.WOODWORKING) > 0 &&
                        ml.newNotifications.registerNotification("construction:structures:structure:".concat(n.id)),
                      vu(vu({}, t), {
                        etaNum: o,
                        isAvailable: u.greaterThanOrEqualTo(1),
                        cost: gl
                          .getInstance()
                          .resources.assertEnought(r, gl.getInstance().resources.getBatchObject(), gl.getInstance().resources.getBatchBalanceObject()),
                        progress: u.lessThan(1) ? (100 * u.toNumber()).toPrecision(3) : "100",
                      })
                    );
                  });
              }),
              (t.prototype.dataToUI = function () {
                return { list: this.dataFromCache(), isUnlocked: gl.getInstance().resources.getResourceCap(i.MANA).greaterThanOrEqualTo(10) };
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
                n || ((n = { id: e.id, level: 0 }), this.structures.push(n));
                var i = ce.calcBatchAll(e.getCost, gl.getInstance(), new E.Z(n.level + t), gl.getInstance().resources.getBatchObject()),
                  r = e.getGain ? ce.calcBatch(e.getGain, ml, new E.Z(n.level)) : [],
                  o = e.getGainMultiplier ? ce.calcBatch(e.getGainMultiplier, ml, new E.Z(n.level + t)) : [],
                  a = e.getCapacityEffect ? ce.calcBatch(e.getCapacityEffect, ml, new E.Z(n.level + t)) : [],
                  u = e.getCapacityMultiplier ? ce.calcBatch(e.getCapacityMultiplier, ml, new E.Z(n.level + t)) : [],
                  s = e.getAttributeGain ? ce.calcBatch(e.getAttributeGain, ml, new E.Z(n.level + t)) : [],
                  c = e.getAttributeGainMultiplier ? ce.calcBatch(e.getAttributeGainMultiplier, ml, new E.Z(n.level + t)) : [],
                  l = e.getBattleAttributeGain ? ce.calcBatch(e.getBattleAttributeGain, ml, new E.Z(n.level + t)) : [],
                  d = e.getBattleAttributeGainMultiplier ? ce.calcBatch(e.getBattleAttributeGainMultiplier, ml, new E.Z(n.level + t)) : [],
                  p = i.reduce(function (e, t) {
                    return e && !t.isBlocked;
                  }, !0),
                  f = i.reduce(function (e, t) {
                    return Math.max(e, t.eta);
                  }, 0),
                  g = i.reduce(function (e, t) {
                    return E.Z.min(e, t.max);
                  }, new E.Z("1.e+30000")),
                  m = e.unlockCondition(ml);
                return {
                  id: e.id,
                  name: e.name,
                  description: e.description,
                  isUnlocked: m,
                  isAvailable: g.greaterThanOrEqualTo(1),
                  cost: gl
                    .getInstance()
                    .resources.assertEnought(i, gl.getInstance().resources.getBatchObject(), gl.getInstance().resources.getBatchBalanceObject()),
                  level: n.level,
                  isBlocked: !p,
                  etaNum: f,
                  attr: s.map(function (e) {
                    return vu(vu({}, e), { amountValue: e.amount.toString(), amount: "+".concat(J(e.amount)) });
                  }),
                  attrMult: c.map(function (e) {
                    return vu(vu({}, e), { amountValue: e.amount.toString(), amount: "x".concat(J(e.amount)) });
                  }),
                  battleAttr: l.map(function (e) {
                    return vu(vu({}, e), { amountValue: e.amount.toString(), amount: "+".concat(J(e.amount)) });
                  }),
                  battleAttrMult: d.map(function (e) {
                    return vu(vu({}, e), { amountValue: e.amount.toString(), amount: "x".concat(J(e.amount)) });
                  }),
                  capGain: a.map(function (e) {
                    return vu(vu({}, e), { amountValue: e.amount.toString(), amount: "+".concat(J(e.amount)) });
                  }),
                  capMult: u.map(function (e) {
                    return vu(vu({}, e), { amountValue: e.amount.toString(), amount: "x".concat(J(e.amount)) });
                  }),
                  gain: r.map(function (e) {
                    return vu(vu({}, e), { amountValue: e.amount.toString(), amount: "+".concat(J(e.amount)) });
                  }),
                  gainMult: o.map(function (e) {
                    return vu(vu({}, e), { amountValue: e.amount.toString(), amount: "x".concat(J(e.amount)) });
                  }),
                  progress: g.lessThan(1) ? (100 * g.toNumber()).toPrecision(3) : "100",
                  tags: e.tags,
                };
              }),
              (t.prototype.doBuild = function (e) {
                var t = Au.find(function (t) {
                  return t.id === e;
                });
                if ((console.log("[construct] db", t), t)) {
                  var n = this.structures.findIndex(function (t) {
                    return t.id === e;
                  });
                  n < 0 && ((n = this.structures.length), this.structures.push({ id: e, level: 0 }));
                  var i = ce.calcBatchAll(t.getCost, gl.getInstance(), new E.Z(this.structures[n].level), gl.getInstance().resources.getBatchObject()),
                    r = i.reduce(function (e, t) {
                      return E.Z.min(e, t.max.floor());
                    }, new E.Z("1.e+30000"));
                  if ((console.log("[upgrade] mx: ", r.toNumber()), !r.lessThan(1)))
                    return (
                      (this.structures[n].level = this.structures[n].level + 1),
                      console.log("costs: ", i),
                      gl.getInstance().resources.subtractResourceBatch(i),
                      ml.resources.reassertBalances(),
                      ml.regenerateCache(),
                      !0
                    );
                }
              }),
              (t.prototype.process = function (e) {}),
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
                  n = Au.filter(function (n) {
                    var i;
                    return (null === (i = n.getGain) || void 0 === i ? void 0 : i[e]) && t[n.id];
                  }),
                  i = [];
                return (
                  n.forEach(function (n) {
                    var r;
                    if (null === (r = n.getGain) || void 0 === r ? void 0 : r[e]) {
                      var o = ce.calculate(ml, n.getGain[e], t[n.id]);
                      o.eq(0) || i.push({ label: "Structures: ".concat(n.name), value: o, id: "Structure: ".concat(n.id), category: "Structures" });
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
                  n = Au.filter(function (n) {
                    var i;
                    return (null === (i = n.getCapacityEffect) || void 0 === i ? void 0 : i[e]) && t[n.id];
                  }),
                  i = [];
                return (
                  n.forEach(function (n) {
                    var r;
                    if (null === (r = n.getCapacityEffect) || void 0 === r ? void 0 : r[e]) {
                      var o = ce.calculate(ml, n.getCapacityEffect[e], t[n.id]);
                      o.eq(0) || i.push({ label: "Structures: ".concat(n.name), value: o, id: "Structure: ".concat(n.id), category: "Structures" });
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
                  n = Au.filter(function (n) {
                    var i;
                    return (null === (i = n.getCapacityMultiplier) || void 0 === i ? void 0 : i[e]) && t[n.id];
                  }),
                  i = [];
                return (
                  n.forEach(function (n) {
                    var r;
                    if (null === (r = n.getCapacityMultiplier) || void 0 === r ? void 0 : r[e]) {
                      var o = ce.calculate(ml, n.getCapacityMultiplier[e], t[n.id]);
                      o.eq(1) || i.push({ label: "Structures: ".concat(n.name), value: o, id: "Structure: ".concat(n.id), category: "Structures" });
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
                  n = Au.filter(function (n) {
                    var i;
                    return (null === (i = n.getAttributeGain) || void 0 === i ? void 0 : i[e]) && t[n.id];
                  }),
                  i = [];
                return (
                  n.forEach(function (n) {
                    var r;
                    if (null === (r = n.getAttributeGain) || void 0 === r ? void 0 : r[e]) {
                      var o = ce.calculate(ml, n.getAttributeGain[e], t[n.id]);
                      o.eq(0) || i.push({ label: "Structures: ".concat(n.name), value: o, id: "Structure: ".concat(n.id), category: "Structures" });
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
                  n = Au.filter(function (n) {
                    var i;
                    return (null === (i = n.getAttributeGainMultiplier) || void 0 === i ? void 0 : i[e]) && t[n.id];
                  }),
                  i = [];
                return (
                  n.forEach(function (n) {
                    var r;
                    if (null === (r = n.getAttributeGainMultiplier) || void 0 === r ? void 0 : r[e]) {
                      var o = ce.calculate(ml, n.getAttributeGainMultiplier[e], t[n.id]);
                      o.eq(0) || i.push({ label: "Structures: ".concat(n.name), value: o, id: "Structure: ".concat(n.id), category: "Structures" });
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
                  n = Au.filter(function (n) {
                    var i;
                    return (null === (i = n.getBattleAttributeGain) || void 0 === i ? void 0 : i[e]) && t[n.id];
                  }),
                  i = [];
                return (
                  n.forEach(function (n) {
                    var r;
                    if (null === (r = n.getBattleAttributeGain) || void 0 === r ? void 0 : r[e]) {
                      var o = ce.calculate(ml, n.getBattleAttributeGain[e], t[n.id]);
                      o.eq(0) || i.push({ label: "Structures: ".concat(n.name), value: o, id: "Structure: ".concat(n.id), category: "Structures" });
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
                  n = Au.filter(function (n) {
                    var i;
                    return (null === (i = n.getBattleAttributeGainMultiplier) || void 0 === i ? void 0 : i[e]) && t[n.id];
                  }),
                  i = [];
                return (
                  n.forEach(function (n) {
                    var r;
                    if (null === (r = n.getBattleAttributeGainMultiplier) || void 0 === r ? void 0 : r[e]) {
                      var o = ce.calculate(ml, n.getBattleAttributeGainMultiplier[e], t[n.id]);
                      o.eq(0) || i.push({ label: "Structures: ".concat(n.name), value: o, id: "Structure: ".concat(n.id), category: "Structures" });
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
                  n = Au.filter(function (n) {
                    var i;
                    return (null === (i = n.getGainMultiplier) || void 0 === i ? void 0 : i[e]) && t[n.id];
                  }),
                  i = [];
                return (
                  n.forEach(function (n) {
                    var r;
                    if (null === (r = n.getGainMultiplier) || void 0 === r ? void 0 : r[e]) {
                      var o = ce.calculate(ml, n.getGainMultiplier[e], t[n.id]);
                      o.eq(1) || i.push({ label: "Structures: ".concat(n.name), value: o, id: "Structure: ".concat(n.id), category: "Structures" });
                    }
                  }),
                  i
                );
              }),
              t
            );
          })(s),
          wu = yu.getInstance(),
          bu = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
              function i() {
                this.constructor = t;
              }
              e(t, n), (t.prototype = null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
            };
          })(),
          Iu = function () {
            return (
              (Iu =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                  return e;
                }),
              Iu.apply(this, arguments)
            );
          },
          Cu = (function (e) {
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
              bu(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                (this.presets = (null == e ? void 0 : e.presets) || []), (this.active = null == e ? void 0 : e.runningId);
              }),
              (t.prototype.exportData = function () {
                return { presets: this.presets, runningId: this.active };
              }),
              (t.prototype.processListToUI = function (e) {
                var t = jo
                  .filter(function (e) {
                    return e.unlockCondition(ml);
                  })
                  .reduce(function (e, t) {
                    return (e[t.id] = t), e;
                  }, {});
                return {
                  id: e.id,
                  name: e.name,
                  items: e.items.map(function (e, n) {
                    return { id: e.id, name: t[e.id].name, amount: e.amount, isPercentage: e.isPercentage };
                  }),
                };
              }),
              (t.prototype.dataToUI = function () {
                var e = this;
                return {
                  isUnlocked: gl.getInstance().statistics.stats.numRuneResets > 0,
                  list: this.presets.map(function (t) {
                    return e.processListToUI(t);
                  }),
                  active: this.active ? { id: this.active, name: this.getActiveName() } : void 0,
                };
              }),
              (t.prototype.savePreset = function (e) {
                if (!e.name) throw new Error("Preset name should not be empty");
                if (e.id) {
                  var t = this.presets.findIndex(function (t) {
                    return t.id === e.id;
                  });
                  t > -1 && (this.presets[t] = e);
                } else (e = Iu(Iu({}, e), { id: "".concat(Math.random()) })), this.presets.push(e);
              }),
              (t.prototype.deletePreset = function (e) {
                var t = this.presets.findIndex(function (t) {
                  return t.id === e;
                });
                t > -1 && this.presets.splice(t, 1), this.active === e && (this.active = void 0);
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
                if (this.active && ml.statistics.stats.numRuneResets) {
                  var t = this.presets.find(function (t) {
                    return t.id === e.active;
                  });
                  if (t) return t.name;
                }
              }),
              (t.prototype.applyPreset = function () {
                var e = this;
                if (this.active && ml.statistics.stats.numRuneResets) {
                  var t = this.presets.find(function (t) {
                    return t.id === e.active;
                  });
                  if (t) {
                    var n = t.items.filter(function (e) {
                        return !e.isPercentage && e.amount > 0;
                      }),
                      i = [],
                      r = ml.construction.crafting.getMaxSlots();
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
                      }),
                      o.forEach(function (e) {
                        var t = Math.floor((e.amount / 100) * r);
                        i.push({ id: e.id, amount: t }), (r -= t);
                      }),
                      ml.construction.crafting.resetCraftingSlotsTo(i);
                  }
                }
              }),
              t
            );
          })(s).getInstance(),
          Nu = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
              function i() {
                this.constructor = t;
              }
              e(t, n), (t.prototype = null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
            };
          })(),
          Ru = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (t.crafting = hu), (t.structures = wu), (t.craftingPresets = Cu), t;
            }
            return (
              Nu(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                this.crafting.importData(null == e ? void 0 : e.crafting),
                  this.structures.importData(null == e ? void 0 : e.structures),
                  this.craftingPresets.importData(null == e ? void 0 : e.craftingPresets);
              }),
              (t.prototype.exportData = function () {
                return { crafting: this.crafting.exportData(), structures: this.structures.exportData(), craftingPresets: this.craftingPresets.exportData() };
              }),
              (t.prototype.dataToUI = function () {
                var e = this.crafting.dataToUI(),
                  t = this.structures.dataToUI();
                return { isUnlocked: e.isUnlocked, crafting: e, structures: t, craftingPresets: this.craftingPresets.dataToUI() };
              }),
              (t.prototype.process = function (e) {
                this.crafting.process(e);
              }),
              (t.prototype.regenerateCache = function () {
                this.crafting.regenerateCache(), this.structures.regenerateCache();
              }),
              t
            );
          })(s),
          Lu = Ru.getInstance(),
          Ou = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
              function i() {
                this.constructor = t;
              }
              e(t, n), (t.prototype = null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
            };
          })(),
          Tu = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.newNotificationState = {}),
                (t.notificationsToUI = {}),
                t.workDispatcher.on("[new-notification] set viewed", function (e) {
                  console.log("new-notification set viewed", e), t.setViewed(e.id);
                }),
                t
              );
            }
            return (
              Ou(t, e),
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
                return null !== (t = this.newNotificationState[e]) && void 0 !== t && t;
              }),
              (t.prototype.registerNotification = function (e) {
                if (this.newNotificationState[e]) return !1;
                for (var t = e.split(":"), n = []; t.length > 0; ) n.push("".concat(t.splice(0, 1))), (this.notificationsToUI[n.join(":")] = !0);
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
                gl.getInstance().settings.resetNotificationsOnPrestige &&
                  ((this.notificationsToUI = {}),
                  Object.entries(this.newNotificationState).forEach(function (t) {
                    var n = t[0];
                    t[1], "progress" !== n.split(":")[0] && delete e.newNotificationState[n];
                  }));
              }),
              t
            );
          })(s),
          Su = Tu.getInstance();
        !(function (e) {
          (e[(e.PENDING = 0)] = "PENDING"), (e[(e.COMLETE = 1)] = "COMLETE"), (e[(e.FAILED = 2)] = "FAILED");
        })(Ga || (Ga = {}));
        var Mu,
          Zu,
          Pu,
          _u,
          Gu,
          Bu,
          Du,
          Uu,
          ku,
          xu,
          Hu,
          Wu,
          Xu,
          qu,
          Fu,
          Yu,
          Ku,
          ju,
          Vu,
          zu,
          Ju,
          Qu,
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
          As,
          Es,
          vs,
          ys,
          ws,
          bs,
          Is,
          Cs,
          Ns,
          Rs,
          Ls,
          Os,
          Ts,
          Ss,
          Ms,
          Zs,
          Ps,
          _s,
          Gs,
          Bs,
          Ds,
          Us,
          ks,
          xs,
          Hs,
          Ws,
          Xs,
          qs,
          Fs,
          Ys,
          Ks,
          js,
          Vs,
          zs,
          Js,
          Qs,
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
          Ac,
          Ec,
          vc,
          yc,
          wc,
          bc,
          Ic,
          Cc,
          Nc,
          Rc,
          Lc,
          Oc,
          Tc,
          Sc = [
            {
              id: "manacap-sacrifice",
              name: "Mana Cap Sacrifice",
              description: "Now you know how to store mana.",
              requirementsDesc: ["Perform one sacrifice on mana cap rune"],
              getCompleteCondition: function (e) {
                return e.learning.runes.getRuneSacrificeLevel("manacap").greaterThanOrEqualTo(1);
              },
              bonusesDesc: [],
              isHidden: !1,
              getAttribute:
                ((Ba = {}),
                (Ba[c.WILLPOWER] = function (e) {
                  return new E.Z(2);
                }),
                Ba),
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
                return e.learning.runes.getRuneSacrificeLevel("willpower").greaterThanOrEqualTo(1);
              },
              bonusesDesc: [],
              isHidden: !1,
              getAttribute:
                ((Da = {}),
                (Da[c.RUNE_READING] = function (e) {
                  return new E.Z(2);
                }),
                Da),
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
                return e.learning.runes.getRuneSacrificeLevel("intellect").greaterThanOrEqualTo(1);
              },
              bonusesDesc: [],
              isHidden: !1,
              getGainMultiplier:
                ((Ua = {}),
                (Ua[i.KNOWLEDGE] = function (e) {
                  return new E.Z(1.1);
                }),
                (Ua[i.MANA] = function (e) {
                  return new E.Z(1.1);
                }),
                Ua),
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
                return e.learning.runes.getRuneSacrificeLevel("knowledge-rune").greaterThanOrEqualTo(1);
              },
              bonusesDesc: [],
              isHidden: !1,
              getCapacityMultiplier:
                ((ka = {}),
                (ka[i.KNOWLEDGE] = function (e) {
                  return new E.Z(1.1);
                }),
                (ka[i.MANA] = function (e) {
                  return new E.Z(1.1);
                }),
                ka),
              unlockCondition: function (e) {
                return !0;
              },
            },
            {
              id: "memory-rune",
              name: "Memory Rune Sacrifice",
              description: "Even if you could live several lives, you would remember all of them",
              requirementsDesc: ["Perform one sacrifice on memory rune"],
              getCompleteCondition: function (e) {
                return e.learning.runes.getRuneSacrificeLevel("rune_memory").greaterThanOrEqualTo(1);
              },
              bonusesDesc: [],
              isHidden: !1,
              getCapacityMultiplier:
                ((xa = {}),
                (xa[i.KNOWLEDGE] = function (e) {
                  return new E.Z(1.25);
                }),
                xa),
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
                return e.learning.runes.getRuneSacrificeLevel("rune_master").greaterThanOrEqualTo(1);
              },
              bonusesDesc: ["Sacrifice runes now provide better effect (0.2 to exponenta in effect formula)"],
              isHidden: !1,
              unlockCondition: function (e) {
                return !0;
              },
            },
            {
              id: "breath-techniques",
              name: "Breath Techniques",
              description: "If you lived in the highest mountains, you would definitely survive",
              requirementsDesc: ["Perform Breath Techniques for 500 times"],
              getCompleteCondition: function (e) {
                return e.city.actions.getActionPerforms($e.BREATH).greaterThanOrEqualTo(500);
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((Ha = {}),
                (Ha[c.VITALITY] = function (e) {
                  return new E.Z(1.25);
                }),
                Ha),
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
                return e.city.actions.getActionPerforms($e.BREATH).greaterThanOrEqualTo(1e4);
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((Wa = {}),
                (Wa[c.VITALITY] = function (e) {
                  return new E.Z(1.25);
                }),
                Wa),
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
                return e.city.actions.getActionPerforms($e.INVESTIGATE_WORLD).greaterThanOrEqualTo(500);
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((Xa = {}),
                (Xa[c.RUNE_READING] = function (e) {
                  return new E.Z(1.25);
                }),
                Xa),
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
                return e.city.actions.getActionPerforms($e.INVESTIGATE_WORLD).greaterThanOrEqualTo(1e4);
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((qa = {}),
                (qa[c.RUNE_READING] = function (e) {
                  return new E.Z(1.25);
                }),
                qa),
              isHidden: !1,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "willpower1",
              name: "Unyielding Spirit I",
              description: "Your willpower shines through, unwavering and steadfast.",
              requirementsDesc: ["Reach 1M Willpower"],
              getCompleteCondition: function (e) {
                return e.personage.attributes.getAttribute(c.WILLPOWER).greaterThanOrEqualTo("1.e+6");
              },
              bonusesDesc: [],
              getGainMultiplier:
                ((Fa = {}),
                (Fa[i.MANA] = function (e) {
                  return new E.Z(1.1);
                }),
                Fa),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "willpower2",
              name: "Unyielding Spirit II",
              description: "Your willpower is an unbreakable force, surpassing mortal limits.",
              requirementsDesc: ["Reach 1T Willpower"],
              getCompleteCondition: function (e) {
                return e.personage.attributes.getAttribute(c.WILLPOWER).greaterThanOrEqualTo("1.e+12");
              },
              bonusesDesc: [],
              getGainMultiplier:
                ((Ya = {}),
                (Ya[i.MANA] = function (e) {
                  return new E.Z(1.1);
                }),
                Ya),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "willpower3",
              name: "Unyielding Spirit III",
              description: "Your willpower transcends known boundaries, setting a new pinnacle of mental fortitude.",
              requirementsDesc: ["Reach 1Sx Willpower"],
              getCompleteCondition: function (e) {
                return e.personage.attributes.getAttribute(c.WILLPOWER).greaterThanOrEqualTo("1.e+21");
              },
              bonusesDesc: [],
              getGainMultiplier:
                ((Ka = {}),
                (Ka[i.MANA] = function (e) {
                  return new E.Z(1.1);
                }),
                Ka),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "intellect1",
              name: "Mind's Horizon I",
              description: "Your intellect breaks through the first barrier, unveiling new realms of thought.",
              requirementsDesc: ["Reach 1M Intellect"],
              getCompleteCondition: function (e) {
                return e.personage.attributes.getAttribute(c.RUNE_READING).greaterThanOrEqualTo("1.e+6");
              },
              bonusesDesc: [],
              getCapacityMultiplier:
                ((ja = {}),
                (ja[i.KNOWLEDGE] = function (e) {
                  return new E.Z(1.1);
                }),
                ja),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "intellect2",
              name: "Mind's Horizon II",
              description: "Your intellect now dwells in territories only dreamed of, a testament to your cognitive mastery.",
              requirementsDesc: ["Reach 1T Intellect"],
              getCompleteCondition: function (e) {
                return e.personage.attributes.getAttribute(c.RUNE_READING).greaterThanOrEqualTo("1.e+12");
              },
              bonusesDesc: [],
              getCapacityMultiplier:
                ((Va = {}),
                (Va[i.KNOWLEDGE] = function (e) {
                  return new E.Z(1.1);
                }),
                Va),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "intellect3",
              name: "Mind's Horizon III",
              description: "Your intellect has scaled heights unseen, becoming a beacon of wisdom and knowledge.",
              requirementsDesc: ["Reach 1Sx Intellect"],
              getCompleteCondition: function (e) {
                return e.personage.attributes.getAttribute(c.RUNE_READING).greaterThanOrEqualTo("1.e+21");
              },
              bonusesDesc: [],
              getCapacityMultiplier:
                ((za = {}),
                (za[i.KNOWLEDGE] = function (e) {
                  return new E.Z(1.1);
                }),
                za),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "spellbinding1",
              name: "Arcane Anchor I",
              description: "You have begun to tap into the essence of spellbinding, harnessing arcane energies.",
              requirementsDesc: ["Reach 1M Spellbinding"],
              getCompleteCondition: function (e) {
                return e.personage.attributes.getAttribute(c.MAGIC_KNOWLEDGE).greaterThanOrEqualTo("1.e+6");
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((Ja = {}),
                (Ja[c.RUNE_READING] = function (e) {
                  return new E.Z(1.1);
                }),
                Ja),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "spellbinding2",
              name: "Arcane Anchor II",
              description: "Your mastery of spellbinding now weaves complex magical tapestries, bending reality.",
              requirementsDesc: ["Reach 1T Spellbinding"],
              getCompleteCondition: function (e) {
                return e.personage.attributes.getAttribute(c.MAGIC_KNOWLEDGE).greaterThanOrEqualTo("1.e+12");
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((Qa = {}),
                (Qa[c.RUNE_READING] = function (e) {
                  return new E.Z(1.1);
                }),
                Qa),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "spellbinding3",
              name: "Arcane Anchor III",
              description: "You stand at the apex of spellbinding, a master of arcane forces unparalleled.",
              requirementsDesc: ["Reach 1Sx Spellbinding"],
              getCompleteCondition: function (e) {
                return e.personage.attributes.getAttribute(c.MAGIC_KNOWLEDGE).greaterThanOrEqualTo("1.e+21");
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                (($a = {}),
                ($a[c.RUNE_READING] = function (e) {
                  return new E.Z(1.1);
                }),
                $a),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "vitality1",
              name: "Lifeblood I",
              description: "Your vitality surges, brimming with newfound strength and vigor.",
              requirementsDesc: ["Reach 1M Vitality"],
              getCompleteCondition: function (e) {
                return e.personage.attributes.getAttribute(c.VITALITY).greaterThanOrEqualTo("1.e+6");
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((eu = {}),
                (eu[c.VITALITY] = function (e) {
                  return new E.Z(1.1);
                }),
                eu),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "vitality2",
              name: "Lifeblood II",
              description: "You exhibit extraordinary vitality, resilient and enduring against all odds.",
              requirementsDesc: ["Reach 1T Vitality"],
              getCompleteCondition: function (e) {
                return e.personage.attributes.getAttribute(c.VITALITY).greaterThanOrEqualTo("1.e+12");
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((tu = {}),
                (tu[c.VITALITY] = function (e) {
                  return new E.Z(1.1);
                }),
                tu),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "vitality3",
              name: "Lifeblood III",
              description: "Your vitality has reached legendary proportions, a paragon of health and endurance.",
              requirementsDesc: ["Reach 1Sx Vitality"],
              getCompleteCondition: function (e) {
                return e.personage.attributes.getAttribute(c.VITALITY).greaterThanOrEqualTo("1.e+21");
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((nu = {}),
                (nu[c.VITALITY] = function (e) {
                  return new E.Z(1.1);
                }),
                nu),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "strength1",
              name: "Might of Titans I",
              description: "Your strength grows formidable, echoing the might of ancient titans.",
              requirementsDesc: ["Reach 1M Strength"],
              getCompleteCondition: function (e) {
                return e.personage.attributes.getAttribute(c.STRENGTH).greaterThanOrEqualTo("1.e+6");
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((iu = {}),
                (iu[c.STRENGTH] = function (e) {
                  return new E.Z(1.1);
                }),
                iu),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "strength2",
              name: "Might of Titans II",
              description: "Your sheer strength is awe-inspiring, capable of feats once deemed impossible.",
              requirementsDesc: ["Reach 1T Strength"],
              getCompleteCondition: function (e) {
                return e.personage.attributes.getAttribute(c.STRENGTH).greaterThanOrEqualTo("1.e+12");
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((ru = {}),
                (ru[c.STRENGTH] = function (e) {
                  return new E.Z(1.1);
                }),
                ru),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "strength3",
              name: "Might of Titans III",
              description: "In the realm of strength, you are now a legend, wielding power that bends the very fabric of reality.",
              requirementsDesc: ["Reach 1Sx Strength"],
              getCompleteCondition: function (e) {
                return e.personage.attributes.getAttribute(c.STRENGTH).greaterThanOrEqualTo("1.e+21");
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((ou = {}),
                (ou[c.STRENGTH] = function (e) {
                  return new E.Z(1.1);
                }),
                ou),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "runemastery1",
              name: "Runic Scholar I",
              description: "Your mastery of runes has reached an initial, remarkable milestone.",
              requirementsDesc: ["Reach 1M Rune Mastery"],
              getCompleteCondition: function (e) {
                return e.personage.attributes.getAttribute(c.RUNE_MASTERY).greaterThanOrEqualTo("1.e+6");
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((au = {}),
                (au[c.RUNE_READING] = function (e) {
                  return new E.Z(1.1);
                }),
                au),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "runemastery2",
              name: "Runic Scholar II",
              description: "Your understanding of runes now delves into the deeper, more arcane aspects.",
              requirementsDesc: ["Reach 1T Rune Mastery"],
              getCompleteCondition: function (e) {
                return e.personage.attributes.getAttribute(c.RUNE_MASTERY).greaterThanOrEqualTo("1.e+12");
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((uu = {}),
                (uu[c.RUNE_MASTERY] = function (e) {
                  return new E.Z(1.1);
                }),
                uu),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "runemastery3",
              name: "Runic Scholar III",
              description: "Your rune mastery reaches a zenith, bridging the gap between the physical and the mystical.",
              requirementsDesc: ["Reach 1Sx Rune Mastery"],
              getCompleteCondition: function (e) {
                return e.personage.attributes.getAttribute(c.RUNE_MASTERY).greaterThanOrEqualTo("1.e+21");
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((su = {}),
                (su[c.RUNE_READING] = function (e) {
                  return new E.Z(1.1);
                }),
                su),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "agility1",
              name: "Fleetfoot I",
              description: "Your agility has hit a remarkable milestone, making you swift and elusive.",
              requirementsDesc: ["Reach 1M Agility"],
              getCompleteCondition: function (e) {
                return e.personage.attributes.getAttribute(c.AGILITY).greaterThanOrEqualTo("1.e+6");
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((cu = {}),
                (cu[c.AGILITY] = function (e) {
                  return new E.Z(1.1);
                }),
                cu),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "agility2",
              name: "Fleetfoot II",
              description: "Your agility is unmatched, allowing you to move with unparalleled grace and speed.",
              requirementsDesc: ["Reach 1T Agility"],
              getCompleteCondition: function (e) {
                return e.personage.attributes.getAttribute(c.AGILITY).greaterThanOrEqualTo("1.e+12");
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((lu = {}),
                (lu[c.AGILITY] = function (e) {
                  return new E.Z(1.1);
                }),
                lu),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "agility3",
              name: "Fleetfoot III",
              description: "You have achieved the pinnacle of agility, moving like a whisper on the wind.",
              requirementsDesc: ["Reach 1Sx Agility"],
              getCompleteCondition: function (e) {
                return e.personage.attributes.getAttribute(c.AGILITY).greaterThanOrEqualTo("1.e+21");
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((du = {}),
                (du[c.AGILITY] = function (e) {
                  return new E.Z(1.1);
                }),
                du),
              isHidden: !0,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
            {
              id: "sewers50",
              name: "Sewer Survivor",
              description: "You have braved the dank and dangerous sewers, reaching combat level 50 amidst its murky depths.",
              requirementsDesc: ["Reach combat level 50 in the Sewers"],
              getCompleteCondition: function (e) {
                return e.battle.battleLocations.getBattleLocationMaxLevel(p.SEVERS) >= 50;
              },
              bonusesDesc: ["+20% to all damage types"],
              isHidden: !1,
              unlockCondition: function (e) {
                return e.battle.battleLocations.getBattleLocationFights(p.SEVERS) > 0;
              },
            },
            {
              id: "sewers100",
              name: "Lord of the Underworld",
              description: "Master of the Sewers, you have reached combat level 100, dominating its shadowy corridors.",
              requirementsDesc: ["Reach combat level 100 in the Sewers"],
              getCompleteCondition: function (e) {
                return e.battle.battleLocations.getBattleLocationMaxLevel(p.SEVERS) >= 100;
              },
              bonusesDesc: ["+20% to all damage types"],
              isHidden: !1,
              unlockCondition: function (e) {
                return e.battle.battleLocations.getBattleLocationFights(p.SEVERS) > 0;
              },
            },
            {
              id: "lake50",
              name: "Lake Guardian",
              description: "At the serene yet deceptive lake, you have achieved combat level 50, proving your prowess.",
              requirementsDesc: ["Reach combat level 50 at the Lake"],
              getCompleteCondition: function (e) {
                return e.battle.battleLocations.getBattleLocationMaxLevel(p.LAKE) >= 50;
              },
              bonusesDesc: ["+20% to all damage types"],
              isHidden: !1,
              unlockCondition: function (e) {
                return e.battle.battleLocations.getBattleLocationFights(p.LAKE) > 0;
              },
            },
            {
              id: "lake100",
              name: "Lake Conqueror",
              description: "With unmatched skill, you have conquered the Lake, reaching combat level 100.",
              requirementsDesc: ["Reach combat level 100 at the Lake"],
              getCompleteCondition: function (e) {
                return e.battle.battleLocations.getBattleLocationMaxLevel(p.LAKE) >= 100;
              },
              bonusesDesc: ["+20% to all damage types"],
              isHidden: !1,
              unlockCondition: function (e) {
                return e.battle.battleLocations.getBattleLocationFights(p.LAKE) > 0;
              },
            },
            {
              id: "field50",
              name: "Field Fighter",
              description: "In the open fields, you have proven your mettle by reaching combat level 50.",
              requirementsDesc: ["Reach combat level 50 in the Field"],
              getCompleteCondition: function (e) {
                return e.battle.battleLocations.getBattleLocationMaxLevel(p.FIELD) >= 50;
              },
              bonusesDesc: ["+20% to all damage types"],
              isHidden: !1,
              unlockCondition: function (e) {
                return e.battle.battleLocations.getBattleLocationFights(p.FIELD) > 0;
              },
            },
            {
              id: "field100",
              name: "Master of the Meadows",
              description: "As a true Master of the Meadows, you have reached the pinnacle combat level 100 in the Field.",
              requirementsDesc: ["Reach combat level 100 in the Field"],
              getCompleteCondition: function (e) {
                return e.battle.battleLocations.getBattleLocationMaxLevel(p.FIELD) >= 100;
              },
              bonusesDesc: ["+20% to all damage types"],
              isHidden: !1,
              unlockCondition: function (e) {
                return e.battle.battleLocations.getBattleLocationFights(p.FIELD) > 0;
              },
            },
            {
              id: "cave50",
              name: "Cave Challenger",
              description: "Within the echoing caves, you have fought bravely to reach combat level 50.",
              requirementsDesc: ["Reach combat level 50 in the Cave"],
              getCompleteCondition: function (e) {
                return e.battle.battleLocations.getBattleLocationMaxLevel(p.CAVE) >= 50;
              },
              bonusesDesc: ["+20% to all damage types"],
              isHidden: !1,
              unlockCondition: function (e) {
                return e.battle.battleLocations.getBattleLocationFights(p.CAVE) > 0;
              },
            },
            {
              id: "cave100",
              name: "Cavern Conqueror",
              description: "In the depths of the Caves, you have achieved the legendary combat level 100.",
              requirementsDesc: ["Reach combat level 100 in the Cave"],
              getCompleteCondition: function (e) {
                return e.battle.battleLocations.getBattleLocationMaxLevel(p.CAVE) >= 100;
              },
              bonusesDesc: ["+20% to all damage types"],
              isHidden: !1,
              unlockCondition: function (e) {
                return e.battle.battleLocations.getBattleLocationFights(p.CAVE) > 0;
              },
            },
            {
              id: "forest50",
              name: "Forest Forerunner",
              description: "Amidst the whispering woods of the Forest, you've attained combat level 50, a true forerunner.",
              requirementsDesc: ["Reach combat level 50 in the Forest"],
              getCompleteCondition: function (e) {
                return e.battle.battleLocations.getBattleLocationMaxLevel(p.FOREST) >= 50;
              },
              bonusesDesc: ["+20% to all damage types"],
              isHidden: !1,
              unlockCondition: function (e) {
                return e.battle.battleLocations.getBattleLocationFights(p.FOREST) > 0;
              },
            },
            {
              id: "forest100",
              name: "Sylvan Sovereign",
              description: "As the Sylvan Sovereign, you reign supreme in the Forest, having reached combat level 100.",
              requirementsDesc: ["Reach combat level 100 in the Forest"],
              getCompleteCondition: function (e) {
                return e.battle.battleLocations.getBattleLocationMaxLevel(p.FOREST) >= 100;
              },
              bonusesDesc: ["+20% to all damage types"],
              isHidden: !1,
              unlockCondition: function (e) {
                return e.battle.battleLocations.getBattleLocationFights(p.FOREST) > 0;
              },
            },
            {
              id: "library50",
              name: "Scholar Warrior",
              description: "Amongst ancient tomes and mystical lore, you've reached combat level 50 in the Library.",
              requirementsDesc: ["Reach combat level 50 in the Library"],
              getCompleteCondition: function (e) {
                return e.battle.battleLocations.getBattleLocationMaxLevel(p.LIBRARY) >= 50;
              },
              bonusesDesc: ["+20% to all damage types"],
              isHidden: !1,
              unlockCondition: function (e) {
                return e.battle.battleLocations.getBattleLocationFights(p.LIBRARY) > 0;
              },
            },
            {
              id: "library100",
              name: "Guardian of Knowledge",
              description: "As the Guardian of Knowledge, you have achieved combat level 100, mastering the battles of the mind and sword in the Library.",
              requirementsDesc: ["Reach combat level 100 in the Library"],
              getCompleteCondition: function (e) {
                return e.battle.battleLocations.getBattleLocationMaxLevel(p.LIBRARY) >= 100;
              },
              bonusesDesc: ["+20% to all damage types"],
              isHidden: !1,
              unlockCondition: function (e) {
                return e.battle.battleLocations.getBattleLocationFights(p.LIBRARY) > 0;
              },
            },
          ],
          Mc = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
              function i() {
                this.constructor = t;
              }
              e(t, n), (t.prototype = null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
            };
          })(),
          Zc = function () {
            return (
              (Zc =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                  return e;
                }),
              Zc.apply(this, arguments)
            );
          },
          Pc = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (t.achievementsState = []), t;
            }
            return (
              Mc(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                this.achievementsState = (null == e ? void 0 : e.list) || [];
              }),
              (t.prototype.exportData = function () {
                return { list: this.achievementsState };
              }),
              (t.prototype.dataToUI = function () {
                var e = this;
                return {
                  totalAmount: Sc.length,
                  amountCompleted: this.achievementsState.filter(function (e) {
                    return e.statusId === Ga.COMLETE;
                  }).length,
                  amountHidden: Sc.filter(function (e) {
                    return e.isHidden;
                  }).length,
                  hiddenComplete: this.achievementsState
                    .filter(function (e) {
                      return e.statusId === Ga.COMLETE;
                    })
                    .filter(function (e) {
                      return !!Sc.find(function (t) {
                        return t.id === e.id && t.isHidden;
                      });
                    }).length,
                  list: Sc.filter(function (t) {
                    return e.isUnlocked(t);
                  }).map(function (t) {
                    return e.currentAchievementToUI(t);
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
                      : t.statusId) === Ga.COMLETE) &&
                  (e.unlockCondition(ml) ||
                    this.achievementsState.find(function (t) {
                      return t.id === e.id;
                    }))
                );
              }),
              (t.prototype.currentAchievementToUI = function (e) {
                var t = this.achievementsState.findIndex(function (t) {
                  return t.id === e.id;
                });
                return (
                  t < 0 && (this.achievementsState.push({ id: e.id, statusId: Ga.PENDING }), (t = this.achievementsState.length - 1)),
                  this.achievementsState[t].statusId === Ga.COMLETE && ml.newNotifications.registerNotification("progress:achievements:".concat(e.id)),
                  {
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    bonusText: e.bonusesDesc,
                    requirementText: e.requirementsDesc,
                    isHidden: e.isHidden,
                    isVisible: !e.isHidden || this.achievementsState[t].statusId === Ga.COMLETE,
                    status: this.achievementsState[t].statusId,
                    gain: e.getGain
                      ? ce
                          .getValue(e.getGain, gl.getInstance())
                          .filter(function (e) {
                            return e.amount;
                          })
                          .map(function (e) {
                            return Zc(Zc({}, e), { amountValue: e.amount.toPrecision(18), amount: J(e.amount) });
                          })
                      : [],
                    max: e.getCapacityEffect
                      ? ce
                          .getValue(e.getCapacityEffect, gl.getInstance())
                          .filter(function (e) {
                            return e.amount;
                          })
                          .map(function (e) {
                            return Zc(Zc({}, e), { amountValue: e.amount.toPrecision(18), amount: J(e.amount) });
                          })
                      : [],
                    gainAttribute: e.getAttribute
                      ? ce
                          .getValue(e.getAttribute, gl.getInstance())
                          .filter(function (e) {
                            return e.amount;
                          })
                          .map(function (e) {
                            return Zc(Zc({}, e), { amountValue: e.amount.toPrecision(18), amount: "+".concat(J(e.amount)) });
                          })
                      : [],
                    gainMult: e.getGainMultiplier
                      ? ce
                          .getValue(e.getGainMultiplier, gl.getInstance())
                          .filter(function (e) {
                            return e.amount;
                          })
                          .map(function (e) {
                            return Zc(Zc({}, e), { amountValue: e.amount.toPrecision(18), amount: "x".concat(J(e.amount)) });
                          })
                      : [],
                    maxMult: e.getCapacityMultiplier
                      ? ce
                          .getValue(e.getCapacityMultiplier, gl.getInstance())
                          .filter(function (e) {
                            return e.amount;
                          })
                          .map(function (e) {
                            return Zc(Zc({}, e), { amountValue: e.amount.toPrecision(18), amount: "x".concat(J(e.amount)) });
                          })
                      : [],
                    attributeMult: e.getAttributeMultiplier
                      ? ce
                          .getValue(e.getAttributeMultiplier, gl.getInstance())
                          .filter(function (e) {
                            return e.amount;
                          })
                          .map(function (e) {
                            return Zc(Zc({}, e), { amountValue: e.amount.toPrecision(18), amount: "x".concat(J(e.amount)) });
                          })
                      : [],
                  }
                );
              }),
              (t.prototype.checkAchievementsStatus = function () {
                var e = this;
                this.achievementsState.forEach(function (t, n) {
                  if (t.statusId === Ga.PENDING) {
                    var i = Sc.find(function (e) {
                      return e.id === t.id;
                    });
                    if (i)
                      return i.getCompleteCondition(ml)
                        ? ((e.achievementsState[n].statusId = Ga.COMLETE),
                          (e.achievementsState[n].completeAt = ml.statistics.stats.timeInGame),
                          ml.resources.reassertBalances(),
                          void ml.regenerateCache())
                        : void (i.getFailureCondition && i.getFailureCondition(ml) && (e.achievementsState[n].statusId = Ga.FAILED));
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
                    : t.statusId) === Ga.COMLETE || !1
                );
              }),
              (t.prototype.process = function (e) {
                ml.statistics.stats.timeInGame % 1 < e && this.checkAchievementsStatus();
              }),
              (t.prototype.getAttributeGain = function (e) {
                var t = Sc.filter(function (t) {
                    var n;
                    return t.getAttribute && !!(null === (n = t.getAttribute) || void 0 === n ? void 0 : n[e]);
                  }),
                  n = [];
                return (
                  this.achievementsState.forEach(function (i) {
                    if (i.statusId === Ga.COMLETE) {
                      var r = t.find(function (e) {
                        return e.id === i.id;
                      });
                      if (r && r.getAttribute) {
                        var o = r.getAttribute[e](gl.getInstance());
                        n.push({ label: "Achievement: ".concat(r.name), value: o, id: "achievement-".concat(r.id), category: "Achievements" });
                      }
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getAttributeMultiplier = function (e) {
                var t = Sc.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getAttributeMultiplier) || void 0 === n ? void 0 : n[e]);
                  }),
                  n = [];
                return (
                  this.achievementsState.forEach(function (i) {
                    if (i.statusId === Ga.COMLETE) {
                      var r = t.find(function (e) {
                        return e.id === i.id;
                      });
                      if (r && r.getAttributeMultiplier) {
                        var o = r.getAttributeMultiplier[e](gl.getInstance());
                        n.push({ label: "Achievement: ".concat(r.name), value: o, id: "achievement-".concat(r.id), category: "Achievements" });
                      }
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getResourceBeingProduced = function (e) {
                var t = Sc.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getGain) || void 0 === n ? void 0 : n[e]);
                  }),
                  n = [];
                return (
                  this.achievementsState.forEach(function (i) {
                    var r;
                    if (i.statusId === Ga.COMLETE) {
                      var o = t.find(function (e) {
                        return e.id === i.id;
                      });
                      if (o && (null === (r = o.getGain) || void 0 === r ? void 0 : r[e])) {
                        var a = o.getGain[e](gl.getInstance());
                        n.push({ label: "Achievement: ".concat(o.name), value: a, id: "achievement-".concat(o.id), category: "Achievements" });
                      }
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getCraftingMultiplier = function () {
                var e = Sc.filter(function (e) {
                    return !!e.getCraftingMultiplier;
                  }),
                  t = [];
                return (
                  this.achievementsState.forEach(function (n) {
                    if (n.statusId === Ga.COMLETE) {
                      var i = e.find(function (e) {
                        return e.id === n.id;
                      });
                      if (i && i.getCraftingMultiplier) {
                        var r = i.getCraftingMultiplier(gl.getInstance());
                        t.push({ label: "Achievement: ".concat(i.name), value: r, id: "achievement-".concat(i.id), category: "Achievements" });
                      }
                    }
                  }, 0),
                  t
                );
              }),
              (t.prototype.getResourceMultiplier = function (e) {
                var t = Sc.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getGainMultiplier) || void 0 === n ? void 0 : n[e]);
                  }),
                  n = [];
                return (
                  this.achievementsState.forEach(function (i) {
                    var r;
                    if (i.statusId === Ga.COMLETE) {
                      var o = t.find(function (e) {
                        return e.id === i.id;
                      });
                      if (o && (null === (r = o.getGainMultiplier) || void 0 === r ? void 0 : r[e])) {
                        var a = o.getGainMultiplier[e](gl.getInstance());
                        n.push({ label: "Achievement: ".concat(o.name), value: a, id: "achievement-".concat(o.id), category: "Achievements" });
                      }
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getResourceBeingStored = function (e) {
                var t = Sc.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getCapacityEffect) || void 0 === n ? void 0 : n[e]);
                  }),
                  n = [];
                return (
                  this.achievementsState.forEach(function (i) {
                    var r;
                    if (i.statusId === Ga.COMLETE) {
                      var o = t.find(function (e) {
                        return e.id === i.id;
                      });
                      if (o && (null === (r = o.getCapacityEffect) || void 0 === r ? void 0 : r[e])) {
                        var a = o.getCapacityEffect[e](gl.getInstance());
                        n.push({ label: "Achievement: ".concat(o.name), value: a, id: "achievement-".concat(o.id), category: "Achievements" });
                      }
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getResourceStorageMultiplier = function (e) {
                var t = Sc.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getCapacityMultiplier) || void 0 === n ? void 0 : n[e]);
                  }),
                  n = [];
                return (
                  this.achievementsState.forEach(function (i) {
                    var r;
                    if (i.statusId === Ga.COMLETE) {
                      var o = t.find(function (e) {
                        return e.id === i.id;
                      });
                      if (o && (null === (r = o.getCapacityMultiplier) || void 0 === r ? void 0 : r[e])) {
                        var a = o.getCapacityMultiplier[e](gl.getInstance());
                        n.push({ label: "Achievement: ".concat(o.name), value: a, id: "achievement-".concat(o.id), category: "Achievements" });
                      }
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.resetFailedOnKP = function () {
                var e = Sc.filter(function (e) {
                  return e.resetFailureOnKPPrestige;
                });
                this.reset(e);
              }),
              (t.prototype.resetFailedOnXP = function () {
                var e = Sc.filter(function (e) {
                  return e.resetFailureOnXPPrestige;
                });
                this.reset(e);
              }),
              (t.prototype.reset = function (e) {
                this.achievementsState = this.achievementsState.map(function (t) {
                  return t.statusId !== Ga.FAILED
                    ? t
                    : e.find(function (e) {
                        return e.id === t.id;
                      })
                    ? Zc(Zc({}, t), { statusId: Ga.PENDING })
                    : t;
                });
              }),
              t
            );
          })(s),
          _c = Pc.getInstance(),
          Gc = [
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
              answer: ["You can hover over rune to see it's effect, or click to see more detailed description"],
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
              question: "I feel like learning anything start taking too much time. What to do?",
              answer: ["Learn upgrades tab (unlocked when you have 10 mana capacity). You have some upgrades that can speed up rune learning"],
              unlockCond: function (e) {
                return !0;
              },
            },
            {
              id: "sacrifice",
              question: "I have red indicator with S letter inside over rune. What does it mean?",
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
                return !0;
              },
            },
            {
              id: "next-target",
              question: "Ok, I unlocked Crystals and several new runes. Whats next?",
              answer: ["Try to get ticket to mages city upgrade. It unlocks whole new game layer!"],
              unlockCond: function (e) {
                return !0;
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
                return e.city.academyUpgrades.getUpgradeLevel(a.REINCARNATION) > 0;
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
                return e.city.academyUpgrades.getUpgradeLevel(a.REINCARNATION) > 0;
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
                return e.city.academyUpgrades.getUpgradeLevel(a.BATTLE_MASTERY) > 0;
              },
            },
            {
              id: "combat-locations",
              question: "What are combat locations?",
              answer: [
                "Battles with monsters occur in various locations. Initially, only one location is available to you - the Sewers. As you progress in the previous location, the next ones will unlock. Each location is divided into zones. 20 victories in a zone unlock the next one.",
              ],
              unlockCond: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.BATTLE_MASTERY) > 0;
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
                return e.city.academyUpgrades.getUpgradeLevel(a.BATTLE_MASTERY) > 0;
              },
            },
            {
              id: "lose-battle",
              question: "I lost in battle. What now?",
              answer: [
                "Don't be upset, your character is weak at the beginning. But defeat is not a big deal. Your character will rest and fully restore health in 100 seconds. You can continue the battle as soon as you restore enough health. This will not affect your actions in the city.",
              ],
              unlockCond: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.BATTLE_MASTERY) > 0;
              },
            },
            {
              id: "become-stronger",
              question: "How do I become stronger?",
              answer: [
                "To become stronger, increase your combat attributes. Initially, try to raise Vitality and Strength. Victories in battles bring resources and equipment, affecting your attributes. Over time, as you unlock new upgrades in the academy, you gain access to new battle actions, diversifying your strategy.",
              ],
              unlockCond: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.BATTLE_MASTERY) > 0;
              },
            },
            {
              id: "equipment",
              question: "What about equipment?",
              answer: [
                "Equipment works in a classic way. Battles bring you weapons or armor, giving bonuses when equipped. For information about bonuses, hover over the weapon. To equip, click on it.",
              ],
              unlockCond: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.BATTLE_MASTERY) > 0;
              },
            },
            {
              id: "improve-equipment",
              question: "Can I somehow improve my equipment?",
              answer: [
                'Of course! When you dismantle unnecessary weapons, you receive shards of various materials. Each weapon gives a different number of shards, depending on its quality. After accumulating enough shards, remove the item you want to improve. Press "Upgrade mode" and click on the item. The necessary number of shards will be shown when hovering over the item.',
              ],
              unlockCond: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.BATTLE_MASTERY) > 0;
              },
            },
          ],
          Bc = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
              function i() {
                this.constructor = t;
              }
              e(t, n), (t.prototype = null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
            };
          })(),
          Dc = (function (e) {
            function t() {
              return e.call(this) || this;
            }
            return (
              Bc(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.dataToUI = function () {
                var e = Gc.filter(function (e) {
                  return e.unlockCond(ml);
                }).map(function (e) {
                  return ml.newNotifications.registerNotification("about:faq:".concat(e.id)), { id: e.id, question: e.question, answer: e.answer };
                });
                return { items: e };
              }),
              (t.prototype.process = function (e) {}),
              (t.prototype.regenerateCache = function () {}),
              t
            );
          })(s),
          Uc = Dc.getInstance(),
          kc = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
              function i() {
                this.constructor = t;
              }
              e(t, n), (t.prototype = null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
            };
          })(),
          xc = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (t.faq = Uc), t;
            }
            return (
              kc(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.dataToUI = function () {
                return { faq: this.faq.dataToUI() };
              }),
              (t.prototype.process = function (e) {}),
              (t.prototype.regenerateCache = function () {
                this.faq.regenerateCache();
              }),
              t
            );
          })(s).getInstance(),
          Hc = [
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
                return e.city.academyUpgrades.getUpgradeLevel(a.EVOCATION_SPELLS) > 0;
              },
            },
            {
              id: l.MAX_MAGICAL_DAMAGE,
              name: "Max Magical Damage",
              description: "Your max physical damage",
              unlockCond: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.EVOCATION_SPELLS) > 0;
              },
            },
            {
              id: l.FIRE_DAMAGE,
              name: "Fire Damage",
              description: "Your fire damage",
              unlockCond: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.EVOCATION_SPELLS) > 0;
              },
            },
            {
              id: l.MAX_FIRE_DAMAGE,
              name: "Max Fire Damage",
              description: "Your max fire damage",
              unlockCond: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.EVOCATION_SPELLS) > 0;
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
          Wc = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
              function i() {
                this.constructor = t;
              }
              e(t, n), (t.prototype = null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
            };
          })(),
          Xc = function () {
            return (
              (Xc =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                  return e;
                }),
              Xc.apply(this, arguments)
            );
          },
          qc = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (t.battleAttributesEffects = {}), (t.battleAttributesBreakdowns = {}), (t.dbCache = {}), t;
            }
            return (
              Wc(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.onInit = function () {
                this.dbCache = Hc.reduce(function (e, t) {
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
                  attributes: Hc.map(function (t) {
                    return e.processToUI(t);
                  }).filter(function (e) {
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
                      A =
                        (((t = {})[l.MAX_HP] = {
                          linear: [{ id: "basic", label: "Basic", value: new E.Z(1), category: "Basic" }],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[l.HP_REGEN] = {
                          linear: [{ id: "basic", label: "Basic", value: new E.Z(0.1), category: "Basic" }],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[l.ARMOR] = { linear: [{ id: "basic", label: "Basic", value: new E.Z(1), category: "Basic" }], multiplier: [], consumption: [] }),
                        (t[l.MAGICAL_DAMAGE] = {
                          linear: [{ id: "basic", label: "Basic", value: new E.Z(0), category: "Base" }],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[l.MAX_MAGICAL_DAMAGE] = {
                          linear: [{ id: "basic", label: "Basic", value: new E.Z(0), category: "Base" }],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[l.PHYSICAL_DAMAGE] = {
                          linear: [{ id: "basic", label: "Basic", value: new E.Z(0), category: "Base" }],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[l.MAX_PHYSICAL_DAMAGE] = {
                          linear: [{ id: "basic", label: "Basic", value: new E.Z(0), category: "Base" }],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[l.FIRE_DAMAGE] = {
                          linear: [{ id: "basic", label: "Basic", value: new E.Z(0), category: "Base" }],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[l.MAX_FIRE_DAMAGE] = {
                          linear: [{ id: "basic", label: "Basic", value: new E.Z(0), category: "Base" }],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[l.CRIT_CHANCE] = { linear: [], multiplier: [], consumption: [] }),
                        (t[l.CRIT_MULTIPLIER] = {
                          linear: [{ id: "basic", label: "Basic", value: new E.Z(2), category: "Basic" }],
                          multiplier: [],
                          consumption: [],
                        }),
                        (t[l.DODGE_CHANCE] = { linear: [], multiplier: [], consumption: [] }),
                        (t[l.PRECISION] = { linear: [], multiplier: [], consumption: [] }),
                        (t[l.MAGIC_RESISTANCE] = { linear: [], multiplier: [], consumption: [] }),
                        (t[l.FIRE_RESISTANCE] = { linear: [], multiplier: [], consumption: [] }),
                        t);
                    for (var v in A)
                      (n = A[v].linear).push.apply(n, ml.battle.battleActions.getAttributeProduced(v)),
                        (i = A[v].multiplier).push.apply(i, ml.battle.battleActions.getAttributeMultiplier(v)),
                        (r = A[v].linear).push.apply(r, ml.battle.battleAttributes.getAttributeProduced(v)),
                        (o = A[v].multiplier).push.apply(o, ml.battle.battleAttributes.getAttributeMultiplier(v)),
                        (a = A[v].linear).push.apply(a, ml.city.actions.getBattleAttributeProduced(v)),
                        (u = A[v].multiplier).push.apply(u, ml.city.actions.getBattleAttributeMultiplier(v)),
                        (s = A[v].linear).push.apply(s, ml.construction.structures.getBattleAttributeProduced(v)),
                        (c = A[v].multiplier).push.apply(c, ml.construction.structures.getBattleAttributeMultiplier(v)),
                        (d = A[v].linear).push.apply(d, ml.battle.battleItems.getBattleAttributeProduced(v)),
                        (p = A[v].multiplier).push.apply(p, ml.battle.battleItems.getBattleAttributeMultiplier(v)),
                        (f = A[v].multiplier).push.apply(f, ml.learning.crystals.getBattleAttributeMultiplier(v));
                    return (
                      (g = A[l.MAX_PHYSICAL_DAMAGE].multiplier).push.apply(g, A[l.PHYSICAL_DAMAGE].multiplier),
                      (m = A[l.MAX_FIRE_DAMAGE].multiplier).push.apply(m, A[l.FIRE_DAMAGE].multiplier),
                      (h = A[l.MAX_MAGICAL_DAMAGE].multiplier).push.apply(h, A[l.MAGICAL_DAMAGE].multiplier),
                      A
                    );
                  })(),
                  n = {};
                Hc.forEach(function (i) {
                  var r, o, a;
                  if (i.unlockCond(ml)) {
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
                    (e.battleAttributesEffects[i.id] = new E.Z(u.mul(s)).sub(c)),
                      (n[i.id].income = t[i.id].linear
                        .filter(function (e) {
                          return e.value;
                        })
                        .map(function (e) {
                          return Xc(Xc({}, e), { value: "+".concat(e.value.toPrecision(4)) });
                        })),
                      (n[i.id].multiplier = t[i.id].multiplier
                        .filter(function (e) {
                          return 1 !== e.value;
                        })
                        .map(function (e) {
                          return Xc(Xc({}, e), { value: "x".concat(e.value.toPrecision(4)) });
                        })),
                      (n[i.id].consumption = t[i.id].consumption
                        .filter(function (e) {
                          return e.value;
                        })
                        .map(function (e) {
                          return Xc(Xc({}, e), { value: "-".concat(e.value.toPrecision(4)) });
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
                  (e === l.MAX_PHYSICAL_DAMAGE && (a = a.plus(null !== (i = this.battleAttributesEffects[l.PHYSICAL_DAMAGE]) && void 0 !== i ? i : new E.Z(0))),
                  [l.CRIT_CHANCE, l.CRIT_MULTIPLIER].includes(e) && (null === (r = t[l.CRIT_CHANCE]) || void 0 === r ? void 0 : r.lessThanOrEqualTo(0)))
                )
                  return null;
                if ([l.DODGE_CHANCE, l.PRECISION].includes(e) && (null === (o = t[e]) || void 0 === o ? void 0 : o.lessThanOrEqualTo(0))) return null;
                var u = this.dbCache[e];
                return u.isPercentage ? "".concat(J(a.mul(100), 2), "%") : u.allowDecimal ? J(a) : ee(a, 2);
              }),
              (t.prototype.processToUI = function (e) {
                var t,
                  n = e.unlockCond(ml),
                  i = this.getDisplayRepresentation(e.id, this.battleAttributesEffects);
                return (
                  i || (n = !1),
                  {
                    id: e.id,
                    name: e.name,
                    isUnlocked: n,
                    amount: i || "0",
                    breakdown: null !== (t = this.battleAttributesBreakdowns[e.id]) && void 0 !== t ? t : { income: [], multiplier: [], consumption: [] },
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
                (this.battleAttributesBreakdowns = {}), (this.battleAttributesEffects = {});
              }),
              (t.prototype.getAttributeProduced = function (e) {
                var t = [];
                return (
                  e === l.MAX_HP &&
                    t.push({
                      label: "Attribute: Vitality",
                      value: w(ml.personage.attributes.getAttribute(c.VITALITY), 0.1),
                      id: "attributes",
                      category: "Attributes",
                    }),
                  e === l.HP_REGEN &&
                    t.push({
                      label: "Attribute: Vitality",
                      value: w(ml.personage.attributes.getAttribute(c.VITALITY), 0.1).mul(0.01),
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
                      value: w(ml.personage.attributes.getAttribute(c.STRENGTH), 0.1).mul(0.1).plus(1),
                      id: "battleAttrs",
                      category: "Attributes",
                    }),
                  [l.FIRE_DAMAGE, l.MAGICAL_DAMAGE].includes(e) &&
                    t.push({
                      label: "Attribute: Intellect",
                      value: w(ml.personage.attributes.getAttribute(c.RUNE_READING), 0.1).mul(0.1).plus(1),
                      id: "battleAttrs",
                      category: "Attributes",
                    }),
                  [l.FIRE_DAMAGE, l.PHYSICAL_DAMAGE, l.MAGICAL_DAMAGE].includes(e) &&
                    t.push({
                      label: "Achievements: Conquer areas",
                      value: new E.Z(
                        1 +
                          (ml.achievements.getAchievementComplete("cave50") ? 0.2 : 0) +
                          (ml.achievements.getAchievementComplete("cave100") ? 0.2 : 0) +
                          (ml.achievements.getAchievementComplete("lake50") ? 0.2 : 0) +
                          (ml.achievements.getAchievementComplete("lake100") ? 0.2 : 0) +
                          (ml.achievements.getAchievementComplete("field50") ? 0.2 : 0) +
                          (ml.achievements.getAchievementComplete("field100") ? 0.2 : 0) +
                          (ml.achievements.getAchievementComplete("sewers50") ? 0.2 : 0) +
                          (ml.achievements.getAchievementComplete("sewers100") ? 0.2 : 0) +
                          (ml.achievements.getAchievementComplete("forest50") ? 0.2 : 0) +
                          (ml.achievements.getAchievementComplete("forest100") ? 0.2 : 0) +
                          (ml.achievements.getAchievementComplete("library50") ? 0.2 : 0) +
                          (ml.achievements.getAchievementComplete("library100") ? 0.2 : 0)
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
          Fc = qc.getInstance(),
          Yc = [
            {
              id: d.KICK,
              name: "Kick",
              unlockCondition: function (e) {
                return !0;
              },
              effortRequired: new E.Z(1),
              description: "Kick your enemies",
              baseAttributePerCats: ((Mu = {}), (Mu[l.PHYSICAL_DAMAGE] = new E.Z(2)), (Mu[l.MAX_PHYSICAL_DAMAGE] = new E.Z(1)), Mu),
              baseCostPerCast: ((Zu = {}), (Zu[i.FIGHTING_ACTIONS] = new E.Z(1)), Zu),
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
              baseAttributePerCats: ((Pu = {}), (Pu[l.HP_REGEN] = new E.Z(0.2)), Pu),
              baseCostPerCast: ((_u = {}), (_u[i.FIGHTING_ACTIONS] = new E.Z(1)), _u),
              tags: ["physical", "hp"],
            },
            {
              id: d.STONE_SKIN,
              name: "Stone Skin Spell",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.PROTECTION_SPELLS) > 0;
              },
              effortRequired: new E.Z(1),
              description: "Improve your armor significantly",
              baseAttributePerCats: {},
              baseAttributeMultiplierPerCast: ((Gu = {}), (Gu[l.ARMOR] = new E.Z(3)), Gu),
              baseCostPerCast: ((Bu = {}), (Bu[i.FIGHTING_ACTIONS] = new E.Z(5)), (Bu[i.MANA] = new E.Z("1.e+16")), Bu),
              tags: ["physical", "armor"],
            },
            {
              id: d.MINOR_HEAL,
              name: "Minor Heal",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.PROTECTION_SPELLS) > 0;
              },
              effortRequired: new E.Z(1),
              description: "Restore some of your HP",
              baseAttributePerCats: ((Du = {}), (Du[l.HP_REGEN] = new E.Z(20)), Du),
              baseCostPerCast: ((Uu = {}), (Uu[i.FIGHTING_ACTIONS] = new E.Z(5)), (Uu[i.MANA] = new E.Z("1.e+16")), Uu),
              tags: ["physical", "hp"],
            },
            {
              id: d.FIREBALL,
              name: "Fireball",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.EVOCATION_SPELLS) > 0;
              },
              effortRequired: new E.Z(1),
              description: "Create fireball and launch it against your opponents",
              baseAttributePerCats: ((ku = {}), (ku[l.FIRE_DAMAGE] = new E.Z(3)), (ku[l.MAX_FIRE_DAMAGE] = new E.Z(6)), ku),
              baseCostPerCast: ((xu = {}), (xu[i.FIGHTING_ACTIONS] = new E.Z(5)), (xu[i.MANA] = new E.Z("1.e+16")), xu),
              tags: ["spell", "fire", "damage"],
            },
            {
              id: d.FIRE_BLAST,
              name: "Fire Blast",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.ADVANCED_EVOCATION) > 0;
              },
              effortRequired: new E.Z(1),
              description: "Unleash massive fire blast at your opponents",
              baseAttributePerCats: ((Hu = {}), (Hu[l.FIRE_DAMAGE] = new E.Z(14)), (Hu[l.MAX_FIRE_DAMAGE] = new E.Z(21)), Hu),
              baseCostPerCast: ((Wu = {}), (Wu[i.FIGHTING_ACTIONS] = new E.Z(10)), (Wu[i.MANA] = new E.Z("1.e+18")), Wu),
              tags: ["spell", "fire", "damage"],
            },
            {
              id: d.MAGIC_ARROW,
              name: "Magic Arrow",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.ADVANCED_EVOCATION) > 0;
              },
              effortRequired: new E.Z(1),
              description: "Launch arrow made of magic at your opponents",
              baseAttributePerCats: ((Xu = {}), (Xu[l.FIRE_DAMAGE] = new E.Z(1)), (Xu[l.MAX_FIRE_DAMAGE] = new E.Z(49)), Xu),
              baseCostPerCast: ((qu = {}), (qu[i.FIGHTING_ACTIONS] = new E.Z(10)), (qu[i.MANA] = new E.Z("1.e+18")), qu),
              tags: ["spell", "magic", "damage"],
            },
            {
              id: d.SWEEPING_BLOW,
              name: "Sweeping Blow",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.ADVANCED_FIGHT_MOVES) > 0;
              },
              effortRequired: new E.Z(1),
              description: "Massive Hit",
              baseAttributePerCats: ((Fu = {}), (Fu[l.PHYSICAL_DAMAGE] = new E.Z(10)), (Fu[l.MAX_PHYSICAL_DAMAGE] = new E.Z(7)), Fu),
              baseCostPerCast: ((Yu = {}), (Yu[i.FIGHTING_ACTIONS] = new E.Z(5)), (Yu[i.KNOWLEDGE] = new E.Z("1.e+21")), Yu),
              tags: ["physical", "attack"],
            },
          ],
          Kc = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
              function i() {
                this.constructor = t;
              }
              e(t, n), (t.prototype = null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
            };
          })(),
          jc = function () {
            return (
              (jc =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                  return e;
                }),
              jc.apply(this, arguments)
            );
          },
          Vc = (function (e) {
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
                t.workDispatcher.on("[battle-actions] list to ui", function (e) {
                  console.log("do set list to ui", e), t.listToUI(e);
                }),
                t.workDispatcher.on("[battle-actions] run list", function (e) {
                  console.log("do run battle list", e), t.runList(e.id);
                }),
                t.workDispatcher.on("[battle-actions] delete list", function (e) {
                  console.log("do delete list", e), t.deleteList(e.id);
                }),
                t.workDispatcher.on("[battle-actions] stop list", function (e) {
                  console.log("do stop list", e), t.stopList();
                }),
                t
              );
            }
            return (
              Kc(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                var t;
                (this.battleActions =
                  (null == e
                    ? void 0
                    : e.actions.map(function (e) {
                        return jc(jc({}, e), { numPerformed: new E.Z(e.numPerformed) });
                      })) || []),
                  (this.lists = (null == e ? void 0 : e.actionLists) || { selectedId: void 0, selectedProgress: 0, lists: [] }),
                  (this.isUnlocked = null !== (t = null == e ? void 0 : e.isUnlocked) && void 0 !== t && t),
                  (this.runningState = (null == e ? void 0 : e.running)
                    ? { id: e.running.id, progress: new E.Z(e.running.progress), isPaused: e.running.isPaused, pauseCd: 0, efficiency: 1 }
                    : void 0);
              }),
              (t.prototype.exportData = function () {
                return {
                  actions: this.battleActions.map(function (e) {
                    return jc(jc({}, e), { numPerformed: e.numPerformed.toPrecision(18) });
                  }),
                  actionLists: this.lists,
                  isUnlocked: this.isUnlocked,
                  running: this.runningState
                    ? { id: this.runningState.id, progress: this.runningState.progress.toPrecision(18), isPaused: this.runningState.isPaused }
                    : void 0,
                };
              }),
              (t.prototype.regenerateCache = function () {
                var e = this;
                performance.now(),
                  this.lists.lists.forEach(function (t) {
                    var n;
                    ((null === (n = e.runningState) || void 0 === n ? void 0 : n.id) !== t.id && e.listAssertsCached[t.id]) || e.calculateList(t, !0);
                  }),
                  (this.ttpMark = 0),
                  Yc.forEach(function (t) {
                    e.battleActions.find(function (e) {
                      return e.id === t.id;
                    }),
                      (e.battleActionsCached[t.id] = e.processToUI(t));
                  });
              }),
              (t.prototype.dataFromCache = function () {
                return Object.values(this.battleActionsCached).map(function (e) {
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
                  listEdited: this.listEdited ? this.processCalculationsToUI(this.listEdited) : void 0,
                };
              }),
              (t.prototype.processRunningToUI = function () {
                var e = this;
                if (this.runningState) {
                  var t = this.listAssertsCached[this.runningState.id],
                    n = this.lists.lists.find(function (t) {
                      var n;
                      return t.id === (null === (n = e.runningState) || void 0 === n ? void 0 : n.id);
                    });
                  if (n) {
                    var i = t.effort.div(this.runningState.efficiency),
                      r = t.effort.greaterThanOrEqualTo(1) ? N(i.minus(this.runningState.progress.div(this.runningState.efficiency))) : N(i, !1);
                    return {
                      id: this.runningState.id,
                      name: n.name,
                      progress: i.greaterThanOrEqualTo(1) ? this.runningState.progress.mul(100).div(t.effort).toPrecision(2) : "100",
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
                        return { id: e[0], amount: e[1].mul(t).div(n || new E.Z(1)) };
                      })
                    : []
                );
              }),
              (t.prototype.getAttributePerCast = function (e, t, n) {
                return (
                  void 0 === t && (t = 1),
                  e.baseAttributePerCats
                    ? Object.entries(e.baseAttributePerCats).map(function (e) {
                        return { id: e[0], amount: e[1].mul(t).div(n || new E.Z(1)) };
                      })
                    : []
                );
              }),
              (t.prototype.getAttributeMultPerCast = function (e, t, n) {
                return (
                  void 0 === t && (t = 1),
                  e.baseAttributeMultiplierPerCast
                    ? Object.entries(e.baseAttributeMultiplierPerCast).map(function (e) {
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
              (t.prototype.getCap = function (e) {
                var t = new E.Z(1);
                return new E.Z(0.05).div(E.Z.max(ml.personage.attributes.getAttribute(c.AGILITY), new E.Z(1)).mul(t));
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
                var r = Yc.reduce(function (e, t) {
                    return (e[t.id] = t), e;
                  }, {}),
                  o = e.actions.reduce(function (e, t) {
                    return e.plus(n.getRealEffort(r[t.id], t.number).mul(1));
                  }, new E.Z(0)),
                  a = e.actions.reduce(function (e, t) {
                    return (e[t.id] = n.getRealEffort(r[t.id], t.number).div(o).toNumber()), e;
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
                    var o = n.getCostPerCast(r[t.id], t.number).find(function (e) {
                      return e.id === i.ENERGY;
                    });
                    return o && (e = e.plus(o.amount)), e;
                  }, new E.Z(0)),
                  e.actions.forEach(function (e) {
                    if (r[e.id]) {
                      r[e.id].unlockCondition(ml) || (u.canBeRunned = !1);
                      var t = n.getAttributePerCast(r[e.id], e.number, o),
                        i = n.getCostPerCast(r[e.id], e.number, o),
                        a = n.getAttributeMultPerCast(r[e.id], e.number, o);
                      t.forEach(function (e) {
                        var t;
                        u.attributeGain[e.id] || (u.attributeGain[e.id] = new E.Z(0)),
                          (u.attributeGain[e.id] = null === (t = u.attributeGain[e.id]) || void 0 === t ? void 0 : t.plus(e.amount));
                      }),
                        a.forEach(function (e) {
                          var t;
                          u.attributeMultGain[e.id] || (u.attributeMultGain[e.id] = new E.Z(1)),
                            (u.attributeMultGain[e.id] = null === (t = u.attributeMultGain[e.id]) || void 0 === t ? void 0 : t.mul(e.amount));
                        }),
                        i.forEach(function (e) {
                          var t;
                          u.resourceCost[e.id] || (u.resourceCost[e.id] = new E.Z(0)),
                            (u.resourceCost[e.id] = null === (t = u.resourceCost[e.id]) || void 0 === t ? void 0 : t.plus(e.amount));
                        });
                    }
                  }),
                  (u.balanceCalculated = Ao(ho({}, u.resourceCost))),
                  t && (this.listAssertsCached[e.id] = u),
                  u
                );
              }),
              (t.prototype.listToUI = function (e) {
                (this.listEdited = e ? this.calculateList(e) : void 0), console.log("Recalculate list: ", this.listEdited);
              }),
              (t.prototype.editList = function (e) {
                if (!e.name) throw new Error("List name should not be empty");
                if (e.id) {
                  var t = this.lists.lists.findIndex(function (t) {
                    return t.id === e.id;
                  });
                  t > -1 && (this.lists.lists[t] = e);
                } else (e = jc(jc({}, e), { id: "".concat(Math.random()) })), this.lists.lists.push(e);
                this.calculateList(e, !0);
              }),
              (t.prototype.runList = function (e) {
                (this.runningState = { id: e, progress: new E.Z(0), isPaused: !1, pauseCd: 0, efficiency: 1 }),
                  ml.regenerateCache(),
                  ml.resources.reassertBalances();
              }),
              (t.prototype.deleteList = function (e) {
                var t = this.lists.lists.findIndex(function (t) {
                  return t.id === e;
                });
                t >= 0 && this.lists.lists.splice(t, 1);
              }),
              (t.prototype.stopList = function () {
                (this.runningState = void 0), ml.regenerateCache(), ml.resources.reassertBalances();
              }),
              (t.prototype.toUI = function (e, t) {
                return (
                  void 0 === t &&
                    (t = function (e) {
                      return J(e, 4);
                    }),
                  e.map(function (e) {
                    return { id: e.id, name: ue(e.id), amount: t(e.amount), amountValue: e.amount.toPrecision(18) };
                  })
                );
              }),
              (t.prototype.recordToUI = function (e, t) {
                return (
                  void 0 === t &&
                    (t = function (e) {
                      return J(e, 4);
                    }),
                  Object.entries(e).map(function (e) {
                    var n = e[0],
                      i = e[1];
                    return { id: n, name: ue(n), amount: t(i), amountValue: i.toPrecision(18) };
                  })
                );
              }),
              (t.prototype.processToUI = function (e) {
                var t,
                  n = this.battleActions.find(function (t) {
                    return t.id === e.id;
                  });
                n || ((n = { id: e.id, numPerformed: new E.Z(0) }), this.battleActions.push(n));
                var i = this.toUI(this.getCostPerCast(e)),
                  r = this.toUI(this.getAttributePerCast(e, 1)),
                  o = this.toUI(this.getAttributeMultPerCast(e, 1), function (e) {
                    return "+x".concat(J(e.sub(1), 4));
                  }),
                  a = performance.now(),
                  u = this.getRealEffort(e),
                  s = u.toNumber();
                this.ttpMark += performance.now() - a;
                var c = e.unlockCondition(ml);
                c &&
                  this.isUnlocked &&
                  n.numPerformed.lessThanOrEqualTo(0) &&
                  ml.newNotifications.registerNotification("battle:battle-actions:battle-action:".concat(e.id));
                var l =
                  !!(null === (t = this.runningState) || void 0 === t ? void 0 : t.id) && !!this.listAssertsCached[this.runningState.id].timeBreakdowns[e.id];
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
                  amount: J(n.numPerformed),
                  isBlocked: !1,
                  effort: N(u, !1),
                  capEffort: N(this.getCap(e), !1),
                  tags: e.tags,
                  isRunning: l,
                };
              }),
              (t.prototype.processCalculationsToUI = function (e) {
                return {
                  id: "edited.".concat(Math.random()),
                  name: "edited.".concat(Math.random()),
                  effort: N(e.effort, !1),
                  items: [],
                  resourceGain: this.recordToUI(e.balanceCalculated),
                  attributeGain: this.recordToUI(e.attributeGain),
                  attributeMultGain: this.recordToUI(e.attributeMultGain, function (e) {
                    return "+x".concat(J(e.sub(1), 4));
                  }),
                  timeBreakdowns: e.timeBreakdowns,
                  canBeRunned: !0,
                };
              }),
              (t.prototype.processListToUI = function (e) {
                var t = Yc.reduce(function (e, t) {
                  return (e[t.id] = t), e;
                }, {});
                return {
                  id: e.id,
                  name: e.name,
                  effort: N(this.listAssertsCached[e.id].effort, !1),
                  items: e.actions.map(function (e) {
                    return { id: e.id, amount: e.number, name: t[e.id].name, canBeRunned: t[e.id].unlockCondition(ml) };
                  }),
                  resourceGain: this.recordToUI(this.listAssertsCached[e.id].balanceCalculated),
                  attributeGain: this.recordToUI(this.listAssertsCached[e.id].attributeGain, function (e) {
                    return "+".concat(J(e, 4));
                  }),
                  attributeMultGain: this.recordToUI(this.listAssertsCached[e.id].attributeMultGain, function (e) {
                    return "+x".concat(J(e.sub(1), 4));
                  }),
                  canBeRunned: !e.actions.find(function (e) {
                    return !t[e.id].unlockCondition(ml);
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
                          ml.resources
                            .getResource(a)
                            .mul(10 * t)
                            .neg()
                        )
                  ) {
                    var u = ml.resources.getResourceBalance(a),
                      s = (null === (r = e.resourceCost[a]) || void 0 === r ? void 0 : r.neg()) || new E.Z(0),
                      c = 1 - u.div(s.mul(n)).toNumber();
                    if ((o = Math.min(o, c)) < 0) return 0;
                  }
                return o;
              }),
              (t.prototype.process = function (e) {
                var t = this;
                if ((!this.isUnlocked && ml.learning.runeUpgrades.getUpgradeLevel(o.TICKET_OUT) > 0 && (this.isUnlocked = !0), this.runningState)) {
                  if (!this.runningState.id) return void (this.runningState = void 0);
                  if (this.runningState.isPaused && this.runningState.pauseCd > 0) return void (this.runningState.pauseCd -= e);
                  if (
                    (this.runningState.efficiency < 1 && this.runningState.pauseCd > 0 && (this.runningState.pauseCd -= e),
                    !this.listAssertsCached[this.runningState.id].canBeRunned)
                  )
                    return void this.stopList();
                  (this.runningState.efficiency < 1 || this.runningState.isPaused) &&
                    this.runningState.pauseCd <= 0 &&
                    ((this.runningState.efficiency = 1), (this.runningState.isPaused = !1), ml.regenerateCache(), ml.resources.reassertBalances());
                  var n = this.canAfford(this.listAssertsCached[this.runningState.id], e, this.runningState.efficiency);
                  if (
                    (n < 1
                      ? (n <= 0
                          ? ((this.runningState.isPaused = !0), (this.runningState.pauseCd = 10 * e))
                          : ((this.runningState.isPaused = !1),
                            (this.runningState.pauseCd = 10 * e),
                            (this.runningState.efficiency = n * this.runningState.efficiency)),
                        ml.regenerateCache(),
                        ml.resources.reassertBalances())
                      : this.runningState.isPaused && ((this.runningState.isPaused = !1), ml.regenerateCache(), ml.resources.reassertBalances()),
                    this.runningState.isPaused)
                  )
                    return;
                  this.runningState.progress = this.runningState.progress.add(e * this.runningState.efficiency);
                  var i = new E.Z(1),
                    r = !1;
                  this.runningState.progress.greaterThanOrEqualTo(this.listAssertsCached[this.runningState.id].effort) && (r = !0),
                    (i = new E.Z(e * this.runningState.efficiency).div(this.listAssertsCached[this.runningState.id].effort));
                  var a = this.lists.lists.find(function (e) {
                    var n;
                    return e.id === (null === (n = t.runningState) || void 0 === n ? void 0 : n.id);
                  });
                  a &&
                    a.actions.forEach(function (e) {
                      var n = t.battleActions.findIndex(function (t) {
                        return t.id === e.id;
                      });
                      Yc.find(function (t) {
                        return t.id === e.id;
                      }) &&
                        n >= 0 &&
                        (t.battleActions[n].numPerformed = t.battleActions[n].numPerformed.plus(i.mul(e.number)));
                    }),
                    r && (this.runningState.progress = new E.Z(0)),
                    (!this.lastReassert || this.lastReassert < Date.now() - 2e3) &&
                      ((this.lastReassert = Date.now()),
                      ml.regenerateCache(),
                      ml.resources.reassertBalances(),
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
                if (!(null === (t = this.runningState) || void 0 === t ? void 0 : t.id) || this.runningState.isPaused) return [];
                var o = this.listAssertsCached[null === (n = this.runningState) || void 0 === n ? void 0 : n.id],
                  a = [];
                return (
                  o.attributeGain[e] &&
                    a.push({
                      label: "BattleActions",
                      value:
                        null !== (r = null === (i = o.attributeGain[e]) || void 0 === i ? void 0 : i.mul(this.runningState.efficiency)) && void 0 !== r
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
                if (!(null === (t = this.runningState) || void 0 === t ? void 0 : t.id) || this.runningState.isPaused) return [];
                var o = this.listAssertsCached[null === (n = this.runningState) || void 0 === n ? void 0 : n.id],
                  a = [];
                return (
                  o.attributeMultGain[e] &&
                    a.push({
                      label: "BattleActions",
                      value: (null !== (r = null === (i = o.attributeMultGain[e]) || void 0 === i ? void 0 : i.mul(this.runningState.efficiency)) &&
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
                if (!(null === (t = this.runningState) || void 0 === t ? void 0 : t.id) || this.runningState.isPaused) return [];
                var o = this.listAssertsCached[null === (n = this.runningState) || void 0 === n ? void 0 : n.id],
                  a = [];
                return (
                  o.resourceCost[e] &&
                    a.push({
                      label: "Battle Actions",
                      value:
                        null !== (r = null === (i = o.resourceCost[e]) || void 0 === i ? void 0 : i.mul(this.runningState.efficiency)) && void 0 !== r
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
          zc = Vc.getInstance(),
          Jc = [
            {
              id: p.SEVERS,
              name: "Sewers",
              description: "",
              possibleEnemies: ((Ku = {}), (Ku[f.RAT] = 3), (Ku[f.BEAVER] = 0.5), Ku),
              possibleLootMultipliers: ((ju = {}), (ju[i.WOOD] = 10), (ju[i.PAPER] = 0.5), (ju[i.BONE] = 0.25), ju),
              unlockCondition: function (e) {
                return !0;
              },
              levelMult: 1,
            },
            {
              id: p.LAKE,
              name: "Lake",
              description: "",
              possibleEnemies: ((Vu = {}), (Vu[f.MUSKRAT] = 1), (Vu[f.MOSQUITO] = 2), (Vu[f.TORTOISE] = 1), Vu),
              possibleLootMultipliers: ((zu = {}), (zu[i.SAND] = 1), (zu[i.IRON_ORE] = 4), (zu[i.BONE] = 1), zu),
              unlockCondition: function (e) {
                return e.battle.battleLocations.getBattleLocationMaxLevel(p.SEVERS) >= 20;
              },
              levelMult: 2,
            },
            {
              id: p.FIELD,
              name: "Field",
              description: "",
              possibleEnemies: ((Ju = {}), (Ju[f.WASP] = 5), (Ju[f.ARMADILLO] = 2), (Ju[f.RAVEN] = 3), Ju),
              possibleLootMultipliers: ((Qu = {}), (Qu[i.REFINED_WOOD] = 4), (Qu[i.BRICK] = 12), (Qu[i.BONE] = 4), Qu),
              unlockCondition: function (e) {
                return e.battle.battleLocations.getBattleLocationMaxLevel(p.LAKE) >= 20;
              },
              levelMult: 4,
            },
            {
              id: p.CAVE,
              name: "Cave",
              description: "",
              possibleEnemies: (($u = {}), ($u[f.SPIDER] = 2), ($u[f.MAGIC_SPIDER] = 0.5), ($u[f.SMALL_DEMON] = 3), ($u[f.FIRE_DEMON] = 1), $u),
              possibleLootMultipliers: ((es = {}), (es[i.IRON_PLATE] = 4), (es[i.BRICK] = 12), (es[i.BONE] = 16), es),
              unlockCondition: function (e) {
                return e.battle.battleLocations.getBattleLocationMaxLevel(p.FIELD) >= 20;
              },
              levelMult: 8,
            },
            {
              id: p.FOREST,
              name: "Forest",
              description: "",
              possibleEnemies: ((ts = {}), (ts[f.WOLF] = 2), (ts[f.BEAR] = 0.5), (ts[f.MAGIC_FLY] = 3), ts),
              possibleLootMultipliers: ((ns = {}), (ns[i.REFINED_WOOD] = 16), (ns[i.CHARGED_WOOD] = 4), (ns[i.BONE] = 64), ns),
              unlockCondition: function (e) {
                return e.battle.battleLocations.getBattleLocationMaxLevel(p.CAVE) >= 20;
              },
              levelMult: 16,
            },
            {
              id: p.LIBRARY,
              name: "Library",
              description: "",
              possibleEnemies: ((is = {}), (is[f.LIVING_BOOK] = 2), (is[f.GUARDIAN] = 2), (is[f.FLAMED_SCROLL] = 3), is),
              possibleLootMultipliers: ((rs = {}), (rs[i.PAPER] = 128), (rs[i.GLASS] = 12), (rs[i.BONE] = 128), rs),
              unlockCondition: function (e) {
                return e.battle.battleLocations.getBattleLocationMaxLevel(p.FOREST) >= 20;
              },
              levelMult: 32,
            },
          ],
          Qc = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
              function i() {
                this.constructor = t;
              }
              e(t, n), (t.prototype = null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
            };
          })(),
          $c = (function (e) {
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
              Qc(t, e),
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
                  hp: J(e.hp),
                  numAlive: e.amount,
                  attributes: Di(e.attributes, function (t, n) {
                    return ml.battle.battleAttributes.getDisplayRepresentation(n, e.attributes);
                  }),
                  hpProgress: e.hp
                    .mul(100)
                    .div((e.attributes[l.MAX_HP] || new E.Z(1)).mul(e.startAmount))
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
                    e.hp.plus((null === (n = e.attributes[l.HP_REGEN]) || void 0 === n ? void 0 : n.mul(t)) || new E.Z(0))
                  );
                });
              }),
              (t.prototype.getAtkVsDef = function (e, t) {
                return e.mul(e.pow(0.4)).div(E.Z.max(1e-300, (t || new E.Z(0)).pow(0.4)).plus(e.pow(0.4)));
              }),
              (t.prototype.attack = function (e, t) {
                var n = this;
                e.packs.forEach(function (e) {
                  var i, r, o, a, u, s;
                  if (t.packs.length) {
                    var c = (e.attributes[l.PHYSICAL_DAMAGE] || new E.Z("1.e-300")).plus(
                        null === (i = (e.attributes[l.MAX_PHYSICAL_DAMAGE] || new E.Z(0)).sub(e.attributes[l.PHYSICAL_DAMAGE] || new E.Z("1.e-300"))) ||
                          void 0 === i
                          ? void 0
                          : i.mul(Math.random())
                      ),
                      d = Math.random(),
                      p = !1;
                    (null === (r = e.attributes[l.CRIT_CHANCE]) || void 0 === r ? void 0 : r.greaterThan(d)) &&
                      ((p = !0), (c = c.mul(e.attributes[l.CRIT_MULTIPLIER] || 1)));
                    var f = !1;
                    if (null === (o = t.packs[0].attributes[l.DODGE_CHANCE]) || void 0 === o ? void 0 : o.greaterThan(0)) {
                      var g =
                        (null === (a = t.packs[0].attributes[l.DODGE_CHANCE]) || void 0 === a
                          ? void 0
                          : a.div(new E.Z(1).plus(e.attributes[l.PRECISION] || 0)).toNumber()) || 0;
                      Math.random() < g && (f = !0);
                    }
                    if (f) n.logs.unshift({ date: C(new Date()), message: "".concat(e.name, " have missed ").concat(t.packs[0].name), type: "combat-special" });
                    else {
                      var m = n.getAtkVsDef(c, t.packs[0].attributes[l.ARMOR]);
                      t.packs[0].hp = t.packs[0].hp.sub(m);
                      var h = "".concat(e.name, " have attacked ").concat(t.packs[0].name, " for ").concat(J(m), " damage");
                      p && (h = "".concat(e.name, " have landed critical damage on ").concat(t.packs[0].name, " for ").concat(J(m), " damage!")),
                        n.logs.unshift({ date: C(new Date()), message: h, type: p ? "combat-special" : "combat" });
                    }
                    var A = (e.attributes[l.FIRE_DAMAGE] || new E.Z("1.e-300")).plus(
                        null === (u = (e.attributes[l.MAX_FIRE_DAMAGE] || new E.Z(0)).sub(e.attributes[l.FIRE_DAMAGE] || new E.Z(0))) || void 0 === u
                          ? void 0
                          : u.mul(Math.random())
                      ),
                      v = n.getAtkVsDef(A, t.packs[0].attributes[l.FIRE_RESISTANCE]),
                      y = (e.attributes[l.MAGICAL_DAMAGE] || new E.Z("1.e-300")).plus(
                        null === (s = (e.attributes[l.MAX_MAGICAL_DAMAGE] || new E.Z(0)).sub(e.attributes[l.MAGICAL_DAMAGE] || new E.Z(0))) || void 0 === s
                          ? void 0
                          : s.mul(Math.random())
                      ),
                      w = n.getAtkVsDef(y, t.packs[0].attributes[l.MAGIC_RESISTANCE]),
                      b = v.plus(w);
                    b.greaterThan(1e-8) &&
                      ((t.packs[0].hp = t.packs[0].hp.sub(b)),
                      (h = "".concat(e.name, " have attacked ").concat(t.packs[0].name, " for ").concat(J(b), " elemental damage")),
                      n.logs.unshift({ date: C(new Date()), message: h, type: "combat" })),
                      (t.packs[0].amount = Math.ceil(t.packs[0].hp.div(t.packs[0].attributes[l.MAX_HP] || new E.Z(1)).toNumber())),
                      t.packs[0].amount <= 0 &&
                        (n.logs.unshift({ date: C(new Date()), message: "".concat(t.packs[0].name, " just died"), type: "combat" }), t.packs.splice(0, 1));
                  }
                });
              }),
              (t.prototype.process = function (e) {
                if (this.state.isRunning && ((this.state.attackTimer += e), !(this.state.attackTimer < 1)))
                  return (
                    (this.state.attackTimer = 0),
                    this.attack(this.state.opponent, this.state.my),
                    this.attack(this.state.my, this.state.opponent),
                    this.regenHP(this.state.opponent, e),
                    this.regenHP(this.state.my, e),
                    this.state.my.packs.length <= 0
                      ? ((this.state.statusId = 2),
                        (this.state.isRunning = !1),
                        (ml.battle.battleLocations.relevantHP = new E.Z(0.1)),
                        void this.logs.unshift({ date: C(new Date()), message: "You lost", type: "combat-result" }))
                      : this.state.opponent.packs.length <= 0
                      ? ((this.state.statusId = 1),
                        (this.state.isRunning = !1),
                        void this.logs.unshift({ date: C(new Date()), message: "You won", type: "combat-result" }))
                      : void (ml.battle.battleLocations.relevantHP = this.state.my.packs[0].hp)
                  );
              }),
              t
            );
          })(s),
          el = $c.getInstance(),
          tl = [
            {
              id: f.RAT,
              name: "Rat",
              description: "",
              battleAttributes:
                ((os = {}),
                (os[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul(5);
                }),
                (os[l.PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul(1);
                }),
                (os[l.MAX_PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul(2);
                }),
                (os[l.HP_REGEN] = function (e) {
                  return w(1.4, e).mul(0.1);
                }),
                os),
              packSize: 5,
            },
            {
              id: f.BEAVER,
              name: "Beaver",
              description: "",
              battleAttributes:
                ((as = {}),
                (as[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul(12);
                }),
                (as[l.PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul(1);
                }),
                (as[l.MAX_PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul(4);
                }),
                (as[l.HP_REGEN] = function (e) {
                  return w(1.4, e).mul(0.1);
                }),
                as),
              packSize: 2,
            },
            {
              id: f.TORTOISE,
              name: "Tortoise",
              description: "",
              battleAttributes:
                ((us = {}),
                (us[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul(825);
                }),
                (us[l.PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul(33);
                }),
                (us[l.MAX_PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul(19);
                }),
                (us[l.HP_REGEN] = function (e) {
                  return w(1.4, e).mul(10);
                }),
                (us[l.ARMOR] = function (e) {
                  return w(1.4, e).mul(50);
                }),
                us),
              packSize: 2,
            },
            {
              id: f.MOSQUITO,
              name: "Mosquito",
              description: "",
              battleAttributes:
                ((ss = {}),
                (ss[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul(360);
                }),
                (ss[l.PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul(42);
                }),
                (ss[l.MAX_PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul(160);
                }),
                ss),
              packSize: 2,
            },
            {
              id: f.MUSKRAT,
              name: "Muskrat",
              description: "",
              battleAttributes:
                ((cs = {}),
                (cs[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul(583);
                }),
                (cs[l.PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul(39);
                }),
                (cs[l.MAX_PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul(57);
                }),
                (cs[l.HP_REGEN] = function (e) {
                  return w(1.4, e).mul(3);
                }),
                (cs[l.ARMOR] = function (e) {
                  return w(1.4, e).mul(18);
                }),
                cs),
              packSize: 2,
            },
            {
              id: f.ARMADILLO,
              name: "Armadillo",
              description: "",
              battleAttributes:
                ((ls = {}),
                (ls[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul(16200);
                }),
                (ls[l.PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul(1082);
                }),
                (ls[l.MAX_PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul(1379);
                }),
                (ls[l.HP_REGEN] = function (e) {
                  return w(1.4, e).mul(100);
                }),
                (ls[l.ARMOR] = function (e) {
                  return w(1.4, e).mul(1e4);
                }),
                ls),
              packSize: 2,
            },
            {
              id: f.RAVEN,
              name: "Raven",
              description: "",
              battleAttributes:
                ((ds = {}),
                (ds[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul(6400);
                }),
                (ds[l.PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul(3582);
                }),
                (ds[l.MAX_PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul(6479);
                }),
                (ds[l.HP_REGEN] = function (e) {
                  return w(1.4, e).mul(40);
                }),
                (ds[l.ARMOR] = function (e) {
                  return w(1.4, e).mul(1200);
                }),
                (ds[l.CRIT_CHANCE] = function (e) {
                  return new E.Z(0.25);
                }),
                (ds[l.CRIT_MULTIPLIER] = function (e) {
                  return new E.Z(4);
                }),
                ds),
              packSize: 2,
            },
            {
              id: f.WASP,
              name: "Wasp",
              description: "",
              battleAttributes:
                ((ps = {}),
                (ps[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul(4200);
                }),
                (ps[l.PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul(1882);
                }),
                (ps[l.MAX_PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul(16024);
                }),
                (ps[l.HP_REGEN] = function (e) {
                  return w(1.4, e).mul(40);
                }),
                (ps[l.ARMOR] = function (e) {
                  return w(1.4, e).mul(1200);
                }),
                (ps[l.CRIT_CHANCE] = function (e) {
                  return new E.Z(0.05);
                }),
                (ps[l.CRIT_MULTIPLIER] = function (e) {
                  return new E.Z(2);
                }),
                (ps[l.DODGE_CHANCE] = function (e) {
                  return new E.Z(0.3);
                }),
                ps),
              packSize: 2,
            },
            {
              id: f.SMALL_DEMON,
              name: "Small Demon",
              description: "",
              battleAttributes:
                ((fs = {}),
                (fs[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul("8.e+5");
                }),
                (fs[l.PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul("1.1e+5");
                }),
                (fs[l.MAX_PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul("1.7e+5");
                }),
                (fs[l.HP_REGEN] = function (e) {
                  return w(1.4, e).mul("1.e+3");
                }),
                (fs[l.ARMOR] = function (e) {
                  return w(1.4, e).mul("1.e+5");
                }),
                (fs[l.FIRE_RESISTANCE] = function (e) {
                  return w(1.4, e).mul("1.e+4");
                }),
                (fs[l.MAGIC_RESISTANCE] = function (e) {
                  return w(1.4, e).mul("1.e+4");
                }),
                fs),
              packSize: 3,
            },
            {
              id: f.FIRE_DEMON,
              name: "Fire Demon",
              description: "",
              battleAttributes:
                ((gs = {}),
                (gs[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul("2.e+5");
                }),
                (gs[l.FIRE_DAMAGE] = function (e) {
                  return w(1.4, e).mul("3.1e+5");
                }),
                (gs[l.MAX_FIRE_DAMAGE] = function (e) {
                  return w(1.4, e).mul("5.7e+5");
                }),
                (gs[l.HP_REGEN] = function (e) {
                  return w(1.4, e).mul("1.e+3");
                }),
                (gs[l.ARMOR] = function (e) {
                  return w(1.4, e).mul("1.e+4");
                }),
                (gs[l.FIRE_RESISTANCE] = function (e) {
                  return w(1.4, e).mul("1.e+6");
                }),
                (gs[l.MAGIC_RESISTANCE] = function (e) {
                  return w(1.4, e).mul("3.e+4");
                }),
                gs),
              packSize: 3,
            },
            {
              id: f.SPIDER,
              name: "Spider",
              description: "",
              battleAttributes:
                ((ms = {}),
                (ms[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul("1.e+5");
                }),
                (ms[l.PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul("2.4e+4");
                }),
                (ms[l.MAX_PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul("4.8e+4");
                }),
                (ms[l.HP_REGEN] = function (e) {
                  return w(1.4, e).mul("1.e+3");
                }),
                (ms[l.ARMOR] = function (e) {
                  return w(1.4, e).mul("1.e+5");
                }),
                (ms[l.CRIT_CHANCE] = function (e) {
                  return new E.Z(0.5);
                }),
                (ms[l.CRIT_MULTIPLIER] = function (e) {
                  return new E.Z(4);
                }),
                ms),
              packSize: 3,
            },
            {
              id: f.MAGIC_SPIDER,
              name: "Magic Spider",
              description: "",
              battleAttributes:
                ((hs = {}),
                (hs[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul("1.6e+5");
                }),
                (hs[l.MAGICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul("2.e+1");
                }),
                (hs[l.MAX_MAGICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul("1.7e+5");
                }),
                (hs[l.HP_REGEN] = function (e) {
                  return w(1.4, e).mul("1.e+3");
                }),
                (hs[l.ARMOR] = function (e) {
                  return w(1.4, e).mul("1.e+4");
                }),
                (hs[l.FIRE_RESISTANCE] = function (e) {
                  return w(1.4, e).mul("5.e+4");
                }),
                (hs[l.MAGIC_RESISTANCE] = function (e) {
                  return w(1.4, e).mul("9.e+5");
                }),
                hs),
              packSize: 3,
            },
            {
              id: f.WOLF,
              name: "Wolf",
              description: "",
              battleAttributes:
                ((As = {}),
                (As[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul("1.e+7");
                }),
                (As[l.PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul("2.4e+6");
                }),
                (As[l.MAX_PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul("6.8e+6");
                }),
                (As[l.HP_REGEN] = function (e) {
                  return w(1.4, e).mul("2.e+3");
                }),
                (As[l.ARMOR] = function (e) {
                  return w(1.4, e).mul("2.e+5");
                }),
                (As[l.CRIT_CHANCE] = function (e) {
                  return new E.Z(0.5);
                }),
                (As[l.CRIT_MULTIPLIER] = function (e) {
                  return new E.Z(4);
                }),
                (As[l.DODGE_CHANCE] = function (e) {
                  return new E.Z(0.5);
                }),
                As),
              packSize: 6,
            },
            {
              id: f.BEAR,
              name: "Bear",
              description: "",
              battleAttributes:
                ((Es = {}),
                (Es[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul("2.e+7");
                }),
                (Es[l.PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul("1.4e+6");
                }),
                (Es[l.MAX_PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul("3.2e+6");
                }),
                (Es[l.HP_REGEN] = function (e) {
                  return w(1.4, e).mul("2.e+5");
                }),
                (Es[l.ARMOR] = function (e) {
                  return w(1.4, e).mul("2.e+6");
                }),
                Es),
              packSize: 3,
            },
            {
              id: f.MAGIC_FLY,
              name: "Magic Fly",
              description: "",
              battleAttributes:
                ((vs = {}),
                (vs[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul("4.6e+6");
                }),
                (vs[l.MAGICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul("4.e+1");
                }),
                (vs[l.MAX_MAGICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul("9.2e+6");
                }),
                (vs[l.HP_REGEN] = function (e) {
                  return w(1.4, e).mul("2.e+4");
                }),
                (vs[l.ARMOR] = function (e) {
                  return w(1.4, e).mul("2.e+5");
                }),
                (vs[l.FIRE_RESISTANCE] = function (e) {
                  return w(1.4, e).mul("1.e+6");
                }),
                (vs[l.MAGIC_RESISTANCE] = function (e) {
                  return w(1.4, e).mul("8.e+6");
                }),
                vs),
              packSize: 3,
            },
            {
              id: f.LIVING_BOOK,
              name: "Living Book",
              description: "",
              battleAttributes:
                ((ys = {}),
                (ys[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul("8.e+8");
                }),
                (ys[l.PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul("2.4e+8");
                }),
                (ys[l.MAX_PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul("6.8e+8");
                }),
                (ys[l.HP_REGEN] = function (e) {
                  return w(1.4, e).mul("2.e+5");
                }),
                (ys[l.ARMOR] = function (e) {
                  return w(1.4, e).mul("2.e+6");
                }),
                (ys[l.CRIT_CHANCE] = function (e) {
                  return new E.Z(0.5);
                }),
                (ys[l.CRIT_MULTIPLIER] = function (e) {
                  return new E.Z(8);
                }),
                (ys[l.DODGE_CHANCE] = function (e) {
                  return new E.Z(0.5);
                }),
                ys),
              packSize: 6,
            },
            {
              id: f.GUARDIAN,
              name: "Guardian",
              description: "",
              battleAttributes:
                ((ws = {}),
                (ws[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul("2.e+9");
                }),
                (ws[l.PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul("1.4e+8");
                }),
                (ws[l.MAX_PHYSICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul("3.2e+8");
                }),
                (ws[l.MAGICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul("1.4e+8");
                }),
                (ws[l.MAX_MAGICAL_DAMAGE] = function (e) {
                  return w(1.4, e).mul("3.2e+8");
                }),
                (ws[l.HP_REGEN] = function (e) {
                  return w(1.4, e).mul("2.e+7");
                }),
                (ws[l.ARMOR] = function (e) {
                  return w(1.4, e).mul("2.e+8");
                }),
                (ws[l.FIRE_RESISTANCE] = function (e) {
                  return w(1.4, e).mul("3.e+8");
                }),
                (ws[l.MAGIC_RESISTANCE] = function (e) {
                  return w(1.4, e).mul("9.e+7");
                }),
                ws),
              packSize: 3,
            },
            {
              id: f.FLAMED_SCROLL,
              name: "Flamed Scroll",
              description: "",
              battleAttributes:
                ((bs = {}),
                (bs[l.MAX_HP] = function (e) {
                  return w(1.4, e).mul("4.6e+8");
                }),
                (bs[l.FIRE_DAMAGE] = function (e) {
                  return w(1.4, e).mul("4.e+8");
                }),
                (bs[l.MAX_FIRE_DAMAGE] = function (e) {
                  return w(1.4, e).mul("9.2e+8");
                }),
                (bs[l.HP_REGEN] = function (e) {
                  return w(1.4, e).mul("2.e+4");
                }),
                (bs[l.ARMOR] = function (e) {
                  return w(1.4, e).mul("2.e+7");
                }),
                (bs[l.FIRE_RESISTANCE] = function (e) {
                  return w(1.4, e).mul("8.e+8");
                }),
                (bs[l.MAGIC_RESISTANCE] = function (e) {
                  return w(1.4, e).mul("1.e+8");
                }),
                bs),
              packSize: 3,
            },
          ],
          nl = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
              function i() {
                this.constructor = t;
              }
              e(t, n), (t.prototype = null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
            };
          })(),
          il = function () {
            return (
              (il =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                  return e;
                }),
              il.apply(this, arguments)
            );
          },
          rl = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.state = []),
                (t.selectedLocation = null),
                (t.autoProgress = !1),
                (t.battleFights = el),
                (t.relevantHP = new E.Z(1)),
                t.workDispatcher.on("[battle-locations] set level", function (e) {
                  console.log("do set level", e), t.setLocationLevel(e.id, e.level);
                }),
                t.workDispatcher.on("[battle-locations] set autoprogress", function (e) {
                  console.log("do set autoprogress", e), (t.autoProgress = e);
                }),
                t.workDispatcher.on("[battle-locations] enter location", function (e) {
                  console.log("do enter", e), (t.selectedLocation = e.id), e.id ? t.initializeFight() : t.battleFights.stopFight();
                }),
                t
              );
            }
            return (
              nl(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                var t, n;
                (this.state =
                  (null === (t = null == e ? void 0 : e.battleLocations) || void 0 === t
                    ? void 0
                    : t.map(function (e) {
                        return il({}, e);
                      })) || []),
                  (this.selectedLocation = null == e ? void 0 : e.selectedLocation),
                  (this.relevantHP = new E.Z((null == e ? void 0 : e.relevantHP) || "0.1")),
                  (this.autoProgress = null !== (n = null == e ? void 0 : e.autoProgress) && void 0 !== n && n);
              }),
              (t.prototype.exportData = function () {
                var e;
                return {
                  battleLocations: this.state.map(function (e) {
                    return il({}, e);
                  }),
                  selectedLocation: this.selectedLocation,
                  relevantHP: this.relevantHP.toPrecision(18),
                  autoProgress: null !== (e = this.autoProgress) && void 0 !== e && e,
                };
              }),
              (t.prototype.dataToUI = function () {
                var e = this,
                  t = Jc.map(function (t) {
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
                  relevantHP: "".concat(J(this.relevantHP), " / ").concat(J(ml.battle.battleAttributes.getBattleAttribute(l.MAX_HP))),
                  autoProgress: this.autoProgress,
                };
              }),
              (t.prototype.getLootsNumeric = function (e, t) {
                var n, i;
                if (!e.possibleLootMultipliers) return [];
                var r = [];
                for (var o in e.possibleLootMultipliers)
                  if (null === (i = null === (n = ml.resources.dbCache) || void 0 === n ? void 0 : n[o]) || void 0 === i ? void 0 : i.unlockCondition(ml)) {
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
                    n.push({ id: e.id, name: ue(e.id), amount: J(e.amount), amountValue: e.amount.toPrecision(18) });
                  }),
                  n
                );
              }),
              (t.prototype.processToUI = function (e) {
                var t = this.state.find(function (t) {
                  return t.id === e.id;
                });
                t || ((t = { id: e.id, level: 0, maxLevel: 0, wins: 0, losses: 0, progress: 0 }), this.state.push(t));
                var n = this.getLoots(e, t),
                  i = e.unlockCondition(ml);
                return (
                  i && t.wins <= 0 && ml.newNotifications.registerNotification("battle:locations:location:".concat(e.id)),
                  {
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    isUnlocked: i,
                    level: t.level,
                    maxLevel: t.maxLevel,
                    wins: ee(t.wins, 2),
                    losses: ee(t.losses, 2),
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
              (t.prototype.setLocationLevel = function (e, t) {
                var n = this.state.findIndex(function (t) {
                  return t.id === e;
                });
                if (n < 0) throw new Error("Invalid location id passed: ".concat(p));
                this.state[n].level = Math.max(0, Math.min(t, this.state[n].maxLevel));
              }),
              (t.prototype.initializeMe = function () {
                var e = {
                  id: "me",
                  name: "You",
                  amount: 1,
                  startAmount: 1,
                  attributes: ml.battle.battleAttributes.getBattleAttributes(),
                  hp: this.relevantHP,
                  rarityLevel: 0,
                };
                return (
                  console.log(
                    "init with: ",
                    Di(ml.battle.battleAttributes.getBattleAttributes(), function (e) {
                      return e.toNumber();
                    })
                  ),
                  { packs: [e], isAlive: !0 }
                );
              }),
              (t.prototype.initializeEnemy = function (e) {
                var t = this;
                void 0 === e && (e = 0);
                var n = Jc.find(function (e) {
                  return e.id === t.selectedLocation;
                });
                if (!n) throw new Error("Zone ".concat(n, " not found"));
                var i = this.state.find(function (e) {
                  return e.id === t.selectedLocation;
                });
                i || ((i = { id: n.id, level: 0, maxLevel: 0, wins: 0, losses: 0, progress: 0 }), this.state.push(i));
                for (
                  var r = [],
                    o = 1 + Math.floor(3 * Math.random()),
                    a = function (t) {
                      var o = Object.entries(n.possibleEnemies),
                        a = o[Math.floor(Math.random() * o.length)],
                        u = tl.find(function (e) {
                          return a[0] === e.id;
                        });
                      if (!u) return "continue";
                      var s = 1 + Math.floor(Math.random() * a[1]),
                        c = 0,
                        d = null == i ? void 0 : i.level;
                      0 === t && e > 0 && ((c = e), (d = (((null == i ? void 0 : i.level) || 0) + 3 * c) * (1 + 0.05 * c)), (s = 1));
                      var p = Di(u.battleAttributes, function (e) {
                        return e(d);
                      });
                      console.log(
                        "creating: ",
                        d,
                        u.name,
                        i.level,
                        u,
                        Di(p, function (e, t) {
                          return e.toNumber();
                        })
                      ),
                        r.push({ id: u.id, name: u.name, startAmount: s, amount: s, attributes: p, hp: p[l.MAX_HP].mul(s), rarityLevel: c });
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
                  t < 0.02 ? (e = 2) : t < 0.15 && (e = 1), this.battleFights.initializeFight(this.initializeMe(), this.initializeEnemy(e), e);
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
                      var i = Jc.find(function (e) {
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
                        ml.resources.addResource(r[o].id, r[o].amount),
                          this.battleFights.logs.unshift({
                            date: C(new Date()),
                            message: "You got ".concat(J(r[o].amount), " of ").concat(ue(r[o].id)),
                            type: "combat-result",
                          });
                      }
                      if (Math.random() < 0.1 * (1 + 5 * this.battleFights.state.complexityLevel)) {
                        var a = ml.battle.battleItems.giveRandomItem(this.state[n].level * i.levelMult, this.battleFights.state.complexityLevel);
                        a && this.battleFights.logs.unshift({ date: C(new Date()), message: "You found ".concat(a.name), type: "combat-result" });
                      }
                      this.state[n].level === this.state[n].maxLevel &&
                        (this.state[n].progress++, this.state[n].progress >= 20 && (this.state[n].maxLevel++, (this.state[n].progress = 0))),
                        this.autoProgress && (this.state[n].level = this.state[n].maxLevel),
                        this.initializeFight();
                    }
                    2 === this.battleFights.state.statusId && (this.state[n].losses++, this.battleFights.stopFight());
                  }
                  var u = ml.battle.battleAttributes.getBattleAttribute(l.MAX_HP);
                  this.relevantHP.lessThan(u) ? (this.relevantHP = E.Z.min(u, this.relevantHP.plus(u.mul(0.01 * e)))) : (this.relevantHP = u),
                    this.selectedLocation && this.relevantHP.greaterThanOrEqualTo(u.mul(0.99)) && this.initializeFight();
                }
                this.battleFights.process(e);
              }),
              t
            );
          })(s),
          ol = rl.getInstance(),
          al = [
            {
              baseId: h.CAP,
              name: "Cap",
              slot: g.HEAD,
              basicBattleAttributeGain:
                ((Is = {}),
                (Is[l.ARMOR] = function (e) {
                  return w(1.03, e)
                    .mul(2 * (e + 1))
                    .round();
                }),
                (Is[l.DODGE_CHANCE] = function (e) {
                  return new E.Z(0.05);
                }),
                Is),
              basicBattleAttributeMultiplier: {},
              secondaryAttributeGain: {},
              secondaryAttributeMultiplier:
                ((Cs = {}),
                (Cs[c.AGILITY] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                Cs),
              secondaryBattleAttributeGain:
                ((Ns = {}),
                (Ns[l.MAX_HP] = function (e) {
                  return w(1.02, e)
                    .mul(2 * (e + 1))
                    .round();
                }),
                (Ns[l.HP_REGEN] = function (e) {
                  return w(1.02, e).mul(0.02 * (e + 1));
                }),
                (Ns[l.CRIT_CHANCE] = function (e) {
                  return new E.Z(0.02);
                }),
                Ns),
              secondaryBattleAttributeMultiplier:
                ((Rs = {}),
                (Rs[l.CRIT_MULTIPLIER] = function (e) {
                  return new E.Z(1.1 + 0.01 * e);
                }),
                Rs),
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
                ((Ls = {}),
                (Ls[l.ARMOR] = function (e) {
                  return w(1.03, e)
                    .mul(5 * (e + 1))
                    .round();
                }),
                Ls),
              basicBattleAttributeMultiplier: {},
              secondaryAttributeGain: {},
              secondaryAttributeMultiplier:
                ((Os = {}),
                (Os[c.VITALITY] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                Os),
              secondaryBattleAttributeGain:
                ((Ts = {}),
                (Ts[l.MAX_HP] = function (e) {
                  return w(1.02, e)
                    .mul(5 * (e + 1))
                    .round();
                }),
                (Ts[l.HP_REGEN] = function (e) {
                  return w(1.02, e).mul(0.04 * (e + 1));
                }),
                (Ts[l.FIRE_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(5 * (e + 1))
                    .round();
                }),
                (Ts[l.MAGIC_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(5 * (e + 1))
                    .round();
                }),
                Ts),
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
                ((Ss = {}),
                (Ss[l.ARMOR] = function (e) {
                  return w(1.03, e)
                    .mul(1 * (e + 1))
                    .round();
                }),
                (Ss[l.FIRE_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(25 * (e + 1))
                    .round();
                }),
                Ss),
              basicBattleAttributeMultiplier: {},
              secondaryAttributeGain: {},
              secondaryAttributeMultiplier:
                ((Ms = {}),
                (Ms[c.RUNE_READING] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                (Ms[c.MAGIC_KNOWLEDGE] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                Ms),
              secondaryBattleAttributeGain:
                ((Zs = {}),
                (Zs[l.MAX_HP] = function (e) {
                  return w(1.02, e)
                    .mul(2 * (e + 1))
                    .round();
                }),
                (Zs[l.HP_REGEN] = function (e) {
                  return w(1.02, e).mul(0.02 * (e + 1));
                }),
                (Zs[l.MAGIC_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(25 * (e + 1))
                    .round();
                }),
                Zs),
              secondaryBattleAttributeMultiplier:
                ((Ps = {}),
                (Ps[l.MAGICAL_DAMAGE] = function (e) {
                  return new E.Z(1.2 + 0.012 * Math.pow(e, 0.5));
                }),
                (Ps[l.FIRE_DAMAGE] = function (e) {
                  return new E.Z(1.2 + 0.012 * Math.pow(e, 0.5));
                }),
                Ps),
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
                ((_s = {}),
                (_s[l.ARMOR] = function (e) {
                  return w(1.03, e)
                    .mul(8 * (e + 1))
                    .round();
                }),
                (_s[l.DODGE_CHANCE] = function (e) {
                  return new E.Z(0.15);
                }),
                _s),
              basicBattleAttributeMultiplier: {},
              secondaryAttributeGain: {},
              secondaryAttributeMultiplier:
                ((Gs = {}),
                (Gs[c.AGILITY] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                Gs),
              secondaryBattleAttributeGain:
                ((Bs = {}),
                (Bs[l.MAX_HP] = function (e) {
                  return w(1.02, e)
                    .mul(2 * (e + 1))
                    .round();
                }),
                (Bs[l.HP_REGEN] = function (e) {
                  return w(1.02, e).mul(0.05 * (e + 1));
                }),
                (Bs[l.CRIT_CHANCE] = function (e) {
                  return new E.Z(0.03);
                }),
                Bs),
              secondaryBattleAttributeMultiplier:
                ((Ds = {}),
                (Ds[l.CRIT_MULTIPLIER] = function (e) {
                  return new E.Z(1.1 + 0.01 * e);
                }),
                Ds),
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
                ((Us = {}),
                (Us[l.ARMOR] = function (e) {
                  return w(1.03, e)
                    .mul(35 * (e + 1))
                    .round();
                }),
                Us),
              basicBattleAttributeMultiplier: {},
              secondaryAttributeGain: {},
              secondaryAttributeMultiplier: {},
              secondaryBattleAttributeGain:
                ((ks = {}),
                (ks[l.MAX_HP] = function (e) {
                  return w(1.02, e)
                    .mul(25 * (e + 1))
                    .round();
                }),
                (ks[l.HP_REGEN] = function (e) {
                  return w(1.02, e).mul(0.08 * (e + 1));
                }),
                (ks[l.FIRE_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(20 * (e + 1))
                    .round();
                }),
                (ks[l.MAGIC_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(20 * (e + 1))
                    .round();
                }),
                ks),
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
                ((xs = {}),
                (xs[l.ARMOR] = function (e) {
                  return w(1.03, e)
                    .mul(2 * (e + 1))
                    .round();
                }),
                xs),
              basicBattleAttributeMultiplier:
                ((Hs = {}),
                (Hs[l.MAGICAL_DAMAGE] = function (e) {
                  return new E.Z(1.5);
                }),
                (Hs[l.FIRE_DAMAGE] = function (e) {
                  return new E.Z(1.5);
                }),
                Hs),
              secondaryAttributeGain: {},
              secondaryAttributeMultiplier:
                ((Ws = {}),
                (Ws[c.RUNE_READING] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                (Ws[c.WILLPOWER] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                (Ws[c.MAGIC_KNOWLEDGE] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                Ws),
              secondaryBattleAttributeGain:
                ((Xs = {}),
                (Xs[l.MAX_HP] = function (e) {
                  return w(1.02, e)
                    .mul(2 * (e + 1))
                    .round();
                }),
                (Xs[l.HP_REGEN] = function (e) {
                  return w(1.02, e).mul(0.02 * (e + 1));
                }),
                (Xs[l.FIRE_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(45 * (e + 1))
                    .round();
                }),
                (Xs[l.MAGIC_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(45 * (e + 1))
                    .round();
                }),
                Xs),
              secondaryBattleAttributeMultiplier:
                ((qs = {}),
                (qs[l.MAGICAL_DAMAGE] = function (e) {
                  return new E.Z(1.5 + 0.02 * Math.pow(e, 0.5));
                }),
                (qs[l.FIRE_DAMAGE] = function (e) {
                  return new E.Z(1.5 + 0.02 * Math.pow(e, 0.5));
                }),
                qs),
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
                ((Fs = {}),
                (Fs[l.ARMOR] = function (e) {
                  return w(1.03, e)
                    .mul(2 * (e + 1))
                    .round();
                }),
                (Fs[l.DODGE_CHANCE] = function (e) {
                  return new E.Z(0.1);
                }),
                Fs),
              basicBattleAttributeMultiplier: {},
              secondaryAttributeGain: {},
              secondaryAttributeMultiplier:
                ((Ys = {}),
                (Ys[c.AGILITY] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                Ys),
              secondaryBattleAttributeGain:
                ((Ks = {}),
                (Ks[l.MAX_HP] = function (e) {
                  return w(1.02, e)
                    .mul(2 * (e + 1))
                    .round();
                }),
                (Ks[l.HP_REGEN] = function (e) {
                  return w(1.02, e).mul(0.05 * (e + 1));
                }),
                (Ks[l.CRIT_CHANCE] = function (e) {
                  return new E.Z(0.02);
                }),
                Ks),
              secondaryBattleAttributeMultiplier:
                ((js = {}),
                (js[l.CRIT_MULTIPLIER] = function (e) {
                  return new E.Z(1.1 + 0.01 * e);
                }),
                js),
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
                ((Vs = {}),
                (Vs[l.ARMOR] = function (e) {
                  return w(1.03, e)
                    .mul(4 * (e + 1))
                    .round();
                }),
                Vs),
              basicBattleAttributeMultiplier: {},
              secondaryAttributeGain: {},
              secondaryAttributeMultiplier:
                ((zs = {}),
                (zs[c.VITALITY] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                zs),
              secondaryBattleAttributeGain:
                ((Js = {}),
                (Js[l.MAX_HP] = function (e) {
                  return w(1.02, e)
                    .mul(12 * (e + 1))
                    .round();
                }),
                (Js[l.HP_REGEN] = function (e) {
                  return w(1.02, e).mul(0.04 * (e + 1));
                }),
                (Js[l.FIRE_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(15 * (e + 1))
                    .round();
                }),
                (Js[l.MAGIC_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(15 * (e + 1))
                    .round();
                }),
                Js),
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
                ((Qs = {}),
                (Qs[l.ARMOR] = function (e) {
                  return w(1.03, e)
                    .mul(1 * (e + 1))
                    .round();
                }),
                (Qs[l.MAGIC_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(10 * (e + 1))
                    .round();
                }),
                Qs),
              basicBattleAttributeMultiplier: {},
              secondaryAttributeGain: {},
              secondaryAttributeMultiplier:
                (($s = {}),
                ($s[c.RUNE_READING] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                ($s[c.WILLPOWER] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                ($s[c.MAGIC_KNOWLEDGE] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                $s),
              secondaryBattleAttributeGain:
                ((ec = {}),
                (ec[l.MAX_HP] = function (e) {
                  return w(1.02, e)
                    .mul(2 * (e + 1))
                    .round();
                }),
                (ec[l.HP_REGEN] = function (e) {
                  return w(1.02, e).mul(0.01 * (e + 1));
                }),
                (ec[l.FIRE_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(25 * (e + 1))
                    .round();
                }),
                ec),
              secondaryBattleAttributeMultiplier:
                ((tc = {}),
                (tc[l.MAGICAL_DAMAGE] = function (e) {
                  return new E.Z(1.1 + 0.01 * Math.pow(e, 0.5));
                }),
                (tc[l.FIRE_DAMAGE] = function (e) {
                  return new E.Z(1.1 + 0.01 * Math.pow(e, 0.5));
                }),
                tc),
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
                ((nc = {}),
                (nc[l.PHYSICAL_DAMAGE] = function (e) {
                  return new E.Z(1 + 0.02 * e);
                }),
                nc),
              secondaryAttributeGain: {},
              secondaryAttributeMultiplier:
                ((ic = {}),
                (ic[c.STRENGTH] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                ic),
              secondaryBattleAttributeGain: {},
              secondaryBattleAttributeMultiplier:
                ((rc = {}),
                (rc[l.MAX_PHYSICAL_DAMAGE] = function (e) {
                  return new E.Z(1 + 0.01 * e);
                }),
                (rc[l.CRIT_MULTIPLIER] = function (e) {
                  return new E.Z(1.1 + 0.01 * e);
                }),
                rc),
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
                ((oc = {}),
                (oc[l.ARMOR] = function (e) {
                  return w(1.03, e)
                    .mul(2 * (e + 1))
                    .round();
                }),
                oc),
              basicBattleAttributeMultiplier:
                ((ac = {}),
                (ac[l.MAGICAL_DAMAGE] = function (e) {
                  return new E.Z(1 + 0.02 * e);
                }),
                (ac[l.FIRE_DAMAGE] = function (e) {
                  return new E.Z(1 + 0.02 * e);
                }),
                ac),
              secondaryAttributeGain: {},
              secondaryAttributeMultiplier:
                ((uc = {}),
                (uc[c.RUNE_READING] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                (uc[c.WILLPOWER] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                (uc[c.MAGIC_KNOWLEDGE] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                uc),
              secondaryBattleAttributeGain:
                ((sc = {}),
                (sc[l.MAX_HP] = function (e) {
                  return w(1.02, e)
                    .mul(2 * (e + 1))
                    .round();
                }),
                (sc[l.FIRE_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(25 * (e + 1))
                    .round();
                }),
                (sc[l.MAGIC_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(25 * (e + 1))
                    .round();
                }),
                sc),
              secondaryBattleAttributeMultiplier:
                ((cc = {}),
                (cc[l.PHYSICAL_DAMAGE] = function (e) {
                  return new E.Z(1 + 0.01 * Math.pow(e, 0.5));
                }),
                cc),
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
                ((lc = {}),
                (lc[l.ARMOR] = function (e) {
                  return new E.Z(1.2 + 0.02 * Math.pow(e, 0.5));
                }),
                lc),
              secondaryAttributeGain: {},
              secondaryAttributeMultiplier:
                ((dc = {}),
                (dc[c.STRENGTH] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                (dc[c.WILLPOWER] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                (dc[c.VITALITY] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                dc),
              secondaryBattleAttributeGain:
                ((pc = {}),
                (pc[l.MAX_HP] = function (e) {
                  return w(1.02, e)
                    .mul(12 * (e + 1))
                    .round();
                }),
                (pc[l.FIRE_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(15 * (e + 1))
                    .round();
                }),
                (pc[l.MAGIC_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(15 * (e + 1))
                    .round();
                }),
                (pc[l.ARMOR] = function (e) {
                  return w(1.03, e)
                    .mul(24 * (e + 1))
                    .round();
                }),
                pc),
              secondaryBattleAttributeMultiplier:
                ((fc = {}),
                (fc[l.PHYSICAL_DAMAGE] = function (e) {
                  return new E.Z(1 + 0.01 * Math.pow(e, 0.5));
                }),
                fc),
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
                ((gc = {}),
                (gc[l.CRIT_CHANCE] = function (e) {
                  return new E.Z(0.15);
                }),
                gc),
              basicBattleAttributeMultiplier:
                ((mc = {}),
                (mc[l.CRIT_MULTIPLIER] = function (e) {
                  return new E.Z(1.2 + 0.02 * Math.pow(e, 0.5));
                }),
                mc),
              secondaryAttributeGain: {},
              secondaryAttributeMultiplier:
                ((hc = {}),
                (hc[c.STRENGTH] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                (hc[c.AGILITY] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                hc),
              secondaryBattleAttributeGain:
                ((Ac = {}),
                (Ac[l.MAX_HP] = function (e) {
                  return w(1.02, e)
                    .mul(12 * (e + 1))
                    .round();
                }),
                (Ac[l.FIRE_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(5 * (e + 1))
                    .round();
                }),
                (Ac[l.MAGIC_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(5 * (e + 1))
                    .round();
                }),
                Ac),
              secondaryBattleAttributeMultiplier:
                ((Ec = {}),
                (Ec[l.PHYSICAL_DAMAGE] = function (e) {
                  return new E.Z(1 + 0.01 * Math.pow(e, 0.5));
                }),
                Ec),
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
                ((vc = {}),
                (vc[l.ARMOR] = function (e) {
                  return w(1.03, e)
                    .mul(18 * (e + 1))
                    .round();
                }),
                (vc[l.DODGE_CHANCE] = function (e) {
                  return new E.Z(0.05);
                }),
                vc),
              basicBattleAttributeMultiplier: {},
              secondaryAttributeGain: {},
              secondaryAttributeMultiplier:
                ((yc = {}),
                (yc[c.VITALITY] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                yc),
              secondaryBattleAttributeGain:
                ((wc = {}),
                (wc[l.MAX_HP] = function (e) {
                  return w(1.02, e)
                    .mul(6 * (e + 1))
                    .round();
                }),
                (wc[l.HP_REGEN] = function (e) {
                  return w(1.02, e).mul(0.05 * (e + 1));
                }),
                (wc[l.CRIT_CHANCE] = function (e) {
                  return new E.Z(0.03);
                }),
                (wc[l.MAGIC_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(18 * (e + 1))
                    .round();
                }),
                (wc[l.FIRE_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(18 * (e + 1))
                    .round();
                }),
                wc),
              secondaryBattleAttributeMultiplier:
                ((bc = {}),
                (bc[l.CRIT_MULTIPLIER] = function (e) {
                  return new E.Z(1.1 + 0.01 * e);
                }),
                bc),
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
                ((Ic = {}),
                (Ic[l.ARMOR] = function (e) {
                  return w(1.03, e)
                    .mul(70 * (e + 1))
                    .round();
                }),
                Ic),
              basicBattleAttributeMultiplier: {},
              secondaryAttributeGain: {},
              secondaryAttributeMultiplier: {},
              secondaryBattleAttributeGain:
                ((Cc = {}),
                (Cc[l.MAX_HP] = function (e) {
                  return w(1.02, e)
                    .mul(25 * (e + 1))
                    .round();
                }),
                (Cc[l.HP_REGEN] = function (e) {
                  return w(1.02, e).mul(0.08 * (e + 1));
                }),
                (Cc[l.FIRE_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(20 * (e + 1))
                    .round();
                }),
                (Cc[l.MAGIC_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(20 * (e + 1))
                    .round();
                }),
                Cc),
              secondaryBattleAttributeMultiplier:
                ((Nc = {}),
                (Nc[l.ARMOR] = function (e) {
                  return new E.Z(1.2 + 0.02 * Math.pow(e, 0.5));
                }),
                Nc),
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
                ((Rc = {}),
                (Rc[l.FIRE_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(60 * (e + 1))
                    .round();
                }),
                (Rc[l.MAGIC_RESISTANCE] = function (e) {
                  return w(1.03, e)
                    .mul(60 * (e + 1))
                    .round();
                }),
                Rc),
              basicBattleAttributeMultiplier: {},
              secondaryAttributeGain: {},
              secondaryAttributeMultiplier:
                ((Lc = {}),
                (Lc[c.RUNE_READING] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                (Lc[c.WILLPOWER] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                (Lc[c.MAGIC_KNOWLEDGE] = function (e) {
                  return new E.Z(1 + 0.05 * Math.pow((10 + e) / 10, 0.5));
                }),
                Lc),
              secondaryBattleAttributeGain:
                ((Oc = {}),
                (Oc[l.MAX_HP] = function (e) {
                  return w(1.02, e)
                    .mul(2 * (e + 1))
                    .round();
                }),
                (Oc[l.HP_REGEN] = function (e) {
                  return w(1.02, e).mul(0.02 * (e + 1));
                }),
                (Oc[l.ARMOR] = function (e) {
                  return w(1.03, e)
                    .mul(24 * (e + 1))
                    .round();
                }),
                Oc),
              secondaryBattleAttributeMultiplier:
                ((Tc = {}),
                (Tc[l.MAGICAL_DAMAGE] = function (e) {
                  return new E.Z(1.2 + 0.02 * Math.pow(e, 0.5));
                }),
                (Tc[l.FIRE_DAMAGE] = function (e) {
                  return new E.Z(1.2 + 0.02 * Math.pow(e, 0.5));
                }),
                Tc),
              unlockCondition: function (e) {
                return !0;
              },
              baseScrapGain: { wool: 4 },
              equipmentType: m.MAGIC,
            },
          ],
          ul = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
              function i() {
                this.constructor = t;
              }
              e(t, n), (t.prototype = null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
            };
          })(),
          sl = function () {
            return (
              (sl =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                  return e;
                }),
              sl.apply(this, arguments)
            );
          },
          cl = (function (e) {
            function t() {
              var t,
                n = e.call(this) || this;
              return (
                (n.equipped = (((t = {})[g.HANDS] = void 0), (t[g.BODY] = void 0), (t[g.LEGS] = void 0), (t[g.HEAD] = void 0), (t[g.SHIELD] = void 0), t)),
                (n.inventory = []),
                (n.lootFilter = { minRarity: 0, equipmentType: [m.IRON, m.LEATHER, m.MAGIC], equipmentSlot: [g.HANDS, g.LEGS, g.HANDS, g.BODY, g.SHIELD] }),
                (n.scrap = { wool: new E.Z(0), iron: new E.Z(0), leather: new E.Z(0) }),
                n.workDispatcher.on("[battle-items] equip item", function (e) {
                  console.log("do equip", e), n.equipItem(e.index);
                }),
                n.workDispatcher.on("[battle-items] unequip item", function (e) {
                  console.log("do equip", e), n.unEquipItem(e.slot);
                }),
                n.workDispatcher.on("[battle-items] drop item", function (e) {
                  console.log("do drop", e), n.scrapItem(e.index);
                }),
                n.workDispatcher.on("[battle-items] upgrade item", function (e) {
                  console.log("upgrade", e), n.upgradeItem(e.index);
                }),
                n.workDispatcher.on("[battle-items] set loot rarity", function (e) {
                  console.log("do set rarity", e), (n.lootFilter.minRarity = e.rarity);
                }),
                n.workDispatcher.on("[battle-items] set loot equipment-type", function (e) {
                  console.log("do set equipment types", e), (n.lootFilter.equipmentType = e.types);
                }),
                n.workDispatcher.on("[battle-items] set loot equipment-slot", function (e) {
                  console.log("do set equipment types", e), (n.lootFilter.equipmentSlot = e.slots);
                }),
                n
              );
            }
            return (
              ul(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                (this.equipped = Di(null == e ? void 0 : e.equipped, function (e) {
                  return e
                    ? sl(sl({}, e), {
                        battleAttributeGain: Di(e.battleAttributeGain, function (e) {
                          return new E.Z(e);
                        }),
                        battleAttributeMultiplier: Di(e.battleAttributeMultiplier, function (e) {
                          return new E.Z(e);
                        }),
                        attributeGain: Di(e.attributeGain, function (e) {
                          return new E.Z(e);
                        }),
                        attributeMultiplier: Di(e.attributeMultiplier, function (e) {
                          return new E.Z(e);
                        }),
                      })
                    : void 0;
                })),
                  (this.inventory =
                    (null == e
                      ? void 0
                      : e.inventory.map(function (e) {
                          return sl(sl({}, e), {
                            battleAttributeGain: Di(e.battleAttributeGain, function (e) {
                              return new E.Z(e);
                            }),
                            battleAttributeMultiplier: Di(e.battleAttributeMultiplier, function (e) {
                              return new E.Z(e);
                            }),
                            attributeGain: Di(e.attributeGain, function (e) {
                              return new E.Z(e);
                            }),
                            attributeMultiplier: Di(e.attributeMultiplier, function (e) {
                              return new E.Z(e);
                            }),
                          });
                        })) || []),
                  (this.lootFilter = (null == e ? void 0 : e.lootFilter) || {
                    minRarity: 0,
                    equipmentType: [m.MAGIC, m.LEATHER, m.IRON],
                    equipmentSlot: [g.HANDS, g.LEGS, g.HANDS, g.BODY, g.SHIELD],
                  }),
                  this.lootFilter.equipmentType || (this.lootFilter.equipmentType = [m.MAGIC, m.LEATHER, m.IRON]),
                  this.lootFilter.equipmentSlot || (this.lootFilter.equipmentSlot = [g.HANDS, g.LEGS, g.HANDS, g.BODY, g.SHIELD]),
                  (null == e ? void 0 : e.scrap) &&
                    (this.scrap = { wool: new E.Z(e.scrap.wool), iron: new E.Z(e.scrap.iron), leather: new E.Z(e.scrap.leather) }),
                  console.log("this.lootFlt", this.lootFilter);
              }),
              (t.prototype.exportData = function () {
                return {
                  equipped: Di(this.equipped, function (e) {
                    return e
                      ? sl(sl({}, e), {
                          battleAttributeGain: Di(e.battleAttributeGain, function (e) {
                            return e.toPrecision(18);
                          }),
                          battleAttributeMultiplier: Di(e.battleAttributeMultiplier, function (e) {
                            return e.toPrecision(18);
                          }),
                          attributeGain: Di(e.attributeGain, function (e) {
                            return e.toPrecision(18);
                          }),
                          attributeMultiplier: Di(e.attributeMultiplier, function (e) {
                            return e.toPrecision(18);
                          }),
                        })
                      : void 0;
                  }),
                  inventory: this.inventory.map(function (e) {
                    return sl(sl({}, e), {
                      battleAttributeGain: Di(e.battleAttributeGain, function (e) {
                        return e.toPrecision(18);
                      }),
                      battleAttributeMultiplier: Di(e.battleAttributeMultiplier, function (e) {
                        return e.toPrecision(18);
                      }),
                      attributeGain: Di(e.attributeGain, function (e) {
                        return e.toPrecision(18);
                      }),
                      attributeMultiplier: Di(e.attributeMultiplier, function (e) {
                        return e.toPrecision(18);
                      }),
                    });
                  }),
                  lootFilter: this.lootFilter,
                  scrap: { wool: this.scrap.wool.toPrecision(18), iron: this.scrap.iron.toPrecision(18), leather: this.scrap.leather.toPrecision(18) },
                };
              }),
              (t.prototype.dataToUI = function () {
                var e = this;
                return {
                  inventory: this.inventory.map(function (t) {
                    return e.processToUI(t);
                  }),
                  equipped: Di(this.equipped, function (t) {
                    return t ? e.processToUI(t) : void 0;
                  }),
                  maxInventory: this.getInventoryMax(),
                  usedInventory: this.inventory.length,
                  isUnlocked: ml.city.academyUpgrades.getUpgradeLevel(a.BATTLE_MASTERY) > 0,
                  lootFilter: this.lootFilter,
                  scrap: Di(this.scrap, function (e) {
                    return ee(e, 2);
                  }),
                };
              }),
              (t.prototype.equipItem = function (e) {
                if (e < 0 || e >= this.inventory.length) console.error("Invalid inventory index");
                else {
                  var t = this.inventory[e];
                  if (this.equipped[t.slot]) {
                    if (!(this.inventory.length <= this.getInventoryMax())) return void console.error("Inventory full, cannot unequip current item");
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
                for (var n in t) this.scrap[n] = this.scrap[n].plus(t[n] || new E.Z(0));
              }),
              (t.prototype.upgradeItem = function (e) {
                var t = this.inventory[e],
                  n = ce.calcBatchAll(this.getScrapCostFormula(t), ml, new E.Z(t.improvementStage || 0), this.scrap),
                  i = n.reduce(function (e, t) {
                    return E.Z.min(e, t.max.floor());
                  }, new E.Z("1.e+30000"));
                if ((console.log("[upgrade] mx: ", i.toNumber()), !i.lessThan(1)))
                  return (
                    (this.inventory[e].improvementStage = this.inventory[e].improvementStage + 1),
                    gl.getInstance().resources.subtractResourceBatch(n),
                    ml.resources.reassertBalances(),
                    ml.regenerateCache(),
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
                      return J(e, 4);
                    }),
                  Object.entries(e).map(function (e) {
                    var n = e[0],
                      i = e[1];
                    return { id: n, name: ue(n), amount: t(i), amountValue: i.toPrecision(18) };
                  })
                );
              }),
              (t.prototype.getScrapGain = function (e) {
                var t = e.level * (e.rarity + 1) * (1 + 0.1 * e.improvementStage);
                return Di(e.baseScrapGain, function (e) {
                  return e * t;
                });
              }),
              (t.prototype.getScrapCost = function (e) {
                var t = 5 * e.level * (e.rarity + 1);
                return Di(e.baseScrapGain, function (e) {
                  return e * t;
                });
              }),
              (t.prototype.getScrapCostFormula = function (e) {
                return Di(this.getScrapCost(e), function (e) {
                  return function (t) {
                    return { A: new E.Z(e), B: new E.Z(1.5), type: R.EXPONENTIAL };
                  };
                });
              }),
              (t.prototype.modifyImprovement = function (e, t, n) {
                return [l.DODGE_CHANCE, l.CRIT_CHANCE].includes(t) ? e : e.mul(1 + 0.05 * (n || 0));
              }),
              (t.prototype.applyImprovementsGains = function (e, t) {
                var n = this;
                return Di(e, function (e, i) {
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
                return Di(e, function (e, i) {
                  return n.modifyImprovementMult(e, i, t);
                });
              }),
              (t.prototype.processToUI = function (e) {
                var t = this.recordToUI(this.applyImprovementsGains(e.attributeGain, e.improvementStage)),
                  n = this.recordToUI(this.applyImprovementsMultipliers(e.attributeMultiplier, e.improvementStage), function (e) {
                    return "x".concat(J(e, 4));
                  }),
                  i = this.recordToUI(this.applyImprovementsGains(e.battleAttributeGain, e.improvementStage)),
                  r = this.recordToUI(this.applyImprovementsMultipliers(e.battleAttributeMultiplier, e.improvementStage), function (e) {
                    return "x".concat(J(e, 4));
                  }),
                  o = Object.entries(this.getScrapGain(e)).map(function (e) {
                    var t = e[0],
                      n = e[1];
                    return { id: t, amount: J(n), amountValue: n, name: t };
                  }),
                  a = ce.calcBatchAll(this.getScrapCostFormula(e), ml, new E.Z(e.improvementStage || 0), this.scrap);
                return {
                  id: e.id,
                  type: e.baseId,
                  name: e.name,
                  slot: e.slot,
                  rarity: e.rarity,
                  attr: t,
                  attrMult: n,
                  battleAttr: i,
                  battleAttrMult: r,
                  scrapCost: gl.getInstance().resources.assertEnought(a, this.scrap, {}),
                  scrapGain: o,
                  improvementStage: ee(e.improvementStage || 0, 2),
                };
              }),
              (t.prototype.generateItem = function (e, t, n) {
                var i = (0.5 * Math.random() + 0.5) * t,
                  r = Math.random(),
                  o = 0;
                r < 0.002 * (n + 1) ? (o = 4) : r < 0.01 * (n + 1) ? (o = 3) : r < 0.05 * (n + 1) ? (o = 2) : r < 0.3 * (n + 1) && (o = 1);
                var a = Di(e.basicBattleAttributeGain, function (e) {
                    return e(i);
                  }),
                  u = Di(e.basicBattleAttributeMultiplier, function (e) {
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
                        secondaryBattleAttributeMultiplier: sl({}, e.secondaryBattleAttributeMultiplier),
                        secondaryBattleAttributeGain: sl({}, e.secondaryBattleAttributeGain),
                        secondaryAttributeMultiplier: sl({}, e.secondaryAttributeMultiplier),
                        secondaryAttributeGain: sl({}, e.secondaryAttributeGain),
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
                      s[d[p]] || (s[d[p]] = {}), (s[d[p]][m] = f[m](i)), delete f[m], l++;
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
                    battleAttributeGain: sl(sl({}, a), s.secondaryBattleAttributeGain),
                    battleAttributeMultiplier: sl(sl({}, u), s.secondaryBattleAttributeMultiplier),
                    attributeMultiplier: s.secondaryAttributeMultiplier,
                    attributeGain: s.secondaryAttributeGain,
                    improvementStage: 0,
                    baseScrapGain: e.baseScrapGain,
                    equipmentType: e.equipmentType,
                  }
                );
              }),
              (t.prototype.giveItem = function (e, t, n, i) {
                if ((void 0 === n && (n = 1), void 0 === i && (i = !1), !(this.inventory.length >= this.getInventoryMax()))) {
                  var r = this.generateItem(e, t, n);
                  return r.rarity < this.lootFilter.minRarity ||
                    !this.lootFilter.equipmentType.includes(r.equipmentType) ||
                    !this.lootFilter.equipmentSlot.includes(r.slot)
                    ? (this.getScrap(r), void console.log("[item-loot] filtered out", r.rarity, this.lootFilter.minRarity, n, r.equipmentType, r.slot))
                    : (this.inventory.push(r), r);
                }
              }),
              (t.prototype.giveRandomItem = function (e, t) {
                var n = Math.floor(Math.random() * al.length),
                  i = al[n];
                return this.giveItem(i, e, t, !0);
              }),
              (t.prototype.process = function (e) {}),
              (t.prototype.getAttributeProduced = function (e) {
                var t = this,
                  n = Object.values(this.equipped).filter(function (t) {
                    var n;
                    return t && (null === (n = t.attributeGain) || void 0 === n ? void 0 : n[e]);
                  }),
                  i = [];
                return (
                  n.forEach(function (n) {
                    var r;
                    if (n && (null === (r = n.attributeGain) || void 0 === r ? void 0 : r[e])) {
                      var o = n.attributeGain[e];
                      o &&
                        o.greaterThan(0) &&
                        i.push({ label: "Item: ".concat(n.name), value: t.modifyImprovement(o, e, n.improvementStage), id: "items", category: "Items" });
                    }
                  }),
                  i
                );
              }),
              (t.prototype.getAttributeMultiplier = function (e) {
                var t = this,
                  n = Object.values(this.equipped).filter(function (t) {
                    var n;
                    return t && (null === (n = t.attributeMultiplier) || void 0 === n ? void 0 : n[e]);
                  }),
                  i = [];
                return (
                  n.forEach(function (n) {
                    var r;
                    if (n && (null === (r = n.attributeMultiplier) || void 0 === r ? void 0 : r[e])) {
                      var o = n.attributeMultiplier[e];
                      o &&
                        !o.equals(1) &&
                        i.push({ label: "Item: ".concat(n.name), value: t.modifyImprovementMult(o, e, n.improvementStage), id: "items", category: "Items" });
                    }
                  }),
                  i
                );
              }),
              (t.prototype.getBattleAttributeProduced = function (e) {
                var t = this,
                  n = Object.values(this.equipped).filter(function (t) {
                    var n;
                    return t && (null === (n = t.battleAttributeGain) || void 0 === n ? void 0 : n[e]);
                  }),
                  i = [];
                return (
                  n.forEach(function (n) {
                    var r;
                    if (n && (null === (r = n.battleAttributeGain) || void 0 === r ? void 0 : r[e])) {
                      var o = n.battleAttributeGain[e];
                      o &&
                        o.greaterThan(0) &&
                        i.push({ label: "Item: ".concat(n.name), value: t.modifyImprovement(o, e, n.improvementStage), id: "items", category: "Items" });
                    }
                  }),
                  i
                );
              }),
              (t.prototype.getBattleAttributeMultiplier = function (e) {
                var t = this,
                  n = Object.values(this.equipped).filter(function (t) {
                    var n;
                    return t && (null === (n = t.battleAttributeMultiplier) || void 0 === n ? void 0 : n[e]);
                  }),
                  i = [];
                return (
                  n.forEach(function (n) {
                    var r;
                    if (n && (null === (r = n.battleAttributeMultiplier) || void 0 === r ? void 0 : r[e])) {
                      var o = n.battleAttributeMultiplier[e];
                      o &&
                        !o.equals(1) &&
                        i.push({ label: "Item: ".concat(n.name), value: t.modifyImprovementMult(o, e, n.improvementStage), id: "items", category: "Items" });
                    }
                  }),
                  i
                );
              }),
              t
            );
          })(s),
          ll = cl.getInstance(),
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
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
              function i() {
                this.constructor = t;
              }
              e(t, n), (t.prototype = null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
            };
          })(),
          pl = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (t.battleAttributes = Fc), (t.battleActions = zc), (t.battleLocations = ol), (t.battleItems = ll), t;
            }
            return (
              dl(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.onInit = function () {
                this.battleAttributes.onInit();
              }),
              (t.prototype.importData = function (e) {
                this.battleActions.importData(null == e ? void 0 : e.actions),
                  this.battleLocations.importData(null == e ? void 0 : e.locations),
                  this.battleItems.importData(null == e ? void 0 : e.items);
              }),
              (t.prototype.exportData = function () {
                return { actions: this.battleActions.exportData(), locations: this.battleLocations.exportData(), items: this.battleItems.exportData() };
              }),
              (t.prototype.dataToUI = function () {
                return {
                  battleAttributes: this.battleAttributes.dataToUI(),
                  battleActions: this.battleActions.dataToUI(),
                  battleLocations: this.battleLocations.dataToUI(),
                  battleItems: this.battleItems.dataToUI(),
                  isUnlocked: ml.city.academyUpgrades.getUpgradeLevel(a.BATTLE_MASTERY) > 0,
                };
              }),
              (t.prototype.preProcess = function (e) {}),
              (t.prototype.process = function (e) {
                this.battleAttributes.process(e), this.battleActions.process(e), this.battleLocations.process(e);
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
          fl = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
              function i() {
                this.constructor = t;
              }
              e(t, n), (t.prototype = null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
            };
          })(),
          gl = (function (e) {
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
                }),
                t.workDispatcher.on("initialize", function (e) {
                  console.log("Received payload", e);
                }),
                (t.resources = ie),
                (t.learning = Bi),
                (t.personage = Xi),
                (t.city = Wo),
                (t.statistics = Ko),
                (t.construction = Lu),
                (t.battle = pl),
                (t.newNotifications = Su),
                (t.achievements = _c),
                (t.about = xc),
                (t.isFirstIter = !0),
                (t.lastIterTick = performance.now()),
                setInterval(function () {
                  t.isLoading ? console.warn("Game is loading... Skip") : t.process(0.1);
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
                    : (console.log("saveGame: ", t.exportData()), t.workDispatcher.output("[game] save", t.exportData()));
                }, 2e4),
                t.workDispatcher.on("[game] load", function (e) {
                  console.log("Received load", e), t.importData(e);
                }),
                t.workDispatcher.on("[game] export text", function (e) {
                  console.log("Received export text", e), t.workDispatcher.output("[game] export to string", t.exportData());
                }),
                t.workDispatcher.on("[game] export file", function (e) {
                  console.log("Received export to file", e), t.workDispatcher.output("[game] export to file", t.exportData());
                }),
                t.workDispatcher.on("[game] purchase max", function (e) {
                  console.log("Received purchase max", e), t.purchaseMax();
                }),
                t.workDispatcher.on("[game] trigger save", function (e) {
                  t.workDispatcher.output("[game] save", t.exportData());
                }),
                t.workDispatcher.on("[game] toggle animations", function (e) {
                  (t.settings.turnAnimationsOn = e), t.workDispatcher.output("[game] save and reload", t.exportData());
                }),
                t.workDispatcher.on("[game] toggle setting", function (e) {
                  t.settings[e.key] = e.value;
                }),
                t.workDispatcher.on("[game] toggle theme", function (e) {
                  (t.settings.theme = e), t.workDispatcher.output("[game] save and reload", t.exportData());
                }),
                setTimeout(function () {
                  t.workDispatcher.output("loaded", { ttp: Date.now() - n }), t.onInit(), (t.isLoading = !1);
                }, 3e3),
                t
              );
            }
            return (
              fl(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.onInit = function () {
                this.battle.onInit();
              }),
              (t.prototype.process = function (e) {
                var t = 1 * this.speedUpFactor,
                  n = Date.now() / 1e3;
                this.dT = e * t;
                var i = this.isFirstIter ? 0 : n - this.lastIterTick - this.dT;
                (this.lastIterTick = n),
                  i > 0.1 && i < 1 && (this.dT += i / 1e3),
                  performance.now(),
                  this.isFirstIter && (this.regenerateCache(), this.resources.reassertBalances(), console.log("firstIterRan")),
                  this.learning.process(this.dT),
                  this.resources.process(this.dT),
                  this.city.process(this.dT),
                  this.construction.process(this.dT),
                  this.statistics.process(this.dT),
                  this.achievements.process(this.dT),
                  this.battle.process(this.dT),
                  this.isFirstIter && ((this.isFirstIter = !1), this.regenerateCache(), this.resources.reassertBalances(), console.log("firstIterRan"));
              }),
              (t.prototype.importData = function (e) {
                (this.isLoading = !0),
                  (this.settings = e.settings || { turnAnimationsOn: !0, theme: r.DARK }),
                  this.settings.theme || (this.settings.theme = r.DARK),
                  "addToQueueUnavailable" in this.settings || (this.settings.addToQueueUnavailable = !0),
                  this.resources.importData(e.resources),
                  this.learning.importData(e.learning),
                  this.city.importData(e.city),
                  this.construction.importData(e.construction),
                  this.statistics.importData(e.statistics),
                  this.newNotifications.importData(e.newNotifications),
                  this.achievements.importData(e.achievements),
                  this.battle.importData(e.battle),
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
          ml = gl.getInstance();
        self.addEventListener("message", function (e) {
          var t = e.data;
          console.log("send to worker: ", t), ml.workDispatcher.handleInput(t.type, t.payload);
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
      var e = r.O(void 0, [482], () => r(142));
      return r.O(e);
    }),
    (e = []),
    (r.O = (t, n, i, o) => {
      if (!n) {
        var a = 1 / 0;
        for (l = 0; l < e.length; l++) {
          for (var [n, i, o] = e[l], u = !0, s = 0; s < n.length; s++)
            (!1 & o || a >= o) && Object.keys(r.O).every((e) => r.O[e](n[s])) ? n.splice(s--, 1) : ((u = !1), o < a && (a = o));
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
      for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.f = {}),
    (r.e = (e) => Promise.all(Object.keys(r.f).reduce((t, n) => (r.f[n](e, t), t), []))),
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
      if (!e) throw new Error("Automatic publicPath is not supported in this browser");
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (r.p = e);
    })(),
    (() => {
      var e = { 142: 1 };
      r.f.i = (t, n) => {
        e[t] || importScripts(r.p + r.u(t));
      };
      var t = (self.webpackChunkidlemancery2 = self.webpackChunkidlemancery2 || []),
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
