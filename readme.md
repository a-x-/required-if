// Excuxe my beginner's English.

# Requider-If

The HTML form elements properties improve.
Idea: make conditional dynamic required elements instead of static required elements only.

For example: there are 2-rirectional radio switcher (Delivery type: ⑴pickup; ⑵EMS post) and 4 fields for 2th radio.

![Form example](/required-if-example.png)

I want in this sitation have the 4 fields are required if «delivery type» is a «EMS post».

# Usage

```html
<label>
  <input type="radio" name="delivery_via" value="pickup">
  <span>Pickup</span>
</label>

<label>
  <input type="radio" name="delivery_via" value="ems" id="input-delivery-via-ems" checked>
  <span>EMS post</span>
</label>

<input type="text" name="address[city]" placeholder="Город" class="ems-calc"
data-required="if #input-delivery-via-ems has [checked]" >
```

Attention on `data-required="if #input-delivery-via-ems has [checked]"` attribute.

# Dependencies

There are noting.
<!--* [a-x-/object-assign](https://github.com/a-x-/object-assign) — ES6 Object.assign for browsers (fork).-->

# Status

This is under active development stage **(not production ready)**.


| **Idea** | Alpha | Beta | RC | Production |
|:--------:|:-----:|:----:|:--:|:----------:|
|  **Ok**  |Pending|  —   |  — |      —     |

# License

All under MIT license.

# Contribution

You're welcome!
I watch github issues and mailbox (me@invntrm.ru).

English typo-fixes are welcome too.
