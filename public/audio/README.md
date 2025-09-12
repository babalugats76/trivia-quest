# Audio Assets

Available theme music files:

- `dramatic-action.mp3` - Dramatic action thrilling game music (24 seconds)
- `put-on-armor.mp3` - Heroic epic cinematic music (30 seconds)

To change the game theme, update the audio path in `src/context/GameContext.jsx`:

```javascript
const audio = useAudio("/audio/dramatic-action.mp3"); // or put-on-armor.mp3
```

The music starts when the player clicks "Start Adventure" and can be toggled with the music button in the HUD.
