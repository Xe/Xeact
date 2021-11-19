import { g, r } from "./xeact.js";

r(() => {
    const shuf = (arr) => {
        var rand, temp, i;

        for (i = arr.length - 1; i > 0; i -= 1) {
            rand = Math.floor((i + 1) * Math.random());
            temp = arr[rand];
            arr[rand] = arr[i];
            arr[i] = temp;
        }
        return arr;
    };

    const testimonials = shuf([
        "It Works™",
        "It shouldn't crash until the heat death of the universe",
        "A necessary addition to your tech stack",
        "Completely revolutionized our deployment cycle",
        "Our engineering team was blown away; versatile, powerful, constantly updated. It's everything we wanted and more",
        "Daunting at first, but works right out of the box, with great documentation and amazing support",
        "With a small footprint and big impact, this is a definite game changer",
        "Something something kill child before killing parent joke",
        "Made with Rust",
        "Reliable, Secure, Good performance, Easy to use UI/UX, High throughput",
        "It doesn't stalk me as much as the competitors!",
        "this software created synergy i didn't think was possible",
        "easy to use and it respects your privacy",
        "this software's cloud backend has only been hacked twice this year",
        "please, they have my wife and kids; i want to see them again",
        "The third best femtoframework available on the market",
        "simultaneously elegant and hideous",
        "You will regret this"
    ]);

    let i = 0;

    const update = () => {
        i++;
        i = i % testimonials.length;
        g("testimonials").innerText = testimonials[i];
    };

    update();
    setInterval(update, 3000);
});
