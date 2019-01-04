# Stage 1
 FROM microsoft/dotnet:2.1-sdk AS build-env 
 WORKDIR /app

 # caches restore result by copying csproj file separately
 COPY *.csproj ./
 RUN dotnet restore

 # copies the rest of your code
 COPY . ./

 
 RUN dotnet build
 RUN dotnet publish -c Release -o out

 # Stage 2
 FROM microsoft/dotnet:2.1-aspnetcore-runtime AS runtime
 WORKDIR /app
 COPY --from=build-env /app/out .
 EXPOSE 80/tcp
 ENTRYPOINT ["dotnet", "productsapi.dll"]
