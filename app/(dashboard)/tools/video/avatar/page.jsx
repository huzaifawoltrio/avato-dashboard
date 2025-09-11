"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  User,
  Mic,
  Settings,
  Video,
  Download,
  Upload,
  Check,
  ChevronLeft,
  ChevronRight,
  X,
  Play,
  Loader2,
  Camera,
  Star,
  Sparkles,
} from "lucide-react";

const AvatarVideoGenerator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [uploadedPhoto, setUploadedPhoto] = useState(null);
  const [uploadedAudio, setUploadedAudio] = useState(null);
  const [avatarStyle, setAvatarStyle] = useState("professional");
  const [enhancementOptions, setEnhancementOptions] = useState({
    aiEnhancement: true,
    premiumQuality: false,
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const photoInputRef = useRef(null);
  const audioInputRef = useRef(null);

  const steps = [
    {
      id: 1,
      title: "Upload Photo",
      icon: User,
      description: "Add your profile image",
    },
    {
      id: 2,
      title: "Add Voice",
      icon: Mic,
      description: "Upload audio recording",
    },
    {
      id: 3,
      title: "Customize",
      icon: Settings,
      description: "Choose avatar style",
    },
    { id: 4, title: "Generate", icon: Video, description: "Create your video" },
    {
      id: 5,
      title: "Download",
      icon: Download,
      description: "Get your result",
    },
  ];

  const avatarStyles = [
    {
      id: "professional",
      name: "Professional",
      description: "Business-ready avatar for corporate use",
    },
    {
      id: "casual",
      name: "Casual",
      description: "Relaxed and friendly appearance",
    },
    {
      id: "animated",
      name: "Animated",
      description: "Cartoon-style avatar with personality",
    },
    {
      id: "realistic",
      name: "Ultra Realistic",
      description: "Photorealistic human-like avatar",
    },
  ];

  const handleFileUpload = (file, type) => {
    if (type === "photo") {
      if (file.size > 10 * 1024 * 1024) {
        alert("Photo file size must be less than 10MB");
        return;
      }
      if (!file.type.match(/image\/(jpeg|jpg|png)/)) {
        alert("Please upload a JPG or PNG image");
        return;
      }
      setUploadedPhoto(file);
      if (!completedSteps.includes(1)) {
        setCompletedSteps([...completedSteps, 1]);
      }
    } else if (type === "audio") {
      if (file.size > 50 * 1024 * 1024) {
        alert("Audio file size must be less than 50MB");
        return;
      }
      if (!file.type.match(/audio\/(mp3|wav|mpeg)/)) {
        alert("Please upload an MP3 or WAV audio file");
        return;
      }
      setUploadedAudio(file);
      if (!completedSteps.includes(2)) {
        setCompletedSteps([...completedSteps, 2]);
      }
    }
  };

  const handleDrop = (e, type) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileUpload(files[0], type);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const nextStep = () => {
    if (currentStep < 5) {
      if (currentStep === 3 && !completedSteps.includes(3)) {
        setCompletedSteps([...completedSteps, 3]);
      }
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const startGeneration = () => {
    setIsGenerating(true);
    setGenerationProgress(0);

    // Simulate video generation progress
    const interval = setInterval(() => {
      setGenerationProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          setIsComplete(true);
          if (!completedSteps.includes(4)) {
            setCompletedSteps([...completedSteps, 4]);
          }
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return uploadedPhoto !== null;
      case 2:
        return uploadedAudio !== null;
      case 3:
        return true;
      case 4:
        return !isGenerating;
      case 5:
        return true;
      default:
        return false;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="text-center">
            <div
              className="border-2 border-dashed border-gray-300 rounded-xl p-12 hover:border-primary transition-colors cursor-pointer"
              onDrop={(e) => handleDrop(e, "photo")}
              onDragOver={handleDragOver}
              onClick={() => photoInputRef.current?.click()}
            >
              {uploadedPhoto ? (
                <div className="space-y-4">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Check className="h-10 w-10 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-heading">
                      {uploadedPhoto.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {formatFileSize(uploadedPhoto.size)}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setUploadedPhoto(null);
                      setCompletedSteps(completedSteps.filter((s) => s !== 1));
                    }}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Remove file
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                    <User className="h-10 w-10 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-heading mb-2">
                      Upload Your Photo
                    </p>
                    <p className="text-gray-500">
                      Drag and drop your image here, or click to browse
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      Supports JPG, PNG (max 10MB)
                    </p>
                  </div>
                </div>
              )}
            </div>
            <input
              ref={photoInputRef}
              type="file"
              accept="image/jpeg,image/jpg,image/png"
              onChange={(e) =>
                e.target.files[0] &&
                handleFileUpload(e.target.files[0], "photo")
              }
              className="hidden"
            />
          </div>
        );

      case 2:
        return (
          <div className="text-center">
            <div
              className="border-2 border-dashed border-gray-300 rounded-xl p-12 hover:border-primary transition-colors cursor-pointer"
              onDrop={(e) => handleDrop(e, "audio")}
              onDragOver={handleDragOver}
              onClick={() => audioInputRef.current?.click()}
            >
              {uploadedAudio ? (
                <div className="space-y-4">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Check className="h-10 w-10 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-heading">
                      {uploadedAudio.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {formatFileSize(uploadedAudio.size)}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setUploadedAudio(null);
                      setCompletedSteps(completedSteps.filter((s) => s !== 2));
                    }}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Remove file
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                    <Mic className="h-10 w-10 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-heading mb-2">
                      Upload Voice Recording
                    </p>
                    <p className="text-gray-500">
                      Drag and drop your audio file here, or click to browse
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      Supports MP3, WAV (max 50MB)
                    </p>
                  </div>
                </div>
              )}
            </div>
            <input
              ref={audioInputRef}
              type="file"
              accept="audio/mp3,audio/wav,audio/mpeg"
              onChange={(e) =>
                e.target.files[0] &&
                handleFileUpload(e.target.files[0], "audio")
              }
              className="hidden"
            />
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-heading mb-4">
                Choose Avatar Style
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {avatarStyles.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setAvatarStyle(style.id)}
                    className={`p-4 border-2 rounded-xl text-left transition-all ${
                      avatarStyle === style.id
                        ? "border-primary bg-orange-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center mb-2">
                      <Camera className="h-5 w-5 text-primary mr-2" />
                      <span className="font-medium text-heading">
                        {style.name}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{style.description}</p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-heading mb-4">
                Enhancement Options
              </h3>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={enhancementOptions.aiEnhancement}
                    onChange={(e) =>
                      setEnhancementOptions({
                        ...enhancementOptions,
                        aiEnhancement: e.target.checked,
                      })
                    }
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <div className="flex items-center">
                    <Sparkles className="h-4 w-4 text-primary mr-2" />
                    <div>
                      <span className="font-medium text-heading">
                        AI Enhancement
                      </span>
                      <p className="text-sm text-gray-600">
                        Improve photo quality automatically
                      </p>
                    </div>
                  </div>
                </label>

                <label className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={enhancementOptions.premiumQuality}
                    onChange={(e) =>
                      setEnhancementOptions({
                        ...enhancementOptions,
                        premiumQuality: e.target.checked,
                      })
                    }
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-secondary mr-2" />
                    <div>
                      <span className="font-medium text-heading">
                        Premium Quality
                      </span>
                      <p className="text-sm text-gray-600">
                        4K resolution and enhanced details
                      </p>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-center space-y-6">
            {!isGenerating && !isComplete && (
              <div>
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-heading mb-2">
                  Ready to Generate
                </h3>
                <p className="text-gray-600 mb-6">
                  Review your settings and start generating your avatar video
                </p>

                <div className="bg-gray-50 rounded-lg p-4 text-left mb-6">
                  <h4 className="font-medium text-heading mb-3">
                    Generation Summary:
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Photo:</span>
                      <span className="text-green-600">
                        ✓ {uploadedPhoto?.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Audio:</span>
                      <span className="text-green-600">
                        ✓ {uploadedAudio?.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Style:</span>
                      <span className="capitalize">{avatarStyle}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Quality:</span>
                      <span>
                        {enhancementOptions.premiumQuality
                          ? "Premium 4K"
                          : "Standard HD"}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={startGeneration}
                  className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
                >
                  Generate Avatar Video
                </button>
              </div>
            )}

            {isGenerating && (
              <div>
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Loader2 className="h-10 w-10 text-white animate-spin" />
                </div>
                <h3 className="text-xl font-semibold text-heading mb-2">
                  Generating Your Video
                </h3>
                <p className="text-gray-600 mb-6">
                  Please don't close this window. This may take 3-5 minutes.
                </p>

                <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                  <div
                    className="bg-primary h-3 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(generationProgress, 100)}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500">
                  {Math.round(generationProgress)}% complete
                </p>
              </div>
            )}

            {isComplete && (
              <div>
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-heading mb-2">
                  Video Generated!
                </h3>
                <p className="text-gray-600">
                  Your avatar video is ready for download.
                </p>
              </div>
            )}
          </div>
        );

      case 5:
        return (
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto">
              <Download className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-heading">
              Your Avatar Video is Ready!
            </h3>

            {/* Video Preview */}
            <div className="bg-black rounded-xl aspect-video max-w-md mx-auto relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                  <Play className="h-8 w-8 text-white ml-1" />
                </button>
              </div>
            </div>

            {/* Video Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto text-center">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm text-gray-600">Duration</p>
                <p className="font-semibold text-heading">1:23</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm text-gray-600">Resolution</p>
                <p className="font-semibold text-heading">1080p</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm text-gray-600">Size</p>
                <p className="font-semibold text-heading">15.2 MB</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-orange-600 transition-colors">
                Download Video
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Share Video
              </button>
              <button
                onClick={() => {
                  setCurrentStep(1);
                  setCompletedSteps([]);
                  setUploadedPhoto(null);
                  setPhotoPreview(null);
                  setUploadedAudio(null);
                  setIsComplete(false);
                  setGenerationProgress(0);
                  setIsProcessing(false);
                }}
                className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-orange-50 transition-colors"
              >
                Create Another
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-raleway font-bold text-heading mb-2">
            Avatar Video Generator
          </h1>
          <p className="text-body">
            Transform your photos into engaging avatar videos with AI
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4 mb-4">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              const isCompleted = completedSteps.includes(step.id);
              const isCurrent = currentStep === step.id;

              return (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`
                    relative flex items-center justify-center w-12 h-12 rounded-full transition-colors
                    ${
                      isCompleted
                        ? "bg-green-500 text-white"
                        : isCurrent
                        ? "bg-primary text-white"
                        : "bg-gray-200 text-gray-400"
                    }
                  `}
                  >
                    {isCompleted ? (
                      <Check className="h-6 w-6" />
                    ) : (
                      <StepIcon className="h-6 w-6" />
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-8 h-0.5 ml-4 transition-colors ${
                        completedSteps.includes(steps[index + 1].id)
                          ? "bg-green-500"
                          : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <h2 className="text-xl font-semibold text-heading mb-1">
              {steps.find((s) => s.id === currentStep)?.title}
            </h2>
            <p className="text-gray-600">
              {steps.find((s) => s.id === currentStep)?.description}
            </p>
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
          {renderStepContent()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-5 w-5 mr-2" />
            Previous
          </button>

          <button
            onClick={
              currentStep === 4 && !isComplete ? startGeneration : nextStep
            }
            disabled={!canProceed() || currentStep === 5}
            className="flex items-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {currentStep === 4 && !isComplete ? (
              "Generate Video"
            ) : currentStep === 5 ? (
              "Complete"
            ) : (
              <>
                Next
                <ChevronRight className="h-5 w-5 ml-2" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvatarVideoGenerator;
