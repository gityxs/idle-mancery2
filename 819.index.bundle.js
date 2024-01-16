(() => {
  "use strict";
  var e,
    t,
    n = {
      819: (e, t, n) => {
        var r,
          i,
          a,
          o,
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
            (e.GLASS = "glass");
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
              (e.RUNIC_SPLASH = "runic_splash");
          })(a || (a = {})),
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
              (e.GOLD_PROTECTION = "gold_protection"),
              (e.RUNE_PROTECTION = "rune_protection"),
              (e.BRAINSTORM = "brainstorm"),
              (e.BRAIN_EMPOWER = "brain_empower"),
              (e.MEDITATE = "meditate"),
              (e.AGILITY_RUNE = "agility_rune"),
              (e.MANA_CRYSTAL = "mana_crystal"),
              (e.MANA_RITUAL = "mana_ritual"),
              (e.ILLUSION_SPELLS = "illusion_spells"),
              (e.SPARK_GENERATION = "spark_generation"),
              (e.SPARK_CONTAINER = "spark_container"),
              (e.REINCARNATION = "reincarnate"),
              (e.WOODWORKING = "woodworking"),
              (e.PAPERWORKING = "paperworking"),
              (e.STONEWORKING = "stoneworking"),
              (e.CHARGED_CRAFTING = "charged_crafting"),
              (e.GLASSMAKING = "glassmaking");
          })(o || (o = {}));
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
                  e.learning.runeUpgrades.getUpgradeLevel(a.KNOWLEDGE) > 0 ||
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
                  e.city.academyUpgrades.getUpgradeLevel(o.SPARK_GENERATION) > 0
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
                  e.city.academyUpgrades.getUpgradeLevel(o.WOODWORKING) > 0
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
                  e.city.academyUpgrades.getUpgradeLevel(o.WOODWORKING) > 0
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
                  e.city.academyUpgrades.getUpgradeLevel(o.STONEWORKING) > 0
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
                  e.city.academyUpgrades.getUpgradeLevel(o.STONEWORKING) > 0
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
                  e.city.academyUpgrades.getUpgradeLevel(o.WOODWORKING) > 0
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
                  e.city.academyUpgrades.getUpgradeLevel(o.CHARGED_CRAFTING) > 0
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
                  e.city.academyUpgrades.getUpgradeLevel(o.WOODWORKING) > 0
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
                  e.city.academyUpgrades.getUpgradeLevel(o.CHARGED_CRAFTING) > 0
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
                  e.city.academyUpgrades.getUpgradeLevel(o.GLASSMAKING) > 0
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
                  e.city.academyUpgrades.getUpgradeLevel(o.GLASSMAKING) > 0
                );
              },
              hasCapacityLimit: !1,
              valuability: 1024,
              isShownInPanel: !1,
              isCraftable: !0,
            },
          ],
          p = n(482);
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
        var d = function (e) {
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
                      value: new p.Z(1),
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
                      value: new p.Z(1e3),
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
                      value: new p.Z(50),
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
                      value: new p.Z(100),
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
                      value: new p.Z(50),
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
                      value: new p.Z(50),
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
              t),
            i = function (e) {
              var t,
                r,
                i,
                a,
                o,
                u,
                s,
                c,
                p,
                d,
                f,
                g,
                h,
                m,
                v,
                y,
                E,
                A,
                w,
                N,
                C,
                O,
                I,
                R,
                L,
                Z,
                b = l.find(function (t) {
                  return t.id === e;
                });
              null == b || b.isCraftable,
                null == b || b.isPrestigeCurrency,
                (t = n[e].max.linear).push.apply(
                  t,
                  Vi.learning.runes.getResourceBeingStored(e)
                ),
                (r = n[e].max.multiplier).push.apply(
                  r,
                  Vi.learning.runes.getResourceBeingStoredMultiplier(e)
                ),
                (i = n[e].income.multiplier).push.apply(
                  i,
                  Vi.learning.runes.getMultiplier(e)
                ),
                (a = n[e].income.linear).push.apply(
                  a,
                  Vi.learning.runes.getResourceGain(e)
                ),
                (o = n[e].max.linear).push.apply(
                  o,
                  Vi.learning.crystals.getResourceBeingStored(e)
                ),
                (u = n[e].max.multiplier).push.apply(
                  u,
                  Vi.learning.crystals.getResourceBeingStoredMultiplier(e)
                ),
                (s = n[e].income.multiplier).push.apply(
                  s,
                  Vi.learning.crystals.getMultiplier(e)
                ),
                (c = n[e].income.linear).push.apply(
                  c,
                  Vi.learning.crystals.getResourceGain(e)
                ),
                (p = n[e].income.multiplier).push.apply(
                  p,
                  Vi.learning.runeUpgrades.getGainMultiplier(e)
                ),
                (d = n[e].income.linear).push.apply(
                  d,
                  Vi.learning.runeUpgrades.getGain(e)
                ),
                (f = n[e].income.linear).push.apply(
                  f,
                  Vi.city.actions.getResourceBeingProduced(e)
                ),
                (g = n[e].income.multiplier).push.apply(
                  g,
                  Vi.city.actions.getGainMultiplier(e)
                ),
                (h = n[e].income.consumption).push.apply(
                  h,
                  Vi.city.actions.getResourceBeingConsumed(e)
                ),
                (m = n[e].max.linear).push.apply(
                  m,
                  Vi.city.actions.getResourceBeingStored(e)
                ),
                (v = n[e].max.multiplier).push.apply(
                  v,
                  Vi.city.actions.getResourceBeingStoredMultiplier(e)
                ),
                (y = n[e].max.multiplier).push.apply(
                  y,
                  Vi.learning.runeUpgrades.getCapacityMult(e)
                ),
                (E = n[e].max.linear).push.apply(
                  E,
                  Vi.learning.runeUpgrades.getCapacity(e)
                ),
                (A = n[e].max.multiplier).push.apply(
                  A,
                  Vi.city.mercenaries.getResourceBeingStoredMultiplier(e)
                ),
                (w = n[e].income.multiplier).push.apply(
                  w,
                  Vi.city.mercenaries.getResourceBeingProducedMultiplier(e)
                ),
                (N = n[e].income.consumption).push.apply(
                  N,
                  Vi.city.mercenaries.getResourceBeingConsumed(e)
                ),
                (C = n[e].income.linear).push.apply(
                  C,
                  Vi.construction.crafting.getResourceGain(e)
                ),
                (O = n[e].income.consumption).push.apply(
                  O,
                  Vi.construction.crafting.getResourceConsumption(e)
                ),
                (I = n[e].income.linear).push.apply(
                  I,
                  Vi.construction.structures.getResourceBeingProduced(e)
                ),
                (R = n[e].income.multiplier).push.apply(
                  R,
                  Vi.construction.structures.getGainMultiplier(e)
                ),
                (L = n[e].max.linear).push.apply(
                  L,
                  Vi.construction.structures.getResourceBeingStored(e)
                ),
                (Z = n[e].max.multiplier).push.apply(
                  Z,
                  Vi.construction.structures.getResourceBeingStoredMultiplier(e)
                );
            };
          for (var a in n) i(a);
          return n;
        };
        function f(e, t) {
          if (e.lte(Number.MAX_VALUE))
            return new p.Z(Math.log(e.toNumber()) / Math.log(t.toNumber()));
          var n = e.toExponential().split("e"),
            r = n[0],
            i = n[1];
          return new p.Z(i)
            .mul(p.Z.log(t))
            .plus(p.Z.log(new p.Z(r)).div(p.Z.log(t)));
        }
        function g(e) {
          return f(e, new p.Z(10));
        }
        function h(e) {
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
        function m(e, t) {
          return (
            void 0 === t && (t = !0),
            e.greaterThanOrEqualTo("1.e+18")
              ? "Never"
              : e.greaterThanOrEqualTo("1")
              ? h(e.toNumber())
              : t || e.lessThanOrEqualTo("0")
              ? "00:00:00"
              : "".concat(x(e.pow(-1)), "/s")
          );
        }
        var v,
          y,
          E,
          A,
          w,
          N,
          C,
          O,
          I,
          R,
          L,
          Z,
          b,
          T,
          S,
          P,
          U,
          M,
          B,
          G,
          _,
          k,
          D,
          x = function (e, t, n) {
            void 0 === t && (t = 2),
              void 0 === n && (n = !1),
              p.Z.isDecimal(e) || (e = new p.Z(e));
            var r = e.isNegative();
            if ((e = e.abs()).greaterThanOrEqualTo(1e33))
              return (r ? "-" : "") + e.toExponential(t);
            if (e.lessThan(1))
              return n ? "0" : (r ? "-" : "") + e.toDecimalPlaces(t).toString();
            var i = g(e.abs().plus(0.1)).floor().div(3).floor().toNumber(),
              a = e.div(new p.Z(10).pow(3 * i)),
              o = Math.abs(i) > 0 ? W(i) : "";
            if (n) return (r ? "-" : "") + a.toFixed(o ? t : 0) + o;
            var u = a.toFixed(t);
            return (r ? "-" : "") + X(u) + o;
          },
          W = function (e) {
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
          X = function (e) {
            return e.includes(".") && (e = e.replace(/\.?0+$/, "")), e;
          },
          K = function (e, t) {
            return x(e, t, !0);
          },
          j = function () {
            return (
              (j =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              j.apply(this, arguments)
            );
          },
          q = (function () {
            function e() {
              (this.cachedBreakdown = {}),
                (this.cachedShortenedBreakdown = {}),
                (this.cachedResources = {}),
                (this.resourcesStatus = l.map(function (e) {
                  return {
                    id: e.id,
                    amount: new p.Z(0),
                    balance: new p.Z(0),
                    max: new p.Z(0),
                    hasCapacityLimit: e.hasCapacityLimit,
                    potentialEfficiency: 1,
                    income: new p.Z(0),
                    multiplier: new p.Z(1),
                    consumption: new p.Z(0),
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
                        : (e[t.category] = j({}, t)),
                      e
                    );
                  }, {}),
                  r = e.multiplier.reduce(function (e, t) {
                    return (
                      e[t.category]
                        ? (e[t.category].value = e[t.category].value.mul(
                            t.value
                          ))
                        : (e[t.category] = j({}, t)),
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
                              : (e[t.category] = j({}, t)),
                            e
                          );
                        }, {});
                return {
                  linear: Object.values(n).map(function (e) {
                    return j(j({}, e), { label: e.category });
                  }),
                  multiplier: Object.values(r).map(function (e) {
                    return j(j({}, e), { label: e.category });
                  }),
                  consumption: i
                    ? Object.values(i).map(function (e) {
                        return j(j({}, e), { label: e.category });
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
                    amount: new p.Z(0),
                    balance: new p.Z(0),
                    hasCapacityLimit: r.hasCapacityLimit,
                    max: r.hasCapacityLimit ? new p.Z(0) : new p.Z(-1),
                    potentialEfficiency: 1,
                    income: new p.Z(0),
                    multiplier: new p.Z(1),
                    consumption: new p.Z(0),
                  });
                }
                (this.resourcesStatus[n].amount =
                  this.resourcesStatus[n].amount.plus(t)),
                  this.resourcesStatus[n].max.greaterThan(0) &&
                    this.resourcesStatus[n].hasCapacityLimit &&
                    (this.resourcesStatus[n].amount = p.Z.min(
                      this.resourcesStatus[n].amount,
                      this.resourcesStatus[n].max
                    )),
                  this.resourcesStatus[n].amount.lessThan(0) &&
                    (this.resourcesStatus[n].amount = new p.Z(0)),
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
                    amount: new p.Z(0),
                    balance: new p.Z(0),
                    hasCapacityLimit: r.hasCapacityLimit,
                    max: r.hasCapacityLimit ? new p.Z(0) : new p.Z(-1),
                    potentialEfficiency: 1,
                    income: new p.Z(0),
                    multiplier: new p.Z(1),
                    consumption: new p.Z(0),
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
                  var a = l.find(function (t) {
                    return t.id === e;
                  });
                  if (!a) return;
                  this.resourcesStatus.push({
                    id: e,
                    amount: new p.Z(0),
                    balance: new p.Z(0),
                    hasCapacityLimit: a.hasCapacityLimit,
                    max: a.hasCapacityLimit ? new p.Z(0) : new p.Z(-1),
                    potentialEfficiency: 1,
                    income: new p.Z(0),
                    multiplier: new p.Z(1),
                    consumption: new p.Z(0),
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
                    amount: new p.Z(0),
                    balance: new p.Z(0),
                    hasCapacityLimit: r.hasCapacityLimit,
                    max: r.hasCapacityLimit ? new p.Z(0) : new p.Z(-1),
                    potentialEfficiency: 1,
                    income: new p.Z(0),
                    multiplier: new p.Z(1),
                    consumption: new p.Z(0),
                  });
                }
                (this.resourcesStatus[n].max = t),
                  (this.cachedResources[e] = this.resourcesStatus[n]);
              }),
              (e.prototype.saveBalances = function () {
                var t = this;
                Vi.personage.attributes.getBreakdowns();
                var n = d(Vi),
                  r = {},
                  i = {};
                l.forEach(function (a) {
                  var o, u, s, c, l, d, f, g;
                  if (a.unlockCondition(Vi)) {
                    (r[a.id] = {
                      max: { income: [], multiplier: [], consumption: [] },
                      income: { income: [], multiplier: [], consumption: [] },
                    }),
                      (i[a.id] = {
                        max: { income: [], multiplier: [], consumption: [] },
                        income: { income: [], multiplier: [], consumption: [] },
                      });
                    var h = n[a.id].max.linear.reduce(function (e, t) {
                        return e.add(t.value);
                      }, new p.Z(0)),
                      m = n[a.id].max.multiplier.reduce(function (e, t) {
                        return e.mul(t.value);
                      }, new p.Z(1));
                    t.setCapacity(a.id, h.mul(m));
                    var v = e.collapseEffects(n[a.id].max);
                    (r[a.id].max.income = n[a.id].max.linear
                      .filter(function (e) {
                        return e.value;
                      })
                      .sort(function (e, t) {
                        return t.value - e.value;
                      })
                      .map(function (e) {
                        return j(j({}, e), {
                          value: "+".concat(x(e.value, 4)),
                        });
                      })),
                      (i[a.id].max.income = v.linear
                        .filter(function (e) {
                          return e.value;
                        })
                        .map(function (e) {
                          return j(j({}, e), {
                            value: "+".concat(x(e.value, 4)),
                          });
                        })),
                      (r[a.id].max.multiplier = n[a.id].max.multiplier
                        .filter(function (e) {
                          return 1 !== e.value;
                        })
                        .sort(function (e, t) {
                          return t.value - e.value;
                        })
                        .map(function (e) {
                          return j(j({}, e), {
                            value: "x".concat(x(e.value, 4)),
                          });
                        })),
                      (i[a.id].max.multiplier = v.multiplier
                        .filter(function (e) {
                          return 1 !== e.value;
                        })
                        .map(function (e) {
                          return j(j({}, e), {
                            value: "x".concat(x(e.value, 4)),
                          });
                        }));
                    var y = e.collapseEffects(n[a.id].income),
                      E = n[a.id].income.linear.reduce(function (e, t) {
                        return e.add(t.value);
                      }, new p.Z(0)),
                      A = n[a.id].income.multiplier.reduce(function (e, t) {
                        return e.mul(t.value);
                      }, new p.Z(1)),
                      w =
                        null === (o = n[a.id].income.consumption) ||
                        void 0 === o
                          ? void 0
                          : o.reduce(function (e, t) {
                              return e.add(t.value);
                            }, new p.Z(0));
                    if (
                      (t.setBalance(a.id, E, A, w),
                      null === (u = r[a.id]) ||
                        void 0 === u ||
                        (u.income.income = n[a.id].income.linear
                          .filter(function (e) {
                            return e.value;
                          })
                          .sort(function (e, t) {
                            return t.value - e.value;
                          })
                          .map(function (e) {
                            return j(j({}, e), {
                              value: "+".concat(x(e.value, 4)),
                            });
                          })),
                      null === (s = i[a.id]) ||
                        void 0 === s ||
                        (s.income.income = y.linear
                          .filter(function (e) {
                            return e.value;
                          })
                          .map(function (e) {
                            return j(j({}, e), {
                              value: "+".concat(x(e.value, 4)),
                            });
                          })),
                      null === (c = r[a.id]) ||
                        void 0 === c ||
                        (c.income.multiplier = n[a.id].income.multiplier
                          .filter(function (e) {
                            return 1 !== e.value;
                          })
                          .sort(function (e, t) {
                            return t.value - e.value;
                          })
                          .map(function (e) {
                            return j(j({}, e), {
                              value: "x".concat(x(e.value, 4)),
                            });
                          })),
                      null === (l = i[a.id]) ||
                        void 0 === l ||
                        (l.income.multiplier = y.multiplier
                          .filter(function (e) {
                            return 1 !== e.value;
                          })
                          .map(function (e) {
                            return j(j({}, e), {
                              value: "x".concat(x(e.value, 4)),
                            });
                          })),
                      null === (d = r[a.id]) ||
                        void 0 === d ||
                        (d.income.consumption = n[a.id].income.consumption
                          .filter(function (e) {
                            return e.value;
                          })
                          .sort(function (e, t) {
                            return t.value - e.value;
                          })
                          .map(function (e) {
                            return j(j({}, e), {
                              value: "-".concat(x(e.value, 4)),
                            });
                          })),
                      null === (f = i[a.id]) ||
                        void 0 === f ||
                        (f.income.consumption =
                          null === (g = y.consumption) || void 0 === g
                            ? void 0
                            : g
                                .filter(function (e) {
                                  return e.value;
                                })
                                .map(function (e) {
                                  return j(j({}, e), {
                                    value: "-".concat(x(e.value, 4)),
                                  });
                                })),
                      a.hasCapacityLimit)
                    ) {
                      var N = n[a.id].max.linear.reduce(function (e, t) {
                          return e.add(t.value);
                        }, new p.Z(0)),
                        C = n[a.id].max.multiplier.reduce(function (e, t) {
                          return e.mul(t.value);
                        }, new p.Z(1));
                      t.setCapacity(a.id, N.mul(C));
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
                var n = d(Vi),
                  r = {};
                for (var i in n) {
                  var a = n[i].income.linear.reduce(function (e, t) {
                      return e.add(t.value);
                    }, new p.Z(0)),
                    o = n[i].income.multiplier.reduce(function (e, t) {
                      return e.mul(t.value);
                    }, new p.Z(1)),
                    u =
                      null === (t = n[i].income.consumption) || void 0 === t
                        ? void 0
                        : t.reduce(function (e, t) {
                            return e.add(t.value);
                          }, new p.Z(0)),
                    s =
                      (a.mul(o).sub(u || 0),
                      this.getPotentialEfficiency(
                        p.Z.max(0, this.getResource(i)).add(a.mul(o)),
                        (u || new p.Z(0)).mul(-1)
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
                e.lackEfficiencyResourcesCached = j(
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
                  e.balance.lessThanOrEqualTo(0) &&
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
                    : t.amount) || new p.Z(0)
                );
              }),
              (e.prototype.getResourceMultiplier = function (e) {
                var t;
                return (
                  (null === (t = this.cachedResources[e]) || void 0 === t
                    ? void 0
                    : t.multiplier) || new p.Z(0)
                );
              }),
              (e.prototype.getBalance = function (e) {
                var t;
                return (
                  (null === (t = this.cachedResources[e]) || void 0 === t
                    ? void 0
                    : t.balance) || new p.Z(0)
                );
              }),
              (e.prototype.getPotentialEfficiency = function (e, t) {
                return t.lessThanOrEqualTo(0)
                  ? 1
                  : Math.min(1, -p.Z.max(0, e).div(t).toNumber());
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
                    : t.balance) || new p.Z(0)
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
                      : n.max) || new p.Z(0)
                  : new p.Z("1.e+30000");
              }),
              (e.prototype.assertEnought = function (e, t, n) {
                var r = [];
                return (
                  e.forEach(function (e) {
                    var n = "0";
                    if (
                      (t[e.id] || (t[e.id] = new p.Z(0)),
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
                        amount: x(e.amount),
                        percentage: n,
                        maxAmount: x(e.max),
                        isAvailable: e.max.greaterThanOrEqualTo(1),
                        eta: h(e.eta),
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
                          amount: new p.Z(e.amount),
                          balance: new p.Z(0),
                          hasCapacityLimit: t.hasCapacityLimit,
                          max: new p.Z(0),
                          potentialEfficiency: 1,
                          income: new p.Z(0),
                          multiplier: new p.Z(1),
                          consumption: new p.Z(0),
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
                      a,
                      o = e.resourcesStatus.find(function (e) {
                        return e.id === t.id;
                      });
                    return {
                      id: t.id,
                      name: t.name,
                      showOnSidebar:
                        null !== (n = t.isShownInPanel) && void 0 !== n && n,
                      amount: x((null == o ? void 0 : o.amount) || new p.Z(0)),
                      balance: x(
                        (null == o ? void 0 : o.balance) || new p.Z(0)
                      ),
                      isUnlocked: t.unlockCondition(Vi),
                      max: x((null == o ? void 0 : o.max) || new p.Z(0)),
                      toFullPercentage: (o && o.max.greaterThan(0)
                        ? 100 * o.amount.div(o.max).toNumber()
                        : 0
                      ).toPrecision(3),
                      hasMaxLimit: t.hasCapacityLimit,
                      breakdown: e.cachedBreakdown[t.id],
                      breakdownCollapsed: e.cachedShortenedBreakdown[t.id],
                      toFullTime:
                        (null == o ? void 0 : o.max) &&
                        (null == o ? void 0 : o.balance.greaterThan(0))
                          ? h(o.max.sub(o.amount).div(o.balance).toNumber())
                          : "",
                      toEmptyTime:
                        o && (null == o ? void 0 : o.balance.lessThan(0))
                          ? h(
                              -(null == o ? void 0 : o.amount)
                                .div(null == o ? void 0 : o.balance)
                                .toNumber()
                            )
                          : "",
                      isSecondary:
                        null !== (r = t.isCraftable) && void 0 !== r && r,
                      isCraftable:
                        null !== (i = t.isCraftable) && void 0 !== i && i,
                      isHidden: null !== (a = t.isHidden) && void 0 !== a && a,
                      isNegative:
                        ((null == o ? void 0 : o.balance) || 0) < 0 ||
                        (e.getResourceEfficiency(t.id) || 0) < 1,
                      isPositive: ((null == o ? void 0 : o.balance) || 0) > 0,
                      isCapped:
                        !!o &&
                        o.max.greaterThan(0) &&
                        o.max.lessThanOrEqualTo(
                          o.amount.plus(o.balance.mul(2 * Vi.dT))
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
          Y = q.getInstance();
        !(function (e) {
          (e[(e.POLYNOMIAL = 0)] = "POLYNOMIAL"),
            (e[(e.EXPONENTIAL = 1)] = "EXPONENTIAL"),
            (e[(e.LINEAR = 2)] = "LINEAR");
        })(v || (v = {}));
        var F,
          H = [
            {
              id: "manacap",
              name: "Mana Cap Rune",
              description:
                "Expand your magic abilities by learning this rune. Mana capacity will be slightly increased.",
              unlockCondition: function (e) {
                return !0;
              },
              getCap:
                ((y = {}),
                (y[r.MANA] = function (e) {
                  return { A: new p.Z(0.1), B: new p.Z(0), type: v.LINEAR };
                }),
                y),
              getCost:
                ((E = {}),
                (E[r.MANA] = function (e) {
                  return { A: new p.Z(0), B: new p.Z(1), type: v.LINEAR };
                }),
                E),
              levelRequirement: new p.Z(1),
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
                ((A = {}),
                (A[c.RUNE_READING] = function (e) {
                  return { A: new p.Z(0.1), B: new p.Z(0), type: v.LINEAR };
                }),
                A),
              getCost:
                ((w = {}),
                (w[r.MANA] = function (e) {
                  return { A: new p.Z(0), B: new p.Z(2), type: v.LINEAR };
                }),
                w),
              levelRequirement: new p.Z(1),
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
                ((N = {}),
                (N[c.WILLPOWER] = function (e) {
                  return { A: new p.Z(0.1), B: new p.Z(0), type: v.LINEAR };
                }),
                N),
              getCost:
                ((C = {}),
                (C[r.MANA] = function (e) {
                  return { A: new p.Z(0), B: new p.Z(2), type: v.LINEAR };
                }),
                C),
              levelRequirement: new p.Z(1),
            },
            {
              id: "knowledge-rune",
              name: "Knowledge Rune",
              description: "Increase knowledge generation",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(a.KNOWLEDGE) > 0;
              },
              getGain:
                ((O = {}),
                (O[r.KNOWLEDGE] = function (e) {
                  return { A: new p.Z(0.003), B: new p.Z(0), type: v.LINEAR };
                }),
                O),
              getCost:
                ((I = {}),
                (I[r.MANA] = function (e) {
                  return { A: new p.Z(0), B: new p.Z(10), type: v.LINEAR };
                }),
                I),
              levelRequirement: new p.Z(10),
            },
            {
              id: "manarate",
              name: "Mana Rate Rune",
              description: "Improve your mana gain",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(a.EXPAND_MANA) > 0
                );
              },
              getMultiplier:
                ((R = {}),
                (R[r.MANA] = function (e) {
                  return { A: new p.Z(0.02), B: new p.Z(1), type: v.LINEAR };
                }),
                R),
              getCost:
                ((L = {}),
                (L[r.MANA] = function (e) {
                  return { A: new p.Z(0), B: new p.Z(5), type: v.LINEAR };
                }),
                (L[r.KNOWLEDGE] = function (e) {
                  return { A: new p.Z(0), B: new p.Z(1), type: v.LINEAR };
                }),
                L),
              levelRequirement: new p.Z(25),
            },
            {
              id: "rune_master",
              name: "Rune Master",
              description: "Reduce other runes learning xp cost",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(a.RUNE_MASTER) > 0
                );
              },
              getCost:
                ((Z = {}),
                (Z[r.MANA] = function (e) {
                  return { A: new p.Z(0), B: new p.Z(50), type: v.LINEAR };
                }),
                (Z[r.KNOWLEDGE] = function (e) {
                  return { A: new p.Z(0), B: new p.Z(20), type: v.LINEAR };
                }),
                Z),
              getAttribute:
                ((b = {}),
                (b[c.RUNE_MASTERY] = function (e) {
                  return { A: new p.Z(0.2), B: new p.Z(0), type: v.LINEAR };
                }),
                b),
              levelRequirement: new p.Z(2500),
            },
            {
              id: "rune_memory",
              name: "Memory Rune",
              description: "Increase mana and knowledge caps",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(a.MEMORY_RUNE) > 0
                );
              },
              getCapMultiplier:
                ((T = {}),
                (T[r.MANA] = function (e) {
                  return { A: new p.Z(0.02), B: new p.Z(1), type: v.LINEAR };
                }),
                (T[r.KNOWLEDGE] = function (e) {
                  return { A: new p.Z(0.02), B: new p.Z(1), type: v.LINEAR };
                }),
                T),
              getCost:
                ((S = {}),
                (S[r.MANA] = function (e) {
                  return { A: new p.Z(0), B: new p.Z(20), type: v.LINEAR };
                }),
                (S[r.KNOWLEDGE] = function (e) {
                  return { A: new p.Z(0), B: new p.Z(5), type: v.LINEAR };
                }),
                S),
              levelRequirement: new p.Z(1e3),
            },
            {
              id: "rune_endurance",
              name: "Endurance Rune",
              description: "Increase vitality attribute",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.ENDURANCE_RUNE) > 0
                );
              },
              getAttributeMultiplier:
                ((P = {}),
                (P[c.VITALITY] = function (e) {
                  return { A: new p.Z(0.01), B: new p.Z(1), type: v.LINEAR };
                }),
                P),
              getCost:
                ((U = {}),
                (U[r.MANA] = function (e) {
                  return { A: new p.Z(0), B: new p.Z(2500), type: v.LINEAR };
                }),
                (U[r.KNOWLEDGE] = function (e) {
                  return { A: new p.Z(0), B: new p.Z(5), type: v.LINEAR };
                }),
                U),
              levelRequirement: new p.Z(1e5),
            },
            {
              id: "muscle",
              name: "Muscle Rune",
              description: "Increase strength attribute",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.MUSCLE_RUNE) > 0
                );
              },
              getAttributeMultiplier:
                ((M = {}),
                (M[c.STRENGTH] = function (e) {
                  return { A: new p.Z(0.01), B: new p.Z(1), type: v.LINEAR };
                }),
                M),
              getCost:
                ((B = {}),
                (B[r.MANA] = function (e) {
                  return { A: new p.Z(0), B: new p.Z(27500), type: v.LINEAR };
                }),
                (B[r.KNOWLEDGE] = function (e) {
                  return { A: new p.Z(0), B: new p.Z(125), type: v.LINEAR };
                }),
                B),
              levelRequirement: new p.Z(2e6),
            },
            {
              id: "agility",
              name: "Agility Rune",
              description: "Increase actions limits",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.AGILITY_RUNE) > 0
                );
              },
              getAttributeMultiplier:
                ((G = {}),
                (G[c.AGILITY] = function (e) {
                  return { A: new p.Z(0.005), B: new p.Z(1), type: v.LINEAR };
                }),
                G),
              getCost:
                ((_ = {}),
                (_[r.MANA] = function (e) {
                  return { A: new p.Z(0), B: new p.Z(4e5), type: v.LINEAR };
                }),
                (_[r.KNOWLEDGE] = function (e) {
                  return { A: new p.Z(0), B: new p.Z(5e3), type: v.LINEAR };
                }),
                _),
              levelRequirement: new p.Z(2e10),
            },
            {
              id: "spark_cap",
              name: "Spark Holding Rune",
              description: "Increase spark capacity",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.SPARK_CONTAINER) > 0
                );
              },
              getCapMultiplier:
                ((k = {}),
                (k[r.SPARK] = function (e) {
                  return { A: new p.Z(0.005), B: new p.Z(1), type: v.LINEAR };
                }),
                k),
              getCost:
                ((D = {}),
                (D[r.MANA] = function (e) {
                  return { A: new p.Z(0), B: new p.Z("4.e+7"), type: v.LINEAR };
                }),
                (D[r.KNOWLEDGE] = function (e) {
                  return { A: new p.Z(0), B: new p.Z("4.e+6"), type: v.LINEAR };
                }),
                D),
              levelRequirement: new p.Z("5.e+30"),
            },
          ],
          z = [
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
                  e.learning.runeUpgrades.getUpgradeLevel(a.TICKET_OUT) > 0 ||
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
                  e.learning.runeUpgrades.getUpgradeLevel(a.TICKET_OUT) > 0 ||
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
                  e.city.academyUpgrades.getUpgradeLevel(o.AGILITY_RUNE) > 0 ||
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
                  e.city.academyUpgrades.getUpgradeLevel(o.ILLUSION_SPELLS) >
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
                return e.personage.attributes
                  .getAttribute(c.CONJURATION_LORE)
                  .greaterThan(1);
              },
              description: "Increase rest efficiency",
            },
          ],
          V = function (e, t) {
            void 0 === t && (t = !1);
            var n = l.find(function (t) {
              return t.id === e;
            });
            if (n) return n.unlockCondition(Vi) || t ? n.name : "???";
            var r = z.find(function (t) {
              return t.id === e;
            });
            return r ? (r.unlockCondition(Vi) || t ? r.name : "???") : e;
          },
          J = function () {
            return (
              (J =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              J.apply(this, arguments)
            );
          },
          Q = (function () {
            function e() {}
            return (
              (e.calculate = function (t, n, r) {
                var i = n(t);
                return e.calculateFormula(i, r);
              }),
              (e.calculateBatch = function (t, n, r, i) {
                i || (i = new p.Z(1));
                var a = n(t);
                return e.calculateFormulaBatch(a, r, i);
              }),
              (e.calculateFormula = function (t, n) {
                switch (t.type) {
                  case v.EXPONENTIAL:
                    return e.calculateExponential(t, n);
                  case v.POLYNOMIAL:
                    return e.calculatePolynomial(t, n);
                  case v.LINEAR:
                    return e.calculateLinear(t, n);
                  default:
                    return new p.Z(0);
                }
              }),
              (e.calculateExponential = function (e, t) {
                return e.A.mul(p.Z.pow(e.B, t));
              }),
              (e.calculatePolynomial = function (e, t) {
                return e.A.mul(p.Z.pow(t, e.B));
              }),
              (e.calculateLinear = function (e, t) {
                return e.B.plus(e.A.mul(t));
              }),
              (e.calculateFormulaBatch = function (t, n, r) {
                switch (t.type) {
                  case v.EXPONENTIAL:
                    return e.calculateExponentialBatch(t, n, r);
                  case v.POLYNOMIAL:
                    return e.calculatePolynomialBatch(t, n, r);
                  case v.LINEAR:
                    return e.calculateLinearBatch(t, n, r);
                  default:
                    return new p.Z(0);
                }
              }),
              (e.calculateExponentialBatch = function (e, t, n) {
                return e.B.equals(1)
                  ? e.A.mul(n)
                  : e.A.mul(
                      p.Z.pow(e.B, t)
                        .mul(p.Z.pow(e.B, n).sub(1))
                        .div(e.B.sub(1))
                    );
              }),
              (e.calculatePolynomialBatch = function (e, t, n) {
                return (
                  console.error("Polynomial batch is not implemented"),
                  new p.Z(0)
                );
              }),
              (e.calculateLinearBatch = function (e, t, n) {
                return n
                  .mul(e.B.plus(e.A.mul(t)))
                  .plus(e.A.mul(p.Z.pow(n, 2).mul(0.5)))
                  .sub(e.A.div(2));
              }),
              (e.calculateDX = function (t, n, r, i) {
                var a = n(t);
                return e.calculateDXByFormula(a, r, i);
              }),
              (e.calculateDXByFormula = function (t, n, r) {
                switch (t.type) {
                  case v.EXPONENTIAL:
                    return e.calculateDXExponential(t, n, r);
                  case v.POLYNOMIAL:
                    return e.calculateDXPolynomial(t, n, r);
                  case v.LINEAR:
                    return e.calculateDXLinear(t, n, r);
                  default:
                    return new p.Z(0);
                }
              }),
              (e.calculateDXExponential = function (e, t, n) {
                return e.A.equals(0)
                  ? new p.Z("1.e+30000")
                  : e.B.equals(1)
                  ? n.div(e.A)
                  : n
                  ? f(
                      n
                        .mul(e.B.sub(1))
                        .div(e.A.mul(p.Z.pow(e.B, t)))
                        .plus(1),
                      e.B
                    )
                  : new p.Z(0);
              }),
              (e.calculateDXPolynomial = function (e, t, n) {
                return (
                  console.error("Polynomial dX is not implemented"), new p.Z(0)
                );
              }),
              (e.calculateDXLinear = function (e, t, n) {
                var r = e.A,
                  i = e.B,
                  a = t,
                  o = n;
                if (r.equals(0)) return n.div(i).floor();
                var u = r.mul(2).mul(a).plus(i.mul(2)).minus(r),
                  s = o.mul(2),
                  c = u.pow(2).plus(r.mul(4).mul(s));
                if (c.lessThan(0)) return new p.Z(0);
                var l = u.neg().plus(c.sqrt()).div(r.mul(2)),
                  d = u.neg().minus(c.sqrt()).div(r.mul(2)),
                  f = p.Z.min(l.floor(), d.floor());
                return f.greaterThanOrEqualTo(0) ? f : new p.Z(0);
              }),
              (e.calcBatch = function (t, n, r, i, a, o) {
                void 0 === i && (i = new p.Z(1)),
                  void 0 === a && (a = !1),
                  void 0 === o && (o = 1);
                var u = [];
                return (
                  Object.entries(t).forEach(function (t) {
                    var s = t[0],
                      c = t[1];
                    u.push({
                      id: s,
                      name: V(s, a),
                      amount: e.calculateBatch(n, c, r, i).mul(o),
                    });
                  }),
                  u
                );
              }),
              (e.calcDXBatch = function (t, n, r, i) {
                var a = {};
                return (
                  Object.entries(t).forEach(function (t) {
                    var o = t[0],
                      u = t[1];
                    a[o] = e.calculateDX(n, u, r, i[o]);
                  }),
                  a
                );
              }),
              (e.calcBatchAll = function (t, n, r, i, a, o) {
                void 0 === a && (a = new p.Z(1)),
                  void 0 === o && (o = new p.Z(1));
                var u = [];
                return (
                  Object.entries(t).forEach(function (t) {
                    var s = t[0],
                      c = t[1];
                    i[s] || (i[s] = new p.Z(0));
                    var l = e.calculateDX(n, c, r, i[s]).div(o),
                      d = e.calculateBatch(n, c, r, a).mul(o),
                      f = 0,
                      g = !1;
                    if (l.lessThan(1)) {
                      var h = n.resources.getResourceCap(s);
                      h.lessThan(d) && (g = !0),
                        (f =
                          h.lessThan(d) ||
                          (n.resources.getResourceBalance(s).lessThan(0) &&
                            d.sub(i[s] || 0).greaterThan(0))
                            ? 1e300
                            : d
                                .sub(i[s] || 0)
                                .div(
                                  n.resources.getResourceBalance(s) || 1e-300
                                )
                                .toNumber());
                    }
                    u.push({
                      id: s,
                      name: V(s),
                      amount: d,
                      max: l,
                      eta: f,
                      isBlocked: g,
                      percentageOf: d.lessThan(i[s])
                        ? d.div(i[s]).toNumber()
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
                    for (var r, i = 0, a = t.length; i < a; i++)
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
                    : r.push(J({}, e));
                });
                var i = e.resources.getBatchObject();
                return (
                  r.forEach(function (t, n) {
                    var a = e.resources.getResourceCap(t.id),
                      o = !1,
                      u = 0;
                    a && a.lessThan(t.amount) && (o = !0),
                      (u =
                        (a && a.lessThan(t.amount)) ||
                        (e.resources.getResourceBalance(t.id).lessThan(0) &&
                          t.amount.sub(i[t.id] || 0).greaterThan(0))
                          ? 1e300
                          : t.amount
                              .sub(i[t.id] || 0)
                              .div(
                                e.resources.getResourceBalance(t.id) || 1e-300
                              )
                              .toNumber()),
                      (r[n].isBlocked = o),
                      (r[n].eta = u),
                      (r[n].max = t.amount.sub(i[t.id] || 0).greaterThan(0)
                        ? (i[t.id] || new p.Z(0)).div(t.amount.plus(1e-50))
                        : new p.Z(1)),
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
                    n.push({ id: r, name: V(r), amount: i(t) });
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
        })(F || (F = {}));
        var $,
          ee,
          te,
          ne,
          re,
          ie,
          ae,
          oe,
          ue,
          se,
          ce,
          le,
          pe,
          de,
          fe,
          ge,
          he,
          me,
          ve,
          ye,
          Ee,
          Ae,
          we,
          Ne,
          Ce,
          Oe,
          Ie,
          Re,
          Le,
          Ze,
          be,
          Te,
          Se,
          Pe,
          Ue,
          Me,
          Be,
          Ge,
          _e,
          ke,
          De,
          xe,
          We,
          Xe,
          Ke,
          je,
          qe,
          Ye,
          Fe,
          He,
          ze,
          Ve,
          Je,
          Qe,
          $e,
          et,
          tt,
          nt,
          rt,
          it,
          at,
          ot,
          ut,
          st,
          ct,
          lt,
          pt,
          dt,
          ft,
          gt,
          ht,
          mt,
          vt,
          yt,
          Et,
          At,
          wt,
          Nt,
          Ct,
          Ot,
          It,
          Rt,
          Lt,
          Zt,
          bt,
          Tt,
          St,
          Pt,
          Ut,
          Mt,
          Bt,
          Gt,
          _t,
          kt,
          Dt,
          xt,
          Wt,
          Xt,
          Kt,
          jt,
          qt,
          Yt,
          Ft,
          Ht,
          zt,
          Vt,
          Jt,
          Qt,
          $t,
          en,
          tn,
          nn,
          rn,
          an =
            (($ = function (e, t) {
              return (
                ($ =
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
                $(e, t)
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
              $(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            }),
          on = function () {
            return (
              (on =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              on.apply(this, arguments)
            );
          },
          un = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.runes = []),
                t.workDispatcher.on("[runes] toggle active", function (e) {
                  console.log("do learn", e), t.toggleLearn(e.id);
                }),
                t.workDispatcher.on("[runes] sacrifice", function (e) {
                  console.log("do sacrifice", e), t.doSacrifice(e.id);
                }),
                t
              );
            }
            return (
              an(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                this.runes =
                  (null == e
                    ? void 0
                    : e.map(function (e) {
                        return on(on({}, e), {
                          level: new p.Z(e.level),
                          xp: new p.Z(e.xp),
                          xpMult: new p.Z(e.xpMult || 1),
                          numSacrificed: new p.Z(e.numSacrificed || 0),
                        });
                      })) || [];
              }),
              (t.prototype.exportData = function () {
                return this.runes.map(function (e) {
                  return on(on({}, e), {
                    level: e.level.toPrecision(18),
                    xp: e.xp.toPrecision(18),
                    xpMult: e.xpMult.toPrecision(18),
                    numSacrificed: e.numSacrificed.toPrecision(18),
                  });
                });
              }),
              (t.prototype.dataToUI = function () {
                var e = this;
                return {
                  runes: H.map(function (t) {
                    return e.processToUI(t);
                  }),
                  maxRunes: this.getMaxSlots(),
                  usedSlots: this.getRunesActive(),
                  runningPreset: Vi.learning.runePresets.getActiveName(),
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
                    level: new p.Z(0),
                    xp: new p.Z(0),
                    isActive: !1,
                    isLearning: !1,
                    xpMult: new p.Z(1),
                    numSacrificed: new p.Z(0),
                  }),
                  this.runes.push(t));
                var n = e.getCost
                    ? Q.calcBatchAll(
                        e.getCost,
                        zi.getInstance(),
                        t.level,
                        zi.getInstance().resources.getBatchObject(),
                        new p.Z(1),
                        Vi.learning.wizardOrb.getManaMult()
                      )
                    : [],
                  r = e.getGain
                    ? Q.calcBatch(e.getGain, zi.getInstance(), t.level)
                    : [],
                  i = n.reduce(function (e, t) {
                    return p.Z.min(e, t.max.floor());
                  }, new p.Z("1.e+30000")),
                  a = n.reduce(function (e, t) {
                    return e && !t.isBlocked;
                  }, !0),
                  o = n.reduce(function (e, t) {
                    return Math.max(e, t.eta);
                  }, 0),
                  u = e.unlockCondition(Vi) || t.level.greaterThan(0);
                u &&
                  t.level.lessThanOrEqualTo(0) &&
                  Vi.newNotifications.registerNotification(
                    "learning:runes:rune:".concat(e.id)
                  );
                var s = this.getLearnSpeed()
                    .mul(this.getSacrificedBonus(t.numSacrificed))
                    .mul(t.xpMult),
                  c = this.getMaxXp(e.levelRequirement, t),
                  l = c.sub(t.xp).div(s);
                return {
                  id: e.id,
                  name: e.name,
                  description: e.description,
                  isUnlocked: u,
                  isAvailable: i.greaterThanOrEqualTo(1),
                  cost: zi
                    .getInstance()
                    .resources.assertEnought(
                      n,
                      zi.getInstance().resources.getBatchObject(),
                      zi.getInstance().resources.getBatchBalanceObject()
                    ),
                  gain: r.map(function (e) {
                    return on(on({}, e), {
                      amountValue: e.amount.toString(),
                      amount: x(e.amount),
                    });
                  }),
                  progress: Math.min(
                    100,
                    t.xp.mul(100).div(c).toNumber()
                  ).toPrecision(3),
                  isBlocked: !a || !e.unlockCondition(Vi),
                  etaNum: o,
                  isActive: t.isActive,
                  isLearning: t.isLearning,
                  level: K(t.level, 2),
                  xp: x(t.xp),
                  maxXp: x(c),
                  learnEta: m(l),
                  learnSpeed: x(s),
                  haveSacrificeMult: t.numSacrificed.greaterThan(0),
                  isSacrificeAvailable: this.getSacrificeAvailable(t),
                  currentSacrificeMult: x(
                    this.getSacrificedBonus(t.numSacrificed)
                  ),
                  currentProdMult: x(
                    this.getSacrificedBonusMult(t.numSacrificed)
                  ),
                  potentialSacrificeMult: x(
                    this.getSacrificedBonus(this.getSacrificeReward(t))
                  ),
                  potentialProdMult: x(
                    this.getSacrificedBonusMult(this.getSacrificeReward(t))
                  ),
                };
              }),
              (t.prototype.getMaxSlots = function () {
                return (
                  1 +
                  Vi.learning.runeUpgrades.getUpgradeLevel(a.ADD_RUNIC_TABLE) +
                  Vi.learning.runeUpgrades.getUpgradeLevel(a.EXPAND_MAGIC_LIB)
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
                  p.Z.pow(
                    2,
                    Vi.learning.runeUpgrades.getUpgradeLevel(
                      a.EXPANDED_SACRIFICE
                    ) + Vi.learning.runeUpgrades.getUpgradeLevel(a.RUNIC_SPLASH)
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
                      level: new p.Z(0),
                      xp: new p.Z(0),
                      isActive: !1,
                      isLearning: !1,
                      xpMult: new p.Z(1),
                      numSacrificed: new p.Z(0),
                    }),
                    this.runes.push(t)),
                  this.getSacrificeAvailable(t))
                ) {
                  for (var n = 0; n < this.runes.length; n++)
                    this.runes[n].id === e &&
                      ((this.runes[n].numSacrificed = this.getSacrificeReward(
                        this.runes[n]
                      )),
                      (this.runes[n].level = new p.Z(0))),
                      Vi.city.academyUpgrades.getUpgradeLevel(
                        o.RUNE_PROTECTION
                      ) <= 0
                        ? (this.runes[n].level = new p.Z(0))
                        : (this.runes[n].level = p.Z.min(
                            this.runes[n].level,
                            Math.pow(
                              2 *
                                Vi.city.academyUpgrades.getUpgradeLevel(
                                  o.RUNE_PROTECTION
                                ),
                              2
                            )
                          )),
                      (this.runes[n].isActive = !1),
                      (this.runes[n].isLearning = !1),
                      (this.runes[n].xp = new p.Z(0)),
                      (this.runes[n].xpMult = new p.Z(1));
                  (Vi.statistics.stats.fastestRuneTime = Vi.statistics.stats
                    .numRuneResets
                    ? Math.min(
                        Vi.statistics.stats.fastestRuneTime,
                        Vi.statistics.stats.timeThisRune
                      )
                    : Vi.statistics.stats.timeThisRune),
                    (Vi.statistics.stats.timeThisRune = 0),
                    Vi.statistics.stats.numRuneResets++,
                    Vi.learning.wizardOrb.reset(),
                    Vi.learning.runeUpgrades.reset();
                  var i = Vi.resources.getResource(r.COINS);
                  Vi.resources.reset(),
                    Vi.newNotifications.resetNotifications(),
                    Vi.learning.runePresets.runDefault(),
                    Vi.regenerateCache(),
                    Vi.resources.reassertBalances(),
                    Vi.city.academyUpgrades.getUpgradeLevel(
                      o.GOLD_PROTECTION
                    ) && Vi.resources.setResource(r.COINS, i);
                }
              }),
              (t.prototype.applyBatch = function (e) {
                var t = this,
                  n = e
                    .filter(function (e) {
                      var t;
                      return null ===
                        (t = H.find(function (t) {
                          return t.id === e;
                        })) || void 0 === t
                        ? void 0
                        : t.unlockCondition(Vi);
                    })
                    .splice(0, this.getMaxSlots());
                this.runes.forEach(function (e, r) {
                  t.runes[r].isActive = n.includes(e.id);
                });
              }),
              (t.prototype.toggleLearn = function (e) {
                if (
                  H.find(function (t) {
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
                      level: new p.Z(0),
                      xp: new p.Z(0),
                      isActive: !1,
                      isLearning: !1,
                      xpMult: new p.Z(1),
                      numSacrificed: new p.Z(0),
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
                    : t.level) || new p.Z(0)
                );
              }),
              (t.prototype.getRuneMasteryLogarithmic = function () {
                var e = Vi.personage.attributes.getAttribute(c.RUNE_MASTERY);
                return e.pow(0.2).mul(p.Z.log(1.01)).add(g(e));
              }),
              (t.prototype.getMaxXpMulLog = function (e, t) {
                return t.sub(this.getRuneMasteryLogarithmic());
              }),
              (t.prototype.getMaxRunesPerXpV3 = function (e, t, n) {
                if (t.equals(0) || n.equals(0)) return new p.Z(0);
                var r = p.Z.log(1.04),
                  i = this.getRuneMasteryLogarithmic(),
                  a = g(t).sub(i).add(e.level.mul(r)),
                  o = g(n);
                if (o.lessThan(a)) return new p.Z(0);
                var u = o.sub(a).div(r);
                return u.isNegative() ? new p.Z(0) : p.Z.max(1, u.floor());
              }),
              (t.prototype.getMaxXp = function (e, t) {
                var n = this.getMaxXpMulLog(t, g(e)).add(
                  g(new p.Z(1.04)).mul(t.level)
                );
                return n.lessThanOrEqualTo("-1.e+12")
                  ? new p.Z("1.e-300000")
                  : p.Z.pow(10, n);
              }),
              (t.prototype.getLearnSpeed = function () {
                return Vi.personage.attributes
                  .getAttribute(c.RUNE_READING)
                  .mul(
                    p.Z.pow(
                      1.5,
                      Vi.learning.runeUpgrades.getUpgradeLevel(a.RUNIC_MEMORY)
                    )
                  )
                  .mul(
                    p.Z.pow(
                      2,
                      Vi.learning.runeUpgrades.getUpgradeLevel(a.RUNIC_MEMORY2)
                    )
                  )
                  .mul(Vi.city.reincarnation.getBonus(F.SCHOLAR));
              }),
              (t.prototype.getSacrificedBonus = function (e) {
                return e.lessThan(100) ? new p.Z(1) : e.div(40).pow(1.4);
              }),
              (t.prototype.getSacrificedBonusMult = function (e) {
                return e.lessThan(100) ? new p.Z(1) : e.div(75).pow(0.25);
              }),
              (t.prototype.rescheduleRunes = function () {
                var e = this;
                this.runes.forEach(function (t, n) {
                  t.isActive &&
                    ((e.runes[n].isLearning = !1),
                    (e.runes[n].xp = new p.Z(0)));
                });
              }),
              (t.prototype.process = function (e) {
                var t = this;
                this.runes.forEach(function (n, r) {
                  if (n.isActive) {
                    var i = H.find(function (e) {
                      return e.id === n.id;
                    });
                    if (!i) throw new Error("Rune ".concat(n.id, " not found"));
                    var a = t.getMaxXp(i.levelRequirement, n),
                      o = t
                        .getLearnSpeed()
                        .mul(
                          n.xpMult
                            .mul(e)
                            .mul(t.getSacrificedBonus(n.numSacrificed))
                        );
                    if (a.lessThan(o)) {
                      t.runes[r].xpMult >
                        Vi.learning.wizardOrb.getSpeedMult() &&
                        ((t.runes[r].xpMult =
                          Vi.learning.wizardOrb.getSpeedMult()),
                        (o = t
                          .getLearnSpeed()
                          .mul(
                            n.xpMult
                              .mul(e)
                              .mul(t.getSacrificedBonus(n.numSacrificed))
                          )));
                      var u = t.getMaxRunesPerXpV3(n, i.levelRequirement, o),
                        s = i.getCost
                          ? Q.calcBatchAll(
                              i.getCost,
                              zi.getInstance(),
                              n.level,
                              zi.getInstance().resources.getBatchObject(),
                              new p.Z("1.e+30000"),
                              Vi.learning.wizardOrb.getManaMult()
                            )
                          : [],
                        c = s.reduce(function (e, t) {
                          return p.Z.min(e, t.max.floor());
                        }, new p.Z("1.e+30000"));
                      console.log(
                        "Start learn batch: ",
                        s,
                        c.toNumber(),
                        u.toNumber()
                      );
                      var l = p.Z.min(c, u);
                      if (
                        (d = i.getCost
                          ? Q.calcBatchAll(
                              i.getCost,
                              zi.getInstance(),
                              n.level,
                              zi.getInstance().resources.getBatchObject(),
                              l,
                              Vi.learning.wizardOrb.getManaMult()
                            )
                          : [])
                          .reduce(function (e, t) {
                            return p.Z.min(e, t.max.floor());
                          }, new p.Z("1.e+30000"))
                          .lessThan(1)
                      )
                        return;
                      return (
                        zi.getInstance().resources.subtractResourceBatch(d),
                        (n.xp = new p.Z(0)),
                        (n.level = n.level.plus(l)),
                        Vi.resources.reassertBalances(),
                        Vi.regenerateCache(),
                        void Vi.learning.runePresets.applyPreset()
                      );
                    }
                    if (n.isLearning) n.xp = n.xp.plus(o);
                    else {
                      var d;
                      if (
                        (c = (d = i.getCost
                          ? Q.calcBatchAll(
                              i.getCost,
                              zi.getInstance(),
                              n.level,
                              zi.getInstance().resources.getBatchObject(),
                              new p.Z(1),
                              Vi.learning.wizardOrb.getManaMult()
                            )
                          : []).reduce(function (e, t) {
                          return p.Z.min(e, t.max.floor());
                        }, new p.Z("1.e+30000"))).lessThan(1)
                      )
                        return;
                      zi.getInstance().resources.subtractResourceBatch(d),
                        (t.runes[r].isLearning = !0),
                        (t.runes[r].xpMult =
                          Vi.learning.wizardOrb.getSpeedMult()),
                        Vi.resources.reassertBalances(),
                        Vi.regenerateCache();
                    }
                    n.xp.greaterThanOrEqualTo(a) &&
                      ((n.xp = new p.Z(0)),
                      (n.level = n.level.plus(1)),
                      (t.runes[r].isLearning = !1),
                      Vi.resources.reassertBalances(),
                      Vi.regenerateCache());
                  }
                });
              }),
              (t.prototype.getResourceBeingStored = function (e) {
                var t = this,
                  n = H.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getCap) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  r = [];
                return (
                  this.runes.forEach(function (i) {
                    var a = n.find(function (e) {
                      return e.id === i.id;
                    });
                    if (a && a.getCap) {
                      var o = Q.calculate(
                        Vi,
                        a.getCap[e],
                        t.getEffectiveLevel(i)
                      );
                      r.push({
                        label: "Rune: ".concat(a.name),
                        value: o,
                        id: "rune-".concat(a.id),
                        category: "Runes",
                      });
                    }
                  }, 0),
                  r
                );
              }),
              (t.prototype.getResourceBeingStoredMultiplier = function (e) {
                var t = this,
                  n = H.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getCapMultiplier) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  r = [];
                return (
                  this.runes.forEach(function (i) {
                    var a = n.find(function (e) {
                      return e.id === i.id;
                    });
                    if (a && a.getCapMultiplier) {
                      var o = Q.calculate(
                        Vi,
                        a.getCapMultiplier[e],
                        t.getEffectiveLevel(i)
                      );
                      o.equals(1) ||
                        r.push({
                          label: "Rune: ".concat(a.name),
                          value: o,
                          id: "rune-".concat(a.id),
                          category: "Runes",
                        });
                    }
                  }, 0),
                  r
                );
              }),
              (t.prototype.getMultiplier = function (e) {
                var t = this,
                  n = H.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getMultiplier) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  r = [];
                return (
                  this.runes.forEach(function (i) {
                    var a = n.find(function (e) {
                      return e.id === i.id;
                    });
                    if (a && a.getMultiplier) {
                      var o = Q.calculate(
                        Vi,
                        a.getMultiplier[e],
                        t.getEffectiveLevel(i)
                      );
                      o.equals(1) ||
                        r.push({
                          label: "Rune: ".concat(a.name),
                          value: o,
                          id: "rune-".concat(a.id),
                          category: "Runes",
                        });
                    }
                  }, 0),
                  r
                );
              }),
              (t.prototype.getResourceGain = function (e) {
                var t = this,
                  n = H.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getGain) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  r = [];
                return (
                  this.runes.forEach(function (i) {
                    var a = n.find(function (e) {
                      return e.id === i.id;
                    });
                    if (a && a.getGain) {
                      var o = Q.calculate(
                        Vi,
                        a.getGain[e],
                        t.getEffectiveLevel(i)
                      );
                      r.push({
                        label: "Rune: ".concat(a.name),
                        value: o,
                        id: "rune-".concat(a.id),
                        category: "Runes",
                      });
                    }
                  }, 0),
                  r
                );
              }),
              (t.prototype.getAttributeGained = function (e) {
                var t = this,
                  n = H.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getAttribute) || void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  r = [];
                return (
                  this.runes.forEach(function (i) {
                    var a = n.find(function (e) {
                      return e.id === i.id;
                    });
                    if (a && a.getAttribute) {
                      var o = Q.calculate(
                        Vi,
                        a.getAttribute[e],
                        t.getEffectiveLevel(i)
                      );
                      r.push({
                        label: "Rune: ".concat(a.name),
                        value: o,
                        id: "rune-".concat(a.id),
                        category: "Runes",
                      });
                    }
                  }, 0),
                  r
                );
              }),
              (t.prototype.getAttributeMultiplier = function (e) {
                var t = this,
                  n = H.filter(function (t) {
                    var n;
                    return !!(null === (n = t.getAttributeMultiplier) ||
                    void 0 === n
                      ? void 0
                      : n[e]);
                  }),
                  r = [];
                return (
                  this.runes.forEach(function (i) {
                    var a = n.find(function (e) {
                      return e.id === i.id;
                    });
                    if (a && a.getAttributeMultiplier) {
                      var o = Q.calculate(
                        Vi,
                        a.getAttributeMultiplier[e],
                        t.getEffectiveLevel(i)
                      );
                      o.equals(1) ||
                        r.push({
                          label: "Rune: ".concat(a.name),
                          value: o,
                          id: "rune-".concat(a.id),
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
          sn = un.getInstance(),
          cn = (function () {
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
          ln = (function (e) {
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
                      Vi.learning.runes.rescheduleRunes();
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
              cn(t, e),
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
                return Vi.resources
                  .getResourceCap(r.MANA)
                  .greaterThanOrEqualTo(8);
              }),
              (t.prototype.getSpeedMult = function () {
                return p.Z.pow(
                  new p.Z(2).pow(
                    Vi.learning.runeUpgrades.getUpgradeLevel(a.BETTER_ORB) + 1
                  ),
                  this.state.levelActive || 0
                );
              }),
              (t.prototype.getManaMult = function () {
                return p.Z.pow(4, this.state.levelActive || 0);
              }),
              (t.prototype.getCostFormula = function () {
                var e;
                return (
                  ((e = {})[r.MANA] = function (e) {
                    return {
                      A: new p.Z(5),
                      B: new p.Z(5),
                      type: v.EXPONENTIAL,
                    };
                  }),
                  e
                );
              }),
              (t.prototype.doBuild = function () {
                var e = Q.calcBatchAll(
                  this.getCostFormula(),
                  Vi,
                  new p.Z(this.state.levelBuilt),
                  Vi.resources.getBatchObject()
                );
                e
                  .reduce(function (e, t) {
                    return p.Z.min(e, t.max.floor());
                  }, new p.Z("1.e+30000"))
                  .lessThan(1) ||
                  (zi.getInstance().resources.subtractResourceBatch(e),
                  this.state.levelBuilt++,
                  zi.getInstance().learning.runePresets.applyPreset(),
                  Vi.resources.reassertBalances(),
                  Vi.regenerateCache());
              }),
              (t.prototype.dataToUI = function () {
                var e = Q.calcBatchAll(
                    this.getCostFormula(),
                    Vi,
                    new p.Z(this.state.levelBuilt),
                    Vi.resources.getBatchObject()
                  ),
                  t = e.reduce(function (e, t) {
                    return p.Z.min(e, t.max.floor());
                  }, new p.Z("1.e+30000"));
                return {
                  isUnlocked: this.unlockCond(),
                  isAvailable: t.greaterThanOrEqualTo(1),
                  maxAmplifyTier: this.state.levelBuilt,
                  currentAmplifyTier: this.state.levelActive || 0,
                  speedMult: x(this.getSpeedMult()),
                  manaMult: x(this.getManaMult()),
                  cancelRuneOnChange: this.state.cancelRuneOnChange,
                  upgradeCost: zi
                    .getInstance()
                    .resources.assertEnought(
                      e,
                      zi.getInstance().resources.getBatchObject(),
                      zi.getInstance().resources.getBatchBalanceObject()
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
          pn = ln.getInstance(),
          dn = [
            {
              id: a.MANA_ORB,
              name: "Better Mana Orb",
              description: "Better Mana Orb, providing 25% more mana storage",
              unlockCondition: function (e) {
                return !0;
              },
              maxLevel: 10,
              getCost:
                ((ee = {}),
                (ee[r.MANA] = function (e) {
                  return {
                    A: new p.Z(10),
                    B: new p.Z(1.75),
                    type: v.EXPONENTIAL,
                  };
                }),
                ee),
              getCapacityMultiplier:
                ((te = {}),
                (te[r.MANA] = function (e) {
                  return {
                    A: new p.Z(1),
                    B: new p.Z(1.25),
                    type: v.EXPONENTIAL,
                  };
                }),
                te),
            },
            {
              id: a.ADD_RUNIC_TABLE,
              name: "Runic Table",
              description:
                "Increase amount of runes that can be learned at once by 1",
              unlockCondition: function (e) {
                return !0;
              },
              maxLevel: 1,
              getCost:
                ((ne = {}),
                (ne[r.MANA] = function (e) {
                  return { A: new p.Z(15), B: new p.Z(2), type: v.EXPONENTIAL };
                }),
                ne),
            },
            {
              id: a.MAGIC_PRISM,
              name: "Magic Prism",
              description: "Increase mana generation by 25%",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(a.MANA_ORB) > 0;
              },
              maxLevel: 10,
              getCost:
                ((re = {}),
                (re[r.MANA] = function (e) {
                  return { A: new p.Z(20), B: new p.Z(2), type: v.EXPONENTIAL };
                }),
                re),
              getGainMultiplier:
                ((ie = {}),
                (ie[r.MANA] = function (e) {
                  return {
                    A: new p.Z(1),
                    B: new p.Z(1.25),
                    type: v.EXPONENTIAL,
                  };
                }),
                ie),
            },
            {
              id: a.KNOWLEDGE,
              name: "Knowledge",
              description:
                "Unlock new rune, providing access to new resource - knowledge",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(a.ADD_RUNIC_TABLE) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((ae = {}),
                (ae[r.MANA] = function (e) {
                  return { A: new p.Z(20), B: new p.Z(2), type: v.EXPONENTIAL };
                }),
                ae),
            },
            {
              id: a.RUNIC_MEMORY,
              name: "Runic Memory",
              description:
                "Use your magic knowledge to make rune learning 50% faster",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(a.KNOWLEDGE) > 0;
              },
              maxLevel: 12,
              getCost:
                ((oe = {}),
                (oe[r.KNOWLEDGE] = function (e) {
                  return { A: new p.Z(1), B: new p.Z(2), type: v.EXPONENTIAL };
                }),
                oe),
            },
            {
              id: a.EXPAND_MANA,
              name: "Expand Mana Rune",
              description:
                "Use your magic knowledge to learn new rune improving your mana income",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(a.KNOWLEDGE) > 0;
              },
              maxLevel: 1,
              getCost:
                ((ue = {}),
                (ue[r.KNOWLEDGE] = function (e) {
                  return { A: new p.Z(40), B: new p.Z(2), type: v.EXPONENTIAL };
                }),
                ue),
            },
            {
              id: a.EXPAND_MAGIC_LIB,
              name: "Expand Magic Library",
              description: "Further increase max active runes by 1 per level",
              unlockCondition: function (e) {
                return !0;
              },
              maxLevel: 3,
              getCost:
                ((se = {}),
                (se[r.MANA] = function (e) {
                  return {
                    A: new p.Z(50),
                    B: new p.Z(10),
                    type: v.EXPONENTIAL,
                  };
                }),
                se),
            },
            {
              id: a.EXPAND_BOOKCASES,
              name: "Expanded Bookcases",
              description: "Increase knowledge capacity by 30%",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(a.EXPAND_MAGIC_LIB) >
                  0
                );
              },
              maxLevel: 10,
              getCapacityMultiplier:
                ((ce = {}),
                (ce[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(1),
                    B: new p.Z(1.3),
                    type: v.EXPONENTIAL,
                  };
                }),
                ce),
              getCost:
                ((le = {}),
                (le[r.MANA] = function (e) {
                  return {
                    A: new p.Z(75),
                    B: new p.Z(10),
                    type: v.EXPONENTIAL,
                  };
                }),
                (le[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(50),
                    B: new p.Z(10),
                    type: v.EXPONENTIAL,
                  };
                }),
                le),
            },
            {
              id: a.MEMORY_RUNE,
              name: "Memory Rune",
              description:
                "Unlock memory rune, boosting your magical and mental capacity",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(a.EXPAND_BOOKCASES) >
                  0
                );
              },
              maxLevel: 1,
              getCost:
                ((pe = {}),
                (pe[r.MANA] = function (e) {
                  return {
                    A: new p.Z(80),
                    B: new p.Z(10),
                    type: v.EXPONENTIAL,
                  };
                }),
                (pe[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(50),
                    B: new p.Z(10),
                    type: v.EXPONENTIAL,
                  };
                }),
                pe),
            },
            {
              id: a.READING_TOOLS,
              name: "Reading Tools",
              description:
                "Learn how to use energetically charged magnifying glass to increase knowledge rune efficiency by 30%",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(a.EXPAND_BOOKCASES) >
                  0
                );
              },
              maxLevel: 4,
              getCost:
                ((de = {}),
                (de[r.MANA] = function (e) {
                  return {
                    A: new p.Z(3e3),
                    B: new p.Z(2),
                    type: v.EXPONENTIAL,
                  };
                }),
                de),
              getGainMultiplier:
                ((fe = {}),
                (fe[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(1),
                    B: new p.Z(1.3),
                    type: v.EXPONENTIAL,
                  };
                }),
                fe),
            },
            {
              id: a.EXPANDED_SACRIFICE,
              name: "Expanded Sacrifice",
              description:
                "Increase sacrificed runes gain 2 times (acts as you had twice as much runes to sacrifice)",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(a.MEMORY_RUNE) > 0
                );
              },
              maxLevel: 10,
              getCost:
                ((ge = {}),
                (ge[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(100),
                    B: new p.Z(3),
                    type: v.EXPONENTIAL,
                  };
                }),
                ge),
            },
            {
              id: a.CRYSTALS,
              name: "Crystals",
              description:
                "Unlock crystals, that persist through rune sacrifices and can significantly contribute to your magic and learning capabilities",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(a.MEMORY_RUNE) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((he = {}),
                (he[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(120),
                    B: new p.Z(3),
                    type: v.EXPONENTIAL,
                  };
                }),
                he),
            },
            {
              id: a.RUNE_MASTER,
              name: "Rune Master Rune",
              description:
                "Unlock rune, that helps to read other runes, reducing their XP requirements",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(a.MEMORY_RUNE) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((me = {}),
                (me[r.MANA] = function (e) {
                  return {
                    A: new p.Z(200),
                    B: new p.Z(10),
                    type: v.EXPONENTIAL,
                  };
                }),
                (me[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(150),
                    B: new p.Z(10),
                    type: v.EXPONENTIAL,
                  };
                }),
                me),
            },
            {
              id: a.TICKET_OUT,
              name: "Ticket To Mages City",
              description:
                "Gain your access to mages city. Unlocks new game layer.",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(a.MEMORY_RUNE) > 0 &&
                  !e.city.actions.isUnlocked
                );
              },
              maxLevel: 1,
              getCost:
                ((ve = {}),
                (ve[r.MANA] = function (e) {
                  return {
                    A: new p.Z(1e3),
                    B: new p.Z(10),
                    type: v.EXPONENTIAL,
                  };
                }),
                (ve[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(300),
                    B: new p.Z(10),
                    type: v.EXPONENTIAL,
                  };
                }),
                ve),
            },
            {
              id: a.BETTER_STASH,
              name: "Better Stash",
              description:
                "Just a stash for coins storage.Increase coin capacity by 25%",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(a.TICKET_OUT) > 0 ||
                  e.city.actions.isUnlocked
                );
              },
              maxLevel: 10,
              getCost:
                ((ye = {}),
                (ye[r.COINS] = function (e) {
                  return { A: new p.Z(10), B: new p.Z(2), type: v.EXPONENTIAL };
                }),
                ye),
              getCapacityMultiplier:
                ((Ee = {}),
                (Ee[r.COINS] = function (e) {
                  return {
                    A: new p.Z(1),
                    B: new p.Z(1.25),
                    type: v.EXPONENTIAL,
                  };
                }),
                Ee),
            },
            {
              id: a.KNOWLEDGE_GENERATION,
              name: "Knowledge Generation",
              description:
                "Improve your knowledge about knowledge. Boost knowledge generation by 25%",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.KNOWLEDGE_UPGRADES) >
                    0 &&
                  e.learning.runeUpgrades.getUpgradeLevel(a.KNOWLEDGE) > 0
                );
              },
              maxLevel: 10,
              getCost:
                ((Ae = {}),
                (Ae[r.MANA] = function (e) {
                  return {
                    A: new p.Z(1e4),
                    B: new p.Z(2),
                    type: v.EXPONENTIAL,
                  };
                }),
                (Ae[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(5e3),
                    B: new p.Z(2),
                    type: v.EXPONENTIAL,
                  };
                }),
                Ae),
              getGainMultiplier:
                ((we = {}),
                (we[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(1),
                    B: new p.Z(1.25),
                    type: v.EXPONENTIAL,
                  };
                }),
                we),
            },
            {
              id: a.BETTER_ORB,
              name: "Better Orb",
              description: "Wizard orb learning bonus is 100% larger",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.KNOWLEDGE_UPGRADES) >
                    0 &&
                  e.learning.runeUpgrades.getUpgradeLevel(a.KNOWLEDGE) > 0
                );
              },
              maxLevel: 10,
              getCost:
                ((Ne = {}),
                (Ne[r.MANA] = function (e) {
                  return {
                    A: new p.Z(1e4),
                    B: new p.Z(5),
                    type: v.EXPONENTIAL,
                  };
                }),
                (Ne[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(5e3),
                    B: new p.Z(5),
                    type: v.EXPONENTIAL,
                  };
                }),
                Ne),
              getGainMultiplier: {},
            },
            {
              id: a.RUNIC_MEMORY2,
              name: "Runic Memory II",
              description:
                "Use your magic knowledge to make rune learning even 50% more efficient",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(a.RUNIC_MEMORY) > 11
                );
              },
              maxLevel: 12,
              getCost:
                ((Ce = {}),
                (Ce[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(2e5),
                    B: new p.Z(2),
                    type: v.EXPONENTIAL,
                  };
                }),
                Ce),
            },
            {
              id: a.RUNIC_SPLASH,
              name: "Runic Splash",
              description:
                "Use spark to reveal more runic energy on sacrifice. Increase sacrifice level twice",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.SPARK_GENERATION) > 0
                );
              },
              maxLevel: 12,
              getCost:
                ((Oe = {}),
                (Oe[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(2e6),
                    B: new p.Z(2),
                    type: v.EXPONENTIAL,
                  };
                }),
                (Oe[r.SPARK] = function (e) {
                  return { A: new p.Z(4), B: new p.Z(2), type: v.EXPONENTIAL };
                }),
                Oe),
            },
          ],
          fn = (function () {
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
          gn = function () {
            return (
              (gn =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              gn.apply(this, arguments)
            );
          },
          hn = (function (e) {
            function t() {
              var t = e.call(this) || this;
              for (var n in ((t.upgrades = []),
              (t.cachedUpgrades = []),
              (t.autoTick = 0),
              t.workDispatcher.on("[rune-upgrade] do upgrade", function (e) {
                console.log("do upgrade", e), t.doUpgrade(e.id);
              }),
              t.workDispatcher.on("[rune-upgrade] set priority", function (e) {
                var n;
                console.log("do set priority", e),
                  (t.autoPriorities[e.id] = Math.max(
                    null !== (n = e.priority) && void 0 !== n ? n : 1,
                    1
                  ));
              }),
              (t.autoPriorities = {}),
              a))
                t.autoPriorities[a[n]] = 10;
              return t;
            }
            return (
              fn(t, e),
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
                            return gn({}, e);
                          })) || []),
                    void (this.autoPriorities = {})
                  );
                (this.upgrades =
                  (null === (t = null == e ? void 0 : e.upgrades) ||
                  void 0 === t
                    ? void 0
                    : t.map(function (e) {
                        return gn({}, e);
                      })) || []),
                  (this.autoPriorities = null == e ? void 0 : e.priorities);
              }),
              (t.prototype.exportData = function () {
                return {
                  upgrades: this.upgrades.map(function (e) {
                    return gn({}, e);
                  }),
                  priorities: this.autoPriorities,
                };
              }),
              (t.prototype.regenerateCache = function () {
                var e = this;
                this.cachedUpgrades = dn.map(function (t) {
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
                    var n = dn.find(function (e) {
                      return e.id === t.id;
                    });
                    if (!n) return t;
                    var i = e.upgrades.find(function (e) {
                      return e.id === n.id;
                    });
                    i || ((i = { id: n.id, level: 0 }), e.upgrades.push(i));
                    var a = Q.calcBatchAll(
                        n.getCost,
                        zi.getInstance(),
                        new p.Z(i.level),
                        zi.getInstance().resources.getBatchObject()
                      ),
                      o =
                        (a.reduce(function (e, t) {
                          return e && !t.isBlocked;
                        }, !0),
                        a.reduce(function (e, t) {
                          return Math.max(e, t.eta);
                        }, 0)),
                      u = a.reduce(function (e, t) {
                        return p.Z.min(e, t.max);
                      }, new p.Z("1.e+30000"));
                    return (
                      zi
                        .getInstance()
                        .resources.getResourceCap(r.MANA)
                        .greaterThanOrEqualTo(10) &&
                        i.level <= 0 &&
                        Vi.newNotifications.registerNotification(
                          "learning:runes:upgrade:".concat(n.id)
                        ),
                      gn(gn({}, t), {
                        etaNum: o,
                        isAvailable: u.greaterThanOrEqualTo(1),
                        cost: zi
                          .getInstance()
                          .resources.assertEnought(
                            a,
                            zi.getInstance().resources.getBatchObject(),
                            zi.getInstance().resources.getBatchBalanceObject()
                          ),
                        progress: u.lessThan(1)
                          ? (100 * u.toNumber()).toPrecision(3)
                          : "100",
                        priority: e.autoPriorities[t.id] || 10,
                      })
                    );
                  });
              }),
              (t.prototype.getAutoupgradeTick = function () {
                return (
                  30 /
                  zi
                    .getInstance()
                    .learning.crystals.getCrystalLevel("lazy")
                    .toNumber()
                );
              }),
              (t.prototype.dataToUI = function () {
                return {
                  list: this.dataFromCache(),
                  isAutoupgradeAllowed: this.isAutomationUnlocked(),
                  autoupgradeTickMax: h(this.getAutoupgradeTick()),
                  autoupgradeProgress:
                    this.autoTick / this.getAutoupgradeTick(),
                  isUnlocked: zi
                    .getInstance()
                    .resources.getResourceCap(r.MANA)
                    .greaterThanOrEqualTo(10),
                };
              }),
              (t.prototype.isAutomationUnlocked = function () {
                return Vi.learning.crystals
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
                var r = Q.calcBatchAll(
                    e.getCost,
                    zi.getInstance(),
                    new p.Z(n.level + t),
                    zi.getInstance().resources.getBatchObject()
                  ),
                  i = r.reduce(function (e, t) {
                    return e && !t.isBlocked;
                  }, !0),
                  a = r.reduce(function (e, t) {
                    return Math.max(e, t.eta);
                  }, 0),
                  o = r.reduce(function (e, t) {
                    return p.Z.min(e, t.max);
                  }, new p.Z("1.e+30000")),
                  u = e.unlockCondition(Vi);
                return {
                  id: e.id,
                  name: e.name,
                  description: e.description,
                  isUnlocked: u,
                  isAvailable: o.greaterThanOrEqualTo(1),
                  cost: zi
                    .getInstance()
                    .resources.assertEnought(
                      r,
                      zi.getInstance().resources.getBatchObject(),
                      zi.getInstance().resources.getBatchBalanceObject()
                    ),
                  progress: o.lessThan(1)
                    ? (100 * o.toNumber()).toPrecision(3)
                    : "100",
                  isMaxedOut: !!e.maxLevel && e.maxLevel <= n.level,
                  maxLevel: e.maxLevel,
                  level: n.level + t,
                  isBlocked: !i,
                  etaNum: a,
                  priority: this.autoPriorities[e.id] || 10,
                };
              }),
              (t.prototype.doUpgrade = function (e) {
                var t = dn.find(function (t) {
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
                  var r = Q.calcBatchAll(
                      t.getCost,
                      zi.getInstance(),
                      new p.Z(this.upgrades[n].level),
                      zi.getInstance().resources.getBatchObject()
                    ),
                    i = r.reduce(function (e, t) {
                      return p.Z.min(e, t.max.floor());
                    }, new p.Z("1.e+30000"));
                  if (
                    (console.log("[upgrade] mx: ", i.toNumber()),
                    !i.lessThan(1))
                  )
                    return (
                      (this.upgrades[n].level = this.upgrades[n].level + 1),
                      console.log("costs: ", r),
                      zi.getInstance().resources.subtractResourceBatch(r),
                      zi.getInstance().learning.runePresets.applyPreset(),
                      Vi.resources.reassertBalances(),
                      Vi.regenerateCache(),
                      !0
                    );
                }
              }),
              (t.prototype.getGain = function (e) {
                var t = dn.filter(function (t) {
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
                      var a = Q.calculate(Vi, i.getGain[e], new p.Z(r.level));
                      n.push({
                        label: "Upgrade: ".concat(i.name),
                        value: a,
                        id: "upgrade-".concat(i.id),
                        category: "Upgrades",
                      });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getGainMultiplier = function (e) {
                var t = dn.filter(function (t) {
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
                      var a = Q.calculate(
                        Vi,
                        i.getGainMultiplier[e],
                        new p.Z(r.level)
                      );
                      a &&
                        !a.eq(1) &&
                        n.push({
                          label: "Upgrade: ".concat(i.name),
                          value: a,
                          id: "upgrade-".concat(i.id),
                          category: "Upgrades",
                        });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getCraftingMultiplier = function () {
                var e = dn.filter(function (e) {
                    return !!e.getCraftingMultiplier;
                  }),
                  t = [];
                return (
                  this.upgrades.forEach(function (n) {
                    var r = e.find(function (e) {
                      return e.id === n.id;
                    });
                    if (r && r.getCraftingMultiplier) {
                      var i = Q.calculate(
                          Vi,
                          r.getCraftingMultiplier,
                          new p.Z(n.level)
                        ),
                        a = i;
                      i &&
                        t.push({
                          label: "Upgrade: ".concat(r.name),
                          value: a,
                          id: "upgrade-".concat(r.id),
                          category: "Upgrades",
                        });
                    }
                  }, 0),
                  t
                );
              }),
              (t.prototype.getCapacity = function (e) {
                var t = dn.filter(function (t) {
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
                      var a = Q.calculate(
                        Vi,
                        i.getCapacityEffect[e],
                        new p.Z(r.level)
                      );
                      n.push({
                        label: "Upgrade: ".concat(i.name),
                        value: a,
                        id: "upgrade-".concat(i.id),
                        category: "Upgrades",
                      });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getCapacityMult = function (e) {
                var t = dn.filter(function (t) {
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
                      var a = Q.calculate(
                        Vi,
                        i.getCapacityMultiplier[e],
                        new p.Z(r.level)
                      );
                      a &&
                        n.push({
                          label: "Upgrade: ".concat(i.name),
                          value: a,
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
                  zi.getInstance().settings.turnOnAutoupgrade &&
                  !zi
                    .getInstance()
                    .learning.crystals.getCrystalLevel("lazy")
                    .lessThanOrEqualTo(0)
                ) {
                  var t = this.getAutoupgradeTick();
                  if (((this.autoTick += e), !(this.autoTick < t))) {
                    this.autoTick = 0;
                    var n = this.dataFromCache()
                      .filter(function (e) {
                        return e.isUnlocked && !e.isMaxedOut && e.isAvailable;
                      })
                      .sort(function (e, t) {
                        return (e.priority || 10) - (t.priority || 10);
                      });
                    n.length
                      ? this.doUpgrade(n[0].id)
                      : Vi.learning.wizardOrb.doBuild();
                  }
                }
              }),
              (t.prototype.reset = function () {
                this.upgrades = [];
              }),
              t
            );
          })(s),
          mn = hn.getInstance(),
          vn = [
            {
              id: "basic",
              name: "Source of Mana",
              description:
                "Provides some static bonus to your mana cap and generation",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(a.CRYSTALS) > 0;
              },
              getGain:
                ((Ie = {}),
                (Ie[r.MANA] = function (e) {
                  return { A: new p.Z(0.4), B: new p.Z(0), type: v.LINEAR };
                }),
                Ie),
              getCap:
                ((Re = {}),
                (Re[r.MANA] = function (e) {
                  return { A: new p.Z(4), B: new p.Z(0), type: v.LINEAR };
                }),
                Re),
              getCost:
                ((Le = {}),
                (Le[r.MANA] = function (e) {
                  return {
                    A: new p.Z(250),
                    B: new p.Z(2),
                    type: v.EXPONENTIAL,
                  };
                }),
                (Le[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(100),
                    B: new p.Z(2),
                    type: v.EXPONENTIAL,
                  };
                }),
                Le),
            },
            {
              id: "wise",
              name: "Wise Crystal",
              description: "Consists of knowledge...",
              unlockCondition: function (e) {
                return e.learning.runeUpgrades.getUpgradeLevel(a.CRYSTALS) > 0;
              },
              getMultiplier:
                ((Ze = {}),
                (Ze[r.KNOWLEDGE] = function (e) {
                  return { A: new p.Z(0.25), B: new p.Z(1), type: v.LINEAR };
                }),
                Ze),
              getCapMultiplier:
                ((be = {}),
                (be[r.KNOWLEDGE] = function (e) {
                  return { A: new p.Z(0.25), B: new p.Z(1), type: v.LINEAR };
                }),
                be),
              getCost:
                ((Te = {}),
                (Te[r.MANA] = function (e) {
                  return {
                    A: new p.Z(500),
                    B: new p.Z(4),
                    type: v.EXPONENTIAL,
                  };
                }),
                (Te[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(200),
                    B: new p.Z(4),
                    type: v.EXPONENTIAL,
                  };
                }),
                Te),
            },
            {
              id: "lazy",
              name: "Lazy Crystal",
              description: "Unlocks upgrades automation",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(a.CRYSTALS) > 0 &&
                  e.city.academyUpgrades.getUpgradeLevel(o.LAZY_CRYSTAL) > 0
                );
              },
              getCost:
                ((Se = {}),
                (Se[r.MANA] = function (e) {
                  return {
                    A: new p.Z(1e4),
                    B: new p.Z(4),
                    type: v.EXPONENTIAL,
                  };
                }),
                (Se[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(2e3),
                    B: new p.Z(4),
                    type: v.EXPONENTIAL,
                  };
                }),
                Se),
            },
            {
              id: "gold",
              name: "Gold Crystal",
              description: "Boosts gold cap",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(a.CRYSTALS) > 0 &&
                  e.city.academyUpgrades.getUpgradeLevel(o.GOLD_CRYSTAL) > 0
                );
              },
              getCost:
                ((Pe = {}),
                (Pe[r.MANA] = function (e) {
                  return {
                    A: new p.Z(1e4),
                    B: new p.Z(4),
                    type: v.EXPONENTIAL,
                  };
                }),
                (Pe[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(2e3),
                    B: new p.Z(4),
                    type: v.EXPONENTIAL,
                  };
                }),
                Pe),
              getCapMultiplier:
                ((Ue = {}),
                (Ue[r.COINS] = function (e) {
                  return { A: new p.Z(1), B: new p.Z(1), type: v.LINEAR };
                }),
                Ue),
            },
            {
              id: "mana-crystal",
              name: "Mana Crystal",
              description: "Boosts mana cap",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(a.CRYSTALS) > 0 &&
                  e.city.academyUpgrades.getUpgradeLevel(o.MANA_CRYSTAL) > 0
                );
              },
              getCost:
                ((Me = {}),
                (Me[r.MANA] = function (e) {
                  return {
                    A: new p.Z(1e4),
                    B: new p.Z(4),
                    type: v.EXPONENTIAL,
                  };
                }),
                (Me[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(2e5),
                    B: new p.Z(4),
                    type: v.EXPONENTIAL,
                  };
                }),
                Me),
              getCapMultiplier:
                ((Be = {}),
                (Be[r.MANA] = function (e) {
                  return { A: new p.Z(0.5), B: new p.Z(1), type: v.LINEAR };
                }),
                Be),
            },
            {
              id: "wellness-crystal",
              name: "Wellness Crystal",
              description: "Generates some coins passively",
              unlockCondition: function (e) {
                return (
                  e.learning.runeUpgrades.getUpgradeLevel(a.CRYSTALS) > 0 &&
                  e.city.academyUpgrades.getUpgradeLevel(o.WELLNESS_CRYSTAL) > 0
                );
              },
              getCost:
                ((Ge = {}),
                (Ge[r.MANA] = function (e) {
                  return {
                    A: new p.Z("1.e+9"),
                    B: new p.Z(4),
                    type: v.EXPONENTIAL,
                  };
                }),
                (Ge[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z("4.e+9"),
                    B: new p.Z(4),
                    type: v.EXPONENTIAL,
                  };
                }),
                Ge),
              getGain:
                ((_e = {}),
                (_e[r.COINS] = function (e) {
                  return { A: new p.Z(1), B: new p.Z(0), type: v.LINEAR };
                }),
                _e),
            },
          ],
          yn = (function () {
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
          En = function () {
            return (
              (En =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              En.apply(this, arguments)
            );
          },
          An = (function (e) {
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
              yn(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                this.crystals =
                  (null == e
                    ? void 0
                    : e.map(function (e) {
                        return En(En({}, e), { level: new p.Z(e.level) });
                      })) || [];
              }),
              (t.prototype.exportData = function () {
                return this.crystals.map(function (e) {
                  return En(En({}, e), { level: e.level.toPrecision(18) });
                });
              }),
              (t.prototype.dataToUI = function () {
                var e = this,
                  t = vn.map(function (t) {
                    return e.processToUI(t);
                  });
                return {
                  isUnlocked:
                    Vi.learning.runeUpgrades.getUpgradeLevel(a.CRYSTALS) > 0 ||
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
                  ((t = { id: e.id, level: new p.Z(0) }),
                  this.crystals.push(t));
                var n = e.getCost
                    ? Q.calcBatchAll(
                        e.getCost,
                        zi.getInstance(),
                        t.level,
                        zi.getInstance().resources.getBatchObject(),
                        new p.Z(1)
                      )
                    : [],
                  r = e.getGain
                    ? Q.calcBatch(e.getGain, zi.getInstance(), t.level.plus(1))
                    : [],
                  i = e.getMultiplier
                    ? Q.calcBatch(
                        e.getMultiplier,
                        zi.getInstance(),
                        t.level.plus(1)
                      )
                    : [],
                  a = e.getCap
                    ? Q.calcBatch(e.getCap, zi.getInstance(), t.level.plus(1))
                    : [],
                  o = e.getCapMultiplier
                    ? Q.calcBatch(
                        e.getCapMultiplier,
                        zi.getInstance(),
                        t.level.plus(1)
                      )
                    : [],
                  u = n.reduce(function (e, t) {
                    return p.Z.min(e, t.max.floor());
                  }, new p.Z("1.e+30000")),
                  s = n.reduce(function (e, t) {
                    return e && !t.isBlocked;
                  }, !0),
                  c = n.reduce(function (e, t) {
                    return Math.max(e, t.eta);
                  }, 0),
                  l = e.unlockCondition(Vi) || t.level.greaterThan(0);
                return (
                  l &&
                    t.level.lessThanOrEqualTo(0) &&
                    Vi.newNotifications.registerNotification(
                      "learning:crystals:crystal:".concat(e.id)
                    ),
                  {
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    isUnlocked: l,
                    isAvailable: u.greaterThanOrEqualTo(1),
                    cost: zi
                      .getInstance()
                      .resources.assertEnought(
                        n,
                        zi.getInstance().resources.getBatchObject(),
                        zi.getInstance().resources.getBatchBalanceObject()
                      ),
                    gain: r.map(function (e) {
                      return En(En({}, e), {
                        amountValue: e.amount.toString(),
                        amount: x(e.amount),
                      });
                    }),
                    progress: p.Z.min(1, u.mul(100)).toNumber().toPrecision(3),
                    isBlocked: !s,
                    etaNum: c,
                    level: K(t.level, 2),
                    gainMult: i.map(function (e) {
                      return En(En({}, e), {
                        amountValue: e.amount.toString(),
                        amount: x(e.amount),
                      });
                    }),
                    cap: a.map(function (e) {
                      return En(En({}, e), {
                        amountValue: e.amount.toString(),
                        amount: x(e.amount),
                      });
                    }),
                    capMult: o.map(function (e) {
                      return En(En({}, e), {
                        amountValue: e.amount.toString(),
                        amount: x(e.amount),
                      });
                    }),
                  }
                );
              }),
              (t.prototype.purchaseCrystal = function (e) {
                var t = vn.find(function (t) {
                  return t.id === e;
                });
                if (t) {
                  var n = this.crystals.findIndex(function (t) {
                    return t.id === e;
                  });
                  n < 0 &&
                    ((n = this.crystals.length),
                    this.crystals.push({ id: e, level: new p.Z(0) }));
                  var r = Q.calcBatchAll(
                      t.getCost,
                      zi.getInstance(),
                      new p.Z(this.crystals[n].level),
                      zi.getInstance().resources.getBatchObject()
                    ),
                    i = r.reduce(function (e, t) {
                      return p.Z.min(e, t.max.floor());
                    }, new p.Z("1.e+30000"));
                  console.log("[upgrade] mx: ", i.toNumber()),
                    i.lessThan(1) ||
                      ((this.crystals[n].level =
                        this.crystals[n].level.plus(1)),
                      zi.getInstance().resources.subtractResourceBatch(r),
                      console.log("costs: ", r),
                      Vi.regenerateCache(),
                      Vi.resources.reassertBalances());
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
                    : t.level) || new p.Z(0)
                );
              }),
              (t.prototype.process = function (e) {}),
              (t.prototype.getResourceBeingStored = function (e) {
                var t = vn.filter(function (t) {
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
                      var a = Q.calculate(Vi, i.getCap[e], r.level);
                      a.equals(0) ||
                        n.push({
                          label: "Crystal: ".concat(i.name),
                          value: a,
                          id: "crystal-".concat(i.id),
                          category: "Crystals",
                        });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getResourceBeingStoredMultiplier = function (e) {
                var t = vn.filter(function (t) {
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
                      var a = Q.calculate(Vi, i.getCapMultiplier[e], r.level);
                      a.equals(1) ||
                        n.push({
                          label: "Crystal: ".concat(i.name),
                          value: a,
                          id: "crystal-".concat(i.id),
                          category: "Crystals",
                        });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getMultiplier = function (e) {
                var t = vn.filter(function (t) {
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
                      var a = Q.calculate(Vi, i.getMultiplier[e], r.level);
                      a.equals(1) ||
                        n.push({
                          label: "Crystal: ".concat(i.name),
                          value: a,
                          id: "crystal-".concat(i.id),
                          category: "Crystals",
                        });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getResourceGain = function (e) {
                var t = vn.filter(function (t) {
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
                      var a = Q.calculate(Vi, i.getGain[e], r.level);
                      a.equals(0) ||
                        n.push({
                          label: "Crystal: ".concat(i.name),
                          value: a,
                          id: "crystal-".concat(i.id),
                          category: "Crystals",
                        });
                    }
                  }, 0),
                  n
                );
              }),
              (t.prototype.getAttributeGained = function (e) {
                var t = vn.filter(function (t) {
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
                      var a = Q.calculate(Vi, i.getAttribute[e], r.level);
                      n.push({
                        label: "Crystal: ".concat(i.name),
                        value: a,
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
          wn = An.getInstance(),
          Nn = (function () {
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
          Cn = function () {
            return (
              (Cn =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              Cn.apply(this, arguments)
            );
          },
          On = (function (e) {
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
              Nn(t, e),
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
                var t = H.filter(function (e) {
                  return (
                    e.unlockCondition(Vi) ||
                    Vi.learning.runes.runes.find(function (t) {
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
                    zi.getInstance().statistics.stats.numRuneResets > 0,
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
                  (e = Cn(Cn({}, e), { id: "".concat(Math.random()) })),
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
                if (Vi.statistics.stats.numRuneResets) {
                  var e = this.presets.find(function (e) {
                    return e.isDefault;
                  });
                  e && ((this.active = e.id), this.applyPreset());
                }
              }),
              (t.prototype.getActiveName = function () {
                var e = this;
                if (this.active && Vi.statistics.stats.numRuneResets) {
                  var t = this.presets.find(function (t) {
                    return t.id === e.active;
                  });
                  if (t) return t.name;
                }
              }),
              (t.prototype.applyPreset = function () {
                var e = this;
                if (this.active && Vi.statistics.stats.numRuneResets) {
                  var t = this.presets.find(function (t) {
                    return t.id === e.active;
                  });
                  if (t) {
                    Vi.learning.runes.applyBatch(
                      t.runes.map(function (e) {
                        return e.id;
                      })
                    );
                    var n = Vi.learning.wizardOrb.state.levelActive;
                    (Vi.learning.wizardOrb.state.levelActive = Math.min(
                      Vi.learning.wizardOrb.state.levelBuilt,
                      t.orbLevel
                    )),
                      n !== Vi.learning.wizardOrb.state.levelActive &&
                        Vi.learning.wizardOrb.state.cancelRuneOnChange &&
                        (console.log(
                          "rescheduling: ",
                          n,
                          Vi.learning.wizardOrb.state.levelActive
                        ),
                        Vi.learning.runes.rescheduleRunes());
                  }
                }
              }),
              t
            );
          })(s).getInstance(),
          In = (function () {
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
          Rn = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.runes = sn),
                (t.wizardOrb = pn),
                (t.runeUpgrades = mn),
                (t.crystals = wn),
                (t.runePresets = On),
                t
              );
            }
            return (
              In(t, e),
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
                this.runeUpgrades.regenerateCache();
              }),
              (t.prototype.reset = function () {
                this.runes.reset();
              }),
              t
            );
          })(s).getInstance(),
          Ln = function (e, t) {
            var n = {};
            for (var r in e) n[r] = t(e[r]);
            return n;
          },
          Zn = (function () {
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
          bn = function () {
            return (
              (bn =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              bn.apply(this, arguments)
            );
          },
          Tn = (function (e) {
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
              Zn(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                this.stored = Ln(e.stored, function (e) {
                  return new p.Z(e);
                });
              }),
              (t.prototype.exportData = function () {
                return {
                  stored: Ln(this.stored, function (e) {
                    return e.toPrecision(18);
                  }),
                };
              }),
              (t.prototype.dataToUI = function () {
                var e = this;
                return {
                  attributes: z.map(function (t) {
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
                      a,
                      o,
                      u,
                      s,
                      l =
                        (((t = {})[c.RUNE_READING] = {
                          linear: [
                            {
                              id: "basic",
                              label: "Basic",
                              value: new p.Z(1),
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
                              value: new p.Z(1),
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
                              value: new p.Z(1),
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
                              value: new p.Z(1),
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
                              value: new p.Z(1),
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
                              value: new p.Z(1),
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
                              value: new p.Z(1),
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
                              value: new p.Z(1),
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
                              value: new p.Z(1),
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
                              value: new p.Z(1),
                              category: "Base",
                            },
                          ],
                          multiplier: [],
                          consumption: [],
                        }),
                        t);
                    for (var d in l)
                      (n = l[d].linear).push.apply(
                        n,
                        Vi.learning.runes.getAttributeGained(d)
                      ),
                        (r = l[d].multiplier).push.apply(
                          r,
                          Vi.learning.runes.getAttributeMultiplier(d)
                        ),
                        (i = l[d].linear).push.apply(
                          i,
                          Vi.city.actions.getAttributeProduced(d)
                        ),
                        (a = l[d].multiplier).push.apply(
                          a,
                          Vi.city.actions.getAttributeMultiplier(d)
                        ),
                        (o = l[d].linear).push.apply(
                          o,
                          Vi.construction.structures.getAttributeProduced(d)
                        ),
                        (u = l[d].multiplier).push.apply(
                          u,
                          Vi.construction.structures.getAttributeMultiplier(d)
                        ),
                        (s = l[d].multiplier).push.apply(
                          s,
                          Vi.city.mercenaries.getAttributeMultiplier(d)
                        );
                    return l;
                  })(),
                  n = {};
                z.forEach(function (r) {
                  var i, a, o;
                  if (r.unlockCondition(Vi)) {
                    n[r.id] = { income: [], multiplier: [], consumption: [] };
                    var u =
                        null === (i = t[r.id].linear) || void 0 === i
                          ? void 0
                          : i.reduce(function (e, t) {
                              return e.plus(t.value);
                            }, new p.Z(0)),
                      s =
                        null === (a = t[r.id].multiplier) || void 0 === a
                          ? void 0
                          : a.reduce(function (e, t) {
                              return e.mul(t.value);
                            }, new p.Z(1)),
                      c =
                        (null === (o = t[r.id].consumption) || void 0 === o
                          ? void 0
                          : o.reduce(function (e, t) {
                              return e.plus(t.value);
                            }, new p.Z(0))) || new p.Z(0);
                    (e.attributesEffects[r.id] = new p.Z(u.mul(s)).sub(c)),
                      (n[r.id].income = t[r.id].linear
                        .filter(function (e) {
                          return e.value;
                        })
                        .map(function (e) {
                          return bn(bn({}, e), {
                            value: "+".concat(e.value.toPrecision(4)),
                          });
                        })),
                      (n[r.id].multiplier = t[r.id].multiplier
                        .filter(function (e) {
                          return 1 !== e.value;
                        })
                        .map(function (e) {
                          return bn(bn({}, e), {
                            value: "x".concat(e.value.toPrecision(4)),
                          });
                        })),
                      (n[r.id].consumption = t[r.id].consumption
                        .filter(function (e) {
                          return e.value;
                        })
                        .map(function (e) {
                          return bn(bn({}, e), {
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
                  r = e.unlockCondition(Vi);
                return {
                  id: e.id,
                  name: e.name,
                  isUnlocked: r,
                  amount: x(
                    null !== (t = this.attributesEffects[e.id]) && void 0 !== t
                      ? t
                      : new p.Z(0)
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
                return this.attributesEffects[e] || new p.Z(0);
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
          Sn = Tn.getInstance(),
          Pn = (function () {
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
          Un = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (t.attributes = Sn), t;
            }
            return (
              Pn(t, e),
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
            (e.MEAL = "meal"),
            (e.READ_BOOKS = "read_books"),
            (e.READ_MANUSCRIPTS = "read_manuscripts"),
            (e.APTITUDE_TRAINING = "aptitude_training"),
            (e.BRAINSTORM = "brain_storm"),
            (e.BRAIN_EMPOWER = "brain_empower"),
            (e.MEDITATE = "meditate"),
            (e.FIND_MANA_SOURCE = "find_mana_source"),
            (e.CONDENSE_STASHES = "condense_stashes"),
            (e.CONJURE_SPARK = "conjure_spark"),
            (e.CONJURE_WOOD = "conjure_wood"),
            (e.CONJURE_STONE = "conjure_stone"),
            (e.CRAFT = "craft");
        })(ke || (ke = {}));
        var Mn,
          Bn,
          Gn,
          _n,
          kn,
          Dn,
          xn,
          Wn,
          Xn,
          Kn,
          jn,
          qn,
          Yn,
          Fn,
          Hn,
          zn,
          Vn,
          Jn,
          Qn,
          $n,
          er,
          tr,
          nr,
          rr,
          ir,
          ar,
          or,
          ur,
          sr,
          cr,
          lr,
          pr,
          dr,
          fr,
          gr,
          hr,
          mr,
          vr,
          yr,
          Er,
          Ar,
          wr,
          Nr,
          Cr,
          Or,
          Ir,
          Rr,
          Lr,
          Zr,
          br,
          Tr,
          Sr,
          Pr,
          Ur,
          Mr,
          Br,
          Gr,
          _r,
          kr,
          Dr,
          xr,
          Wr,
          Xr,
          Kr,
          jr,
          qr,
          Yr,
          Fr,
          Hr,
          zr,
          Vr,
          Jr,
          Qr,
          $r,
          ei = [
            {
              id: ke.CLEAN_STREETS,
              name: "Clean Streets",
              description: "",
              unlockCondition: function (e) {
                return !0;
              },
              effortRequired: new p.Z(3),
              attributesEffortEffect: ((De = {}), (De[c.STRENGTH] = 1), De),
              tags: ["physical", "actions", "coins"],
              baseResourcePerCast:
                ((xe = {}), (xe[r.COINS] = new p.Z(0.1)), xe),
              baseCostPerCast: ((We = {}), (We[r.ENERGY] = new p.Z(0.5)), We),
              xpGain: new p.Z("5"),
            },
            {
              id: ke.DIG_CHANNELS,
              name: "Dig Channels",
              description: "",
              unlockCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.STRENGTH)
                  .greaterThan(5);
              },
              effortRequired: new p.Z(50),
              attributesEffortEffect: ((Xe = {}), (Xe[c.STRENGTH] = 1), Xe),
              tags: ["physical", "actions", "coins"],
              baseResourcePerCast:
                ((Ke = {}), (Ke[r.COINS] = new p.Z(0.5)), Ke),
              baseCostPerCast: ((je = {}), (je[r.ENERGY] = new p.Z(1.5)), je),
              xpGain: new p.Z("100"),
            },
            {
              id: ke.CARE_BAGS,
              name: "Carry Bags",
              description: "",
              unlockCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.STRENGTH)
                  .greaterThan(50);
              },
              effortRequired: new p.Z(500),
              attributesEffortEffect: ((qe = {}), (qe[c.STRENGTH] = 1), qe),
              tags: ["physical", "actions", "coins"],
              baseResourcePerCast: ((Ye = {}), (Ye[r.COINS] = new p.Z(4)), Ye),
              baseCostPerCast: ((Fe = {}), (Fe[r.ENERGY] = new p.Z(5)), Fe),
              xpGain: new p.Z("1000"),
            },
            {
              id: ke.LABOUR,
              name: "Labour",
              description: "",
              unlockCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.STRENGTH)
                  .greaterThan(1e3);
              },
              effortRequired: new p.Z(5e3),
              attributesEffortEffect: ((He = {}), (He[c.STRENGTH] = 1), He),
              tags: ["physical", "actions", "coins"],
              baseResourcePerCast: ((ze = {}), (ze[r.COINS] = new p.Z(32)), ze),
              baseCostPerCast: ((Ve = {}), (Ve[r.ENERGY] = new p.Z(15)), Ve),
              xpGain: new p.Z("10000"),
            },
            {
              id: ke.FARMER,
              name: "Farmer",
              description: "",
              unlockCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.STRENGTH)
                  .greaterThan(5e4);
              },
              effortRequired: new p.Z(5e4),
              attributesEffortEffect: ((Je = {}), (Je[c.STRENGTH] = 1), Je),
              tags: ["physical", "actions", "coins"],
              baseResourcePerCast:
                ((Qe = {}), (Qe[r.COINS] = new p.Z(160)), Qe),
              baseCostPerCast: (($e = {}), ($e[r.ENERGY] = new p.Z(50)), $e),
              xpGain: new p.Z("100000"),
            },
            {
              id: ke.QUARRYMAN,
              name: "Quarryman",
              description: "",
              unlockCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.STRENGTH)
                  .greaterThan(1e6);
              },
              effortRequired: new p.Z(5e5),
              attributesEffortEffect: ((et = {}), (et[c.STRENGTH] = 1), et),
              tags: ["physical", "actions", "coins"],
              baseResourcePerCast:
                ((tt = {}), (tt[r.COINS] = new p.Z(800)), tt),
              baseCostPerCast: ((nt = {}), (nt[r.ENERGY] = new p.Z(150)), nt),
              xpGain: new p.Z("1.e+6"),
            },
            {
              id: ke.MINER,
              name: "Miner",
              description: "",
              unlockCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.STRENGTH)
                  .greaterThan("1.e+8");
              },
              effortRequired: new p.Z(5e6),
              attributesEffortEffect: ((rt = {}), (rt[c.STRENGTH] = 1), rt),
              tags: ["physical", "actions", "coins"],
              baseResourcePerCast:
                ((it = {}), (it[r.COINS] = new p.Z(4e3)), it),
              baseCostPerCast: ((at = {}), (at[r.ENERGY] = new p.Z(450)), at),
              xpGain: new p.Z("1.e+7"),
            },
            {
              id: ke.HEAD_MINER,
              name: "Head Miner",
              description: "",
              unlockCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.STRENGTH)
                  .greaterThan("1.e+12");
              },
              effortRequired: new p.Z(5e7),
              attributesEffortEffect: ((ot = {}), (ot[c.STRENGTH] = 1), ot),
              tags: ["physical", "actions", "coins"],
              baseResourcePerCast:
                ((ut = {}), (ut[r.COINS] = new p.Z(2e4)), ut),
              baseCostPerCast: ((st = {}), (st[r.ENERGY] = new p.Z(1350)), st),
              xpGain: new p.Z("1.e+8"),
            },
            {
              id: ke.BUILDER,
              name: "Builder",
              description: "",
              unlockCondition: function (e) {
                return e.personage.attributes
                  .getAttribute(c.STRENGTH)
                  .greaterThan("1.e+20");
              },
              effortRequired: new p.Z(5e8),
              attributesEffortEffect: ((ct = {}), (ct[c.STRENGTH] = 1), ct),
              tags: ["physical", "actions", "coins"],
              baseResourcePerCast:
                ((lt = {}), (lt[r.COINS] = new p.Z(1e5)), lt),
              baseCostPerCast: ((pt = {}), (pt[r.ENERGY] = new p.Z(4050)), pt),
              xpGain: new p.Z("1.e+10"),
            },
            {
              id: ke.REST,
              name: "Rest",
              description: "",
              unlockCondition: function (e) {
                return !0;
              },
              effortRequired: new p.Z(1),
              attributesEffortEffect: ((dt = {}), (dt[c.VITALITY] = 0.1), dt),
              tags: ["physical", "actions", "energy"],
              baseResourcePerCast:
                ((ft = {}), (ft[r.ENERGY] = new p.Z(0.1)), ft),
              xpGain: new p.Z("1"),
            },
            {
              id: ke.MEAL,
              name: "Meal",
              description: "",
              unlockCondition: function (e) {
                return !0;
              },
              effortRequired: new p.Z(1),
              attributesEffortEffect: {},
              tags: ["food", "actions", "energy"],
              baseResourcePerCast:
                ((gt = {}), (gt[r.ENERGY] = new p.Z(0.5)), gt),
              baseCostPerCast: ((ht = {}), (ht[r.COINS] = new p.Z(1)), ht),
              xpGain: new p.Z("10"),
            },
            {
              id: ke.PUSHUP,
              name: "Push Up",
              description: "Train your physical abilities",
              unlockCondition: function (e) {
                return !0;
              },
              effortRequired: new p.Z(20),
              attributesEffortEffect:
                ((mt = {}),
                (mt[c.VITALITY] = 0.75),
                (mt[c.STRENGTH] = 0.25),
                mt),
              tags: ["physical", "actions", "training", "strength"],
              baseAttributePerCats:
                ((vt = {}), (vt[c.STRENGTH] = new p.Z(0.1)), vt),
              baseCostPerCast: ((yt = {}), (yt[r.ENERGY] = new p.Z(1)), yt),
              xpGain: new p.Z("25"),
            },
            {
              id: ke.BREATH,
              name: "Breath Techniques",
              description: "Train your vitality",
              unlockCondition: function (e) {
                return !0;
              },
              effortRequired: new p.Z(20),
              attributesEffortEffect:
                ((Et = {}), (Et[c.VITALITY] = 0.5), (Et[c.STRENGTH] = 0.5), Et),
              tags: ["physical", "actions", "training", "vitality"],
              baseAttributePerCats:
                ((At = {}), (At[c.VITALITY] = new p.Z(0.1)), At),
              baseCostPerCast: ((wt = {}), (wt[r.ENERGY] = new p.Z(1)), wt),
              xpGain: new p.Z("25"),
            },
            {
              id: ke.READ_BOOKS,
              name: "Read Books",
              description:
                "Spend time reading old books, full of knowledge. Increase knowledge cap",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(o.READ_BOOKS) > 0;
              },
              effortRequired: new p.Z(5e3),
              attributesEffortEffect:
                ((Nt = {}),
                (Nt[c.RUNE_READING] = 0.75),
                (Nt[c.WILLPOWER] = 0.25),
                Nt),
              tags: ["mental", "actions", "training", "knowledge"],
              baseResourceCapPerCast:
                ((Ct = {}), (Ct[r.KNOWLEDGE] = new p.Z(1)), Ct),
              baseCostPerCast: ((Ot = {}), (Ot[r.ENERGY] = new p.Z(10)), Ot),
              xpGain: new p.Z("100"),
            },
            {
              id: ke.READ_MANUSCRIPTS,
              name: "Read Manuscripts",
              description:
                "Spend time reading rune manuscripts, increasing rune mastery",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.RUNE_LANGUAGE) > 0
                );
              },
              effortRequired: new p.Z(2e4),
              attributesEffortEffect:
                ((It = {}),
                (It[c.RUNE_READING] = 0.75),
                (It[c.WILLPOWER] = 0.25),
                It),
              tags: ["mental", "actions", "training", "rune mastery"],
              baseAttributeMultiplierPerCast:
                ((Rt = {}), (Rt[c.RUNE_MASTERY] = new p.Z(0.05)), Rt),
              baseCostPerCast: ((Lt = {}), (Lt[r.ENERGY] = new p.Z(10)), Lt),
              xpGain: new p.Z("200"),
            },
            {
              id: ke.APTITUDE_TRAINING,
              name: "Mental Aptitude",
              description: "Train your mental abilities. Increase Intellect",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(o.APTITUDE) > 0;
              },
              effortRequired: new p.Z(1e5),
              attributesEffortEffect:
                ((Zt = {}),
                (Zt[c.VITALITY] = 0.75),
                (Zt[c.WILLPOWER] = 0.25),
                Zt),
              tags: ["mental", "actions", "training", "intellect"],
              baseAttributeMultiplierPerCast:
                ((bt = {}), (bt[c.RUNE_READING] = new p.Z(0.05)), bt),
              baseCostPerCast:
                ((Tt = {}),
                (Tt[r.ENERGY] = new p.Z(10)),
                (Tt[r.MANA] = new p.Z(1e4)),
                Tt),
              xpGain: new p.Z("500"),
            },
            {
              id: ke.BRAINSTORM,
              name: "Brainstorm",
              description:
                "Train your mental abilities. Increase Knowledge generation",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(o.BRAINSTORM) > 0;
              },
              effortRequired: new p.Z(5e5),
              attributesEffortEffect:
                ((St = {}),
                (St[c.VITALITY] = 0.5),
                (St[c.RUNE_READING] = 0.5),
                St),
              tags: ["mental", "actions", "empower", "knowledge"],
              baseResourceMultiplierPerCast:
                ((Pt = {}), (Pt[r.KNOWLEDGE] = new p.Z(0.02)), Pt),
              baseCostPerCast:
                ((Ut = {}),
                (Ut[r.ENERGY] = new p.Z(25)),
                (Ut[r.MANA] = new p.Z(2e5)),
                Ut),
              xpGain: new p.Z("10000"),
            },
            {
              id: ke.BRAIN_EMPOWER,
              name: "Brain Empower",
              description: "Use mana to improve your mental attributes",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.BRAIN_EMPOWER) > 0
                );
              },
              effortRequired: new p.Z(2e6),
              attributesEffortEffect:
                ((Mt = {}),
                (Mt[c.RUNE_READING] = 0.75),
                (Mt[c.WILLPOWER] = 0.25),
                Mt),
              tags: ["mental", "actions", "empower", "intellect"],
              baseAttributeMultiplierPerCast:
                ((Bt = {}), (Bt[c.RUNE_READING] = new p.Z(0.05)), Bt),
              baseCostPerCast:
                ((Gt = {}),
                (Gt[r.ENERGY] = new p.Z(200)),
                (Gt[r.MANA] = new p.Z(4e6)),
                Gt),
              xpGain: new p.Z("1.e+5"),
            },
            {
              id: ke.MEDITATE,
              name: "Meditate",
              description: "Use special techniques to improve your mana cap",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(o.MEDITATE) > 0;
              },
              effortRequired: new p.Z(5e7),
              attributesEffortEffect:
                ((_t = {}),
                (_t[c.RUNE_READING] = 0.75),
                (_t[c.VITALITY] = 0.25),
                _t),
              tags: ["mental", "actions", "empower", "mana"],
              baseResourceCapMultiplierPerCast:
                ((kt = {}), (kt[r.MANA] = new p.Z(0.02)), kt),
              baseCostPerCast:
                ((Dt = {}),
                (Dt[r.ENERGY] = new p.Z(500)),
                (Dt[r.KNOWLEDGE] = new p.Z(1e6)),
                Dt),
              xpGain: new p.Z("1.e+6"),
            },
            {
              id: ke.FIND_MANA_SOURCE,
              name: "Mana Ritual",
              description:
                "Spend your time making ritual, increasing your mana output",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.MANA_RITUAL) > 0
                );
              },
              effortRequired: new p.Z(2e9),
              attributesEffortEffect:
                ((xt = {}),
                (xt[c.RUNE_READING] = 0.75),
                (xt[c.WILLPOWER] = 0.25),
                xt),
              tags: ["mental", "actions", "empower", "mana"],
              baseResourceMultiplierPerCast:
                ((Wt = {}), (Wt[r.MANA] = new p.Z(0.02)), Wt),
              baseCostPerCast:
                ((Xt = {}),
                (Xt[r.ENERGY] = new p.Z(5e3)),
                (Xt[r.KNOWLEDGE] = new p.Z(1e8)),
                Xt),
              xpGain: new p.Z("5.e+6"),
            },
            {
              id: ke.CONDENSE_STASHES,
              name: "Condense Stashes",
              description:
                "Cast the spell over your coins to make it taking less place",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.ILLUSION_SPELLS) > 0
                );
              },
              effortRequired: new p.Z(1e5),
              attributesEffortEffect:
                ((Kt = {}),
                (Kt[c.RUNE_READING] = 0.05),
                (Kt[c.MAGIC_KNOWLEDGE] = 0.95),
                Kt),
              tags: ["magical", "spell", "illusion", "coins"],
              baseResourceCapPerCast:
                ((jt = {}), (jt[r.COINS] = new p.Z(0.1)), jt),
              baseCostPerCast:
                ((qt = {}),
                (qt[r.ENERGY] = new p.Z(500)),
                (qt[r.MANA] = new p.Z("1.e+8")),
                qt),
              xpGain: new p.Z("1.e+5"),
            },
            {
              id: ke.CONJURE_SPARK,
              name: "Conjure Spark",
              description:
                "Spend your time making ritual, increasing your mana output",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.SPARK_GENERATION) > 0
                );
              },
              effortRequired: new p.Z(1e7),
              attributesEffortEffect:
                ((Yt = {}),
                (Yt[c.RUNE_READING] = 0.01),
                (Yt[c.MAGIC_KNOWLEDGE] = 0.99),
                Yt),
              tags: ["magical", "spell", "conjuration", "spark"],
              baseResourcePerCast:
                ((Ft = {}), (Ft[r.SPARK] = new p.Z(0.1)), Ft),
              baseCostPerCast:
                ((Ht = {}),
                (Ht[r.ENERGY] = new p.Z(500)),
                (Ht[r.MANA] = new p.Z("1.e+8")),
                Ht),
              xpGain: new p.Z("5.e+6"),
            },
            {
              id: ke.CONJURE_WOOD,
              name: "Conjure Wood",
              description: "Conjure some pile of raw wood",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.WOODWORKING) > 0
                );
              },
              effortRequired: new p.Z(1e8),
              attributesEffortEffect:
                ((zt = {}),
                (zt[c.RUNE_READING] = 0.01),
                (zt[c.MAGIC_KNOWLEDGE] = 0.99),
                zt),
              tags: ["magical", "spell", "conjuration", "wood"],
              baseResourcePerCast: ((Vt = {}), (Vt[r.WOOD] = new p.Z(0.1)), Vt),
              baseCostPerCast:
                ((Jt = {}),
                (Jt[r.ENERGY] = new p.Z(1e3)),
                (Jt[r.MANA] = new p.Z("1.e+10")),
                Jt),
              xpGain: new p.Z("5.e+7"),
            },
            {
              id: ke.CONJURE_STONE,
              name: "Conjure Stone",
              description: "Conjure some stone",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.STONEWORKING) > 0
                );
              },
              effortRequired: new p.Z(1e10),
              attributesEffortEffect:
                ((Qt = {}),
                (Qt[c.RUNE_READING] = 0.01),
                (Qt[c.MAGIC_KNOWLEDGE] = 0.99),
                Qt),
              tags: ["magical", "spell", "conjuration", "stone"],
              baseResourcePerCast:
                (($t = {}), ($t[r.STONE] = new p.Z(0.1)), $t),
              baseCostPerCast:
                ((en = {}),
                (en[r.ENERGY] = new p.Z(2e3)),
                (en[r.MANA] = new p.Z("1.e+11")),
                en),
              xpGain: new p.Z("2.e+8"),
            },
            {
              id: ke.CRAFT,
              name: "Craft",
              description: "Devote some time to crafting",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.WOODWORKING) > 0
                );
              },
              effortRequired: new p.Z(1e8),
              attributesEffortEffect: ((tn = {}), (tn[c.STRENGTH] = 1), tn),
              tags: ["technical", "crafting"],
              baseResourcePerCast:
                ((nn = {}), (nn[r.CRAFTSMANSHIP] = new p.Z(1)), nn),
              baseCostPerCast: ((rn = {}), (rn[r.ENERGY] = new p.Z(5e4)), rn),
              xpGain: new p.Z("5.e+7"),
            },
          ],
          ti = function () {
            return (
              (ti =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              ti.apply(this, arguments)
            );
          },
          ni = (function () {
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
          ri = function () {
            return (
              (ri =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              ri.apply(this, arguments)
            );
          },
          ii = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.actions = []),
                (t.lists = { lists: [] }),
                (t.listAssertsCached = {}),
                (t.isUnlocked = !1),
                (t.lastReassert = 0),
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
              ni(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                var t;
                (this.actions =
                  (null == e
                    ? void 0
                    : e.actions.map(function (e) {
                        return ri(ri({}, e), {
                          numPerformed: new p.Z(e.numPerformed),
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
                        progress: new p.Z(e.running.progress),
                        isPaused: e.running.isPaused,
                        pauseCd: 0,
                        efficiency: 1,
                      }
                    : void 0);
              }),
              (t.prototype.exportData = function () {
                return {
                  actions: this.actions.map(function (e) {
                    return ri(ri({}, e), {
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
                this.lists.lists.forEach(function (t) {
                  return e.calculateList(t, !0);
                });
              }),
              (t.prototype.dataToUI = function () {
                var e = this;
                return {
                  actions: ei
                    .filter(function (e) {
                      return e.unlockCondition(Vi);
                    })
                    .map(function (t) {
                      return e.processToUI(t);
                    }),
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
                        ? m(
                            r.minus(
                              this.runningState.progress.div(
                                this.runningState.efficiency
                              )
                            )
                          )
                        : m(r, !1);
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
                          amount: e[1].mul(t).div(n || new p.Z(1)),
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
                          amount: e[1].mul(t).div(n || new p.Z(1)),
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
                            amount: e[1].mul(t).div(n || new p.Z(1)),
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
                          amount: e[1].mul(t).div(n || new p.Z(1)),
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
                            amount: e[1].mul(t).div(n || new p.Z(1)),
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
                          amount: e[1].mul(t).div(n || new p.Z(1)),
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
                              .div(n || new p.Z(1))
                              .plus(1),
                          };
                        }
                      )
                    : []
                );
              }),
              (t.prototype.getTagMultiplier = function (e) {
                var t = new p.Z(1);
                return (
                  e.tags.includes("physical") &&
                    (t = t.mul(Vi.city.reincarnation.getBonus(F.PHYSICAL))),
                  e.tags.includes("mental") &&
                    (t = t.mul(Vi.city.reincarnation.getBonus(F.MENTAL))),
                  e.tags.includes("spell") &&
                    (t = t.mul(Vi.city.reincarnation.getBonus(F.MAGICAL))),
                  e.tags.includes("conjuration") &&
                    (t = t.mul(
                      p.Z.max(
                        Vi.personage.attributes.getAttribute(
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
                return new p.Z(0.05).div(
                  p.Z.max(
                    Vi.personage.attributes.getAttribute(c.AGILITY),
                    new p.Z(1)
                  ).mul(t)
                );
              }),
              (t.prototype.getRealEffort = function (e, t, n) {
                void 0 === t && (t = 1), void 0 === n && (n = !1);
                var r = Object.entries(e.attributesEffortEffect).reduce(
                    function (e, t) {
                      return e.plus(
                        Vi.personage.attributes.getAttribute(t[0]).mul(t[1])
                      );
                    },
                    new p.Z(0)
                  ),
                  i = Object.entries(e.attributesEffortEffect).reduce(function (
                    e,
                    t
                  ) {
                    return e.plus(t[1]);
                  },
                  new p.Z(0));
                i.lessThan(1) && (r = r.plus(1).sub(i)),
                  r.lessThanOrEqualTo(0) && (r = new p.Z(1));
                var a = this.getTagMultiplier(e).pow(0.5),
                  o = e.effortRequired.mul(t).div(r.mul(a)),
                  u = n ? 0 : this.getCap(e).mul(t);
                return p.Z.max(o, u);
              }),
              (t.prototype.calculateList = function (e, t) {
                var n,
                  i = this;
                void 0 === t && (t = !1);
                var a = ei
                    .filter(function (t) {
                      return e.actions.find(function (e) {
                        return e.id === t.id;
                      });
                    })
                    .reduce(function (e, t) {
                      return (e[t.id] = t), e;
                    }, {}),
                  o = e.actions.reduce(function (e, t) {
                    return e.plus(i.getRealEffort(a[t.id], t.number).mul(1));
                  }, new p.Z(0)),
                  u = e.actions.reduce(function (e, t) {
                    return (
                      (e[t.id] = i
                        .getRealEffort(a[t.id], t.number)
                        .div(o)
                        .toNumber()),
                      e
                    );
                  }, {}),
                  s = {
                    effort: o,
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
                    timeBreakdowns: u,
                    requiredRestChange: 0,
                  },
                  c = e.actions.reduce(function (e, t) {
                    var n = i
                      .getCostPerCast(a[t.id], t.number)
                      .find(function (e) {
                        return e.id === r.ENERGY;
                      });
                    return n && (e = e.plus(n.amount)), e;
                  }, new p.Z(0)),
                  l = a[ke.REST]
                    ? (null ===
                        (n = this.getGainPerCast(a[ke.REST], 1).find(function (
                          e
                        ) {
                          return e.id === r.ENERGY;
                        })) || void 0 === n
                        ? void 0
                        : n.amount.mul(
                            Vi.resources.getResourceMultiplier(r.ENERGY)
                          )) || new p.Z(0.1)
                    : new p.Z(1);
                (s.requiredRestChange = Math.ceil(c.div(l).toNumber())),
                  e.actions.forEach(function (e) {
                    if (a[e.id]) {
                      a[e.id].unlockCondition(Vi) || (s.canBeRunned = !1);
                      var t = Object.entries(
                          a[e.id].attributesEffortEffect
                        ).reduce(function (e, t) {
                          return e.plus(t[1]);
                        }, new p.Z(0)),
                        n = i.getAttributePerCast(a[e.id], e.number, o),
                        r = i.getGainPerCast(a[e.id], e.number, o),
                        u = i.getGainMultPerCast(a[e.id], e.number, o),
                        c = i.getCapGainPerCast(a[e.id], e.number, o),
                        l = i.getCapMultPerCast(a[e.id], e.number, o),
                        d = i.getCostPerCast(a[e.id], e.number, o),
                        f = i.getAttributeMultPerCast(a[e.id], e.number, o),
                        g = Object.entries(a[e.id].attributesEffortEffect).map(
                          function (e) {
                            return { id: e[0], value: 100 * e[1] };
                          }
                        );
                      n.forEach(function (e) {
                        var t;
                        s.attributeGain[e.id] ||
                          (s.attributeGain[e.id] = new p.Z(0)),
                          (s.attributeGain[e.id] =
                            null === (t = s.attributeGain[e.id]) || void 0 === t
                              ? void 0
                              : t.plus(e.amount));
                      }),
                        f.forEach(function (e) {
                          var t;
                          s.attributeMultGain[e.id] ||
                            (s.attributeMultGain[e.id] = new p.Z(1)),
                            (s.attributeMultGain[e.id] =
                              null === (t = s.attributeMultGain[e.id]) ||
                              void 0 === t
                                ? void 0
                                : t.mul(e.amount));
                        }),
                        r.forEach(function (e) {
                          var t;
                          s.resourceGain[e.id] ||
                            (s.resourceGain[e.id] = new p.Z(0)),
                            (s.resourceGain[e.id] =
                              null === (t = s.resourceGain[e.id]) ||
                              void 0 === t
                                ? void 0
                                : t.plus(e.amount));
                        }),
                        u.forEach(function (e) {
                          var t;
                          s.resourceGainMult[e.id] ||
                            (s.resourceGainMult[e.id] = new p.Z(1)),
                            (s.resourceGainMult[e.id] =
                              null === (t = s.resourceGainMult[e.id]) ||
                              void 0 === t
                                ? void 0
                                : t.mul(e.amount));
                        }),
                        c.forEach(function (e) {
                          var t;
                          s.resourceCapGain[e.id] ||
                            (s.resourceCapGain[e.id] = new p.Z(0)),
                            (s.resourceCapGain[e.id] =
                              null === (t = s.resourceCapGain[e.id]) ||
                              void 0 === t
                                ? void 0
                                : t.plus(e.amount));
                        }),
                        l.forEach(function (e) {
                          var t;
                          s.resourceCapMult[e.id] ||
                            (s.resourceCapMult[e.id] = new p.Z(1)),
                            (s.resourceCapMult[e.id] =
                              null === (t = s.resourceCapMult[e.id]) ||
                              void 0 === t
                                ? void 0
                                : t.mul(e.amount));
                        }),
                        d.forEach(function (e) {
                          var t;
                          s.resourceCost[e.id] ||
                            (s.resourceCost[e.id] = new p.Z(0)),
                            (s.resourceCost[e.id] =
                              null === (t = s.resourceCost[e.id]) ||
                              void 0 === t
                                ? void 0
                                : t.plus(e.amount));
                        }),
                        g.forEach(function (n) {
                          var r;
                          s.impactingAttributes[n.id] ||
                            (s.impactingAttributes[n.id] = new p.Z(0)),
                            (s.impactingAttributes[n.id] =
                              null === (r = s.impactingAttributes[n.id]) ||
                              void 0 === r
                                ? void 0
                                : r.plus(
                                    i
                                      .getRealEffort(a[e.id], e.number)
                                      .mul(n.value)
                                      .div(o.mul(t))
                                  ));
                        });
                    }
                  });
                var d,
                  f,
                  g,
                  h = {};
                return (
                  Object.entries(s.resourceGain).forEach(function (e) {
                    var t = e[0],
                      n = e[1];
                    h[t] = n.mul(Vi.resources.getResourceMultiplier(t));
                  }),
                  (s.balanceCalculated = (function (e, t) {
                    void 0 === t && (t = new p.Z(1e-50));
                    var n = {};
                    return (
                      Object.keys(e).forEach(function (r) {
                        e[r].abs().lessThanOrEqualTo(t)
                          ? (n[r] = new p.Z(0))
                          : (n[r] = e[r]);
                      }),
                      n
                    );
                  })(
                    ((d = h),
                    (f = s.resourceCost),
                    (g = {}),
                    Object.keys(ti(ti({}, d), f)).forEach(function (e) {
                      g[e] = (d[e] || new p.Z(0)).minus(f[e] || new p.Z(0));
                    }),
                    g)
                  )),
                  t && (this.listAssertsCached[e.id] = s),
                  s
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
                  (e = ri(ri({}, e), { id: "".concat(Math.random()) })),
                    this.lists.lists.push(e);
                this.calculateList(e, !0);
              }),
              (t.prototype.runList = function (e) {
                (this.runningState = {
                  id: e,
                  progress: new p.Z(0),
                  isPaused: !1,
                  pauseCd: 0,
                  efficiency: 1,
                }),
                  Vi.regenerateCache(),
                  Vi.resources.reassertBalances();
              }),
              (t.prototype.deleteList = function (e) {
                var t = this.lists.lists.findIndex(function (t) {
                  return t.id === e;
                });
                t >= 0 && this.lists.lists.splice(t, 1);
              }),
              (t.prototype.stopList = function () {
                (this.runningState = void 0),
                  Vi.regenerateCache(),
                  Vi.resources.reassertBalances();
              }),
              (t.prototype.toUI = function (e, t) {
                return (
                  void 0 === t &&
                    (t = function (e) {
                      return e;
                    }),
                  e.map(function (e) {
                    return {
                      id: e.id,
                      name: V(e.id),
                      amount: t(x(e.amount, 3)),
                      amountValue: e.amount.toPrecision(18),
                    };
                  })
                );
              }),
              (t.prototype.recordToUI = function (e, t) {
                return (
                  void 0 === t &&
                    (t = function (e) {
                      return e;
                    }),
                  Object.entries(e).map(function (e) {
                    var n = e[0],
                      r = e[1];
                    return {
                      id: n,
                      name: V(n),
                      amount: t(x(r, 4)),
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
                  ((n = { id: e.id, numPerformed: new p.Z(0) }),
                  this.actions.push(n));
                var r = this.toUI(this.getCostPerCast(e)),
                  i = this.toUI(this.getGainPerCast(e)),
                  a = this.toUI(this.getGainMultPerCast(e)),
                  o = this.toUI(this.getCapGainPerCast(e)),
                  u = this.toUI(this.getCapMultPerCast(e)),
                  s = this.toUI(this.getAttributePerCast(e)),
                  c = this.toUI(this.getAttributeMultPerCast(e)),
                  l = this.getRealEffort(e).toNumber(),
                  d = e.unlockCondition(Vi);
                d &&
                  this.isUnlocked &&
                  n.numPerformed.lessThanOrEqualTo(0) &&
                  Vi.newNotifications.registerNotification(
                    "city:actions:action:".concat(e.id)
                  );
                var f =
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
                  isUnlocked: d,
                  isAvailable: d,
                  cost: r,
                  gain: i,
                  gainMult: a,
                  attr: s,
                  attrMult: c,
                  capGain: o,
                  capMult: u,
                  etaNum: l,
                  amount: x(n.numPerformed),
                  isBlocked: !1,
                  effort: m(this.getRealEffort(e), !1),
                  capEffort: m(this.getCap(e), !1),
                  effortEffects: Object.entries(e.attributesEffortEffect).map(
                    function (e) {
                      var t = e[0],
                        n = e[1];
                      return {
                        name: V(t),
                        effect: Math.round(100 * n).toPrecision(3),
                      };
                    }
                  ),
                  tags: e.tags,
                  isRunning: f,
                };
              }),
              (t.prototype.processCalculationsToUI = function (e) {
                return {
                  id: "edited.".concat(Math.random()),
                  name: "edited.".concat(Math.random()),
                  effort: m(e.effort, !1),
                  items: [],
                  resourceGain: this.recordToUI(e.balanceCalculated),
                  attributeGain: this.recordToUI(e.attributeGain),
                  resourceCapGain: this.recordToUI(e.resourceCapGain),
                  resourceCapMult: this.recordToUI(e.resourceCapMult),
                  resourceGainMult: this.recordToUI(e.resourceGainMult),
                  attributeMultGain: this.recordToUI(e.attributeMultGain),
                  impactingAttributes: this.recordToUI(
                    e.impactingAttributes,
                    function (e) {
                      return "".concat(e, "%");
                    }
                  ),
                  requiredRestChange: e.requiredRestChange,
                  timeBreakdowns: e.timeBreakdowns,
                  canBeRunned: !0,
                };
              }),
              (t.prototype.processListToUI = function (e) {
                var t = ei.reduce(function (e, t) {
                  return (e[t.id] = t), e;
                }, {});
                return {
                  id: e.id,
                  name: e.name,
                  effort: m(this.listAssertsCached[e.id].effort, !1),
                  items: e.actions.map(function (e) {
                    return {
                      id: e.id,
                      amount: e.number,
                      name: t[e.id].name,
                      canBeRunned: t[e.id].unlockCondition(Vi),
                    };
                  }),
                  resourceGain: this.recordToUI(
                    this.listAssertsCached[e.id].balanceCalculated
                  ),
                  resourceGainMult: this.recordToUI(
                    this.listAssertsCached[e.id].resourceGainMult
                  ),
                  resourceCapGain: this.recordToUI(
                    this.listAssertsCached[e.id].resourceCapGain,
                    function (e) {
                      return "+".concat(e);
                    }
                  ),
                  attributeGain: this.recordToUI(
                    this.listAssertsCached[e.id].attributeGain
                  ),
                  attributeMultGain: this.recordToUI(
                    this.listAssertsCached[e.id].attributeMultGain,
                    function (e) {
                      return "+x".concat(e);
                    }
                  ),
                  resourceCapMult: this.recordToUI(
                    this.listAssertsCached[e.id].resourceCapMult,
                    function (e) {
                      return "+x".concat(e);
                    }
                  ),
                  canBeRunned: !e.actions.find(function (e) {
                    return !t[e.id].unlockCondition(Vi);
                  }),
                  impactingAttributes: this.recordToUI(
                    this.listAssertsCached[e.id].impactingAttributes,
                    function (e) {
                      return "".concat(e, "%");
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
                          Vi.resources
                            .getResource(i)
                            .mul(10 * t)
                            .neg()
                        )
                  ) {
                    var a = Vi.resources.getResourceBalance(i),
                      o = Vi.resources
                        .getResourceMultiplier(i)
                        .mul(e.resourceGain[i] || new p.Z(0))
                        .sub(e.resourceCost[i] || new p.Z(0)),
                      u = 1 - a.div(o).toNumber();
                    if ((r = Math.min(r, u)) < 0) return 0;
                  }
                return r;
              }),
              (t.prototype.process = function (e) {
                var t = this;
                if (
                  (!this.isUnlocked &&
                    Vi.learning.runeUpgrades.getUpgradeLevel(a.TICKET_OUT) >
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
                  this.runningState.efficiency < 1 &&
                    this.runningState.pauseCd > 0 &&
                    (this.runningState.pauseCd -= e),
                    this.listAssertsCached[this.runningState.id].canBeRunned ||
                      this.stopList(),
                    this.runningState.efficiency < 1 &&
                      this.runningState.pauseCd <= 0 &&
                      ((this.runningState.efficiency = 1),
                      Vi.regenerateCache(),
                      Vi.resources.reassertBalances());
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
                      Vi.regenerateCache(),
                      Vi.resources.reassertBalances())
                    : this.runningState.isPaused &&
                      ((this.runningState.isPaused = !1),
                      Vi.regenerateCache(),
                      Vi.resources.reassertBalances()),
                    (this.runningState.progress =
                      this.runningState.progress.add(
                        e * this.runningState.efficiency
                      ));
                  var r = new p.Z(1),
                    i = !1;
                  if (
                    (this.listAssertsCached[
                      this.runningState.id
                    ].effort.lessThanOrEqualTo(e * this.runningState.efficiency)
                      ? ((r = new p.Z(e * this.runningState.efficiency).div(
                          this.listAssertsCached[this.runningState.id].effort
                        )),
                        (i = !0))
                      : this.runningState.progress.greaterThanOrEqualTo(
                          this.listAssertsCached[this.runningState.id].effort
                        ) && (i = !0),
                    i)
                  ) {
                    this.runningState.progress = new p.Z(0);
                    var o = this.lists.lists.find(function (e) {
                      var n;
                      return (
                        e.id ===
                        (null === (n = t.runningState) || void 0 === n
                          ? void 0
                          : n.id)
                      );
                    });
                    o &&
                      o.actions.forEach(function (e) {
                        var n = t.actions.findIndex(function (t) {
                          return t.id === e.id;
                        });
                        n >= 0 &&
                          (t.actions[n].numPerformed = t.actions[
                            n
                          ].numPerformed.plus(r.mul(e.number)));
                      }),
                      (!this.lastReassert ||
                        this.lastReassert < Date.now() - 2e3) &&
                        ((this.lastReassert = Date.now()),
                        Vi.regenerateCache(),
                        Vi.resources.reassertBalances(),
                        this.lists.lists.map(function (e) {
                          return t.calculateList(e, !0);
                        }));
                  }
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
                var a =
                  this.listAssertsCached[
                    null === (n = this.runningState) || void 0 === n
                      ? void 0
                      : n.id
                  ];
                if (!a) return (this.runningState = void 0), [];
                var o = [];
                return (
                  a.resourceGain[e] &&
                    o.push({
                      label: "Actions",
                      value:
                        null !==
                          (i =
                            null === (r = a.resourceGain[e]) || void 0 === r
                              ? void 0
                              : r.mul(this.runningState.efficiency)) &&
                        void 0 !== i
                          ? i
                          : new p.Z(0),
                      id: "actions",
                      category: "Actions",
                    }),
                  o
                );
              }),
              (t.prototype.getResourceBeingStored = function (e) {
                var t = this,
                  n = ei.filter(function (t) {
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
                      a,
                      o = t.getActionPerforms(n.id);
                    o.greaterThan(0) &&
                      r.push({
                        label: "Actions: ".concat(n.name),
                        value:
                          (null ===
                            (a =
                              null === (i = n.baseResourceCapPerCast) ||
                              void 0 === i
                                ? void 0
                                : i[e]) || void 0 === a
                            ? void 0
                            : a.mul(o)) || new p.Z(0),
                        id: "actions:".concat(n.id),
                        category: "Actions",
                      });
                  }),
                  r
                );
              }),
              (t.prototype.getResourceBeingStoredMultiplier = function (e) {
                var t = this,
                  n = ei.filter(function (t) {
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
                      a,
                      o = t.getActionPerforms(n.id);
                    o.greaterThan(0) &&
                      r.push({
                        label: "Actions: ".concat(n.name),
                        value: (
                          (null ===
                            (a =
                              null ===
                                (i = n.baseResourceCapMultiplierPerCast) ||
                              void 0 === i
                                ? void 0
                                : i[e]) || void 0 === a
                            ? void 0
                            : a.mul(o)) || new p.Z(0)
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
                var a =
                    this.listAssertsCached[
                      null === (n = this.runningState) || void 0 === n
                        ? void 0
                        : n.id
                    ],
                  o = [];
                return (
                  a.resourceCost[e] &&
                    o.push({
                      label: "Actions",
                      value:
                        null !==
                          (i =
                            null === (r = a.resourceCost[e]) || void 0 === r
                              ? void 0
                              : r.mul(this.runningState.efficiency)) &&
                        void 0 !== i
                          ? i
                          : new p.Z(0),
                      id: "actions",
                      category: "Actions",
                    }),
                  o
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
                    : t.numPerformed) || new p.Z(0)
                );
              }),
              (t.prototype.getAttributeProduced = function (e) {
                var t = this,
                  n = ei.filter(function (t) {
                    var n;
                    return null === (n = t.baseAttributePerCats) || void 0 === n
                      ? void 0
                      : n[e];
                  }),
                  r = [];
                return (
                  n.forEach(function (n) {
                    var i,
                      a,
                      o = t.getActionPerforms(n.id);
                    o.greaterThan(0) &&
                      r.push({
                        label: "Actions: ".concat(n.name),
                        value:
                          (null ===
                            (a =
                              null === (i = n.baseAttributePerCats) ||
                              void 0 === i
                                ? void 0
                                : i[e]) || void 0 === a
                            ? void 0
                            : a.mul(o)) || new p.Z(0),
                        id: "actions",
                        category: "Actions",
                      });
                  }),
                  r
                );
              }),
              (t.prototype.getAttributeMultiplier = function (e) {
                var t = this,
                  n = ei.filter(function (t) {
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
                      a,
                      o = t.getActionPerforms(n.id);
                    o.greaterThan(0) &&
                      r.push({
                        label: "Actions: ".concat(n.name),
                        value: (
                          (null ===
                            (a =
                              null === (i = n.baseAttributeMultiplierPerCast) ||
                              void 0 === i
                                ? void 0
                                : i[e]) || void 0 === a
                            ? void 0
                            : a.mul(o)) || new p.Z(0)
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
                  n = ei.filter(function (t) {
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
                      a,
                      o = t.getActionPerforms(n.id);
                    o.greaterThan(0) &&
                      r.push({
                        label: "Actions: ".concat(n.name),
                        value: (
                          (null ===
                            (a =
                              null === (i = n.baseResourceMultiplierPerCast) ||
                              void 0 === i
                                ? void 0
                                : i[e]) || void 0 === a
                            ? void 0
                            : a.mul(o)) || new p.Z(0)
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
                  e.actions[n].numPerformed = new p.Z(0);
                });
              }),
              t
            );
          })(s),
          ai = ii.getInstance(),
          oi = [
            {
              id: o.ENDURANCE_RUNE,
              name: "Endurance Rune",
              description:
                "Unlock new rune that can significantly boost your body",
              unlockCondition: function (e) {
                return !0;
              },
              maxLevel: 1,
              getCost:
                ((Mn = {}),
                (Mn[r.COINS] = function (e) {
                  return {
                    A: new p.Z(10),
                    B: new p.Z(1.75),
                    type: v.EXPONENTIAL,
                  };
                }),
                (Mn[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(160),
                    B: new p.Z(1.75),
                    type: v.EXPONENTIAL,
                  };
                }),
                Mn),
            },
            {
              id: o.READ_BOOKS,
              name: "Read Books",
              description:
                "Learn old language to open an opportunity of learning old books",
              unlockCondition: function (e) {
                return !0;
              },
              maxLevel: 1,
              getCost:
                ((Bn = {}),
                (Bn[r.COINS] = function (e) {
                  return { A: new p.Z(20), B: new p.Z(2), type: v.EXPONENTIAL };
                }),
                (Bn[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(320),
                    B: new p.Z(1.75),
                    type: v.EXPONENTIAL,
                  };
                }),
                Bn),
            },
            {
              id: o.RUNE_LANGUAGE,
              name: "Rune Language",
              description:
                "Learn rune language to enable reading runic manuscripts",
              unlockCondition: function (e) {
                return !0;
              },
              maxLevel: 1,
              getCost:
                ((Gn = {}),
                (Gn[r.COINS] = function (e) {
                  return { A: new p.Z(40), B: new p.Z(2), type: v.EXPONENTIAL };
                }),
                (Gn[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(1280),
                    B: new p.Z(1.75),
                    type: v.EXPONENTIAL,
                  };
                }),
                Gn),
            },
            {
              id: o.APTITUDE,
              name: "Aptitude",
              description:
                "Learn new techniques to increase your mental powers",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.RUNE_LANGUAGE) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((_n = {}),
                (_n[r.COINS] = function (e) {
                  return { A: new p.Z(50), B: new p.Z(2), type: v.EXPONENTIAL };
                }),
                (_n[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(2560),
                    B: new p.Z(1.75),
                    type: v.EXPONENTIAL,
                  };
                }),
                _n),
            },
            {
              id: o.LAZY_CRYSTAL,
              name: "Lazy Crystal",
              description: "Unlock crystal that allows upgrades automation",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.RUNE_LANGUAGE) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((kn = {}),
                (kn[r.COINS] = function (e) {
                  return { A: new p.Z(50), B: new p.Z(2), type: v.EXPONENTIAL };
                }),
                (kn[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(2560),
                    B: new p.Z(1.75),
                    type: v.EXPONENTIAL,
                  };
                }),
                kn),
            },
            {
              id: o.GOLD_CRYSTAL,
              name: "Gold Crystal",
              description: "Unlock gold crystal that increase gold caps",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.RUNE_LANGUAGE) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((Dn = {}),
                (Dn[r.COINS] = function (e) {
                  return { A: new p.Z(50), B: new p.Z(2), type: v.EXPONENTIAL };
                }),
                (Dn[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(2560),
                    B: new p.Z(1.75),
                    type: v.EXPONENTIAL,
                  };
                }),
                Dn),
            },
            {
              id: o.MUSCLE_RUNE,
              name: "Muscle Rune",
              description: "Learn new rune, that can boost your body power",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.GOLD_CRYSTAL) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((xn = {}),
                (xn[r.COINS] = function (e) {
                  return {
                    A: new p.Z(150),
                    B: new p.Z(2),
                    type: v.EXPONENTIAL,
                  };
                }),
                (xn[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(8196),
                    B: new p.Z(1.75),
                    type: v.EXPONENTIAL,
                  };
                }),
                xn),
            },
            {
              id: o.GOLD_PROTECTION,
              name: "Gold Protection",
              description:
                "Protected Gold Stash prevent gold from being reset on runic sacrifice",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.GOLD_CRYSTAL) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((Wn = {}),
                (Wn[r.COINS] = function (e) {
                  return {
                    A: new p.Z(300),
                    B: new p.Z(2),
                    type: v.EXPONENTIAL,
                  };
                }),
                (Wn[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(15e3),
                    B: new p.Z(1.75),
                    type: v.EXPONENTIAL,
                  };
                }),
                Wn),
            },
            {
              id: o.MERCENARIES,
              name: "Mercenaries Market",
              description:
                "Finally you became nobble enough to encourage other people to work for you. They wont do it for free, however",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.GOLD_CRYSTAL) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((Xn = {}),
                (Xn[r.COINS] = function (e) {
                  return {
                    A: new p.Z(12225),
                    B: new p.Z(2),
                    type: v.EXPONENTIAL,
                  };
                }),
                (Xn[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z("1.25e+9"),
                    B: new p.Z(1.75),
                    type: v.EXPONENTIAL,
                  };
                }),
                Xn),
            },
            {
              id: o.RUNE_PROTECTION,
              name: "Rune Protection",
              description:
                "Create magic barriers on your runes, preventing some amounts of runes reset on sacrifice (excepting the one that you sacrificing)",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.GOLD_PROTECTION) > 0
                );
              },
              maxLevel: 5,
              getCost:
                ((Kn = {}),
                (Kn[r.COINS] = function (e) {
                  return {
                    A: new p.Z(600),
                    B: new p.Z(2),
                    type: v.EXPONENTIAL,
                  };
                }),
                (Kn[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(3e4),
                    B: new p.Z(1.75),
                    type: v.EXPONENTIAL,
                  };
                }),
                Kn),
            },
            {
              id: o.KNOWLEDGE_UPGRADES,
              name: "Knowledge Knowledge",
              description:
                "Unlock new ways of improvement of your magic workplace to further advance your learning capabilities",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.RUNE_LANGUAGE) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((jn = {}),
                (jn[r.COINS] = function (e) {
                  return { A: new p.Z(50), B: new p.Z(2), type: v.EXPONENTIAL };
                }),
                (jn[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(5120),
                    B: new p.Z(1.75),
                    type: v.EXPONENTIAL,
                  };
                }),
                jn),
            },
            {
              id: o.BRAINSTORM,
              name: "Brainstorm",
              description: "Devote your time to magic investigations",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(o.READ_BOOKS) > 0;
              },
              maxLevel: 1,
              getCost:
                ((qn = {}),
                (qn[r.COINS] = function (e) {
                  return {
                    A: new p.Z(150),
                    B: new p.Z(2),
                    type: v.EXPONENTIAL,
                  };
                }),
                (qn[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(20480),
                    B: new p.Z(1.75),
                    type: v.EXPONENTIAL,
                  };
                }),
                qn),
            },
            {
              id: o.BRAIN_EMPOWER,
              name: "Brain Empower",
              description:
                "Make your magic abilities work for your mental ones",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(o.BRAINSTORM) > 0;
              },
              maxLevel: 1,
              getCost:
                ((Yn = {}),
                (Yn[r.COINS] = function (e) {
                  return {
                    A: new p.Z(250),
                    B: new p.Z(2),
                    type: v.EXPONENTIAL,
                  };
                }),
                (Yn[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(80960),
                    B: new p.Z(1.75),
                    type: v.EXPONENTIAL,
                  };
                }),
                Yn),
            },
            {
              id: o.REINCARNATION,
              name: "Reincarnation",
              description: "Unlocks reincarnation",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.BRAIN_EMPOWER) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((Fn = {}),
                (Fn[r.COINS] = function (e) {
                  return {
                    A: new p.Z(750),
                    B: new p.Z(2),
                    type: v.EXPONENTIAL,
                  };
                }),
                (Fn[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(323840),
                    B: new p.Z(1.75),
                    type: v.EXPONENTIAL,
                  };
                }),
                Fn),
            },
            {
              id: o.MEDITATE,
              name: "Meditation",
              description: "Learn new techniques boosting your magical powers",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.BRAIN_EMPOWER) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((Hn = {}),
                (Hn[r.COINS] = function (e) {
                  return {
                    A: new p.Z(900),
                    B: new p.Z(2),
                    type: v.EXPONENTIAL,
                  };
                }),
                (Hn[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(1e6),
                    B: new p.Z(1.75),
                    type: v.EXPONENTIAL,
                  };
                }),
                Hn),
            },
            {
              id: o.AGILITY_RUNE,
              name: "Agility Rune",
              description: "Learn new rune improving your reflexes",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.BRAIN_EMPOWER) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((zn = {}),
                (zn[r.COINS] = function (e) {
                  return {
                    A: new p.Z(900),
                    B: new p.Z(2),
                    type: v.EXPONENTIAL,
                  };
                }),
                (zn[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(25e5),
                    B: new p.Z(1.75),
                    type: v.EXPONENTIAL,
                  };
                }),
                zn),
            },
            {
              id: o.MANA_CRYSTAL,
              name: "Mana Crystal",
              description:
                "Use your knowledge to understand the source of magic flowing through your hands. Unlocks new crystal",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.BRAIN_EMPOWER) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((Vn = {}),
                (Vn[r.COINS] = function (e) {
                  return {
                    A: new p.Z(1250),
                    B: new p.Z(2),
                    type: v.EXPONENTIAL,
                  };
                }),
                (Vn[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z("1.0e+8"),
                    B: new p.Z(1.75),
                    type: v.EXPONENTIAL,
                  };
                }),
                Vn),
            },
            {
              id: o.MANA_RITUAL,
              name: "Ritualism",
              description: "Invent new ways of generating mana by rituals",
              unlockCondition: function (e) {
                return e.city.academyUpgrades.getUpgradeLevel(o.MEDITATE) > 0;
              },
              maxLevel: 1,
              getCost:
                ((Jn = {}),
                (Jn[r.COINS] = function (e) {
                  return {
                    A: new p.Z(1400),
                    B: new p.Z(2),
                    type: v.EXPONENTIAL,
                  };
                }),
                (Jn[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z("1.25e+8"),
                    B: new p.Z(1.75),
                    type: v.EXPONENTIAL,
                  };
                }),
                Jn),
            },
            {
              id: o.ILLUSION_SPELLS,
              name: "Illusion Spells",
              description:
                "Unlock your first magic spells! The very basic school is Illusion, focused on making things looking not what they are. Manipulate with spatial and optical features of things",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.MANA_RITUAL) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((Qn = {}),
                (Qn[r.COINS] = function (e) {
                  return {
                    A: new p.Z(1400),
                    B: new p.Z(2),
                    type: v.EXPONENTIAL,
                  };
                }),
                (Qn[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z("2.5e+8"),
                    B: new p.Z(1.75),
                    type: v.EXPONENTIAL,
                  };
                }),
                Qn),
            },
            {
              id: o.SPARK_GENERATION,
              name: "Spark Generation",
              description:
                "Unlock new resource - magically powered electricity, that can be created using new magic school spells - Conjuration",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.ILLUSION_SPELLS) > 0
                );
              },
              maxLevel: 1,
              getCost:
                (($n = {}),
                ($n[r.COINS] = function (e) {
                  return {
                    A: new p.Z(2e3),
                    B: new p.Z(2),
                    type: v.EXPONENTIAL,
                  };
                }),
                ($n[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(1e9),
                    B: new p.Z(1.75),
                    type: v.EXPONENTIAL,
                  };
                }),
                $n),
            },
            {
              id: o.SPARK_CONTAINER,
              name: "Spark Container",
              description: "Could you hold more magic electricity you produce?",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.ILLUSION_SPELLS) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((er = {}),
                (er[r.COINS] = function (e) {
                  return {
                    A: new p.Z(5e3),
                    B: new p.Z(2),
                    type: v.EXPONENTIAL,
                  };
                }),
                (er[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(1e10),
                    B: new p.Z(1.75),
                    type: v.EXPONENTIAL,
                  };
                }),
                er),
            },
            {
              id: o.WELLNESS_CRYSTAL,
              name: "Wellness Crystal",
              description:
                "What if you try to make crystal creating illusion of wellness? You could use magic to make you rich!",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.ILLUSION_SPELLS) >
                    0 &&
                  e.city.academyUpgrades.getUpgradeLevel(o.MERCENARIES) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((tr = {}),
                (tr[r.COINS] = function (e) {
                  return {
                    A: new p.Z(25e3),
                    B: new p.Z(2),
                    type: v.EXPONENTIAL,
                  };
                }),
                (tr[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(1e11),
                    B: new p.Z(1.75),
                    type: v.EXPONENTIAL,
                  };
                }),
                tr),
            },
            {
              id: o.WOODWORKING,
              name: "Woodworking",
              description:
                "Learn how to combine your magic with your handwork to create wood and something useful from it!",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.SPARK_GENERATION) >
                    0 &&
                  e.city.academyUpgrades.getUpgradeLevel(o.MERCENARIES) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((nr = {}),
                (nr[r.COINS] = function (e) {
                  return {
                    A: new p.Z(48e3),
                    B: new p.Z(2),
                    type: v.EXPONENTIAL,
                  };
                }),
                (nr[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(25e10),
                    B: new p.Z(1.75),
                    type: v.EXPONENTIAL,
                  };
                }),
                nr),
            },
            {
              id: o.PAPERWORKING,
              name: "Paperworking",
              description:
                "If you can work with wood, you can do so with paper",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.WOODWORKING) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((rr = {}),
                (rr[r.COINS] = function (e) {
                  return {
                    A: new p.Z(125e3),
                    B: new p.Z(2),
                    type: v.EXPONENTIAL,
                  };
                }),
                (rr[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(1e12),
                    B: new p.Z(1.75),
                    type: v.EXPONENTIAL,
                  };
                }),
                rr),
            },
            {
              id: o.STONEWORKING,
              name: "Stoneworking",
              description: "Lets master some harder materials",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.WOODWORKING) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((ir = {}),
                (ir[r.COINS] = function (e) {
                  return {
                    A: new p.Z(5e5),
                    B: new p.Z(2),
                    type: v.EXPONENTIAL,
                  };
                }),
                (ir[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(1e13),
                    B: new p.Z(1.75),
                    type: v.EXPONENTIAL,
                  };
                }),
                ir),
            },
            {
              id: o.CHARGED_CRAFTING,
              name: "Charged Crafting",
              description:
                "Learn how to use magic sparks to create new crafting materials and structures.",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.WOODWORKING) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((ar = {}),
                (ar[r.COINS] = function (e) {
                  return {
                    A: new p.Z(2e6),
                    B: new p.Z(2),
                    type: v.EXPONENTIAL,
                  };
                }),
                (ar[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(1e14),
                    B: new p.Z(1.75),
                    type: v.EXPONENTIAL,
                  };
                }),
                ar),
            },
            {
              id: o.GLASSMAKING,
              name: "Glassmaking",
              description:
                "Learn how to use magic sparks to create new crafting materials and structures.",
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.STONEWORKING) > 0
                );
              },
              maxLevel: 1,
              getCost:
                ((or = {}),
                (or[r.COINS] = function (e) {
                  return {
                    A: new p.Z(15e6),
                    B: new p.Z(2),
                    type: v.EXPONENTIAL,
                  };
                }),
                (or[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(5e14),
                    B: new p.Z(1.75),
                    type: v.EXPONENTIAL,
                  };
                }),
                or),
            },
          ],
          ui = (function () {
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
          si = function () {
            return (
              (si =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              si.apply(this, arguments)
            );
          },
          ci = (function (e) {
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
              ui(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                this.upgrades =
                  (null == e
                    ? void 0
                    : e.upgrades.map(function (e) {
                        return si({}, e);
                      })) || [];
              }),
              (t.prototype.exportData = function () {
                return {
                  upgrades: this.upgrades.map(function (e) {
                    return si({}, e);
                  }),
                };
              }),
              (t.prototype.regenerateCache = function () {
                var e = this;
                (this.tickPerf = 0),
                  (this.cachedUpgrades = oi.map(function (t) {
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
                    var n = oi.find(function (e) {
                      return e.id === t.id;
                    });
                    if (!n) return t;
                    var r = e.upgrades.find(function (e) {
                      return e.id === n.id;
                    });
                    r || ((r = { id: n.id, level: 0 }), e.upgrades.push(r));
                    var i = Q.calcBatchAll(
                        n.getCost,
                        zi.getInstance(),
                        new p.Z(r.level),
                        zi.getInstance().resources.getBatchObject()
                      ),
                      a =
                        (i.reduce(function (e, t) {
                          return e && !t.isBlocked;
                        }, !0),
                        i.reduce(function (e, t) {
                          return Math.max(e, t.eta);
                        }, 0)),
                      o = i.reduce(function (e, t) {
                        return p.Z.min(e, t.max);
                      }, new p.Z("1.e+30000"));
                    return (
                      r.level <= 0 &&
                        Vi.newNotifications.registerNotification(
                          "city:academy:upgrade:".concat(n.id)
                        ),
                      si(si({}, t), {
                        etaNum: a,
                        isAvailable: o.greaterThanOrEqualTo(1),
                        cost: zi
                          .getInstance()
                          .resources.assertEnought(
                            i,
                            zi.getInstance().resources.getBatchObject(),
                            zi.getInstance().resources.getBatchBalanceObject()
                          ),
                        progress: o.lessThan(1)
                          ? (100 * o.toNumber()).toPrecision(3)
                          : "100",
                      })
                    );
                  });
              }),
              (t.prototype.dataToUI = function () {
                return {
                  list: this.dataFromCache(),
                  isUnlocked: zi
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
                var i = Q.calcBatchAll(
                    e.getCost,
                    zi.getInstance(),
                    new p.Z(r.level + t),
                    zi.getInstance().resources.getBatchObject()
                  ),
                  a = i.reduce(function (e, t) {
                    return e && !t.isBlocked;
                  }, !0),
                  o = i.reduce(function (e, t) {
                    return Math.max(e, t.eta);
                  }, 0),
                  u = i.reduce(function (e, t) {
                    return p.Z.min(e, t.max);
                  }, new p.Z("1.e+30000")),
                  s = e.unlockCondition(Vi);
                return (
                  (this.tickPerf += performance.now() - n),
                  {
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    isUnlocked: s,
                    isAvailable: u.greaterThanOrEqualTo(1),
                    cost: zi
                      .getInstance()
                      .resources.assertEnought(
                        i,
                        zi.getInstance().resources.getBatchObject(),
                        zi.getInstance().resources.getBatchBalanceObject()
                      ),
                    progress: u.lessThan(1)
                      ? (100 * u.toNumber()).toPrecision(3)
                      : "100",
                    isMaxedOut: !!e.maxLevel && e.maxLevel <= r.level,
                    maxLevel: e.maxLevel,
                    level: r.level + t,
                    isBlocked: !a,
                    etaNum: o,
                  }
                );
              }),
              (t.prototype.doUpgrade = function (e) {
                var t = oi.find(function (t) {
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
                  var r = Q.calcBatchAll(
                      t.getCost,
                      zi.getInstance(),
                      new p.Z(this.upgrades[n].level),
                      zi.getInstance().resources.getBatchObject()
                    ),
                    i = r.reduce(function (e, t) {
                      return p.Z.min(e, t.max.floor());
                    }, new p.Z("1.e+30000"));
                  if (
                    (console.log("[upgrade] mx: ", i.toNumber()),
                    !i.lessThan(1))
                  )
                    return (
                      (this.upgrades[n].level = this.upgrades[n].level + 1),
                      console.log("costs: ", r),
                      zi.getInstance().resources.subtractResourceBatch(r),
                      Vi.resources.reassertBalances(),
                      Vi.regenerateCache(),
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
          li = ci.getInstance(),
          pi = [
            {
              id: "spiritual",
              name: "Spiritual",
              description: "",
              unlockCondition: function (e) {
                return !0;
              },
              getCost: ((ur = {}), (ur[r.COINS] = new p.Z(1)), ur),
              getGainMultiplier: ((sr = {}), (sr[r.MANA] = 0.1), sr),
            },
            {
              id: "mana-capable",
              name: "Capable",
              description: "",
              unlockCondition: function (e) {
                return !0;
              },
              getCost: ((cr = {}), (cr[r.COINS] = new p.Z(1)), cr),
              getCapacityMultiplier: ((lr = {}), (lr[r.MANA] = 0.1), lr),
            },
            {
              id: "intelligent",
              name: "Intelligent",
              description: "",
              unlockCondition: function (e) {
                return !0;
              },
              getCost: ((pr = {}), (pr[r.COINS] = new p.Z(1)), pr),
              getGainMultiplier: ((dr = {}), (dr[r.KNOWLEDGE] = 0.1), dr),
            },
            {
              id: "wise",
              name: "Wise",
              description: "",
              unlockCondition: function (e) {
                return !0;
              },
              getCost: ((fr = {}), (fr[r.COINS] = new p.Z(1)), fr),
              getCapacityMultiplier: ((gr = {}), (gr[r.KNOWLEDGE] = 0.1), gr),
            },
            {
              id: "erudite",
              name: "Erudite",
              description: "",
              unlockCondition: function (e) {
                return !0;
              },
              getCost: ((hr = {}), (hr[r.COINS] = new p.Z(1)), hr),
              getAttributeMultiplier:
                ((mr = {}), (mr[c.RUNE_READING] = 0.1), mr),
            },
          ],
          di = [
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
          fi = [
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
          gi = (function () {
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
          hi = function () {
            return (
              (hi =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              hi.apply(this, arguments)
            );
          },
          mi = (function (e) {
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
              gi(t, e),
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
                      : t.greaterThan(Vi.resources.getResource(r).mul(10 * e))
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
                  Vi.resources.reassertBalances(),
                  Vi.regenerateCache());
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
                        ((e = di[Math.floor(Math.random() * di.length)]),
                        (t = fi[Math.floor(Math.random() * fi.length)]),
                        "".concat(e, " ").concat(t)),
                      level: 1,
                      effort: 100,
                      traits: [],
                    },
                    a = (function (e, t, n) {
                      if (n || 2 === arguments.length)
                        for (var r, i = 0, a = t.length; i < a; i++)
                          (!r && (i in t)) ||
                            (r || (r = Array.prototype.slice.call(t, 0, i)),
                            (r[i] = t[i]));
                      return e.concat(r || Array.prototype.slice.call(t));
                    })([], pi, !0),
                    o = 0;
                  o < r;
                  o++
                ) {
                  var u = Math.floor(Math.random() * a.length),
                    s = a.splice(u, 1)[0];
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
                    Q.calcBatch(
                      t.getCost,
                      zi.getInstance(),
                      new p.Z(n)
                    ).forEach(function (t) {
                      var n;
                      e.totalCosts[t.id] || (e.totalCosts[t.id] = new p.Z(0)),
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
                    Vi.city.academyUpgrades.getUpgradeLevel(o.MERCENARIES) > 0,
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
                  n = Q.calcBatch(e.getCost, zi.getInstance(), new p.Z(t)),
                  r = e.getGainMultiplier
                    ? Q.calcBatch(
                        e.getGainMultiplier,
                        zi.getInstance(),
                        new p.Z(t)
                      )
                    : [],
                  i = e.getAttributeMultiplier
                    ? Q.calcBatch(
                        e.getAttributeMultiplier,
                        zi.getInstance(),
                        new p.Z(t)
                      )
                    : [],
                  a = e.getCapacityMultiplier
                    ? Q.calcBatch(
                        e.getCapacityMultiplier,
                        zi.getInstance(),
                        new p.Z(t)
                      )
                    : [],
                  o = Q.calcBatchAll(
                    e.getLevelupCost,
                    zi.getInstance(),
                    new p.Z(e.level),
                    zi.getInstance().resources.getBatchObject()
                  ),
                  u = o.reduce(function (e, t) {
                    return p.Z.min(e, t.max);
                  }, new p.Z("1.e+30000"));
                return {
                  id: e.id,
                  name: e.name,
                  description: e.description,
                  consume: n.map(function (e) {
                    return hi(hi({}, e), {
                      amountValue: e.amount.minus(1).toString(),
                      amount: x(e.amount.minus(1)),
                    });
                  }),
                  gainMult: r.map(function (e) {
                    return hi(hi({}, e), {
                      amountValue: e.amount.toString(),
                      amount: "x".concat(x(e.amount)),
                    });
                  }),
                  capMult: a.map(function (e) {
                    return hi(hi({}, e), {
                      amountValue: e.amount.toString(),
                      amount: "x".concat(x(e.amount)),
                    });
                  }),
                  attrMult: i.map(function (e) {
                    return hi(hi({}, e), {
                      amountValue: e.amount.toString(),
                      amount: "x".concat(x(e.amount)),
                    });
                  }),
                  level: e.level,
                  progress: "0",
                  effort: e.effort,
                  maxAmt: u.toNumber(),
                  isLevelupAvailable: u.greaterThanOrEqualTo(1),
                  levelupCost: zi
                    .getInstance()
                    .resources.assertEnought(
                      o,
                      zi.getInstance().resources.getBatchObject(),
                      zi.getInstance().resources.getBatchBalanceObject()
                    ),
                };
              }),
              (t.prototype.calculateMercenary = function (e) {
                var t,
                  n = {},
                  i = {},
                  a = {},
                  o = {},
                  u = [];
                return (
                  e.traits.forEach(function (e) {
                    var t = pi.find(function (t) {
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
                            a[n] || (a[n] = 0), (a[n] += r * e.quality);
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
                          o[n] || (o[n] = new p.Z(0)),
                            (o[n] = o[n].plus(r.mul(e.quality)));
                        }));
                  }),
                  {
                    id: e.id,
                    level: e.level,
                    name: e.name,
                    description: u.join(", "),
                    getCost: Ln(o, function (e) {
                      return function (e) {
                        return {
                          A: new p.Z(1),
                          B: new p.Z(1.75),
                          type: v.EXPONENTIAL,
                        };
                      };
                    }),
                    getAttributeMultiplier: Ln(i, function (e) {
                      return function (t) {
                        return {
                          A: new p.Z(1),
                          B: new p.Z(1 + e),
                          type: v.EXPONENTIAL,
                        };
                      };
                    }),
                    getCapacityMultiplier: Ln(a, function (e) {
                      return function (t) {
                        return {
                          A: new p.Z(1),
                          B: new p.Z(1 + e),
                          type: v.EXPONENTIAL,
                        };
                      };
                    }),
                    getGainMultiplier: Ln(n, function (e) {
                      return function (t) {
                        return {
                          A: new p.Z(1),
                          B: new p.Z(1 + e),
                          type: v.EXPONENTIAL,
                        };
                      };
                    }),
                    effort: e.effort,
                    getLevelupCost:
                      ((t = {}),
                      (t[r.KNOWLEDGE] = function (e) {
                        return {
                          A: new p.Z("1.e+10"),
                          B: new p.Z(2),
                          type: v.EXPONENTIAL,
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
                    this.hired.push(hi(hi({}, n), { effort: 0 })),
                      Vi.resources.reassertBalances(),
                      Vi.regenerateCache();
                  }
                }
              }),
              (t.prototype.doFire = function (e) {
                var t = this.hired.findIndex(function (t) {
                  return t.id === e;
                });
                if (!(t < 0)) {
                  var n = this.hired.splice(t, 1)[0];
                  this.shop.push(hi(hi({}, n), { effort: 0 })),
                    Vi.resources.reassertBalances(),
                    Vi.regenerateCache();
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
                    var i = Q.calcBatchAll(
                        r.getLevelupCost,
                        zi.getInstance(),
                        new p.Z(r.level),
                        zi.getInstance().resources.getBatchObject(),
                        new p.Z(t)
                      ),
                      a = i.reduce(function (e, t) {
                        return p.Z.min(e, t.max.floor());
                      }, new p.Z("1.e+30000"));
                    if (
                      (console.log("[level-up] mx: ", a.toNumber()),
                      !a.lessThan(1))
                    ) {
                      var o = p.Z.min(a, t);
                      return (
                        (this.hired[n].level += o.toNumber()),
                        console.log("costs: ", i, o.toNumber()),
                        zi.getInstance().resources.subtractResourceBatch(i),
                        this.regenerateCache(),
                        Vi.resources.reassertBalances(),
                        Vi.regenerateCache(),
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
                  Vi.resources.reassertBalances(),
                  Vi.regenerateCache());
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
                      var i = Q.calculate(
                        Vi,
                        t.getCapacityMultiplier[e],
                        new p.Z((t.level * t.effort) / 100)
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
                      var i = Q.calculate(
                        Vi,
                        t.getGainMultiplier[e],
                        new p.Z((t.level * t.effort) / 100)
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
                      var i = Q.calculate(
                        Vi,
                        t.getCost[e],
                        new p.Z((t.level * t.effort) / 100)
                      ).minus(1);
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
                      var i = Q.calculate(
                        Vi,
                        t.getAttributeMultiplier[e],
                        new p.Z((t.level * t.effort) / 100)
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
          vi = mi.getInstance(),
          yi = function (e, t) {
            var n = ei.filter(t).reduce(function (e, t) {
              return (e[t.id] = t), e;
            }, {});
            return e.city.actions.actions.reduce(function (e, t) {
              var r = n[t.id];
              return r ? (e = e.plus(t.numPerformed.mul(r.xpGain))) : e;
            }, new p.Z(0));
          },
          Ei = [
            {
              id: F.SCHOLAR,
              name: "Scholar",
              description:
                "Improve your learning abilities, increasing runes learning speed",
              unlockCondition: function (e) {
                return !0;
              },
              getPointsReward: function (e) {
                return yi(e, function () {
                  return !0;
                });
              },
              getBonus: function (e, t) {
                return p.Z.max(1, p.Z.pow(t.div(2e5), 1));
              },
              getBonusText: function (e) {
                return "x#BONUS# rune learning speed";
              },
              getMinimumPoints: function (e) {
                return new p.Z(2e6);
              },
            },
            {
              id: F.PHYSICAL,
              name: "Physical",
              description:
                "Improve your physical power, making all physical actions executed faster",
              unlockCondition: function (e) {
                return !0;
              },
              getPointsReward: function (e) {
                return yi(e, function () {
                  return !0;
                });
              },
              getBonus: function (e, t) {
                return p.Z.max(1, p.Z.pow(t.div(2e5), 0.4));
              },
              getBonusText: function (e) {
                return "x#BONUS# physical actions speed";
              },
              getMinimumPoints: function (e) {
                return new p.Z(2e6);
              },
            },
            {
              id: F.MENTAL,
              name: "Mental",
              description:
                "Improve your mental power, making all mental actions executed faster",
              unlockCondition: function (e) {
                return !0;
              },
              getPointsReward: function (e) {
                return yi(e, function () {
                  return !0;
                });
              },
              getBonus: function (e, t) {
                return p.Z.max(1, p.Z.pow(t.div(2e5), 0.4));
              },
              getBonusText: function (e) {
                return "x#BONUS# mental actions speed";
              },
              getMinimumPoints: function (e) {
                return new p.Z(2e6);
              },
            },
            {
              id: F.MAGICAL,
              name: "Magical",
              description:
                "Improve your magic power, making all spells executed faster",
              unlockCondition: function (e) {
                return (
                  Vi.city.academyUpgrades.getUpgradeLevel(o.ILLUSION_SPELLS) > 0
                );
              },
              getPointsReward: function (e) {
                return yi(e, function () {
                  return !0;
                });
              },
              getBonus: function (e, t) {
                return p.Z.max(1, p.Z.pow(t.div(2e7), 0.4));
              },
              getBonusText: function (e) {
                return "x#BONUS# spell speed";
              },
              getMinimumPoints: function (e) {
                return new p.Z(1e8);
              },
            },
          ],
          Ai = (function () {
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
          wi = function () {
            return (
              (wi =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              wi.apply(this, arguments)
            );
          },
          Ni = (function (e) {
            function t() {
              var t,
                n = e.call(this) || this;
              return (
                (n.state = []),
                (n.uiCache = []),
                (n.bonusesCached =
                  (((t = {})[F.SCHOLAR] = new p.Z(1)),
                  (t[F.PHYSICAL] = new p.Z(1)),
                  (t[F.MENTAL] = new p.Z(1)),
                  (t[F.MAGICAL] = new p.Z(1)),
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
              Ai(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                this.state =
                  (null == e
                    ? void 0
                    : e.resets.map(function (e) {
                        return wi(wi({}, e), {
                          numPoints: new p.Z(e.numPoints),
                        });
                      })) || [];
              }),
              (t.prototype.exportData = function () {
                return {
                  resets: this.state.map(function (e) {
                    return wi(wi({}, e), {
                      numPoints: e.numPoints.toPrecision(18),
                    });
                  }),
                };
              }),
              (t.prototype.regenerateCache = function () {
                var e = this;
                Ei.forEach(function (t) {
                  var n = e.state.find(function (e) {
                    return e.id === t.id;
                  });
                  e.bonusesCached[t.id] = n
                    ? t.getBonus(Vi, n.numPoints)
                    : new p.Z(1);
                }),
                  (this.uiCache = Ei.map(function (t) {
                    return e.processToUI(t);
                  }));
              }),
              (t.prototype.dataToUI = function () {
                return {
                  resets: this.uiCache,
                  isUnlocked:
                    zi
                      .getInstance()
                      .city.academyUpgrades.getUpgradeLevel(o.REINCARNATION) >
                    0,
                };
              }),
              (t.prototype.processToUI = function (e) {
                var t = e.getPointsReward(Vi),
                  n = this.state.find(function (t) {
                    return t.id === e.id;
                  }),
                  r = new p.Z(1);
                n && (r = n.numPoints);
                var i = e.getBonusText(Vi),
                  a = i.replace("#BONUS#", x(e.getBonus(Vi, r))),
                  o = i.replace("#BONUS#", x(e.getBonus(Vi, t))),
                  u = p.Z.max(e.getMinimumPoints(Vi), r).sub(t);
                return (
                  t.greaterThanOrEqualTo(r) &&
                    u.lessThanOrEqualTo(0) &&
                    e.unlockCondition(Vi) &&
                    Vi.newNotifications.registerNotification(
                      "city:reincarnations:reincarnation:".concat(e.id)
                    ),
                  {
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    potentialBonus: o,
                    isAvailable:
                      t.greaterThanOrEqualTo(r) && u.lessThanOrEqualTo(0),
                    pointsLeft: x(u),
                    bonus: a,
                  }
                );
              }),
              (t.prototype.doReincarnate = function (e) {
                var t = Ei.find(function (t) {
                  return t.id === e;
                });
                if (t) {
                  var n = t.getPointsReward(Vi),
                    r = this.state.findIndex(function (e) {
                      return e.id === t.id;
                    });
                  if (
                    (r < 0 &&
                      ((r = this.state.length),
                      this.state.push({
                        id: e,
                        numReincarnations: 0,
                        numPoints: new p.Z(1),
                      })),
                    !this.state[r].numPoints.greaterThan(n))
                  ) {
                    this.state[r].numPoints = n;
                    for (var i = 0; i < Vi.learning.runes.runes.length; i++)
                      Vi.city.academyUpgrades.getUpgradeLevel(
                        o.RUNE_PROTECTION
                      ) <= 0
                        ? (Vi.learning.runes.runes[i].level = new p.Z(0))
                        : (Vi.learning.runes.runes[i].level = p.Z.min(
                            Vi.learning.runes.runes[i].level,
                            Math.pow(
                              2 *
                                Vi.city.academyUpgrades.getUpgradeLevel(
                                  o.RUNE_PROTECTION
                                ),
                              2
                            )
                          )),
                        (Vi.learning.runes.runes[i].isActive = !1),
                        (Vi.learning.runes.runes[i].isLearning = !1),
                        (Vi.learning.runes.runes[i].xp = new p.Z(0)),
                        (Vi.learning.runes.runes[i].xpMult = new p.Z(1));
                    (Vi.statistics.stats.fastestReincarnateTime = Vi.statistics
                      .stats.numReincarnations
                      ? Math.min(
                          Vi.statistics.stats.fastestReincarnateTime,
                          Vi.statistics.stats.timeThisReincarnation
                        )
                      : Vi.statistics.stats.timeThisReincarnation),
                      (Vi.statistics.stats.timeThisReincarnation = 0),
                      Vi.learning.wizardOrb.reset(),
                      Vi.learning.runeUpgrades.reset(),
                      Vi.newNotifications.resetNotifications(),
                      Vi.resources.reset(),
                      Vi.learning.runePresets.runDefault(),
                      this.state[r].numReincarnations++,
                      Vi.city.actions.reset(),
                      Vi.resources.reassertBalances(),
                      Vi.regenerateCache(),
                      Vi.learning.runePresets.applyPreset(),
                      Vi.statistics.stats.numReincarnations++;
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
          Ci = Ni.getInstance(),
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
          Ii = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.actions = ai),
                (t.academyUpgrades = li),
                (t.mercenaries = vi),
                (t.reincarnation = Ci),
                t
              );
            }
            return (
              Oi(t, e),
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
          Ri = Ii.getInstance(),
          Li = (function () {
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
          bi = {
            timeInGame: 0,
            timeThisRune: 0,
            fastestRuneTime: 0,
            numRuneResets: 0,
            numReincarnations: 0,
            timeThisReincarnation: 0,
            fastestReincarnateTime: 0,
          },
          Ti = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (t.stats = Zi({}, bi)), t;
            }
            return (
              Li(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                var t = e || {
                  timeInGame: 0,
                  timeThisRune: 0,
                  numRuneResets: 0,
                };
                this.stats = Zi(Zi({}, bi), t);
              }),
              (t.prototype.exportData = function () {
                return this.stats;
              }),
              (t.prototype.dataToUI = function () {
                return Zi({}, this.stats);
              }),
              (t.prototype.process = function (e) {
                (this.stats.timeThisRune += e),
                  (this.stats.timeInGame += e),
                  (this.stats.timeThisReincarnation += e);
              }),
              (t.prototype.reset = function () {}),
              t
            );
          })(s).getInstance(),
          Si = [
            {
              id: r.REFINED_WOOD,
              name: "Refine Wood",
              getCost:
                ((vr = {}),
                (vr[r.WOOD] = function (e) {
                  return {
                    A: new p.Z(0.2),
                    B: new p.Z(2),
                    type: v.EXPONENTIAL,
                  };
                }),
                (vr[r.CRAFTSMANSHIP] = function (e) {
                  return { A: new p.Z(2), B: new p.Z(2), type: v.EXPONENTIAL };
                }),
                vr),
              getProduce:
                ((yr = {}),
                (yr[r.REFINED_WOOD] = function (e) {
                  return {
                    A: new p.Z(0.02),
                    B: new p.Z(1.5),
                    type: v.EXPONENTIAL,
                  };
                }),
                yr),
              baseSlotsPrice: 1,
              unlockCondition: function (e) {
                return !0;
              },
            },
            {
              id: r.PAPER,
              name: "Craft Paper",
              getCost:
                ((Er = {}),
                (Er[r.WOOD] = function (e) {
                  return { A: new p.Z(1), B: new p.Z(2), type: v.EXPONENTIAL };
                }),
                (Er[r.CRAFTSMANSHIP] = function (e) {
                  return { A: new p.Z(6), B: new p.Z(2), type: v.EXPONENTIAL };
                }),
                Er),
              getProduce:
                ((Ar = {}),
                (Ar[r.PAPER] = function (e) {
                  return {
                    A: new p.Z(0.05),
                    B: new p.Z(1.5),
                    type: v.EXPONENTIAL,
                  };
                }),
                Ar),
              baseSlotsPrice: 2,
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.PAPERWORKING) > 0
                );
              },
            },
            {
              id: r.BRICK,
              name: "Craft Brick",
              getCost:
                ((wr = {}),
                (wr[r.STONE] = function (e) {
                  return {
                    A: new p.Z(0.5),
                    B: new p.Z(2),
                    type: v.EXPONENTIAL,
                  };
                }),
                (wr[r.CRAFTSMANSHIP] = function (e) {
                  return { A: new p.Z(20), B: new p.Z(2), type: v.EXPONENTIAL };
                }),
                wr),
              getProduce:
                ((Nr = {}),
                (Nr[r.BRICK] = function (e) {
                  return {
                    A: new p.Z(0.05),
                    B: new p.Z(1.5),
                    type: v.EXPONENTIAL,
                  };
                }),
                Nr),
              baseSlotsPrice: 2,
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.STONEWORKING) > 0
                );
              },
            },
            {
              id: r.CHARGED_WOOD,
              name: "Charge Wood",
              getCost:
                ((Cr = {}),
                (Cr[r.REFINED_WOOD] = function (e) {
                  return { A: new p.Z(1), B: new p.Z(2), type: v.EXPONENTIAL };
                }),
                (Cr[r.SPARK] = function (e) {
                  return { A: new p.Z(50), B: new p.Z(2), type: v.EXPONENTIAL };
                }),
                (Cr[r.CRAFTSMANSHIP] = function (e) {
                  return { A: new p.Z(50), B: new p.Z(2), type: v.EXPONENTIAL };
                }),
                Cr),
              getProduce:
                ((Or = {}),
                (Or[r.CHARGED_WOOD] = function (e) {
                  return {
                    A: new p.Z(0.05),
                    B: new p.Z(1.5),
                    type: v.EXPONENTIAL,
                  };
                }),
                Or),
              baseSlotsPrice: 2,
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.CHARGED_CRAFTING) > 0
                );
              },
            },
            {
              id: r.CHARGED_PAPER,
              name: "Charge Paper",
              getCost:
                ((Ir = {}),
                (Ir[r.PAPER] = function (e) {
                  return { A: new p.Z(1), B: new p.Z(2), type: v.EXPONENTIAL };
                }),
                (Ir[r.SPARK] = function (e) {
                  return { A: new p.Z(50), B: new p.Z(2), type: v.EXPONENTIAL };
                }),
                (Ir[r.CRAFTSMANSHIP] = function (e) {
                  return { A: new p.Z(50), B: new p.Z(2), type: v.EXPONENTIAL };
                }),
                Ir),
              getProduce:
                ((Rr = {}),
                (Rr[r.CHARGED_PAPER] = function (e) {
                  return {
                    A: new p.Z(0.05),
                    B: new p.Z(1.5),
                    type: v.EXPONENTIAL,
                  };
                }),
                Rr),
              baseSlotsPrice: 2,
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.CHARGED_CRAFTING) > 0
                );
              },
            },
            {
              id: r.SAND,
              name: "Make Sand",
              getCost:
                ((Lr = {}),
                (Lr[r.STONE] = function (e) {
                  return {
                    A: new p.Z(0.5),
                    B: new p.Z(2),
                    type: v.EXPONENTIAL,
                  };
                }),
                (Lr[r.CRAFTSMANSHIP] = function (e) {
                  return { A: new p.Z(50), B: new p.Z(2), type: v.EXPONENTIAL };
                }),
                Lr),
              getProduce:
                ((Zr = {}),
                (Zr[r.SAND] = function (e) {
                  return {
                    A: new p.Z(0.05),
                    B: new p.Z(1.5),
                    type: v.EXPONENTIAL,
                  };
                }),
                Zr),
              baseSlotsPrice: 2,
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.GLASSMAKING) > 0
                );
              },
            },
            {
              id: r.GLASS,
              name: "Craft Glass",
              getCost:
                ((br = {}),
                (br[r.SAND] = function (e) {
                  return { A: new p.Z(1), B: new p.Z(2), type: v.EXPONENTIAL };
                }),
                (br[r.MANA] = function (e) {
                  return {
                    A: new p.Z(5e13),
                    B: new p.Z(2),
                    type: v.EXPONENTIAL,
                  };
                }),
                (br[r.CRAFTSMANSHIP] = function (e) {
                  return {
                    A: new p.Z(150),
                    B: new p.Z(2),
                    type: v.EXPONENTIAL,
                  };
                }),
                br),
              getProduce:
                ((Tr = {}),
                (Tr[r.GLASS] = function (e) {
                  return {
                    A: new p.Z(0.05),
                    B: new p.Z(1.5),
                    type: v.EXPONENTIAL,
                  };
                }),
                Tr),
              baseSlotsPrice: 2,
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.GLASSMAKING) > 0
                );
              },
            },
          ],
          Pi = (function () {
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
          Ui = function () {
            return (
              (Ui =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              Ui.apply(this, arguments)
            );
          },
          Mi = function (e, t, n) {
            if (n || 2 === arguments.length)
              for (var r, i = 0, a = t.length; i < a; i++)
                (!r && i in t) ||
                  (r || (r = Array.prototype.slice.call(t, 0, i)),
                  (r[i] = t[i]));
            return e.concat(r || Array.prototype.slice.call(t));
          },
          Bi = (function (e) {
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
              Pi(t, e),
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
                Si.forEach(function (t) {
                  var n = e.slots.find(function (e) {
                    return e.id === t.id;
                  });
                  if (!n || n.level < 1)
                    return (
                      (e.cachedCosts[t.id] = []),
                      (e.cachedGains[t.id] = []),
                      (e.cachedCostsUI[t.id] = Q.calcBatch(
                        t.getCost,
                        Vi,
                        new p.Z(1)
                      )),
                      void (e.cachedGainsUI[t.id] = Q.calcBatch(
                        t.getProduce,
                        Vi,
                        new p.Z(1)
                      ))
                    );
                  (e.cachedCosts[t.id] = Q.calcBatch(
                    t.getCost,
                    Vi,
                    new p.Z(n.level)
                  )),
                    (e.cachedGains[t.id] = Q.calcBatch(
                      t.getProduce,
                      Vi,
                      new p.Z(n.level)
                    )),
                    (e.cachedCostsUI[t.id] = Mi([], e.cachedCosts[t.id], !0)),
                    (e.cachedGainsUI[t.id] = Mi([], e.cachedGains[t.id], !0));
                });
              }),
              (t.prototype.processRecipeAvalilable = function (e) {
                var t,
                  n,
                  r,
                  i = this.slots.find(function (t) {
                    return t.id === e.id;
                  }),
                  a =
                    (new p.Z(
                      null !== (t = null == i ? void 0 : i.level) &&
                      void 0 !== t
                        ? t
                        : 0
                    ),
                    e.unlockCondition(Vi));
                return (
                  a &&
                    Vi.city.academyUpgrades.getUpgradeLevel(o.WOODWORKING) >
                      0 &&
                    Vi.newNotifications.registerNotification(
                      "construction:crafting:recipe:".concat(e.id)
                    ),
                  {
                    id: e.id,
                    name: e.name,
                    isUnlocked: a,
                    cost: this.cachedCostsUI[e.id].map(function (e) {
                      return Ui(Ui({}, e), {
                        amountValue: e.amount.toString(),
                        amount: x(e.amount),
                      });
                    }),
                    gain: this.cachedGainsUI[e.id].map(function (e) {
                      return Ui(Ui({}, e), {
                        amountValue: e.amount.toString(),
                        amount: x(e.amount),
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
                return 6;
              }),
              (t.prototype.getBusySlots = function () {
                return this.slots.reduce(function (e, t) {
                  return e + t.level;
                }, 0);
              }),
              (t.prototype.dataToUI = function () {
                var e = this,
                  t = Si.map(function (t) {
                    return e.processRecipeAvalilable(t);
                  }),
                  n = this.getBusySlots(),
                  r = this.getMaxSlots();
                return {
                  isUnlocked:
                    Vi.city.academyUpgrades.getUpgradeLevel(o.WOODWORKING) > 0,
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
                  a = 0;
                i > -1 && (a = this.slots[i].level),
                  t - a > r && (t = a + r),
                  i > -1
                    ? (this.slots[i].level = t)
                    : this.slots.push({
                        id: e,
                        level: t,
                        isPaused: !1,
                        pauseCd: 0,
                      }),
                  Vi.resources.reassertBalances(),
                  Vi.regenerateCache();
              }),
              (t.prototype.canAfford = function (e, t) {
                for (var n, r = 0, i = e; r < i.length; r++) {
                  var a = i[r];
                  if (
                    null === (n = null == a ? void 0 : a.amount) || void 0 === n
                      ? void 0
                      : n.greaterThan(
                          Vi.resources.getResource(a.id).mul(10 * t)
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
                          Vi.resources.reassertBalances(),
                          Vi.regenerateCache())),
                      t.slots[r].isPaused ||
                        t.canAfford(t.cachedCosts[n.id], e) ||
                        ((t.slots[r].isPaused = !0),
                        (t.slots[r].pauseCd = 0),
                        Vi.resources.reassertBalances(),
                        Vi.regenerateCache()));
                });
              }),
              (t.prototype.getResourceGain = function (e) {
                var t = this.slots
                    .filter(function (e) {
                      return e.level >= 1;
                    })
                    .reduce(function (e, t) {
                      return (
                        e[t.id] || t.isPaused || (e[t.id] = new p.Z(t.level)), e
                      );
                    }, {}),
                  n = Si.filter(function (n) {
                    return n.getProduce[e] && t[n.id];
                  }),
                  r = [];
                return (
                  n.forEach(function (n) {
                    var i = Q.calculate(Vi, n.getProduce[e], t[n.id]);
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
                        e[t.id] || t.isPaused || (e[t.id] = new p.Z(t.level)), e
                      );
                    }, {}),
                  n = Si.filter(function (n) {
                    return n.getCost[e] && t[n.id];
                  }),
                  r = [];
                return (
                  n.forEach(function (n) {
                    var i = Q.calculate(Vi, n.getCost[e], t[n.id]);
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
          Gi = Bi.getInstance();
        !(function (e) {
          (e.CRAFTING_TABLE = "crafting-table"),
            (e.RUNE_HOLDER = "rune-holder"),
            (e.BOOKSHELL = "bookshell"),
            (e.MANUSCRIPT = "manuscript"),
            (e.STONE_WALL = "stonewall"),
            (e.LUMBERMILL = "lumbermill"),
            (e.CELLAR = "cellar"),
            (e.MAGIC_CLOCK = "magic_clock"),
            (e.MAGIC_SCROLL = "magic_scroll"),
            (e.MANA_ORB = "mana_orb"),
            (e.CONJURATION_ORB = "spell-orb");
        })(Sr || (Sr = {}));
        var _i = [
            {
              id: Sr.CRAFTING_TABLE,
              name: "Crafting Table",
              description:
                "You need more tools to make crafting more convenient. But you can craft them, dont you?",
              getCost:
                ((Pr = {}),
                (Pr[r.REFINED_WOOD] = function (e) {
                  return {
                    A: new p.Z(1),
                    B: new p.Z(1.2),
                    type: v.EXPONENTIAL,
                  };
                }),
                Pr),
              unlockCondition: function (e) {
                return !0;
              },
              getGainMultiplier:
                ((Ur = {}),
                (Ur[r.CRAFTSMANSHIP] = function (e) {
                  return { A: new p.Z(0.2), B: new p.Z(1), type: v.LINEAR };
                }),
                Ur),
            },
            {
              id: Sr.RUNE_HOLDER,
              name: "Rune Holder",
              description:
                "Lets work on something making runes learning more efficient. At least, these wooden holders should help you a bit",
              getCost:
                ((Mr = {}),
                (Mr[r.REFINED_WOOD] = function (e) {
                  return {
                    A: new p.Z(2),
                    B: new p.Z(1.2),
                    type: v.EXPONENTIAL,
                  };
                }),
                (Mr[r.MANA] = function (e) {
                  return {
                    A: new p.Z("1.e+8"),
                    B: new p.Z(1.2),
                    type: v.EXPONENTIAL,
                  };
                }),
                Mr),
              unlockCondition: function (e) {
                return !0;
              },
              getAttributeGainMultiplier:
                ((Br = {}),
                (Br[c.RUNE_MASTERY] = function (e) {
                  return {
                    A: new p.Z(1),
                    B: new p.Z(1.05),
                    type: v.EXPONENTIAL,
                  };
                }),
                Br),
            },
            {
              id: Sr.BOOKSHELL,
              name: "Bookshell",
              description:
                "It looks like there is complete disorder in your library. An extra shelf will help organize your notebooks with notes.",
              getCost:
                ((Gr = {}),
                (Gr[r.REFINED_WOOD] = function (e) {
                  return {
                    A: new p.Z(5),
                    B: new p.Z(1.2),
                    type: v.EXPONENTIAL,
                  };
                }),
                (Gr[r.MANA] = function (e) {
                  return {
                    A: new p.Z("1.e+8"),
                    B: new p.Z(1.2),
                    type: v.EXPONENTIAL,
                  };
                }),
                Gr),
              unlockCondition: function (e) {
                return !0;
              },
              getCapacityMultiplier:
                ((_r = {}),
                (_r[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(1),
                    B: new p.Z(1.05),
                    type: v.EXPONENTIAL,
                  };
                }),
                _r),
            },
            {
              id: Sr.MANUSCRIPT,
              name: "Manuscript",
              description:
                "Build some magic manuscript to improve your willpower",
              getCost:
                ((kr = {}),
                (kr[r.PAPER] = function (e) {
                  return {
                    A: new p.Z(1),
                    B: new p.Z(1.2),
                    type: v.EXPONENTIAL,
                  };
                }),
                (kr[r.MANA] = function (e) {
                  return {
                    A: new p.Z("1.e+10"),
                    B: new p.Z(1.2),
                    type: v.EXPONENTIAL,
                  };
                }),
                kr),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.PAPERWORKING) > 0
                );
              },
              getAttributeGainMultiplier:
                ((Dr = {}),
                (Dr[c.WILLPOWER] = function (e) {
                  return {
                    A: new p.Z(1),
                    B: new p.Z(1.05),
                    type: v.EXPONENTIAL,
                  };
                }),
                Dr),
            },
            {
              id: Sr.STONE_WALL,
              name: "Stone Wall",
              description:
                "My home is my fortress. Build some walls to prevent yourself from disruption when resting, to increase rest efficiency",
              getCost:
                ((xr = {}),
                (xr[r.BRICK] = function (e) {
                  return {
                    A: new p.Z(2),
                    B: new p.Z(1.2),
                    type: v.EXPONENTIAL,
                  };
                }),
                (xr[r.REFINED_WOOD] = function (e) {
                  return {
                    A: new p.Z(2),
                    B: new p.Z(1.2),
                    type: v.EXPONENTIAL,
                  };
                }),
                xr),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.STONEWORKING) > 0
                );
              },
              getGainMultiplier:
                ((Wr = {}),
                (Wr[r.ENERGY] = function (e) {
                  return {
                    A: new p.Z(1),
                    B: new p.Z(1.05),
                    type: v.EXPONENTIAL,
                  };
                }),
                Wr),
            },
            {
              id: Sr.CELLAR,
              name: "Cellar",
              description: "You must have some place to store your goods",
              getCost:
                ((Xr = {}),
                (Xr[r.BRICK] = function (e) {
                  return {
                    A: new p.Z(3),
                    B: new p.Z(1.2),
                    type: v.EXPONENTIAL,
                  };
                }),
                (Xr[r.REFINED_WOOD] = function (e) {
                  return {
                    A: new p.Z(1),
                    B: new p.Z(1.2),
                    type: v.EXPONENTIAL,
                  };
                }),
                Xr),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.STONEWORKING) > 0
                );
              },
              getCapacityMultiplier:
                ((Kr = {}),
                (Kr[r.COINS] = function (e) {
                  return {
                    A: new p.Z(1),
                    B: new p.Z(1.05),
                    type: v.EXPONENTIAL,
                  };
                }),
                Kr),
            },
            {
              id: Sr.LUMBERMILL,
              name: "Lumbermill",
              description: "Increase your wood craft efficiency",
              getCost:
                ((jr = {}),
                (jr[r.BRICK] = function (e) {
                  return {
                    A: new p.Z(2),
                    B: new p.Z(1.2),
                    type: v.EXPONENTIAL,
                  };
                }),
                (jr[r.REFINED_WOOD] = function (e) {
                  return {
                    A: new p.Z(5),
                    B: new p.Z(1.2),
                    type: v.EXPONENTIAL,
                  };
                }),
                jr),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.STONEWORKING) > 0
                );
              },
              getGainMultiplier:
                ((qr = {}),
                (qr[r.REFINED_WOOD] = function (e) {
                  return {
                    A: new p.Z(1),
                    B: new p.Z(1.05),
                    type: v.EXPONENTIAL,
                  };
                }),
                (qr[r.CHARGED_WOOD] = function (e) {
                  return {
                    A: new p.Z(1),
                    B: new p.Z(1.05),
                    type: v.EXPONENTIAL,
                  };
                }),
                qr),
            },
            {
              id: Sr.MAGIC_CLOCK,
              name: "Magic Clock",
              description:
                "Create clock that able to slow down time around you, increasing your actions speed",
              getCost:
                ((Yr = {}),
                (Yr[r.CHARGED_WOOD] = function (e) {
                  return {
                    A: new p.Z(3),
                    B: new p.Z(1.2),
                    type: v.EXPONENTIAL,
                  };
                }),
                (Yr[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z("1.e+13"),
                    B: new p.Z(1.2),
                    type: v.EXPONENTIAL,
                  };
                }),
                Yr),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.CHARGED_CRAFTING) > 0
                );
              },
              getAttributeGainMultiplier:
                ((Fr = {}),
                (Fr[c.AGILITY] = function (e) {
                  return {
                    A: new p.Z(1),
                    B: new p.Z(1.05),
                    type: v.EXPONENTIAL,
                  };
                }),
                Fr),
            },
            {
              id: Sr.MAGIC_SCROLL,
              name: "Magic Scroll",
              description:
                "Create more sophisticated but pretty useful scroll, amplifying your magic abilities",
              getCost:
                ((Hr = {}),
                (Hr[r.CHARGED_PAPER] = function (e) {
                  return {
                    A: new p.Z(3),
                    B: new p.Z(1.2),
                    type: v.EXPONENTIAL,
                  };
                }),
                (Hr[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z("1.e+13"),
                    B: new p.Z(1.2),
                    type: v.EXPONENTIAL,
                  };
                }),
                Hr),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.CHARGED_CRAFTING) > 0
                );
              },
              getAttributeGainMultiplier:
                ((zr = {}),
                (zr[c.MAGIC_KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z(1),
                    B: new p.Z(1.05),
                    type: v.EXPONENTIAL,
                  };
                }),
                zr),
            },
            {
              id: Sr.MANA_ORB,
              name: "Mana Orb",
              description: "Create additional mana orb to store your mana",
              getCost:
                ((Vr = {}),
                (Vr[r.CHARGED_WOOD] = function (e) {
                  return {
                    A: new p.Z(3),
                    B: new p.Z(1.2),
                    type: v.EXPONENTIAL,
                  };
                }),
                (Vr[r.KNOWLEDGE] = function (e) {
                  return {
                    A: new p.Z("5.e+13"),
                    B: new p.Z(1.2),
                    type: v.EXPONENTIAL,
                  };
                }),
                Vr),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.GLASSMAKING) > 0
                );
              },
              getCapacityMultiplier:
                ((Jr = {}),
                (Jr[r.MANA] = function (e) {
                  return {
                    A: new p.Z(1),
                    B: new p.Z(1.05),
                    type: v.EXPONENTIAL,
                  };
                }),
                Jr),
            },
            {
              id: Sr.CONJURATION_ORB,
              name: "Conjuration Orb",
              description: "Increase your conjuration spell speed",
              getCost:
                ((Qr = {}),
                (Qr[r.CHARGED_WOOD] = function (e) {
                  return {
                    A: new p.Z(5),
                    B: new p.Z(1.2),
                    type: v.EXPONENTIAL,
                  };
                }),
                (Qr[r.GLASS] = function (e) {
                  return {
                    A: new p.Z(5),
                    B: new p.Z(1.2),
                    type: v.EXPONENTIAL,
                  };
                }),
                Qr),
              unlockCondition: function (e) {
                return (
                  e.city.academyUpgrades.getUpgradeLevel(o.GLASSMAKING) > 0
                );
              },
              getAttributeGainMultiplier:
                (($r = {}),
                ($r[c.CONJURATION_LORE] = function (e) {
                  return {
                    A: new p.Z(1),
                    B: new p.Z(1.05),
                    type: v.EXPONENTIAL,
                  };
                }),
                $r),
            },
          ],
          ki = (function () {
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
          Di = function () {
            return (
              (Di =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              Di.apply(this, arguments)
            );
          },
          xi = (function (e) {
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
              ki(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.importData = function (e) {
                this.structures =
                  (null == e
                    ? void 0
                    : e.list.map(function (e) {
                        return Di({}, e);
                      })) || [];
              }),
              (t.prototype.exportData = function () {
                return {
                  list: this.structures.map(function (e) {
                    return Di({}, e);
                  }),
                };
              }),
              (t.prototype.regenerateCache = function () {
                var e = this;
                (this.tickPerf = 0),
                  (this.cachedStructures = _i.map(function (t) {
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
                    var n = _i.find(function (e) {
                      return e.id === t.id;
                    });
                    if (!n) return t;
                    var r = e.structures.find(function (e) {
                      return e.id === n.id;
                    });
                    r || ((r = { id: n.id, level: 0 }), e.structures.push(r));
                    var i = Q.calcBatchAll(
                        n.getCost,
                        zi.getInstance(),
                        new p.Z(r.level),
                        zi.getInstance().resources.getBatchObject()
                      ),
                      a =
                        (i.reduce(function (e, t) {
                          return e && !t.isBlocked;
                        }, !0),
                        i.reduce(function (e, t) {
                          return Math.max(e, t.eta);
                        }, 0)),
                      u = i.reduce(function (e, t) {
                        return p.Z.min(e, t.max);
                      }, new p.Z("1.e+30000"));
                    return (
                      Vi.city.academyUpgrades.getUpgradeLevel(o.WOODWORKING) >
                        0 &&
                        Vi.newNotifications.registerNotification(
                          "construction:structures:structure:".concat(n.id)
                        ),
                      Di(Di({}, t), {
                        etaNum: a,
                        isAvailable: u.greaterThanOrEqualTo(1),
                        cost: zi
                          .getInstance()
                          .resources.assertEnought(
                            i,
                            zi.getInstance().resources.getBatchObject(),
                            zi.getInstance().resources.getBatchBalanceObject()
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
                  isUnlocked: zi
                    .getInstance()
                    .resources.getResourceCap(r.MANA)
                    .greaterThanOrEqualTo(10),
                };
              }),
              (t.prototype.getUpgradeLevel = function (e) {
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
                var r = Q.calcBatchAll(
                    e.getCost,
                    zi.getInstance(),
                    new p.Z(n.level + t),
                    zi.getInstance().resources.getBatchObject()
                  ),
                  i = e.getGain
                    ? Q.calcBatch(e.getGain, Vi, new p.Z(n.level))
                    : [],
                  a = e.getGainMultiplier
                    ? Q.calcBatch(e.getGainMultiplier, Vi, new p.Z(n.level + t))
                    : [],
                  o = e.getCapacityEffect
                    ? Q.calcBatch(e.getCapacityEffect, Vi, new p.Z(n.level + t))
                    : [],
                  u = e.getCapacityMultiplier
                    ? Q.calcBatch(
                        e.getCapacityMultiplier,
                        Vi,
                        new p.Z(n.level + t)
                      )
                    : [],
                  s = e.getAttributeGain
                    ? Q.calcBatch(e.getAttributeGain, Vi, new p.Z(n.level + t))
                    : [],
                  c = e.getAttributeGainMultiplier
                    ? Q.calcBatch(
                        e.getAttributeGainMultiplier,
                        Vi,
                        new p.Z(n.level + t)
                      )
                    : [],
                  l = r.reduce(function (e, t) {
                    return e && !t.isBlocked;
                  }, !0),
                  d = r.reduce(function (e, t) {
                    return Math.max(e, t.eta);
                  }, 0),
                  f = r.reduce(function (e, t) {
                    return p.Z.min(e, t.max);
                  }, new p.Z("1.e+30000")),
                  g = e.unlockCondition(Vi);
                return {
                  id: e.id,
                  name: e.name,
                  description: e.description,
                  isUnlocked: g,
                  isAvailable: f.greaterThanOrEqualTo(1),
                  cost: zi
                    .getInstance()
                    .resources.assertEnought(
                      r,
                      zi.getInstance().resources.getBatchObject(),
                      zi.getInstance().resources.getBatchBalanceObject()
                    ),
                  level: n.level,
                  isBlocked: !l,
                  etaNum: d,
                  attr: s.map(function (e) {
                    return Di(Di({}, e), {
                      amountValue: e.amount.toString(),
                      amount: "+".concat(x(e.amount)),
                    });
                  }),
                  attrMult: c.map(function (e) {
                    return Di(Di({}, e), {
                      amountValue: e.amount.toString(),
                      amount: "x".concat(x(e.amount)),
                    });
                  }),
                  capGain: o.map(function (e) {
                    return Di(Di({}, e), {
                      amountValue: e.amount.toString(),
                      amount: "+".concat(x(e.amount)),
                    });
                  }),
                  capMult: u.map(function (e) {
                    return Di(Di({}, e), {
                      amountValue: e.amount.toString(),
                      amount: "x".concat(x(e.amount)),
                    });
                  }),
                  gain: i.map(function (e) {
                    return Di(Di({}, e), {
                      amountValue: e.amount.toString(),
                      amount: "+".concat(x(e.amount)),
                    });
                  }),
                  gainMult: a.map(function (e) {
                    return Di(Di({}, e), {
                      amountValue: e.amount.toString(),
                      amount: "x".concat(x(e.amount)),
                    });
                  }),
                  progress: f.lessThan(1)
                    ? (100 * f.toNumber()).toPrecision(3)
                    : "100",
                };
              }),
              (t.prototype.doBuild = function (e) {
                var t = _i.find(function (t) {
                  return t.id === e;
                });
                if ((console.log("[construct] db", t), t)) {
                  var n = this.structures.findIndex(function (t) {
                    return t.id === e;
                  });
                  n < 0 &&
                    ((n = this.structures.length),
                    this.structures.push({ id: e, level: 0 }));
                  var r = Q.calcBatchAll(
                      t.getCost,
                      zi.getInstance(),
                      new p.Z(this.structures[n].level),
                      zi.getInstance().resources.getBatchObject()
                    ),
                    i = r.reduce(function (e, t) {
                      return p.Z.min(e, t.max.floor());
                    }, new p.Z("1.e+30000"));
                  if (
                    (console.log("[upgrade] mx: ", i.toNumber()),
                    !i.lessThan(1))
                  )
                    return (
                      (this.structures[n].level = this.structures[n].level + 1),
                      console.log("costs: ", r),
                      zi.getInstance().resources.subtractResourceBatch(r),
                      Vi.resources.reassertBalances(),
                      Vi.regenerateCache(),
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
                      return e[t.id] || (e[t.id] = new p.Z(t.level)), e;
                    }, {}),
                  n = _i.filter(function (n) {
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
                      var a = Q.calculate(Vi, n.getGain[e], t[n.id]);
                      a.eq(0) ||
                        r.push({
                          label: "Structures: ".concat(n.name),
                          value: a,
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
                      return e[t.id] || (e[t.id] = new p.Z(t.level)), e;
                    }, {}),
                  n = _i.filter(function (n) {
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
                      var a = Q.calculate(Vi, n.getCapacityEffect[e], t[n.id]);
                      a.eq(0) ||
                        r.push({
                          label: "Structures: ".concat(n.name),
                          value: a,
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
                      return e[t.id] || (e[t.id] = new p.Z(t.level)), e;
                    }, {}),
                  n = _i.filter(function (n) {
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
                      var a = Q.calculate(
                        Vi,
                        n.getCapacityMultiplier[e],
                        t[n.id]
                      );
                      a.eq(1) ||
                        r.push({
                          label: "Structures: ".concat(n.name),
                          value: a,
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
                      return e[t.id] || (e[t.id] = new p.Z(t.level)), e;
                    }, {}),
                  n = _i.filter(function (n) {
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
                      var a = Q.calculate(Vi, n.getAttributeGain[e], t[n.id]);
                      a.eq(0) ||
                        r.push({
                          label: "Structures: ".concat(n.name),
                          value: a,
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
                      return e[t.id] || (e[t.id] = new p.Z(t.level)), e;
                    }, {}),
                  n = _i.filter(function (n) {
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
                      var a = Q.calculate(
                        Vi,
                        n.getAttributeGainMultiplier[e],
                        t[n.id]
                      );
                      a.eq(0) ||
                        r.push({
                          label: "Structures: ".concat(n.name),
                          value: a,
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
                      return e[t.id] || (e[t.id] = new p.Z(t.level)), e;
                    }, {}),
                  n = _i.filter(function (n) {
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
                      var a = Q.calculate(Vi, n.getGainMultiplier[e], t[n.id]);
                      a.eq(1) ||
                        r.push({
                          label: "Structures: ".concat(n.name),
                          value: a,
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
          Wi = xi.getInstance(),
          Xi = (function () {
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
          Ki = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (t.crafting = Gi), (t.structures = Wi), t;
            }
            return (
              Xi(t, e),
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
          ji = Ki.getInstance(),
          qi = (function () {
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
          Yi = (function (e) {
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
              qi(t, e),
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
                zi.getInstance().settings.resetNotificationsOnPrestige &&
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
          Fi = Yi.getInstance(),
          Hi = (function () {
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
          zi = (function (e) {
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
                (t.resources = Y),
                (t.learning = Rn),
                (t.personage = Un),
                (t.city = Ri),
                (t.statistics = Ti),
                (t.construction = ji),
                (t.newNotifications = Fi),
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
              Hi(t, e),
              (t.getInstance = function () {
                return t.instance || (t.instance = new t()), t.instance;
              }),
              (t.prototype.process = function (e) {
                var t = 1 * this.speedUpFactor;
                (this.dT = e * t),
                  this.learning.process(this.dT),
                  this.resources.process(this.dT),
                  this.city.process(this.dT),
                  this.construction.process(this.dT),
                  this.statistics.process(this.dT),
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
                };
              }),
              (t.prototype.dataToUI = function () {
                return (
                  this.newNotifications.preUI(),
                  {
                    isLoaded: !this.isLoading,
                    settings: this.settings,
                    resources: this.resources.dataToUI(),
                    personage: this.personage.dataToUI(),
                    learning: this.learning.dataToUI(),
                    statistics: this.statistics.dataToUI(),
                    newNotifications: this.newNotifications.dataToUI(),
                    city: this.city.dataToUI(),
                    construction: this.construction.dataToUI(),
                  }
                );
              }),
              (t.prototype.purchaseMax = function () {}),
              (t.prototype.regenerateCache = function () {
                this.learning.regenerateCache(),
                  this.city.regenerateCache(),
                  this.construction.regenerateCache();
              }),
              t
            );
          })(s),
          Vi = zi.getInstance();
        self.addEventListener("message", function (e) {
          var t = e.data;
          console.log("send to worker: ", t),
            Vi.workDispatcher.handleInput(t.type, t.payload);
        });
      },
    },
    r = {};
  function i(e) {
    var t = r[e];
    if (void 0 !== t) return t.exports;
    var a = (r[e] = { exports: {} });
    return n[e](a, a.exports, i), a.exports;
  }
  (i.m = n),
    (i.x = () => {
      var e = i.O(void 0, [482], () => i(819));
      return i.O(e);
    }),
    (e = []),
    (i.O = (t, n, r, a) => {
      if (!n) {
        var o = 1 / 0;
        for (l = 0; l < e.length; l++) {
          for (var [n, r, a] = e[l], u = !0, s = 0; s < n.length; s++)
            (!1 & a || o >= a) && Object.keys(i.O).every((e) => i.O[e](n[s]))
              ? n.splice(s--, 1)
              : ((u = !1), a < o && (o = a));
          if (u) {
            e.splice(l--, 1);
            var c = r();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      a = a || 0;
      for (var l = e.length; l > 0 && e[l - 1][2] > a; l--) e[l] = e[l - 1];
      e[l] = [n, r, a];
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
      var e = { 819: 1 };
      i.f.i = (t, n) => {
        e[t] || importScripts(i.p + i.u(t));
      };
      var t = (self.webpackChunkidlemancery2 =
          self.webpackChunkidlemancery2 || []),
        n = t.push.bind(t);
      t.push = (t) => {
        var [r, a, o] = t;
        for (var u in a) i.o(a, u) && (i.m[u] = a[u]);
        for (o && o(i); r.length; ) e[r.pop()] = 1;
        n(t);
      };
    })(),
    (t = i.x),
    (i.x = () => i.e(482).then(t)),
    i.x();
})();
