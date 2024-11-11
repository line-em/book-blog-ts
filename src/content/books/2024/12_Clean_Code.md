---
title: 'Clean Code'
author: 'Robert Cecil Martin'
year: '2024'
month: 'June'
score: 4
image: './images/cleancode.jpg'
genre: [ 'Coding',  'Non Fiction', 'Fundamentals' ]
---

# What is Clean Code

Clean code is simple, readable and tested. It is made with care and
it's in a constant state of improvement/refactoring. It should also be
SOLID.

## General Quality / Improvements

*Boy Scout Rule: Leave it better than when you started.*

**Code that “works” is not always “done.”** If a coder’s job is to
produce a product that solves a problem, should it matter how it
solves the problem? Yes. **Software done well benefits everyone in the
long run** — clients, users, companies, and coders. Code that is
messy, rushed, or “good enough” is code with an eye on short-term
returns.

> I could list all of the qualities that I notice in clean code, but
> there is one overarching quality that leads to all of them. **Clean
code always looks like it was written by someone who cares.** There is
> nothing obvious that you can do to make it better. All of those things
> were thought about by the code’s author, and if you try to imagine
> improvements, you’re led back to where you are, sitting in
> appreciation of the code someone left for you—code left by someone who
> cares deeply about the craft.
> - Michael Feathers, on Clean Code.

### Improvements > SRP

> **The problem is that too many of us think that we are done once the
program works.** We fail to switch to the other concern of
> organization and cleanliness. We move on to the next problem rather
> than going back and breaking the overstuffed classes into decoupled
> units with single responsibilities.

## SRP

> We should also be able to write a brief description of the class in
> about 25 words, without using the words “if,” “and,” “or,” or “but.”
> How would we describe the SuperDashboard?
> “The SuperDashboard provides access to the component that last held
> the focus, and it also allows us to track the version and build
> numbers.” The first “and” is a hint that SuperDashboard has too many
> responsibilities.

> The Single Responsibility Principle (SRP) states that a class or
> module should have one, and only one, reason to change. This principle
> gives us both a definition of responsibility, and a guidelines for
> class size. **Classes should have one responsibility—one reason to
change.**

## Open Close Principle / Isolating from Change

> We want to structure our systems so that we muck with as little as
> possible when we update them with new or changed features. In an ideal
> system, we incorporate new features by extending the system, not by
> making modifications to existing code.
> Needs will change, therefore code will change. We learned in OO 101
> that there are concrete classes, which contain implementation
> details (code), and abstract classes, which represent concepts only. *
*A client class depending upon concrete details is at risk when those
details change. We can introduce interfaces and abstract classes to
help isolate the impact of those details.**

## Cohesion

> Classes should have a small number of instance variables. Each of
> the methods of a class should manipulate one or more of those
> variables. In general the more variables a method manipulates the more
> cohesive that method is to its class. A class in which each variable
> is used by each method is maximally cohesive.
> In general it is neither advisable nor possible to create such
> maximally cohesive classes; on the other hand, we would like cohesion
> to be high. When cohesion is high, it means that the methods and
> variables of the class are co-dependent and hang together as a logical
> whole.

## Law of Demeter

> "The Law of Demeter - There is a well-known heuristic called the Law
> of Demeter that says a module should not know about the innards of the
> objects it manipulates. As we saw in the last section, objects hide
> their data and expose operations. This means that an object should not
> expose its internal structure through accessors because to do so is to
> expose, rather than to hide, its internal structure.”
> Classes should have a small number of instance variables. Each of
> the methods of a class should manipulate one or more of those
> variables. In general the more variables a method manipulates the more
> cohesive that method is to its class. A class in which each variable
> is used by each method is maximally cohesive.
> In general it is neither advisable nor possible to create such
> maximally cohesive classes; on the other hand, we would like cohesion
> to be high. When cohesion is high, it means that the methods and
> variables of the class are co-dependent and hang together as a logical
> whole.

## Comments

> “Keep in mind, however, that the only truly good comment is the
> comment you found a way not to write.”

## Functions

> "Command Query Separation - Functions should either do something or
> answer something, but not both. Either your function should change the
> state of an object, or it should return some information about that
> object. Doing both often leads to confusion.”
> “Functions should do one thing. Error handing is one thing. Thus, a
> function that handles errors should do nothing else.”


> Links
> - https://archive.ph/bFbD4
> - https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29
> - Resumo do
    Moco: https://www.evernote.com/shard/s614/client/snv?isnewsnv=true&noteGuid=98723302-0e8d-513a-14b7-73d64907a0e2&noteKey=BzQ0nUwCwsQABUwyNof-ZQAo6ru4oYxUBr9ZKHP1OBrS9_-gEW2my35a1Q&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs614%2Fsh%2F98723302-0e8d-513a-14b7-73d64907a0e2%2FBzQ0nUwCwsQABUwyNof-ZQAo6ru4oYxUBr9ZKHP1OBrS9_-gEW2my35a1Q&title=Clean%2BCode%2BBook
