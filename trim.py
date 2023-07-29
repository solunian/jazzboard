import librosa
import librosa.display
import matplotlib.pyplot as plt
import numpy as np
from soundfile import SoundFile
import os

def remove_silence(input_file, output_file, threshold_db=-50, plot=False):
    # Load the audio file
    y, sr = librosa.load(input_file)

    # Compute the Short Time Fourier Transform (STFT)
    stft = librosa.stft(y)

    # Calculate the magnitude spectrogram
    mag_spectrogram = np.abs(stft)

    # Convert amplitude to decibels (dB)
    log_mag_spectrogram = librosa.amplitude_to_db(mag_spectrogram)

    # Find the frame index where the energy is greater than the threshold
    frame_idx = np.where(log_mag_spectrogram.max(axis=0) > threshold_db)[0][0]

    # Convert the frame index to time in seconds
    start_time = librosa.frames_to_time(frame_idx)
    duration = 10 # exclusive

    # Trim the audio from the calculated start time
    trimmed_audio = y[int(start_time * sr):int(start_time * sr) + int(duration * sr)]

    # Save the trimmed audio to a new file
    with SoundFile(output_file, mode='w', samplerate=sr, channels=1, subtype='PCM_24') as f:
        f.write(trimmed_audio)

    if plot:
        # Display the spectrogram for visualization
        plt.figure(figsize=(10, 4))
        librosa.display.specshow(log_mag_spectrogram, sr=sr, x_axis='time', y_axis='hz')
        # plt.colorbar(format='%+2.0f dB')
        plt.title('Spectrogram')
        plt.xlabel('Time (s)')
        plt.ylabel('Frequency (Hz)')
        plt.tight_layout()
        plt.show()

# Example usage
# input_wav_file = './interface/static/edited-sounds/A4.wav'
# output_wav_file = './interface/static/new_sounds/output_audio.wav'
# remove_silence(input_wav_file, output_wav_file, threshold_db=10, plot=True)


for path in os.listdir("./interface/static/edited-sounds/"):
    input_wav_file = f'./interface/static/edited-sounds/{path}'
    output_wav_file = f'./interface/static/new-sounds/{path}'
    remove_silence(input_wav_file, output_wav_file, threshold_db=9, plot=False)
    print(f"{path} written")