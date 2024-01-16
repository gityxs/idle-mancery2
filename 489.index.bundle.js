(() => {
  "use strict";
  var e,
    t,
    n = {
      489: (e, t, n) => {
        var r,
          i,
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
        })(r || (r = {})),
          (function (e) {
            (e.DARK = "dark"), (e.BLACK = "black"), (e.LIGHT = "light");
          })(i || (i = {})),
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
              (e.METALWORKING = "metalworking");
          })(a || (a = {}));
        var c,
          l = [
            {
              id: r.MANA,
              name: "Mana",
              unlockCondition: function (e) {
                return !0;
              },
              hasCapacityLimit: !0,
              valuability: 4,
            },
            {
              id: r.KNOWLEDGE,
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
              id: r.CONTROL,
              name: "Control",
              unlockCondition: function (e) {
                return !1;
              },
              hasCapacityLimit: !0,
              valuability: 32,
              isShownInPanel: !0,
            },
            {
              id: r.COINS,
              name: "Coin",
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
              hasCapacityLimit: !0,
              valuability: 128,
              isShownInPanel: !0,
            },
            {
              id: r.ENERGY,
              name: "Energy",
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
              hasCapacityLimit: !0,
              valuability: 128,
              isShownInPanel: !0,
            },
            {
              id: r.SPARK,
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
              id: r.CRAFTSMANSHIP,
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
              id: r.WOOD,
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
              id: r.STONE,
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
              id: r.BRICK,
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
              id: r.REFINED_WOOD,
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
              id: r.CHARGED_WOOD,
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
              id: r.PAPER,
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
              id: r.CHARGED_PAPER,
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
              id: r.SAND,
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
              id: r.GLASS,
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
              id: r.IRON_ORE,
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
              id: r.IRON_PLATE,
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
          ],
          d = n(482);
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
            (e.CONJURATION_LORE = "CONJURATION_LORE");
        })(c || (c = {}));
        var p = function (e) {
          var t,
            n =
              (((t = {})[r.MANA] = {
                income: {
                  linear: [
                    {
                      id: "base",
                      label: "Willpower",
                      value: e.personage.attributes
                        .getAttribute(c.WILLPOWER)
                        .mul(0.2),
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
                      value: new d.Z(1),
                      category: "Wizard",
                    },
                  ],
                  multiplier: [],
                  consumption: [],
                },
              }),
              (t[r.CONTROL] = {
                max: {
                  linear: [
                    {
                      id: "base",
                      label: "Natural",
                      value: new d.Z(1e3),
                      category: "Wizard",
                    },
                  ],
                  multiplier: [],
                  consumption: [],
                },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[r.KNOWLEDGE] = {
                max: {
                  linear: [
                    {
                      id: "base",
                      label: "Natural",
                      value: new d.Z(50),
                      category: "Wizard",
                    },
                  ],
                  multiplier: [],
                  consumption: [],
                },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[r.ENERGY] = {
                max: {
                  linear: [
                    {
                      id: "base",
                      label: "Natural",
                      value: new d.Z(100),
                      category: "Wizard",
                    },
                  ],
                  multiplier: [],
                  consumption: [],
                },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[r.COINS] = {
                max: {
                  linear: [
                    {
                      id: "base",
                      label: "Natural",
                      value: new d.Z(50),
                      category: "Wizard",
                    },
                  ],
                  multiplier: [],
                  consumption: [],
                },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[r.SPARK] = {
                max: {
                  linear: [
                    {
                      id: "base",
                      label: "Natural",
                      value: new d.Z(50),
                      category: "Wizard",
                    },
                  ],
                  multiplier: [],
                  consumption: [],
                },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[r.CRAFTSMANSHIP] = {
                max: { linear: [], multiplier: [], consumption: [] },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[r.WOOD] = {
                max: { linear: [], multiplier: [], consumption: [] },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[r.STONE] = {
                max: { linear: [], multiplier: [], consumption: [] },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[r.REFINED_WOOD] = {
                max: { linear: [], multiplier: [], consumption: [] },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[r.PAPER] = {
                max: { linear: [], multiplier: [], consumption: [] },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[r.CHARGED_WOOD] = {
                max: { linear: [], multiplier: [], consumption: [] },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[r.CHARGED_PAPER] = {
                max: { linear: [], multiplier: [], consumption: [] },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[r.BRICK] = {
                max: { linear: [], multiplier: [], consumption: [] },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[r.SAND] = {
                max: { linear: [], multiplier: [], consumption: [] },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[r.GLASS] = {
                max: { linear: [], multiplier: [], consumption: [] },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[r.IRON_ORE] = {
                max: { linear: [], multiplier: [], consumption: [] },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              (t[r.IRON_PLATE] = {
                max: { linear: [], multiplier: [], consumption: [] },
                income: { linear: [], multiplier: [], consumption: [] },
              }),
              t),
            i = function (e) {
              var t,
                r,
                i,
                o,
                a,
                u,
                s,
                c,
                d,
                p,
                f,
                g,
                h,
                m,
                v,
                y,
                E,
                w,
                A,
                N,
                C,
                I,
                O,
                R,
                L,
                b,
                T,
                Z,
                S,
                P,
                U = l.find(function (t) {
                  return t.id === e;
                });
              null == U || U.isCraftable,
                null == U || U.isPrestigeCurrency,
                (t = n[e].max.linear).push.apply(
                  t,
                  ma.learning.runes.getResourceBeingStored(e)
                ),
                (r = n[e].max.multiplier).push.apply(
                  r,
                  ma.learning.runes.getResourceBeingStoredMultiplier(e)
                ),
                (i = n[e].income.multiplier).push.apply(
                  i,
                  ma.learning.runes.getMultiplier(e)
                ),
                (o = n[e].income.linear).push.apply(
                  o,
                  ma.learning.runes.getResourceGain(e)
                ),
                (a = n[e].max.linear).push.apply(
                  a,
                  ma.learning.crystals.getResourceBeingStored(e)
                ),
                (u = n[e].max.multiplier).push.apply(
                  u,
                  ma.learning.crystals.getResourceBeingStoredMultiplier(e)
                ),
                (s = n[e].income.multiplier).push.apply(
                  s,
                  ma.learning.crystals.getMultiplier(e)
                ),
                (c = n[e].income.linear).push.apply(
                  c,
                  ma.learning.crystals.getResourceGain(e)
                ),
                (d = n[e].income.multiplier).push.apply(
                  d,
                  ma.learning.runeUpgrades.getGainMultiplier(e)
                ),
                (p = n[e].income.linear).push.apply(
                  p,
                  ma.learning.runeUpgrades.getGain(e)
                ),
                (f = n[e].income.linear).push.apply(
                  f,
                  ma.city.actions.getResourceBeingProduced(e)
                ),
                (g = n[e].income.multiplier).push.apply(
                  g,
                  ma.city.actions.getGainMultiplier(e)
                ),
                (h = n[e].income.consumption).push.apply(
                  h,
                  ma.city.actions.getResourceBeingConsumed(e)
                ),
                (m = n[e].max.linear).push.apply(
                  m,
                  ma.city.actions.getResourceBeingStored(e)
                ),
                (v = n[e].max.multiplier).push.apply(
                  v,
                  ma.city.actions.getResourceBeingStoredMultiplier(e)
                ),
                (y = n[e].max.multiplier).push.apply(
                  y,
                  ma.learning.runeUpgrades.getCapacityMult(e)
                ),
                (E = n[e].max.linear).push.apply(
                  E,
                  ma.learning.runeUpgrades.getCapacity(e)
                ),
                (w = n[e].max.multiplier).push.apply(
                  w,
                  ma.city.mercenaries.getResourceBeingStoredMultiplier(e)
                ),
                (A = n[e].income.multiplier).push.apply(
                  A,
                  ma.city.mercenaries.getResourceBeingProducedMultiplier(e)
                ),
                (N = n[e].income.consumption).push.apply(
                  N,
                  ma.city.mercenaries.getResourceBeingConsumed(e)
                ),
                (C = n[e].income.linear).push.apply(
                  C,
                  ma.construction.crafting.getResourceGain(e)
                ),
                (I = n[e].income.consumption).push.apply(
                  I,
                  ma.construction.crafting.getResourceConsumption(e)
                ),
                (O = n[e].income.linear).push.apply(
                  O,
                  ma.construction.structures.getResourceBeingProduced(e)
                ),
                (R = n[e].income.multiplier).push.apply(
                  R,
                  ma.construction.structures.getGainMultiplier(e)
                ),
                (L = n[e].max.linear).push.apply(
                  L,
                  ma.construction.structures.getResourceBeingStored(e)
                ),
                (b = n[e].max.multiplier).push.apply(
                  b,
                  ma.construction.structures.getResourceBeingStoredMultiplier(e)
                ),
                (T = n[e].income.linear).push.apply(
                  T,
                  ma.achievements.getResourceBeingProduced(e)
                ),
                (Z = n[e].income.multiplier).push.apply(
                  Z,
                  ma.achievements.getResourceMultiplier(e)
                ),
                (S = n[e].max.linear).push.apply(
                  S,
                  ma.achievements.getResourceBeingStored(e)
                ),
                (P = n[e].max.multiplier).push.apply(
                  P,
                  ma.achievements.getResourceStorageMultiplier(e)
                );
            };
          for (var o in n) i(o);
          return n;
        };
        function f(e, t) {
          if (e.lte(Number.MAX_VALUE))
            return new d.Z(Math.log(e.toNumber()) / Math.log(t.toNumber()));
          var n = e.toExponential().split("e"),
            r = n[0],
            i = n[1];
          return new d.Z(i)
            .mul(d.Z.log(t))
            .plus(d.Z.log(new d.Z(r)).div(d.Z.log(t)));
        }
        function g(e, t) {
          if (
            (t = new d.Z(t)).greaterThanOrEqualTo(Number.MAX_SAFE_INTEGER) ||
            t.lessThanOrEqualTo(Number.MIN_SAFE_INTEGER)
          )
            return d.Z.pow(e, t);
          var n = e.toExponential().split("e"),
            r = parseFloat(n[0]),
            i = parseInt(n[1], 10),
            o = Math.pow(r, t.toNumber()),
            a = d.Z.pow(10, t.mul(i));
          return new d.Z(o).mul(a);
        }
        function h(e) {
          return f(e, new d.Z(10));
        }
        function m(e) {
          if (e > 1e12) return "Never";
          if (!e || e < 0) return "00:00:00";
          e = Number(e);
          var t = Math.floor(e / 3600),
            n = Math.floor((e % 3600) / 60),
            r = Math.floor((e % 3600) % 60);
          return (
            (t > 9 ? "".concat(t, ":") : "0".concat(t, ":")) +
            (n > 9 ? "".concat(n, ":") : "0".concat(n, ":")) +
            (r > 9 ? "".concat(r) : "0".concat(r))
          );
        }
        function v(e, t) {
          return (
            void 0 === t && (t = !0),
            e.greaterThanOrEqualTo("1.e+18")
              ? "Never"
              : e.greaterThanOrEqualTo("1")
              ? m(e.toNumber())
              : t || e.lessThanOrEqualTo("0")
              ? "00:00:00"
              : "".concat(X(e.pow(-1)), "/s")
          );
        }
        var y,
          E,
          w,
          A,
          N,
          C,
          I,
          O,
          R,
          L,
          b,
          T,
          Z,
          S,
          P,
          U,
          M,
          B,
          G,
          _,
          D,
          k,
          x,
          W,
          K,
          X = function (e, t, n) {
            void 0 === t && (t = 2),
              void 0 === n && (n = !1),
              d.Z.isDecimal(e) || (e = new d.Z(e));
            var r = e.isNegative();
            if ((e = e.abs()).greaterThanOrEqualTo(1e33))
              return (r ? "-" : "") + e.toExponential(t);
            if (e.lessThan(1))
              return n ? "0" : (r ? "-" : "") + e.toDecimalPlaces(t).toString();
            var i = h(e.abs().plus(0.1)).floor().div(3).floor().toNumber(),
              o = e.div(new d.Z(10).pow(3 * i)),
              a = Math.abs(i) > 0 ? j(i) : "";
            if (n) return (r ? "-" : "") + o.toFixed(a ? t : 0) + a;
            var u = o.toFixed(t);
            return (r ? "-" : "") + q(u) + a;
          },
          j = function (e) {
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
              ][e] || "E".concat(3 * e)
            );
          },
          q = function (e) {
            return e.includes(".") && (e = e.replace(/\.?0+$/, "")), e;
          },
          Y = function (e, t) {
            return X(e, t, !0);
          },
          F = function () {
            return (
              (F =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              F.apply(this, arguments)
            );
          },
          H = (function () {
            function e() {
              (this.cachedBreakdown = {}),
                (this.cachedShortenedBreakdown = {}),
                (this.cachedResources = {}),
                (this.resourcesStatus = l.map(function (e) {
                  return {
                    id: e.id,
                    amount: new d.Z(0),
                    balance: new d.Z(0),
                    max: new d.Z(0),
                    hasCapacityLimit: e.hasCapacityLimit,
                    potentialEfficiency: 1,
                    income: new d.Z(0),
                    multiplier: new d.Z(1),
                    consumption: new d.Z(0),
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
                        : (e[t.category] = F({}, t)),
                      e
                    );
                  }, {}),
                  r = e.multiplier.reduce(function (e, t) {
                    return (
                      e[t.category]
                        ? (e[t.category].value = e[t.category].value.mul(
                            t.value
                          ))
                        : (e[t.category] = F({}, t)),
                      e
                    );
                  }, {}),
                  i =
                    null === (t = e.consumption) || void 0 === t
                      ? void 0
                      : t.reduce(function (e, t) {
                          return (
                            e[t.category]
                              ? (e[t.category].value = e[t.category].value.plus(
                                  t.value
                                ))
                              : (e[t.category] = F({}, t)),
                            e
                          );
                        }, {});
                return {
                  linear: Object.values(n).map(function (e) {
                    return F(F({}, e), { label: e.category });
                  }),
                  multiplier: Object.values(r).map(function (e) {
                    return F(F({}, e), { label: e.category });
                  }),
                  consumption: i
                    ? Object.values(i).map(function (e) {
                        return F(F({}, e), { label: e.category });
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
                var n = this.resourcesStatus.findIndex(function (t) {
                  return t.id === e;
                });
                if (n < 0) {
                  n = this.resourcesStatus.length;
                  var r = l.find(function (t) {
                    return t.id === e;
                  });
                  if (!r) return;
                  this.resourcesStatus.push({
                    id: e,
                    amount: new d.Z(0),
                    balance: new d.Z(0),
                    hasCapacityLimit: r.hasCapacityLimit,
                    max: r.hasCapacityLimit ? new d.Z(0) : new d.Z(-1),
                    potentialEfficiency: 1,
                    income: new d.Z(0),
                    multiplier: new d.Z(1),
                    consumption: new d.Z(0),
                  });
                }
                (this.resourcesStatus[n].amount =
                  this.resourcesStatus[n].amount.plus(t)),
                  this.resourcesStatus[n].max.greaterThan(0) &&
                    this.resourcesStatus[n].hasCapacityLimit &&
                    (this.resourcesStatus[n].amount = d.Z.min(
                      this.resourcesStatus[n].amount,
                      this.resourcesStatus[n].max
                    )),
                  this.resourcesStatus[n].amount.lessThan(0) &&
                    (this.resourcesStatus[n].amount = new d.Z(0)),
                  (this.cachedResources[e] = this.resourcesStatus[n]);
              }),
              (e.prototype.setResource = function (e, t) {
                var n = this.resourcesStatus.findIndex(function (t) {
                  return t.id === e;
                });
                if (n < 0) {
                  n = this.resourcesStatus.length;
                  var r = l.find(function (t) {
                    return t.id === e;
                  });
                  if (!r) return;
                  this.resourcesStatus.push({
                    id: e,
                    amount: new d.Z(0),
                    balance: new d.Z(0),
                    hasCapacityLimit: r.hasCapacityLimit,
                    max: r.hasCapacityLimit ? new d.Z(0) : new d.Z(-1),
                    potentialEfficiency: 1,
                    income: new d.Z(0),
                    multiplier: new d.Z(1),
                    consumption: new d.Z(0),
                  });
                }
                (this.resourcesStatus[n].amount = t),
                  (this.cachedResources[e] = this.resourcesStatus[n]);
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
              (e.prototype.setBalance = function (e, t, n, r) {
                var i = this.resourcesStatus.findIndex(function (t) {
                  return t.id === e;
                });
                if (i < 0) {
                  i = this.resourcesStatus.length;
                  var o = l.find(function (t) {
                    return t.id === e;
                  });
                  if (!o) return;
                  this.resourcesStatus.push({
                    id: e,
                    amount: new d.Z(0),
                    balance: new d.Z(0),
                    hasCapacityLimit: o.hasCapacityLimit,
                    max: o.hasCapacityLimit ? new d.Z(0) : new d.Z(-1),
                    potentialEfficiency: 1,
                    income: new d.Z(0),
                    multiplier: new d.Z(1),
                    consumption: new d.Z(0),
                  });
                }
                (this.resourcesStatus[i].income = t),
                  (this.resourcesStatus[i].multiplier = n),
                  (this.resourcesStatus[i].consumption = r),
                  (this.resourcesStatus[i].balance = t.mul(n).sub(r)),
                  (this.cachedResources[e] = this.resourcesStatus[i]);
              }),
              (e.prototype.setCapacity = function (e, t) {
                var n = this.resourcesStatus.findIndex(function (t) {
                  return t.id === e;
                });
                if (n < 0) {
                  n = this.resourcesStatus.length;
                  var r = l.find(function (t) {
                    return t.id === e;
                  });
                  if (!r) return;
                  this.resourcesStatus.push({
                    id: e,
                    amount: new d.Z(0),
                    balance: new d.Z(0),
                    hasCapacityLimit: r.hasCapacityLimit,
                    max: r.hasCapacityLimit ? new d.Z(0) : new d.Z(-1),
                    potentialEfficiency: 1,
                    income: new d.Z(0),
                    multiplier: new d.Z(1),
                    consumption: new d.Z(0),
                  });
                }
                (this.resourcesStatus[n].max = t),
                  (this.cachedResources[e] = this.resourcesStatus[n]);
              }),
              (e.prototype.saveBalances = function () {
                var t = this;
                ma.personage.attributes.getBreakdowns();
                var n = p(ma),
                  r = {},
                  i = {};
                l.forEach(function (o) {
                  var a, u, s, c, l, p, f, g;
                  if (o.unlockCondition(ma)) {
                    (r[o.id] = {
                      max: { income: [], multiplier: [], consumption: [] },
                      income: { income: [], multiplier: [], consumption: [] },
                    }),
                      (i[o.id] = {
                        max: { income: [], multiplier: [], consumption: [] },
                        income: { income: [], multiplier: [], consumption: [] },
                      });
                    var h = n[o.id].max.linear.reduce(function (e, t) {
                        return e.add(t.value);
                      }, new d.Z(0)),
                      m = n[o.id].max.multiplier.reduce(function (e, t) {
                        return e.mul(t.value);
                      }, new d.Z(1));
                    t.setCapacity(o.id, h.mul(m));
                    var v = e.collapseEffects(n[o.id].max);
                    (r[o.id].max.income = n[o.id].max.linear
                      .filter(function (e) {
                        return e.value;
                      })
                      .sort(function (e, t) {
                        return t.value - e.value;
                      })
                      .map(function (e) {
                        return F(F({}, e), {
                          value: "+".concat(X(e.value, 4)),
                        });
                      })),
                      (i[o.id].max.income = v.linear
                        .filter(function (e) {
                          return e.value;
                        })
                        .map(function (e) {
                          return F(F({}, e), {
                            value: "+".concat(X(e.value, 4)),
                          });
                        })),
                      (r[o.id].max.multiplier = n[o.id].max.multiplier
                        .filter(function (e) {
                          return 1 !== e.value;
                        })
                        .sort(function (e, t) {
                          return t.value - e.value;
                        })
                        .map(function (e) {
                          return F(F({}, e), {
                            value: "x".concat(X(e.value, 4)),
                          });
                        })),
                      (i[o.id].max.multiplier = v.multiplier
                        .filter(function (e) {
                          return 1 !== e.value;
                        })
                        .map(function (e) {
                          return F(F({}, e), {
                            value: "x".concat(X(e.value, 4)),
                          });
                        }));
                    var y = e.collapseEffects(n[o.id].income),
                      E = n[o.id].income.linear.reduce(function (e, t) {
                        return e.add(t.value);
                      }, new d.Z(0)),
                      w = n[o.id].income.multiplier.reduce(function (e, t) {
                        return e.mul(t.value);
                      }, new d.Z(1)),
                      A =
                        null === (a = n[o.id].income.consumption) ||
                        void 0 === a
                          ? void 0
                          : a.reduce(function (e, t) {
                              return e.add(t.value);
                            }, new d.Z(0));
                    if (
                      (t.setBalance(o.id, E, w, A),
                      null === (u = r[o.id]) ||
                        void 0 === u ||
                        (u.income.income = n[o.id].income.linear
                          .filter(function (e) {
                            return e.value;
                          })
                          .sort(function (e, t) {
                            return t.value - e.value;
                          })
                          .map(function (e) {
                            return F(F({}, e), {
                              value: "+".concat(X(e.value, 4)),
                            });
                          })),
                      null === (s = i[o.id]) ||
                        void 0 === s ||
                        (s.income.income = y.linear
                          .filter(function (e) {
                            return e.value;
                          })
                          .map(function (e) {
                            return F(F({}, e), {
                              value: "+".concat(X(e.value, 4)),
                            });
                          })),
                      null === (c = r[o.id]) ||
                        void 0 === c ||
                        (c.income.multiplier = n[o.id].income.multiplier
                          .filter(function (e) {
                            return 1 !== e.value;
                          })
                          .sort(function (e, t) {
                            return t.value - e.value;
                          })
                          .map(function (e) {
                            return F(F({}, e), {
                              value: "x".concat(X(e.value, 4)),
                            });
                          })),
                      null === (l = i[o.id]) ||
                        void 0 === l ||
                        (l.income.multiplier = y.multiplier
                          .filter(function (e) {
                            return 1 !== e.value;
                          })
                          .map(function (e) {
                            return F(F({}, e), {
                              value: "x".concat(X(e.value, 4)),
                            });
                          })),
                      null === (p = r[o.id]) ||
                        void 0 === p ||
                        (p.income.consumption = n[o.id].income.consumption
                          .filter(function (e) {
                            return e.value;
                          })
                          .sort(function (e, t) {
                            return t.value - e.value;
                          })
                          .map(function (e) {
                            return F(F({}, e), {
                              value: "-".concat(X(e.value, 4)),
                            });
                          })),
                      null === (f = i[o.id]) ||
                        void 0 === f ||
                        (f.income.consumption =
                          null === (g = y.consumption) || void 0 === g
                            ? void 0
                            : g
                                .filter(function (e) {
                                  return e.value;
                                })
                                .map(function (e) {
                                  return F(F({}, e), {
                                    value: "-".concat(X(e.value, 4)),
                                  });
                                })),
                      o.hasCapacityLimit)
                    ) {
                      var N = n[o.id].max.linear.reduce(function (e, t) {
                          return e.add(t.value);
                        }, new d.Z(0)),
                        C = n[o.id].max.multiplier.reduce(function (e, t) {
                          return e.mul(t.value);
                        }, new d.Z(1));
                      t.setCapacity(o.id, N.mul(C));
                    }
                  }
                }),
                  (this.cachedBreakdown = r),
                  (this.cachedShortenedBreakdown = i);
              }),
              (e.prototype.resetEfficiency = function () {
                e.lackEfficiencyResources = {};
              }),
              (e.prototype.assertBalances = function (e) {
                var t;
                void 0 === e && (e = !1);
                var n = p(ma),
                  r = {};
                for (var i in n) {
                  var o = n[i].income.linear.reduce(function (e, t) {
                      return e.add(t.value);
                    }, new d.Z(0)),
                    a = n[i].income.multiplier.reduce(function (e, t) {
                      return e.mul(t.value);
                    }, new d.Z(1)),
                    u =
                      null === (t = n[i].income.consumption) || void 0 === t
                        ? void 0
                        : t.reduce(function (e, t) {
                            return e.add(t.value);
                          }, new d.Z(0)),
                    s =
                      (o.mul(a).sub(u || 0),
                      this.getPotentialEfficiency(
                        d.Z.max(0, this.getResource(i)).add(o.mul(a)),
                        (u || new d.Z(0)).mul(-1)
                      ));
                  r[i] = s < 1 && e ? 0 : s;
                }
                return r;
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
                  var r = n;
                  r in e.lackEfficiencyResources &&
                  null != e.lackEfficiencyResources[r]
                    ? (e.lackEfficiencyResources[r] *= t[r])
                    : (e.lackEfficiencyResources[r] = t[r]);
                }
                e.lackEfficiencyResourcesCached = F(
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
                var n = this,
                  r = !1,
                  i = "";
                this.resourcesStatus.forEach(function (e) {
                  e.balance.lessThan(0) &&
                    e.balance.add(e.amount).lessThan(0) &&
                    ((r = !0), (i = e.id));
                }),
                  r &&
                    (console.log(
                      "should re-assert: ",
                      r,
                      i,
                      e.lackEfficiencyResources
                    ),
                    this.reassertBalances()),
                  this.resourcesStatus.forEach(function (e) {
                    n.addResource(e.id, e.balance.mul(t));
                  });
              }),
              (e.prototype.getResource = function (e) {
                var t;
                return (
                  (null === (t = this.cachedResources[e]) || void 0 === t
                    ? void 0
                    : t.amount) || new d.Z(0)
                );
              }),
              (e.prototype.getResourceMultiplier = function (e) {
                var t;
                return (
                  (null === (t = this.cachedResources[e]) || void 0 === t
                    ? void 0
                    : t.multiplier) || new d.Z(0)
                );
              }),
              (e.prototype.getBalance = function (e) {
                var t;
                return (
                  (null === (t = this.cachedResources[e]) || void 0 === t
                    ? void 0
                    : t.balance) || new d.Z(0)
                );
              }),
              (e.prototype.getPotentialEfficiency = function (e, t) {
                return t.lessThanOrEqualTo(0)
                  ? 1
                  : Math.min(1, -d.Z.max(0, e).div(t).toNumber());
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
                    : t.balance) || new d.Z(0)
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
                      : n.max) || new d.Z(0)
                  : new d.Z("1.e+30000");
              }),
              (e.prototype.assertEnought = function (e, t, n) {
                var r = [];
                return (
                  e.forEach(function (e) {
                    var n = "0";
                    if (
                      (t[e.id] || (t[e.id] = new d.Z(0)),
                      e.amount &&
                        e.amount.greaterThan(0) &&
                        t[e.id].greaterThan(0))
                    ) {
                      var i = 100 * t[e.id].div(e.amount).toNumber();
                      i > 100 && (i = 100), (n = i.toPrecision(3));
                    }
                    e.amount.greaterThan(0) &&
                      r.push({
                        id: e.id,
                        name: e.name,
                        amount: X(e.amount),
                        percentage: n,
                        maxAmount: X(e.max),
                        isAvailable: e.max.greaterThanOrEqualTo(1),
                        eta: m(e.eta),
                        percentageOf: e.percentageOf,
                      });
                  }),
                  r
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
                        var t = l.find(function (t) {
                          return t.id === e.id;
                        });
                        if (!t) throw new Error("Invalid resource");
                        return {
                          id: e.id,
                          amount: new d.Z(e.amount),
                          balance: new d.Z(0),
                          hasCapacityLimit: t.hasCapacityLimit,
                          max: new d.Z(0),
                          potentialEfficiency: 1,
                          income: new d.Z(0),
                          multiplier: new d.Z(1),
                          consumption: new d.Z(0),
                        };
                      })) || [];
              }),
              (e.prototype.dataToUI = function () {
                var e = this;
                return {
                  resources: l.map(function (t) {
                    var n,
                      r,
                      i,
                      o,
                      a = e.resourcesStatus.find(function (e) {
                        return e.id === t.id;
                      });
                    return {
                      id: t.id,
                      name: t.name,
                      showOnSidebar:
                        null !== (n = t.isShownInPanel) && void 0 !== n && n,
                      amount: X((null == a ? void 0 : a.amount) || new d.Z(0)),
                      balance: X(
                        (null == a ? void 0 : a.balance) || new d.Z(0)
                      ),
                      isUnlocked: t.unlockCondition(ma),
                      max: X((null == a ? void 0 : a.max) || new d.Z(0)),
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
                          ? m(a.max.sub(a.amount).div(a.balance).toNumber())
                          : "",
                      toEmptyTime:
                        a && (null == a ? void 0 : a.balance.lessThan(0))
                          ? m(
                              -(null == a ? void 0 : a.amount)
                                .div(null == a ? void 0 : a.balance)
                                .toNumber()
                            )
                          : "",
                      isSecondary:
                        null !== (r = t.isCraftable) && void 0 !== r && r,
                      isCraftable:
                        null !== (i = t.isCraftable) && void 0 !== i && i,
                      isHidden: null !== (o = t.isHidden) && void 0 !== o && o,
                      isNegative:
                        ((null == a ? void 0 : a.balance) || 0) < 0 ||
                        (e.getResourceEfficiency(t.id) || 0) < 1,
                      isPositive: ((null == a ? void 0 : a.balance) || 0) > 0,
                      isCapped:
                        !!a &&
                        a.max.greaterThan(0) &&
                        a.max.lessThanOrEqualTo(
                          a.amount.plus(a.balance.mul(2 * ma.dT))
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
                          (t = l.find(function (t) {
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
          V = H.getInstance();
        !(function (e) {
          (e[(e.POLYNOMIAL = 0)] = "POLYNOMIAL"),
            (e[(e.EXPONENTIAL = 1)] = "EXPONENTIAL"),
            (e[(e.LINEAR = 2)] = "LINEAR");
        })(y || (y = {}));
        var z,
          J = [
            {
              id: "manacap",
              name: "Mana Cap Rune",
              description:
                "Expand your magic abilities by learning this rune. Mana capacity will be slightly increased.",
              unlockCondition: function (e) {
                return !0;
              },
              getCap:
                ((E = {}),
                (E[r.MANA] = function (e) {
                  return { A: new d.Z(0.1), B: new d.Z(0), type: y.LINEAR };
                }),
                E),
              getCost:
                ((w = {}),
                (w[r.MANA] = function (e) {
                  return { A: new d.Z(0), B: new d.Z(1), type: y.LINEAR };
                }),
                w),
              levelRequirement: new d.Z(1),
            },
            {
              id: "willpower",
              name: "Willpower Rune",
              description:
                "Rise your willpower attribute, improving mana generation rate",
              unlockCondition: function (e) {
                return e.resources
                  .getResourceCap(r.MANA)
                  .greaterThanOrEqualTo(2);
              },
              getAttribute:
                ((A = {}),
                (A[c.WILLPOWER] = function (e) {
                  return { A: new d.Z(0.1), B: new d.Z(0), type: y.LINEAR };
                }),
                A),
              getCost:
                ((N = {}),
                (N[r.MANA] = function (e) {
                  return { A: new d.Z(0), B: new d.Z(2), type: y.LINEAR };
                }),
                N),
              levelRequirement: new d.Z(1),
            },
            {
              id: "intellect",
              name: "Intellect Rune",
              description:
                "Rise your intellect attribute, improving skill learning speed",
              unlockCondition: function (e) {
                return e.resources
                  .getResourceCap(r.MANA)
                  .greaterThanOrEqualTo(4);
              },
              getAttribute:
                ((C = {}),
                (C[c.RUNE_READING] = function (e) {
                  return { A: new d.Z(0.1), B: new d.Z(0), type: y.LINEAR };
                }),
                C),
              getCost:
                ((I = {}),
                (I[r.MANA] = function (e) {
                  return { A: new d.Z(0), B: new d.Z(2), type: y.LINEAR };
                }),
                I),
              levelRequirement: new d.Z(1),
            },
            {
              id: "knowledge-rune",
              name: "Knowledge Rune",
              description: "Increase knowledge generation",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(o.KNOWLEDGE) > 0;
              },
              getGain:
                ((O = {}),
                (O[r.KNOWLEDGE] = function (e) {
                  return { A: new d.Z(0.003), B: new d.Z(0), type: y.LINEAR };
                }),
                O),
              getCost:
                ((R = {}),
                (R[r.MANA] = function (e) {
                  return { A: new d.Z(0), B: new d.Z(10), type: y.LINEAR };
                }),
                R),
              levelRequirement: new d.Z(10),
            },
            {
              id: "manarate",
              name: "Mana Rate Rune",
              description: "Improve your mana gain",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(o.EXPAND_MANA) > 0
                );
              },
              getMultiplier:
                ((L = {}),
                (L[r.MANA] = function (e) {
                  return { A: new d.Z(0.02), B: new d.Z(1), type: y.LINEAR };
                }),
                L),
              getCost:
                ((b = {}),
                (b[r.MANA] = function (e) {
                  return { A: new d.Z(0), B: new d.Z(5), type: y.LINEAR };
                }),
                (b[r.KNOWLEDGE] = function (e) {
                  return { A: new d.Z(0), B: new d.Z(1), type: y.LINEAR };
                }),
                b),
              levelRequirement: new d.Z(25),
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
                ((T = {}),
                (T[r.MANA] = function (e) {
                  return { A: new d.Z(0), B: new d.Z(50), type: y.LINEAR };
                }),
                (T[r.KNOWLEDGE] = function (e) {
                  return { A: new d.Z(0), B: new d.Z(20), type: y.LINEAR };
                }),
                T),
              getAttribute:
                ((Z = {}),
                (Z[c.RUNE_MASTERY] = function (e) {
                  return { A: new d.Z(0.2), B: new d.Z(0), type: y.LINEAR };
                }),
                Z),
              levelRequirement: new d.Z(2500),
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
                ((S = {}),
                (S[r.MANA] = function (e) {
                  return { A: new d.Z(0.02), B: new d.Z(1), type: y.LINEAR };
                }),
                (S[r.KNOWLEDGE] = function (e) {
                  return { A: new d.Z(0.02), B: new d.Z(1), type: y.LINEAR };
                }),
                S),
              getCost:
                ((P = {}),
                (P[r.MANA] = function (e) {
                  return { A: new d.Z(0), B: new d.Z(20), type: y.LINEAR };
                }),
                (P[r.KNOWLEDGE] = function (e) {
                  return { A: new d.Z(0), B: new d.Z(5), type: y.LINEAR };
                }),
                P),
              levelRequirement: new d.Z(1e3),
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
                ((U = {}),
                (U[c.VITALITY] = function (e) {
                  return { A: new d.Z(0.005), B: new d.Z(1), type: y.LINEAR };
                }),
                U),
              getCost:
                ((M = {}),
                (M[r.MANA] = function (e) {
                  return { A: new d.Z(0), B: new d.Z(2500), type: y.LINEAR };
                }),
                (M[r.KNOWLEDGE] = function (e) {
                  return { A: new d.Z(0), B: new d.Z(5), type: y.LINEAR };
                }),
                M),
              levelRequirement: new d.Z(1e7),
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
                ((B = {}),
                (B[c.STRENGTH] = function (e) {
                  return { A: new d.Z(0.005), B: new d.Z(1), type: y.LINEAR };
                }),
                B),
              getCost:
                ((G = {}),
                (G[r.MANA] = function (e) {
                  return { A: new d.Z(0), B: new d.Z(15e3), type: y.LINEAR };
                }),
                (G[r.KNOWLEDGE] = function (e) {
                  return { A: new d.Z(0), B: new d.Z(125), type: y.LINEAR };
                }),
                G),
              levelRequirement: new d.Z(2e7),
            },
            {
              id: "agility",
              name: "Agility Rune",
              description: "Increase actions limits",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.AGILITY_RUNE) > 0
                );
              },
              getAttributeMultiplier:
                ((_ = {}),
                (_[c.AGILITY] = function (e) {
                  return { A: new d.Z(0.002), B: new d.Z(1), type: y.LINEAR };
                }),
                _),
              getCost:
                ((D = {}),
                (D[r.MANA] = function (e) {
                  return { A: new d.Z(0), B: new d.Z(4e5), type: y.LINEAR };
                }),
                (D[r.KNOWLEDGE] = function (e) {
                  return { A: new d.Z(0), B: new d.Z(5e3), type: y.LINEAR };
                }),
                D),
              levelRequirement: new d.Z(2e10),
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
                ((k = {}),
                (k[r.SPARK] = function (e) {
                  return { A: new d.Z(0.005), B: new d.Z(1), type: y.LINEAR };
                }),
                k),
              getCost:
                ((x = {}),
                (x[r.MANA] = function (e) {
                  return { A: new d.Z(0), B: new d.Z("4.e+7"), type: y.LINEAR };
                }),
                (x[r.KNOWLEDGE] = function (e) {
                  return { A: new d.Z(0), B: new d.Z("4.e+8"), type: y.LINEAR };
                }),
                x),
              levelRequirement: new d.Z("5.e+30"),
            },
            {
              id: "elven_rune",
              name: "Elven Rune",
              description: "Increase spellbinding attribute",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.ELVEN_RUNE) > 0;
              },
              getAttributeMultiplier:
                ((W = {}),
                (W[c.MAGIC_KNOWLEDGE] = function (e) {
                  return { A: new d.Z(0.005), B: new d.Z(1), type: y.LINEAR };
                }),
                W),
              getCost:
                ((K = {}),
                (K[r.MANA] = function (e) {
                  return {
                    A: new d.Z(0),
                    B: new d.Z("4.e+11"),
                    type: y.LINEAR,
                  };
                }),
                (K[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(0),
                    B: new d.Z("5.e+12"),
                    type: y.LINEAR,
                  };
                }),
                K),
              levelRequirement: new d.Z("5.e+40"),
            },
          ],
          Q = [
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
              description: "Increase endurance activities efficiency",
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
          ],
          $ = function (e, t) {
            void 0 === t && (t = !1);
            var n = l.find(function (t) {
              return t.id === e;
            });
            if (n) return n.unlockCondition(ma) || t ? n.name : "???";
            var r = Q.find(function (t) {
              return t.id === e;
            });
            return r ? (r.unlockCondition(ma) || t ? r.name : "???") : e;
          },
          ee = function () {
            return (
              (ee =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              ee.apply(this, arguments)
            );
          },
          te = (function () {
            function e() {}
            return (
              (e.calculate = function (t, n, r) {
                var i = n(t);
                return e.calculateFormula(i, r);
              }),
              (e.calculateBatch = function (t, n, r, i) {
                i || (i = new d.Z(1));
                var o = n(t);
                return e.calculateFormulaBatch(o, r, i);
              }),
              (e.calculateFormula = function (t, n) {
                switch (t.type) {
                  case y.EXPONENTIAL:
                    return e.calculateExponential(t, n);
                  case y.POLYNOMIAL:
                    return e.calculatePolynomial(t, n);
                  case y.LINEAR:
                    return e.calculateLinear(t, n);
                  default:
                    return new d.Z(0);
                }
              }),
              (e.calculateExponential = function (e, t) {
                return e.A.mul(g(e.B, t));
              }),
              (e.calculatePolynomial = function (e, t) {
                return e.A.mul(g(t, e.B));
              }),
              (e.calculateLinear = function (e, t) {
                return e.B.plus(e.A.mul(t));
              }),
              (e.calculateFormulaBatch = function (t, n, r) {
                switch (t.type) {
                  case y.EXPONENTIAL:
                    return e.calculateExponentialBatch(t, n, r);
                  case y.POLYNOMIAL:
                    return e.calculatePolynomialBatch(t, n, r);
                  case y.LINEAR:
                    return e.calculateLinearBatch(t, n, r);
                  default:
                    return new d.Z(0);
                }
              }),
              (e.calculateExponentialBatch = function (e, t, n) {
                return e.B.equals(1)
                  ? e.A.mul(n)
                  : e.A.mul(g(e.B, t).mul(g(e.B, n).sub(1)).div(e.B.sub(1)));
              }),
              (e.calculatePolynomialBatch = function (e, t, n) {
                return (
                  console.error("Polynomial batch is not implemented"),
                  new d.Z(0)
                );
              }),
              (e.calculateLinearBatch = function (e, t, n) {
                return n
                  .mul(e.B.plus(e.A.mul(t)))
                  .plus(e.A.mul(g(n, 2).mul(0.5)))
                  .sub(e.A.div(2));
              }),
              (e.calculateDX = function (t, n, r, i) {
                var o = n(t);
                return e.calculateDXByFormula(o, r, i);
              }),
              (e.calculateDXByFormula = function (t, n, r) {
                switch (t.type) {
                  case y.EXPONENTIAL:
                    return e.calculateDXExponential(t, n, r);
                  case y.POLYNOMIAL:
                    return e.calculateDXPolynomial(t, n, r);
                  case y.LINEAR:
                    return e.calculateDXLinear(t, n, r);
                  default:
                    return new d.Z(0);
                }
              }),
              (e.calculateDXExponential = function (e, t, n) {
                return e.A.equals(0)
                  ? new d.Z("1.e+30000")
                  : e.B.equals(1)
                  ? n.div(e.A)
                  : n
                  ? f(
                      n
                        .mul(e.B.sub(1))
                        .div(e.A.mul(g(e.B, t)))
                        .plus(1),
                      e.B
                    )
                  : new d.Z(0);
              }),
              (e.calculateDXPolynomial = function (e, t, n) {
                return (
                  console.error("Polynomial dX is not implemented"), new d.Z(0)
                );
              }),
              (e.calculateDXLinear = function (e, t, n) {
                var r = e.A,
                  i = e.B,
                  o = t,
                  a = n;
                if (r.equals(0)) return n.div(i).floor();
                var u = r.mul(2).mul(o).plus(i.mul(2)).minus(r),
                  s = a.mul(2),
                  c = u.pow(2).plus(r.mul(4).mul(s));
                if (c.lessThan(0)) return new d.Z(0);
                var l = u.neg().plus(c.sqrt()).div(r.mul(2)),
                  p = u.neg().minus(c.sqrt()).div(r.mul(2)),
                  f = d.Z.min(l.floor(), p.floor());
                return f.greaterThanOrEqualTo(0) ? f : new d.Z(0);
              }),
              (e.calcBatch = function (t, n, r, i, o, a) {
                void 0 === i && (i = new d.Z(1)),
                  void 0 === o && (o = !1),
                  void 0 === a && (a = 1);
                var u = [];
                return (
                  Object.entries(t).forEach(function (t) {
                    var s = t[0],
                      c = t[1];
                    u.push({
                      id: s,
                      name: $(s, o),
                      amount: e.calculateBatch(n, c, r, i).mul(a),
                    });
                  }),
                  u
                );
              }),
              (e.calcDXBatch = function (t, n, r, i) {
                var o = {};
                return (
                  Object.entries(t).forEach(function (t) {
                    var a = t[0],
                      u = t[1];
                    o[a] = e.calculateDX(n, u, r, i[a]);
                  }),
                  o
                );
              }),
              (e.calcBatchAll = function (t, n, r, i, o, a) {
                void 0 === o && (o = new d.Z(1)),
                  void 0 === a && (a = new d.Z(1));
                var u = [];
                return (
                  Object.entries(t).forEach(function (t) {
                    var s = t[0],
                      c = t[1];
                    i[s] || (i[s] = new d.Z(0));
                    var l = e.calculateDX(n, c, r, i[s]).div(a),
                      p = e.calculateBatch(n, c, r, o).mul(a),
                      f = 0,
                      g = !1;
                    if (l.lessThan(1)) {
                      var h = n.resources.getResourceCap(s);
                      h.lessThan(p) && (g = !0),
                        (f =
                          h.lessThan(p) ||
                          (n.resources.getResourceBalance(s).lessThan(0) &&
                            p.sub(i[s] || 0).greaterThan(0))
                            ? 1e300
                            : p
                                .sub(i[s] || 0)
                                .div(
                                  n.resources.getResourceBalance(s) || 1e-300
                                )
                                .toNumber());
                    }
                    u.push({
                      id: s,
                      name: $(s),
                      amount: p,
                      max: l,
                      eta: f,
                      isBlocked: g,
                      percentageOf: p.lessThan(i[s])
                        ? p.div(i[s]).toNumber()
                        : void 0,
                    });
                  }),
                  u
                );
              }),
              (e.calcSum = function (e, t, n) {
                void 0 === t && (t = []), void 0 === n && (n = []);
                var r = (function (e, t, n) {
                  if (n || 2 === arguments.length)
                    for (var r, i = 0, o = t.length; i < o; i++)
                      (!r && i in t) ||
                        (r || (r = Array.prototype.slice.call(t, 0, i)),
                        (r[i] = t[i]));
                  return e.concat(r || Array.prototype.slice.call(t));
                })([], t, !0);
                n.forEach(function (e) {
                  var t = r.findIndex(function (t) {
                    return t.id === e.id;
                  });
                  t > -1
                    ? (r[t].amount = r[t].amount.add(e.amount))
                    : r.push(ee({}, e));
                });
                var i = e.resources.getBatchObject();
                return (
                  r.forEach(function (t, n) {
                    var o = e.resources.getResourceCap(t.id),
                      a = !1,
                      u = 0;
                    o && o.lessThan(t.amount) && (a = !0),
                      (u =
                        (o && o.lessThan(t.amount)) ||
                        (e.resources.getResourceBalance(t.id).lessThan(0) &&
                          t.amount.sub(i[t.id] || 0).greaterThan(0))
                          ? 1e300
                          : t.amount
                              .sub(i[t.id] || 0)
                              .div(
                                e.resources.getResourceBalance(t.id) || 1e-300
                              )
                              .toNumber()),
                      (r[n].isBlocked = a),
                      (r[n].eta = u),
                      (r[n].max = t.amount.sub(i[t.id] || 0).greaterThan(0)
                        ? (i[t.id] || new d.Z(0)).div(t.amount.plus(1e-50))
                        : new d.Z(1)),
                      (r[n].percentageOf = t.amount.lessThan(i[t.id])
                        ? t.amount.div(i[t.id]).toNumber()
                        : void 0);
                  }),
                  r
                );
              }),
              (e.getValue = function (e, t) {
                var n = [];
                return (
                  Object.entries(e).forEach(function (e) {
                    var r = e[0],
                      i = e[1];
                    n.push({ id: r, name: $(r), amount: i(t) });
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
        })(z || (z = {}));
        var ne,
          re,
          ie,
          oe,
          ae,
          ue,
          se,
          ce,
          le,
          de,
          pe,
          fe,
          ge,
          he,
          me,
          ve,
          ye,
          Ee,
          we,
          Ae,
          Ne,
          Ce,
          Ie,
          Oe,
          Re,
          Le,
          be,
          Te,
          Ze,
          Se,
          Pe,
          Ue,
          Me,
          Be,
          Ge,
          _e,
          De,
          ke,
          xe,
          We,
          Ke,
          Xe,
          je,
          qe,
          Ye,
          Fe,
          He,
          Ve,
          ze,
          Je,
          Qe,
          $e,
          et,
          tt,
          nt,
          rt,
          it,
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
          ht,
          mt,
          vt,
          yt,
          Et,
          wt,
          At,
          Nt,
          Ct,
          It,
          Ot,
          Rt,
          Lt,
          bt,
          Tt,
          Zt,
          St,
          Pt,
          Ut,
          Mt,
          Bt,
          Gt,
          _t,
          Dt,
          kt,
          xt,
          Wt,
          Kt,
          Xt,
          jt,
          qt,
          Yt,
          Ft,
          Ht,
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
          hn,
          mn,
          vn,
          yn,
          En,
          wn,
          An,
          Nn,
          Cn,
          In,
          On,
          Rn,
          Ln,
          bn,
          Tn,
          Zn,
          Sn,
          Pn,
          Un,
          Mn,
          Bn,
          Gn,
          _n,
          Dn =
            ((ne = function (e, t) {
              return (
                (ne =
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
                ne(e, t)
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
              ne(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            }),
          kn = function () {
            return (
              (kn =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              kn.apply(this, arguments)
            );
          },
          xn = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.runes = []),
                (t.cachedRunes = []),
                (t.dbCache = {}),
                t.workDispatcher.on("[runes] toggle active", function (e) {
                  console.log("do learn", e),
                    t.toggleLearn(e.id),
                    t.regenerateCache();
                }),
                t.workDispatcher.on("[runes] sacrifice", function (e) {
                  console.log("do sacrifice", e), t.doSacrifice(e.id);
                }),
                (t.dbCache = J.reduce(function (e, t) {
                  var n;
                  return kn(kn({}, e), (((n = {})[t.id] = t), n));
                }, {})),
                t
              );
            }
            return (
              Dn(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.regenerateCache = function () {
                var e = this;
                this.cachedRunes = J.map(function (t) {
                  return e.processToUI(t);
                });
              }),
              (t.prototype.importData = function (e) {
                this.runes =
                  (null == e
                    ? void 0
                    : e.map(function (e) {
                        return kn(kn({}, e), {
                          level: new d.Z(e.level),
                          xp: new d.Z(e.xp),
                          xpMult: new d.Z(e.xpMult || 1),
                          numSacrificed: new d.Z(e.numSacrificed || 0),
                        });
                      })) || [];
              }),
              (t.prototype.exportData = function () {
                return this.runes.map(function (e) {
                  return kn(kn({}, e), {
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
                      ((n = {
                        id: t.id,
                        level: new d.Z(0),
                        xp: new d.Z(0),
                        isActive: !1,
                        isLearning: !1,
                        xpMult: new d.Z(1),
                        numSacrificed: new d.Z(0),
                      }),
                      e.runes.push(n));
                    var r = e.dbCache[t.id],
                      i = e
                        .getLearnSpeed()
                        .mul(e.getSacrificedBonus(n.numSacrificed))
                        .mul(n.xpMult),
                      o = e.getMaxXp(r.levelRequirement, n),
                      a = o.sub(n.xp).div(i),
                      u = r.getCost
                        ? te.calcBatchAll(
                            r.getCost,
                            ha.getInstance(),
                            n.level,
                            ha.getInstance().resources.getBatchObject(),
                            new d.Z(1),
                            ma.learning.wizardOrb.getManaMult()
                          )
                        : [],
                      s = u.reduce(function (e, t) {
                        return d.Z.min(e, t.max.floor());
                      }, new d.Z("1.e+30000")),
                      c = u.reduce(function (e, t) {
                        return e && !t.isBlocked;
                      }, !0),
                      l = u.reduce(function (e, t) {
                        return Math.max(e, t.eta);
                      }, 0);
                    return kn(kn({}, t), {
                      etaNum: l,
                      isAvailable: s.greaterThanOrEqualTo(1),
                      cost: ha
                        .getInstance()
                        .resources.assertEnought(
                          u,
                          ha.getInstance().resources.getBatchObject(),
                          ha.getInstance().resources.getBatchBalanceObject()
                        ),
                      xp: X(n.xp),
                      maxXp: X(o),
                      learnEta: v(a),
                      progress: Math.min(
                        100,
                        n.xp.mul(100).div(o).toNumber()
                      ).toPrecision(3),
                      learnSpeed: X(i),
                      isBlocked: !c || !r.unlockCondition(ma),
                    });
                  });
              }),
              (t.prototype.dataToUI = function () {
                return {
                  runes: this.dataFromCache(),
                  maxRunes: this.getMaxSlots(),
                  usedSlots: this.getRunesActive(),
                  runningPreset: ma.learning.runePresets.getActiveName(),
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
                    level: new d.Z(0),
                    xp: new d.Z(0),
                    isActive: !1,
                    isLearning: !1,
                    xpMult: new d.Z(1),
                    numSacrificed: new d.Z(0),
                  }),
                  this.runes.push(t));
                var n = e.getCost
                    ? te.calcBatchAll(
                        e.getCost,
                        ha.getInstance(),
                        t.level,
                        ha.getInstance().resources.getBatchObject(),
                        new d.Z(1),
                        ma.learning.wizardOrb.getManaMult()
                      )
                    : [],
                  r = e.getGain
                    ? te.calcBatch(e.getGain, ha.getInstance(), t.level)
                    : [],
                  i = n.reduce(function (e, t) {
                    return d.Z.min(e, t.max.floor());
                  }, new d.Z("1.e+30000")),
                  o = n.reduce(function (e, t) {
                    return e && !t.isBlocked;
                  }, !0),
                  a = n.reduce(function (e, t) {
                    return Math.max(e, t.eta);
                  }, 0),
                  u = e.unlockCondition(ma) || t.level.greaterThan(0);
                u &&
                  t.level.lessThanOrEqualTo(0) &&
                  ma.newNotifications.registerNotification(
                    "learning:runes:rune:".concat(e.id)
                  );
                var s = this.getSacrificedBonus(t.numSacrificed),
                  c = this.getSacrificedBonusMult(t.numSacrificed),
                  l = this.getSacrificeReward(t),
                  p = this.getLearnSpeed().mul(s).mul(t.xpMult),
                  f = this.getMaxXp(e.levelRequirement, t),
                  g = f.sub(t.xp).div(p);
                return {
                  id: e.id,
                  name: e.name,
                  description: e.description,
                  isUnlocked: u,
                  isAvailable: i.greaterThanOrEqualTo(1),
                  cost: ha
                    .getInstance()
                    .resources.assertEnought(
                      n,
                      ha.getInstance().resources.getBatchObject(),
                      ha.getInstance().resources.getBatchBalanceObject()
                    ),
                  gain: r.map(function (e) {
                    return kn(kn({}, e), {
                      amountValue: e.amount.toString(),
                      amount: X(e.amount),
                    });
                  }),
                  progress: Math.min(
                    100,
                    t.xp.mul(100).div(f).toNumber()
                  ).toPrecision(3),
                  isBlocked: !o || !e.unlockCondition(ma),
                  etaNum: a,
                  isActive: t.isActive,
                  isLearning: t.isLearning,
                  level: Y(t.level, 2),
                  xp: X(t.xp),
                  maxXp: X(f),
                  learnEta: v(g),
                  learnSpeed: X(p),
                  haveSacrificeMult: t.numSacrificed.greaterThan(0),
                  isSacrificeAvailable: this.getSacrificeAvailable(t),
                  currentSacrificeMult: X(s),
                  currentProdMult: X(c),
                  potentialSacrificeMult: X(this.getSacrificedBonus(l)),
                  potentialProdMult: X(this.getSacrificedBonusMult(l)),
                };
              }),
              (t.prototype.getMaxSlots = function () {
                return (
                  1 +
                  ma.learning.runeUpgrades.getUpgradeLevel(o.ADD_RUNIC_TABLE) +
                  ma.learning.runeUpgrades.getUpgradeLevel(o.EXPAND_MAGIC_LIB)
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
                  ) && e.level.greaterThanOrEqualTo(150)
                );
              }),
              (t.prototype.getSacrificeReward = function (e) {
                return e.level.mul(
                  Math.pow(
                    2,
                    ma.learning.runeUpgrades.getUpgradeLevel(
                      o.EXPANDED_SACRIFICE
                    ) + ma.learning.runeUpgrades.getUpgradeLevel(o.RUNIC_SPLASH)
                  )
                );
              }),
              (t.prototype.doSacrifice = function (e) {
                var t = this.runes.find(function (t) {
                  return t.id === e;
                });
                if (
                  (t ||
                    ((t = {
                      id: e,
                      level: new d.Z(0),
                      xp: new d.Z(0),
                      isActive: !1,
                      isLearning: !1,
                      xpMult: new d.Z(1),
                      numSacrificed: new d.Z(0),
                    }),
                    this.runes.push(t)),
                  this.getSacrificeAvailable(t))
                ) {
                  for (var n = 0; n < this.runes.length; n++)
                    this.runes[n].id === e &&
                      ((this.runes[n].numSacrificed = this.getSacrificeReward(
                        this.runes[n]
                      )),
                      (this.runes[n].level = new d.Z(0))),
                      ma.city.academyUpgrades.getUpgradeLevel(
                        a.RUNE_PROTECTION
                      ) <= 0
                        ? (this.runes[n].level = new d.Z(0))
                        : (this.runes[n].level = d.Z.min(
                            this.runes[n].level,
                            Math.pow(
                              2 *
                                ma.city.academyUpgrades.getUpgradeLevel(
                                  a.RUNE_PROTECTION
                                ),
                              2
                            )
                          )),
                      (this.runes[n].isActive = !1),
                      (this.runes[n].isLearning = !1),
                      (this.runes[n].xp = new d.Z(0)),
                      (this.runes[n].xpMult = new d.Z(1));
                  (ma.statistics.stats.fastestRuneTime = ma.statistics.stats
                    .numRuneResets
                    ? Math.min(
                        ma.statistics.stats.fastestRuneTime,
                        ma.statistics.stats.timeThisRune
                      )
                    : ma.statistics.stats.timeThisRune),
                    (ma.statistics.stats.timeThisRune = 0),
                    ma.statistics.stats.numRuneResets++,
                    ma.learning.wizardOrb.reset(),
                    ma.learning.runeUpgrades.reset();
                  var i = ma.resources.getResource(r.COINS);
                  ma.resources.reset(),
                    ma.newNotifications.resetNotifications(),
                    ma.learning.runePresets.runDefault(),
                    ma.regenerateCache(),
                    ma.resources.reassertBalances(),
                    ma.city.academyUpgrades.getUpgradeLevel(
                      a.GOLD_PROTECTION
                    ) && ma.resources.setResource(r.COINS, i);
                }
              }),
              (t.prototype.applyBatch = function (e) {
                var t = this,
                  n = e
                    .filter(function (e) {
                      var t;
                      return null ===
                        (t = J.find(function (t) {
                          return t.id === e;
                        })) || void 0 === t
                        ? void 0
                        : t.unlockCondition(ma);
                    })
                    .splice(0, this.getMaxSlots());
                this.runes.forEach(function (e, r) {
                  t.runes[r].isActive = n.includes(e.id);
                });
              }),
              (t.prototype.toggleLearn = function (e) {
                if (
                  J.find(function (t) {
                    return t.id === e;
                  })
                ) {
                  var t = this.runes.findIndex(function (t) {
                    return t.id === e;
                  });
                  t < 0 &&
                    ((t = this.runes.length),
                    this.runes.push({
                      id: e,
                      level: new d.Z(0),
                      xp: new d.Z(0),
                      isActive: !1,
                      isLearning: !1,
                      xpMult: new d.Z(1),
                      numSacrificed: new d.Z(0),
                    })),
                    this.getMaxSlots() <= this.getRunesActive()
                      ? this.runes[t].isActive && (this.runes[t].isActive = !1)
                      : (this.runes[t].isActive = !this.runes[t].isActive);
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
                    : t.level) || new d.Z(0)
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
                    : t.numSacrificed) || new d.Z(0)
                );
              }),
              (t.prototype.getRuneMasteryLogarithmic = function () {
                return h(ma.personage.attributes.getAttribute(c.RUNE_MASTERY));
              }),
              (t.prototype.getMaxXpMulLog = function (e, t) {
                return t.sub(this.getRuneMasteryLogarithmic());
              }),
              (t.prototype.getMaxRunesPerXpV3 = function (e, t, n) {
                if (t.equals(0) || n.equals(0)) return new d.Z(0);
                var r = h(new d.Z(1.04)),
                  i = this.getRuneMasteryLogarithmic(),
                  o = h(t).sub(i).add(e.level.mul(r)),
                  a = h(n);
                if (a.lessThan(o)) return new d.Z(0);
                var u = a.sub(o).div(r);
                return u.isNegative() ? new d.Z(0) : d.Z.max(1, u.floor());
              }),
              (t.prototype.getMaxXp = function (e, t) {
                var n = this.getMaxXpMulLog(t, h(e)).add(
                  h(new d.Z(1.04)).mul(t.level)
                );
                return n.lessThanOrEqualTo("-1.e+12")
                  ? new d.Z("1.e-300000")
                  : g(new d.Z(10), n);
              }),
              (t.prototype.getLearnSpeed = function () {
                return ma.personage.attributes
                  .getAttribute(c.RUNE_READING)
                  .mul(
                    Math.pow(
                      1.5,
                      ma.learning.runeUpgrades.getUpgradeLevel(o.RUNIC_MEMORY)
                    )
                  )
                  .mul(
                    Math.pow(
                      2,
                      ma.learning.runeUpgrades.getUpgradeLevel(o.RUNIC_MEMORY2)
                    )
                  )
                  .mul(
                    Math.pow(
                      3,
                      ma.learning.runeUpgrades.getUpgradeLevel(
                        o.RUNIC_TABLE_ENHANCEMENT
                      )
                    )
                  )
                  .mul(ma.city.reincarnation.getBonus(z.SCHOLAR));
              }),
              (t.prototype.getSacrificedBonus = function (e) {
                return e.lessThan(100) ? new d.Z(1) : g(e.div(40), 1.4);
              }),
              (t.prototype.getSacrificedBonusMult = function (e) {
                return e.lessThan(100)
                  ? new d.Z(1)
                  : g(
                      e.div(50),
                      0.25 +
                        (ma.achievements.getAchievementComplete(
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
                    (e.runes[n].xp = new d.Z(0)));
                });
              }),
              (t.prototype.process = function (e) {
                var t = this,
                  n = !1;
                this.runes.forEach(function (r, i) {
                  if (r.isActive) {
                    var o = J.find(function (e) {
                      return e.id === r.id;
                    });
                    if (!o) throw new Error("Rune ".concat(r.id, " not found"));
                    var a = t.getMaxXp(o.levelRequirement, r),
                      u = t
                        .getLearnSpeed()
                        .mul(
                          r.xpMult
                            .mul(e)
                            .mul(t.getSacrificedBonus(r.numSacrificed))
                        );
                    if (a.lessThan(u)) {
                      t.runes[i].xpMult >
                        ma.learning.wizardOrb.getSpeedMult() &&
                        ((t.runes[i].xpMult =
                          ma.learning.wizardOrb.getSpeedMult()),
                        (u = t
                          .getLearnSpeed()
                          .mul(
                            r.xpMult
                              .mul(e)
                              .mul(t.getSacrificedBonus(r.numSacrificed))
                          )));
                      var s = t.getMaxRunesPerXpV3(r, o.levelRequirement, u),
                        c = o.getCost
                          ? te.calcBatchAll(
                              o.getCost,
                              ha.getInstance(),
                              r.level,
                              ha.getInstance().resources.getBatchObject(),
                              new d.Z("1.e+30000"),
                              ma.learning.wizardOrb.getManaMult()
                            )
                          : [],
                        l = c.reduce(function (e, t) {
                          return d.Z.min(e, t.max.floor());
                        }, new d.Z("1.e+30000"));
                      console.log(
                        "Start learn batch: ",
                        c,
                        l.toNumber(),
                        s.toNumber()
                      );
                      var p = d.Z.min(l, s);
                      if (
                        (f = o.getCost
                          ? te.calcBatchAll(
                              o.getCost,
                              ha.getInstance(),
                              r.level,
                              ha.getInstance().resources.getBatchObject(),
                              p,
                              ma.learning.wizardOrb.getManaMult()
                            )
                          : [])
                          .reduce(function (e, t) {
                            return d.Z.min(e, t.max.floor());
                          }, new d.Z("1.e+30000"))
                          .lessThan(1)
                      )
                        return;
                      return (
                        ha.getInstance().resources.subtractResourceBatch(f),
                        (r.xp = new d.Z(0)),
                        (r.level = r.level.plus(p)),
                        void (n = !0)
                      );
                    }
                    if (r.isLearning) r.xp = r.xp.plus(u);
                    else {
                      var f;
                      if (
                        (l = (f = o.getCost
                          ? te.calcBatchAll(
                              o.getCost,
                              ha.getInstance(),
                              r.level,
                              ha.getInstance().resources.getBatchObject(),
                              new d.Z(1),
                              ma.learning.wizardOrb.getManaMult()
                            )
                          : []).reduce(function (e, t) {
                          return d.Z.min(e, t.max.floor());
                        }, new d.Z("1.e+30000"))).lessThan(1)
                      )
                        return;
                      ha.getInstance().resources.subtractResourceBatch(f),
                        (t.runes[i].isLearning = !0),
                        (t.runes[i].xpMult =
                          ma.learning.wizardOrb.getSpeedMult()),
                        (n = !0);
                    }
                    r.xp.greaterThanOrEqualTo(a) &&
                      ((r.xp = new d.Z(0)),
                      (r.level = r.level.plus(1)),
                      (t.runes[i].isLearning = !1),
                      (n = !0));
                  }
                }),
                  n &&
                    (ma.resources.reassertBalances(),
                    ma.regenerateCache(),
                    ma.learning.runePresets.applyPreset());
              }),
              (t.prototype.getResourceBeingStored = function (e) {
                var t = this,
                  n = J.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getCap) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  r = [];
                return (
                  this.runes.forEach(function (i) {
                    var o = n.find(function (e) {
                      return e.id === i.id;
                    });
                    if (o && o.getCap) {
                      var a = te.calculate(
                        ma,
                        o.getCap[e],
                        t.getEffectiveLevel(i)
                      );
                      r.push({
                        label: "Rune: ".concat(o.name),
                        value: a,
                        id: "rune-".concat(o.id),
                        category: "Runes",
                      });
                    }
                  }, 0),
                  r
                );
              }),
              (t.prototype.getResourceBeingStoredMultiplier = function (e) {
                var t = this,
                  n = J.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getCapMultiplier) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  r = [];
                return (
                  this.runes.forEach(function (i) {
                    var o = n.find(function (e) {
                      return e.id === i.id;
                    });
                    if (o && o.getCapMultiplier) {
                      var a = te.calculate(
                        ma,
                        o.getCapMultiplier[e],
                        t.getEffectiveLevel(i)
                      );
                      a.equals(1) ||
                        r.push({
                          label: "Rune: ".concat(o.name),
                          value: a,
                          id: "rune-".concat(o.id),
                          category: "Runes",
                        });
                    }
                  }, 0),
                  r
                );
              }),
              (t.prototype.getMultiplier = function (e) {
                var t = this,
                  n = J.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getMultiplier) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  r = [];
                return (
                  this.runes.forEach(function (i) {
                    var o = n.find(function (e) {
                      return e.id === i.id;
                    });
                    if (o && o.getMultiplier) {
                      var a = te.calculate(
                        ma,
                        o.getMultiplier[e],
                        t.getEffectiveLevel(i)
                      );
                      a.equals(1) ||
                        r.push({
                          label: "Rune: ".concat(o.name),
                          value: a,
                          id: "rune-".concat(o.id),
                          category: "Runes",
                        });
                    }
                  }, 0),
                  r
                );
              }),
              (t.prototype.getResourceGain = function (e) {
                var t = this,
                  n = J.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getGain) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  r = [];
                return (
                  this.runes.forEach(function (i) {
                    var o = n.find(function (e) {
                      return e.id === i.id;
                    });
                    if (o && o.getGain) {
                      var a = te.calculate(
                        ma,
                        o.getGain[e],
                        t.getEffectiveLevel(i)
                      );
                      r.push({
                        label: "Rune: ".concat(o.name),
                        value: a,
                        id: "rune-".concat(o.id),
                        category: "Runes",
                      });
                    }
                  }, 0),
                  r
                );
              }),
              (t.prototype.getAttributeGained = function (e) {
                var t = this,
                  n = J.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getAttribute) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  r = [];
                return (
                  this.runes.forEach(function (i) {
                    var o = n.find(function (e) {
                      return e.id === i.id;
                    });
                    if (o && o.getAttribute) {
                      var a = te.calculate(
                        ma,
                        o.getAttribute[e],
                        t.getEffectiveLevel(i)
                      );
                      r.push({
                        label: "Rune: ".concat(o.name),
                        value: a,
                        id: "rune-".concat(o.id),
                        category: "Runes",
                      });
                    }
                  }, 0),
                  r
                );
              }),
              (t.prototype.getAttributeMultiplier = function (e) {
                var t = this,
                  n = J.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getAttributeMultiplier) ||
                    void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  r = [];
                return (
                  this.runes.forEach(function (i) {
                    var o = n.find(function (e) {
                      return e.id === i.id;
                    });
                    if (o && o.getAttributeMultiplier) {
                      var a = te.calculate(
                        ma,
                        o.getAttributeMultiplier[e],
                        t.getEffectiveLevel(i)
                      );
                      a.equals(1) ||
                        r.push({
                          label: "Rune: ".concat(o.name),
                          value: a,
                          id: "rune-".concat(o.id),
                          category: "Runes",
                        });
                    }
                  }, 0),
                  r
                );
              }),
              (t.prototype.reset = function () {
                this.runes = [];
              }),
              t
            );
          })(s),
          Wn = xn.getInstance(),
          Kn = (function () {
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
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          Xn = (function (e) {
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
                      ma.learning.runes.rescheduleRunes();
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
              Kn(t, e),
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
                return ma.resources
                  .getResourceCap(r.MANA)
                  .greaterThanOrEqualTo(8);
              }),
              (t.prototype.getSpeedMult = function () {
                return d.Z.pow(
                  new d.Z(2).mul(
                    d.Z.pow(
                      1.2,
                      ma.learning.runeUpgrades.getUpgradeLevel(o.BETTER_ORB) +
                        ma.learning.runeUpgrades.getUpgradeLevel(
                          o.ORB_MANIPULATIONS
                        )
                    )
                  ),
                  this.state.levelActive || 0
                );
              }),
              (t.prototype.getManaMult = function () {
                return d.Z.pow(4, this.state.levelActive || 0);
              }),
              (t.prototype.getCostFormula = function () {
                var e;
                return (
                  ((e = {})[r.MANA] = function (e) {
                    return {
                      A: new d.Z(5),
                      B: new d.Z(5),
                      type: y.EXPONENTIAL,
                    };
                  }),
                  e
                );
              }),
              (t.prototype.doBuild = function () {
                var e = te.calcBatchAll(
                  this.getCostFormula(),
                  ma,
                  new d.Z(this.state.levelBuilt),
                  ma.resources.getBatchObject()
                );
                e
                  .reduce(function (e, t) {
                    return d.Z.min(e, t.max.floor());
                  }, new d.Z("1.e+30000"))
                  .lessThan(1) ||
                  (ha.getInstance().resources.subtractResourceBatch(e),
                  this.state.levelBuilt++,
                  ha.getInstance().learning.runePresets.applyPreset(),
                  ma.resources.reassertBalances(),
                  ma.regenerateCache());
              }),
              (t.prototype.dataToUI = function () {
                var e = te.calcBatchAll(
                    this.getCostFormula(),
                    ma,
                    new d.Z(this.state.levelBuilt),
                    ma.resources.getBatchObject()
                  ),
                  t = e.reduce(function (e, t) {
                    return d.Z.min(e, t.max.floor());
                  }, new d.Z("1.e+30000"));
                return {
                  isUnlocked: this.unlockCond(),
                  isAvailable: t.greaterThanOrEqualTo(1),
                  maxAmplifyTier: this.state.levelBuilt,
                  currentAmplifyTier: this.state.levelActive || 0,
                  speedMult: X(this.getSpeedMult()),
                  manaMult: X(this.getManaMult()),
                  cancelRuneOnChange: this.state.cancelRuneOnChange,
                  upgradeCost: ha
                    .getInstance()
                    .resources.assertEnought(
                      e,
                      ha.getInstance().resources.getBatchObject(),
                      ha.getInstance().resources.getBatchBalanceObject()
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
          jn = Xn.getInstance(),
          qn = [
            {
              id: o.MANA_ORB,
              name: "Better Mana Orb",
              description: "Better Mana Orb, providing 25% more mana storage",
              unlockCondition: function (e) {
                return !0;
              },
              maxLevel: 10,
              getCost:
                ((re = {}),
                (re[r.MANA] = function (e) {
                  return {
                    A: new d.Z(10),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                re),
              getCapacityMultiplier:
                ((ie = {}),
                (ie[r.MANA] = function (e) {
                  return {
                    A: new d.Z(1),
                    B: new d.Z(1.25),
                    type: y.EXPONENTIAL,
                  };
                }),
                ie),
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
                ((oe = {}),
                (oe[r.MANA] = function (e) {
                  return { A: new d.Z(15), B: new d.Z(2), type: y.EXPONENTIAL };
                }),
                oe),
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
                ((ae = {}),
                (ae[r.MANA] = function (e) {
                  return { A: new d.Z(20), B: new d.Z(2), type: y.EXPONENTIAL };
                }),
                ae),
              getGainMultiplier:
                ((ue = {}),
                (ue[r.MANA] = function (e) {
                  return {
                    A: new d.Z(1),
                    B: new d.Z(1.25),
                    type: y.EXPONENTIAL,
                  };
                }),
                ue),
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
                ((se = {}),
                (se[r.MANA] = function (e) {
                  return { A: new d.Z(20), B: new d.Z(2), type: y.EXPONENTIAL };
                }),
                se),
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
                ((ce = {}),
                (ce[r.KNOWLEDGE] = function (e) {
                  return { A: new d.Z(1), B: new d.Z(2), type: y.EXPONENTIAL };
                }),
                ce),
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
                ((le = {}),
                (le[r.KNOWLEDGE] = function (e) {
                  return { A: new d.Z(40), B: new d.Z(2), type: y.EXPONENTIAL };
                }),
                le),
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
                ((de = {}),
                (de[r.MANA] = function (e) {
                  return {
                    A: new d.Z(50),
                    B: new d.Z(10),
                    type: y.EXPONENTIAL,
                  };
                }),
                de),
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
                ((pe = {}),
                (pe[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(1),
                    B: new d.Z(1.3),
                    type: y.EXPONENTIAL,
                  };
                }),
                pe),
              getCost:
                ((fe = {}),
                (fe[r.MANA] = function (e) {
                  return {
                    A: new d.Z(75),
                    B: new d.Z(10),
                    type: y.EXPONENTIAL,
                  };
                }),
                (fe[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(50),
                    B: new d.Z(10),
                    type: y.EXPONENTIAL,
                  };
                }),
                fe),
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
                ((ge = {}),
                (ge[r.MANA] = function (e) {
                  return {
                    A: new d.Z(80),
                    B: new d.Z(10),
                    type: y.EXPONENTIAL,
                  };
                }),
                (ge[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(50),
                    B: new d.Z(10),
                    type: y.EXPONENTIAL,
                  };
                }),
                ge),
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
                ((he = {}),
                (he[r.MANA] = function (e) {
                  return {
                    A: new d.Z(1e3),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                he),
              getGainMultiplier:
                ((me = {}),
                (me[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(1),
                    B: new d.Z(1.3),
                    type: y.EXPONENTIAL,
                  };
                }),
                me),
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
                ((ve = {}),
                (ve[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(100),
                    B: new d.Z(3),
                    type: y.EXPONENTIAL,
                  };
                }),
                ve),
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
                ((ye = {}),
                (ye[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(120),
                    B: new d.Z(3),
                    type: y.EXPONENTIAL,
                  };
                }),
                ye),
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
                ((Ee = {}),
                (Ee[r.MANA] = function (e) {
                  return {
                    A: new d.Z(200),
                    B: new d.Z(10),
                    type: y.EXPONENTIAL,
                  };
                }),
                (Ee[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(150),
                    B: new d.Z(10),
                    type: y.EXPONENTIAL,
                  };
                }),
                Ee),
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
                ((we = {}),
                (we[r.MANA] = function (e) {
                  return {
                    A: new d.Z(1e3),
                    B: new d.Z(10),
                    type: y.EXPONENTIAL,
                  };
                }),
                (we[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(300),
                    B: new d.Z(10),
                    type: y.EXPONENTIAL,
                  };
                }),
                we),
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
                ((Ae = {}),
                (Ae[r.COINS] = function (e) {
                  return { A: new d.Z(10), B: new d.Z(2), type: y.EXPONENTIAL };
                }),
                Ae),
              getCapacityMultiplier:
                ((Ne = {}),
                (Ne[r.COINS] = function (e) {
                  return {
                    A: new d.Z(1),
                    B: new d.Z(1.25),
                    type: y.EXPONENTIAL,
                  };
                }),
                Ne),
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
                ((Ce = {}),
                (Ce[r.MANA] = function (e) {
                  return {
                    A: new d.Z(1e4),
                    B: new d.Z(4),
                    type: y.EXPONENTIAL,
                  };
                }),
                (Ce[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(5e3),
                    B: new d.Z(4),
                    type: y.EXPONENTIAL,
                  };
                }),
                Ce),
              getGainMultiplier:
                ((Ie = {}),
                (Ie[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(1),
                    B: new d.Z(1.25),
                    type: y.EXPONENTIAL,
                  };
                }),
                Ie),
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
                ((Oe = {}),
                (Oe[r.MANA] = function (e) {
                  return {
                    A: new d.Z(1e4),
                    B: new d.Z(5),
                    type: y.EXPONENTIAL,
                  };
                }),
                (Oe[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(5e3),
                    B: new d.Z(5),
                    type: y.EXPONENTIAL,
                  };
                }),
                Oe),
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
                ((Re = {}),
                (Re[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(2e5),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                Re),
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
                ((Le = {}),
                (Le[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(1e8),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                Le),
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
                ((be = {}),
                (be[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(1e8),
                    B: new d.Z(4),
                    type: y.EXPONENTIAL,
                  };
                }),
                (be[r.COINS] = function (e) {
                  return {
                    A: new d.Z(1e3),
                    B: new d.Z(4),
                    type: y.EXPONENTIAL,
                  };
                }),
                be),
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
                ((Te = {}),
                (Te[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(2e8),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (Te[r.SPARK] = function (e) {
                  return { A: new d.Z(4), B: new d.Z(2), type: y.EXPONENTIAL };
                }),
                Te),
            },
          ],
          Yn = (function () {
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
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          Fn = function () {
            return (
              (Fn =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              Fn.apply(this, arguments)
            );
          },
          Hn = (function (e) {
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
              Yn(t, e),
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
                            return Fn({}, e);
                          })) || []),
                    void (this.autoPriorities = {})
                  );
                (this.upgrades =
                  (null === (t = null == e ? void 0 : e.upgrades) ||
                  void 0 === t
                    ? void 0
                    : t.map(function (e) {
                        return Fn({}, e);
                      })) || []),
                  (this.autoPriorities = null == e ? void 0 : e.priorities),
                  (this.viewType = e.viewType);
              }),
              (t.prototype.exportData = function () {
                return {
                  upgrades: this.upgrades.map(function (e) {
                    return Fn({}, e);
                  }),
                  priorities: this.autoPriorities,
                  viewType: this.viewType,
                };
              }),
              (t.prototype.regenerateCache = function () {
                var e = this;
                this.cachedUpgrades = qn.map(function (t) {
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
                    var n = qn.find(function (e) {
                      return e.id === t.id;
                    });
                    if (!n) return t;
                    var i = e.upgrades.find(function (e) {
                      return e.id === n.id;
                    });
                    i || ((i = { id: n.id, level: 0 }), e.upgrades.push(i));
                    var o = te.calcBatchAll(
                        n.getCost,
                        ha.getInstance(),
                        new d.Z(i.level),
                        ha.getInstance().resources.getBatchObject()
                      ),
                      a =
                        (o.reduce(function (e, t) {
                          return e && !t.isBlocked;
                        }, !0),
                        o.reduce(function (e, t) {
                          return Math.max(e, t.eta);
                        }, 0)),
                      u = o.reduce(function (e, t) {
                        return d.Z.min(e, t.max);
                      }, new d.Z("1.e+30000"));
                    return (
                      ha
                        .getInstance()
                        .resources.getResourceCap(r.MANA)
                        .greaterThanOrEqualTo(10) &&
                        i.level <= 0 &&
                        ma.newNotifications.registerNotification(
                          "learning:runes:upgrade:".concat(n.id)
                        ),
                      Fn(Fn({}, t), {
                        etaNum: a,
                        isAvailable: u.greaterThanOrEqualTo(1),
                        cost: ha
                          .getInstance()
                          .resources.assertEnought(
                            o,
                            ha.getInstance().resources.getBatchObject(),
                            ha.getInstance().resources.getBatchBalanceObject()
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
                    ha
                      .getInstance()
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
                  autoupgradeTickMax: m(this.getAutoupgradeTick()),
                  autoupgradeProgress:
                    this.autoTick / this.getAutoupgradeTick(),
                  isUnlocked: ha
                    .getInstance()
                    .resources.getResourceCap(r.MANA)
                    .greaterThanOrEqualTo(10),
                };
              }),
              (t.prototype.isAutomationUnlocked = function () {
                return ma.learning.crystals
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
                var r = te.calcBatchAll(
                    e.getCost,
                    ha.getInstance(),
                    new d.Z(n.level + t),
                    ha.getInstance().resources.getBatchObject()
                  ),
                  i = r.reduce(function (e, t) {
                    return e && !t.isBlocked;
                  }, !0),
                  o = r.reduce(function (e, t) {
                    return Math.max(e, t.eta);
                  }, 0),
                  a = r.reduce(function (e, t) {
                    return d.Z.min(e, t.max);
                  }, new d.Z("1.e+30000")),
                  u = e.unlockCondition(ma);
                return {
                  id: e.id,
                  name: e.name,
                  description: e.description,
                  isUnlocked: u,
                  isAvailable: a.greaterThanOrEqualTo(1),
                  cost: ha
                    .getInstance()
                    .resources.assertEnought(
                      r,
                      ha.getInstance().resources.getBatchObject(),
                      ha.getInstance().resources.getBatchBalanceObject()
                    ),
                  progress: a.lessThan(1)
                    ? (100 * a.toNumber()).toPrecision(3)
                    : "100",
                  isMaxedOut: !!e.maxLevel && e.maxLevel <= n.level,
                  maxLevel: e.maxLevel,
                  level: n.level + t,
                  isBlocked: !i,
                  etaNum: o,
                  priority: this.autoPriorities[e.id] || 10,
                };
              }),
              (t.prototype.doUpgrade = function (e, t) {
                void 0 === t && (t = 1);
                var n = qn.find(function (t) {
                  return t.id === e;
                });
                if ((console.log("[upgrade] db", n), n)) {
                  var r = this.upgrades.findIndex(function (t) {
                    return t.id === e;
                  });
                  if (r < 0)
                    (r = this.upgrades.length),
                      this.upgrades.push({ id: e, level: 0 });
                  else if (n.maxLevel && this.upgrades[r].level >= n.maxLevel)
                    return;
                  var i = te
                    .calcBatchAll(
                      n.getCost,
                      ha.getInstance(),
                      new d.Z(this.upgrades[r].level),
                      ha.getInstance().resources.getBatchObject(),
                      new d.Z(t)
                    )
                    .reduce(function (e, t) {
                      return d.Z.min(e, t.max.floor());
                    }, new d.Z("1.e+30000"));
                  if (
                    (console.log("[upgrade] mx: ", i.toNumber()),
                    !i.lessThan(1))
                  ) {
                    var o = d.Z.min(t, i),
                      a = te.calcBatchAll(
                        n.getCost,
                        ha.getInstance(),
                        new d.Z(this.upgrades[r].level),
                        ha.getInstance().resources.getBatchObject(),
                        o
                      );
                    return (
                      (this.upgrades[r].level =
                        this.upgrades[r].level + o.toNumber()),
                      console.log("costs: ", a, o.toNumber()),
                      ha.getInstance().resources.subtractResourceBatch(a),
                      ha.getInstance().learning.runePresets.applyPreset(),
                      ma.resources.reassertBalances(),
                      ma.regenerateCache(),
                      !0
                    );
                  }
                }
              }),
              (t.prototype.getGain = function (e) {
                var t = qn.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getGain) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  n = [];
                return (
                  this.upgrades.forEach(function (r) {
                    var i = t.find(function (e) {
                      return e.id === r.id;
                    });
                    if (i && i.getGain) {
                      var o = te.calculate(ma, i.getGain[e], new d.Z(r.level));
                      n.push({
                        label: "Upgrade: ".concat(i.name),
                        value: o,
                        id: "upgrade-".concat(i.id),
                        category: "Upgrades",
                      });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getGainMultiplier = function (e) {
                var t = qn.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getGainMultiplier) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  n = [];
                return (
                  this.upgrades.forEach(function (r) {
                    var i = t.find(function (e) {
                      return e.id === r.id;
                    });
                    if (i && i.getGainMultiplier) {
                      var o = te.calculate(
                        ma,
                        i.getGainMultiplier[e],
                        new d.Z(r.level)
                      );
                      o &&
                        !o.eq(1) &&
                        n.push({
                          label: "Upgrade: ".concat(i.name),
                          value: o,
                          id: "upgrade-".concat(i.id),
                          category: "Upgrades",
                        });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getCraftingMultiplier = function () {
                var e = qn.filter(function (e) {
                    return !!e.getCraftingMultiplier;
                  }),
                  t = [];
                return (
                  this.upgrades.forEach(function (n) {
                    var r = e.find(function (e) {
                      return e.id === n.id;
                    });
                    if (r && r.getCraftingMultiplier) {
                      var i = te.calculate(
                          ma,
                          r.getCraftingMultiplier,
                          new d.Z(n.level)
                        ),
                        o = i;
                      i &&
                        t.push({
                          label: "Upgrade: ".concat(r.name),
                          value: o,
                          id: "upgrade-".concat(r.id),
                          category: "Upgrades",
                        });
                    }
                  }, 0),
                  t
                );
              }),
              (t.prototype.getCapacity = function (e) {
                var t = qn.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getCapacityEffect) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  n = [];
                return (
                  this.upgrades.forEach(function (r) {
                    var i = t.find(function (e) {
                      return e.id === r.id;
                    });
                    if (i && i.getCapacityEffect) {
                      var o = te.calculate(
                        ma,
                        i.getCapacityEffect[e],
                        new d.Z(r.level)
                      );
                      n.push({
                        label: "Upgrade: ".concat(i.name),
                        value: o,
                        id: "upgrade-".concat(i.id),
                        category: "Upgrades",
                      });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getCapacityMult = function (e) {
                var t = qn.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getCapacityMultiplier) ||
                    void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  n = [];
                return (
                  this.upgrades.forEach(function (r) {
                    var i = t.find(function (e) {
                      return e.id === r.id;
                    });
                    if (i && i.getCapacityMultiplier) {
                      var o = te.calculate(
                        ma,
                        i.getCapacityMultiplier[e],
                        new d.Z(r.level)
                      );
                      o &&
                        n.push({
                          label: "Upgrade: ".concat(i.name),
                          value: o,
                          id: "upgrade-".concat(i.id),
                          category: "Upgrades",
                        });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.process = function (e) {
                if (
                  ha.getInstance().settings.turnOnAutoupgrade &&
                  !ha
                    .getInstance()
                    .learning.crystals.getCrystalLevel("lazy")
                    .lessThanOrEqualTo(0)
                ) {
                  var t = Math.max(this.getAutoupgradeTick(), 3 * e);
                  if (((this.autoTick += e), !(this.autoTick < t))) {
                    var n = 1;
                    t < 3 * e && (n = Math.max(1, Math.round((3 * e) / t))),
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
                      ? this.doUpgrade(r[0].id, n)
                      : ma.learning.wizardOrb.doBuild();
                  }
                }
              }),
              (t.prototype.reset = function () {
                this.upgrades = [];
              }),
              t
            );
          })(s),
          Vn = Hn.getInstance(),
          zn = [
            {
              id: "basic",
              name: "Source of Mana",
              description:
                "Provides some static bonus to your mana cap and generation",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(o.CRYSTALS) > 0;
              },
              getGain:
                ((Ze = {}),
                (Ze[r.MANA] = function (e) {
                  return { A: new d.Z(0.4), B: new d.Z(0), type: y.LINEAR };
                }),
                Ze),
              getCap:
                ((Se = {}),
                (Se[r.MANA] = function (e) {
                  return { A: new d.Z(4), B: new d.Z(0), type: y.LINEAR };
                }),
                Se),
              getCost:
                ((Pe = {}),
                (Pe[r.MANA] = function (e) {
                  return {
                    A: new d.Z(200),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (Pe[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(100),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                Pe),
            },
            {
              id: "wise",
              name: "Wise Crystal",
              description: "Consists of knowledge...",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(o.CRYSTALS) > 0;
              },
              getMultiplier:
                ((Ue = {}),
                (Ue[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(1),
                    B: new d.Z(1.2),
                    type: y.EXPONENTIAL,
                  };
                }),
                Ue),
              getCapMultiplier:
                ((Me = {}),
                (Me[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(1),
                    B: new d.Z(1.2),
                    type: y.EXPONENTIAL,
                  };
                }),
                Me),
              getCost:
                ((Be = {}),
                (Be[r.MANA] = function (e) {
                  return {
                    A: new d.Z(500),
                    B: new d.Z(4),
                    type: y.EXPONENTIAL,
                  };
                }),
                (Be[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(200),
                    B: new d.Z(4),
                    type: y.EXPONENTIAL,
                  };
                }),
                Be),
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
                ((Ge = {}),
                (Ge[r.MANA] = function (e) {
                  return {
                    A: new d.Z(1e4),
                    B: new d.Z(4),
                    type: y.EXPONENTIAL,
                  };
                }),
                (Ge[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(2e3),
                    B: new d.Z(4),
                    type: y.EXPONENTIAL,
                  };
                }),
                Ge),
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
                ((_e = {}),
                (_e[r.MANA] = function (e) {
                  return {
                    A: new d.Z(1e4),
                    B: new d.Z(4),
                    type: y.EXPONENTIAL,
                  };
                }),
                (_e[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(2e3),
                    B: new d.Z(4),
                    type: y.EXPONENTIAL,
                  };
                }),
                _e),
              getCapMultiplier:
                ((De = {}),
                (De[r.COINS] = function (e) {
                  return {
                    A: new d.Z(1),
                    B: new d.Z(1.5),
                    type: y.EXPONENTIAL,
                  };
                }),
                De),
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
                ((ke = {}),
                (ke[r.MANA] = function (e) {
                  return {
                    A: new d.Z(1e4),
                    B: new d.Z(4),
                    type: y.EXPONENTIAL,
                  };
                }),
                (ke[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(2e5),
                    B: new d.Z(4),
                    type: y.EXPONENTIAL,
                  };
                }),
                ke),
              getCapMultiplier:
                ((xe = {}),
                (xe[r.MANA] = function (e) {
                  return {
                    A: new d.Z(1),
                    B: new d.Z(1.2),
                    type: y.EXPONENTIAL,
                  };
                }),
                xe),
            },
            {
              id: "wellness-crystal",
              name: "Wellness Crystal",
              description: "Generates some coins passively",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(o.CRYSTALS) > 0 &&
                  e.city.academyUpgrades.getUpgradeLevel(a.WELLNESS_CRYSTAL) > 0
                );
              },
              getCost:
                ((We = {}),
                (We[r.MANA] = function (e) {
                  return {
                    A: new d.Z("1.e+9"),
                    B: new d.Z(4),
                    type: y.EXPONENTIAL,
                  };
                }),
                (We[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z("4.e+9"),
                    B: new d.Z(4),
                    type: y.EXPONENTIAL,
                  };
                }),
                We),
              getGain:
                ((Ke = {}),
                (Ke[r.COINS] = function (e) {
                  return {
                    A: new d.Z(1.4).pow(
                      e.learning.crystals.getCrystalLevel("wellness-crystal")
                    ),
                    B: new d.Z(0),
                    type: y.LINEAR,
                  };
                }),
                Ke),
            },
          ],
          Jn = (function () {
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
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          Qn = function () {
            return (
              (Qn =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              Qn.apply(this, arguments)
            );
          },
          $n = (function (e) {
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
              Jn(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                this.crystals =
                  (null == e
                    ? void 0
                    : e.map(function (e) {
                        return Qn(Qn({}, e), { level: new d.Z(e.level) });
                      })) || [];
              }),
              (t.prototype.exportData = function () {
                return this.crystals.map(function (e) {
                  return Qn(Qn({}, e), { level: e.level.toPrecision(18) });
                });
              }),
              (t.prototype.dataToUI = function () {
                var e = this,
                  t = zn.map(function (t) {
                    return e.processToUI(t);
                  });
                return {
                  isUnlocked:
                    ma.learning.runeUpgrades.getUpgradeLevel(o.CRYSTALS) > 0 ||
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
                  ((t = { id: e.id, level: new d.Z(0) }),
                  this.crystals.push(t));
                var n = e.getCost
                    ? te.calcBatchAll(
                        e.getCost,
                        ha.getInstance(),
                        t.level,
                        ha.getInstance().resources.getBatchObject(),
                        new d.Z(1)
                      )
                    : [],
                  r = e.getGain
                    ? te.calcBatch(e.getGain, ha.getInstance(), t.level.plus(1))
                    : [],
                  i = e.getMultiplier
                    ? te.calcBatch(
                        e.getMultiplier,
                        ha.getInstance(),
                        t.level.plus(1)
                      )
                    : [],
                  o = e.getCap
                    ? te.calcBatch(e.getCap, ha.getInstance(), t.level.plus(1))
                    : [],
                  a = e.getCapMultiplier
                    ? te.calcBatch(
                        e.getCapMultiplier,
                        ha.getInstance(),
                        t.level.plus(1)
                      )
                    : [],
                  u = n.reduce(function (e, t) {
                    return d.Z.min(e, t.max.floor());
                  }, new d.Z("1.e+30000")),
                  s = n.reduce(function (e, t) {
                    return e && !t.isBlocked;
                  }, !0),
                  c = n.reduce(function (e, t) {
                    return Math.max(e, t.eta);
                  }, 0),
                  l = e.unlockCondition(ma) || t.level.greaterThan(0);
                return (
                  l &&
                    t.level.lessThanOrEqualTo(0) &&
                    ma.newNotifications.registerNotification(
                      "learning:crystals:crystal:".concat(e.id)
                    ),
                  {
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    isUnlocked: l,
                    isAvailable: u.greaterThanOrEqualTo(1),
                    cost: ha
                      .getInstance()
                      .resources.assertEnought(
                        n,
                        ha.getInstance().resources.getBatchObject(),
                        ha.getInstance().resources.getBatchBalanceObject()
                      ),
                    gain: r.map(function (e) {
                      return Qn(Qn({}, e), {
                        amountValue: e.amount.toString(),
                        amount: X(e.amount),
                      });
                    }),
                    progress: d.Z.min(1, u.mul(100)).toNumber().toPrecision(3),
                    isBlocked: !s,
                    etaNum: c,
                    level: Y(t.level, 2),
                    gainMult: i.map(function (e) {
                      return Qn(Qn({}, e), {
                        amountValue: e.amount.toString(),
                        amount: X(e.amount),
                      });
                    }),
                    cap: o.map(function (e) {
                      return Qn(Qn({}, e), {
                        amountValue: e.amount.toString(),
                        amount: X(e.amount),
                      });
                    }),
                    capMult: a.map(function (e) {
                      return Qn(Qn({}, e), {
                        amountValue: e.amount.toString(),
                        amount: X(e.amount),
                      });
                    }),
                  }
                );
              }),
              (t.prototype.purchaseCrystal = function (e) {
                var t = zn.find(function (t) {
                  return t.id === e;
                });
                if (t) {
                  var n = this.crystals.findIndex(function (t) {
                    return t.id === e;
                  });
                  n < 0 &&
                    ((n = this.crystals.length),
                    this.crystals.push({ id: e, level: new d.Z(0) }));
                  var r = te.calcBatchAll(
                      t.getCost,
                      ha.getInstance(),
                      new d.Z(this.crystals[n].level),
                      ha.getInstance().resources.getBatchObject()
                    ),
                    i = r.reduce(function (e, t) {
                      return d.Z.min(e, t.max.floor());
                    }, new d.Z("1.e+30000"));
                  console.log("[upgrade] mx: ", i.toNumber()),
                    i.lessThan(1) ||
                      ((this.crystals[n].level =
                        this.crystals[n].level.plus(1)),
                      ha.getInstance().resources.subtractResourceBatch(r),
                      console.log("costs: ", r),
                      ma.regenerateCache(),
                      ma.resources.reassertBalances());
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
                    : t.level) || new d.Z(0)
                );
              }),
              (t.prototype.process = function (e) {}),
              (t.prototype.getResourceBeingStored = function (e) {
                var t = zn.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getCap) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  n = [];
                return (
                  this.crystals.forEach(function (r) {
                    var i = t.find(function (e) {
                      return e.id === r.id;
                    });
                    if (i && i.getCap) {
                      var o = te.calculate(ma, i.getCap[e], r.level);
                      o.equals(0) ||
                        n.push({
                          label: "Crystal: ".concat(i.name),
                          value: o,
                          id: "crystal-".concat(i.id),
                          category: "Crystals",
                        });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getResourceBeingStoredMultiplier = function (e) {
                var t = zn.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getCapMultiplier) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  n = [];
                return (
                  this.crystals.forEach(function (r) {
                    var i = t.find(function (e) {
                      return e.id === r.id;
                    });
                    if (i && i.getCapMultiplier) {
                      var o = te.calculate(ma, i.getCapMultiplier[e], r.level);
                      o.equals(1) ||
                        n.push({
                          label: "Crystal: ".concat(i.name),
                          value: o,
                          id: "crystal-".concat(i.id),
                          category: "Crystals",
                        });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getMultiplier = function (e) {
                var t = zn.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getMultiplier) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  n = [];
                return (
                  this.crystals.forEach(function (r) {
                    var i = t.find(function (e) {
                      return e.id === r.id;
                    });
                    if (i && i.getMultiplier) {
                      var o = te.calculate(ma, i.getMultiplier[e], r.level);
                      o.equals(1) ||
                        n.push({
                          label: "Crystal: ".concat(i.name),
                          value: o,
                          id: "crystal-".concat(i.id),
                          category: "Crystals",
                        });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getResourceGain = function (e) {
                var t = zn.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getGain) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  n = [];
                return (
                  this.crystals.forEach(function (r) {
                    var i = t.find(function (e) {
                      return e.id === r.id;
                    });
                    if (i && i.getGain) {
                      var o = te.calculate(ma, i.getGain[e], r.level);
                      o.equals(0) ||
                        n.push({
                          label: "Crystal: ".concat(i.name),
                          value: o,
                          id: "crystal-".concat(i.id),
                          category: "Crystals",
                        });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getAttributeGained = function (e) {
                var t = zn.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getAttribute) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  n = [];
                return (
                  this.crystals.forEach(function (r) {
                    var i = t.find(function (e) {
                      return e.id === r.id;
                    });
                    if (i && i.getAttribute) {
                      var o = te.calculate(ma, i.getAttribute[e], r.level);
                      n.push({
                        label: "Crystal: ".concat(i.name),
                        value: o,
                        id: "crystal-".concat(i.id),
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
          er = $n.getInstance(),
          tr = (function () {
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
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          nr = function () {
            return (
              (nr =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              nr.apply(this, arguments)
            );
          },
          rr = (function (e) {
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
              tr(t, e),
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
                var t = J.filter(function (e) {
                  return (
                    e.unlockCondition(ma) ||
                    ma.learning.runes.runes.find(function (t) {
                      return t.id === e.id;
                    })
                  );
                }).reduce(function (e, t) {
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
                    ha.getInstance().statistics.stats.numRuneResets > 0,
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
                  (e = nr(nr({}, e), { id: "".concat(Math.random()) })),
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
                if (ma.statistics.stats.numRuneResets) {
                  var e = this.presets.find(function (e) {
                    return e.isDefault;
                  });
                  e && ((this.active = e.id), this.applyPreset());
                }
              }),
              (t.prototype.getActiveName = function () {
                var e = this;
                if (this.active && ma.statistics.stats.numRuneResets) {
                  var t = this.presets.find(function (t) {
                    return t.id === e.active;
                  });
                  if (t) return t.name;
                }
              }),
              (t.prototype.applyPreset = function () {
                var e = this;
                if (this.active && ma.statistics.stats.numRuneResets) {
                  var t = this.presets.find(function (t) {
                    return t.id === e.active;
                  });
                  if (t) {
                    ma.learning.runes.applyBatch(
                      t.runes.map(function (e) {
                        return e.id;
                      })
                    );
                    var n = ma.learning.wizardOrb.state.levelActive;
                    (ma.learning.wizardOrb.state.levelActive = Math.min(
                      ma.learning.wizardOrb.state.levelBuilt,
                      t.orbLevel
                    )),
                      n !== ma.learning.wizardOrb.state.levelActive &&
                        ma.learning.wizardOrb.state.cancelRuneOnChange &&
                        (console.log(
                          "rescheduling: ",
                          n,
                          ma.learning.wizardOrb.state.levelActive
                        ),
                        ma.learning.runes.rescheduleRunes());
                  }
                }
              }),
              t
            );
          })(s).getInstance(),
          ir = (function () {
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
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          or = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.runes = Wn),
                (t.wizardOrb = jn),
                (t.runeUpgrades = Vn),
                (t.crystals = er),
                (t.runePresets = rr),
                t
              );
            }
            return (
              ir(t, e),
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
                this.runes.process(e), this.runeUpgrades.process(e);
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
          ar = function (e, t) {
            var n = {};
            for (var r in e) n[r] = t(e[r]);
            return n;
          },
          ur = (function () {
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
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          sr = function () {
            return (
              (sr =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              sr.apply(this, arguments)
            );
          },
          cr = (function (e) {
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
              ur(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                this.stored = ar(e.stored, function (e) {
                  return new d.Z(e);
                });
              }),
              (t.prototype.exportData = function () {
                return {
                  stored: ar(this.stored, function (e) {
                    return e.toPrecision(18);
                  }),
                };
              }),
              (t.prototype.dataToUI = function () {
                var e = this;
                return {
                  attributes: Q.map(function (t) {
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
                      r,
                      i,
                      o,
                      a,
                      u,
                      s,
                      l,
                      p,
                      f =
                        (((t = {})[c.RUNE_READING] = {
                          linear: [
                            {
                              id: "basic",
                              label: "Basic",
                              value: new d.Z(1),
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
                              value: new d.Z(1),
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
                              value: new d.Z(1),
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
                              value: new d.Z(1),
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
                              value: new d.Z(1),
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
                              value: new d.Z(1),
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
                              value: new d.Z(1),
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
                              value: new d.Z(1),
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
                              value: new d.Z(1),
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
                              value: new d.Z(1),
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
                        ma.learning.runes.getAttributeGained(g)
                      ),
                        (r = f[g].multiplier).push.apply(
                          r,
                          ma.learning.runes.getAttributeMultiplier(g)
                        ),
                        (i = f[g].linear).push.apply(
                          i,
                          ma.city.actions.getAttributeProduced(g)
                        ),
                        (o = f[g].multiplier).push.apply(
                          o,
                          ma.city.actions.getAttributeMultiplier(g)
                        ),
                        (a = f[g].linear).push.apply(
                          a,
                          ma.construction.structures.getAttributeProduced(g)
                        ),
                        (u = f[g].multiplier).push.apply(
                          u,
                          ma.construction.structures.getAttributeMultiplier(g)
                        ),
                        (s = f[g].linear).push.apply(
                          s,
                          ma.achievements.getAttributeGain(g)
                        ),
                        (l = f[g].multiplier).push.apply(
                          l,
                          ma.achievements.getAttributeMultiplier(g)
                        ),
                        (p = f[g].multiplier).push.apply(
                          p,
                          ma.city.mercenaries.getAttributeMultiplier(g)
                        );
                    return f;
                  })(),
                  n = {};
                Q.forEach(function (r) {
                  var i, o, a;
                  if (r.unlockCondition(ma)) {
                    n[r.id] = { income: [], multiplier: [], consumption: [] };
                    var u =
                        null === (i = t[r.id].linear) || void 0 === i
                          ? void 0
                          : i.reduce(function (e, t) {
                              return e.plus(t.value);
                            }, new d.Z(0)),
                      s =
                        null === (o = t[r.id].multiplier) || void 0 === o
                          ? void 0
                          : o.reduce(function (e, t) {
                              return e.mul(t.value);
                            }, new d.Z(1)),
                      c =
                        (null === (a = t[r.id].consumption) || void 0 === a
                          ? void 0
                          : a.reduce(function (e, t) {
                              return e.plus(t.value);
                            }, new d.Z(0))) || new d.Z(0);
                    (e.attributesEffects[r.id] = new d.Z(u.mul(s)).sub(c)),
                      (n[r.id].income = t[r.id].linear
                        .filter(function (e) {
                          return e.value;
                        })
                        .map(function (e) {
                          return sr(sr({}, e), {
                            value: "+".concat(e.value.toPrecision(4)),
                          });
                        })),
                      (n[r.id].multiplier = t[r.id].multiplier
                        .filter(function (e) {
                          return 1 !== e.value;
                        })
                        .map(function (e) {
                          return sr(sr({}, e), {
                            value: "x".concat(e.value.toPrecision(4)),
                          });
                        })),
                      (n[r.id].consumption = t[r.id].consumption
                        .filter(function (e) {
                          return e.value;
                        })
                        .map(function (e) {
                          return sr(sr({}, e), {
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
                  r = e.unlockCondition(ma);
                return {
                  id: e.id,
                  name: e.name,
                  isUnlocked: r,
                  amount: X(
                    null !== (t = this.attributesEffects[e.id]) && void 0 !== t
                      ? t
                      : new d.Z(0)
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
                return this.attributesEffects[e] || new d.Z(0);
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
          lr = cr.getInstance(),
          dr = (function () {
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
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          pr = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (t.attributes = lr), t;
            }
            return (
              dr(t, e),
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
            (e.CONDENSE_STASHES = "condense_stashes"),
            (e.CONJURE_SPARK = "conjure_spark"),
            (e.CONJURE_WOOD = "conjure_wood"),
            (e.CONJURE_STONE = "conjure_stone"),
            (e.CONJURE_IRON = "conjure_iron"),
            (e.CRAFT = "craft");
        })(Xe || (Xe = {}));
        var fr,
          gr,
          hr,
          mr,
          vr,
          yr,
          Er,
          wr,
          Ar,
          Nr,
          Cr,
          Ir,
          Or,
          Rr,
          Lr,
          br,
          Tr,
          Zr,
          Sr,
          Pr,
          Ur,
          Mr,
          Br,
          Gr,
          _r,
          Dr,
          kr,
          xr,
          Wr,
          Kr,
          Xr,
          jr,
          qr,
          Yr,
          Fr,
          Hr,
          Vr,
          zr,
          Jr,
          Qr,
          $r,
          ei,
          ti,
          ni,
          ri,
          ii,
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
          hi,
          mi,
          vi,
          yi,
          Ei,
          wi,
          Ai,
          Ni = [
            {
              id: Xe.CLEAN_STREETS,
              name: "Clean Streets",
              description: "",
              unlockCondition: function (e) {
                return !0;
              },
              effortRequired: new d.Z(3),
              attributesEffortEffect: ((je = {}), (je[c.STRENGTH] = 1), je),
              tags: ["physical", "actions", "coins"],
              baseResourcePerCast:
                ((qe = {}), (qe[r.COINS] = new d.Z(0.1)), qe),
              baseCostPerCast: ((Ye = {}), (Ye[r.ENERGY] = new d.Z(0.5)), Ye),
              xpGain: new d.Z("5"),
              getDiminishReturnEffect: function (e) {
                return new d.Z(1);
              },
            },
            {
              id: Xe.DIG_CHANNELS,
              name: "Dig Channels",
              description: "",
              unlockCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.STRENGTH)
                  .greaterThan(10);
              },
              effortRequired: new d.Z(50),
              attributesEffortEffect: ((Fe = {}), (Fe[c.STRENGTH] = 1), Fe),
              tags: ["physical", "actions", "coins"],
              baseResourcePerCast:
                ((He = {}), (He[r.COINS] = new d.Z(0.6)), He),
              baseCostPerCast: ((Ve = {}), (Ve[r.ENERGY] = new d.Z(1.5)), Ve),
              xpGain: new d.Z("100"),
              getDiminishReturnEffect: function (e) {
                return new d.Z(1);
              },
            },
            {
              id: Xe.CARE_BAGS,
              name: "Carry Bags",
              description: "",
              unlockCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.STRENGTH)
                  .greaterThan(1e3);
              },
              effortRequired: new d.Z(500),
              attributesEffortEffect: ((ze = {}), (ze[c.STRENGTH] = 1), ze),
              tags: ["physical", "actions", "coins"],
              baseResourcePerCast: ((Je = {}), (Je[r.COINS] = new d.Z(4)), Je),
              baseCostPerCast: ((Qe = {}), (Qe[r.ENERGY] = new d.Z(5)), Qe),
              xpGain: new d.Z("1000"),
              getDiminishReturnEffect: function (e) {
                return new d.Z(1);
              },
            },
            {
              id: Xe.LABOUR,
              name: "Labour",
              description: "",
              unlockCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.STRENGTH)
                  .greaterThan(1e5);
              },
              effortRequired: new d.Z(5e3),
              attributesEffortEffect: (($e = {}), ($e[c.STRENGTH] = 1), $e),
              tags: ["physical", "actions", "coins"],
              baseResourcePerCast: ((et = {}), (et[r.COINS] = new d.Z(32)), et),
              baseCostPerCast: ((tt = {}), (tt[r.ENERGY] = new d.Z(15)), tt),
              xpGain: new d.Z("10000"),
              getDiminishReturnEffect: function (e) {
                return new d.Z(1);
              },
            },
            {
              id: Xe.FARMER,
              name: "Farmer",
              description: "",
              unlockCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.STRENGTH)
                  .greaterThan("1.e+8");
              },
              effortRequired: new d.Z(5e4),
              attributesEffortEffect: ((nt = {}), (nt[c.STRENGTH] = 1), nt),
              tags: ["physical", "actions", "coins"],
              baseResourcePerCast:
                ((rt = {}), (rt[r.COINS] = new d.Z(160)), rt),
              baseCostPerCast: ((it = {}), (it[r.ENERGY] = new d.Z(50)), it),
              xpGain: new d.Z("100000"),
              getDiminishReturnEffect: function (e) {
                return new d.Z(1);
              },
            },
            {
              id: Xe.QUARRYMAN,
              name: "Quarryman",
              description: "",
              unlockCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.STRENGTH)
                  .greaterThan("1.e+12");
              },
              effortRequired: new d.Z(5e5),
              attributesEffortEffect: ((ot = {}), (ot[c.STRENGTH] = 1), ot),
              tags: ["physical", "actions", "coins"],
              baseResourcePerCast:
                ((at = {}), (at[r.COINS] = new d.Z(800)), at),
              baseCostPerCast: ((ut = {}), (ut[r.ENERGY] = new d.Z(150)), ut),
              xpGain: new d.Z("1.e+6"),
              getDiminishReturnEffect: function (e) {
                return new d.Z(1);
              },
            },
            {
              id: Xe.MINER,
              name: "Miner",
              description: "",
              unlockCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.STRENGTH)
                  .greaterThan("1.e+18");
              },
              effortRequired: new d.Z(5e6),
              attributesEffortEffect: ((st = {}), (st[c.STRENGTH] = 1), st),
              tags: ["physical", "actions", "coins"],
              baseResourcePerCast:
                ((ct = {}), (ct[r.COINS] = new d.Z(4e3)), ct),
              baseCostPerCast: ((lt = {}), (lt[r.ENERGY] = new d.Z(450)), lt),
              xpGain: new d.Z("1.e+7"),
              getDiminishReturnEffect: function (e) {
                return new d.Z(1);
              },
            },
            {
              id: Xe.HEAD_MINER,
              name: "Head Miner",
              description: "",
              unlockCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.STRENGTH)
                  .greaterThan("1.e+25");
              },
              effortRequired: new d.Z(5e7),
              attributesEffortEffect: ((dt = {}), (dt[c.STRENGTH] = 1), dt),
              tags: ["physical", "actions", "coins"],
              baseResourcePerCast:
                ((pt = {}), (pt[r.COINS] = new d.Z(2e4)), pt),
              baseCostPerCast: ((ft = {}), (ft[r.ENERGY] = new d.Z(1350)), ft),
              xpGain: new d.Z("1.e+8"),
              getDiminishReturnEffect: function (e) {
                return new d.Z(1);
              },
            },
            {
              id: Xe.BUILDER,
              name: "Builder",
              description: "",
              unlockCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.STRENGTH)
                  .greaterThan("1.e+36");
              },
              effortRequired: new d.Z(5e8),
              attributesEffortEffect: ((gt = {}), (gt[c.STRENGTH] = 1), gt),
              tags: ["physical", "actions", "coins"],
              baseResourcePerCast:
                ((ht = {}), (ht[r.COINS] = new d.Z(1e5)), ht),
              baseCostPerCast: ((mt = {}), (mt[r.ENERGY] = new d.Z(4050)), mt),
              xpGain: new d.Z("1.e+10"),
              getDiminishReturnEffect: function (e) {
                return new d.Z(1);
              },
            },
            {
              id: Xe.REST,
              name: "Rest",
              description: "",
              unlockCondition: function (e) {
                return !0;
              },
              effortRequired: new d.Z(1),
              attributesEffortEffect: ((vt = {}), (vt[c.VITALITY] = 1), vt),
              tags: ["physical", "actions", "energy"],
              baseResourcePerCast:
                ((yt = {}), (yt[r.ENERGY] = new d.Z(0.2)), yt),
              xpGain: new d.Z("1"),
              getDiminishReturnEffect: function (e) {
                return new d.Z(1);
              },
            },
            {
              id: Xe.PUSHUP,
              name: "Push Up",
              description: "Train your physical abilities",
              unlockCondition: function (e) {
                return !0;
              },
              effortRequired: new d.Z(5),
              attributesEffortEffect:
                ((Et = {}),
                (Et[c.VITALITY] = 0.75),
                (Et[c.STRENGTH] = 0.25),
                Et),
              tags: ["physical", "actions", "training", "strength"],
              baseAttributePerCats:
                ((wt = {}), (wt[c.STRENGTH] = new d.Z(0.1)), wt),
              baseCostPerCast: ((At = {}), (At[r.ENERGY] = new d.Z(1)), At),
              xpGain: new d.Z("25"),
              getDiminishReturnEffect: function (e) {
                return new d.Z(1.01);
              },
            },
            {
              id: Xe.BREATH,
              name: "Breath Techniques",
              description: "Train your vitality",
              unlockCondition: function (e) {
                return !0;
              },
              effortRequired: new d.Z(5),
              attributesEffortEffect:
                ((Nt = {}), (Nt[c.VITALITY] = 0.5), (Nt[c.STRENGTH] = 0.5), Nt),
              tags: ["physical", "actions", "training", "vitality"],
              baseAttributePerCats:
                ((Ct = {}), (Ct[c.VITALITY] = new d.Z(0.1)), Ct),
              baseCostPerCast: ((It = {}), (It[r.ENERGY] = new d.Z(1)), It),
              xpGain: new d.Z("25"),
              getDiminishReturnEffect: function (e) {
                return new d.Z(1.01);
              },
            },
            {
              id: Xe.INVESTIGATE_WORLD,
              name: "Investigate World",
              description:
                "Learn more about surroundings and place where you are living",
              unlockCondition: function (e) {
                return !0;
              },
              effortRequired: new d.Z(10),
              attributesEffortEffect:
                ((Ot = {}),
                (Ot[c.VITALITY] = 0.75),
                (Ot[c.STRENGTH] = 0.25),
                Ot),
              tags: ["mental", "actions", "training", "intellect"],
              baseAttributeMultiplierPerCast:
                ((Rt = {}), (Rt[c.RUNE_READING] = new d.Z(0.1)), Rt),
              baseCostPerCast: ((Lt = {}), (Lt[r.ENERGY] = new d.Z(1)), Lt),
              xpGain: new d.Z("50"),
              getDiminishReturnEffect: function (e) {
                return new d.Z(1.01);
              },
            },
            {
              id: Xe.TRAIN_ENDURANCE,
              name: "Train Endurance",
              description: "Take endurance training at local gladiators school",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.TRAINING_CHAMBERS) >
                  0
                );
              },
              effortRequired: new d.Z(1e5),
              attributesEffortEffect:
                ((bt = {}),
                (bt[c.VITALITY] = 0.75),
                (bt[c.STRENGTH] = 0.25),
                bt),
              tags: ["physical", "actions", "training", "vitality"],
              baseAttributeMultiplierPerCast:
                ((Tt = {}), (Tt[c.VITALITY] = new d.Z(0.1)), Tt),
              baseCostPerCast:
                ((Zt = {}),
                (Zt[r.ENERGY] = new d.Z(10)),
                (Zt[r.COINS] = new d.Z(10)),
                Zt),
              xpGain: new d.Z("1500"),
              getDiminishReturnEffect: function (e) {
                return new d.Z(1.01);
              },
            },
            {
              id: Xe.TRAIN_STRENGTH,
              name: "Train Strength",
              description: "Take strength training at local gladiators school",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.TRAINING_CHAMBERS) >
                  0
                );
              },
              effortRequired: new d.Z(1e5),
              attributesEffortEffect:
                ((St = {}),
                (St[c.VITALITY] = 0.75),
                (St[c.STRENGTH] = 0.25),
                St),
              tags: ["physical", "actions", "training", "strength"],
              baseAttributeMultiplierPerCast:
                ((Pt = {}), (Pt[c.STRENGTH] = new d.Z(0.1)), Pt),
              baseCostPerCast:
                ((Ut = {}),
                (Ut[r.ENERGY] = new d.Z(10)),
                (Ut[r.COINS] = new d.Z(10)),
                Ut),
              xpGain: new d.Z("1500"),
              getDiminishReturnEffect: function (e) {
                return new d.Z(1.01);
              },
            },
            {
              id: Xe.READ_BOOKS,
              name: "Read Books",
              description:
                "Spend time reading old magic books, full of knowledge. Increase knowledge cap, but requires mana to translate magic language",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.READ_BOOKS) > 0;
              },
              effortRequired: new d.Z(4e3),
              attributesEffortEffect:
                ((Mt = {}),
                (Mt[c.RUNE_READING] = 0.75),
                (Mt[c.WILLPOWER] = 0.25),
                Mt),
              tags: ["mental", "actions", "training", "knowledge"],
              baseResourceCapPerCast:
                ((Bt = {}), (Bt[r.KNOWLEDGE] = new d.Z(1)), Bt),
              baseCostPerCast:
                ((Gt = {}),
                (Gt[r.ENERGY] = new d.Z(5)),
                (Gt[r.MANA] = new d.Z(1e4)),
                Gt),
              xpGain: new d.Z("100"),
              getDiminishReturnEffect: function (e) {
                return new d.Z(1);
              },
            },
            {
              id: Xe.READ_MANUSCRIPTS,
              name: "Read Manuscripts",
              description:
                "Spend time reading rune manuscripts, increasing rune mastery",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.RUNE_LANGUAGE) > 0
                );
              },
              effortRequired: new d.Z(16e3),
              attributesEffortEffect:
                ((_t = {}),
                (_t[c.RUNE_READING] = 0.75),
                (_t[c.WILLPOWER] = 0.25),
                _t),
              tags: ["mental", "actions", "training", "rune mastery"],
              baseAttributeMultiplierPerCast:
                ((Dt = {}), (Dt[c.RUNE_MASTERY] = new d.Z(0.05)), Dt),
              baseCostPerCast:
                ((kt = {}),
                (kt[r.ENERGY] = new d.Z(10)),
                (kt[r.MANA] = new d.Z(2e5)),
                kt),
              xpGain: new d.Z("300"),
              getDiminishReturnEffect: function (e) {
                return new d.Z(1.01);
              },
            },
            {
              id: Xe.APTITUDE_TRAINING,
              name: "Mental Aptitude",
              description:
                "Train your mental abilities by solving problems from academy books. Increase Intellect",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.APTITUDE) > 0;
              },
              effortRequired: new d.Z(1e4),
              attributesEffortEffect:
                ((xt = {}),
                (xt[c.VITALITY] = 0.25),
                (xt[c.WILLPOWER] = 0.75),
                xt),
              tags: ["mental", "actions", "training", "intellect"],
              baseAttributeMultiplierPerCast:
                ((Wt = {}), (Wt[c.RUNE_READING] = new d.Z(0.05)), Wt),
              baseCostPerCast:
                ((Kt = {}),
                (Kt[r.ENERGY] = new d.Z(10)),
                (Kt[r.KNOWLEDGE] = new d.Z(5e3)),
                Kt),
              xpGain: new d.Z("1000"),
              getDiminishReturnEffect: function (e) {
                return new d.Z(1.01);
              },
            },
            {
              id: Xe.BRAINSTORM,
              name: "Brainstorm",
              description:
                "Train your mental abilities. Increase Knowledge generation",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.BRAINSTORM) > 0;
              },
              effortRequired: new d.Z(1e5),
              attributesEffortEffect:
                ((Xt = {}),
                (Xt[c.WILLPOWER] = 0.5),
                (Xt[c.RUNE_READING] = 0.5),
                Xt),
              tags: ["mental", "actions", "empower", "knowledge"],
              baseResourceMultiplierPerCast:
                ((jt = {}), (jt[r.KNOWLEDGE] = new d.Z(0.02)), jt),
              baseCostPerCast:
                ((qt = {}),
                (qt[r.ENERGY] = new d.Z(25)),
                (qt[r.MANA] = new d.Z(2e6)),
                qt),
              xpGain: new d.Z("3000"),
              getDiminishReturnEffect: function (e) {
                return new d.Z(1);
              },
            },
            {
              id: Xe.MEDITATE,
              name: "Meditate",
              description: "Use special techniques to improve your mana cap",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.MEDITATE) > 0;
              },
              effortRequired: new d.Z(2e6),
              attributesEffortEffect:
                ((Yt = {}),
                (Yt[c.RUNE_READING] = 0.75),
                (Yt[c.VITALITY] = 0.25),
                Yt),
              tags: ["mental", "actions", "empower", "mana", "capacity"],
              baseResourceCapMultiplierPerCast:
                ((Ft = {}), (Ft[r.MANA] = new d.Z(0.02)), Ft),
              baseCostPerCast:
                ((Ht = {}),
                (Ht[r.ENERGY] = new d.Z(50)),
                (Ht[r.KNOWLEDGE] = new d.Z(2e5)),
                Ht),
              xpGain: new d.Z("6e+3"),
              getDiminishReturnEffect: function (e) {
                return new d.Z(1);
              },
            },
            {
              id: Xe.WILLPOWER_TRAINING,
              name: "Willpower Training",
              description: "Use special techniques to improve your willpower",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(a.MEDITATE) > 0;
              },
              effortRequired: new d.Z(1e7),
              attributesEffortEffect: ((Vt = {}), (Vt[c.RUNE_READING] = 1), Vt),
              tags: ["mental", "actions", "empower", "mana"],
              baseAttributeMultiplierPerCast:
                ((zt = {}), (zt[c.WILLPOWER] = new d.Z(0.02)), zt),
              baseCostPerCast:
                ((Jt = {}),
                (Jt[r.ENERGY] = new d.Z(150)),
                (Jt[r.KNOWLEDGE] = new d.Z(8e5)),
                Jt),
              xpGain: new d.Z("8e+3"),
              getDiminishReturnEffect: function (e) {
                return new d.Z(1.01);
              },
            },
            {
              id: Xe.RUNE_LESSONS,
              name: "Rune Lessons",
              description: "Take some rune mastery lessons",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.RUNE_SCIENCE) > 0
                );
              },
              effortRequired: new d.Z(5e7),
              attributesEffortEffect:
                ((Qt = {}),
                (Qt[c.RUNE_READING] = 0.75),
                (Qt[c.WILLPOWER] = 0.25),
                Qt),
              tags: ["mental", "actions", "empower", "runes"],
              baseAttributeMultiplierPerCast:
                (($t = {}), ($t[c.RUNE_MASTERY] = new d.Z(0.05)), $t),
              baseCostPerCast:
                ((en = {}),
                (en[r.ENERGY] = new d.Z(250)),
                (en[r.KNOWLEDGE] = new d.Z(5e6)),
                en),
              xpGain: new d.Z("3.e+4"),
              getDiminishReturnEffect: function (e) {
                return new d.Z(1.01);
              },
            },
            {
              id: Xe.CONDENSE_STASHES,
              name: "Condense Stashes",
              description:
                "Cast the spell over your coins to make it taking less place",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.ILLUSION_SPELLS) > 0
                );
              },
              effortRequired: new d.Z(1e5),
              attributesEffortEffect:
                ((tn = {}),
                (tn[c.RUNE_READING] = 0.05),
                (tn[c.MAGIC_KNOWLEDGE] = 0.95),
                tn),
              tags: ["magical", "spell", "illusion", "coins"],
              baseResourceCapPerCast:
                ((nn = {}), (nn[r.COINS] = new d.Z(0.1)), nn),
              baseCostPerCast:
                ((rn = {}),
                (rn[r.ENERGY] = new d.Z(500)),
                (rn[r.MANA] = new d.Z("1.e+8")),
                rn),
              xpGain: new d.Z("1.e+5"),
              getDiminishReturnEffect: function (e) {
                return new d.Z(1);
              },
            },
            {
              id: Xe.SPARK_HEART_INFUSION,
              name: "Heart Spark Infusion",
              description:
                "Use spark to enchant your heart, boosting your vitality",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.SPARK_INFUSION) > 0
                );
              },
              effortRequired: new d.Z(100),
              attributesEffortEffect:
                ((on = {}), (on[c.MAGIC_KNOWLEDGE] = 1), on),
              tags: ["magical", "spell", "infusion", "vitality"],
              baseAttributeMultiplierPerCast:
                ((an = {}), (an[c.VITALITY] = new d.Z(0.05)), an),
              baseCostPerCast:
                ((un = {}),
                (un[r.ENERGY] = new d.Z(500)),
                (un[r.SPARK] = new d.Z(20)),
                (un[r.KNOWLEDGE] = new d.Z("2.e+10")),
                un),
              xpGain: new d.Z("1500"),
              getDiminishReturnEffect: function (e) {
                return new d.Z(1.01);
              },
            },
            {
              id: Xe.SPARK_MUSCLE_INFUSION,
              name: "Muscle Spark Infusion",
              description:
                "Use spark to enchant your muscles, boosting your strength",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.SPARK_INFUSION) > 0
                );
              },
              effortRequired: new d.Z(100),
              attributesEffortEffect:
                ((sn = {}), (sn[c.MAGIC_KNOWLEDGE] = 1), sn),
              tags: ["magical", "spell", "infusion", "strength"],
              baseAttributeMultiplierPerCast:
                ((cn = {}), (cn[c.STRENGTH] = new d.Z(0.05)), cn),
              baseCostPerCast:
                ((ln = {}),
                (ln[r.ENERGY] = new d.Z(500)),
                (ln[r.SPARK] = new d.Z(20)),
                (ln[r.KNOWLEDGE] = new d.Z("2.e+10")),
                ln),
              xpGain: new d.Z("1500"),
              getDiminishReturnEffect: function (e) {
                return new d.Z(1.01);
              },
            },
            {
              id: Xe.SPARK_BRAIN_INFUSION,
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
              effortRequired: new d.Z(100),
              attributesEffortEffect:
                ((dn = {}), (dn[c.MAGIC_KNOWLEDGE] = 1), dn),
              tags: ["magical", "spell", "infusion", "intellect"],
              baseAttributeMultiplierPerCast:
                ((pn = {}), (pn[c.RUNE_READING] = new d.Z(0.05)), pn),
              baseCostPerCast:
                ((fn = {}),
                (fn[r.ENERGY] = new d.Z(1e3)),
                (fn[r.SPARK] = new d.Z(100)),
                (fn[r.KNOWLEDGE] = new d.Z("1.e+11")),
                fn),
              xpGain: new d.Z("1500"),
              getDiminishReturnEffect: function (e) {
                return new d.Z(1.01);
              },
            },
            {
              id: Xe.MAGIC_LESSONS,
              name: "Magic Lessons",
              description: "Train your capabilities of spell casting",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(
                    a.SPELLBINDING_TRAINING
                  ) > 0
                );
              },
              effortRequired: new d.Z(1e10),
              attributesEffortEffect:
                ((gn = {}),
                (gn[c.RUNE_READING] = 0.75),
                (gn[c.WILLPOWER] = 0.25),
                gn),
              tags: ["mental", "actions", "training", "spellbinding"],
              baseAttributeMultiplierPerCast:
                ((hn = {}), (hn[c.MAGIC_KNOWLEDGE] = new d.Z(0.05)), hn),
              baseCostPerCast:
                ((mn = {}),
                (mn[r.ENERGY] = new d.Z(500)),
                (mn[r.KNOWLEDGE] = new d.Z("1.e+11")),
                (mn[r.MANA] = new d.Z("1.e+11")),
                mn),
              xpGain: new d.Z("1.e+5"),
              getDiminishReturnEffect: function (e) {
                return new d.Z(1.01);
              },
            },
            {
              id: Xe.READ_ELVEN_BOOKS,
              name: "Read Elven Books",
              description:
                "Spent some time in elven library to increase your knowledge output",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.ELVEN_LIBRARY) > 0
                );
              },
              effortRequired: new d.Z("5.e+12"),
              attributesEffortEffect:
                ((vn = {}),
                (vn[c.RUNE_READING] = 0.75),
                (vn[c.WILLPOWER] = 0.25),
                vn),
              tags: ["mental", "actions", "training", "knowledge"],
              baseResourceMultiplierPerCast:
                ((yn = {}), (yn[r.KNOWLEDGE] = new d.Z(0.01)), yn),
              baseCostPerCast:
                ((En = {}),
                (En[r.ENERGY] = new d.Z(2500)),
                (En[r.MANA] = new d.Z("1.e+13")),
                En),
              xpGain: new d.Z("1.e+5"),
              getDiminishReturnEffect: function (e) {
                return new d.Z(1);
              },
            },
            {
              id: Xe.CONJURATION_TRAINING,
              name: "Conjuration Training",
              description: "Train your conjuration lore",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.CONJURATION_STUDY) >
                  0
                );
              },
              effortRequired: new d.Z("1.e+12"),
              attributesEffortEffect:
                ((wn = {}),
                (wn[c.VITALITY] = 0.75),
                (wn[c.WILLPOWER] = 0.25),
                wn),
              tags: ["mental", "actions", "training", "conjuration lore"],
              baseAttributeMultiplierPerCast:
                ((An = {}), (An[c.CONJURATION_LORE] = new d.Z(0.01)), An),
              baseCostPerCast:
                ((Nn = {}),
                (Nn[r.ENERGY] = new d.Z(2500)),
                (Nn[r.MANA] = new d.Z("1.e+14")),
                Nn),
              xpGain: new d.Z("1.e+5"),
              getDiminishReturnEffect: function (e) {
                return new d.Z(1.01);
              },
            },
            {
              id: Xe.CONJURE_SPARK,
              name: "Conjure Spark",
              description:
                "Spend your time making ritual, increasing your mana output",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.SPARK_GENERATION) > 0
                );
              },
              effortRequired: new d.Z(1e7),
              attributesEffortEffect:
                ((Cn = {}),
                (Cn[c.RUNE_READING] = 0.01),
                (Cn[c.MAGIC_KNOWLEDGE] = 0.99),
                Cn),
              tags: ["magical", "spell", "conjuration", "spark"],
              baseResourcePerCast:
                ((In = {}), (In[r.SPARK] = new d.Z(0.1)), In),
              baseCostPerCast:
                ((On = {}),
                (On[r.ENERGY] = new d.Z(250)),
                (On[r.MANA] = new d.Z("1.e+9")),
                On),
              xpGain: new d.Z("5.e+4"),
              getDiminishReturnEffect: function (e) {
                return new d.Z(1);
              },
            },
            {
              id: Xe.CONJURE_WOOD,
              name: "Conjure Wood",
              description: "Conjure some pile of raw wood",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.WOODWORKING) > 0
                );
              },
              effortRequired: new d.Z(1e8),
              attributesEffortEffect:
                ((Rn = {}),
                (Rn[c.RUNE_READING] = 0.01),
                (Rn[c.MAGIC_KNOWLEDGE] = 0.99),
                Rn),
              tags: ["magical", "spell", "conjuration", "wood"],
              baseResourcePerCast:
                ((Ln = {}), (Ln[r.WOOD] = new d.Z(0.25)), Ln),
              baseCostPerCast:
                ((bn = {}),
                (bn[r.ENERGY] = new d.Z(500)),
                (bn[r.MANA] = new d.Z("1.e+10")),
                bn),
              xpGain: new d.Z("1.e+5"),
              getDiminishReturnEffect: function (e) {
                return new d.Z(1);
              },
            },
            {
              id: Xe.CONJURE_STONE,
              name: "Conjure Stone",
              description: "Conjure some stone",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.STONEWORKING) > 0
                );
              },
              effortRequired: new d.Z(5e8),
              attributesEffortEffect:
                ((Tn = {}),
                (Tn[c.RUNE_READING] = 0.01),
                (Tn[c.MAGIC_KNOWLEDGE] = 0.99),
                Tn),
              tags: ["magical", "spell", "conjuration", "stone"],
              baseResourcePerCast:
                ((Zn = {}), (Zn[r.STONE] = new d.Z(0.25)), Zn),
              baseCostPerCast:
                ((Sn = {}),
                (Sn[r.ENERGY] = new d.Z(1e3)),
                (Sn[r.MANA] = new d.Z("1.e+11")),
                Sn),
              xpGain: new d.Z("2.e+5"),
              getDiminishReturnEffect: function (e) {
                return new d.Z(1);
              },
            },
            {
              id: Xe.CONJURE_IRON,
              name: "Conjure Iron",
              description: "Conjure iron ore",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.METALWORKING) > 0
                );
              },
              effortRequired: new d.Z(25e8),
              attributesEffortEffect:
                ((Pn = {}),
                (Pn[c.RUNE_READING] = 0.01),
                (Pn[c.MAGIC_KNOWLEDGE] = 0.99),
                Pn),
              tags: ["magical", "spell", "conjuration", "iron"],
              baseResourcePerCast:
                ((Un = {}), (Un[r.IRON_ORE] = new d.Z(0.25)), Un),
              baseCostPerCast:
                ((Mn = {}),
                (Mn[r.ENERGY] = new d.Z(2500)),
                (Mn[r.MANA] = new d.Z("1.e+12")),
                Mn),
              xpGain: new d.Z("5.e+5"),
              getDiminishReturnEffect: function (e) {
                return new d.Z(1);
              },
            },
            {
              id: Xe.CRAFT,
              name: "Craft",
              description: "Devote some time to crafting",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.WOODWORKING) > 0
                );
              },
              effortRequired: new d.Z(1e8),
              attributesEffortEffect: ((Bn = {}), (Bn[c.STRENGTH] = 1), Bn),
              tags: ["technical", "crafting"],
              baseResourcePerCast:
                ((Gn = {}), (Gn[r.CRAFTSMANSHIP] = new d.Z(1)), Gn),
              baseCostPerCast: ((_n = {}), (_n[r.ENERGY] = new d.Z(2500)), _n),
              xpGain: new d.Z("5.e+5"),
              getDiminishReturnEffect: function (e) {
                return new d.Z(1);
              },
            },
          ],
          Ci = function () {
            return (
              (Ci =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              Ci.apply(this, arguments)
            );
          },
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
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          Oi = function () {
            return (
              (Oi =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              Oi.apply(this, arguments)
            );
          },
          Ri = (function (e) {
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
                t.workDispatcher.on("[actions] save list", function (e) {
                  console.log("do save list", e), t.editList(e);
                }),
                t.workDispatcher.on("[actions] list to ui", function (e) {
                  console.log("do set list to ui", e), t.listToUI(e);
                }),
                t.workDispatcher.on("[actions] run list", function (e) {
                  console.log("do run list", e), t.runList(e.id);
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
              Ii(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                var t;
                (this.actions =
                  (null == e
                    ? void 0
                    : e.actions.map(function (e) {
                        return Oi(Oi({}, e), {
                          numPerformed: new d.Z(e.numPerformed),
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
                        progress: new d.Z(e.running.progress),
                        isPaused: e.running.isPaused,
                        pauseCd: 0,
                        efficiency: 1,
                      }
                    : void 0);
              }),
              (t.prototype.exportData = function () {
                return {
                  actions: this.actions.map(function (e) {
                    return Oi(Oi({}, e), {
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
                  Ni.forEach(function (t) {
                    var n = e.actions.find(function (e) {
                      return e.id === t.id;
                    });
                    (e.diminishReturns[t.id] = e.getDiminishReturn(t, n)),
                      (e.actionsCached[t.id] = e.processToUI(t));
                  });
              }),
              (t.prototype.dataFromCache = function () {
                return Object.values(this.actionsCached).map(function (e) {
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
                    var r = t.effort.div(this.runningState.efficiency),
                      i = t.effort.greaterThanOrEqualTo(1)
                        ? v(
                            r.minus(
                              this.runningState.progress.div(
                                this.runningState.efficiency
                              )
                            )
                          )
                        : v(r, !1);
                    return {
                      id: this.runningState.id,
                      name: n.name,
                      progress: r.greaterThanOrEqualTo(1)
                        ? this.runningState.progress
                            .mul(100)
                            .div(t.effort)
                            .toPrecision(2)
                        : "100",
                      eta: this.runningState.isPaused ? "Paused" : i,
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
                          amount: e[1].mul(t).div(n || new d.Z(1)),
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
                        return {
                          id: e[0],
                          amount: e[1].mul(t).div(n || new d.Z(1)),
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
                            amount: e[1].mul(t).div(n || new d.Z(1)),
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
                          amount: e[1].mul(t).div(n || new d.Z(1)),
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
                            amount: e[1].mul(t).div(n || new d.Z(1)),
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
                          amount: e[1].mul(t).div(n || new d.Z(1)),
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
                              .div(n || new d.Z(1))
                              .plus(1),
                          };
                        }
                      )
                    : []
                );
              }),
              (t.prototype.getTagMultiplier = function (e) {
                var t = new d.Z(1);
                return (
                  e.tags.includes("physical") &&
                    (t = t.mul(ma.city.reincarnation.getBonus(z.PHYSICAL))),
                  e.tags.includes("mental") &&
                    (t = t.mul(ma.city.reincarnation.getBonus(z.MENTAL))),
                  e.tags.includes("spell") &&
                    (t = t.mul(ma.city.reincarnation.getBonus(z.MAGICAL))),
                  e.tags.includes("conjuration") &&
                    (t = t.mul(
                      d.Z.max(
                        ma.personage.attributes.getAttribute(
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
                return new d.Z(0.05).div(
                  d.Z.max(
                    ma.personage.attributes.getAttribute(c.AGILITY),
                    new d.Z(1)
                  ).mul(t)
                );
              }),
              (t.prototype.getRealEffort = function (e, t, n) {
                void 0 === t && (t = 1), void 0 === n && (n = !1);
                var r = Object.entries(e.attributesEffortEffect).reduce(
                    function (e, t) {
                      return e.plus(
                        g(
                          ma.personage.attributes.getAttribute(t[0]),
                          new d.Z(0.75)
                        ).mul(t[1])
                      );
                    },
                    new d.Z(0)
                  ),
                  i = Object.entries(e.attributesEffortEffect).reduce(function (
                    e,
                    t
                  ) {
                    return e.plus(t[1]);
                  },
                  new d.Z(0));
                i.lessThan(1) && (r = r.plus(1).sub(i)),
                  r.lessThanOrEqualTo(0) && (r = new d.Z(1));
                var o = g(this.getTagMultiplier(e), new d.Z(0.25)),
                  a = e.effortRequired.mul(t).div(r.mul(o)),
                  u = n ? 0 : this.getCap(e).mul(t);
                return d.Z.max(a, u);
              }),
              (t.prototype.getDiminishCached = function (e, t) {
                return (
                  this.diminishReturns[e.id] ||
                    (this.diminishReturns[e.id] = this.getDiminishReturn(e, t)),
                  this.diminishReturns[e.id]
                );
              }),
              (t.prototype.getDiminishReturn = function (e, t) {
                var n = null == t ? void 0 : t.numPerformed;
                if (!n || (null == n ? void 0 : n.lessThan(1)))
                  return new d.Z(1);
                var r = e.getDiminishReturnEffect(ma);
                return r.lessThanOrEqualTo(1)
                  ? new d.Z(1)
                  : r.pow(n.pow(0.5).neg());
              }),
              (t.prototype.calculateList = function (e, t) {
                var n,
                  i,
                  o,
                  a,
                  u,
                  s = this;
                void 0 === t && (t = !1);
                var c = Ni.reduce(function (e, t) {
                    return (e[t.id] = t), e;
                  }, {}),
                  l = e.actions.reduce(function (e, t) {
                    return e.plus(s.getRealEffort(c[t.id], t.number).mul(1));
                  }, new d.Z(0)),
                  p = e.actions.reduce(function (e, t) {
                    return (
                      (e[t.id] = s
                        .getRealEffort(c[t.id], t.number)
                        .div(l)
                        .toNumber()),
                      e
                    );
                  }, {}),
                  f = {
                    effort: l,
                    attributeGain: {},
                    attributeMultGain: {},
                    resourceGain: {},
                    resourceGainMult: {},
                    resourceCost: {},
                    resourceCapGain: {},
                    resourceCapMult: {},
                    balanceCalculated: {},
                    canBeRunned: !0,
                    impactingAttributes: {},
                    timeBreakdowns: p,
                    requiredRestChange: 0,
                  },
                  g = e.actions.reduce(function (e, t) {
                    var n = s
                      .getCostPerCast(c[t.id], t.number)
                      .find(function (e) {
                        return e.id === r.ENERGY;
                      });
                    return n && (e = e.plus(n.amount)), e;
                  }, new d.Z(0)),
                  h = c[Xe.REST]
                    ? (null ===
                        (n = this.getGainPerCast(c[Xe.REST], 1).find(function (
                          e
                        ) {
                          return e.id === r.ENERGY;
                        })) || void 0 === n
                        ? void 0
                        : n.amount.mul(
                            ma.resources.getResourceMultiplier(r.ENERGY)
                          )) || new d.Z(0.1)
                    : new d.Z(1);
                (f.requiredRestChange = Math.ceil(g.div(h).toNumber())),
                  e.actions.forEach(function (e) {
                    if (c[e.id]) {
                      c[e.id].unlockCondition(ma) || (f.canBeRunned = !1);
                      var t = Object.entries(
                          c[e.id].attributesEffortEffect
                        ).reduce(function (e, t) {
                          return e.plus(t[1]);
                        }, new d.Z(0)),
                        n = s
                          .getDiminishCached(
                            c[e.id],
                            s.actions.find(function (t) {
                              return t.id === e.id;
                            })
                          )
                          .mul(e.number),
                        r = s.getAttributePerCast(c[e.id], n, l),
                        i = s.getGainPerCast(c[e.id], n, l),
                        o = s.getGainMultPerCast(c[e.id], n, l),
                        a = s.getCapGainPerCast(c[e.id], n, l),
                        u = s.getCapMultPerCast(c[e.id], n, l),
                        p = s.getCostPerCast(c[e.id], e.number, l),
                        g = s.getAttributeMultPerCast(c[e.id], n, l),
                        h = Object.entries(c[e.id].attributesEffortEffect).map(
                          function (e) {
                            return { id: e[0], value: 100 * e[1] };
                          }
                        );
                      r.forEach(function (e) {
                        var t;
                        f.attributeGain[e.id] ||
                          (f.attributeGain[e.id] = new d.Z(0)),
                          (f.attributeGain[e.id] =
                            null === (t = f.attributeGain[e.id]) || void 0 === t
                              ? void 0
                              : t.plus(e.amount));
                      }),
                        g.forEach(function (e) {
                          var t;
                          f.attributeMultGain[e.id] ||
                            (f.attributeMultGain[e.id] = new d.Z(1)),
                            (f.attributeMultGain[e.id] =
                              null === (t = f.attributeMultGain[e.id]) ||
                              void 0 === t
                                ? void 0
                                : t.mul(e.amount));
                        }),
                        i.forEach(function (e) {
                          var t;
                          f.resourceGain[e.id] ||
                            (f.resourceGain[e.id] = new d.Z(0)),
                            (f.resourceGain[e.id] =
                              null === (t = f.resourceGain[e.id]) ||
                              void 0 === t
                                ? void 0
                                : t.plus(e.amount));
                        }),
                        o.forEach(function (e) {
                          var t;
                          f.resourceGainMult[e.id] ||
                            (f.resourceGainMult[e.id] = new d.Z(1)),
                            (f.resourceGainMult[e.id] =
                              null === (t = f.resourceGainMult[e.id]) ||
                              void 0 === t
                                ? void 0
                                : t.mul(e.amount));
                        }),
                        a.forEach(function (e) {
                          var t;
                          f.resourceCapGain[e.id] ||
                            (f.resourceCapGain[e.id] = new d.Z(0)),
                            (f.resourceCapGain[e.id] =
                              null === (t = f.resourceCapGain[e.id]) ||
                              void 0 === t
                                ? void 0
                                : t.plus(e.amount));
                        }),
                        u.forEach(function (e) {
                          var t;
                          f.resourceCapMult[e.id] ||
                            (f.resourceCapMult[e.id] = new d.Z(1)),
                            (f.resourceCapMult[e.id] =
                              null === (t = f.resourceCapMult[e.id]) ||
                              void 0 === t
                                ? void 0
                                : t.mul(e.amount));
                        }),
                        p.forEach(function (e) {
                          var t;
                          f.resourceCost[e.id] ||
                            (f.resourceCost[e.id] = new d.Z(0)),
                            (f.resourceCost[e.id] =
                              null === (t = f.resourceCost[e.id]) ||
                              void 0 === t
                                ? void 0
                                : t.plus(e.amount));
                        }),
                        h.forEach(function (n) {
                          var r;
                          f.impactingAttributes[n.id] ||
                            (f.impactingAttributes[n.id] = new d.Z(0)),
                            (f.impactingAttributes[n.id] =
                              null === (r = f.impactingAttributes[n.id]) ||
                              void 0 === r
                                ? void 0
                                : r.plus(
                                    s
                                      .getRealEffort(c[e.id], e.number)
                                      .mul(n.value)
                                      .div(l.mul(t))
                                  ));
                        });
                    }
                  });
                var m,
                  v,
                  y,
                  E = {};
                return (
                  Object.entries(f.resourceGain).forEach(function (e) {
                    var t = e[0],
                      n = e[1];
                    E[t] = n.mul(ma.resources.getResourceMultiplier(t));
                  }),
                  (f.balanceCalculated = (function (e, t) {
                    void 0 === t && (t = new d.Z(1e-14));
                    var n = {};
                    return (
                      Object.keys(e).forEach(function (r) {
                        e[r].abs().lessThanOrEqualTo(t)
                          ? (n[r] = new d.Z(0))
                          : (n[r] = e[r]);
                      }),
                      n
                    );
                  })(
                    ((m = E),
                    (v = f.resourceCost),
                    (y = {}),
                    Object.keys(Ci(Ci({}, m), v)).forEach(function (e) {
                      y[e] = (m[e] || new d.Z(0)).minus(v[e] || new d.Z(0));
                    }),
                    y)
                  )),
                  (null === (i = f.balanceCalculated[r.ENERGY]) || void 0 === i
                    ? void 0
                    : i.lessThan(0)) &&
                    console.log(
                      "power: ",
                      null === (o = f.balanceCalculated[r.ENERGY]) ||
                        void 0 === o
                        ? void 0
                        : o.toPrecision(18),
                      null === (a = E[r.ENERGY]) || void 0 === a
                        ? void 0
                        : a.toPrecision(24),
                      null === (u = f.resourceCost[r.ENERGY]) || void 0 === u
                        ? void 0
                        : u.toPrecision(24)
                    ),
                  t && (this.listAssertsCached[e.id] = f),
                  f
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
                  (e = Oi(Oi({}, e), { id: "".concat(Math.random()) })),
                    this.lists.lists.push(e);
                this.calculateList(e, !0);
              }),
              (t.prototype.runList = function (e) {
                (this.runningState = {
                  id: e,
                  progress: new d.Z(0),
                  isPaused: !1,
                  pauseCd: 0,
                  efficiency: 1,
                }),
                  ma.regenerateCache(),
                  ma.resources.reassertBalances();
              }),
              (t.prototype.deleteList = function (e) {
                var t = this.lists.lists.findIndex(function (t) {
                  return t.id === e;
                });
                t >= 0 && this.lists.lists.splice(t, 1);
              }),
              (t.prototype.stopList = function () {
                (this.runningState = void 0),
                  ma.regenerateCache(),
                  ma.resources.reassertBalances();
              }),
              (t.prototype.toUI = function (e, t) {
                return (
                  void 0 === t &&
                    (t = function (e) {
                      return X(e, 4);
                    }),
                  e.map(function (e) {
                    return {
                      id: e.id,
                      name: $(e.id),
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
                      return X(e, 4);
                    }),
                  Object.entries(e).map(function (e) {
                    var n = e[0],
                      r = e[1];
                    return {
                      id: n,
                      name: $(n),
                      amount: t(r),
                      amountValue: r.toPrecision(18),
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
                  ((n = { id: e.id, numPerformed: new d.Z(0) }),
                  this.actions.push(n));
                var r = this.getDiminishCached(e, n),
                  i = this.toUI(this.getCostPerCast(e)),
                  o = this.toUI(this.getGainPerCast(e, 1)),
                  a = this.toUI(this.getGainMultPerCast(e, 1), function (e) {
                    return "+x".concat(X(e, 4));
                  }),
                  u = this.toUI(this.getCapGainPerCast(e, 1)),
                  s = this.toUI(this.getCapMultPerCast(e, 1), function (e) {
                    return "+x".concat(X(e, 4));
                  }),
                  c = this.toUI(this.getAttributePerCast(e, 1)),
                  l = this.toUI(
                    this.getAttributeMultPerCast(e, 1),
                    function (e) {
                      return "+x".concat(X(e.sub(1), 4));
                    }
                  ),
                  p = performance.now(),
                  f = this.getRealEffort(e),
                  g = f.toNumber();
                this.ttpMark += performance.now() - p;
                var h = e.unlockCondition(ma);
                h &&
                  this.isUnlocked &&
                  n.numPerformed.lessThanOrEqualTo(0) &&
                  ma.newNotifications.registerNotification(
                    "city:actions:action:".concat(e.id)
                  );
                var m =
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
                  isUnlocked: h,
                  isAvailable: h,
                  cost: i,
                  gain: o,
                  gainMult: a,
                  attr: c,
                  attrMult: l,
                  capGain: u,
                  capMult: s,
                  etaNum: g,
                  amount: X(n.numPerformed),
                  isBlocked: !1,
                  effort: v(f, !1),
                  capEffort: v(this.getCap(e), !1),
                  effortEffects: Object.entries(e.attributesEffortEffect).map(
                    function (e) {
                      var t = e[0],
                        n = e[1];
                      return {
                        name: $(t),
                        effect: Math.round(100 * n).toPrecision(3),
                      };
                    }
                  ),
                  tags: e.tags,
                  mitigation: r.lessThan(1)
                    ? "".concat(X(r.mul(100)), "%")
                    : void 0,
                  isRunning: m,
                };
              }),
              (t.prototype.processCalculationsToUI = function (e) {
                return {
                  id: "edited.".concat(Math.random()),
                  name: "edited.".concat(Math.random()),
                  effort: v(e.effort, !1),
                  items: [],
                  resourceGain: this.recordToUI(e.balanceCalculated),
                  attributeGain: this.recordToUI(e.attributeGain),
                  resourceCapGain: this.recordToUI(e.resourceCapGain),
                  resourceCapMult: this.recordToUI(
                    e.resourceCapMult,
                    function (e) {
                      return "+x".concat(X(e.sub(1), 4));
                    }
                  ),
                  resourceGainMult: this.recordToUI(
                    e.resourceGainMult,
                    function (e) {
                      return "+x".concat(X(e, 4));
                    }
                  ),
                  attributeMultGain: this.recordToUI(
                    e.attributeMultGain,
                    function (e) {
                      return "+x".concat(X(e.sub(1), 4));
                    }
                  ),
                  impactingAttributes: this.recordToUI(
                    e.impactingAttributes,
                    function (e) {
                      return "".concat(X(e, 2), "%");
                    }
                  ),
                  requiredRestChange: e.requiredRestChange,
                  timeBreakdowns: e.timeBreakdowns,
                  canBeRunned: !0,
                };
              }),
              (t.prototype.processListToUI = function (e) {
                var t = Ni.reduce(function (e, t) {
                  return (e[t.id] = t), e;
                }, {});
                return {
                  id: e.id,
                  name: e.name,
                  effort: v(this.listAssertsCached[e.id].effort, !1),
                  items: e.actions.map(function (e) {
                    return {
                      id: e.id,
                      amount: e.number,
                      name: t[e.id].name,
                      canBeRunned: t[e.id].unlockCondition(ma),
                    };
                  }),
                  resourceGain: this.recordToUI(
                    this.listAssertsCached[e.id].balanceCalculated
                  ),
                  resourceGainMult: this.recordToUI(
                    this.listAssertsCached[e.id].resourceGainMult,
                    function (e) {
                      return "+x".concat(X(e.sub(1), 4));
                    }
                  ),
                  resourceCapGain: this.recordToUI(
                    this.listAssertsCached[e.id].resourceCapGain,
                    function (e) {
                      return "+".concat(X(e, 4));
                    }
                  ),
                  attributeGain: this.recordToUI(
                    this.listAssertsCached[e.id].attributeGain,
                    function (e) {
                      return "+".concat(X(e, 4));
                    }
                  ),
                  attributeMultGain: this.recordToUI(
                    this.listAssertsCached[e.id].attributeMultGain,
                    function (e) {
                      return "+x".concat(X(e.sub(1), 4));
                    }
                  ),
                  resourceCapMult: this.recordToUI(
                    this.listAssertsCached[e.id].resourceCapMult,
                    function (e) {
                      return "+x".concat(X(e.sub(1), 4));
                    }
                  ),
                  canBeRunned: !e.actions.find(function (e) {
                    return !t[e.id].unlockCondition(ma);
                  }),
                  impactingAttributes: this.recordToUI(
                    this.listAssertsCached[e.id].impactingAttributes,
                    function (e) {
                      return "".concat(X(e, 4), "%");
                    }
                  ),
                  requiredRestChange:
                    this.listAssertsCached[e.id].requiredRestChange,
                  timeBreakdowns: this.listAssertsCached[e.id].timeBreakdowns,
                };
              }),
              (t.prototype.canAfford = function (e, t) {
                var n,
                  r = 1;
                for (var i in e.balanceCalculated)
                  if (
                    null === (n = e.balanceCalculated[i]) || void 0 === n
                      ? void 0
                      : n.lessThan(
                          ma.resources
                            .getResource(i)
                            .mul(10 * t)
                            .neg()
                        )
                  ) {
                    var o = ma.resources.getResourceBalance(i),
                      a = ma.resources
                        .getResourceMultiplier(i)
                        .mul(e.resourceGain[i] || new d.Z(0))
                        .sub(e.resourceCost[i] || new d.Z(0)),
                      u = 1 - o.div(a).toNumber();
                    if ((r = Math.min(r, u)) < 0) return 0;
                  }
                return r;
              }),
              (t.prototype.process = function (e) {
                var t = this;
                if (
                  (!this.isUnlocked &&
                    ma.learning.runeUpgrades.getUpgradeLevel(o.TICKET_OUT) >
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
                  this.runningState.efficiency < 1 &&
                    this.runningState.pauseCd <= 0 &&
                    ((this.runningState.efficiency = 1),
                    ma.regenerateCache(),
                    ma.resources.reassertBalances());
                  var n = this.canAfford(
                    this.listAssertsCached[this.runningState.id],
                    e
                  );
                  n < 1
                    ? (n <= 0
                        ? ((this.runningState.isPaused = !0),
                          (this.runningState.pauseCd = 10 * e))
                        : ((this.runningState.isPaused = !1),
                          (this.runningState.pauseCd = 10 * e),
                          (this.runningState.efficiency =
                            n * this.runningState.efficiency)),
                      ma.regenerateCache(),
                      ma.resources.reassertBalances())
                    : this.runningState.isPaused &&
                      ((this.runningState.isPaused = !1),
                      ma.regenerateCache(),
                      ma.resources.reassertBalances()),
                    (this.runningState.progress =
                      this.runningState.progress.add(
                        e * this.runningState.efficiency
                      ));
                  var r = new d.Z(1),
                    i = !1;
                  this.runningState.progress.greaterThanOrEqualTo(
                    this.listAssertsCached[this.runningState.id].effort
                  ) && (i = !0),
                    (r = new d.Z(e * this.runningState.efficiency).div(
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
                    a.actions.forEach(function (n) {
                      var i,
                        o = t.actions.findIndex(function (e) {
                          return e.id === n.id;
                        }),
                        a = Ni.find(function (e) {
                          return e.id === n.id;
                        });
                      if (a && o >= 0) {
                        ma.statistics.addActionTime(
                          a.name,
                          (t.listAssertsCached[
                            null === (i = t.runningState) || void 0 === i
                              ? void 0
                              : i.id
                          ].timeBreakdowns[n.id] || 0) * e
                        );
                        var u = t
                          .getDiminishCached(a, t.actions[o])
                          .mul(n.number);
                        t.actions[o].numPerformed = t.actions[
                          o
                        ].numPerformed.plus(r.mul(u));
                      }
                    }),
                    i && (this.runningState.progress = new d.Z(0)),
                    (!this.lastReassert ||
                      this.lastReassert < Date.now() - 2e3) &&
                      ((this.lastReassert = Date.now()),
                      ma.regenerateCache(),
                      ma.resources.reassertBalances(),
                      this.lists.lists.map(function (e) {
                        return t.calculateList(e, !0);
                      }));
                }
              }),
              (t.prototype.getResourceBeingProduced = function (e) {
                var t, n, r, i;
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
                          (i =
                            null === (r = o.resourceGain[e]) || void 0 === r
                              ? void 0
                              : r.mul(this.runningState.efficiency)) &&
                        void 0 !== i
                          ? i
                          : new d.Z(0),
                      id: "actions",
                      category: "Actions",
                    }),
                  a
                );
              }),
              (t.prototype.getResourceBeingStored = function (e) {
                var t = this,
                  n = Ni.filter(function (t) {
                    var n;
                    return null === (n = t.baseResourceCapPerCast) ||
                      void 0 === n
                      ? void 0
                      : n[e];
                  }),
                  r = [];
                return (
                  n.forEach(function (n) {
                    var i,
                      o,
                      a = t.getActionPerforms(n.id);
                    a.greaterThan(0) &&
                      r.push({
                        label: "Actions: ".concat(n.name),
                        value:
                          (null ===
                            (o =
                              null === (i = n.baseResourceCapPerCast) ||
                              void 0 === i
                                ? void 0
                                : i[e]) || void 0 === o
                            ? void 0
                            : o.mul(a)) || new d.Z(0),
                        id: "actions:".concat(n.id),
                        category: "Actions",
                      });
                  }),
                  r
                );
              }),
              (t.prototype.getResourceBeingStoredMultiplier = function (e) {
                var t = this,
                  n = Ni.filter(function (t) {
                    var n;
                    return null === (n = t.baseResourceCapMultiplierPerCast) ||
                      void 0 === n
                      ? void 0
                      : n[e];
                  }),
                  r = [];
                return (
                  n.forEach(function (n) {
                    var i,
                      o,
                      a = t.getActionPerforms(n.id);
                    a.greaterThan(0) &&
                      r.push({
                        label: "Actions: ".concat(n.name),
                        value: (
                          (null ===
                            (o =
                              null ===
                                (i = n.baseResourceCapMultiplierPerCast) ||
                              void 0 === i
                                ? void 0
                                : i[e]) || void 0 === o
                            ? void 0
                            : o.mul(a)) || new d.Z(0)
                        ).plus(1),
                        id: "actions:".concat(n.id),
                        category: "Actions",
                      });
                  }),
                  r
                );
              }),
              (t.prototype.getResourceBeingConsumed = function (e) {
                var t, n, r, i;
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
                          (i =
                            null === (r = o.resourceCost[e]) || void 0 === r
                              ? void 0
                              : r.mul(this.runningState.efficiency)) &&
                        void 0 !== i
                          ? i
                          : new d.Z(0),
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
                    : t.numPerformed) || new d.Z(0)
                );
              }),
              (t.prototype.getAttributeProduced = function (e) {
                var t = this,
                  n = Ni.filter(function (t) {
                    var n;
                    return null === (n = t.baseAttributePerCats) || void 0 === n
                      ? void 0
                      : n[e];
                  }),
                  r = [];
                return (
                  n.forEach(function (n) {
                    var i,
                      o,
                      a = t.getActionPerforms(n.id);
                    a.greaterThan(0) &&
                      r.push({
                        label: "Actions: ".concat(n.name),
                        value:
                          (null ===
                            (o =
                              null === (i = n.baseAttributePerCats) ||
                              void 0 === i
                                ? void 0
                                : i[e]) || void 0 === o
                            ? void 0
                            : o.mul(a)) || new d.Z(0),
                        id: "actions",
                        category: "Actions",
                      });
                  }),
                  r
                );
              }),
              (t.prototype.getAttributeMultiplier = function (e) {
                var t = this,
                  n = Ni.filter(function (t) {
                    var n;
                    return null === (n = t.baseAttributeMultiplierPerCast) ||
                      void 0 === n
                      ? void 0
                      : n[e];
                  }),
                  r = [];
                return (
                  n.forEach(function (n) {
                    var i,
                      o,
                      a = t.getActionPerforms(n.id);
                    a.greaterThan(0) &&
                      r.push({
                        label: "Actions: ".concat(n.name),
                        value: (
                          (null ===
                            (o =
                              null === (i = n.baseAttributeMultiplierPerCast) ||
                              void 0 === i
                                ? void 0
                                : i[e]) || void 0 === o
                            ? void 0
                            : o.mul(a)) || new d.Z(0)
                        ).plus(1),
                        id: "actions",
                        category: "Actions",
                      });
                  }),
                  r
                );
              }),
              (t.prototype.getGainMultiplier = function (e) {
                var t = this,
                  n = Ni.filter(function (t) {
                    var n;
                    return null === (n = t.baseResourceMultiplierPerCast) ||
                      void 0 === n
                      ? void 0
                      : n[e];
                  }),
                  r = [];
                return (
                  n.forEach(function (n) {
                    var i,
                      o,
                      a = t.getActionPerforms(n.id);
                    a.greaterThan(0) &&
                      r.push({
                        label: "Actions: ".concat(n.name),
                        value: (
                          (null ===
                            (o =
                              null === (i = n.baseResourceMultiplierPerCast) ||
                              void 0 === i
                                ? void 0
                                : i[e]) || void 0 === o
                            ? void 0
                            : o.mul(a)) || new d.Z(0)
                        ).plus(1),
                        id: "actions",
                        category: "Actions",
                      });
                  }),
                  r
                );
              }),
              (t.prototype.reset = function () {
                var e = this;
                this.actions.forEach(function (t, n) {
                  e.actions[n].numPerformed = new d.Z(0);
                });
              }),
              t
            );
          })(s),
          Li = Ri.getInstance(),
          bi = [
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
                ((fr = {}),
                (fr[r.COINS] = function (e) {
                  return { A: new d.Z(20), B: new d.Z(2), type: y.EXPONENTIAL };
                }),
                (fr[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(1e3),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                fr),
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
                ((gr = {}),
                (gr[r.COINS] = function (e) {
                  return { A: new d.Z(40), B: new d.Z(2), type: y.EXPONENTIAL };
                }),
                (gr[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(2500),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                gr),
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
                ((hr = {}),
                (hr[r.COINS] = function (e) {
                  return { A: new d.Z(50), B: new d.Z(2), type: y.EXPONENTIAL };
                }),
                (hr[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(5e3),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                hr),
            },
            {
              id: a.GOLD_CRYSTAL,
              name: "Gold Crystal",
              description: "Unlock gold crystal that increase gold caps",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.RUNE_LANGUAGE) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((mr = {}),
                (mr[r.COINS] = function (e) {
                  return { A: new d.Z(30), B: new d.Z(2), type: y.EXPONENTIAL };
                }),
                (mr[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(2560),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                mr),
            },
            {
              id: a.ENDURANCE_RUNE,
              name: "Endurance Rune",
              description:
                "Unlock new rune that can significantly boost your body",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.GOLD_CRYSTAL) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((vr = {}),
                (vr[r.COINS] = function (e) {
                  return {
                    A: new d.Z(80),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                (vr[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(16e3),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                vr),
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
                ((yr = {}),
                (yr[r.COINS] = function (e) {
                  return {
                    A: new d.Z(125),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (yr[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(25e3),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                yr),
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
                ((Er = {}),
                (Er[r.COINS] = function (e) {
                  return {
                    A: new d.Z(250),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (Er[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(25e5),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                Er),
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
                ((wr = {}),
                (wr[r.COINS] = function (e) {
                  return {
                    A: new d.Z(100),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (wr[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(15e3),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                wr),
            },
            {
              id: a.MERCENARIES,
              name: "Mercenaries Market",
              description:
                "Finally you became nobble enough to encourage other people to work for you. They wont do it for free, however",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.GOLD_CRYSTAL) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((Ar = {}),
                (Ar[r.COINS] = function (e) {
                  return {
                    A: new d.Z(12225),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (Ar[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z("1.25e+9"),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                Ar),
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
                ((Nr = {}),
                (Nr[r.COINS] = function (e) {
                  return {
                    A: new d.Z(125),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (Nr[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(3e4),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                Nr),
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
                ((Cr = {}),
                (Cr[r.COINS] = function (e) {
                  return {
                    A: new d.Z(100),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (Cr[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(16e3),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                Cr),
            },
            {
              id: a.APTITUDE,
              name: "Aptitude",
              description:
                "Learn new techniques to increase your mental powers",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.KNOWLEDGE_UPGRADES) >
                  0
                );
              },
              maxLevel: 1,
              getCost:
                ((Ir = {}),
                (Ir[r.COINS] = function (e) {
                  return {
                    A: new d.Z(150),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (Ir[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(1e5),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                Ir),
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
                ((Or = {}),
                (Or[r.COINS] = function (e) {
                  return {
                    A: new d.Z(150),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (Or[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(1e5),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                Or),
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
                ((Rr = {}),
                (Rr[r.COINS] = function (e) {
                  return {
                    A: new d.Z(250),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (Rr[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(8e5),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                Rr),
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
                ((Lr = {}),
                (Lr[r.COINS] = function (e) {
                  return {
                    A: new d.Z(300),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (Lr[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(5e5),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                Lr),
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
                ((br = {}),
                (br[r.COINS] = function (e) {
                  return {
                    A: new d.Z(2500),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (br[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(25e6),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                br),
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
                ((Tr = {}),
                (Tr[r.COINS] = function (e) {
                  return {
                    A: new d.Z(1250),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (Tr[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z("1.0e+7"),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                Tr),
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
                ((Zr = {}),
                (Zr[r.COINS] = function (e) {
                  return {
                    A: new d.Z(1250),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (Zr[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z("1.0e+7"),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                Zr),
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
                ((Sr = {}),
                (Sr[r.COINS] = function (e) {
                  return {
                    A: new d.Z(2400),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (Sr[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z("1.25e+8"),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                Sr),
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
                ((Pr = {}),
                (Pr[r.COINS] = function (e) {
                  return {
                    A: new d.Z(5e3),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (Pr[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z("1.e+9"),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                Pr),
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
                ((Ur = {}),
                (Ur[r.COINS] = function (e) {
                  return {
                    A: new d.Z(1e4),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (Ur[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z("2.5e+9"),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                Ur),
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
                ((Mr = {}),
                (Mr[r.COINS] = function (e) {
                  return {
                    A: new d.Z(5e4),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (Mr[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(1e10),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                Mr),
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
                ((Br = {}),
                (Br[r.COINS] = function (e) {
                  return {
                    A: new d.Z(25e4),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (Br[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(1e11),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                Br),
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
                ((Gr = {}),
                (Gr[r.COINS] = function (e) {
                  return {
                    A: new d.Z(3e5),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (Gr[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(125e9),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                Gr),
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
                ((_r = {}),
                (_r[r.COINS] = function (e) {
                  return {
                    A: new d.Z(1e6),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (_r[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(1e12),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                _r),
            },
            {
              id: a.SPELLBINDING_TRAINING,
              name: "Courses of Apprentice",
              description:
                "Finally you can start learning true magic... Aren't you?",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(
                    a.SPARK_MIND_INFUSION
                  ) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((Dr = {}),
                (Dr[r.COINS] = function (e) {
                  return {
                    A: new d.Z(5e6),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (Dr[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(1e13),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                Dr),
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
                ((kr = {}),
                (kr[r.COINS] = function (e) {
                  return {
                    A: new d.Z("5.e+7"),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (kr[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(1e14),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                kr),
            },
            {
              id: a.ELVEN_LIBRARY,
              name: "Elven Library",
              description:
                "Investigate better elven science to learn more about magic and understand the world of wizardry",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(
                    a.SPELLBINDING_TRAINING
                  ) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((xr = {}),
                (xr[r.COINS] = function (e) {
                  return {
                    A: new d.Z("5.e+8"),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (xr[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z("1.5e+15"),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                xr),
            },
            {
              id: a.CONJURATION_STUDY,
              name: "Conjuration Study",
              description:
                "Unlock new training, focused on conjuration training",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.ELVEN_LIBRARY) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((Wr = {}),
                (Wr[r.COINS] = function (e) {
                  return {
                    A: new d.Z("2.e+9"),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (Wr[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z("1.0e+16"),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                Wr),
            },
            {
              id: a.WELLNESS_CRYSTAL,
              name: "Wellness Crystal",
              description:
                "What if you try to make crystal creating illusion of wellness? You could use magic to make you rich!",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.ILLUSION_SPELLS) >
                    0 &&
                  e.city.academyUpgrades.getUpgradeLevel(a.MERCENARIES) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((Kr = {}),
                (Kr[r.COINS] = function (e) {
                  return {
                    A: new d.Z(25e4),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (Kr[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(1e11),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                Kr),
            },
            {
              id: a.WOODWORKING,
              name: "Woodworking",
              description:
                "Learn how to combine your magic with your handwork to create wood and something useful from it!",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.SPARK_GENERATION) >
                    0 &&
                  e.city.academyUpgrades.getUpgradeLevel(a.MERCENARIES) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((Xr = {}),
                (Xr[r.COINS] = function (e) {
                  return {
                    A: new d.Z(48e4),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (Xr[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(25e10),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                Xr),
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
                ((jr = {}),
                (jr[r.COINS] = function (e) {
                  return {
                    A: new d.Z(125e4),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (jr[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(1e12),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                jr),
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
                ((qr = {}),
                (qr[r.COINS] = function (e) {
                  return {
                    A: new d.Z(5e6),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (qr[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(1e13),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                qr),
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
                ((Yr = {}),
                (Yr[r.COINS] = function (e) {
                  return {
                    A: new d.Z("5.e+7"),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (Yr[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(1e14),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                Yr),
            },
            {
              id: a.GLASSMAKING,
              name: "Glassmaking",
              description:
                "Ok, if you can make stone - you can crash it into sand, and than smelt into glass. Arent you?",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.STONEWORKING) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((Fr = {}),
                (Fr[r.COINS] = function (e) {
                  return {
                    A: new d.Z("4.e+8"),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (Fr[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(5e14),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                Fr),
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
                ((Hr = {}),
                (Hr[r.COINS] = function (e) {
                  return {
                    A: new d.Z("2.e+9"),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (Hr[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(2e16),
                    B: new d.Z(1.75),
                    type: y.EXPONENTIAL,
                  };
                }),
                Hr),
            },
          ],
          Ti = (function () {
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
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          Zi = function () {
            return (
              (Zi =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              Zi.apply(this, arguments)
            );
          },
          Si = (function (e) {
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
              Ti(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                this.upgrades =
                  (null == e
                    ? void 0
                    : e.upgrades.map(function (e) {
                        return Zi({}, e);
                      })) || [];
              }),
              (t.prototype.exportData = function () {
                return {
                  upgrades: this.upgrades.map(function (e) {
                    return Zi({}, e);
                  }),
                };
              }),
              (t.prototype.regenerateCache = function () {
                var e = this;
                (this.tickPerf = 0),
                  (this.cachedUpgrades = bi.map(function (t) {
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
                    var n = bi.find(function (e) {
                      return e.id === t.id;
                    });
                    if (!n) return t;
                    var r = e.upgrades.find(function (e) {
                      return e.id === n.id;
                    });
                    r || ((r = { id: n.id, level: 0 }), e.upgrades.push(r));
                    var i = te.calcBatchAll(
                        n.getCost,
                        ha.getInstance(),
                        new d.Z(r.level),
                        ha.getInstance().resources.getBatchObject()
                      ),
                      o =
                        (i.reduce(function (e, t) {
                          return e && !t.isBlocked;
                        }, !0),
                        i.reduce(function (e, t) {
                          return Math.max(e, t.eta);
                        }, 0)),
                      a = i.reduce(function (e, t) {
                        return d.Z.min(e, t.max);
                      }, new d.Z("1.e+30000"));
                    return (
                      r.level <= 0 &&
                        ma.newNotifications.registerNotification(
                          "city:academy:upgrade:".concat(n.id)
                        ),
                      Zi(Zi({}, t), {
                        etaNum: o,
                        isAvailable: a.greaterThanOrEqualTo(1),
                        cost: ha
                          .getInstance()
                          .resources.assertEnought(
                            i,
                            ha.getInstance().resources.getBatchObject(),
                            ha.getInstance().resources.getBatchBalanceObject()
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
                  isUnlocked: ha
                    .getInstance()
                    .resources.getResourceCap(r.MANA)
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
                  r = this.upgrades.find(function (t) {
                    return t.id === e.id;
                  });
                r || ((r = { id: e.id, level: 0 }), this.upgrades.push(r));
                var i = te.calcBatchAll(
                    e.getCost,
                    ha.getInstance(),
                    new d.Z(r.level + t),
                    ha.getInstance().resources.getBatchObject()
                  ),
                  o = i.reduce(function (e, t) {
                    return e && !t.isBlocked;
                  }, !0),
                  a = i.reduce(function (e, t) {
                    return Math.max(e, t.eta);
                  }, 0),
                  u = i.reduce(function (e, t) {
                    return d.Z.min(e, t.max);
                  }, new d.Z("1.e+30000")),
                  s = e.unlockCondition(ma);
                return (
                  (this.tickPerf += performance.now() - n),
                  {
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    isUnlocked: s,
                    isAvailable: u.greaterThanOrEqualTo(1),
                    cost: ha
                      .getInstance()
                      .resources.assertEnought(
                        i,
                        ha.getInstance().resources.getBatchObject(),
                        ha.getInstance().resources.getBatchBalanceObject()
                      ),
                    progress: u.lessThan(1)
                      ? (100 * u.toNumber()).toPrecision(3)
                      : "100",
                    isMaxedOut: !!e.maxLevel && e.maxLevel <= r.level,
                    maxLevel: e.maxLevel,
                    level: r.level + t,
                    isBlocked: !o,
                    etaNum: a,
                  }
                );
              }),
              (t.prototype.doUpgrade = function (e) {
                var t = bi.find(function (t) {
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
                  var r = te.calcBatchAll(
                      t.getCost,
                      ha.getInstance(),
                      new d.Z(this.upgrades[n].level),
                      ha.getInstance().resources.getBatchObject()
                    ),
                    i = r.reduce(function (e, t) {
                      return d.Z.min(e, t.max.floor());
                    }, new d.Z("1.e+30000"));
                  if (
                    (console.log("[upgrade] mx: ", i.toNumber()),
                    !i.lessThan(1))
                  )
                    return (
                      (this.upgrades[n].level = this.upgrades[n].level + 1),
                      console.log("costs: ", r),
                      ha.getInstance().resources.subtractResourceBatch(r),
                      ma.resources.reassertBalances(),
                      ma.regenerateCache(),
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
          Pi = Si.getInstance(),
          Ui = [
            {
              id: "spiritual",
              name: "Spiritual",
              description: "",
              unlockCondition: function (e) {
                return !0;
              },
              getCost: ((Vr = {}), (Vr[r.COINS] = new d.Z(1)), Vr),
              getGainMultiplier: ((zr = {}), (zr[r.MANA] = 0.1), zr),
            },
            {
              id: "mana-capable",
              name: "Capable",
              description: "",
              unlockCondition: function (e) {
                return !0;
              },
              getCost: ((Jr = {}), (Jr[r.COINS] = new d.Z(1)), Jr),
              getCapacityMultiplier: ((Qr = {}), (Qr[r.MANA] = 0.1), Qr),
            },
            {
              id: "intelligent",
              name: "Intelligent",
              description: "",
              unlockCondition: function (e) {
                return !0;
              },
              getCost: (($r = {}), ($r[r.COINS] = new d.Z(1)), $r),
              getGainMultiplier: ((ei = {}), (ei[r.KNOWLEDGE] = 0.1), ei),
            },
            {
              id: "wise",
              name: "Wise",
              description: "",
              unlockCondition: function (e) {
                return !0;
              },
              getCost: ((ti = {}), (ti[r.COINS] = new d.Z(1)), ti),
              getCapacityMultiplier: ((ni = {}), (ni[r.KNOWLEDGE] = 0.1), ni),
            },
            {
              id: "erudite",
              name: "Erudite",
              description: "",
              unlockCondition: function (e) {
                return !0;
              },
              getCost: ((ri = {}), (ri[r.COINS] = new d.Z(1)), ri),
              getAttributeMultiplier:
                ((ii = {}), (ii[c.RUNE_READING] = 0.1), ii),
            },
          ],
          Mi = [
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
          Bi = [
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
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          _i = function () {
            return (
              (_i =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              _i.apply(this, arguments)
            );
          },
          Di = (function (e) {
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
                t.workDispatcher.on(
                  "[mercenaries] do set effort",
                  function (e) {
                    console.log("do set effort", e),
                      t.doSetEffort(e.id, e.effort);
                  }
                ),
                t.workDispatcher.on(
                  "[mercenaries] do regenerate shop",
                  function (e) {
                    console.log("do regenerate", e), t.regenerateShop();
                  }
                ),
                t
              );
            }
            return (
              Gi(t, e),
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
                for (var r in this.totalCosts)
                  if (
                    null === (t = this.totalCosts[r]) || void 0 === t
                      ? void 0
                      : t.greaterThan(ma.resources.getResource(r).mul(10 * e))
                  )
                    return (
                      console.log(
                        "COST: ",
                        r,
                        null === (n = this.totalCosts[r]) || void 0 === n
                          ? void 0
                          : n.toNumber()
                      ),
                      !1
                    );
                return !0;
              }),
              (t.prototype.process = function (e) {
                var t = this;
                this.canAfford(e) ||
                  (this.hired.forEach(function (e, n) {
                    t.hired[n].effort =
                      t.hired[n].effort > 0.01 ? t.hired[n].effort / 2 : 0;
                  }),
                  ma.resources.reassertBalances(),
                  ma.regenerateCache());
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
                    r = Math.ceil(n),
                    i = {
                      id: "mer-".concat(Math.random()),
                      name:
                        ((e = Mi[Math.floor(Math.random() * Mi.length)]),
                        (t = Bi[Math.floor(Math.random() * Bi.length)]),
                        "".concat(e, " ").concat(t)),
                      level: 1,
                      effort: 100,
                      traits: [],
                    },
                    o = (function (e, t, n) {
                      if (n || 2 === arguments.length)
                        for (var r, i = 0, o = t.length; i < o; i++)
                          (!r && (i in t)) ||
                            (r || (r = Array.prototype.slice.call(t, 0, i)),
                            (r[i] = t[i]));
                      return e.concat(r || Array.prototype.slice.call(t));
                    })([], Ui, !0),
                    a = 0;
                  a < r;
                  a++
                ) {
                  var u = Math.floor(Math.random() * o.length),
                    s = o.splice(u, 1)[0];
                  i.traits.push({
                    id: s.id,
                    quality: 0.5 + 0.5 * Math.random(),
                  });
                }
                return i;
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
                    te.calcBatch(
                      t.getCost,
                      ha.getInstance(),
                      new d.Z(n)
                    ).forEach(function (t) {
                      var n;
                      e.totalCosts[t.id] || (e.totalCosts[t.id] = new d.Z(0)),
                        (e.totalCosts[t.id] =
                          null === (n = e.totalCosts[t.id]) || void 0 === n
                            ? void 0
                            : n.plus(t.amount.minus(1)));
                    });
                  });
              }),
              (t.prototype.dataToUI = function () {
                var e = this;
                return {
                  isUnlocked:
                    ma.city.academyUpgrades.getUpgradeLevel(a.MERCENARIES) > 0,
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
                  n = te.calcBatch(e.getCost, ha.getInstance(), new d.Z(t)),
                  r = e.getGainMultiplier
                    ? te.calcBatch(
                        e.getGainMultiplier,
                        ha.getInstance(),
                        new d.Z(t)
                      )
                    : [],
                  i = e.getAttributeMultiplier
                    ? te.calcBatch(
                        e.getAttributeMultiplier,
                        ha.getInstance(),
                        new d.Z(t)
                      )
                    : [],
                  o = e.getCapacityMultiplier
                    ? te.calcBatch(
                        e.getCapacityMultiplier,
                        ha.getInstance(),
                        new d.Z(t)
                      )
                    : [],
                  a = te.calcBatchAll(
                    e.getLevelupCost,
                    ha.getInstance(),
                    new d.Z(e.level),
                    ha.getInstance().resources.getBatchObject()
                  ),
                  u = a.reduce(function (e, t) {
                    return d.Z.min(e, t.max);
                  }, new d.Z("1.e+30000"));
                return {
                  id: e.id,
                  name: e.name,
                  description: e.description,
                  consume: n.map(function (e) {
                    return _i(_i({}, e), {
                      amountValue: e.amount.minus(1).toString(),
                      amount: X(e.amount.minus(1)),
                    });
                  }),
                  gainMult: r.map(function (e) {
                    return _i(_i({}, e), {
                      amountValue: e.amount.toString(),
                      amount: "x".concat(X(e.amount)),
                    });
                  }),
                  capMult: o.map(function (e) {
                    return _i(_i({}, e), {
                      amountValue: e.amount.toString(),
                      amount: "x".concat(X(e.amount)),
                    });
                  }),
                  attrMult: i.map(function (e) {
                    return _i(_i({}, e), {
                      amountValue: e.amount.toString(),
                      amount: "x".concat(X(e.amount)),
                    });
                  }),
                  level: e.level,
                  progress: "0",
                  effort: e.effort,
                  maxAmt: u.toNumber(),
                  isLevelupAvailable: u.greaterThanOrEqualTo(1),
                  levelupCost: ha
                    .getInstance()
                    .resources.assertEnought(
                      a,
                      ha.getInstance().resources.getBatchObject(),
                      ha.getInstance().resources.getBatchBalanceObject()
                    ),
                };
              }),
              (t.prototype.calculateMercenary = function (e) {
                var t,
                  n = {},
                  i = {},
                  o = {},
                  a = {},
                  u = [];
                return (
                  e.traits.forEach(function (e) {
                    var t = Ui.find(function (t) {
                      return t.id === e.id;
                    });
                    t &&
                      (u.push(t.name),
                      t.getAttributeMultiplier &&
                        Object.entries(t.getAttributeMultiplier).forEach(
                          function (t) {
                            var n = t[0],
                              r = t[1];
                            i[n] || (i[n] = 0), (i[n] += r * e.quality);
                          }
                        ),
                      t.getCapacityMultiplier &&
                        Object.entries(t.getCapacityMultiplier).forEach(
                          function (t) {
                            var n = t[0],
                              r = t[1];
                            o[n] || (o[n] = 0), (o[n] += r * e.quality);
                          }
                        ),
                      t.getGainMultiplier &&
                        Object.entries(t.getGainMultiplier).forEach(function (
                          t
                        ) {
                          var r = t[0],
                            i = t[1];
                          n[r] || (n[r] = 0), (n[r] += i * e.quality);
                        }),
                      t.getCost &&
                        Object.entries(t.getCost).forEach(function (t) {
                          var n = t[0],
                            r = t[1];
                          a[n] || (a[n] = new d.Z(0)),
                            (a[n] = a[n].plus(r.mul(e.quality)));
                        }));
                  }),
                  {
                    id: e.id,
                    level: e.level,
                    name: e.name,
                    description: u.join(", "),
                    getCost: ar(a, function (e) {
                      return function (t) {
                        return {
                          A: new d.Z(1),
                          B: e.plus(1),
                          type: y.EXPONENTIAL,
                        };
                      };
                    }),
                    getAttributeMultiplier: ar(i, function (e) {
                      return function (t) {
                        return {
                          A: new d.Z(1),
                          B: new d.Z(1 + e),
                          type: y.EXPONENTIAL,
                        };
                      };
                    }),
                    getCapacityMultiplier: ar(o, function (e) {
                      return function (t) {
                        return {
                          A: new d.Z(1),
                          B: new d.Z(1 + e),
                          type: y.EXPONENTIAL,
                        };
                      };
                    }),
                    getGainMultiplier: ar(n, function (e) {
                      return function (t) {
                        return {
                          A: new d.Z(1),
                          B: new d.Z(1 + e),
                          type: y.EXPONENTIAL,
                        };
                      };
                    }),
                    effort: e.effort,
                    getLevelupCost:
                      ((t = {}),
                      (t[r.KNOWLEDGE] = function (e) {
                        return {
                          A: new d.Z("2.e+9"),
                          B: new d.Z(2),
                          type: y.EXPONENTIAL,
                        };
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
                    this.hired.push(_i(_i({}, n), { effort: 0 })),
                      ma.resources.reassertBalances(),
                      ma.regenerateCache();
                  }
                }
              }),
              (t.prototype.doFire = function (e) {
                var t = this.hired.findIndex(function (t) {
                  return t.id === e;
                });
                if (!(t < 0)) {
                  var n = this.hired.splice(t, 1)[0];
                  this.shop.push(_i(_i({}, n), { effort: 0 })),
                    ma.resources.reassertBalances(),
                    ma.regenerateCache();
                }
              }),
              (t.prototype.doLevelUp = function (e, t) {
                var n = this.hired.findIndex(function (t) {
                  return t.id === e;
                });
                if (!(n < 0)) {
                  var r = this.hiredCached.find(function (t) {
                    return t.id === e;
                  });
                  if (r) {
                    var i = te.calcBatchAll(
                        r.getLevelupCost,
                        ha.getInstance(),
                        new d.Z(r.level),
                        ha.getInstance().resources.getBatchObject(),
                        new d.Z(t)
                      ),
                      o = i.reduce(function (e, t) {
                        return d.Z.min(e, t.max.floor());
                      }, new d.Z("1.e+30000"));
                    if (
                      (console.log("[level-up] mx: ", o.toNumber()),
                      !o.lessThan(1))
                    ) {
                      var a = d.Z.min(o, t);
                      return (
                        (this.hired[n].level += a.toNumber()),
                        console.log("costs: ", i, a.toNumber()),
                        ha.getInstance().resources.subtractResourceBatch(i),
                        this.regenerateCache(),
                        ma.resources.reassertBalances(),
                        ma.regenerateCache(),
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
                  ((this.hired[n].effort =
                    t && !Number.isNaN(+t) ? Math.min(100, Math.max(0, t)) : 0),
                  this.regenerateCache(),
                  ma.resources.reassertBalances(),
                  ma.regenerateCache());
              }),
              (t.prototype.getResourceBeingStoredMultiplier = function (e) {
                var t = this.hiredCached.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getCapacityMultiplier) ||
                    void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  n = [];
                return (
                  t.forEach(function (t) {
                    var r;
                    if (
                      null === (r = t.getCapacityMultiplier) || void 0 === r
                        ? void 0
                        : r[e]
                    ) {
                      var i = te.calculate(
                        ma,
                        t.getCapacityMultiplier[e],
                        new d.Z((t.level * t.effort) / 100)
                      );
                      i.equals(1) ||
                        n.push({
                          label: "Mercenary: ".concat(t.name),
                          value: i,
                          id: "mercenary-".concat(t.id),
                          category: "Mercenaries",
                        });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getResourceBeingProducedMultiplier = function (e) {
                var t = this.hiredCached.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getGainMultiplier) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  n = [];
                return (
                  t.forEach(function (t) {
                    var r;
                    if (
                      null === (r = t.getGainMultiplier) || void 0 === r
                        ? void 0
                        : r[e]
                    ) {
                      var i = te.calculate(
                        ma,
                        t.getGainMultiplier[e],
                        new d.Z((t.level * t.effort) / 100)
                      );
                      i.equals(1) ||
                        n.push({
                          label: "Mercenary: ".concat(t.name),
                          value: i,
                          id: "mercenary-".concat(t.id),
                          category: "Mercenaries",
                        });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getResourceBeingConsumed = function (e) {
                var t = this.hiredCached.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getCost) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  n = [];
                return (
                  t.forEach(function (t) {
                    var r;
                    if (
                      null === (r = t.getCost) || void 0 === r ? void 0 : r[e]
                    ) {
                      var i = te
                        .calculate(
                          ma,
                          t.getCost[e],
                          new d.Z((t.level * t.effort) / 100)
                        )
                        .minus(1);
                      i.equals(0) ||
                        n.push({
                          label: "Mercenary: ".concat(t.name),
                          value: i,
                          id: "mercenary-".concat(t.id),
                          category: "Mercenaries",
                        });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getAttributeMultiplier = function (e) {
                var t = this.hiredCached.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getAttributeMultiplier) ||
                    void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  n = [];
                return (
                  t.forEach(function (t) {
                    var r;
                    if (
                      null === (r = t.getAttributeMultiplier) || void 0 === r
                        ? void 0
                        : r[e]
                    ) {
                      var i = te.calculate(
                        ma,
                        t.getAttributeMultiplier[e],
                        new d.Z((t.level * t.effort) / 100)
                      );
                      i.equals(1) ||
                        n.push({
                          label: "Mercenary: ".concat(t.name),
                          value: i,
                          id: "mercenary-".concat(t.id),
                          category: "Mercenaries",
                        });
                    }
                  }, 0),
                  n
                );
              }),
              t
            );
          })(s),
          ki = Di.getInstance(),
          xi = function (e, t) {
            var n = Ni.filter(t).reduce(function (e, t) {
              return (e[t.id] = t), e;
            }, {});
            return e.city.actions.actions.reduce(function (e, t) {
              var r = n[t.id];
              return r ? (e = e.plus(t.numPerformed.mul(r.xpGain))) : e;
            }, new d.Z(0));
          },
          Wi = [
            {
              id: z.SCHOLAR,
              name: "Scholar",
              description:
                "Improve your learning abilities, increasing runes learning speed",
              unlockCondition: function (e) {
                return !0;
              },
              getPointsReward: function (e) {
                return xi(e, function () {
                  return !0;
                });
              },
              getBonus: function (e, t) {
                return d.Z.max(1, g(t.div(1e4), 1.5));
              },
              getBonusText: function (e) {
                return "x#BONUS# rune learning speed";
              },
              getMinimumPoints: function (e) {
                return new d.Z(1e5);
              },
            },
            {
              id: z.PHYSICAL,
              name: "Physical",
              description:
                "Improve your physical power, making all physical actions executed faster",
              unlockCondition: function (e) {
                return !0;
              },
              getPointsReward: function (e) {
                return xi(e, function () {
                  return !0;
                });
              },
              getBonus: function (e, t) {
                return d.Z.max(1, g(t.div(1e4), 0.4));
              },
              getSecondaryBonus: function (e, t) {
                return d.Z.max(1, g(t.div(1e4), 0.1));
              },
              getBonusText: function (e) {
                return "x#BONUS# physical actions max speed, x#SECONDARY_BONUS# to physical actions speed";
              },
              getMinimumPoints: function (e) {
                return new d.Z(1e5);
              },
            },
            {
              id: z.MENTAL,
              name: "Mental",
              description:
                "Improve your mental power, making all mental actions executed faster",
              unlockCondition: function (e) {
                return !0;
              },
              getPointsReward: function (e) {
                return xi(e, function () {
                  return !0;
                });
              },
              getBonus: function (e, t) {
                return d.Z.max(1, g(t.div(1e4), 0.4));
              },
              getSecondaryBonus: function (e, t) {
                return d.Z.max(1, g(t.div(1e4), 0.1));
              },
              getBonusText: function (e) {
                return "x#BONUS# mental actions max speed, x#SECONDARY_BONUS# to mental actions speed";
              },
              getMinimumPoints: function (e) {
                return new d.Z(1e5);
              },
            },
            {
              id: z.MAGICAL,
              name: "Magical",
              description:
                "Improve your magic power, making all spells executed faster",
              unlockCondition: function (e) {
                return (
                  ma.city.academyUpgrades.getUpgradeLevel(a.ILLUSION_SPELLS) > 0
                );
              },
              getPointsReward: function (e) {
                return xi(e, function () {
                  return !0;
                });
              },
              getBonus: function (e, t) {
                return d.Z.max(1, g(t.div(1e7), 0.4));
              },
              getSecondaryBonus: function (e, t) {
                return d.Z.max(1, g(t.div(1e7), 0.1));
              },
              getBonusText: function (e) {
                return "x#BONUS# spell max speed, x#SECONDARY_BONUS# to spell speed";
              },
              getMinimumPoints: function (e) {
                return new d.Z(1e7);
              },
            },
          ],
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
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          Xi = function () {
            return (
              (Xi =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              Xi.apply(this, arguments)
            );
          },
          ji = (function (e) {
            function t() {
              var t,
                n = e.call(this) || this;
              return (
                (n.state = []),
                (n.uiCache = []),
                (n.bonusesCached =
                  (((t = {})[z.SCHOLAR] = new d.Z(1)),
                  (t[z.PHYSICAL] = new d.Z(1)),
                  (t[z.MENTAL] = new d.Z(1)),
                  (t[z.MAGICAL] = new d.Z(1)),
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
              Ki(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                this.state =
                  (null == e
                    ? void 0
                    : e.resets.map(function (e) {
                        return Xi(Xi({}, e), {
                          numPoints: new d.Z(e.numPoints),
                        });
                      })) || [];
              }),
              (t.prototype.exportData = function () {
                return {
                  resets: this.state.map(function (e) {
                    return Xi(Xi({}, e), {
                      numPoints: e.numPoints.toPrecision(18),
                    });
                  }),
                };
              }),
              (t.prototype.regenerateCache = function () {
                var e = this;
                Wi.forEach(function (t) {
                  var n = e.state.find(function (e) {
                    return e.id === t.id;
                  });
                  e.bonusesCached[t.id] = n
                    ? t.getBonus(ma, n.numPoints)
                    : new d.Z(1);
                }),
                  (this.uiCache = Wi.map(function (t) {
                    return e.processToUI(t);
                  }));
              }),
              (t.prototype.dataToUI = function () {
                return {
                  resets: this.uiCache.filter(function (e) {
                    return e.isUnlocked;
                  }),
                  isUnlocked:
                    ha
                      .getInstance()
                      .city.academyUpgrades.getUpgradeLevel(a.REINCARNATION) >
                    0,
                };
              }),
              (t.prototype.processToUI = function (e) {
                var t = e.getPointsReward(ma),
                  n = this.state.find(function (t) {
                    return t.id === e.id;
                  }),
                  r = new d.Z(1);
                n && (r = n.numPoints);
                var i = e.getBonusText(ma),
                  o = i.replace("#BONUS#", X(e.getBonus(ma, r))),
                  a = i.replace("#BONUS#", X(e.getBonus(ma, t)));
                e.getSecondaryBonus &&
                  ((o = o.replace(
                    "#SECONDARY_BONUS#",
                    X(e.getSecondaryBonus(ma, r))
                  )),
                  (a = a.replace(
                    "#SECONDARY_BONUS#",
                    X(e.getSecondaryBonus(ma, t))
                  )));
                var u = d.Z.max(e.getMinimumPoints(ma), r).sub(t);
                return (
                  t.greaterThanOrEqualTo(r) &&
                    u.lessThanOrEqualTo(0) &&
                    e.unlockCondition(ma) &&
                    ma.newNotifications.registerNotification(
                      "city:reincarnations:reincarnation:".concat(e.id)
                    ),
                  {
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    potentialBonus: a,
                    isAvailable:
                      t.greaterThanOrEqualTo(r) && u.lessThanOrEqualTo(0),
                    pointsLeft: X(u),
                    isUnlocked: e.unlockCondition(ma),
                    bonus: o,
                  }
                );
              }),
              (t.prototype.doReincarnate = function (e) {
                var t = Wi.find(function (t) {
                  return t.id === e;
                });
                if (t) {
                  var n = t.getPointsReward(ma),
                    r = this.state.findIndex(function (e) {
                      return e.id === t.id;
                    });
                  if (
                    (r < 0 &&
                      ((r = this.state.length),
                      this.state.push({
                        id: e,
                        numReincarnations: 0,
                        numPoints: new d.Z(1),
                      })),
                    !this.state[r].numPoints.greaterThan(n))
                  ) {
                    this.state[r].numPoints = n;
                    for (var i = 0; i < ma.learning.runes.runes.length; i++)
                      ma.city.academyUpgrades.getUpgradeLevel(
                        a.RUNE_PROTECTION
                      ) <= 0
                        ? (ma.learning.runes.runes[i].level = new d.Z(0))
                        : (ma.learning.runes.runes[i].level = d.Z.min(
                            ma.learning.runes.runes[i].level,
                            Math.pow(
                              2 *
                                ma.city.academyUpgrades.getUpgradeLevel(
                                  a.RUNE_PROTECTION
                                ),
                              2
                            )
                          )),
                        (ma.learning.runes.runes[i].isActive = !1),
                        (ma.learning.runes.runes[i].isLearning = !1),
                        (ma.learning.runes.runes[i].xp = new d.Z(0)),
                        (ma.learning.runes.runes[i].xpMult = new d.Z(1));
                    (ma.statistics.stats.fastestReincarnateTime = ma.statistics
                      .stats.numReincarnations
                      ? Math.min(
                          ma.statistics.stats.fastestReincarnateTime,
                          ma.statistics.stats.timeThisReincarnation
                        )
                      : ma.statistics.stats.timeThisReincarnation),
                      (ma.statistics.stats.timeThisReincarnation = 0),
                      ma.learning.wizardOrb.reset(),
                      ma.learning.runeUpgrades.reset(),
                      ma.newNotifications.resetNotifications(),
                      ma.resources.reset(),
                      ma.learning.runePresets.runDefault(),
                      this.state[r].numReincarnations++,
                      ma.city.actions.reset(),
                      ma.resources.reassertBalances(),
                      ma.regenerateCache(),
                      ma.learning.runePresets.applyPreset(),
                      ma.statistics.stats.numReincarnations++,
                      (ma.statistics.stats.actions = {});
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
          qi = ji.getInstance(),
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
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          Fi = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.actions = Li),
                (t.academyUpgrades = Pi),
                (t.mercenaries = ki),
                (t.reincarnation = qi),
                t
              );
            }
            return (
              Yi(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                this.actions.importData(null == e ? void 0 : e.actions),
                  this.academyUpgrades.importData(
                    null == e ? void 0 : e.academy
                  ),
                  this.mercenaries.importData(null == e ? void 0 : e.mercenary),
                  this.reincarnation.importData(
                    null == e ? void 0 : e.reincarnations
                  );
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
                  r = this.reincarnation.dataToUI();
                return {
                  isUnlocked: e.isUnlocked,
                  mercenaries: n,
                  academy: t,
                  actions: e,
                  reincarnation: r,
                };
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
          Hi = Fi.getInstance(),
          Vi = (function () {
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
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          zi = function () {
            return (
              (zi =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              zi.apply(this, arguments)
            );
          },
          Ji = {
            timeInGame: 0,
            timeThisRune: 0,
            fastestRuneTime: 0,
            numRuneResets: 0,
            numReincarnations: 0,
            timeThisReincarnation: 0,
            fastestReincarnateTime: 0,
            actions: {},
          },
          Qi = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (t.stats = zi({}, Ji)), t;
            }
            return (
              Vi(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                var t = e || {
                  timeInGame: 0,
                  timeThisRune: 0,
                  numRuneResets: 0,
                };
                this.stats = zi(zi({}, Ji), t);
              }),
              (t.prototype.exportData = function () {
                return this.stats;
              }),
              (t.prototype.dataToUI = function () {
                return zi({}, this.stats);
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
              (t.prototype.reset = function () {}),
              t
            );
          })(s),
          $i = Qi.getInstance(),
          eo = [
            {
              id: r.REFINED_WOOD,
              name: "Refine Wood",
              getCost:
                ((oi = {}),
                (oi[r.WOOD] = function (e) {
                  return {
                    A: new d.Z(0.2),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (oi[r.CRAFTSMANSHIP] = function (e) {
                  return { A: new d.Z(1), B: new d.Z(2), type: y.EXPONENTIAL };
                }),
                oi),
              getProduce:
                ((ai = {}),
                (ai[r.REFINED_WOOD] = function (e) {
                  return {
                    A: new d.Z(0.02),
                    B: new d.Z(1.5),
                    type: y.EXPONENTIAL,
                  };
                }),
                ai),
              baseSlotsPrice: 1,
              unlockCondition: function (e) {
                return !0;
              },
            },
            {
              id: r.PAPER,
              name: "Craft Paper",
              getCost:
                ((ui = {}),
                (ui[r.WOOD] = function (e) {
                  return { A: new d.Z(1), B: new d.Z(2), type: y.EXPONENTIAL };
                }),
                (ui[r.CRAFTSMANSHIP] = function (e) {
                  return { A: new d.Z(3), B: new d.Z(2), type: y.EXPONENTIAL };
                }),
                ui),
              getProduce:
                ((si = {}),
                (si[r.PAPER] = function (e) {
                  return {
                    A: new d.Z(0.05),
                    B: new d.Z(1.5),
                    type: y.EXPONENTIAL,
                  };
                }),
                si),
              baseSlotsPrice: 2,
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.PAPERWORKING) > 0
                );
              },
            },
            {
              id: r.BRICK,
              name: "Craft Brick",
              getCost:
                ((ci = {}),
                (ci[r.STONE] = function (e) {
                  return {
                    A: new d.Z(0.5),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (ci[r.CRAFTSMANSHIP] = function (e) {
                  return { A: new d.Z(10), B: new d.Z(2), type: y.EXPONENTIAL };
                }),
                ci),
              getProduce:
                ((li = {}),
                (li[r.BRICK] = function (e) {
                  return {
                    A: new d.Z(0.05),
                    B: new d.Z(1.5),
                    type: y.EXPONENTIAL,
                  };
                }),
                li),
              baseSlotsPrice: 2,
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.STONEWORKING) > 0
                );
              },
            },
            {
              id: r.CHARGED_WOOD,
              name: "Charge Wood",
              getCost:
                ((di = {}),
                (di[r.REFINED_WOOD] = function (e) {
                  return { A: new d.Z(1), B: new d.Z(2), type: y.EXPONENTIAL };
                }),
                (di[r.SPARK] = function (e) {
                  return { A: new d.Z(30), B: new d.Z(2), type: y.EXPONENTIAL };
                }),
                (di[r.CRAFTSMANSHIP] = function (e) {
                  return { A: new d.Z(50), B: new d.Z(2), type: y.EXPONENTIAL };
                }),
                di),
              getProduce:
                ((pi = {}),
                (pi[r.CHARGED_WOOD] = function (e) {
                  return {
                    A: new d.Z(0.05),
                    B: new d.Z(1.5),
                    type: y.EXPONENTIAL,
                  };
                }),
                pi),
              baseSlotsPrice: 2,
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.CHARGED_CRAFTING) > 0
                );
              },
            },
            {
              id: r.CHARGED_PAPER,
              name: "Charge Paper",
              getCost:
                ((fi = {}),
                (fi[r.PAPER] = function (e) {
                  return { A: new d.Z(1), B: new d.Z(2), type: y.EXPONENTIAL };
                }),
                (fi[r.SPARK] = function (e) {
                  return { A: new d.Z(50), B: new d.Z(2), type: y.EXPONENTIAL };
                }),
                (fi[r.CRAFTSMANSHIP] = function (e) {
                  return { A: new d.Z(50), B: new d.Z(2), type: y.EXPONENTIAL };
                }),
                fi),
              getProduce:
                ((gi = {}),
                (gi[r.CHARGED_PAPER] = function (e) {
                  return {
                    A: new d.Z(0.05),
                    B: new d.Z(1.5),
                    type: y.EXPONENTIAL,
                  };
                }),
                gi),
              baseSlotsPrice: 2,
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.CHARGED_CRAFTING) > 0
                );
              },
            },
            {
              id: r.SAND,
              name: "Make Sand",
              getCost:
                ((hi = {}),
                (hi[r.STONE] = function (e) {
                  return {
                    A: new d.Z(0.5),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (hi[r.CRAFTSMANSHIP] = function (e) {
                  return { A: new d.Z(50), B: new d.Z(2), type: y.EXPONENTIAL };
                }),
                hi),
              getProduce:
                ((mi = {}),
                (mi[r.SAND] = function (e) {
                  return {
                    A: new d.Z(0.05),
                    B: new d.Z(1.5),
                    type: y.EXPONENTIAL,
                  };
                }),
                mi),
              baseSlotsPrice: 2,
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.GLASSMAKING) > 0
                );
              },
            },
            {
              id: r.GLASS,
              name: "Craft Glass",
              getCost:
                ((vi = {}),
                (vi[r.SAND] = function (e) {
                  return { A: new d.Z(1), B: new d.Z(2), type: y.EXPONENTIAL };
                }),
                (vi[r.MANA] = function (e) {
                  return {
                    A: new d.Z(5e13),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (vi[r.CRAFTSMANSHIP] = function (e) {
                  return {
                    A: new d.Z(150),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                vi),
              getProduce:
                ((yi = {}),
                (yi[r.GLASS] = function (e) {
                  return {
                    A: new d.Z(0.05),
                    B: new d.Z(1.5),
                    type: y.EXPONENTIAL,
                  };
                }),
                yi),
              baseSlotsPrice: 2,
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.GLASSMAKING) > 0
                );
              },
            },
            {
              id: r.IRON_PLATE,
              name: "Craft Iron Plate",
              getCost:
                ((Ei = {}),
                (Ei[r.IRON_ORE] = function (e) {
                  return { A: new d.Z(1), B: new d.Z(2), type: y.EXPONENTIAL };
                }),
                (Ei[r.CRAFTSMANSHIP] = function (e) {
                  return {
                    A: new d.Z(150),
                    B: new d.Z(2),
                    type: y.EXPONENTIAL,
                  };
                }),
                Ei),
              getProduce:
                ((wi = {}),
                (wi[r.IRON_PLATE] = function (e) {
                  return {
                    A: new d.Z(0.02),
                    B: new d.Z(1.5),
                    type: y.EXPONENTIAL,
                  };
                }),
                wi),
              baseSlotsPrice: 2,
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.METALWORKING) > 0
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
            (e.STONE_CRUSHER = "stone_crusher");
        })(Ai || (Ai = {}));
        var to,
          no,
          ro,
          io,
          oo,
          ao,
          uo,
          so,
          co,
          lo,
          po,
          fo,
          go,
          ho,
          mo,
          vo,
          yo,
          Eo,
          wo,
          Ao,
          No,
          Co,
          Io,
          Oo,
          Ro,
          Lo,
          bo,
          To,
          Zo,
          So,
          Po,
          Uo,
          Mo,
          Bo,
          Go,
          _o,
          Do,
          ko,
          xo,
          Wo = (function () {
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
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          Ko = function () {
            return (
              (Ko =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              Ko.apply(this, arguments)
            );
          },
          Xo = function (e, t, n) {
            if (n || 2 === arguments.length)
              for (var r, i = 0, o = t.length; i < o; i++)
                (!r && i in t) ||
                  (r || (r = Array.prototype.slice.call(t, 0, i)),
                  (r[i] = t[i]));
            return e.concat(r || Array.prototype.slice.call(t));
          },
          jo = (function (e) {
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
              Wo(t, e),
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
                eo.forEach(function (t) {
                  var n = e.slots.find(function (e) {
                    return e.id === t.id;
                  });
                  if (!n || n.level < 1)
                    return (
                      (e.cachedCosts[t.id] = []),
                      (e.cachedGains[t.id] = []),
                      (e.cachedCostsUI[t.id] = te.calcBatch(
                        t.getCost,
                        ma,
                        new d.Z(1)
                      )),
                      void (e.cachedGainsUI[t.id] = te.calcBatch(
                        t.getProduce,
                        ma,
                        new d.Z(1)
                      ))
                    );
                  (e.cachedCosts[t.id] = te.calcBatch(
                    t.getCost,
                    ma,
                    new d.Z(n.level)
                  )),
                    (e.cachedGains[t.id] = te.calcBatch(
                      t.getProduce,
                      ma,
                      new d.Z(n.level)
                    )),
                    (e.cachedCostsUI[t.id] = Xo([], e.cachedCosts[t.id], !0)),
                    (e.cachedGainsUI[t.id] = Xo([], e.cachedGains[t.id], !0));
                });
              }),
              (t.prototype.processRecipeAvalilable = function (e) {
                var t,
                  n,
                  r,
                  i = this.slots.find(function (t) {
                    return t.id === e.id;
                  }),
                  o =
                    (new d.Z(
                      null !== (t = null == i ? void 0 : i.level) &&
                      void 0 !== t
                        ? t
                        : 0
                    ),
                    e.unlockCondition(ma));
                return (
                  o &&
                    ma.city.academyUpgrades.getUpgradeLevel(a.WOODWORKING) >
                      0 &&
                    ma.newNotifications.registerNotification(
                      "construction:crafting:recipe:".concat(e.id)
                    ),
                  {
                    id: e.id,
                    name: e.name,
                    isUnlocked: o,
                    cost: this.cachedCostsUI[e.id].map(function (e) {
                      return Ko(Ko({}, e), {
                        amountValue: e.amount.toString(),
                        amount: X(e.amount),
                      });
                    }),
                    gain: this.cachedGainsUI[e.id].map(function (e) {
                      return Ko(Ko({}, e), {
                        amountValue: e.amount.toString(),
                        amount: X(e.amount),
                      });
                    }),
                    level:
                      null !== (n = null == i ? void 0 : i.level) &&
                      void 0 !== n
                        ? n
                        : 0,
                    isActive: !!(null == i ? void 0 : i.level),
                    isPaused:
                      null !== (r = null == i ? void 0 : i.isPaused) &&
                      void 0 !== r &&
                      r,
                  }
                );
              }),
              (t.prototype.getMaxSlots = function () {
                return (
                  6 + ma.construction.structures.getStructureLevel(Ai.FORGE)
                );
              }),
              (t.prototype.getBusySlots = function () {
                return this.slots.reduce(function (e, t) {
                  return e + t.level;
                }, 0);
              }),
              (t.prototype.dataToUI = function () {
                var e = this,
                  t = eo.map(function (t) {
                    return e.processRecipeAvalilable(t);
                  }),
                  n = this.getBusySlots(),
                  r = this.getMaxSlots();
                return {
                  isUnlocked:
                    ma.city.academyUpgrades.getUpgradeLevel(a.WOODWORKING) > 0,
                  recipes: t.filter(function (e) {
                    return e.isUnlocked;
                  }),
                  busySlots: n,
                  totalSlots: r,
                };
              }),
              (t.prototype.setCraftingSlot = function (e, t) {
                var n = this.getBusySlots(),
                  r = this.getMaxSlots() - n,
                  i = this.slots.findIndex(function (t) {
                    return t.id === e;
                  }),
                  o = 0;
                i > -1 && (o = this.slots[i].level),
                  t - o > r && (t = o + r),
                  i > -1
                    ? (this.slots[i].level = t)
                    : this.slots.push({
                        id: e,
                        level: t,
                        isPaused: !1,
                        pauseCd: 0,
                      }),
                  ma.resources.reassertBalances(),
                  ma.regenerateCache();
              }),
              (t.prototype.canAfford = function (e, t) {
                for (var n, r = 0, i = e; r < i.length; r++) {
                  var o = i[r];
                  if (
                    null === (n = null == o ? void 0 : o.amount) || void 0 === n
                      ? void 0
                      : n.greaterThan(
                          ma.resources.getResource(o.id).mul(10 * t)
                        )
                  )
                    return !1;
                }
                return !0;
              }),
              (t.prototype.process = function (e) {
                var t = this;
                this.slots.forEach(function (n, r) {
                  n.level < 0 && (n.level = 0),
                    n.level < 1 ||
                      (n.isPaused &&
                        ((t.slots[r].pauseCd += e),
                        t.slots[r].pauseCd > 2 &&
                          ((t.slots[r].isPaused = !1),
                          ma.resources.reassertBalances(),
                          ma.regenerateCache())),
                      t.slots[r].isPaused ||
                        t.canAfford(t.cachedCosts[n.id], e) ||
                        ((t.slots[r].isPaused = !0),
                        (t.slots[r].pauseCd = 0),
                        ma.resources.reassertBalances(),
                        ma.regenerateCache()));
                });
              }),
              (t.prototype.getResourceGain = function (e) {
                var t = this.slots
                    .filter(function (e) {
                      return e.level >= 1;
                    })
                    .reduce(function (e, t) {
                      return (
                        e[t.id] || t.isPaused || (e[t.id] = new d.Z(t.level)), e
                      );
                    }, {}),
                  n = eo.filter(function (n) {
                    return n.getProduce[e] && t[n.id];
                  }),
                  r = [];
                return (
                  n.forEach(function (n) {
                    var i = te.calculate(ma, n.getProduce[e], t[n.id]);
                    r.push({
                      label: "Crafting: ".concat(n.name),
                      value: i,
                      id: "Crafting: ".concat(n.id),
                      category: "Crafting",
                    });
                  }),
                  r
                );
              }),
              (t.prototype.getResourceConsumption = function (e) {
                var t = this.slots
                    .filter(function (e) {
                      return e.level >= 1;
                    })
                    .reduce(function (e, t) {
                      return (
                        e[t.id] || t.isPaused || (e[t.id] = new d.Z(t.level)), e
                      );
                    }, {}),
                  n = eo.filter(function (n) {
                    return n.getCost[e] && t[n.id];
                  }),
                  r = [];
                return (
                  n.forEach(function (n) {
                    var i = te.calculate(ma, n.getCost[e], t[n.id]);
                    r.push({
                      label: "Crafting: ".concat(n.name),
                      value: i,
                      id: "Crafting: ".concat(n.id),
                      category: "Crafting",
                    });
                  }),
                  r
                );
              }),
              t
            );
          })(s),
          qo = jo.getInstance(),
          Yo = [
            {
              id: Ai.CRAFTING_TABLE,
              name: "Crafting Table",
              description:
                "You need more tools to make crafting more convenient. But you can craft them, dont you?",
              getCost:
                ((to = {}),
                (to[r.REFINED_WOOD] = function (e) {
                  return {
                    A: new d.Z(1),
                    B: new d.Z(1.2),
                    type: y.EXPONENTIAL,
                  };
                }),
                to),
              unlockCondition: function (e) {
                return !0;
              },
              getGainMultiplier:
                ((no = {}),
                (no[r.CRAFTSMANSHIP] = function (e) {
                  return { A: new d.Z(0.2), B: new d.Z(1), type: y.LINEAR };
                }),
                no),
            },
            {
              id: Ai.TRAINING_BENCH,
              name: "Training Bench",
              description:
                "Very basic, but very helpful equipment for trainings. Provide 5% bonuses to Strength and Vitality",
              getCost:
                ((ro = {}),
                (ro[r.REFINED_WOOD] = function (e) {
                  return {
                    A: new d.Z(1),
                    B: new d.Z(1.2),
                    type: y.EXPONENTIAL,
                  };
                }),
                ro),
              unlockCondition: function (e) {
                return !0;
              },
              getAttributeGainMultiplier:
                ((io = {}),
                (io[c.VITALITY] = function (e) {
                  return {
                    A: new d.Z(1),
                    B: new d.Z(1.05),
                    type: y.EXPONENTIAL,
                  };
                }),
                (io[c.STRENGTH] = function (e) {
                  return {
                    A: new d.Z(1),
                    B: new d.Z(1.05),
                    type: y.EXPONENTIAL,
                  };
                }),
                io),
            },
            {
              id: Ai.RUNE_HOLDER,
              name: "Rune Holder",
              description:
                "Lets work on something making runes learning more efficient. At least, these wooden holders should help you a bit",
              getCost:
                ((oo = {}),
                (oo[r.REFINED_WOOD] = function (e) {
                  return {
                    A: new d.Z(2),
                    B: new d.Z(1.2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (oo[r.MANA] = function (e) {
                  return {
                    A: new d.Z("1.e+8"),
                    B: new d.Z(1.2),
                    type: y.EXPONENTIAL,
                  };
                }),
                oo),
              unlockCondition: function (e) {
                return !0;
              },
              getAttributeGainMultiplier:
                ((ao = {}),
                (ao[c.RUNE_MASTERY] = function (e) {
                  return {
                    A: new d.Z(1),
                    B: new d.Z(1.05),
                    type: y.EXPONENTIAL,
                  };
                }),
                ao),
            },
            {
              id: Ai.BOOKSHELL,
              name: "Bookshell",
              description:
                "It looks like there is complete disorder in your library. An extra shelf will help organize your notebooks with notes.",
              getCost:
                ((uo = {}),
                (uo[r.REFINED_WOOD] = function (e) {
                  return {
                    A: new d.Z(5),
                    B: new d.Z(1.2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (uo[r.MANA] = function (e) {
                  return {
                    A: new d.Z("1.e+8"),
                    B: new d.Z(1.2),
                    type: y.EXPONENTIAL,
                  };
                }),
                uo),
              unlockCondition: function (e) {
                return !0;
              },
              getCapacityMultiplier:
                ((so = {}),
                (so[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(1),
                    B: new d.Z(1.05),
                    type: y.EXPONENTIAL,
                  };
                }),
                so),
            },
            {
              id: Ai.MANUSCRIPT,
              name: "Manuscript",
              description:
                "Build some magic manuscript to improve your willpower",
              getCost:
                ((co = {}),
                (co[r.PAPER] = function (e) {
                  return {
                    A: new d.Z(1),
                    B: new d.Z(1.2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (co[r.MANA] = function (e) {
                  return {
                    A: new d.Z("1.e+10"),
                    B: new d.Z(1.2),
                    type: y.EXPONENTIAL,
                  };
                }),
                co),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.PAPERWORKING) > 0
                );
              },
              getAttributeGainMultiplier:
                ((lo = {}),
                (lo[c.WILLPOWER] = function (e) {
                  return {
                    A: new d.Z(1),
                    B: new d.Z(1.05),
                    type: y.EXPONENTIAL,
                  };
                }),
                lo),
            },
            {
              id: Ai.SCROLL,
              name: "Magic Scroll",
              description: "Magic scroll, boosting your Spellbinding",
              getCost:
                ((po = {}),
                (po[r.PAPER] = function (e) {
                  return {
                    A: new d.Z(1),
                    B: new d.Z(1.2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (po[r.MANA] = function (e) {
                  return {
                    A: new d.Z("1.e+10"),
                    B: new d.Z(1.2),
                    type: y.EXPONENTIAL,
                  };
                }),
                po),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.PAPERWORKING) > 0
                );
              },
              getAttributeGainMultiplier:
                ((fo = {}),
                (fo[c.MAGIC_KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(1),
                    B: new d.Z(1.05),
                    type: y.EXPONENTIAL,
                  };
                }),
                fo),
            },
            {
              id: Ai.STONE_WALL,
              name: "Stone Wall",
              description:
                "My home is my fortress. Build some walls to prevent yourself from disruption when resting, to increase rest efficiency",
              getCost:
                ((go = {}),
                (go[r.BRICK] = function (e) {
                  return {
                    A: new d.Z(2),
                    B: new d.Z(1.2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (go[r.REFINED_WOOD] = function (e) {
                  return {
                    A: new d.Z(2),
                    B: new d.Z(1.2),
                    type: y.EXPONENTIAL,
                  };
                }),
                go),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.STONEWORKING) > 0
                );
              },
              getGainMultiplier:
                ((ho = {}),
                (ho[r.ENERGY] = function (e) {
                  return {
                    A: new d.Z(1),
                    B: new d.Z(1.05),
                    type: y.EXPONENTIAL,
                  };
                }),
                ho),
            },
            {
              id: Ai.CELLAR,
              name: "Cellar",
              description: "You must have some place to store your goods",
              getCost:
                ((mo = {}),
                (mo[r.BRICK] = function (e) {
                  return {
                    A: new d.Z(3),
                    B: new d.Z(1.2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (mo[r.REFINED_WOOD] = function (e) {
                  return {
                    A: new d.Z(1),
                    B: new d.Z(1.2),
                    type: y.EXPONENTIAL,
                  };
                }),
                mo),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.STONEWORKING) > 0
                );
              },
              getCapacityMultiplier:
                ((vo = {}),
                (vo[r.COINS] = function (e) {
                  return {
                    A: new d.Z(1),
                    B: new d.Z(1.05),
                    type: y.EXPONENTIAL,
                  };
                }),
                vo),
            },
            {
              id: Ai.LUMBERMILL,
              name: "Lumbermill",
              description: "Increase your wood craft efficiency",
              getCost:
                ((yo = {}),
                (yo[r.BRICK] = function (e) {
                  return {
                    A: new d.Z(2),
                    B: new d.Z(1.2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (yo[r.REFINED_WOOD] = function (e) {
                  return {
                    A: new d.Z(5),
                    B: new d.Z(1.2),
                    type: y.EXPONENTIAL,
                  };
                }),
                yo),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.STONEWORKING) > 0
                );
              },
              getGainMultiplier:
                ((Eo = {}),
                (Eo[r.REFINED_WOOD] = function (e) {
                  return {
                    A: new d.Z(1),
                    B: new d.Z(1.05),
                    type: y.EXPONENTIAL,
                  };
                }),
                (Eo[r.CHARGED_WOOD] = function (e) {
                  return {
                    A: new d.Z(1),
                    B: new d.Z(1.05),
                    type: y.EXPONENTIAL,
                  };
                }),
                Eo),
            },
            {
              id: Ai.MAGIC_CLOCK,
              name: "Magic Clock",
              description:
                "Create clock that able to slow down time around you, increasing your actions speed",
              getCost:
                ((wo = {}),
                (wo[r.CHARGED_WOOD] = function (e) {
                  return {
                    A: new d.Z(3),
                    B: new d.Z(1.2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (wo[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z("1.e+13"),
                    B: new d.Z(1.2),
                    type: y.EXPONENTIAL,
                  };
                }),
                wo),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.CHARGED_CRAFTING) > 0
                );
              },
              getAttributeGainMultiplier:
                ((Ao = {}),
                (Ao[c.AGILITY] = function (e) {
                  return {
                    A: new d.Z(1),
                    B: new d.Z(1.05),
                    type: y.EXPONENTIAL,
                  };
                }),
                Ao),
            },
            {
              id: Ai.MAGIC_SCROLL,
              name: "Magic Scroll",
              description:
                "Create more sophisticated but pretty useful scroll, amplifying your magic and mental abilities",
              getCost:
                ((No = {}),
                (No[r.CHARGED_PAPER] = function (e) {
                  return {
                    A: new d.Z(3),
                    B: new d.Z(1.2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (No[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z("1.e+13"),
                    B: new d.Z(1.2),
                    type: y.EXPONENTIAL,
                  };
                }),
                No),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.CHARGED_CRAFTING) > 0
                );
              },
              getAttributeGainMultiplier:
                ((Co = {}),
                (Co[c.RUNE_READING] = function (e) {
                  return {
                    A: new d.Z(1),
                    B: new d.Z(1.02),
                    type: y.EXPONENTIAL,
                  };
                }),
                (Co[c.MAGIC_KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z(1),
                    B: new d.Z(1.02),
                    type: y.EXPONENTIAL,
                  };
                }),
                Co),
            },
            {
              id: Ai.MANA_ORB,
              name: "Mana Orb",
              description: "Create additional mana orb to store your mana",
              getCost:
                ((Io = {}),
                (Io[r.GLASS] = function (e) {
                  return {
                    A: new d.Z(3),
                    B: new d.Z(1.2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (Io[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new d.Z("5.e+13"),
                    B: new d.Z(1.2),
                    type: y.EXPONENTIAL,
                  };
                }),
                Io),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.GLASSMAKING) > 0
                );
              },
              getCapacityMultiplier:
                ((Oo = {}),
                (Oo[r.MANA] = function (e) {
                  return {
                    A: new d.Z(1),
                    B: new d.Z(1.05),
                    type: y.EXPONENTIAL,
                  };
                }),
                Oo),
            },
            {
              id: Ai.CONJURATION_ORB,
              name: "Conjuration Orb",
              description: "Increase your conjuration spell speed",
              getCost:
                ((Ro = {}),
                (Ro[r.CHARGED_WOOD] = function (e) {
                  return {
                    A: new d.Z(5),
                    B: new d.Z(1.2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (Ro[r.GLASS] = function (e) {
                  return {
                    A: new d.Z(5),
                    B: new d.Z(1.2),
                    type: y.EXPONENTIAL,
                  };
                }),
                Ro),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.GLASSMAKING) > 0
                );
              },
              getAttributeGainMultiplier:
                ((Lo = {}),
                (Lo[c.CONJURATION_LORE] = function (e) {
                  return {
                    A: new d.Z(1),
                    B: new d.Z(1.05),
                    type: y.EXPONENTIAL,
                  };
                }),
                Lo),
            },
            {
              id: Ai.FORGE,
              name: "Forge",
              description: "Increase your max crafting slots by 1",
              getCost:
                ((bo = {}),
                (bo[r.REFINED_WOOD] = function (e) {
                  return {
                    A: new d.Z(5),
                    B: new d.Z(1.2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (bo[r.BRICK] = function (e) {
                  return {
                    A: new d.Z(5),
                    B: new d.Z(1.2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (bo[r.IRON_PLATE] = function (e) {
                  return {
                    A: new d.Z(5),
                    B: new d.Z(1.2),
                    type: y.EXPONENTIAL,
                  };
                }),
                bo),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.METALWORKING) > 0
                );
              },
            },
            {
              id: Ai.STONE_CRUSHER,
              name: "Stone Crusher",
              description: "Increase your brick and sand output",
              getCost:
                ((To = {}),
                (To[r.REFINED_WOOD] = function (e) {
                  return {
                    A: new d.Z(5),
                    B: new d.Z(1.2),
                    type: y.EXPONENTIAL,
                  };
                }),
                (To[r.IRON_PLATE] = function (e) {
                  return {
                    A: new d.Z(10),
                    B: new d.Z(1.2),
                    type: y.EXPONENTIAL,
                  };
                }),
                To),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(a.METALWORKING) > 0
                );
              },
              getGainMultiplier:
                ((Zo = {}),
                (Zo[r.BRICK] = function (e) {
                  return {
                    A: new d.Z(1),
                    B: new d.Z(1.05),
                    type: y.EXPONENTIAL,
                  };
                }),
                (Zo[r.SAND] = function (e) {
                  return {
                    A: new d.Z(1),
                    B: new d.Z(1.05),
                    type: y.EXPONENTIAL,
                  };
                }),
                Zo),
            },
          ],
          Fo = (function () {
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
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          Ho = function () {
            return (
              (Ho =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              Ho.apply(this, arguments)
            );
          },
          Vo = (function (e) {
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
              Fo(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                this.structures =
                  (null == e
                    ? void 0
                    : e.list.map(function (e) {
                        return Ho({}, e);
                      })) || [];
              }),
              (t.prototype.exportData = function () {
                return {
                  list: this.structures.map(function (e) {
                    return Ho({}, e);
                  }),
                };
              }),
              (t.prototype.regenerateCache = function () {
                var e = this;
                (this.tickPerf = 0),
                  (this.cachedStructures = Yo.map(function (t) {
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
                    var n = Yo.find(function (e) {
                      return e.id === t.id;
                    });
                    if (!n) return t;
                    var r = e.structures.find(function (e) {
                      return e.id === n.id;
                    });
                    r || ((r = { id: n.id, level: 0 }), e.structures.push(r));
                    var i = te.calcBatchAll(
                        n.getCost,
                        ha.getInstance(),
                        new d.Z(r.level),
                        ha.getInstance().resources.getBatchObject()
                      ),
                      o =
                        (i.reduce(function (e, t) {
                          return e && !t.isBlocked;
                        }, !0),
                        i.reduce(function (e, t) {
                          return Math.max(e, t.eta);
                        }, 0)),
                      u = i.reduce(function (e, t) {
                        return d.Z.min(e, t.max);
                      }, new d.Z("1.e+30000"));
                    return (
                      ma.city.academyUpgrades.getUpgradeLevel(a.WOODWORKING) >
                        0 &&
                        ma.newNotifications.registerNotification(
                          "construction:structures:structure:".concat(n.id)
                        ),
                      Ho(Ho({}, t), {
                        etaNum: o,
                        isAvailable: u.greaterThanOrEqualTo(1),
                        cost: ha
                          .getInstance()
                          .resources.assertEnought(
                            i,
                            ha.getInstance().resources.getBatchObject(),
                            ha.getInstance().resources.getBatchBalanceObject()
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
                  isUnlocked: ha
                    .getInstance()
                    .resources.getResourceCap(r.MANA)
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
                n || ((n = { id: e.id, level: 0 }), this.structures.push(n));
                var r = te.calcBatchAll(
                    e.getCost,
                    ha.getInstance(),
                    new d.Z(n.level + t),
                    ha.getInstance().resources.getBatchObject()
                  ),
                  i = e.getGain
                    ? te.calcBatch(e.getGain, ma, new d.Z(n.level))
                    : [],
                  o = e.getGainMultiplier
                    ? te.calcBatch(
                        e.getGainMultiplier,
                        ma,
                        new d.Z(n.level + t)
                      )
                    : [],
                  a = e.getCapacityEffect
                    ? te.calcBatch(
                        e.getCapacityEffect,
                        ma,
                        new d.Z(n.level + t)
                      )
                    : [],
                  u = e.getCapacityMultiplier
                    ? te.calcBatch(
                        e.getCapacityMultiplier,
                        ma,
                        new d.Z(n.level + t)
                      )
                    : [],
                  s = e.getAttributeGain
                    ? te.calcBatch(e.getAttributeGain, ma, new d.Z(n.level + t))
                    : [],
                  c = e.getAttributeGainMultiplier
                    ? te.calcBatch(
                        e.getAttributeGainMultiplier,
                        ma,
                        new d.Z(n.level + t)
                      )
                    : [],
                  l = r.reduce(function (e, t) {
                    return e && !t.isBlocked;
                  }, !0),
                  p = r.reduce(function (e, t) {
                    return Math.max(e, t.eta);
                  }, 0),
                  f = r.reduce(function (e, t) {
                    return d.Z.min(e, t.max);
                  }, new d.Z("1.e+30000")),
                  g = e.unlockCondition(ma);
                return {
                  id: e.id,
                  name: e.name,
                  description: e.description,
                  isUnlocked: g,
                  isAvailable: f.greaterThanOrEqualTo(1),
                  cost: ha
                    .getInstance()
                    .resources.assertEnought(
                      r,
                      ha.getInstance().resources.getBatchObject(),
                      ha.getInstance().resources.getBatchBalanceObject()
                    ),
                  level: n.level,
                  isBlocked: !l,
                  etaNum: p,
                  attr: s.map(function (e) {
                    return Ho(Ho({}, e), {
                      amountValue: e.amount.toString(),
                      amount: "+".concat(X(e.amount)),
                    });
                  }),
                  attrMult: c.map(function (e) {
                    return Ho(Ho({}, e), {
                      amountValue: e.amount.toString(),
                      amount: "x".concat(X(e.amount)),
                    });
                  }),
                  capGain: a.map(function (e) {
                    return Ho(Ho({}, e), {
                      amountValue: e.amount.toString(),
                      amount: "+".concat(X(e.amount)),
                    });
                  }),
                  capMult: u.map(function (e) {
                    return Ho(Ho({}, e), {
                      amountValue: e.amount.toString(),
                      amount: "x".concat(X(e.amount)),
                    });
                  }),
                  gain: i.map(function (e) {
                    return Ho(Ho({}, e), {
                      amountValue: e.amount.toString(),
                      amount: "+".concat(X(e.amount)),
                    });
                  }),
                  gainMult: o.map(function (e) {
                    return Ho(Ho({}, e), {
                      amountValue: e.amount.toString(),
                      amount: "x".concat(X(e.amount)),
                    });
                  }),
                  progress: f.lessThan(1)
                    ? (100 * f.toNumber()).toPrecision(3)
                    : "100",
                };
              }),
              (t.prototype.doBuild = function (e) {
                var t = Yo.find(function (t) {
                  return t.id === e;
                });
                if ((console.log("[construct] db", t), t)) {
                  var n = this.structures.findIndex(function (t) {
                    return t.id === e;
                  });
                  n < 0 &&
                    ((n = this.structures.length),
                    this.structures.push({ id: e, level: 0 }));
                  var r = te.calcBatchAll(
                      t.getCost,
                      ha.getInstance(),
                      new d.Z(this.structures[n].level),
                      ha.getInstance().resources.getBatchObject()
                    ),
                    i = r.reduce(function (e, t) {
                      return d.Z.min(e, t.max.floor());
                    }, new d.Z("1.e+30000"));
                  if (
                    (console.log("[upgrade] mx: ", i.toNumber()),
                    !i.lessThan(1))
                  )
                    return (
                      (this.structures[n].level = this.structures[n].level + 1),
                      console.log("costs: ", r),
                      ha.getInstance().resources.subtractResourceBatch(r),
                      ma.resources.reassertBalances(),
                      ma.regenerateCache(),
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
                      return e[t.id] || (e[t.id] = new d.Z(t.level)), e;
                    }, {}),
                  n = Yo.filter(function (n) {
                    var r;
                    return (
                      (null === (r = n.getGain) || void 0 === r
                        ? void 0
                        : r[e]) && t[n.id]
                    );
                  }),
                  r = [];
                return (
                  n.forEach(function (n) {
                    var i;
                    if (
                      null === (i = n.getGain) || void 0 === i ? void 0 : i[e]
                    ) {
                      var o = te.calculate(ma, n.getGain[e], t[n.id]);
                      o.eq(0) ||
                        r.push({
                          label: "Structures: ".concat(n.name),
                          value: o,
                          id: "Structure: ".concat(n.id),
                          category: "Structures",
                        });
                    }
                  }),
                  r
                );
              }),
              (t.prototype.getResourceBeingStored = function (e) {
                var t = this.structures
                    .filter(function (e) {
                      return e.level >= 1;
                    })
                    .reduce(function (e, t) {
                      return e[t.id] || (e[t.id] = new d.Z(t.level)), e;
                    }, {}),
                  n = Yo.filter(function (n) {
                    var r;
                    return (
                      (null === (r = n.getCapacityEffect) || void 0 === r
                        ? void 0
                        : r[e]) && t[n.id]
                    );
                  }),
                  r = [];
                return (
                  n.forEach(function (n) {
                    var i;
                    if (
                      null === (i = n.getCapacityEffect) || void 0 === i
                        ? void 0
                        : i[e]
                    ) {
                      var o = te.calculate(ma, n.getCapacityEffect[e], t[n.id]);
                      o.eq(0) ||
                        r.push({
                          label: "Structures: ".concat(n.name),
                          value: o,
                          id: "Structure: ".concat(n.id),
                          category: "Structures",
                        });
                    }
                  }),
                  r
                );
              }),
              (t.prototype.getResourceBeingStoredMultiplier = function (e) {
                var t = this.structures
                    .filter(function (e) {
                      return e.level >= 1;
                    })
                    .reduce(function (e, t) {
                      return e[t.id] || (e[t.id] = new d.Z(t.level)), e;
                    }, {}),
                  n = Yo.filter(function (n) {
                    var r;
                    return (
                      (null === (r = n.getCapacityMultiplier) || void 0 === r
                        ? void 0
                        : r[e]) && t[n.id]
                    );
                  }),
                  r = [];
                return (
                  n.forEach(function (n) {
                    var i;
                    if (
                      null === (i = n.getCapacityMultiplier) || void 0 === i
                        ? void 0
                        : i[e]
                    ) {
                      var o = te.calculate(
                        ma,
                        n.getCapacityMultiplier[e],
                        t[n.id]
                      );
                      o.eq(1) ||
                        r.push({
                          label: "Structures: ".concat(n.name),
                          value: o,
                          id: "Structure: ".concat(n.id),
                          category: "Structures",
                        });
                    }
                  }),
                  r
                );
              }),
              (t.prototype.getAttributeProduced = function (e) {
                var t = this.structures
                    .filter(function (e) {
                      return e.level >= 1;
                    })
                    .reduce(function (e, t) {
                      return e[t.id] || (e[t.id] = new d.Z(t.level)), e;
                    }, {}),
                  n = Yo.filter(function (n) {
                    var r;
                    return (
                      (null === (r = n.getAttributeGain) || void 0 === r
                        ? void 0
                        : r[e]) && t[n.id]
                    );
                  }),
                  r = [];
                return (
                  n.forEach(function (n) {
                    var i;
                    if (
                      null === (i = n.getAttributeGain) || void 0 === i
                        ? void 0
                        : i[e]
                    ) {
                      var o = te.calculate(ma, n.getAttributeGain[e], t[n.id]);
                      o.eq(0) ||
                        r.push({
                          label: "Structures: ".concat(n.name),
                          value: o,
                          id: "Structure: ".concat(n.id),
                          category: "Structures",
                        });
                    }
                  }),
                  r
                );
              }),
              (t.prototype.getAttributeMultiplier = function (e) {
                var t = this.structures
                    .filter(function (e) {
                      return e.level >= 1;
                    })
                    .reduce(function (e, t) {
                      return e[t.id] || (e[t.id] = new d.Z(t.level)), e;
                    }, {}),
                  n = Yo.filter(function (n) {
                    var r;
                    return (
                      (null === (r = n.getAttributeGainMultiplier) ||
                      void 0 === r
                        ? void 0
                        : r[e]) && t[n.id]
                    );
                  }),
                  r = [];
                return (
                  n.forEach(function (n) {
                    var i;
                    if (
                      null === (i = n.getAttributeGainMultiplier) ||
                      void 0 === i
                        ? void 0
                        : i[e]
                    ) {
                      var o = te.calculate(
                        ma,
                        n.getAttributeGainMultiplier[e],
                        t[n.id]
                      );
                      o.eq(0) ||
                        r.push({
                          label: "Structures: ".concat(n.name),
                          value: o,
                          id: "Structure: ".concat(n.id),
                          category: "Structures",
                        });
                    }
                  }),
                  r
                );
              }),
              (t.prototype.getGainMultiplier = function (e) {
                var t = this.structures
                    .filter(function (e) {
                      return e.level >= 1;
                    })
                    .reduce(function (e, t) {
                      return e[t.id] || (e[t.id] = new d.Z(t.level)), e;
                    }, {}),
                  n = Yo.filter(function (n) {
                    var r;
                    return (
                      (null === (r = n.getGainMultiplier) || void 0 === r
                        ? void 0
                        : r[e]) && t[n.id]
                    );
                  }),
                  r = [];
                return (
                  n.forEach(function (n) {
                    var i;
                    if (
                      null === (i = n.getGainMultiplier) || void 0 === i
                        ? void 0
                        : i[e]
                    ) {
                      var o = te.calculate(ma, n.getGainMultiplier[e], t[n.id]);
                      o.eq(1) ||
                        r.push({
                          label: "Structures: ".concat(n.name),
                          value: o,
                          id: "Structure: ".concat(n.id),
                          category: "Structures",
                        });
                    }
                  }),
                  r
                );
              }),
              t
            );
          })(s),
          zo = Vo.getInstance(),
          Jo = (function () {
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
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          Qo = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (t.crafting = qo), (t.structures = zo), t;
            }
            return (
              Jo(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                this.crafting.importData(null == e ? void 0 : e.crafting),
                  this.structures.importData(null == e ? void 0 : e.structures);
              }),
              (t.prototype.exportData = function () {
                return {
                  crafting: this.crafting.exportData(),
                  structures: this.structures.exportData(),
                };
              }),
              (t.prototype.dataToUI = function () {
                var e = this.crafting.dataToUI(),
                  t = this.structures.dataToUI();
                return { isUnlocked: e.isUnlocked, crafting: e, structures: t };
              }),
              (t.prototype.process = function (e) {
                this.crafting.process(e);
              }),
              (t.prototype.regenerateCache = function () {
                this.crafting.regenerateCache(),
                  this.structures.regenerateCache();
              }),
              t
            );
          })(s),
          $o = Qo.getInstance(),
          ea = (function () {
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
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          ta = (function (e) {
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
              ea(t, e),
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
                ha.getInstance().settings.resetNotificationsOnPrestige &&
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
          na = ta.getInstance();
        !(function (e) {
          (e[(e.PENDING = 0)] = "PENDING"),
            (e[(e.COMLETE = 1)] = "COMLETE"),
            (e[(e.FAILED = 2)] = "FAILED");
        })(So || (So = {}));
        var ra = [
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
                ((Po = {}),
                (Po[c.WILLPOWER] = function (e) {
                  return new d.Z(2);
                }),
                Po),
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
                ((Uo = {}),
                (Uo[c.RUNE_READING] = function (e) {
                  return new d.Z(2);
                }),
                Uo),
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
                ((Mo = {}),
                (Mo[r.KNOWLEDGE] = function (e) {
                  return new d.Z(1.1);
                }),
                (Mo[r.MANA] = function (e) {
                  return new d.Z(1.1);
                }),
                Mo),
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
                ((Bo = {}),
                (Bo[r.KNOWLEDGE] = function (e) {
                  return new d.Z(1.1);
                }),
                (Bo[r.MANA] = function (e) {
                  return new d.Z(1.1);
                }),
                Bo),
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
                ((Go = {}),
                (Go[r.KNOWLEDGE] = function (e) {
                  return new d.Z(1.25);
                }),
                Go),
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
                  .getActionPerforms(Xe.BREATH)
                  .greaterThanOrEqualTo(500);
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((_o = {}),
                (_o[c.VITALITY] = function (e) {
                  return new d.Z(1.25);
                }),
                _o),
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
                  .getActionPerforms(Xe.BREATH)
                  .greaterThanOrEqualTo(1e4);
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((Do = {}),
                (Do[c.VITALITY] = function (e) {
                  return new d.Z(1.25);
                }),
                Do),
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
                  .getActionPerforms(Xe.INVESTIGATE_WORLD)
                  .greaterThanOrEqualTo(500);
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((ko = {}),
                (ko[c.RUNE_READING] = function (e) {
                  return new d.Z(1.25);
                }),
                ko),
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
                  .getActionPerforms(Xe.INVESTIGATE_WORLD)
                  .greaterThanOrEqualTo(1e4);
              },
              bonusesDesc: [],
              getAttributeMultiplier:
                ((xo = {}),
                (xo[c.RUNE_READING] = function (e) {
                  return new d.Z(1.25);
                }),
                xo),
              isHidden: !1,
              unlockCondition: function (e) {
                return e.city.actions.isUnlocked;
              },
            },
          ],
          ia = (function () {
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
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          oa = function () {
            return (
              (oa =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              oa.apply(this, arguments)
            );
          },
          aa = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (t.achievementsState = []), t;
            }
            return (
              ia(t, e),
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
                  totalAmount: ra.length,
                  amountCompleted: this.achievementsState.filter(function (e) {
                    return e.statusId === So.COMLETE;
                  }).length,
                  amountHidden: ra.filter(function (e) {
                    return e.isHidden;
                  }).length,
                  hiddenComplete: this.achievementsState
                    .filter(function (e) {
                      return e.statusId === So.COMLETE;
                    })
                    .filter(function (e) {
                      return !!ra.find(function (t) {
                        return t.id === e.id && t.isHidden;
                      });
                    }).length,
                  list: ra
                    .filter(function (t) {
                      return e.isUnlocked(t);
                    })
                    .map(function (t) {
                      return e.currentAchievementToUI(t);
                    }),
                };
              }),
              (t.prototype.isUnlocked = function (e) {
                return (
                  e.unlockCondition(ma) ||
                  this.achievementsState.find(function (t) {
                    return t.id === e.id;
                  })
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
                      statusId: So.PENDING,
                    }),
                    (t = this.achievementsState.length - 1)),
                  this.achievementsState[t].statusId === So.COMLETE &&
                    ma.newNotifications.registerNotification(
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
                      this.achievementsState[t].statusId === So.COMLETE,
                    status: this.achievementsState[t].statusId,
                    gain: e.getGain
                      ? te
                          .getValue(e.getGain, ha.getInstance())
                          .filter(function (e) {
                            return e.amount;
                          })
                          .map(function (e) {
                            return oa(oa({}, e), {
                              amountValue: e.amount.toPrecision(18),
                              amount: X(e.amount),
                            });
                          })
                      : [],
                    max: e.getCapacityEffect
                      ? te
                          .getValue(e.getCapacityEffect, ha.getInstance())
                          .filter(function (e) {
                            return e.amount;
                          })
                          .map(function (e) {
                            return oa(oa({}, e), {
                              amountValue: e.amount.toPrecision(18),
                              amount: X(e.amount),
                            });
                          })
                      : [],
                    gainAttribute: e.getAttribute
                      ? te
                          .getValue(e.getAttribute, ha.getInstance())
                          .filter(function (e) {
                            return e.amount;
                          })
                          .map(function (e) {
                            return oa(oa({}, e), {
                              amountValue: e.amount.toPrecision(18),
                              amount: "+".concat(X(e.amount)),
                            });
                          })
                      : [],
                    gainMult: e.getGainMultiplier
                      ? te
                          .getValue(e.getGainMultiplier, ha.getInstance())
                          .filter(function (e) {
                            return e.amount;
                          })
                          .map(function (e) {
                            return oa(oa({}, e), {
                              amountValue: e.amount.toPrecision(18),
                              amount: "x".concat(X(e.amount)),
                            });
                          })
                      : [],
                    maxMult: e.getCapacityMultiplier
                      ? te
                          .getValue(e.getCapacityMultiplier, ha.getInstance())
                          .filter(function (e) {
                            return e.amount;
                          })
                          .map(function (e) {
                            return oa(oa({}, e), {
                              amountValue: e.amount.toPrecision(18),
                              amount: "x".concat(X(e.amount)),
                            });
                          })
                      : [],
                    attributeMult: e.getAttributeMultiplier
                      ? te
                          .getValue(e.getAttributeMultiplier, ha.getInstance())
                          .filter(function (e) {
                            return e.amount;
                          })
                          .map(function (e) {
                            return oa(oa({}, e), {
                              amountValue: e.amount.toPrecision(18),
                              amount: "x".concat(X(e.amount)),
                            });
                          })
                      : [],
                  }
                );
              }),
              (t.prototype.checkAchievementsStatus = function () {
                var e = this;
                this.achievementsState.forEach(function (t, n) {
                  if (t.statusId === So.PENDING) {
                    var r = ra.find(function (e) {
                      return e.id === t.id;
                    });
                    if (r)
                      return r.getCompleteCondition(ma)
                        ? ((e.achievementsState[n].statusId = So.COMLETE),
                          (e.achievementsState[n].completeAt =
                            ma.statistics.stats.timeInGame),
                          ma.resources.reassertBalances(),
                          void ma.regenerateCache())
                        : void (
                            r.getFailureCondition &&
                            r.getFailureCondition(ma) &&
                            (e.achievementsState[n].statusId = So.FAILED)
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
                    : t.statusId) === So.COMLETE || !1
                );
              }),
              (t.prototype.process = function (e) {
                ma.statistics.stats.timeInGame % 1 < e &&
                  this.checkAchievementsStatus();
              }),
              (t.prototype.getAttributeGain = function (e) {
                var t = ra.filter(function (t) {
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
                  this.achievementsState.forEach(function (r) {
                    if (r.statusId === So.COMLETE) {
                      var i = t.find(function (e) {
                        return e.id === r.id;
                      });
                      if (i && i.getAttribute) {
                        var o = i.getAttribute[e](ha.getInstance());
                        n.push({
                          label: "Achievement: ".concat(i.name),
                          value: o,
                          id: "achievement-".concat(i.id),
                          category: "Achievements",
                        });
                      }
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getAttributeMultiplier = function (e) {
                var t = ra.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getAttributeMultiplier) ||
                    void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  n = [];
                return (
                  this.achievementsState.forEach(function (r) {
                    if (r.statusId === So.COMLETE) {
                      var i = t.find(function (e) {
                        return e.id === r.id;
                      });
                      if (i && i.getAttributeMultiplier) {
                        var o = i.getAttributeMultiplier[e](ha.getInstance());
                        n.push({
                          label: "Achievement: ".concat(i.name),
                          value: o,
                          id: "achievement-".concat(i.id),
                          category: "Achievements",
                        });
                      }
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getResourceBeingProduced = function (e) {
                var t = ra.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getGain) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  n = [];
                return (
                  this.achievementsState.forEach(function (r) {
                    var i;
                    if (r.statusId === So.COMLETE) {
                      var o = t.find(function (e) {
                        return e.id === r.id;
                      });
                      if (
                        o &&
                        (null === (i = o.getGain) || void 0 === i
                          ? void 0
                          : i[e])
                      ) {
                        var a = o.getGain[e](ha.getInstance());
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
                var e = ra.filter(function (e) {
                    return !!e.getCraftingMultiplier;
                  }),
                  t = [];
                return (
                  this.achievementsState.forEach(function (n) {
                    if (n.statusId === So.COMLETE) {
                      var r = e.find(function (e) {
                        return e.id === n.id;
                      });
                      if (r && r.getCraftingMultiplier) {
                        var i = r.getCraftingMultiplier(ha.getInstance());
                        t.push({
                          label: "Achievement: ".concat(r.name),
                          value: i,
                          id: "achievement-".concat(r.id),
                          category: "Achievements",
                        });
                      }
                    }
                  }, 0),
                  t
                );
              }),
              (t.prototype.getResourceMultiplier = function (e) {
                var t = ra.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getGainMultiplier) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  n = [];
                return (
                  this.achievementsState.forEach(function (r) {
                    var i;
                    if (r.statusId === So.COMLETE) {
                      var o = t.find(function (e) {
                        return e.id === r.id;
                      });
                      if (
                        o &&
                        (null === (i = o.getGainMultiplier) || void 0 === i
                          ? void 0
                          : i[e])
                      ) {
                        var a = o.getGainMultiplier[e](ha.getInstance());
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
                var t = ra.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getCapacityEffect) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  n = [];
                return (
                  this.achievementsState.forEach(function (r) {
                    var i;
                    if (r.statusId === So.COMLETE) {
                      var o = t.find(function (e) {
                        return e.id === r.id;
                      });
                      if (
                        o &&
                        (null === (i = o.getCapacityEffect) || void 0 === i
                          ? void 0
                          : i[e])
                      ) {
                        var a = o.getCapacityEffect[e](ha.getInstance());
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
                var t = ra.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getCapacityMultiplier) ||
                    void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  n = [];
                return (
                  this.achievementsState.forEach(function (r) {
                    var i;
                    if (r.statusId === So.COMLETE) {
                      var o = t.find(function (e) {
                        return e.id === r.id;
                      });
                      if (
                        o &&
                        (null === (i = o.getCapacityMultiplier) || void 0 === i
                          ? void 0
                          : i[e])
                      ) {
                        var a = o.getCapacityMultiplier[e](ha.getInstance());
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
                var e = ra.filter(function (e) {
                  return e.resetFailureOnKPPrestige;
                });
                this.reset(e);
              }),
              (t.prototype.resetFailedOnXP = function () {
                var e = ra.filter(function (e) {
                  return e.resetFailureOnXPPrestige;
                });
                this.reset(e);
              }),
              (t.prototype.reset = function (e) {
                this.achievementsState = this.achievementsState.map(function (
                  t
                ) {
                  return t.statusId !== So.FAILED
                    ? t
                    : e.find(function (e) {
                        return e.id === t.id;
                      })
                    ? oa(oa({}, t), { statusId: So.PENDING })
                    : t;
                });
              }),
              t
            );
          })(s),
          ua = aa.getInstance(),
          sa = [
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
                return !0;
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
          ],
          ca = (function () {
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
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          la = (function (e) {
            function t() {
              return e.call(this) || this;
            }
            return (
              ca(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.dataToUI = function () {
                var e = sa
                  .filter(function (e) {
                    return e.unlockCond(ma);
                  })
                  .map(function (e) {
                    return (
                      ma.newNotifications.registerNotification(
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
          da = la.getInstance(),
          pa = (function () {
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
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          fa = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (t.faq = da), t;
            }
            return (
              pa(t, e),
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
          ga = (function () {
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
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          ha = (function (e) {
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
                  theme: i.DARK,
                  addToQueueUnavailable: !0,
                  disableResidental: !1,
                  unsafeBulkBuilding: !1,
                  resetNotificationsOnPrestige: !1,
                  turnOnAutoupgrade: !1,
                }),
                t.workDispatcher.on("initialize", function (e) {
                  console.log("Received payload", e);
                }),
                (t.resources = V),
                (t.learning = or),
                (t.personage = pr),
                (t.city = Hi),
                (t.statistics = $i),
                (t.construction = $o),
                (t.newNotifications = na),
                (t.achievements = ua),
                (t.about = fa),
                (t.isFirstIter = !0),
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
                  t.settings[e.key] = e.value;
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
                    (t.isLoading = !1);
                }, 3e3),
                t
              );
            }
            return (
              ga(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.process = function (e) {
                var t = 1 * this.speedUpFactor;
                (this.dT = e * t),
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
                    theme: i.DARK,
                  }),
                  this.settings.theme || (this.settings.theme = i.DARK),
                  "addToQueueUnavailable" in this.settings ||
                    (this.settings.addToQueueUnavailable = !0),
                  this.resources.importData(e.resources),
                  this.learning.importData(e.learning),
                  this.city.importData(e.city),
                  this.construction.importData(e.construction),
                  this.statistics.importData(e.statistics),
                  this.newNotifications.importData(e.newNotifications),
                  this.achievements.importData(e.achievements),
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
                    about: this.about.dataToUI(),
                  }
                );
              }),
              (t.prototype.purchaseMax = function () {}),
              (t.prototype.regenerateCache = function () {
                performance.now(),
                  this.learning.regenerateCache(),
                  this.city.regenerateCache(),
                  this.construction.regenerateCache();
              }),
              t
            );
          })(s),
          ma = ha.getInstance();
        self.addEventListener("message", function (e) {
          var t = e.data;
          console.log("send to worker: ", t),
            ma.workDispatcher.handleInput(t.type, t.payload);
        });
      },
    },
    r = {};
  function i(e) {
    var t = r[e];
    if (void 0 !== t) return t.exports;
    var o = (r[e] = { exports: {} });
    return n[e](o, o.exports, i), o.exports;
  }
  (i.m = n),
    (i.x = () => {
      var e = i.O(void 0, [482], () => i(489));
      return i.O(e);
    }),
    (e = []),
    (i.O = (t, n, r, o) => {
      if (!n) {
        var a = 1 / 0;
        for (l = 0; l < e.length; l++) {
          for (var [n, r, o] = e[l], u = !0, s = 0; s < n.length; s++)
            (!1 & o || a >= o) && Object.keys(i.O).every((e) => i.O[e](n[s]))
              ? n.splice(s--, 1)
              : ((u = !1), o < a && (a = o));
          if (u) {
            e.splice(l--, 1);
            var c = r();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      o = o || 0;
      for (var l = e.length; l > 0 && e[l - 1][2] > o; l--) e[l] = e[l - 1];
      e[l] = [n, r, o];
    }),
    (i.d = (e, t) => {
      for (var n in t)
        i.o(t, n) &&
          !i.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (i.f = {}),
    (i.e = (e) =>
      Promise.all(Object.keys(i.f).reduce((t, n) => (i.f[n](e, t), t), []))),
    (i.u = (e) => e + ".index.bundle.js"),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e;
      i.g.importScripts && (e = i.g.location + "");
      var t = i.g.document;
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
        (i.p = e);
    })(),
    (() => {
      var e = { 489: 1 };
      i.f.i = (t, n) => {
        e[t] || importScripts(i.p + i.u(t));
      };
      var t = (self.webpackChunkidlemancery2 =
          self.webpackChunkidlemancery2 || []),
        n = t.push.bind(t);
      t.push = (t) => {
        var [r, o, a] = t;
        for (var u in o) i.o(o, u) && (i.m[u] = o[u]);
        for (a && a(i); r.length; ) e[r.pop()] = 1;
        n(t);
      };
    })(),
    (t = i.x),
    (i.x = () => i.e(482).then(t)),
    i.x();
})();
