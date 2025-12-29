# ZenMode GP

Dear Zen practitioner,

"Zen is not some kind of excitement, but concentration on our usual everyday routine." — *Shunryu Suzuki*

Greetings, I have created this extension, so I wont be distracted by anything else while reading. I hope you find it useful. 

Best regards,
Ostenjap

---

## Technical Documentation

**ZenMode GP** is a Chrome Extension designed to declutter the user interface on Grok-related platforms (x.com, x.ai, etc.), providing a "Zen" reading and interaction experience.

### How It Works

The extension consists of four main components interacting together:

#### 1. `manifest.json` (The Blueprint)
Defines the extension's metadata, permissions, and structure.
- **Permissions**: Uses `activeTab` to interact with the current page and `scripting` for execution.
- **Content Scripts**: Instructs the browser to load `content.js` on specific domains (`x.com`, `x.ai`, `twitter.com`).
- **Action**: Sets up the `popup.html` as the interactive menu when the extension icon is clicked.

#### 2. `popup.html` & `popup.js` (The Interface)
This is the controller for the user.
- **Trigger**: When you click "Activate" in the popup, `popup.js` sends a message specifically to the active tab using `chrome.tabs.sendMessage`.
- **Feedback**: The button updates to "Activated!" visually to confirm the command was sent.

#### 3. `content.js` (The Engine)
This script runs directly in the context of the webpage.
- **Listener**: It waits for the `CLEAN_PAGE` message from the popup.
- **Cleanup Logic**:
    - Targets specific CSS selectors (e.g., headers with Tailwind grid classes and Table of Contents lists).
    - Sets their `display` style to `none`.
- **Persistence**: Once activated, it runs an `setInterval` every 2 seconds. This ensures that even if the website dynamically re-renders or updates its content as you scroll, the distractions stay hidden.

#### 4. Assets
- **Icons**: Custom branding (`zen16.png`, `zen48.png`, `zen128.png`) displayed in the browser toolbar and extension management page.

### Installation for Development
1. Clone this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (top right).
4. Click **Load unpacked** and select the folder containing these files.

---
*Created by [ostenjap](https://github.com/ostenjap)*
