# Tech-Challenge

```
pnpm i --frozen-lockfile
pnpm dev
```

## Why MUI?

Because of development speed, ease of use, popularity, and following a well-known standard.

# Why `useState` hook?

If it was a real ECommerce website I would use RTK -- Redux toolkit. For the time being I just used react hooks since it was sufficient. I know we can say almost the same thing about MUI but IMO MUI is more like tailwind or bootstrap. I think we can save time by using MUI and focusing on developing the product. Then if we faced performance issues we can do something about it.

Notice: I think it may seems a bit odd to compare a UI design tool and Redux which is a state management tool :sweat_smile:, but anyhow I did :joy:.

# Why no Unit test?

Had not enough time to write test, at least not at the defined time box. So basically I just did it after ward. you can ignore them.

## Initial state of my mind

I am not sure about the way I did test my component. I sincerely appreciate it if you could share your expertise with me. So what I did basically is that I check if the MUI class is in the class attribute or not, like this:

```ts
render(<Projects />);
const button = screen.getAllByRole('button')[0];
fireEvent.click(button);
expect(
  screen
    .getAllByRole('button')
    .find((btn) =>
      btn.classList.contains('MuiButton-containedError'),
    ),
).toBeTruthy();
```

I know I could change the button text instead of soly the color but let's ignore that part, because now I am more interested in getting to know how should I approach testing my react app with react testing library.

In the official doc for react testing library I found a youtube video and in that video he told me to care about what user sees but now my test is tied up to my implementation and if I change my implementation my test will fail too which is not what I want.
<https://testing-library.com/docs/react-testing-library/intro/>
<https://youtu.be/JKOwJUM4_RM?t=305>

I mean maybe later I decided to use tailwind instead of MUI and refactor the whole app, then all the tests who are relying on MUI classes will tear apart.

Any idea on how I can write more UI design tool agnostic tests, I mean the test should soly care about the fact that when a user click on the button the button's background color turns to red and if they click again on the same button its background color changes to blue. That's all that matters\*.

Here is the github repo: <https://github.com/kasir-barati/coding-challenge>

\* The thing is that even with that fact in mind I still need to know the color code or color name, So basically I think that point make no difference in the result. Besides moving away from MUI to something like tailwind is not a decision you would make overnight. All in all I think my approach can be improved regardless of all I wrote.

TODO: Am I testing the right way? or should I test useState and content myself to that BTW I am not convinced that this is a bad test since I do not care about states here, I mean I wanna test my react app state somewhere else not here, At least that's how I think ATM.

https://stackoverflow.com/questions/53389956/how-to-test-a-classname-with-the-jest-and-react-testing-library

## Conclusion

1. Do not test states, instead test what use sees -- [ref](https://stackoverflow.com/a/60109830/8784518).
2. Use more specific conditions to select the right element -- e.x. `btn.innerHTML.includes('PURCHASED')`
3. You cannot avoid using MUI classes since we wanna check [what user is seeing when they click on button](https://youtu.be/JKOwJUM4_RM?t=305).
